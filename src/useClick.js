import { useEffect, useRef } from 'react';

/**
 * @param {function} onClick - 클릭 이벤트 핸들러 함수
 * @returns {object} - 참조를 제공하는 ref 객체
 */
//어떤 변수가 이 함수를 참조하도록 하여 click반응이 일어났을 때 발생시킬 함수를 지정
const useClick = (onClick) => {
    const element = useRef(); //무언가를 참조할 수 있는 객체가 됨
    useEffect(() => {
        if (typeof onClick !== 'function') {
            return;
        }

        //.current는 해당 변수가 부착된 부모의 위치를 반환함
        if (element.current) {
            //아직은 element.current가 뭘 참조하는지 알 수 없음
            element.current.addEventListener('click', onClick);
        }
        return () => {
            //mount되어 위에 함수가 실행되면 unmount가 될때까지 기다리며 밑에 함수 작동을 대기
            if (element.current) {
                element.current.removeEventListener('click', onClick); //컴포넌트의 생명 주기를 고려한
            }
        };
    }, []);
    return typeof onClick !== 'function' ? undefined : element;
};
//div가 이 함수를 참조
export default useClick;
