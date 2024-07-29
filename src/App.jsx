import { useState } from 'react';
import useInput from './useInput';

function App() {
    const maxLength = (value) => value.length < 10; //유효성 검사할 함수
    const name = useInput('Mr. ', maxLength); //return되는 value와 onChange를 사용할 수 있음
    return (
        <div>
            <h1>Hello</h1>
            <input placeholder="Name" {...name} />
            {/* value={name.value} onChange={name.onChange} 과 같은 뜻임*/}
        </div>
    );
}

export default App;
