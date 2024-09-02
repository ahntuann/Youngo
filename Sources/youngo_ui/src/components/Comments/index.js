import classNames from 'classnames/bind';

import style from './Comments.module.scss';
import { useEffect, useState } from 'react';
import CommentItem from './CommentItem';

const cs = classNames.bind(style);

function Comments({ postID, limit }) {
    const [comments, setComments] = useState(() => []);

    useEffect(() => {
        const fetchComment = async () => {
            const res = await fetch(`https://dummyjson.com/comments/post/${postID}`);
            const comments = await res.json();

            setComments(comments.comments);
        };

        fetchComment();
    }, []);

    return (
        <div className={cs('wrapper')}>
            {comments.length > 0 && comments.map((comment) => <CommentItem key={comment.id} comment={comment} />)}
        </div>
    );
}

export default Comments;
