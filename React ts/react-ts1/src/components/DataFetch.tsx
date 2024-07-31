 import React from 'react'

type userProps = {
    //status: string
    status: 'loading' | 'error' | 'success';
}

const DataFetch = ({status}: userProps) => {

    if(status === 'loading'){
        return <h2>Data is loading...</h2>
    }
    else if(status === 'error'){
        return <h2>Error!!!</h2>
    }

    return (
        <div>
            <h1>Data fetch</h1>
            <h2>Data fetched successfully.</h2>
        </div>
    )
}

export default DataFetch
