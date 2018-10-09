const unified = require('unified');
const parse = require('remark-parse');
const toVdom = require('../index');
const renderer = require('remark-preact-renderer');
const { h } = require('preact');

const processor = unified()
    .use(parse, {})
    .use(toVdom, {
        // h: h,
        renderer: renderer
    });


let mdast = processor.parse('# h1');
let vdom = processor().data('h', h).runSync(mdast);
console.log(vdom);
