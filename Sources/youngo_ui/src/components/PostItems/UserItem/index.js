import classNames from 'classnames/bind';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import style from '../PostItem.module.scss';

const cs = classNames.bind(style);

function UserItem({ user }) {
    const navigate = useNavigate();
    const location = useLocation();

    function handleNavigate(e) {
        e.preventDefault();
        e.stopPropagation();

        if (location.pathname !== `/@${user.username}`) navigate(`/@${user.username}`);
    }

    return (
        <div className={cs('wrapper-user')}>
            {user && (
                <div onClick={(e) => handleNavigate(e)}>
                    <img className={cs('user-avt')} src={user.image} alt="" />
                </div>
            )}
            {user && (
                <div onClick={(e) => handleNavigate(e)}>
                    <h4 className={cs('user-name')}>{user.username}</h4>
                </div>
            )}
        </div>
    );
}

export default UserItem;
