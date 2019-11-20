# 我的餐廳清單-重構 (Restaurant List- Refactoring)

使用 Node.js + Express 打造的餐廳清單網站，以 RESTful 路由重構，可管理餐廳清單，包括新增、閱讀、修改、刪除餐廳資訊等功能，也可依照餐廳名稱與分類進行搜尋，以及依照餐廳名稱、類別、地區、評分進行排序。

## 環境建置與需求 (Prerequisites)

* [Node.js](https://nodejs.org/)
* [Express ^4.17.1](https://expressjs.com)
* [Express-Handlebars ^3.1.0](https://www.npmjs.com/package/express-handlebars)
* [Body-Parser ^1.19.0](https://www.npmjs.com/package/body-parser)
* [MongoDB ^4.0.13](https://www.mongodb.com/)
* [Mongoose ^5.7.10](https://mongoosejs.com/)
* [Method-Override ^3.0.0](https://www.npmjs.com/package/method-override)

## 安裝與執行步驟 (Installing and execution)

1.開啟終端機(Terminal)，clone到本機專案位置:

```
git clone https://github.com/bluesmy/restaurant_list_refactoring.git
```

2.切換至專案資料夾

```
cd restaurant_list_refactoring
```

3.安裝套件
```
npm install  //自動安裝package.json內套件
```

4.事先安裝完MongoDB後，啟動MongoDB伺服器

```
[~/mongodb/bin] ./mongod --dbpath ~/mongodb-data --bind_ip 127.0.0.1
```

5.匯入種子檔案

```
node models/seeds/restaurantSeeder.js  //匯入種子餐廳資料
```

當終端機出現以下字樣，表示種子資料已新增至資料庫，按下 Ctrl + C 結束執行

```
db connected!

done
```

6.啟動伺服器，並執行專案

```
npm run dev
```

7.當終端機顯示以下字樣，表示伺服器與資料庫已啟動並成功連結
`App is running
mongodb connected!`

```
Ctrl + C *2  //連按兩下 Ctrl + C 關閉伺服器
```

瀏覽器輸入 [http://localhost:3000](http://localhost:3000) 即可開始使用。

## 功能描述 (Features)

- 首頁展示所有餐廳照片、餐廳名稱、餐廳分類、餐廳評分
- 依照餐廳名稱及餐廳類別來搜尋餐廳
- 可新增、編輯、刪除餐廳資訊
- 檢視餐廳詳細資訊包含類別、地址、電話、描述、圖片
  - 點選地址旁圖示可開啟新分頁查看Google Map上該地點資訊
- 依照餐廳名稱、類別、地區、評分進行升冪或降冪排序

## 專案畫面 (Screenshot)

![首頁](https://raw.githubusercontent.com/bluesmy/restaurant_list_refactoring/master/public/img/index.png)
![餐廳詳細資訊](https://raw.githubusercontent.com/bluesmy/restaurant_list_refactoring/master/public/img/detail.png)
![編輯餐廳頁面](https://raw.githubusercontent.com/bluesmy/restaurant_list_refactoring/master/public/img/edit.png)

## 專案使用工具 (Built With)

* [Visual Studio Code](https://code.visualstudio.com/) - The integrated development environment used
* [Express](https://expressjs.com) - The web framework used
* [Express-Handlebars](https://www.npmjs.com/package/express-handlebars) - The template engine used
* [Body-Parser](https://www.npmjs.com/package/body-parser) - Parse incoming request bodies in a middleware before handlers
* [MongoDB](https://www.mongodb.com/) - The database used
* [Mongoose](https://mongoosejs.com/) - ODM of MongoDB
* [Method-Override](https://www.npmjs.com/package/method-override) - Enable usage of HTTP verbs such as PUT or DELETE

## 專案開發人員 (Contributor)

* **Sheri Su** - [bluesmy](https://github.com/bluesmy)