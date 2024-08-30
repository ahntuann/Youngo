import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import style from '../PostItem.module.scss';

const cs = classNames.bind(style);

function UserItem({ user }) {
    return (
        <div className={cs('wrapper-user')}>
            {user && (
                <Link to={`/@${user.username}`}>
                    <img className={cs('user-avt')} src={user.image} alt="" />
                </Link>
            )}
            {user && (
                <Link to={`/@${user.username}`}>
                    <h4 className={cs('user-name')}>@{user.username}</h4>
                </Link>
            )}
        </div>
    );
}

export default UserItem;
