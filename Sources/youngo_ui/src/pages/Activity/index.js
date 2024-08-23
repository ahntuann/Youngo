import classNames from 'classnames/bind';

import style from './Activity.module.scss';
import NotificationItem from '~/components/NotificationItem';

const cs = classNames.bind(style);

function Activity() {
    return (
        <div className={cs('wrapper')}>
            <NotificationItem type="follow" time="30 phút" />
            <NotificationItem type="story" time="30 phút" />
            <NotificationItem type="post" time="30 phút" />
            <NotificationItem type="follow" time="30 phút" />
            <NotificationItem type="post" time="30 phút" />
        </div>
    );
}

export default Activity;
