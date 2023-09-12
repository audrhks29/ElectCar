# [React] 20230628 탐라는 전기차 홈페이지
## 1. 사용기술
### 사용된 기술
<img src="https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white"> <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black"> <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black"> <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=CSS3&logoColor=white"> <img src="https://img.shields.io/badge/Redux-764ABC?style=flat-square&logo=Redux&logoColor=white"> <img src="https://img.shields.io/badge/Axios-5A29E4?style=flat-square&logo=Axios&logoColor=white"> <img src="https://img.shields.io/badge/styled_components-DB7093?style=flat-square&logo=styledcomponents&logoColor=white">

### v1.3.0
<img src="https://img.shields.io/badge/Redux-764ABC?style=flat-square&logo=Redux&logoColor=white"> 사용

### v1.2.1
<img src="https://img.shields.io/badge/Axios-5A29E4?style=flat-square&logo=Axios&logoColor=white"> Hook 사용

### v1.0.0
<img src="https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white"> <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black"> <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black"> <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=CSS3&logoColor=white"> <img src="https://img.shields.io/badge/styled_components-DB7093?style=flat-square&logo=styledcomponents&logoColor=white">

## 2. Version Update

### v1.2.1
1. popup창 Like 기능 추가
2. Footer Logo 클릭시 Home으로 이동 추가
3. 데이터 수정
   - gist에 JSON파일 업로드
   - <img src="https://img.shields.io/badge/Axios-5A29E4?style=flat-square&logo=Axios&logoColor=white"> 불러오기
   - <img src="https://img.shields.io/badge/Axios-5A29E4?style=flat-square&logo=Axios&logoColor=white"> Hook 사용
### v1.2.0
1. 애니메이션 기능 추가
   - 메뉴 클릭 시 Navigation
   - Navigation Image
   - Home Image
2. NoticeList페이지 수정
   - 새로고침 시 로고 사라짐 현상 수정
   - NoticeList 로드 시 로고와 메뉴 색상이 바뀌지 않는 현상 수정
3. 페이지 추가
   - 이용약관
   - 개인정보처리방침
### v1.1.0
1. content
   - 검색창 위치 수정
   - 검색 기능 버튼 클릭시 검색으로 수정
   - 팝업 이미지 슬라이드 추가
   - 더보기 추가
   - Navigation 추가
   - footer 추가
2. noticeList 페이지 추가
3. NoticeDetail 페이지 추가
4. 로고 클릭 시 main화면 이동 추가
### v1.0.0
   탐라는 전기차 홈페이지
## 3. 코드수정
### 오류사항
- vite에서 BrowserRouter 사용하여 깃허브페이지로 배포시, 페이지가 로드되지 않는 문제 발생
- `./images/gnb_slider_1.jpg`와 같이 이미지 경로를 기입 시에 로드되는 페이지와 로드되지 않는 페이지가 생김

### 수정사항
<pre>build후 dist/index.html의 파일 내부에서 js및 css 파일의 경로를 절대경로로 지정</pre>
<pre>이미지를 상대경로 대신 절대경로로 지정하여서 폴더 내 페이지가 어느곳에 위치하던, 이미지를 불러올 수 있게함</pre>

1. vite.config.js
```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/ElectCar/dist/' //추가
})
```
`export default defineConfig({})`안에 `base: '/ElectCar/dist/'` 추가한다 이때 `base: '/ElectCar/dist/'`는 index.html이 위치한 주소가 되어야한다.

2. package.json
```js
{
  "name": "electcar",
  "homepage": "https://audrhks29.github.io/ElectCar/dist/", //추가
  ...생략
}
```
homepage 주소를 추가해준다. 이때 `https://audrhks29.github.io/ElectCar/dist/`는 메인페이지의 주소가 되어야한다

3. App.jsx
```js
const App = () => {
  return (
    <div className='wrap' style={{ position: "relative" }}>
      <GlobalStyle />
      <BrowserRouter basename="/ElectCar/dist/"> // basename 추가
        <ScrollToTop />
        <CommonHeader />
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/info" element={<TamlaIsCar />} />
          <Route path="/noticeList" element={<NoticeList />} />
          <Route path="/noticeList/:noticeID" element={<NoticeDetail />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
        <CommonFooter />
      </BrowserRouter>
    </div>
  );
};
```
`<BrowserRouter>` 내부에 `basename="ElectCar/dist/"` 를 설정해준다

4. 불러올 이미지 경로 수정
```js
const slideImages = [
  'images/gnb_slider_1.jpg',
  'images/gnb_slider_2.jpg',
  'images/gnb_slider_3.jpg',
];
...중략...
{slideImages.map((image, index) => (
        <SlideShowImage
          key={index}
          src={import.meta.env.BASE_URL + image} //추가
          alt={`Slide ${index + 1}`}
          active={index === activeIndex}
        />
      ))}

```
불러오려는 이미지 주소 앞에 `import.meta.env.BASE_URL`추가
주의해야 할 점은 creat-react-app으로 build한 것과 vite로 build한 것의 절대경로 설정방법에 차이가 있다.

5. index.html(dist폴더 내부)
```html
    <script type="module" crossorigin src="/ElectCar/dist/assets/index-8c80d4ec.js"></script>
    <link rel="stylesheet" href="/ElectCar/dist/assets/index-939025b8.css">
```
<pre>최상단 폴더부터 절대경로를 지정하여 불러와지도록 한다, 
1 ~ 4번 사항들을 수정한 후 build하고 위와같이 수정되었는지 확인</pre>

#### 기타사항
1. `<BrouwserRouter>` 대신 `<HashRouter>`를 사용하면 깃허브페이지에서 정상적으로 구동할 수 있으나, 주소창 앞에 #이 붙으며 `location.pathname`을 사용할 수 없게 됌

<hr>

## 미수정 오류
### 오류사항
- VS Code 개발자 환경에서는 새로고침해도 페이지 출력에 문제가 없으나 GitHub Page에서는 Home을 제외한 페이지에서 새로고침시 404페이지가 반환됌
### 해결방안
- 구글링을 통해 404.html 코드를 작성 후 public 폴더에 넣고 build명령 실행
```html
<!DOCTYPE html>
<html>
<head>
    <script>
        const redirectUrl = window.location.href.replace('/ElectCar/dist/', '/');
        window.location.replace(redirectUrl);
    </script>
</head>
<body>
    <h1>404 Not Found</h1>
</body>
</html>
```
- 브라우저 캐시 초기화
<pre>기타 여러가지 방법들을 시도해보았으나 실패</pre>
