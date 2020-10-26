import React from 'react';
import { Image } from 'semantic-ui-react';

export const Comments = ({ 
    poster, 
    caption, 
    comments,
    lastComment
}) => {
    return (
        <div className="post-modal__comments" id="comments-container">
            <div
                key={`${poster?.username}__author`}
                className="comment comment__poster"
            >
                <Image src={ poster?.imageUrl } avatar />
                <div>
                    <p>{ poster?.username }</p>
                    <p>{ caption }</p>
                </div>
            </div>
            <br/>
            {
                comments.map((item, index) => {
                    return <div
                        key={ index }
                        to={`/${item.author?.username}`}
                        className="comment"
                    >
                        <Image src={item.author?.imageUrl} avatar />
                        <div>
                            <p>{ item.author?.username }</p>
                            <p>{ item.content }</p>
                        </div>
                    </div>
                })
            }
            <div ref={ lastComment }></div> 
        </div>
    )
}
