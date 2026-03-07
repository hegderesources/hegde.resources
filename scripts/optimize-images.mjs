import sharp from "sharp";
import { readdir, stat, mkdir } from "fs/promises";
import path from "path";

const PRODUCTS_DIR = "src/assets/products";
const HERO_DIR = "src/assets";
const QUALITY = 80;
const MAX_WIDTH = 800; // product images
const HERO_MAX_WIDTH = 1920; // hero images

async function getFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await getFiles(fullPath)));
    } else if (/\.(png|jpe?g)$/i.test(entry.name)) {
      files.push(fullPath);
    }
  }
  return files;
}

async function optimizeImage(filePath, maxWidth) {
  const ext = path.extname(filePath);
  const webpPath = filePath.replace(ext, ".webp");
  
  const info = await stat(filePath);
  const originalKB = Math.round(info.size / 1024);

  await sharp(filePath)
    .resize({ width: maxWidth, withoutEnlargement: true })
    .webp({ quality: QUALITY })
    .toFile(webpPath);

  const newInfo = await stat(webpPath);
  const newKB = Math.round(newInfo.size / 1024);
  const savings = Math.round((1 - newKB / originalKB) * 100);

  console.log(`${path.basename(filePath)} → ${path.basename(webpPath)} | ${originalKB}KB → ${newKB}KB (${savings}% smaller)`);
  return { originalKB, newKB };
}

async function main() {
  console.log("Optimizing product images...\n");
  
  const productFiles = await getFiles(PRODUCTS_DIR);
  let totalOriginal = 0, totalNew = 0;

  for (const file of productFiles) {
    const { originalKB, newKB } = await optimizeImage(file, MAX_WIDTH);
    totalOriginal += originalKB;
    totalNew += newKB;
  }

  // Also optimize hero images
  console.log("\nOptimizing hero images...\n");
  const heroFiles = ["hero-sustainable.jpg", "sustainability-impact.jpg", "product-packaging.jpg", "product-vermicompost.jpg"];
  for (const heroFile of heroFiles) {
    const heroPath = path.join(HERO_DIR, heroFile);
    try {
      const { originalKB, newKB } = await optimizeImage(heroPath, HERO_MAX_WIDTH);
      totalOriginal += originalKB;
      totalNew += newKB;
    } catch (e) {
      console.log(`Skipping ${heroFile}: ${e.message}`);
    }
  }

  console.log(`\n✅ Total: ${Math.round(totalOriginal/1024)}MB → ${Math.round(totalNew/1024)}MB (${Math.round((1 - totalNew/totalOriginal) * 100)}% savings)`);
}

main().catch(console.error);
