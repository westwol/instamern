import React from 'react'
import { Image } from 'semantic-ui-react'

export const Post = ({ post }) => {
    return (
        <>
            <div className="profile__post">
                <Image src={ post.imageUrl } />
            </div>
        </>
    )
}
