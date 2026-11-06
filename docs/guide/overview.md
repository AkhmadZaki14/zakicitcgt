# Overview Arsitektur

ZAKICIT PNB v2 dirancang dengan pola arsitektur **The Continental**: arsitektur berbasis modular decoupling antara state mesin, sistem input/packet, hook reaktif, dan web telemetry.

## Diagram Alir Modul

```
[ Loader / Memory ]
        │
        ▼
[ Global Setting & State ]
        │
        ├──► [ GUI v3 ImGui ] ────── (User Controls)
        │
        ├──► [ Main Step Loop ] ──── (Harvest / Plant / Punch / Collect)
        │         │
        │         ├──► [ Smart Mag Intel ] (TTL Remote Cache)
        │         ├──► [ Renting System ]  (Auto WAR / Rent Station)
        │         └──► [ Paywall Guard ]   (Auto Renew / Buy)
        │
        ├──► [ Game Action & Bypass ] (CheckPath / Collidable Safe)
        │
        └──► [ Web Monitor Engine ] ─► (HTTP Fleet Dashboard Sync)
```

## Siklus Hidup PNB Loop

Main step loop berjalan di thread asinkron yang melakukan siklus perulangan:

1. **State Validation**: Memeriksa koneksi in-game, inventory, dan posisi koordinat tile.
2. **Cheat & Consumable Check**: Memastikan modfly, speed, dan consumable (Arroz/Clover) aktif.
3. **Remote Magplant Assertion**: Memeriksa ketersediaan remote magplant di tangan. Jika remote habis, fungsi `SmartMag` aktif untuk switch remote.
4. **Tile Placement**: Meletakkan benih/block pada koordinat target menggunakan `SendPacketRaw`.
5. **Harvest & Punch**: Melakukan proses pemukulan/break block secara aman menggunakan timer delay natural.
6. **Gem Sucker**: Menghisap gems hasil panen ke inventory dan melakukan konversi jika mencapai `MaxGems`.
7. **Telemetry Dispatch**: Mengirim ringkasan perolehan gems dan status runtime ke server fleet.

## Keamanan Pathfinding

Pada versi BUILD 7.45:

- Mengutamakan fungsi `CheckPath(x, y)` native dari CGT API sebelum mengizinkan perpindahan koordinat.
- Membaca properti `t.collidable` pada tile target untuk mencegah bot terjebak atau terdeteksi oleh sistem anticheat game saat menembus solid block.
