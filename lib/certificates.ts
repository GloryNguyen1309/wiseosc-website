import fs from "node:fs";
import path from "node:path";

const EXT = /\.(png|jpe?g|webp|svg|gif)$/i;

export type CertificateItem = { src: string; alt: string };

/**
 * Danh sách ảnh trong public/certificates (PNG, JPG, WebP, SVG, GIF).
 * Chỉ cần thả file vào folder — không cần sửa code.
 */
export function getCertificatePublicPaths(): CertificateItem[] {
  const dir = path.join(process.cwd(), "public", "certificates");
  try {
    if (!fs.existsSync(dir)) return [];
    return fs
      .readdirSync(dir)
      .filter((f) => EXT.test(f) && !f.startsWith("."))
      .sort()
      .map((f) => {
        const base = f.replace(EXT, "");
        const label = base.replace(/[-_]+/g, " ").trim();
        return {
          src: `/certificates/${f}`,
          alt: label ? `Certificate: ${label}` : "Certificate",
        };
      });
  } catch {
    return [];
  }
}
