import React, {useEffect} from 'react';

const Results = (props: { data: string[] }) => {
    const {data} = props

    const shakespearianApi = (text: string) => {
        fetch(`https://api.funtranslations.com/translate/shakespeare.json?text=${encodeURI(text.replace(/\n|\r/g, " "))}`)
            .then(r => r.json())
            .then(console.log)
            .catch(console.log)
    }

    useEffect(() => {
        data.map(flavorText => shakespearianApi(flavorText))
    }, [data])

    return <>
        {data.map((flavorText, index) =>
            <div key={index}>{flavorText}</div>
        )}
    </>
};

export default Results;