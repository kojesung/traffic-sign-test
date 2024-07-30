import { useEffect, useState } from 'react';

const useTitle = (initialTitle) => {
    const [title, setTitle] = useState(initialTitle);
    const updateTitle = () => {
        const htmlTitle = document.querySelector('title'); //<title><title/>의 영역
        htmlTitle.innerText = title;
    };
    useEffect(updateTitle, [title]); //mount될 때마다 updateTitle(탭의 이름을 title로 바꿔주는)
    //setTitle로 title을 바꾸면 mount되어서 updateTitle이 실행됨
    //updateTitle은 title을 `title`로 바꿔주는 함수
    return setTitle;
};

export default useTitle;
