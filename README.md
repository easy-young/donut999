# donut999 [도넛 철도 999]
  
<div align=center>
  <h1>
    🔨 Tech Stack
  </h1>
  <img src="https://img.shields.io/badge/html-E34F26?style=for-the-badge&logo=html5&logoColor=white">
  <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white">
  <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=black">
  
</div>

#### Project nickname : 경일 커뮤니티
#### Project execution period : 2022.05.16 ~ 22.05.31

## Description

수도권에 도넛 프렌차이즈 가게들이 우후죽순 생겨나고 있지만, 정작 수제 도넛집은 60곳도 채 되지 않는다. 이미 기존에 맛집 사이트가 넘쳐나지만, 도넛이라는 특정 음식만의 리뷰와 랭킹을 매기는 사이트는 전무하다.
우리는 수도권인데도 불구하고 수제 도넛 가게 집의 수는 생각보다 적으며 도넛 매니아 층은 그 수가 점점 증가하고 있다는 점에 집중하였다. 도넛 철도 999에선 흔하디 흔한 프렌차이즈 도넛을 제외한 
수제 도넛 맛집만의 리뷰, 평점, 랭킹 등을 볼 수 있다. 또한, 수요층의 연령대(10 ~ 20대)를 고려하여 맛집 사이트와 지하철 노선도를 접목시켜 역 근처의 맛집을 지하철 노선도의 역을 클릭하여 
간편하게 알아낼 수 있다.


<img width="90%" src="https://user-images.githubusercontent.com/99451642/195076687-d29dbc02-0ce2-4adf-b842-f578bdc5cba2.gif"/>

## Step 1

```
npm install
```

Or

```
npm i
```

## Step 2 

```
cd back
```

```
.env
```

```
vi .env
```

```
DB_HOST = 127.0.0.1
DB_USER = 'your_mysql_id'
DB_PASSWORD = 'your_mysql_id'
DB_DATABASE = 'your_database_name'

```

Or

back 디렉토리 안에 .env 파일을 생성해 준 뒤

```
DB_HOST = 127.0.0.1
DB_USER = 'your_mysql_id'
DB_PASSWORD = 'your_mysql_id'
DB_DATABASE = 'your_database_name'

```
를 입력 후 저장해준다.


**DB스키마 파일 위치: back/cd/etc/DB.sql

## Step 3

- 사진이 저장 되는 디렉토리 생성하기

```
cd back
```

```
mkdir public
```

```
cd public
```

```
mkdir uploads
```

## Step 4

```
cd front
```

```
npm run start
```

다른 터미널 Open

```
cd front
```

```
npm run start
```
