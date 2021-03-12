import React from 'react'
import { useParams } from 'react-router-dom';

export const Notfound = () => {
    let { id } = useParams();
    return (
        <div>
            <h2>Not found {id} </h2>
        </div>
    )
}
