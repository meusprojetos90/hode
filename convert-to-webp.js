import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const dir = './src/assets';

fs.readdirSync(dir).forEach(file => {
  if (file.match(/\.(jpg|jpeg|png)$/i)) {
    const input = path.join(dir, file);
    const output = path.join(dir, file.replace(/\.(jpg|jpeg|png)$/i, '.webp'));
    sharp(input).webp({ quality: 80 }).toFile(output)
      .then(() => {
        console.log(`Converted ${file} to WebP`);
        fs.unlinkSync(input); // remove old file
      })
      .catch(err => console.error(`Error converting ${file}:`, err));
  }
});
