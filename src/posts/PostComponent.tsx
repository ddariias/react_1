import React, { FC, ReactNode } from 'react';
import { IPosts } from '../model/IPosts';
import PostComp from '../component/PostComp';

type IProps = {posts: IPosts[] } & {children?: ReactNode};

const PostComponent: FC<IProps> = ({posts}) => {
    return (
        <div>
            {
                posts.map(post => <PostComp key ={post.id}
                    id = {post.id}
                    title ={post.title}
                    body = {post.body}
                    userId ={post.userId}
                />)
            }
        </div>
    );
};

export default PostComponent;
