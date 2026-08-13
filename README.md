# online-museum

徳永琢磨の作品コレクションを公開するオンライン美術館サイト（Astro製）。

公開URL: https://second-penguin-planning.github.io/online-museum/

## 内容

- **ギャラリー**（トップページ）: 収蔵作品の中から選定した作品を、額縁の形・色をランダム変化させながら表示
- **収蔵品（storage）**: 全72点の作品を収録したフルカタログ。管理画面から作品ごとの編集・サムネイル登録が可能
- **About**: プロフィール・回顧録などをまとめたセクション（ドロップダウンメニューで複数ページに分岐）
- **Scores / Shop**: 楽譜・物販ページ
- 日本語・英語など多言語対応（`src/pages/[lang]/` によるルーティング）

## 管理画面（storage）について

収蔵品ページには GitHub Personal Access Token をブラウザに保存して使う編集モードがあります。PAT はリポジトリへの書き込み権限を持つ機密情報なので、共有端末では使用後に必ずログアウト（トークン破棄）してください。

## 開発方法

```sh
npm install
npm run dev      # localhost:4321 で起動
npm run build    # ./dist/ に本番ビルド
npm run preview  # ビルド結果をローカルでプレビュー
```

## ディレクトリ構成

```text
/
├── public/
│   └── gallery/        # 作品画像
├── src/
│   ├── components/
│   ├── data/            # artworks.json, about.json など
│   ├── layouts/
│   └── pages/
│       └── [lang]/      # 多言語ページ（about, scores, shop, storage）
├── docs/                 # 作品説明・制作メモなど（サイト非公開の参考資料）
└── astro.config.mjs
```
