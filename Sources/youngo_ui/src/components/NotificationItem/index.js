import classNames from 'classnames/bind';

import Button from '~/components/Button';
import style from './NotificationItem.module.scss';

const cs = classNames.bind(style);

function NotificationItem({ type, time }) {
    const typeOfNoti = {
        follow: ' đã bắt đầu theo dõi bạn',
        story: ' đã thích tin của bạn',
        post: ' đã thích bài viết của bạn',
    };

    // fake user
    const user = {
        id: 1,
        firstName: 'Emily',
        lastName: 'Johnson',
        maidenName: 'Smith',
        age: 28,
        gender: 'female',
        email: 'emily.johnson@x.dummyjson.com',
        phone: '+81 965-431-3024',
        username: 'emilys',
        password: 'emilyspass',
        birthDate: '1996-5-30',
        image: 'https://dummyjson.com/icon/emilys/128',
    };

    return (
        <div className={cs('wrapper')}>
            <div className={cs('noti-body')}>
                <img alt="user" className={cs('user-avt')} src={user.image} />
                <div className={cs('noti-detail')}>
                    <div className={cs('noti-content')}>
                        <h4 className={cs('user-name')}>{user.username}</h4>
                        <p className={cs('noti-text')}>{typeOfNoti[type]}</p>
                    </div>

                    <div className={cs('noti-time')}>{time}</div>
                </div>
            </div>

            {type === 'follow' ? (
                <Button className={cs('follow-btn', 'noti-tail')} large outline title="Theo dõi lại" />
            ) : (
                <div className={cs('noti-img', 'noti-tail')}>
                    <img src="https://dummyjson.com/icon/benjaminf/128" />
                </div>
            )}
        </div>
    );
}

export default NotificationItem;
