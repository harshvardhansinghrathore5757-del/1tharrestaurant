const https = require('https');

https.get('https://www.eazydiner.com', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const matches = data.match(/img[^>]+src="([^">]*logo[^">]*)"/gi) || data.match(/href="([^">]*logo[^">]*)"/gi);
    console.log(matches);
  });
});
