import classNames from 'classnames/bind';

import style from './ProfileAccountItem.module.scss';
import Button from '~/components/Button';
import { currentUser } from '~/pages/Home';

const cs = classNames.bind(style);

function ProfileAccountItem({ user }) {
    return (
        <div className={cs('user-section')}>
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
                            <Button outline title="Đang theo dõi" className={cs('user-follow')} />
                        )}
                        {currentUser !== user.nickname && (
                            <Button outline title="Nhắn tin" className={cs('user-text')} />
                        )}
                    </div>
                </div>

                <p className={cs('user-des')}>{user.description}</p>
            </div>
        </div>
    );
}

export default ProfileAccountItem;
