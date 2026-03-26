import sharp from "sharp";
import { promises as fs } from "fs";
import path from "path";

const SRC = "/Users/hande/Downloads/Hnd/src/assets";
const DEST_PROJECTS = "/Users/hande/Documents/website/hnd-portfolio/public/images/projects";
const DEST_PROFILE = "/Users/hande/Documents/website/hnd-portfolio/public/images/profile";

// Full hash → [semantic name, dest dir]
const MAP = {
  // Landing thumbnails
  "424e9261d3aed73067a470a7ab9c10d282e167cb": ["avocado-thumb", DEST_PROJECTS],
  "ead7220de8168fd8fcfad194f913b99892bca727": ["glacis-thumb", DEST_PROJECTS],
  "b7610cb6c8cbce4d6867b9486ae34d9c2cd115c1": ["dashboard-thumb", DEST_PROJECTS],
  "22f9ca90e29142bc167d92e9865f7bf1b042224d": ["ikea-thumb", DEST_PROJECTS],
  "b64072ab23792ad2355b375960c10d595462fe54": ["newrequest-thumb", DEST_PROJECTS],
  // Avocado detail
  "02811be46197ee1ef255ae46ce0bb06418ce3126": ["avocado-hero", DEST_PROJECTS],
  "5216ae5c7b379d0f83a7273fe3e9f2000d08db9d": ["avocado-screenshot-1", DEST_PROJECTS],
  "4543deadc60470891b4a1addaa2b203f9c0516b5": ["avocado-detail-1", DEST_PROJECTS],
  "1e4c9d7f7bd9774c11adc57b853ac45b15c68644": ["avocado-detail-2", DEST_PROJECTS],
  "17a6a55a9c070e7bced94b0f5b7dc8f8c73eecde": ["avocado-detail-3", DEST_PROJECTS],
  "dce05fa4f4fe627462be3ce00fb357da6ee66407": ["avocado-detail-4", DEST_PROJECTS],
  "290a6026eb2dda9324051c7636c54ccb95f81cee": ["avocado-detail-5", DEST_PROJECTS],
  // Glacis detail
  "1878c579832ac95f6968df411e0caf31bb104b7a": ["glacis-hero", DEST_PROJECTS],
  "4e1dadcc80180b881549d1e35eff66f04b5a89d4": ["glacis-screenshot-1", DEST_PROJECTS],
  "f500a7be1107c95be65013b01d22bce93e7f8d89": ["glacis-detail-1", DEST_PROJECTS],
  "8caa709483f13d646497c221db3565f7abacf315": ["glacis-detail-2", DEST_PROJECTS],
  "2281349be7291e1d12a3c3841e587941ff136f64": ["glacis-detail-3", DEST_PROJECTS],
  "c26d34fa38c2e9cb9283d3515db3748024f3eb87": ["glacis-detail-4", DEST_PROJECTS],
  "a5e88af1c74f6a0289bdec9df4a9760f3bf512ee": ["glacis-detail-5", DEST_PROJECTS],
  "1a7b3d24456bffb00c098ae8d7d729dc00db6d66": ["glacis-detail-6", DEST_PROJECTS],
  // Dashboard detail
  "d20c323e918bb9e84eb603e00b3ee5a5ba73ff1d": ["dashboard-hero", DEST_PROJECTS],
  "077bdca12ddca75701850ecc62ee467bb406f4c0": ["dashboard-screenshot-1", DEST_PROJECTS],
  "006e217ec3be8adb4d27b82c96ae0af200d9734b": ["dashboard-screenshot-2", DEST_PROJECTS],
  "d23710b8034f87430efdd1cbab6c96060418a826": ["dashboard-screenshot-3", DEST_PROJECTS],
  // New Request
  "3ab92bbdcce87c4b626f62a374166f987a5d81bd": ["newrequest-detail-1", DEST_PROJECTS],
  // Marketing
  "dd1c12df5553acfaf40db95e1fb63c0b0fa2e2ca": ["kbeauty-thumb", DEST_PROJECTS],
  "1cda03aa9ec666e54e110edf32eb62d39f33ea49": ["marketing-thumb-2", DEST_PROJECTS],
  // K-Beauty detail
  "aa9264296f60aae8f7de4f3eb40503e468fa687b": ["kbeauty-detail-1", DEST_PROJECTS],
  "eb19e6131ef97c7360e7eebacba6b8badd6209d7": ["kbeauty-detail-2", DEST_PROJECTS],
  "a49739bf758548a126623581e491439fd8983c5d": ["kbeauty-detail-3", DEST_PROJECTS],
  "fbb1e3a3ad4660051017212fe0b57a4c27c044d7": ["kbeauty-detail-4", DEST_PROJECTS],
  "4ead92822c2392208057538a83b727b4e67bde0e": ["kbeauty-detail-5", DEST_PROJECTS],
  "0af85fb51c2a393b6a63f9c86e552fade244a3b1": ["kbeauty-detail-6", DEST_PROJECTS],
  "1a367a4fbf843ad1555466db20cfabac1d56b0d1": ["kbeauty-detail-7", DEST_PROJECTS],
  "719dbdcca680bed594913278e8892a9222695ee8": ["kbeauty-detail-8", DEST_PROJECTS],
  "c4a627a8f7ec9668598685205b678b7ee097f379": ["kbeauty-detail-9", DEST_PROJECTS],
  "852a146bdfc1b9173345a4371e66bf9e8910d94c": ["kbeauty-detail-10", DEST_PROJECTS],
  "96fc20ed10c1056a0cf962dc38662194ea606ae7": ["kbeauty-detail-11", DEST_PROJECTS],
  "f8a053495fd3eff222ca3b5e86b91147ab735e8c": ["kbeauty-detail-12", DEST_PROJECTS],
  "293edf3e1aab0986b8a8c25b972bd4d535ce22bf": ["kbeauty-detail-13", DEST_PROJECTS],
  // Avatar
  "a4bb3db28147088ef9d87226e162e5572db440db": ["hande-avatar", DEST_PROFILE],
};

await fs.mkdir(DEST_PROJECTS, { recursive: true });
await fs.mkdir(DEST_PROFILE, { recursive: true });

let converted = 0, skipped = 0;

for (const [hash, [name, destDir]] of Object.entries(MAP)) {
  const src = path.join(SRC, `${hash}.png`);
  const dest = path.join(destDir, `${name}.webp`);

  try { await fs.access(src); } catch { console.warn(`MISSING: ${hash}.png`); skipped++; continue; }

  const img = sharp(src);
  const meta = await img.metadata();
  const MAX = name === "hande-avatar" ? 256 : 2400;

  const pipeline = (meta.width && meta.width > MAX)
    ? img.resize({ width: MAX, withoutEnlargement: true })
    : img;

  await pipeline.webp({ quality: 90 }).toFile(dest);
  const stat = await fs.stat(dest);
  console.log(`OK: ${name}.webp  ${meta.width}x${meta.height} → ${Math.round(stat.size/1024)}KB`);
  converted++;
}

console.log(`\nDone: ${converted} converted, ${skipped} missing.`);
