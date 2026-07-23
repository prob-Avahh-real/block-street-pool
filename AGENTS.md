# 方块街头桌球 (Block Street Pool)

我的世界界面风格的街头桌球。Canvas 物理台球 + Minecraft 方块 UI + 第一人称瞄准。

## 目标平台

| 平台 | 方式 | 产出 |
|------|------|------|
| 🍎 iOS | Capacitor → Xcode | IPA |
| 🤖 Android | Capacitor → Gradle | APK |
| ⌚ 手表 | 窄屏自适应 | 同 APK |
| 💍 智能戒指 | DeviceOrientation 瞄准 | 同 APK |
| 🦯 智能手杖 | DeviceMotion 出杆 | 同 APK |

## 玩法

- 拖拽瞄准蓄力，松手出杆
- 清台进袋得分；母球进袋需重新放置
- 戒指倾斜瞄准；手杖甩动/敲击出杆
- 键盘：←→ 转向，↑↓ 蓄力，空格出杆，`V` 切换视角

## 视角模式

| 模式 | 切换 | 操作 |
|------|------|------|
| 俯视 | 左上角「视角 · 俯视」或 `V` | 拖拽方向=瞄准，拉开=蓄力 |
| 第一人称 | 左上角「视角 · 第一人称」或 `V` | 左右拖=转视角，下拉=蓄力；准星瞄准；左下角小地图 |

第一人称从球杆后方、台面高度做透视投影（方块库边 / 毡面 / 球），戒指在 FPS 下用倾斜微调偏航与俯仰。

## 技术栈

- Canvas 2D 物理（碰撞 / 库边 / 袋口）
- Canvas 2D 透视投影（第一人称）
- Capacitor 6 原生包装
- WearableInput（戒指 + 手杖）

## 构建

```bash
npm install
npm test
npm run build
npx cap sync android
# 建议 JDK 17：source /Users/skat/Projects/tools/android-env.sh
npm run apk:debug
```

改 `index.html` 或 `src/` 后务必 `npm run build`（会同步到 `www/` 与 Android assets）。
