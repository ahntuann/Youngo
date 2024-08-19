import classNames from 'classnames/bind';
import style from './Content.module.scss';

const cs = classNames.bind(style);

function Content({ children, pageTitle }) {
    return (
        <div className={cs('wrapper')}>
            <div className={cs('container')}>
                <div className={cs('page-title')}>{pageTitle}</div>
                <div className={cs('content')}>{children}</div>
            </div>
        </div>
    );
}

export default Content;
