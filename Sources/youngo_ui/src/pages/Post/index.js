import classNames from 'classnames/bind';

import style from './Post.module.scss';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import PostItems from '~/components/PostItems';
import Comments from '~/components/Comments';

const cs = classNames.bind(style);

function Post() {
    const { postID } = useParams();
    const [post, setPost] = useState(() => []);

    useEffect(() => {
        const fetchPost = async () => {
            const res = await fetch(`https://dummyjson.com/posts/${postID}`);
            const post = await res.json();

            setPost([post]);
        };

        fetchPost();
    }, []);

    return (
        <div className={cs('wrapper')}>
            <PostItems posts={post} />

            {post.length > 0 && <Comments postID={post[0].id} limit={10} />}
        </div>
    );
}

export default Post;
