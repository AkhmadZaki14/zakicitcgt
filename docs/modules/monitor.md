# Web Monitor & Telemetry

Modul pelaporan status live ke dashboard web fleet GT (`gt-pi-ten.vercel.app` atau server kustom).

## Mekanisme Heartbeat

Secara periodik (default 10 detik), bot mengirimkan payload data melalui `MakeRequest`:

```json
{
  "bot": "ZakiBot_01",
  "world": "FARMBFG",
  "status": "online",
  "gems": 384000,
  "rate": 182000,
  "runtime": 14200,
  "level": 42
}
```

## Keamanan & Autentikasi

- Permintaan dikirim dengan header HTTP `X-Monitor-Token: <token>`.
- Server memvalidasi token sebelum data dimasukkan ke dalam basis data Redis/KV Vercel Blob.
- Bot mendeteksi error koneksi HTTP dan secara otomatis menerapkan retry berjangka tanpa memblokir thread PNB.
