import React, { useCallback } from 'react';

const Message = React.memo(({ message }) => {
    return <div>{message}</div>;
});

const ListItem = React.memo(({ post }) => {
    return (
        <li>
            <p>{post.title}</p>
        </li>
    );
});

const List = React.memo(({ post, testFunction }) => {
    testFunction();
    return (
        <ul>
            {post.map((post) => {
                return <ListItem post={post} />;
            })}
        </ul>
    );
});
//React.memo를 하면 메모이징 하고 다음 렌더링 시에 props가 같다면 메모이징 된 내용을 재사용 함

const B = ({ value, post }) => {
    const testFunction = useCallback(() => {
        console.log('useCallback 테스트');
    }, []);
    return (
        <div>
            <h1>B Componenet</h1>
            <Message message={value} />
            <List post={post} testFunction={testFunction} />
        </div>
    );
};
//B 컴포넌트에서 내부 컴포넌트를 세부적으로 나눈 이유는 리렌더링을 최소화하기 위해서인데 현재 input을 작동시킬 때마다
//현재는 B 컴포넌트의 모든 부분이 함께 렌더링 되고있음

export default B;
