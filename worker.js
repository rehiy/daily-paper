// worker.js

import indexHtml from './static/index.html';
import fontsIndexCss from './static/fonts/index.css';
import xuandongkaishuTtf from './static/fonts/xuandongkaishu.ttf';
import bg11Jpg from './static/images/bg11.jpg';
import bg12Png from './static/images/bg12.png';
import bg21Jpg from './static/images/bg21.jpg';
import bg22Png from './static/images/bg22.png';
import bg31Jpg from './static/images/bg31.jpg';
import bg32Png from './static/images/bg32.png';
import bg41Jpg from './static/images/bg41.jpg';
import bg42Png from './static/images/bg42.png';
import bg51Jpg from './static/images/bg51.jpg';
import bg52Png from './static/images/bg52.png';
import bg61Jpg from './static/images/bg61.jpg';
import bg62Png from './static/images/bg62.png';
import bg71Jpg from './static/images/bg71.jpg';
import bg72Png from './static/images/bg72.png';

addEventListener('fetch', (event) => {
    event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
    const url = new URL(request.url);

    let path = url.pathname;
    if (path === '/') {
        path = '/index.html';
    }

    try {
        const file = await getFileFromPath(path);
        return new Response(file, {
            headers: {
                'Content-Type': getContentType(path),
            },
        });
    } catch (err) {
        return new Response('File not found', { status: 404 });
    }
}

async function getFileFromPath(path) {
    const files = {
        '/index.html': indexHtml,
        '/fonts/index.css': fontsIndexCss,
        '/fonts/xuandongkaishu.ttf': xuandongkaishuTtf,
        '/images/bg11.jpg': bg11Jpg,
        '/images/bg12.png': bg12Png,
        '/images/bg21.jpg': bg21Jpg,
        '/images/bg22.png': bg22Png,
        '/images/bg31.jpg': bg31Jpg,
        '/images/bg32.png': bg32Png,
        '/images/bg41.jpg': bg41Jpg,
        '/images/bg42.png': bg42Png,
        '/images/bg51.jpg': bg51Jpg,
        '/images/bg52.png': bg52Png,
        '/images/bg61.jpg': bg61Jpg,
        '/images/bg62.png': bg62Png,
        '/images/bg71.jpg': bg71Jpg,
        '/images/bg72.png': bg72Png,
    };

    if (files[path]) {
        return files[path];
    } else {
        throw new Error('File not found');
    }
}

function getContentType(path) {
    if (path.endsWith('.html')) {
        return 'text/html'
    }
    if (path.endsWith('.css')) {
        return 'text/css'
    }
    if (path.endsWith('.js')) {
        return 'application/javascript'
    }
    if (path.endsWith('.png')) {
        return 'image/png'
    }
    if (path.endsWith('.jpg') || path.endsWith('.jpeg')) {
        return 'image/jpeg'
    }
    if (path.endsWith('.gif')) {
        return 'image/gif'
    }
    if (path.endsWith('.svg')) {
        return 'image/svg+xml'
    }
    if (path.endsWith('.ico')) {
        return 'image/x-icon'
    }
    if (path.endsWith('.json')) {
        return 'application/json'
    }
    if (path.endsWith('.xml')) {
        return 'application/xml'
    }
    if (path.endsWith('.woff')) {
        return 'application/font-woff'
    }
    if (path.endsWith('.woff2')) {
        return 'application/font-woff2'
    }
    if (path.endsWith('.ttf')) {
        return 'font/ttf'
    }
    if (path.endsWith('.otf')) {
        return 'font/otf'
    }
    return 'text/plain'
}
