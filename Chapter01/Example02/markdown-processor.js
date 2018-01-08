// import node js modules
const fs = require('fs');
const marked = require('marked');

// Read the content of electron-readme.md file using fs module
const content = fs.readFileSync('electron-readme.md', 'UTF-8');

// Transform markdown file's content into html using marked library
const html = marked(content);

// Update the DOM with the transform html. Even if this is a node context,
// We have the access to the browser DOM
document.getElementById('viewer').innerHTML = html;