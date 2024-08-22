import classNames from 'classnames/bind';

import style from './Home.module.scss';
import { useEffect, useState } from 'react';
import PostItem from '~/components/PostItem';

const cs = classNames.bind(style);

function Home() {
    const [curPosts, setCurPosts] = useState(() => []);

    useEffect(() => {
        async function fetchPost() {
            try {
                const res = await fetch('https://dummyjson.com/posts/?limit=10');
                const posts = await res.json();

                return posts.posts;
            } catch (error) {
                console.log('Something wrong...');
            }
        }

        fetchPost().then((posts) => {
            console.log(posts);
            setCurPosts(posts);
        });
    }, []);

    return (
        <div className={cs('wrapper')}>
            <PostItem posts={curPosts} />
        </div>
    );
}

const currentUser = '/@babibong_28';
export { currentUser };

export default Home;
