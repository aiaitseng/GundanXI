# MS ARCHIVE — 宇宙世紀機動戰士檔案館

使用純粹 **HTML5 + CSS3 + Vanilla JavaScript** 打造的宇宙世紀機動戰士機械圖鑑網站，無須任何後端或前端框架即可直接部署至 **GitHub Pages**。

## 檔案結構

- `index.html` — 語意化 HTML5 頁面結構
- `style.css` — 純 CSS3 響應式樣式與印刷排版系統
- `script.js` — 原生 ES6+ JavaScript（機體篩選、排序、技術詳情視窗、Canvas 2D 五軸雷達圖、雙機規格對比與宇宙世紀年表）
- `experience.js` / `experience.css` — 互動格納庫、19 具機體招牌模式、武裝配置熱點與雙機影片放映室
- `battle-videos.js` / `battle-video-catalog.js` — 原生影片播放與左右機體、攻擊方、武器距離的精確影片配對
- `src/assets/images/` — 機體靜態高畫質展示圖檔
- `.github/workflows/deploy.yml` — GitHub Actions 自動部署設定檔

## 互動展示與本機預覽

執行 `node tools/serve.cjs` 後開啟 `http://127.0.0.1:4173`。本網站使用 ES modules，請透過 HTTP 預覽。

- 首頁支援滑鼠視差與按鈕掃描；觸控裝置不執行滑鼠追蹤。
- 「檢視規格」內有武裝配置熱點與各機體的招牌模式；配置圖與光效為風格化示意，未更換照片或製作完整 3D 變形。
- 點擊尺寸比較下方的「觀看戰鬥影片」，會直接播放使用者提供的打鬥示範片，目前所有組合共用並清楚標示。日後可在 `battle-video-catalog.js` 加入左右機體、攻擊方與近戰／中程影片；有專屬影片時優先播放。
- 關閉影片視窗時停止播放並釋放來源；切換到背景時暫停。手機使用原生影片控制與行內播放；點擊「觀看戰鬥影片」直接播放。若瀏覽器限制自動播放，仍可使用影片播放鍵。
- 安裝 Playwright 且具備 Microsoft Edge 的環境，可執行 `node tools/check-experience.cjs` 驗證桌機／觸控操作、19 具機體與招牌模式。另以 `node tools/check-video-catalog.mjs` 檢查影片精確配對，以 `node tools/check-battle-videos.cjs` 檢查影片播放與觸控行為。測試截圖輸出至已忽略的 `artifacts/`。

## GitHub Pages 設定

### 方法一：直接靜態分支部署（最簡單）

1. 在 GitHub 建立新的 Repository（例如 `gundam-archive`）。
2. 將專案推送至 `main` 分支：
   ```bash
   git init
   git add index.html style.css script.js experience.js experience.css battle-videos.js battle-video-catalog.js src/assets README.md
   git commit -m "Initial commit: Gundam MS Archive"
   git branch -M main
   git remote add origin https://github.com/<你的帳號>/<倉庫名稱>.git
   git push -u origin main
   ```
3. 前往 GitHub 倉庫的 **Settings → Pages**。
4. 在 **Build and deployment → Source** 選擇 **Deploy from a branch**，Branch 選 `main`、`/(root)`，點擊 **Save**。
5. 等待約 1 分鐘即可於 `https://<你的帳號>.github.io/<倉庫名稱>/` 查看網站。

### 方法二：使用 GitHub Actions 自動部署

本專案已附帶 `.github/workflows/deploy.yml`：
1. 前往 **Settings → Pages**，將 Source 改為 **GitHub Actions**。
2. 每次推送至 `main` 分支時，GitHub 將自動完成靜態網站部署。

影片素材狀態：目前已放入使用者提供的 10 秒 720p 示範片；各組機體專屬影片之後補入。靜態 GitHub Pages 本身不會即時生成 AI 影片。
