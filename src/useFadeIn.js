import { useEffect, useRef } from 'react';

const useFadeIn = (duration, delay) => {
    const element = useRef();
    useEffect(() => {
        if (element.current) {
            //DOM요소에 적절하게 매치되었는지 확인
            const { current } = element;
            //useRef로 선언한 변수는 current : null 이라는 속성을 가지고있는데
            //JSX 요소에서 사용하면 해당 current는 해당 DOM요소를 가리키게 됨
            //이처럼 {}를 통해서 변수를 선언하는 것을 객체 구조 할당이라고 함.
            //따라서 `const current = element`랑은 다른 의미임
            //current === element.current
            current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
            //처음에 ease in out이라고해서 작동이 안됐었음
            //함수형으로 css관리하는 방법에 대해서 조금 익숙해져야될 것 같음
            current.style.opacity = 1;
        }
    }, []);
    return { ref: element, style: { opacity: 0 } };
};

export default useFadeIn;
