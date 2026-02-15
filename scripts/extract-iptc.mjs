import { readFileSync, writeFileSync, mkdirSync } from "fs"
import { glob } from "fs/promises"
import { resolve, relative } from "path"
import iptc from "node-iptc"

const ROOT = resolve(import.meta.dirname, "..")
const GALLERY_DIR = resolve(ROOT, "src/img/gallery")
const OUTPUT = resolve(ROOT, "src/data/gallery-captions.json")

const captions = {}

for await (const file of glob(resolve(GALLERY_DIR, "**/*.jpg"))) {
  const buf = readFileSync(file)
  const data = iptc(buf)
  const rel = relative(GALLERY_DIR, file)
  const caption = data?.caption || ""
  if (!caption) {
    console.warn(`  [warn] No IPTC caption: ${rel}`)
  }
  captions[rel] = caption
}

mkdirSync(resolve(ROOT, "src/data"), { recursive: true })
writeFileSync(OUTPUT, JSON.stringify(captions, null, 2) + "\n")
console.log(
  `Extracted ${Object.keys(captions).length} captions → src/data/gallery-captions.json`,
)
