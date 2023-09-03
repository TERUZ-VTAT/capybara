# capybara
This repository is VTA's repository.

## まずすること
1. リポジトリへの参加
    * まず普通にclone
    * 次にDiscordなどでリポジトリに参加する意向を伝える(認証するため)
    * 返信が来たらwebでリポジトリを開いて認証ボタンを押す(青いやつ)

2. 環境構築
    * Djangoのインストール(入っていない場合)
        * 右記のコマンドを実行 `pip3 install django`
    * Pythonバージョンの変更(コードに黄色い波線が出ている場合)
        * VScodeの場合
            1. 右下の[Python 3.11.3]などと書いてあるところをクリック
            2. 右端に「グローバル」と書かれたものを選択

3. git側のセッティング
    * developブランチから自分専用のbranchを生やす(原則そのbranchで作業)

## 共同開発をする上でのルール
    1. 勝手にPRをmergeしない(バグやコンフリクトの原因になる可能性があるため)
    2. 本人の許可がない限り他人のbranchには行かない
    3. コミットメッセージは分かりやすいものにする("i."で述べたように有識者や管理者がmergeの管理をするため)
    4. 何か問題が発生して、自分だけでの解決が難しいと判断した際は必ずDiscordなどで質問をすること(取り返しがつかないような状況になってからでは遅いため)
    5. 自分のbranch以外からbranchを生やす場合は必ず許可を取る(データ管理をしやすくするため)
    6. 作業を始めるときは毎回自分のbranchにpullしてから始める

### 以上のことにご理解とご協力をお願いします。
### もしミスをしてしまっても特段責め立てたりはしないのでみんなで楽しくやりましょう！

# このブランチで行ったことなど
## HTMLからログイン情報を呼び出す方法
ログイン後は　{{ user.[DB項目名] }}で呼び出す   
例：ユーザ名は {{ user.first_name }}で表示される  
使えるのは  
user.account_id , user.email , user.first_name　など。  
なお、使わないと思うがユーザ通し番号は user.id で番号取得ができる  
## Dockerについて
    1: Docker Desktopをインストールする
        https://www.docker.com/products/docker-desktop/
    2: プロジェクトのドキュメントルートに移動。
    3: 初回起動時コンソールで以下のコマンドを実行
        % docker compose up -d --build
    3': 次回以降は
        % docker compose up -d
    4: http://localhost:8000 にアクセス

## Dockerコンテナを停止したいとき
    5: コンソールから
        % docker compose stop

## URL
    新規ユーザ登録：
    http://localhost:8000/signup/
    
    ログイン
    http://localhost:8000/login/

    管理画面
    http://localhost:8000/admin/
    ID: admin
    PW: admin


