import { useEffect, useRef, useState } from 'react';
import useInput from './useInput';
import useTab from './useTab';
import useTitle from './useTitle';
import useClick from './useClick';
import useConfirm from './useConfirm';
import usePreventLeave from './usePreventLeave';
import useBeforeLeave from './useBeforeLeave';
import useFadeIn from './useFadeIn';
import useNetwork from './useNetwork';
import useScroll from './useScroll';
import useFullScreen from './useFullScreen';
import useNotification from './useNotification';
import useAxios from './useAxios';
import A from './A';
import B from './B';

function App() {
    const maxLength = (value) => value.length < 10; //유효성 검사할 함수
    const name = useInput('Mr. ', maxLength); //return되는 value와 onChange를 사용할 수 있음

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

    const { addPrevent, removePrevent } = usePreventLeave(); //usePreventLeave를 함수처리해주어야 작동함, 함수형 컴포넌트라 그런건가?

    const divRef = useRef();
    const doWhenMouseLeave = () => {
        console.log('나가지마세여');
    };
    useBeforeLeave(doWhenMouseLeave, divRef);

    const fadeInH1 = useFadeIn(3, 2);
    const fadeInDiv = useFadeIn(5, 3);

    const handleNetworkChange = (onLine) => {
        console.log(onLine ? '온라인이세요' : '오프라인이세요');
    };
    const onLine = useNetwork(handleNetworkChange); //네트워크 상태를 T/F로 받음

    const { y } = useScroll();

    const { fullScreenElement, toFullScreen, toSmallScreen } = useFullScreen();

    const triggerNotification = useNotification('알람이 뜹니다', { body: '어쩌구' });

    const { loading, data, error, refetch } = useAxios({
        url: 'https://yts.mx/api/v2/list_movies.json',
    });
    console.log(loading, data, error);

    const [value, setValue] = useState('');
    const [post, setPost] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((posts) => setPost(posts));
    }, []);

    return (
        <div style={{ height: '2000vh' }}>
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
            <div>
                <h1>usePreventLeave 기능</h1>
                <button onClick={addPrevent}>경고 기능 추가</button>
                <button onClick={removePrevent}>경고 기능 삭제</button>
            </div>
            <div>
                <h1>useScroll 기능</h1>
                <div style={{ position: 'fixed', color: y > 100 ? 'red' : 'blue' }}>
                    스크롤의 y 좌표에 따라 해당 텍스트의 색이 바뀝니다
                </div>
            </div>
            <div>
                <div style={{ height: '0.3vh' }}></div>
            </div>
            <div>
                <h1>useBeforeLeave 기능</h1>
                <div ref={divRef} style={{ backgroundColor: 'yellowgreen' }}>
                    마우스가 화면을 나가면 무언가 동작합니다
                </div>
            </div>
            <div>
                <h1 {...fadeInH1}>useFadeIn 기능</h1>
                <div {...fadeInDiv}>useFadeIn은 이 태그들이 천천히 나타나게 해줍니다</div>
            </div>
            <div>
                <h1>useNetwork 기능</h1>
                <div>👇👇👇👇👇온라인 오프라인 상태가 텍스트로 나타납니다.</div>
                <div>{onLine ? 'onLine' : 'offLine'}</div>
                <div>콘솔창도 확인해보기</div>
            </div>

            <div>
                <h1>useFullScreen 기능</h1>
                <div>
                    <div ref={fullScreenElement}>
                        <img src="https://i.ibb.co/R6RwNxx/grape.jpg" alt="grape" />
                        <button onClick={toSmallScreen}>다시 작게</button>
                    </div>
                    <button onClick={toFullScreen}>전체화면으로</button>
                </div>
            </div>
            <div>
                <h1>useNotification 기능</h1>
                <button onClick={triggerNotification}>이거 누르면 알람이 떠요</button>
            </div>
            <div>
                <h1>useAxios 기능</h1>
                <h2>{data ? `data status : ${data.status}` : 'loading'}</h2>
                <button onClick={refetch}>refetch</button>
            </div>
            <div>
                <h1>React.memo 기능</h1>
                <input value={value} onChange={(e) => setValue(e.target.value)} />
                <div style={{ display: 'flex' }}>
                    <A value={value} post={post} />
                    <B value={value} post={post} />
                </div>
            </div>
        </div>
    );
}

export default App;
