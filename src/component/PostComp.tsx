import React, { FC } from 'react';
import { IPosts } from '../model/IPosts';

const PostComp: FC<IPosts> = ({id, title, body}) => {
    return (
        <div>
            {id}: <h3>{title}</h3>
                    <p>{body}</p>
        </div>
    );
};

export default PostComp;