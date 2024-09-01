import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faComment, faHeartBroken, faShare } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';

import UserItem from '~/components/PostItems/UserItem';
import style from '~/components/PostItems/PostItem.module.scss';
import { Link } from 'react-router-dom';

const cs = classNames.bind(style);

function PostItem({ post, users }) {
    const user = users.find((user) => user && user?.id === post?.userId);

    return (
        <Link to={`@${user && user?.username}/post/${post?.id}`} className={cs('post-item')}>
            <div className={cs('user-section')}>
                <UserItem user={user} />
            </div>
            <div className={cs('post-section')}>
                <div className={cs('post-body')}>
                    <p className={cs('body-text')}>{post?.body}</p>
                    {/* <img className={cs('body-img')} src=""></img> */}
                </div>

                <div className={cs('post-action')}>
                    <div className={cs('post-reaction')}>
                        <div className={cs('post-like', 'action-item')}>
                            <FontAwesomeIcon className={cs('react-icon', 'like-btn')} icon={faHeart} />
                            <p className={cs('like-count')}>{post?.reactions.likes}</p>
                        </div>

                        <div className={cs('post-dislike', 'action-item')}>
                            <FontAwesomeIcon className={cs('react-icon', 'dislike-btn')} icon={faHeartBroken} />
                            <p className={cs('like-count')}>{post?.reactions.dislikes}</p>
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
        </Link>
    );
}

export default PostItem;
