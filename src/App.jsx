import { useRef, useState } from 'react';
import useInput from './useInput';
import useTab from './useTab';
import useTitle from './useTitle';
import useClick from './useClick';
import useConfirm from './useConfirm';

function App() {
    const maxLength = (value) => value.length < 10; //유효성 검사할 함수
    const name = useInput('Mr. ', maxLength); //return되는 value와 onChange를 사용할 수 있음
    /////////////////////////////////////////////////////////
    const content = [
        {
            tab: '첫번째 탭',
            content: '이것은 첫번째 탭',
        },
        {
            tab: '두번째 탭',
            content: '이것은 두번째 탭',
        },
    ];
    const { currentItem, changeItem } = useTab(0, content);
    //currentItem은 현재 나타낼 값
    //changeItem은 현재 나타낼 값을 바꿀 수 있게 해주는 함수
    //currentItem이 index값에 따라서 바뀌는 것이기 때문에 changeItem에 index값을 넘겨주며 currentItem을 바꿔줌

    const titleUpdator = useTitle('Loading..');
    setTimeout(() => {
        titleUpdator('Home');
    }, 5000);
    const sayHello = () => {
        console.log('say Hello');
    };
    const context = useClick(sayHello); //useClick을 호출해주면서 elementRef를 얻게 됨
    //context는 참조를 감지할 수 있는 변수가 됨

    const deleteSomething = () => {
        console.log('deleting something');
    };
    const stoppppp = () => {
        console.log('stop deleting');
    };
    const confirmDelete = useConfirm('Are you sure?', deleteSomething, stoppppp);
    return (
        <div>
            <div>
                <h1>useInput 기능</h1>
                <input placeholder="Name" {...name} />
                {/* value={name.value} onChange={name.onChange} 과 같은 뜻임*/}
            </div>
            <div>
                <h1>useTab 기능</h1>
                {content.map((currentTab, index) => (
                    <button
                        onClick={() => {
                            changeItem(index);
                        }}
                    >
                        {currentTab.tab}
                    </button>
                ))}
                <div>{currentItem.content}</div>
                {/* 
                처음에 만드는 도중 tabResult를 그대로 반환하려고 해서 에러가 났는데 이 결과값을 눈으로 볼 수 없어서 찾는데 오래걸렸음
                JSON.stringly로 렌더링할 값을 감싸서 어떤 형태로 나오는지 확인할 수 있었음
                 */}
            </div>
            <div>
                <h1>useTitle 기능</h1>
                <div>처음 마운트 되고 5초 뒤에 탭 이름이 Home으로 바뀜</div>
            </div>
            <div>
                <h1>useClick 기능</h1>
                <div style={{ backgroundColor: 'yellow' }} ref={context}>
                    여기를 클릭하면 콘솔에 무언가 뜹니다
                </div>
            </div>
            <div>
                <h1>useConfirm 기능</h1>
                <button onClick={confirmDelete}>무언가 삭제하는 버튼</button>
            </div>
        </div>
    );
}

export default App;
