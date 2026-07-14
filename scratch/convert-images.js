const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const srcDir = path.join(__dirname, '..', 'public', 'assets', 'new_assets_3');

async function convertImages() {
  try {
    const files = fs.readdirSync(srcDir);
    const jpegFiles = files
      .filter(file => file.toLowerCase().endsWith('.jpg') || file.toLowerCase().endsWith('.jpeg'))
      .sort();

    console.log(`Found ${jpegFiles.length} JPEG files to convert.`);

    for (let i = 0; i < jpegFiles.length; i++) {
      const filename = jpegFiles[i];
      const srcPath = path.join(srcDir, filename);
      const indexStr = String(i + 1).padStart(2, '0');
      const newFilename = `gallery-new-${indexStr}.webp`;
      const destPath = path.join(srcDir, newFilename);

      await sharp(srcPath)
        .webp({ quality: 82, effort: 4 })
        .toFile(destPath);

      console.log(`Converted: ${filename} -> ${newFilename}`);
    }

    console.log('All image conversions completed successfully!');
  } catch (error) {
    console.error('Error during image conversion:', error);
  }
}

convertImages();
