import { useEffect } from 'react';

const useBeforeLeave = (onBefore, divRef) => {
    useEffect(() => {
        if (typeof onBefore !== 'function') return;

        if (divRef.current) {
            //divRef가 제대로 정의되지 않았을 때를 대비하여 Optional Chaining 사용할 수 있음
            //값이 없으면 undefiend를 반환해줌
            //이럴 이건 ref객체가 아닌 일반 DOM객체를 getElementId 등을 통해 divRef로 전달했을 때를 고려한 상황인데
            //이것까지 고려하려면 if(divRef?.current)로 바꾸고
            // } else if (target?.onmouseleave === undefined) {
            //     return;
            // } else {
            //     target.addEventListener("mouseleave", eventFunc);
            //     return () => target.removeEventListener("mouseleave", eventFunc);
            // }
            //이런식으로 조건 추가해줘야함
            divRef.current.addEventListener('mouseleave', onBefore);
        } else {
            return;
        }
        //document.addEventListener('mouseleave', onBefore());이렇게 바로 호출하면 함수를 한번 호출하고 끝인게 되고
        //onBefore이라는 함수 이름만 전달해주면 해당 이벤트일 때 실행시킬 이벤트를 전달받는 개념인 것 같음
        return () => {
            divRef.current.removeEventListener('mouseleave', onBefore);
        };
    }, []);
};
//document에 접근하는건 강의에서 해줘서 객체 하나를 지정해서 해봤는데 방법이 떠오르지 않아다가 useRef로 해결하는 방식을 찾아서 따라 해봤음
//useRef로 객체에 접근해서 그냥 onMouseLeave를 구현한 느낌이 되었음
//documnet에 접근하면 화면을 기준으로 동작하게 됨
export default useBeforeLeave;
