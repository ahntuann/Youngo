import classNames from 'classnames/bind';

import style from './ProfileAccountItem.module.scss';
import Button from '~/components/Button';
import { currentUser } from '~/pages/Home';
import { useState } from 'react';
import Model from '../Model';

const cs = classNames.bind(style);

const titleModelFollow = [
    {
        title: 'Thêm vào mục yêu thích',
    },
    {
        title: 'Hạn chế',
    },
    {
        title: 'Bỏ theo dõi',
    },
    {
        title: 'Chặn',
    },
];

function ProfileAccountItem({ user, className }) {
    const [hideFollow, setHideFollow] = useState(() => true);
    const classes = cs('user-section', {
        [className]: className,
    });

    function hanldeHideFollow() {
        setHideFollow(true);
    }

    return (
        <div className={classes}>
            <div className={cs('user-avt')}>
                <img alt="avt" src={user.avt}></img>
                <Button outline large title={`Bản đồ`} className={cs('user-map')} />
            </div>

            <div className={cs('user-detail')}>
                <div className={cs('user-info')}>
                    <div className={cs('user-name')}>
                        <h4 className={cs('user-fullname')}>{user.userName}</h4>
                        <p className={cs('user-nickname')}>{user.nickname}</p>
                    </div>

                    <div className={cs('user-actions')}>
                        {currentUser === user.nickname && <Button outline title={`Chỉnh sửa`} />}
                        {currentUser !== user.nickname && (
                            <Button
                                outline
                                title="Đang theo dõi"
                                className={cs('user-follow')}
                                onClick={() => setHideFollow(false)}
                            />
                        )}
                        {currentUser !== user.nickname && (
                            <Button outline title="Nhắn tin" className={cs('user-text')} />
                        )}
                    </div>
                </div>

                <p className={cs('user-des')}>{user.description}</p>
            </div>

            <Model titleModelFollow={titleModelFollow} hide={hideFollow} hanldeHideFollow={hanldeHideFollow} />
        </div>
    );
}

export default ProfileAccountItem;
