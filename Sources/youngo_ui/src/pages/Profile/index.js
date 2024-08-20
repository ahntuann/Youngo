import classNames from 'classnames/bind';
import { useLocation } from 'react-router-dom';

import style from './Profile.module.scss';
import ProfileAccountItem from '~/components/ProfileAccountItem';

const cs = classNames.bind(style);

// fake getAPI
const user = {
    userName: 'Nguyễn Linh Thảo',
    nickname: '@babibong_28',
    path: '/@babibong_28',
    avt: 'https://p16-sign-sg.tiktokcdn.com/aweme/720x720/tos-alisg-avt-0068/a3e49623f8a3461eb16fc3ecbd31ec09.jpeg?lk3s=a5d48078&nonce=95493&refresh_token=54181da9f36b8a6d7936a8a39fe466b3&x-expires=1724248800&x-signature=lEtSh27%2BMfOqWXBVzbN%2BsNR6IDQ%3D&shp=a5d48078&shcp=81f88b70',
    description: 'The best way to predict the future is to create it🌻',
};

function Profile() {
    const location = useLocation().pathname;

    return (
        <div className={cs('wrapper')}>
            <ProfileAccountItem user={user} />
        </div>
    );
}

export default Profile;
