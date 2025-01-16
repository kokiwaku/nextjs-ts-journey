# Next.js + TypeScript Journey

Next.js + TypeScript を使用した Todo アプリケーションです。
フロントエンドに Next.js、バックエンドに Laravel を採用し、Docker で開発環境を構築しています。

## 技術スタック

### フロントエンド

- Node.js（v.22.11）
- React (v18.3.1)
- Next.js (v15.0.3)
- TypeScript (v5.7.2)
- Styled Components (v6.1.13)
- Axios (v1.7.9)
- React Redux (v9.1.2)

### バックエンド

- PHP (v8.3)
- Laravel (v11.31)
- JWT Auth (v2.1)
- MySQL（v.8.0）
- Apache

### 開発環境

- Docker
- Docker Compose
- Make

## 機能

- ユーザー認証（サインアップ/ログイン）
- Todo の作成/編集/削除
- Todo 一覧表示
- Todo 詳細表示
- 検索機能

## 認証システム

このアプリケーションでは JWT（JSON Web Token）を使用した認証システムを実装しています。

### 認証の仕組み

- JWT トークンを使用した認証
- トークンは Cookie に保存され、セキュアに管理
- フロントエンドでは Next.js の Middleware を使用してルートごとの認証チェックを実装
- 保護されたルートへのアクセスには有効な JWT トークンが必要

## 開発環境のセットアップ

### 必要要件

- Docker
- Docker Compose
- Make

### セットアップ手順

1. リポジトリのクローン

```bash
git clone https://github.com/kokiwaku/nextjs-ts-journey.git
cd nextjs-ts-journey
```

2. 開発環境の起動

```bash
make up
```

これにより、以下のサービスが起動します：

- フロントエンド: http://localhost:3000
- バックエンド: http://localhost:8080
- データベース: MySQL (Port: 3306)

## プロジェクト構造

### フロントエンド (front/)

```
front/src/
├── app/                    # App Routerのルート
│   ├── auth/             # 認証関連ページ
│   └── todo/             # Todo関連ページ
├── components/            # Atomic Designベースのコンポーネント
│   ├── atoms/            # 基本的なUI要素
│   ├── molecules/        # 複数のatomsで構成
│   ├── organisms/        # 複雑なコンポーネント
│   └── templates/        # ページレイアウト
├── context/              # Context API
├── hooks/                # カスタムフック
├── libs/                 # ユーティリティ
└── types/                # 型定義
```

### バックエンド (back/)

```
back/src/
├── app/
│   ├── Http/
│   │   ├── Controllers/
│   │   │   ├── AuthController.php  # 認証関連のAPI
│   │   │   └── TodoController.php  # Todo関連のAPI
│   │   └── Middleware/            # 認証などのミドルウェア
│   └── Models/
│       ├── User.php              # 認証ユーザーモデル
│       └── Todo.php              # Todoモデル
├── config/
│   ├── jwt.php                   # JWT認証の設定
│   └── auth.php                  # 認証の設定
├── database/
│   └── migrations/
│       ├── users_table.php       # ユーザーテーブル
│       └── todos_table.php       # Todoテーブル
└── routes/
    └── api.php                   # APIルート定義
```

#### コントローラー

- **AuthController**: ユーザー認証に関する処理を担当
  - ログイン処理
  - ユーザー登録
  - ログアウト処理
  - トークンのリフレッシュ
- **TodoController**: Todo 機能に関する処理を担当
  - Todo 一覧の取得
  - Todo の作成/更新/削除
  - Todo 詳細の取得

#### 認証システム

- **JWT 認証**
  - `config/jwt.php` で JWT の設定を管理
    - トークンの有効期限
    - 暗号化アルゴリズム
    - 署名キーの設定
  - ミドルウェアによる認証チェック
    - 保護されたルートへのアクセスをガード
    - トークンの検証と認証ユーザーの特定

#### ユーザー管理

- Laravel 11 のデフォルト User モデルを使用
- `users` テーブルで認証ユーザーを管理
  - メールアドレスとパスワードによる認証
  - タイムスタンプ（作成日、更新日）の自動管理

#### API ルート (`routes/api.php`)

- 認証不要のエンドポイント
  - POST `/api/auth/login`: ログイン
  - POST `/api/auth/register`: ユーザー登録
- 認証必要のエンドポイント（JWT ミドルウェア適用）
  - POST `/api/auth/logout`: ログアウト
  - POST `/api/auth/refresh`: トークンリフレッシュ
  - GET `/api/todos`: Todo 一覧取得
  - POST `/api/todos`: Todo 作成
  - GET `/api/todos/{id}`: Todo 詳細取得
  - PUT `/api/todos/{id}`: Todo 更新
  - DELETE `/api/todos/{id}`: Todo 削除

## 主要コマンド

```bash
# 開発環境の起動
make up

# 開発環境の停止
make stop

# コンテナの再起動
make up-build

# ログの確認
make log

# フロントエンドコンテナに入る
make front

# バックエンドコンテナに入る
make back

# コンテナの削除
make down
```

## アーキテクチャ

### コンポーネント設計 (Atomic Design)

- atoms: 最小単位の UI コンポーネント（ボタン、入力フィールドなど）
- molecules: 複数の atoms を組み合わせたコンポーネント
- organisms: 特定の機能を持つ独立したコンポーネント
- templates: ページレイアウトを定義するコンポーネント

### 状態管理

- Context API を使用してグローバルな状態を管理
- 認証状態と Todo データの管理に使用

### API 通信

- Axios を使用してバックエンドとの通信を実装
- カスタムフックを使用して API 呼び出しをカプセル化

## 開発ガイドライン

### コーディング規約

- ESLint/Prettier を使用したコード整形
- TypeScript の厳格な型チェック

### コンポーネント開発

- Atomic Design パターンに従ったコンポーネントの分類
- 再利用可能なコンポーネントの作成を推奨

### API 開発

- RESTful API の設計原則に従う
- 適切な HTTP メソッドとステータスコードの使用

## ライセンス

MIT

## その他

この REAMD は、Cline（Model：anthropic/claude-3.5-sonnet:beta）で書いてみました。
