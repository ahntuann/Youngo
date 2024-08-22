import classNames from 'classnames/bind';

import style from './PostItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faComment, faHeartBroken, faShare } from '@fortawesome/free-solid-svg-icons';
import UserItem from './UserItem';
import { useEffect, useState } from 'react';

const cs = classNames.bind(style);

function PostItem({ posts }) {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        async function fetchUser() {
            const userPromises = posts.map((post) => {
                return fetch('https://dummyjson.com/users/' + post.userId)
                    .then((res) => res.json())
                    .then((user) => user)
                    .catch(() => {
                        console.log('User error');
                    });
            });

            const fetchedUsers = await Promise.all(userPromises);
            setUsers(fetchedUsers);
        }

        fetchUser();
    }, [posts]);

    return (
        <div className={cs('wrapper')}>
            {posts &&
                posts.map((post) => {
                    return (
                        <div key={post.id} className={cs('post-item')}>
                            <div className={cs('user-section')}>
                                <UserItem user={users.find((user) => user && user.id === post.userId)} />
                            </div>
                            <div className={cs('post-section')}>
                                <div className={cs('post-body')}>
                                    <p className={cs('body-text')}>{post.body}</p>
                                    {/* <img className={cs('body-img')} src=""></img> */}
                                </div>

                                <div className={cs('post-action')}>
                                    <div className={cs('post-reaction')}>
                                        <div className={cs('post-like', 'action-item')}>
                                            <FontAwesomeIcon className={cs('react-icon', 'like-btn')} icon={faHeart} />
                                            <p className={cs('like-count')}>{post.reactions.likes}</p>
                                        </div>

                                        <div className={cs('post-dislike', 'action-item')}>
                                            <FontAwesomeIcon
                                                className={cs('react-icon', 'dislike-btn')}
                                                icon={faHeartBroken}
                                            />
                                            <p className={cs('like-count')}>{post.reactions.dislikes}</p>
                                        </div>
                                    </div>

                                    <div className={cs('post-comment', 'action-item')}>
                                        <FontAwesomeIcon className={cs('react-icon', 'comment-btn')} icon={faComment} />
                                    </div>

                                    <div className={cs('post-share', 'action-item')}>
                                        <FontAwesomeIcon className={cs('react-icon', 'share-btn')} icon={faShare} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
        </div>
    );
}

export default PostItem;
