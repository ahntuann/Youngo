import classNames from 'classnames/bind';

import style from './Home.module.scss';

const cs = classNames.bind(style);

function Home() {
    return <div className={cs('wrapper')}></div>;
}

const currentUser = '@ahntuann';
export { currentUser };

export default Home;
