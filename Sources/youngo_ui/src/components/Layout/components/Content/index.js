import classNames from 'classnames/bind';
import style from './Content.module.scss';

const cs = classNames.bind(style);

function Content({ children, pageTitle }) {
    return (
        <div className={cs('wrapper')}>
            <div className={cs('container')}>
                <div className={cs('page-title')}>{pageTitle}</div>
                <div className={cs('fake-corner-1')}></div>
                <div className={cs('fake-corner-2')}></div>
                <div className={cs('fake-corner-3')}></div>
                <div className={cs('fake-corner-4')}></div>
                <div className={cs('content')}>
                    {children}
                    {children}
                    {children}
                    {children}
                    {children}
                    {children}
                    {children}
                    {children}
                    {children}
                    {children}
                    {children}
                    {children}
                    {children}
                    {children}
                    {children}
                    {children}
                    {children}
                    {children}
                    {children}
                    {children}
                    {children}
                    {children}
                    {children}
                    {children}
                    {children}
                    {children}
                    {children}
                    {children}
                    {children}
                    {children}
                    {children}
                    {children}
                </div>
            </div>
        </div>
    );
}

export default Content;
