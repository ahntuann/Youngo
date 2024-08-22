import classNames from 'classnames/bind';

import style from './Home.module.scss';
import { useEffect, useState } from 'react';
import PostItem from '~/components/PostItem';

const cs = classNames.bind(style);

function Home() {
    const [curPosts, setCurPosts] = useState(() => []);
    const POST_PER_PAGE = 10;
    const [isLoading, setIsLoading] = useState(() => false);
    const [page, setPage] = useState(() => 1);

    useEffect(() => {
        console.log(isLoading);
        function handleScroll() {
            if (window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight)
                setPage((prev) => prev + 1);
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const fetchPosts = async () => {
            if (isLoading) return;

            setIsLoading(true);

            try {
                const res = await fetch(
                    `https://dummyjson.com/posts/?limit=${POST_PER_PAGE}&skip=${(page - 1) * POST_PER_PAGE}`,
                );
                const posts = await res.json();
                setCurPosts([...curPosts, ...posts.posts]);
            } catch (error) {
                console.log('Post error');
            } finally {
                setIsLoading(false);
            }
        };

        fetchPosts();
    }, [page]);

    return <div className={cs('wrapper')}>{<PostItem posts={curPosts} />}</div>;
}

const currentUser = '/@babibong_28';
export { currentUser };

export default Home;
