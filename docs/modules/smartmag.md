# Smart Mag Intel

Sistem cerdas pelacakan dan penggantian remote Magplant menggunakan prinsip **Sharded Knowledge** dan **TTL (Time-To-Live)** cache.

## Fitur Unggulan

- **TTL Advisory Cache**: Menyimpan data koordinat dan status remote Magplant untuk mengurangi beban query scan tile berulang-ulang.
- **Background Filter**: Memfilter Magplant berdasarkan ID background tile (`ScanBG` & `MagBgID`), mencegah bot mengambil remote dari Magplant dekoratif/palsu.
- **Auto Change Remote**: Ketika jumlah block pada remote habis (0), bot otomatis melepaskan remote lama dan mengambil remote baru yang tersedia di world.
- **Zero-Stuck Recovery**: Jika terjadi delay sinkronisasi data remote dari server, timer reaktif mengembalikan state bot ke mode aman tanpa menyebabkan game freeze.
