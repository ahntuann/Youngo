import classNames from 'classnames/bind';

import style from './Home.module.scss';

const cs = classNames.bind(style);

function Home() {
    return <div className={cs('wrapper')}></div>;
}

const currentUser = '/@babibong_28';
export { currentUser };

export default Home;
