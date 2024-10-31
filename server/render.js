// server/render.js
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import path from 'path';
import fs from 'fs';

async function renderPage(pageName) {
    const pagePath = path.resolve(__dirname, '../client/src/pages', pageName, 'page.js');
    
    if (!fs.existsSync(pagePath)) {
        throw new Error("Page not found");
    }

    
    const PageComponent = (await import(pagePath)).default;
    const content = ReactDOMServer.renderToString(<PageComponent/>);


    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${pageName}</title>
            <link rel="stylesheet" href="${pageName}/styles.css">
        </head>
        <body>
            <div id="root">${content}</div>
            <script src="${pageName}/bundle.js" defer></script>
        </body>
        </html>
    `;
}


export { renderPage };