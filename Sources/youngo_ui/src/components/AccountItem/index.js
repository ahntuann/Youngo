import classNames from 'classnames/bind';
import style from './AccountItem.module.scss';
import Button from '../Button';
import { Link } from 'react-router-dom';

const cs = classNames.bind(style);

function AccountItem({ data }) {
    return (
        <Link to={data.path} className={cs('wrapper')}>
            <div className={cs('user-avt')}>
                <img src={data.avt} />
            </div>

            <div className={cs('user-info')}>
                <h2 className={cs('user-nickname')}>{data.nickname}</h2>
                <p className={cs('user-fullname')}>{data.userName}</p>
            </div>

            <Button className={cs('follow-btn')} title="Theo dõi" outline large />
        </Link>
    );
}

export default AccountItem;
