import classNames from 'classnames/bind';

import style from './Post.module.scss';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import PostItems from '~/components/PostItems';

const cs = classNames.bind(style);

function Post() {
    const { nickname, postID } = useParams();

    const [user, setUser] = useState(() => []);
    const [post, setPost] = useState(() => []);

    useEffect(() => {
        const fetchPost = async () => {
            const res = await fetch(`https://dummyjson.com/posts/${postID}`);
            const post = await res.json();

            setPost([post]);
        };

        fetchPost();
    }, []);

    useEffect(() => {
        const fetchUser = async () => {
            const res = await fetch(`https://dummyjson.com/users/filter?key=username&value=${nickname.slice(1)}`);
            const user = await res.json();

            setUser(user.users);
        };

        fetchUser();
    }, []);

    return (
        <div className={cs('wrapper')}>
            <PostItems posts={post} />
        </div>
    );
}

export default Post;
