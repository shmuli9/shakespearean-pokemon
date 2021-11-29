import React from 'react';

const Results = (props: { data: string[] }) => {
    const {data} = props

    return <>
        {data.map((flavorText, index) =>
            <div key={index}>{flavorText}</div>
        )}
    </>
};

export default Results;