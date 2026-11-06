# Settings Reference

Daftar parameter lengkap konfigurasi `Setting.PNB` pada `zakicit.lua`. Semua setting dapat diubah langsung di script atau melalui menu GUI v3 di dalam game.

## Konfigurasi Inti (Core PNB)

| Parameter | Tipe | Default | Deskripsi |
| :--- | :--- | :--- | :--- |
| `WearItem` | `string` | `"Mythical Necklace"` | Nama item aksesoris/pakaian yang otomatis dipakai saat bot jalan. |
| `AutoCollectGems` | `boolean` | `true` | Otomatis menyedot/mengambil gems yang jatuh di sekitar tile bot. |
| `AutoChangeRemote` | `boolean` | `true` | Mengambil dan mengganti remote Magplant baru jika remote saat ini habis. |
| `AutoConsumables` | `boolean` | `true` | Otomatis mengonsumsi Clover / Arroz / Songpyeon jika efek habis. |
| `FaceRight` | `boolean` | `false` | Menghadap ke kanan saat break/farming di BFG (default kiri). |
| `AntiLag` | `boolean` | `false` | Mematikan efek visual berat untuk mencegah game crash (FC prevention). |
| `IgnoreOther` | `boolean` | `false` | Mengabaikan interaksi dan dialog dari pemain lain. |

## Konversi & Belanja Mata Uang

| Parameter | Tipe | Default | Deskripsi |
| :--- | :--- | :--- | :--- |
| `AutoBuyWL` | `boolean` | `false` | Otomatis membeli World Lock di shop ketika gems mencapai batas. |
| `ConvertDLBGL` | `boolean` | `false` | Otomatis konversi 100 Diamond Lock menjadi Blue Gem Lock (BGL). |
| `ConvertBGL` | `boolean` | `false` | Otomatis menukar BGL kembali ke bentuk pecahan bila dibutuhkan. |
| `MaxGems` | `integer` | `400000` | Batas maksimum gems sebelum melakukan auto-buy atau konversi. |
| `HideCollected` | `boolean` | `false` | Menyembunyikan notifikasi log perolehan gems/item di chat konsol. |

## Fitur Cheats & Gerakan

| Parameter | Tipe | Default | Deskripsi |
| :--- | :--- | :--- | :--- |
| `AutoBuyCheats` | `boolean` | `true` | Otomatis membeli paket cheat in-game dari shop saat habis. |
| `AutoRadio` | `boolean` | `true` | Otomatis mute/unmute radio world sesuai kebutuhan bot. |
| `AutoSuckBgems` | `boolean` | `true` | Otomatis menyedot Blue Gems yang terjatuh di lantai. |
| `Modfly` | `boolean` | `true` | Mengaktifkan modfly agar bot tidak terjatuh saat menambang. |
| `BypassPaywall` | `boolean` | `false` | Aturan khusus melintasi tile paywall tanpa terkena trigger ban/stuck. |
| `BypassWayBlock` | `boolean` | `false` | Melewati rintangan wayblock tertentu pada map BFG. |

## Magplant & Filter Intel

| Parameter | Tipe | Default | Deskripsi |
| :--- | :--- | :--- | :--- |
| `ScanBG` | `boolean` | `false` | Aktifkan penyaringan magplant berdasarkan ID background tile. |
| `MagBgID` | `integer` | `0` | ID background target yang diizinkan untuk ditarik remotenya. |

## Paywall System

| Parameter | Tipe | Default | Deskripsi |
| :--- | :--- | :--- | :--- |
| `AutoPaywall` | `boolean` | `false` | Mengaktifkan modul sensor dan monitoring durasi paywall. |
| `AutoRenewPaywall` | `boolean` | `false` | Memperpanjang paywall secara otomatis (~2 menit sebelum masa berlaku habis). |
| `AutoBuyPaywall` | `boolean` | `false` | Membeli ulang paywall jika dicabut paksa atau habis mendadak. |

## Renting & MRay Station

| Parameter | Tipe | Default | Deskripsi |
| :--- | :--- | :--- | :--- |
| `AutoRent` | `boolean` | `false` | Otomatis menyewa ray/item dari renting station saat durasi sewa habis. |
| `RentTargetItem` | `string` | `"Auto-Detect"` | Item sewa target (`"LSS"`, `"MRay"`, `"LRay"`, `"Auto-Detect"`). |
| `RentWorld` | `string` | `""` | Nama world lokasi mesin renting station berada. |

## Monitoring & Notifikasi

| Parameter | Tipe | Default | Deskripsi |
| :--- | :--- | :--- | :--- |
| `EnableMonitor` | `boolean` | `true` | Mengirim telemetry data berkala ke Web Dashboard Fleet Monitor. |
| `MonitorToken` | `string` | `""` | Secret header token (`X-Monitor-Token`) untuk otentikasi dashboard. |
| `SendToWebhook` | `boolean` | `false` | Mengirim notifikasi event penting ke Discord Webhook. |
| `WebhookURL` | `string` | `""` | URL target webhook Discord. |
| `StuckMinutes` | `integer` | `10` | Batas waktu deteksi bot macet sebelum pemicu auto-recovery jalan. |
