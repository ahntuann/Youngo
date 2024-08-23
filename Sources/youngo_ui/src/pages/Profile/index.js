import classNames from 'classnames/bind';
import { useLocation } from 'react-router-dom';

import style from './Profile.module.scss';
import ProfileAccountItem from '~/components/ProfileAccountItem';
import NavSlide from '~/components/NavSlide';
import { currentUser } from '../Home';
import { useEffect, useState } from 'react';

const cs = classNames.bind(style);

const navListCurrent = [
    {
        title: 'Bài đăng',
    },
    {
        title: 'Đã lưu',
    },
    {
        title: 'Được gắn thẻ',
    },
];

const navList = [
    {
        title: 'Bài đăng',
    },
    {
        title: 'Được gắn thẻ',
    },
];

function Profile() {
    const [user, setUser] = useState(() => {});

    const location = useLocation().pathname.substring(2);

    useEffect(() => {
        async function fetchUser() {
            const res = await fetch('https://dummyjson.com/users/filter?key=username&value=' + location);
            const user = await res.json();

            return user.users[0];
        }

        fetchUser().then((user) => setUser(user));
    }, []);

    return (
        <div className={cs('wrapper')}>
            <ProfileAccountItem user={user} className={cs('profile-account')} />

            <NavSlide navList={location === currentUser ? navListCurrent : navList} className={cs('nav-slide')} />
        </div>
    );
}

export default Profile;
