# 映画『國分玲』公式サイト

静的LP（HTML1枚 + 画像）。ビルド不要。

## 構成
```
index.html      本体（CSS/JS内包）
images/         KV・キャスト・場面写真（最適化済み / 合計 約1.4MB）
_headers        Cloudflare Pages 用キャッシュ・セキュリティヘッダ
```

## Cloudflare Pages へのデプロイ

### A. ダッシュボードから（最短）
1. Cloudflare にログイン → **Workers & Pages** → **Create** → **Pages** → **Upload assets**
2. プロジェクト名（例: `kokubunrei`）を入力
3. `kokubunrei-site` フォルダの中身（`index.html` / `images/` / `_headers`）をドラッグ＆ドロップ
4. **Deploy** → `https://kokubunrei.pages.dev` で公開

### B. Wrangler CLI から
```bash
npm i -g wrangler
wrangler login
cd kokubunrei-site
wrangler pages deploy . --project-name=kokubunrei
```

## 独自ドメイン設定
1. Cloudflare の **Domain Registrar** でドメインを取得（取得後は自動でゾーンが作成される）
2. Pages プロジェクト → **Custom domains** → **Set up a domain** → 取得したドメインを入力
3. 同一アカウント内なので CNAME は自動追加、SSL 証明書も自動発行（数分）
4. `www` を使う場合は apex → www のリダイレクトを **Rules → Redirect Rules** で設定

## 差し替えポイント
- 公開日：`index.html` の `hero-release` ブロック（`2026` / `全国公開` / `COMING SOON`）
- 劇場情報：`#sns` の直前にセクションを追加する想定
- OGP画像：`images/ogp.jpg`（1200×630）
- SNS：`#sns` セクション内の URL

## 実装メモ
- 演出：グリッチタイトル、フィルムグレイン、走査線、ランダムフラッシュ、ローダー（2058→2026カウントダウン）、スクロールリビール、パララックス、キャスト写真のグリッチホバー
- `prefers-reduced-motion: reduce` で全アニメーションを無効化
- YouTube は `youtube-nocookie.com` の遅延読み込み埋め込み
- 画像は `loading="lazy"`、ギャラリーはライトボックス（ESC / クリックで閉じる）
