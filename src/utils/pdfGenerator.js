import jsPDF from 'jspdf';

export const downloadChatAsPDF = (chatContent, topicName) => {
  const doc = new jsPDF();
  const pageHeight = doc.internal.pageSize.height;
  const margin = 15;
  let cursorY = 20;

  doc.setFontSize(18);
  doc.setTextColor(13, 148, 136); // Primary Color (Teal)
  doc.text(`Lab Master Notes: ${topicName}`, margin, cursorY);
  
  cursorY += 10;
  doc.setFontSize(12);
  doc.setTextColor(40, 40, 40);

  const lines = doc.splitTextToSize(chatContent, 180);

  lines.forEach((line) => {
    if (cursorY > pageHeight - margin) {
      doc.addPage();
      cursorY = margin + 5;
    }
    
    // Check if line is a header (basic markdown handling)
    if (line.includes('**') || line.startsWith('###')) {
      doc.setFont("helvetica", "bold");
      const cleanLine = line.replace(/\*\*/g, '').replace(/### /g, '');
      doc.text(cleanLine, margin, cursorY);
      doc.setFont("helvetica", "normal");
    } else {
      doc.text(line, margin, cursorY);
    }
    cursorY += 7;
  });

  const fileName = `${topicName.replace(/\s+/g, '_')}_Notes.pdf`;
  doc.save(fileName);
};
