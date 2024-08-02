const usePreventLeave = () => {
    const listener = (event) => {
        const confirmationMessage = '끄지마세요 ㅠㅠ'; //경고 메세지 넣어도 최신 브라우저에서는 무시한다고 함
        event.preventDefault();
        event.returnValue = confirmationMessage; //이걸 넣어줘야 작동함
        //event.returnValue는 beforeunload와 함께 사용되는데 이는 띄울 경고 메세지를 보여줌
    };
    const addPrevent = () => {
        window.addEventListener('beforeunload', listener);
        //beforeunload는 페이지가 닫히기 전에 함수가 작동되도록 함
    };
    const removePrevent = () => {
        window.removeEventListener('beforeunload', listener);
    };
    return { addPrevent, removePrevent };
    //return { addPrevent : 원하는 함수명1, removePrevent : 원하는 함수명2 };
    //로 함수 이름 변수로 바꿀 수 있음
};

export default usePreventLeave;
