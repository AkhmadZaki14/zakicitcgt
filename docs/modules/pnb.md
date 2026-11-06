# PNB Core Module

Modul inti yang menjalankan logika automasi Place & Break (PNB).

## Karakteristik

- **Natural Timing**: Memberikan delay variatif dalam rentang aman agar bot tidak terdeteksi oleh anticheat engine Growtopia.
- **Direction Handling**: Mendukung mode menghadap kanan (`FaceRight = true`) atau kiri (`FaceRight = false`) menyesuaikan tata letak BFG.
- **Safe Movement**: Menggunakan `CheckPath` dan pengecekan properti `collidable` tile sebelum melangkah.

## State Machine PNB

1. **IDLE**: Menunggu bot siap dan world selesai dimuat.
2. **CHECK_REMOTE**: Memeriksa apakah remote Magplant aktif di inventory.
3. **PUNCH_BLOCK**: Menjalankan aksi break hingga block hancur.
4. **PLACE_BLOCK**: Menaruh block baru dari remote.
5. **COLLECT_GEMS**: Menyedot gems yang terkumpul di tile player.
6. **RECOVERY**: Bergerak kembali ke spawn point jika bot tergeser.
