# Renting System

Modul manajemen sewa item farming (MRay, LSS, LRay, dll.) dari Renting Station in-game.

## Alur Kerja

1. Bot membandingkan `os.time()` dengan timestamp sewa terakhir.
2. Ketika durasi sewa mendekati habis, bot berpindah ke world renting (`RentWorld`).
3. Berinteraksi dengan mesin sewa menggunakan `SendVariant` / `SendPacket`.
4. Setelah item ter-equip, bot kembali ke world farming.

## Konfigurasi

| Parameter | Deskripsi |
| :--- | :--- |
| `AutoRent` | Toggle sistem renting (`true`/`false`). |
| `RentTargetItem` | Item yang disewa. `"Auto-Detect"` mendeteksi otomatis dari inventory. |
| `RentWorld` | World dengan Renting Station. |
