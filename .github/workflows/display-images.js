const fs = require('fs');
const cheerio = require('cheerio');

const htmlFilePath = 'path/to/your/html-file.html'; // HTMLファイルのパスを指定
const imageDirectory = 'path/to/your/image-directory'; // 画像が含まれるディレクトリのパスを指定

// HTMLファイルを読み込み、画像を表示する処理を実行
fs.readFile(htmlFilePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading HTML file:', err);
    process.exit(1);
  }

  const $ = cheerio.load(data);
  $('img').each((index, element) => {
    const imgSrc = $(element).attr('src');
    console.log(`<img src="${imageDirectory}/${imgSrc}" alt="${imgSrc}" />`);
  });
});
