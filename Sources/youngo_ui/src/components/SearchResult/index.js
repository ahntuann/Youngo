import classNames from 'classnames/bind';
import style from './SearchResult.module.scss';

const cs = classNames.bind(style);

function SearchResult({ children }) {
    return <div className={cs('wrapper')}>{children}</div>;
}

export default SearchResult;
