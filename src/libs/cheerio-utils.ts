import * as cheerio from 'cheerio';
import hljs from 'highlight.js'
import 'highlight.js/styles/hybrid.css'

export const getHighlightBody = (body: string) => {
    const $ = cheerio.load(body);
    $("pre code").each((_, elm) => {
        const result = hljs.highlightAuto($(elm).text());
        $(elm).html(result.value);
        $(elm).addClass("hljs");
    });
    return $.html()
}

export const getToc = (body: string) => {
    const $toc = cheerio.load(body);
    const headings = $toc("h1,h2,h3").toArray();
    const toc = headings.map(data => ({
        /**@ts-ignore */
        text: data.children[0].data,
        id: data.attribs.id,
        name: data.name,
    }));
    return toc
}