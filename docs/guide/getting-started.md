# Getting Started

Panduan singkat menjalankan ZAKICIT PNB di CreativeGrowtopia (CGT).

## 1. Persiapan

- Game: **CreativeGrowtopia (CGT) V1.50** (PC atau Android)
- Executor: **BooLua** (mydll-patched)
- Pastikan punya **Magplant** dan **Remote** di world tujuan

## 2. Pasang Loader

Simpan kode di bawah sebagai `loader.lua` di folder script executor:

```lua
local apiRes = MakeRequest("https://api.github.com/repos/AkhmadZaki14/zakicit/commits/main", "GET")
local hash = apiRes and apiRes.content and apiRes.content:match('"sha"%s*:%s*"(%x+)"')
local url = hash
  and ("https://raw.githubusercontent.com/AkhmadZaki14/zakicit/" .. hash:sub(1,7) .. "/zakicit.lua")
  or  ("https://raw.githubusercontent.com/AkhmadZaki14/zakicit/main/zakicit.lua")

local res = MakeRequest(url, "GET")
if res and res.content and #res.content > 1000 then
  load(res.content)()
else
  local f = io.open("zakicit.lua", "r")
  if f then local s = f:read("*a"); f:close(); load(s)() end
end
```

## 3. Jalankan Bot

1. Masuk ke world farming di CGT.
2. Jalankan `loader.lua` dari executor.
3. Panel **ZAKICIT** akan muncul di layar.
4. Masukkan koordinat berdiri dan koordinat Magplant.
5. Klik **Start**.
