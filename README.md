# ElectCar
[React] 20230628 탐라는 전기차 홈페이지 클론코딩

<img src="https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white"> <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black"> <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black">

## 코드수정
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
