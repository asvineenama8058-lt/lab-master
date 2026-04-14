const https = require('https');

function searchWikimedia(query) {
  const url = `https://en.wikipedia.org/w/api.php?action=query&prop=pageimages&format=json&pithumbsize=600&titles=${encodeURIComponent(query)}`;
  
  https.get(url, (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
      const parsed = JSON.parse(data);
      const pages = parsed.query.pages;
      const pageId = Object.keys(pages)[0];
      if (pageId === '-1' || !pages[pageId].thumbnail) {
        console.log(`No image found for: ${query}`);
      } else {
        console.log(`${query} -> ${pages[pageId].thumbnail.source}`);
      }
    });
  }).on('error', err => console.error(err));
}

searchWikimedia('Hemocytometer');
searchWikimedia('Centrifuge');
searchWikimedia('MacConkey_agar');
