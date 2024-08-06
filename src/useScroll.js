import { useEffect, useState } from "react";

const useScroll = () => {
    const [state, setState] = useState(
        {
            x: 0,
            y: 0
        });

    const onScroll = () => {
        setState({
            x: window.scrollX,
            y: window.scrollY
        })
    }

    useEffect(() => {
        window.addEventListener("scroll", onScroll)
        return () => {
            window.removeEventListener("scroll", onScroll)
        }//useEffect의 clean-up함수는 의존성 배열이 변경될 때,
        //컴포넌트가 DOM에서 언마운트 될 때 발생
        //즉 useEffect의 본 함수가 먼저 실행되고 의존성 배열이 변경되면
        //clean-up함수가 실행되고 그 다음의 본 함수가 다시 실행되는 주기
    }, [])

    return state;
}

export default useScroll;