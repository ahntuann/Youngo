import classNames from 'classnames/bind';

import style from '../PostItem.module.scss';

const cs = classNames.bind(style);

function UserItem({ user }) {
    return (
        <div className={cs('wrapper-user')}>
            {user && <img className={cs('user-avt')} src={user.image} />}
            {user && <h4 className={cs('user-name')}>@{user.username}</h4>}
        </div>
    );
}

export default UserItem;
