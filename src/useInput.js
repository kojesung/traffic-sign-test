import { useState } from 'react';

/**
 *
 * @param {string} initialValue input박스의 초기 내용
 * @param {Function} validator input박스에 들어갈 내용에 대한 유효성을 검사해줄 함수(T/F 형태로 반환해주어야 함)
 * @returns 바뀌는 value와 event를 감지하고 변환해주는 onChange함수가 반환되어 자동으로 value가 바뀜
 */
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
