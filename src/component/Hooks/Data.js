import { useEffect, useState } from "react";

const useCrouses = () => {
    const [crouses, setCrouses] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/mostakshahariyar/crouse_data/main/crouse.JSON')
            .then(res => res.json())
            .then(data => setCrouses(data))
    }, [])
    // console.log(crouses)
    return [crouses];
}

export default useCrouses;