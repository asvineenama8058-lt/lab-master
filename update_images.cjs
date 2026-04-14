const fs = require('fs');
const path = require('path');
const https = require('https');

const dataDir = path.join(__dirname, 'src', 'data');
const FALLBACK_IMAGE = 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Microscope_optical%2C_2020.jpg/600px-Microscope_optical%2C_2020.jpg';

async function fetchWikiImage(query) {
    // If the query is vague, ensure we look for medical/lab topics
    const cleanQuery = query.replace(/\+/g, ' ');
    const searchString = encodeURIComponent(`${cleanQuery} laboratory medical`);
    
    const url = `https://en.wikipedia.org/w/api.php?action=query&prop=pageimages&format=json&pithumbsize=600&generator=search&gsrsearch=${searchString}&gsrlimit=3`;
    
    return new Promise((resolve) => {
        https.get(url, { headers: { 'User-Agent': 'LabMasterBot/1.0' } }, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => {
                try {
                    const parsed = JSON.parse(data);
                    if (parsed.query && parsed.query.pages) {
                        const pages = parsed.query.pages;
                        // Find the first page that actually has a thumbnail
                        for (const id in pages) {
                            if (pages[id].thumbnail && pages[id].thumbnail.source) {
                                return resolve(pages[id].thumbnail.source);
                            }
                        }
                    }
                    resolve(null);
                } catch (e) {
                    resolve(null);
                }
            });
        }).on('error', () => resolve(null));
    });
}

function processContent(content, index) {
  return new Promise(async (resolve) => {
    // Regex matches the placehold.co structure we added
    const regex = /'https:\/\/placehold\.co\/600x400\?text=([^']+)'/g;
    let match;
    const matches = [];
    while ((match = regex.exec(content)) !== null) {
      matches.push({ full: match[0], text: match[1] });
    }

    let updatedContent = content;
    
    for (const m of matches) {
        let imageUrl = await fetchWikiImage(m.text);
        
        // If not found, try without 'laboratory medical' keywords
        if (!imageUrl) {
            imageUrl = await fetchWikiImage(m.text.replace(' laboratory medical', ''));
        }

        // If STILL not found, use a fallback image
        if (!imageUrl) {
            imageUrl = FALLBACK_IMAGE;
        }

        console.log(`[File ${index}] Rep: ${decodeURIComponent(m.text)} -> ${imageUrl}`);
        updatedContent = updatedContent.replace(m.full, `'${imageUrl}'`);
    }
    
    resolve(updatedContent);
  });
}

async function start() {
    console.log('Starting image synchronization...');
    const files = fs.readdirSync(dataDir).filter(f => f.endsWith('.js') && f !== 'mockData.js');
    
    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const filePath = path.join(dataDir, file);
        let content = fs.readFileSync(filePath, 'utf8');
        
        console.log(`Processing ${file}...`);
        const updated = await processContent(content, i);
        fs.writeFileSync(filePath, updated, 'utf8');
    }
    console.log('Finished updating all datasets!');
}

start();
