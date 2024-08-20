import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';

import style from './Search.module.scss';
import SearchResult from '~/components/SearchResult';
import AccountItem from '~/components/AccountItem';
import { useEffect, useRef, useState } from 'react';

const cs = classNames.bind(style);
const fakeSearchResult = [
    {
        userName: 'Mai Anh Tuấn',
        nickname: '@ahntuann',
        path: '/@ahntuann',
        avt: 'https://p16-sign-sg.tiktokcdn.com/aweme/720x720/tos-alisg-avt-0068/a3e49623f8a3461eb16fc3ecbd31ec09.jpeg?lk3s=a5d48078&nonce=95493&refresh_token=54181da9f36b8a6d7936a8a39fe466b3&x-expires=1724248800&x-signature=lEtSh27%2BMfOqWXBVzbN%2BsNR6IDQ%3D&shp=a5d48078&shcp=81f88b70',
    },
    {
        userName: 'Mai Anh Tuấn',
        nickname: '@ahntuann',
        path: '/@ahntuann',
        avt: 'https://p16-sign-sg.tiktokcdn.com/aweme/720x720/tos-alisg-avt-0068/a3e49623f8a3461eb16fc3ecbd31ec09.jpeg?lk3s=a5d48078&nonce=95493&refresh_token=54181da9f36b8a6d7936a8a39fe466b3&x-expires=1724248800&x-signature=lEtSh27%2BMfOqWXBVzbN%2BsNR6IDQ%3D&shp=a5d48078&shcp=81f88b70',
    },
    {
        userName: 'Nguyễn Linh Thảo',
        nickname: '@babibong_28',
        path: '/@babibong_28',
        avt: 'https://p16-sign-sg.tiktokcdn.com/aweme/720x720/tos-alisg-avt-0068/a3e49623f8a3461eb16fc3ecbd31ec09.jpeg?lk3s=a5d48078&nonce=95493&refresh_token=54181da9f36b8a6d7936a8a39fe466b3&x-expires=1724248800&x-signature=lEtSh27%2BMfOqWXBVzbN%2BsNR6IDQ%3D&shp=a5d48078&shcp=81f88b70',
    },
    {
        userName: 'Mai Anh Tuấn',
        nickname: '@ahntuann',
        path: '/@ahntuann',
        avt: 'https://p16-sign-sg.tiktokcdn.com/aweme/720x720/tos-alisg-avt-0068/a3e49623f8a3461eb16fc3ecbd31ec09.jpeg?lk3s=a5d48078&nonce=95493&refresh_token=54181da9f36b8a6d7936a8a39fe466b3&x-expires=1724248800&x-signature=lEtSh27%2BMfOqWXBVzbN%2BsNR6IDQ%3D&shp=a5d48078&shcp=81f88b70',
    },
    {
        userName: 'Mai Anh Tuấn',
        nickname: '@ahntuann',
        path: '/@ahntuann',
        avt: 'https://p16-sign-sg.tiktokcdn.com/aweme/720x720/tos-alisg-avt-0068/a3e49623f8a3461eb16fc3ecbd31ec09.jpeg?lk3s=a5d48078&nonce=95493&refresh_token=54181da9f36b8a6d7936a8a39fe466b3&x-expires=1724248800&x-signature=lEtSh27%2BMfOqWXBVzbN%2BsNR6IDQ%3D&shp=a5d48078&shcp=81f88b70',
    },
    {
        userName: 'Mai Anh Tuấn',
        nickname: '@ahntuann',
        path: '/@ahntuann',
        avt: 'https://p16-sign-sg.tiktokcdn.com/aweme/720x720/tos-alisg-avt-0068/a3e49623f8a3461eb16fc3ecbd31ec09.jpeg?lk3s=a5d48078&nonce=95493&refresh_token=54181da9f36b8a6d7936a8a39fe466b3&x-expires=1724248800&x-signature=lEtSh27%2BMfOqWXBVzbN%2BsNR6IDQ%3D&shp=a5d48078&shcp=81f88b70',
    },
    {
        userName: 'Nguyễn Linh Thảo',
        nickname: '@babibong_28',
        path: '/@babibong_28',
        avt: 'https://p16-sign-sg.tiktokcdn.com/aweme/720x720/tos-alisg-avt-0068/a3e49623f8a3461eb16fc3ecbd31ec09.jpeg?lk3s=a5d48078&nonce=95493&refresh_token=54181da9f36b8a6d7936a8a39fe466b3&x-expires=1724248800&x-signature=lEtSh27%2BMfOqWXBVzbN%2BsNR6IDQ%3D&shp=a5d48078&shcp=81f88b70',
    },
    {
        userName: 'Nguyễn Linh Thảo',
        nickname: '@babibong_28',
        path: '/@babibong_28',
        avt: 'https://p16-sign-sg.tiktokcdn.com/aweme/720x720/tos-alisg-avt-0068/a3e49623f8a3461eb16fc3ecbd31ec09.jpeg?lk3s=a5d48078&nonce=95493&refresh_token=54181da9f36b8a6d7936a8a39fe466b3&x-expires=1724248800&x-signature=lEtSh27%2BMfOqWXBVzbN%2BsNR6IDQ%3D&shp=a5d48078&shcp=81f88b70',
    },
];

function Search() {
    const [searchValue, setSearchValue] = useState(() => '');
    const [searchResult, setSearchResult] = useState(() => []);

    const inputRef = useRef();

    useEffect(() => {
        if (!searchValue.trim()) {
            setSearchResult([]);
            return;
        }

        setSearchResult(fakeSearchResult);
    }, [searchValue]);

    return (
        <div className={cs('wrapper')}>
            <div className={cs('input-wrapper')}>
                <input
                    ref={inputRef}
                    className={cs('input')}
                    placeholder="Kết nối với mọi người"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                />
                {searchValue && (
                    <button
                        onClick={() => {
                            inputRef.current.focus();
                            setSearchValue('');
                        }}
                    >
                        <FontAwesomeIcon className={cs('clear')} icon={faCircleXmark} />
                    </button>
                )}
                {/* <button>
                    <FontAwesomeIcon className={cs('loading')} icon={faSpinner} />
                </button> */}
            </div>

            <div className={cs('search-result')}>
                <SearchResult>
                    {searchResult.map((result, index) => (
                        <AccountItem key={index} data={result} />
                    ))}
                </SearchResult>
            </div>
        </div>
    );
}

export default Search;
