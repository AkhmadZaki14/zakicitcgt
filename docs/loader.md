# Loader Script

`loader.lua` bertanggung jawab mendownload dan mengeksekusi versi terbaru dari `zakicit.lua` secara in-memory tanpa perlu manual copy-paste file setiap ada update.

## Mekanisme Kerja

1. **Commit Hash Resolution**:
   Loader menembak GitHub REST API (`https://api.github.com/repos/AkhmadZaki14/zakicit/commits/main`) untuk mendapatkan commit SHA terbaru.
2. **CDN Bypass / Raw Commit URL**:
   Menggunakan URL dengan commit SHA spesifik (`https://raw.githubusercontent.com/AkhmadZaki14/zakicit/<sha>/zakicit.lua`) untuk menghindari caching CDN jsDelivr/RawGitHub.
3. **In-Memory Compilation**:
   String Lua dieksekusi langsung di RAM via `load(code)()` tanpa meninggalkan file sementara yang mudah terdeteksi.
4. **Local Fallback**:
   Jika koneksi internet gagal atau limit GitHub API tercapai, loader mencoba membaca file `zakicit.lua` lokal dari path penyimpanan standar (Android storage atau AppData Windows).
