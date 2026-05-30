import { useEffect, useState } from "react";

function useCurrencyInfo(currency){
    const [data , setData] = useState({})
    useEffect(() => {
        if (!currency) return;
        fetch(`https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_Gm0F99MgiiFOTL12ACk98dUA4CaZHMxZu31Deqap&base_currency=${currency.toUpperCase()}`)
        .then((res) => res.json())
        .then((res) => setData(res.data || {}))
        .catch((err) => console.error("Error fetching currency info:", err));
    } , [currency])
    return data
}

export { useCurrencyInfo };
export default useCurrencyInfo;