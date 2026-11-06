# Daftar Settings

Semua pengaturan ada di tabel `Setting.PNB` di dalam `zakicit.lua`. Bisa diubah manual di script atau lewat GUI in-game.

## Umum

| Setting | Default | Keterangan |
| :--- | :--- | :--- |
| `WearItem` | `"Mythical Necklace"` | Item aksesoris yang dipakai otomatis saat bot mulai. |
| `AutoCollectGems` | `true` | Ambil gems yang jatuh di sekitar bot. |
| `AutoChangeRemote` | `true` | Ganti remote Magplant baru jika remote habis. |
| `AutoConsumables` | `true` | Pakai Arroz / Clover / Songpyeon otomatis jika efek habis. |
| `AutoBuyCheats` | `true` | Beli paket cheat otomatis jika habis. |
| `AutoRadio` | `true` | Auto mute/unmute radio world. |
| `AutoSuckBgems` | `true` | Hisap Blue Gems yang jatuh di lantai. |
| `Modfly` | `true` | Aktifkan modfly biar bot tidak jatuh. |
| `FaceRight` | `false` | Bot menghadap kanan saat farming. |
| `AntiLag` | `false` | Kurangi render berat untuk mencegah FC. |
| `IgnoreOther` | `false` | Abaikan dialog/interaksi dari pemain lain. |

## Mata Uang

| Setting | Default | Keterangan |
| :--- | :--- | :--- |
| `MaxGems` | `400000` | Batas gems sebelum konversi/auto-buy. |
| `AutoBuyWL` | `false` | Beli World Lock otomatis dari shop. |
| `ConvertDLBGL` | `false` | Konversi 100 DL ke BGL otomatis. |
| `HideCollected` | `false` | Sembunyikan notif perolehan gems di log. |

## Monitor Web

| Setting | Default | Keterangan |
| :--- | :--- | :--- |
| `EnableMonitor` | `true` | Kirim data ke Fleet Dashboard web. |
| `MonitorToken` | `""` | Token rahasia untuk autentikasi dashboard. |
| `StuckMinutes` | `10` | Menit bot diam sebelum trigger auto-recover. |
| `SendToWebhook` | `false` | Kirim notif ke Discord Webhook. |
| `WebhookURL` | `""` | URL Discord Webhook tujuan. |
