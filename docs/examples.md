# Examples

Contoh penggunaan script ZAKICIT PNB v2 beserta potongan code fungsi internal yang sering diakses.

## Setup Awal World Farming

```lua
-- Minimal setup untuk mulai PNB farming
Setting.World     = "FARMBFG"
Setting.PosX      = 50
Setting.PosY      = 20
Setting.MagplantX = 48
Setting.MagplantY = 18

Setting.PNB.WearItem      = "Mythical Necklace"
Setting.PNB.AutoCollectGems = true
Setting.PNB.MaxGems         = 400000
```

## Auto Convert DL ke BGL

```lua
-- Ketika bot sudah cukup akumulasi DL, auto konversi ke BGL
Setting.PNB.ConvertDLBGL = true

-- Setelah BGL cukup, bisa switch ke item high-value
Setting.PNB.ConvertBGL   = false
```

## Renting Station

```lua
-- Aktifkan auto-rent jika bot menggunakan rental MRAY
Setting.PNB.AutoRent       = true
Setting.PNB.RentTargetItem = "MRay"     -- atau "LSS", "LRay", "Auto-Detect"
Setting.PNB.RentWorld      = "NAMERENTINGWORLD"
```

## Web Monitor Token

```lua
-- Aktifkan monitor untuk tracking dari Fleet Dashboard
Setting.PNB.EnableMonitor  = true
Setting.PNB.MonitorToken   = "token-rahasia"

-- Tambahan Discord Webhook (opsional)
Setting.PNB.SendToWebhook  = true
Setting.PNB.WebhookURL     = "https://discord.com/api/webhooks/XXX/YYY"
Setting.PNB.StuckMinutes   = 10         -- alert kalau bot stuck 10 menit
```

## Payload Packet Manual

```lua
-- Melempar item ke lantai (drop) secara programatik
-- Packet type 3 = SetItem, field-based text packet
local function dropItem(id, count)
  local msg = string.format("action|drop\nitemID|%d\ncount|%d", id, count)
  SendPacket(3, msg)
end

dropItem(242, 1)  -- drop 1 World Lock
```

## Cek Tile Aman Sebelum Jalan

```lua
-- Pastikan tile bisa dilalui sebelum bot bergerak
local tx, ty = 50, 21
local tile = GetTile(tx, ty)
local pathOk = CheckPath(tx, ty)

if pathOk and tile and not tile.collidable then
  WalkTo(tx * 32, ty * 32, 1)
else
  LogToConsole("[ZAKICIT] Tile " .. tx .. "," .. ty .. " blocked!")
end
```
