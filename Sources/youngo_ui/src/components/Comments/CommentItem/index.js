import classNames from 'classnames/bind';

import style from '../Comments.module.scss';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';

const cs = classNames.bind(style);

function CommentItem({ comment }) {
    const [user, setUser] = useState(() => null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await fetch(`https://dummyjson.com/users/${comment.user.id}`);
                const user = await res.json();

                setUser(user);
            } catch (error) {
                console.log('Fetch comment user error');
            }
        };

        fetchUser();
    }, []);

    return (
        <div className={cs('item-wrapper')}>
            <div className={cs('comment-section')}>
                {user && (
                    <div className={cs('user')}>
                        <img src={user?.image} />
                    </div>
                )}

                <div className={cs('body')}>
                    <div className={cs('content')}>
                        <Link to={`/@${user?.username}`} className={cs('username')}>
                            {user?.username}
                        </Link>{' '}
                        {comment.body}
                    </div>

                    <div className={cs('detail-info')}>
                        <p className={cs('time', 'detail-item')}>5 giờ trước</p>

                        <p className={cs('likes', 'detail-item')}>{comment.likes} lượt thích</p>

                        <p className={cs('reply', 'detail-item')}>Trả lời</p>
                    </div>
                </div>
            </div>

            <div className={cs('action-section')}>
                <FontAwesomeIcon icon={faHeart} />
            </div>

            <div className={cs('border-bottom')}></div>
        </div>
    );
}

export default CommentItem;
