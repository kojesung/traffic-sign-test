import { useState } from 'react';

const useInput = (initialValue, validator) => {
    //처음에 default값을 지정하고 그 값이 변할 수 있도록 해주는 기능
    const [value, setValue] = useState(initialValue);
    //value를 return할 거니까
    const onChange = (event) => {
        const {
            target: { value },
        } = event; // => const value = event.target.value; 즉 value변수의 event를 감지
        let willUpdate = true; //validator를 입력하지 않아도 기본값이 true이기 때문에 값 변경은 가능
        if (typeof validator === 'function') {
            willUpdate = validator(value); // validator함수는 True/False를 반환하는 함수여야만 함
        }
        if (willUpdate) {
            setValue(value);
        }
    };
    return { value, onChange };
};

export default useInput;
