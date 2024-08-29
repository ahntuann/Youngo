import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';

import style from './Search.module.scss';
import SearchResult from '~/components/SearchResult';
import AccountItem from '~/components/AccountItem';
import { useEffect, useRef, useState } from 'react';
import { useDebounce as myUseDebounce } from '~/hook';

const cs = classNames.bind(style);

function Search() {
    const [searchValue, setSearchValue] = useState(() => '');
    const [searchResult, setSearchResult] = useState(() => []);
    const [isLoading, setIsLoading] = useState(() => false);

    const inputRef = useRef();

    const debounce = myUseDebounce(searchValue, 600);

    useEffect(() => {
        if (!debounce.trim()) {
            setSearchResult([]);
            return;
        }

        async function fetchSearch() {
            setIsLoading((prev) => true);
            const res = await fetch(`https://dummyjson.com/users/search?q=${debounce}`);
            const user = await res.json();
            setSearchResult(user.users);

            setIsLoading(false);
        }

        fetchSearch();
    }, [debounce]);

    return (
        <div className={cs('wrapper')}>
            <div className={cs('input-wrapper')}>
                <input
                    ref={inputRef}
                    className={cs('input')}
                    placeholder="Kết nối với mọi người"
                    value={searchValue}
                    onChange={(e) => {
                        setSearchValue(e.target.value);
                    }}
                />
                {!isLoading && searchValue && (
                    <button
                        onClick={() => {
                            inputRef.current.focus();
                            setSearchValue('');
                        }}
                    >
                        <FontAwesomeIcon className={cs('clear')} icon={faCircleXmark} />
                    </button>
                )}
                {isLoading && (
                    <button>
                        <FontAwesomeIcon className={cs('loading')} icon={faSpinner} />
                    </button>
                )}
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
