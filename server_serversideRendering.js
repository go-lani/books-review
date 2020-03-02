const express = require("express");
// nodejs의 모듈
const path = require("path");

const fs = require("fs");

const ReactDOMServer = require("react-dom/server");
const React = require("react");

// jsx는 react뿐만아니라 babel이 필요하므로 nodejs에서는 바벨을 사용할 수 없으므로 jsx문법을 사용할 수 없다.
// X !! const string = ReactDOMServer.renderToString(<div></div>);
// 예시로 React.createElement를 활용하여 테스트해보자
// const string = ReactDOMServer.renderToString(
//   React.createElement("div", null, "Hello world"),
// );

// console.log(string);

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
  const string = ReactDOMServer.renderToString(
    React.createElement("div", null, "Hello world"),
  );
  // 리액트 컴포넌트를 렌더링해서 얻는 문자열 덩어리를 id가 root인 div에 넣어야한다.
  const indexPath = path.join(__dirname, "build", "index.html");
  // index.html 페이지의 문자열을 읽음
  const indexString = fs.readFileSync(indexPath).toString();

  // 어떤 특정한 문자열을 다음 인수의 값으로 바꿔준다
  // index.html에 직접 div id root안에 XXXXX를 넣어놓고 확인해보는 방법
  // const responseData = indexString.replace("XXXXXX", string);

  // 그냥 때려넣어보는 방법
  const responseData = indexString.replace(
    '<div id="root"></div>',
    `<div id="root">${string}</div>`,
  );

  res.send(responseData);
});

// 포트지정
app.listen(9000, () => {
  console.log("server start...");
});
