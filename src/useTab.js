import { useState } from 'react';

/**
 *
 * @param { number } initialTab 처음 띄우고 싶은 배열의 인덱스
 * @param { array } allTabs 다루고 싶은 배열
 * @returns currentItem : 바뀐 배열의 인덱스, changeItem : setCurrentIndex함수 -> 인덱스를 바꾸는 함수
 */
const useTab = (initialTab, allTabs) => {
    const [currentIndex, setCurrentIndex] = useState(initialTab);
    if (!allTabs || !Array.isArray(allTabs)) {
        return;
    }
    return { currentItem: allTabs[currentIndex], changeItem: setCurrentIndex };
    //changeItem이라는 반환값에 setCurrentIndex담음
    //serCurrentIndex라는 함수 자체를 빌려주어서 import하는 곳에서 사용할 수 있는데
    //javascript에서는 함수 자체가 일급 객체이기 때문에 가능
    //javascript의 객체 리터럴 방식을 활용한 반환값인데
    // const a = {
    //     currentItem : allTabs[currentIndex],
    //     changeItem : setCurrentIndex
    // }
    //이렇게 a를 반환해준다는 것과 같은 뜻임
};

export default useTab;
