import axios from "axios"
import { useEffect, useState } from "react"
import Detail from "./categories/[id]"

const Random = () => {

    interface Detail {
        [key: string]: string
    }

    const [detail, setDetail] = useState<{[key: string]: string}>({})

    useEffect(() => {
        axios.get('http://www.thecocktaildb.com/api/json/v1/1/random.php')
        .then(res => {
            setDetail(res.data.drinks)
        }).catch(err => console.log(err))
    }, [])

    return (
        <></>
    )
}

export default Random