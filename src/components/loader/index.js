import React from 'react'
import { Loader } from 'semantic-ui-react';

export default function Loading() {
    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <Loader active />
        </div>
    )
}
