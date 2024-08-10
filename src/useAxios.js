import defaultAxios from 'axios';
import { useEffect, useState } from 'react';

//defaultAxios는 axios라이브러리를 설정할 수 있는 기능인거고 따로 설정을 안해주면 그냥 axios랑 같은 기능
// const myAxios = defaultAxios.create({
//     baseURL: 'https://jsonplaceholder.typicode.com',
//     timeout: 5000
// }); 형식으로 설정 가능
//이렇게 설정하면
// const response = await myAxios.post('/data', {
//     key1: 'value1',
//     key2: 'value2'
// }); 형식으로 사용 가능
const useAxios = (opts, axiosInstance = defaultAxios) => {
    const [state, setState] = useState({
        loading: true,
        error: null,
        data: null,
    });

    const [trigger, setTrigger] = useState(0);

    const refetch = () => {
        setTrigger(Date.now);
    };

    useEffect(() => {
        axiosInstance(opts).then((data) => {
            setState({
                ...state, //기존에 있는 값은 그대로 가져오고 필요한 부분만 수정하기 위해
                loading: false,
                data,
            });
        });
        console.log('이건 왜 안됨?');
    }, [trigger]);

    if (!opts.url) {
        return;
    }

    return { ...state, refetch };
    //state를 직접 반환하면 useAxios함수 내부의 state와 동일한 객체가 반환(메모리까지 동일한)되는데
    //...state를 반환하면 얕은 복사가 되어(최상위 프로퍼티만 복사됨) 상태 변화를 올바르게 감지할 수 있음
    //인줄 알았는데 이 상황은 불변성 유지랑은 상관 없는 상황이었음, 불변성 유지는 state를 set어쩌구로 바꾸지 않는 상황만 피하면 됨
    //...state로 반환하면 1: state 묶음, 2: refetch 묶음으로 객체가 분리되고 state 내의 객체를 직접 사용 가능함
    //직접 사용 가능하다는게 const { loading, data, error } = useAxios(~~) 이런식으로 바로 가능하고
    //state를 그대로 반환하면 const {state, refetch} = useAxios(~~)
    //const {loading, data, error } = state 이런식으로 한번의 과정을 더 거쳐야함
};

export default useAxios;
