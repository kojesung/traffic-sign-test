import React from 'react';

export default function A({ value, post }) {
    return (
        <div>
            <h1>A Componenet</h1>
            <div>{value}</div>
            <ul>
                {post.map((post) => {
                    return (
                        <li key={post.id}>
                            <p>{post.title}</p>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
