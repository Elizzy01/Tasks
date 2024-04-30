const https = require('https');
const fs = require('fs');
https.get('https://en.m.wikipedia.org/wiki/Tunde_Onakoya', (response) => {
  console.log('statusCode:', response.statusCode);
  console.log('headers:', response.headers);

  const filePath = './public/wikipedia.html';
  const writeStream = fs.createWriteStream(filePath);

  response.on('data', (data) => {
    writeStream.write(data);
  });

  response.on('end', () => {
    writeStream.end();
    console.log('Response ended');
  });

  response.on('close', () => {
    console.log('Connection closed');
  });

  response.on('complete', () => {
    console.log('Response complete');
  });

  response.on('error', (error) => {
    console.log(error);
  });
}).on('error', (error) => {
  console.log(error);
});