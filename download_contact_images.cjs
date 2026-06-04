const fs = require('fs');
const https = require('https');
const path = require('path');

// Verified Unsplash photo IDs – clear city skyline shots
const images = {
    // Princeton / NJ – daytime urban skyline
    'contact/princeton.jpg': '1486325212027-8081e485255e',
    // Houston – city at dusk
    'contact/houston.jpg': '1559308887-84463bbb49f3',
    // Los Angeles – night skyline
    'contact/los-angeles.jpg': '1534430480872-3498386e7856',
};

const followRedirects = (url, dest, hops = 6) =>
    new Promise((resolve, reject) => {
        const go = (u, n) => {
            https.get(u, res => {
                if ((res.statusCode === 301 || res.statusCode === 302) && res.headers.location && n > 0) {
                    go(res.headers.location, n - 1);
                } else {
                    const f = fs.createWriteStream(dest);
                    res.pipe(f);
                    f.on('finish', () => f.close(resolve));
                    f.on('error', e => { fs.unlink(dest, () => { }); reject(e); });
                }
            }).on('error', e => { fs.unlink(dest, () => { }); reject(e); });
        };
        go(url, hops);
    });

async function main() {
    for (const [file, id] of Object.entries(images)) {
        const dir = path.join(__dirname, 'public', 'img', path.dirname(file));
        if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
        const dest = path.join(__dirname, 'public', 'img', file);
        const url = `https://images.unsplash.com/photo-${id}?q=85&w=1600&auto=format&fit=crop`;
        console.log(`Downloading ${file}…`);
        try {
            await followRedirects(url, dest);
            const size = fs.statSync(dest).size;
            console.log(`  ✓ ${file}  (${(size / 1024).toFixed(0)} KB)`);
        } catch (e) {
            console.error(`  ✗ ${file}:`, e.message);
        }
    }
    console.log('Done.');
}
main();
