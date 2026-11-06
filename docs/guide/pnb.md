# Cara Pakai PNB

Langkah praktis menggunakan bot PNB.

## 1. Menentukan Posisi Tile

Buka game, berdiri di tempat farming (misal depan Magplant atau BFG):

- Tekan tombol **Set Pos** di menu GUI untuk simpan koordinat berdiri bot saat ini.
- Berdiri di depan Magplant, tekan **Set Mag** untuk simpan posisi Magplant.

Atau set manual di bagian atas script:

```lua
Setting.World     = "FARMBFG"
Setting.PosX      = 50
Setting.PosY      = 20
Setting.MagplantX = 48
Setting.MagplantY = 18
```

## 2. Arah Farming (Kiri / Kanan)

- Default bot menghadap ke **kiri**.
- Kalau BFG ada di sebelah kanan, aktifkan `FaceRight`:
  - Via GUI: Centang opsi **Face Right**
  - Via Script: `Setting.PNB.FaceRight = true`

## 3. Remote Magplant

Bot otomatis mendeteksi status remote:

- Jika remote habis (0 block), bot otomatis ambil remote baru dari Magplant (`AutoChangeRemote = true`).
- Pastikan Magplant tidak terkunci atau bot punya akses wrench ke Magplant.

## 4. Tips Lancar

1. **AntiLag**: Centang **Anti Lag** kalau game sering force close (FC) saat render ribet.
2. **Auto Buy Cheats**: Biarkan aktif (`true`) biar bot otomatis beli paket cheat jika durasi cheat habis.
3. **Max Gems**: Set `MaxGems = 400000` (atau sesuai kapasitas) agar bot otomatis konversi gems jadi lock.
