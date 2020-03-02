// nodejs의 내부메소드
const express = require("express");
const path = require("path");

// APP만들기
const app = express();

app.get("");

// backend api 만들기
// localhost:9000/api/books에 request 요청을 하면 아래의 json을 보여준다.
app.get("/api/books", (req, res) => {
  res.json(["hello", "world"]);
});

// input과 output 설정
// static 파일을 요청했는데 있으면 그걸 준다.
// use 미들웨어 같은 거를 실행해줌.
// static안에는 어떤 폴더를 설정해줄 것인지 경로를 설정
// __dirname (현재 폴더의 경로를 얻어옴), build는 루트에서 합쳐질 폴더명 '/build'
app.use(express.static(path.join(__dirname, "build")));

// 그 외 어떤 요청이 와도 index.html을 준다.
// '*' 어떤 요청이 와도 path.join(__dirname, 'build', 'index.html') build/index.html 파일을 내려줄거야
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

// 포트지정
app.listen(9000, () => {
  console.log("server start...");
});
