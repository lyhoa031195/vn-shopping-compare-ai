import { mkdir, copyFile, readFile, writeFile } from 'node:fs/promises';

await mkdir('dist/src', { recursive: true });
await copyFile('src/main.tsx', 'dist/src/main.tsx');
const html = await readFile('index.html', 'utf8');
await writeFile('dist/index.html', html);
console.log('Built VN Shopping Compare AI to dist/');
