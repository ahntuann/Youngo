import classNames from 'classnames/bind';

import style from './PostItem.module.scss';
import { useEffect, useState } from 'react';
import PostItem from './PostItem';

const cs = classNames.bind(style);

function PostItems({ posts }) {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        async function fetchUser() {
            const userPromises = posts.map((post) => {
                return fetch('https://dummyjson.com/users/' + post.userId)
                    .then((res) => res.json())
                    .then((user) => user)
                    .catch(() => {
                        console.log('User error');
                    });
            });

            const fetchedUsers = await Promise.all(userPromises);
            setUsers(fetchedUsers);
        }

        fetchUser();
    }, [posts]);

    return (
        <div className={cs('wrapper')}>
            {posts &&
                posts.map((post) => {
                    return <PostItem key={post.id} post={post} users={users} />;
                })}
        </div>
    );
}

export default PostItems;
