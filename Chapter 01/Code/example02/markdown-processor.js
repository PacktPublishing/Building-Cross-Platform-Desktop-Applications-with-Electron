//import node js modules
const fs = require('fs');
const marked = require('marked');

// read the content of markdown file using fs module
const content = fs.readFileSync('readme.md', 'utf-8');

//transform markdown content into html using marked library
const html = marked(content);

// update the DOM with the transformed html. Even if this is a node context
// we have the access to the browser DOM
document.getElementById('viewer').innerHTML = html;
