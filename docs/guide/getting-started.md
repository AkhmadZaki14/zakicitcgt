# Getting Started

**ZAKICIT PNB v2** adalah script otomasi farming Growtopia yang berjalan di atas **CreativeGrowtopia (CGT)** dengan executor **BooLua** (mydll-patched build).

## Requirements

- CGT V1.50 build (PC atau Android)
- BooLua loader (`mydll.dll` / `mydll.so`) sudah terpasang
- API yang tersedia: `io`, `MakeRequest`, `ImGui`, `AddHook`, `Sleep`, `RunThread`

## Cara Install Loader

Gunakan `loader.lua` agar script selalu otomatis update dari GitHub:

```lua
-- zakicit_loader.lua
local apiRes = MakeRequest("https://api.github.com/repos/AkhmadZaki14/zakicit/commits/main", "GET")
local hash = apiRes and apiRes.content and apiRes.content:match('"sha"%s*:%s*"(%x+)"')
local url = hash
  and ("https://raw.githubusercontent.com/AkhmadZaki14/zakicit/" .. hash:sub(1,7) .. "/zakicit.lua")
  or  ("https://raw.githubusercontent.com/AkhmadZaki14/zakicit/main/zakicit.lua")

local res = MakeRequest(url, "GET")
if res and res.content and #res.content > 1000 then
  load(res.content)()
else
  LogToConsole("[ZAKICIT] Gagal load dari GitHub, coba dari lokal...")
  local fallback = io.open("zakicit.lua", "r")
  if fallback then
    local src = fallback:read("*a"); fallback:close()
    load(src)()
  end
end
```

> Loader mengambil hash commit terbaru via GitHub API, lalu fetch raw file. Jika gagal, fallback ke file lokal.

## Konfigurasi Dasar

Sebelum jalankan bot, set lokasi world dan magplant:

```lua
Setting.World     = "NAMAWORLD"   -- World farming
Setting.PosX      = 50            -- Tile X player spawn
Setting.PosY      = 20            -- Tile Y player spawn
Setting.MagplantX = 48            -- Tile X magplant
Setting.MagplantY = 18            -- Tile Y magplant
```

Untuk monitor jarak jauh, isi token:

```lua
Setting.PNB.EnableMonitor  = true
Setting.PNB.MonitorToken   = "token-rahasia-lo"
```

## Menjalankan Script

1. Buka CGT, masuk ke akun yang diinginkan
2. Jalankan `zakicit_loader.lua` di executor BooLua
3. Tunggu GUI muncul di sudut kanan bawah game
4. Tekan **Start PNB** dan isi world target

## Troubleshooting

| Gejala | Penyebab | Solusi |
| :--- | :--- | :--- |
| Bot diam tidak gerak | World/Pos belum diset | Isi `Setting.World`, `PosX`, `PosY` |
| Cheat off, bot freeze | `AutoBuyCheats` gagal | Set `AutoBuyCheats = true`, cek inventory |
| Monitor tidak update | Token salah/kosong | Periksa `MonitorToken`, tes `EnableMonitor` |
| Stuck di world lain | `RentWorld` kosong | Isi `RentWorld` kalau pakai `AutoRent` |
