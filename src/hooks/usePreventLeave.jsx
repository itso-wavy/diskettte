// const usePreventLeave = () => {
//   // 사용자가 변경 사항을 저장하지 않고 페이지를 떠날 경우 실수로 데이터를 잃는 상황을 방지할 수 있음
// 주문 중 취소시 사용 가능
//   const listener = e => {
//     e.preventDefault();
//     e.returnValue = '';
//   };

//   const enablePrevent = () => window.addEventListener('beforeunload', listener);

//   const diablePrevent = () =>
//     window.removeEventListener('beforeunload', listener);

//   return { enablePrevent, diablePrevent };
// };

// export default usePreventLeave;
