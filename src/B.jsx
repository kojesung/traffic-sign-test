import React from 'react';

const Message = ({ message }) => {
    return <div>{message}</div>;
};

const ListItem = ({ post }) => {
    return (
        <li>
            <p>{post.title}</p>
        </li>
    );
};

const List = ({ post }) => {
    return (
        <ul>
            {post.map((post) => {
                return <ListItem post={post} />;
            })}
        </ul>
    );
};

const B = ({ value, post }) => {
    return (
        <div>
            <h1>B Componenet</h1>
            <Message message={value} />
            <List post={post} />
        </div>
    );
};

export default B;
