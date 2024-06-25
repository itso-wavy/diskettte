<div align="center">
  <table>
    <tr style="border:0">
      <td style="border:0">
        <img width="50" src="./public/favicon.svg" alt="logo">
      </td>
      <td style="border:0">
        <h1 style="margin-left: 10px;">diskettte</h1>
      </td>
    </tr>
  </table>

  <p>
    <a href="https://diskettte.vercel.app/">https://diskettte.vercel.app</a>
  </p>
	
  ![react](https://shields.io/badge/react-black?style=for-the-badge&logo=react)
  ![styled-components](https://shields.io/badge/styled-components-black?style=for-the-badge&logo=styled-components)
  ![zustand](https://img.shields.io/badge/zustand-black?style=for-the-badge&logo=zustand)
  ![vercel](https://img.shields.io/badge/vercel-black?style=for-the-badge&logo=vercel)
</div>

## 1. 개요

리액트를 사용하여 대형 쇼핑몰 서비스의 비즈니스 로직을 적용한 프론트엔드를 개발하는 프로젝트입니다. 회원 인증, 상품 관리, 상품 검색, 장바구니, 결제 화면 등을 포함합니다. 무신사, 29cm, wconcept 등을 참고 했습니다.

## 2. 개발 환경

### (1) 프론트엔드:

- **JS 라이브러리**: react v18
- **라우팅**: react router v6
- **스타일링**: styled-components
- **API 통신**: axios
- **클라이언트 상태 관리**: zustand v4
- **인증**: JWT
- **배포**: vercel
- **아이콘**: react-icons
- **애니메이션**: framer motion v10
- **빌드 도구**: vite v4
- **코드 검사**: ESLint

### (2) 백엔드

- 개발 부트캠프에서 제공하는 API
- firebase 데이터베이스

### (3) 기타

- 디자인: figma, photoshop
- 이미지: 모든 이미지 에셋은 웹 AI 도구로 제작

## 3. 특징

1. **리액트 원리 학습에 집중**:
   - 라이브러리 사용을 최소화하고, 리액트의 핵심 원리(컴포넌트 구조, 라이프사이클, 훅, 컨텍스트) 이해를 통해 직접 구현
   - 메모이제이션 기법(useMemo, useCallback)을 활용한 성능 최적화
2. **효율적인 서버 통신 관리**:
   - axios 인스턴스를 통한 체계적인 API 설정 및 인증 토큰 처리, 일관적인 에러 처리 구현
   - react-router의 loader/action 기능을 활용한 선언적 데이터 페칭
3. **클라이언트 전역 상태 관리 최적화**:
   - zustand를 활용하여 ui 상태/인증/장바구니 관리 로직 등 전역 상태를 효율적으로 관리, 로직의 재사용성 향상과 불필요한 리렌더링 방지
   - localStorage에 상태를 저장하여 유저 활동 분실 방지
4. **디자인 및 프로젝트 아키텍처 직접 설계**:
   - 체계적인 폴더 구조와 코드 컨벤션으로 가독성과 개발 효율성 향상
   - 디자인 시스템을 구축하고 모든 UI 컴포넌트를 재사용 가능한 라이브러리 형태로 구현하여 일관성 보장
   - 모듈화된 컴포넌트 설계로 유지보수성과 확장성 강화
5. **고급 리액트 패턴 및 최신 기술 적용**:
   - Suspense와 Error Boundary를 이용한 선언적 비동기 처리
6. **사용자 경험(UX) 중심 UI 설계**:
   - 접근성 표준 준수 및 시맨틱 마크업 구현
   - 피드백 제공: 재미있는 여러 로딩 ui 제공. 에러 발생시엔 에러 페이지로 이동하여 에러 코드와 메시지를 화면에 표시, 비밀번호 생성 조건의 충족 여부를 실시간으로 피드백하는 등 인터랙티브 요소 제공
   - Framer Motion 등 애니메이션을 통한 인터랙티브 ui 구현. 스크롤 반응형 애니메이션과 애니메이티드 메시 그라데이션 등
   - 모든 페이지에 반응형 디자인 지원
7. **토큰 기반 인증 및 인가 절차 구현**:

- JWT를 활용한 사용자 인증/인가 처리
- 인증 상태에 따른 조건부 렌더링 및 보안 라우팅 구현
- XSS, CSRF 등 웹 보안 취약점 대응

4. **다양한 커스텀 훅과 유틸 함수 활용**: `useForm`, `useScript`, `useRedirect` 등의 커스텀 훅과 공통 로직을 추상화한 유틸 함수로 코드 중복 최소화
5. **최신 웹 기술 및 개발 방법론 적용**:
   - 최신 HTML, CSS, JS 스펙을 적극 활용한 모던 웹 개발
   - 작은 단위의 컴포넌트부터 시작하여 전체 시스템을 구축하는 바텀 업 방식의 개발 경험

## 4. 폴더 구조

```shell
│  index.html
│
├─public
└─src
    │  App.jsx
    │  main.jsx
    │
    ├─🎫components
    │  ├─🏷️@layout
    │  │      AuthRootLayout.jsx
    │  │      AuthRootLayout.style.jsx
    │  │      CheckoutRootLayout.jsx
    │  │      CheckoutRootLayout.style.jsx
    │  │      DashboardRootLayout.jsx
    │  │      DashboardRootLayout.style.jsx
    │  │      index.jsx
    │  │      ProductRootLayout.jsx
    │  │      RootLayout.jsx
    │  │      RootLayout.style.jsx
    │  │
    │  ├─🏷️@motion
    │  │      Card.jsx
    │  │      Card.style.jsx
    │  │      index.jsx
    │  │      Section.jsx
    │  │      Section.style.jsx
    │  │
    │  ├─🏷️@svg
    │  │      CartSvg.jsx
    │  │      CloseSvg.jsx
    │  │      DoubleArrowSvg.jsx
    │  │      DropdownSvg.jsx
    │  │      index.jsx
    │  │      LoginSvg.jsx
    │  │      LogoFacebookSvg.jsx
    │  │      LogoGithubSvg.jsx
    │  │      LogoInstagramSvg.jsx
    │  │      LogoTwitterSvg.jsx
    │  │      LogoutSvg.jsx
    │  │      LogoYoutubeSvg.jsx
    │  │      MenuOpenSvg.jsx
    │  │      MinusSvg.jsx
    │  │      MypageSvg.jsx
    │  │      PlusSvg.jsx
    │  │
    │  ├─🏷️@ui
    │  │      Accordion.jsx
    │  │      Accordion.style.jsx
    │  │      Badge.jsx
    │  │      Badge.style.jsx
    │  │      Button.jsx
    │  │      Button.style.jsx
    │  │      Carousel.jsx
    │  │      Carousel.style.jsx
    │  │      DoubleRangeSlider.jsx
    │  │      DoubleRangeSlider.style.jsx
    │  │      Form.jsx
    │  │      Form.style.jsx
    │  │      GridBlock.jsx
    │  │      GridBlock.style.jsx
    │  │      Img.jsx
    │  │      Img.style.jsx
    │  │      Input.jsx
    │  │      Input.style.jsx
    │  │      Label.jsx
    │  │      Label.style.jsx
    │  │      Modal.jsx
    │  │      Modal.style.jsx
    │  │      Pagination.jsx
    │  │      Pagination.style.jsx
    │  │      Table.jsx
    │  │      Table.style.jsx
    │  │      Tabs.jsx
    │  │      Tabs.style.jsx
    │  │      Tag.jsx
    │  │      Tag.style.jsx
    │  │
    │  ├─🏷️auth
    │  │      AuthForm.jsx
    │  │      Fieldsets.jsx
    │  │      google.jsx
    │  │      index.jsx
    │  │      SnsLoginButton.jsx
    │  │
    │  ├─🏷️cart
    │  │      Breadcrumb.jsx
    │  │      Breadcrumb.style.jsx
    │  │      CartItem.jsx
    │  │      CartItem.style.jsx
    │  │      CartList.jsx
    │  │      CartList.style.jsx
    │  │      CartSummary.jsx
    │  │      CartSummary.style.jsx
    │  │      index.jsx
    │  │
    │  ├─🏷️checkout
    │  │      CheckoutForm.jsx
    │  │      CheckoutForm.style.jsx
    │  │      CheckoutSummary.jsx
    │  │      CheckoutSummary.style.jsx
    │  │      Fieldsets.jsx
    │  │      Fieldsets.styled.jsx
    │  │      index.jsx
    │  │
    │  ├─🏷️common
    │  │      ConfiguredPagination.jsx
    │  │      index.jsx
    │  │      Loading.jsx
    │  │      Loading.style.jsx
    │  │      ScrollToTop.jsx
    │  │      ScrollToTop.style.jsx
    │  │      SearchInput.jsx
    │  │      SearchInput.style.jsx
    │  │      SkipNav.jsx
    │  │      SkipNav.style.jsx
    │  │
    │  ├─🏷️dashboard
    │  │      DashboardNav.jsx
    │  │      DashboardNav.style.jsx
    │  │      index.jsx
    │  │      OrderListTable.jsx
    │  │      OrderListTable.style.jsx
    │  │      ProductAdminForm.jsx
    │  │      ProductAdminForm.style.jsx
    │  │      SalesListTable.jsx
    │  │      SalesListTable.style.jsx
    │  │
    │  ├─🏷️footer
    │  │      Footer.jsx
    │  │      Footer.style.jsx
    │  │      FooterMain.jsx
    │  │      FooterMain.style.jsx
    │  │      FooterNav.jsx
    │  │      FooterNav.style.jsx
    │  │      index.jsx
    │  │
    │  ├─🏷️header
    │  │      Header.jsx
    │  │      Header.style.jsx
    │  │      HeaderAside.jsx
    │  │      HeaderAside.style.jsx
    │  │      HeaderCategories.jsx
    │  │      HeaderCategories.style.jsx
    │  │      HeaderMain.jsx
    │  │      HeaderMain.style.jsx
    │  │      index.jsx
    │  │      MobileNav.jsx
    │  │      MobileNav.style.jsx
    │  │
    │  └─🏷️product
    │          index.jsx
    │          ProductFilter.jsx
    │          ProductFilter.style.jsx
    │          ProductList.jsx
    │          ProductList.style.jsx
    │          ProductOrderForm.jsx
    │          ProductOrderForm.style.jsx
    │          QuantitySpinner.jsx
    │          QuantitySpinner.style.jsx
    │
    ├─🎫context
    │      form-context.jsx
    │
    ├─🎫hooks
    │      index.jsx
    │      useForm.jsx
    │      useHeaderHeight.jsx
    │      useInput.jsx
    │      useRedirect.jsx
    │      useScript.jsx
    │      useScrollTransition.jsx
    │      useTitle.jsx
    │
    ├─🎫lib
    │  ├─🏷️api
    │  │      auth-instance.jsx
    │  │      axiosConfig.jsx
    │  │      cart-instance.jsx
    │  │      error-handling.jsx
    │  │      index.jsx
    │  │      order-instance.jsx
    │  │      products-instance.jsx
    │  │
    │  ├─🏷️utils
    │  │      animation.js
    │  │      debounce.js
    │  │      storage.js
    │  │      text-decorator.js
    │  │      text-formatter.js
    │  │
    │  └─🏷️validation
    │          auth-validation.js
    │          index.js
    │          order-validation.js
    │          product-validation.js
    │
    ├─📜pages
    │  │  index.jsx
    │  │
    │  ├─(auth)
    │  │      index.jsx
    │  │      LogoutPage.jsx
    │  │      SigninPage.jsx
    │  │      SignupPage.jsx
    │  │
    │  ├─(categories)
    │  │      AllProductsPage.jsx
    │  │      AllProductsPage.style.jsx
    │  │      EventPage.jsx
    │  │      EventPage.style.jsx
    │  │      index.jsx
    │  │      NewArrivalsPage.jsx
    │  │      NewArrivalsPage.style.jsx
    │  │
    │  ├─(checkout)
    │  │      CartPage.jsx
    │  │      CartPage.style.jsx
    │  │      CheckoutPage.jsx
    │  │      CheckoutPage.style.jsx
    │  │      index.jsx
    │  │      OrderConfirmPage.jsx
    │  │      OrderConfirmPage.style.jsx
    │  │
    │  ├─(mypage)
    │  │      index.jsx
    │  │      OrdersPage.jsx
    │  │      OrdersPage.style.jsx
    │  │
    │  ├─(product)
    │  │      BrandPage.jsx
    │  │      BrandPage.style.jsx
    │  │      index.jsx
    │  │      ProductPage.jsx
    │  │      ProductPage.style.jsx
    │  │
    │  ├─(sellerpage)
    │  │      index.jsx
    │  │      ProductCreatePage.jsx
    │  │      ProductEditPage.jsx
    │  │      ProductsPage.jsx
    │  │      ProductsPage.style.jsx
    │  │
    │  ├─ErrorPage
    │  │      ErrorPage.style.jsx
    │  │      index.jsx
    │  │
    │  └─HomePage
    │          HomePage.style.jsx
    │          index.jsx
    │
    ├─🎫routes
    │      index.jsx
    │
    ├─🎫store
    │      authSlice.jsx
    │      cartSlice.jsx
    │      index.jsx
    │      modalSlice.jsx
    │      viewportSlice.jsx
    │
    └─🎫styles
            fonts.css
            GlobalStyle.jsx
            Theme.jsx
```

## 5. 기능 상세

|                                      **사이트 진입+회원가입+로그인**                                       |                                                  **에러 페이지**                                                   |
| :--------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------: |
| <video src="https://github.com/itso-wavy/diskettte/assets/108520997/35aa7677-6113-41d7-9355-cf48ca567a76"> | <img src="https://github.com/itso-wavy/diskettte/assets/108520997/25a91809-c242-47c9-81f1-8548167a2652" width=450> |
|                                       **구매자 전체 플로우\_모바일**                                       |                                               **판매자 전체 플로우**                                               |
| <video src="https://github.com/itso-wavy/diskettte/assets/108520997/69942c06-6b54-40a1-9152-4215baef7118"> |     <video src="https://github.com/itso-wavy/diskettte/assets/108520997/68277854-ce3d-4dd3-b985-0bbc8515866e">     |
|                                        **구매#1 전체 상품 페이지**                                         |                                            **구매#2 상품 상세 페이지**                                             |
| <video src="https://github.com/itso-wavy/diskettte/assets/108520997/251851cc-3a4c-4b49-8973-4b7040ef5fb4"> |     <video src="https://github.com/itso-wavy/diskettte/assets/108520997/9ae39dd3-0604-420e-8617-33008fafdde3">     |
|                                           **구매#3 카트 페이지**                                           |                                           **구매#4 브랜드 페이지+결제**                                            |
| <video src="https://github.com/itso-wavy/diskettte/assets/108520997/44c52023-f0eb-40cb-b80f-646a2cc9184a"> |     <video src="https://github.com/itso-wavy/diskettte/assets/108520997/053aad2f-d06e-4763-ac97-78ba7c2b9489">     |
|                                        **신규 상품 이벤트 페이지**                                         |                                                  **UI_Carousels**                                                  |
| <video src="https://github.com/itso-wavy/diskettte/assets/108520997/4b16a3c3-4342-4105-aaf4-9c04386c9764"> |     <video src="https://github.com/itso-wavy/diskettte/assets/108520997/cb9a7610-d9a1-4588-95b2-aeb667833eb1">     |
|                                          **UI_Nav+Search+Footer**                                          |                                          **UI_Pagination+Product filter**                                          |
| <video src="https://github.com/itso-wavy/diskettte/assets/108520997/91167aa5-db81-49e7-bd02-f4148fe071b2"> |     <video src="https://github.com/itso-wavy/diskettte/assets/108520997/60bde880-15e7-4626-aa9e-568a1e8a8ab4">     |
