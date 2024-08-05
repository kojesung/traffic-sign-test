import { useEffect, useState } from 'react';

const useNetwork = (onChange) => {
    const [status, setStatus] = useState(navigator.onLine); //T/F
    const handleChange = () => {
        if (typeof onChange === 'function') {
            onChange(navigator.onLine); //status 바꿔주는 동시에 onChange도 매번 실행시켜줌
        }
        setStatus(navigator.onLine);
    };
    useEffect(() => {
        window.addEventListener('online', handleChange); //네트워크 상태가 바뀌면 status도 업데이트하도록
        window.addEventListener('offline', handleChange);
        return () => {
            window.removeEventListener('online', handleChange);
            window.removeEventListener('offline', handleChange);
        };
    }, []);
    return status;
};

export default useNetwork;
