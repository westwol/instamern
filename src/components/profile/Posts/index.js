import React from 'react';
import { Grid } from 'semantic-ui-react';
import { Post } from './Post';

export const Posts = ({ posts }) => {
    return (
        <div className="publications">
          <h1>Posts</h1>
          <Grid columns={4}>
            {
                posts.map((item, index) => {
                    return (
                        <Grid.Column key={ index }>
                            <Post post={ item } />
                        </Grid.Column>
                    )
                })
            }
          </Grid>
        </div>
      );
}
