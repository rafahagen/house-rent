import { useEffect, useState } from "react";

const Crouse = () => {
    const [crouses, setCrouses] = useState([]);

    const url = "https://raw.githubusercontent.com/mostakshahariyar/crouse_data/main/crouse.JSON"
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setCrouses(data))
    }, [])
    return [crouses];
}

export default Crouse;