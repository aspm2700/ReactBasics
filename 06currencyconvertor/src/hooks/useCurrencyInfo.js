import {useEffect, useState} from "react"


function useCurrencyInfo(currency){

    const [data, setData] = useState({})
    let url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
    console.log(url)
    useEffect(() => {
        fetch(url)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
        .catch((ex)=>console.error(ex))
    }, [currency])
    console.log(data);
    return data
}

export default useCurrencyInfo;