import classNames from 'classnames/bind';
import { useLocation } from 'react-router-dom';
import style from './Profile.module.scss';
import ProfileAccountItem from '~/components/ProfileAccountItem';
import NavSlide from '~/components/NavSlide';
import { currentUser } from '../Home';
import { useEffect, useRef, useState } from 'react';
import PostItems from '~/components/PostItems';

const cs = classNames.bind(style);

const navListCurrent = [{ title: 'Bài đăng' }, { title: 'Đã lưu' }, { title: 'Được gắn thẻ' }];

const navList = [{ title: 'Bài đăng' }, { title: 'Được gắn thẻ' }];

function Profile() {
    const [user, setUser] = useState(null);
    const [posts, setPosts] = useState([]);
    const [active, setActive] = useState(() => 0);

    const ref = useRef();

    const location = useLocation().pathname.substring(2);

    function handleClickNav(index) {
        setActive(index);
    }

    useEffect(() => {
        async function fetchUser() {
            const res = await fetch('https://dummyjson.com/users/filter?key=username&value=' + location);
            const data = await res.json();
            return data.users[0];
        }

        fetchUser().then((user) => setUser(user));
    }, []);

    useEffect(() => {
        if (user && active === 0) {
            const fetchPost = async () => {
                const res = await fetch(`https://dummyjson.com/posts/user/${user.id}`);
                const posts = await res.json();
                setPosts(posts.posts);
            };

            fetchPost();
        } else {
            setPosts([]);
        }
    }, [user, active]);

    return (
        <div className={cs('wrapper')}>
            <ProfileAccountItem user={user} className={cs('profile-account')} />
            <NavSlide
                ref={ref}
                navList={location === currentUser ? navListCurrent : navList}
                className={cs('nav-slide')}
                handleClickNav={handleClickNav}
            />
            {posts.length > 0 && <PostItems posts={posts} />}
        </div>
    );
}

export default Profile;
