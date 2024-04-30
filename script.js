const os = require('os');
const fs = require('fs');

const markdownFile = './public/os-info.md';

const arch = os.arch();
const uptime = os.uptime();
const uptimeString = `${Math.floor(uptime / 86400)} days, ${Math.floor((uptime % 86400) / 3600)} hours, ${Math.floor((uptime % 3600))} seconds`;
const homedir = os.homedir();

const markdownContent = `
# OS Information

## Architecture
${arch}

## Uptime
${uptimeString}

## Home Directory
${homedir}
`;

fs.writeFileSync(markdownFile, markdownContent);