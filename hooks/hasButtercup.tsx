import { useState, useEffect } from "react"
import { addTypesButtercup, checkTypesButtercup, deleteTypesButtercup } from "../shop/data/shopData";

export const hasButtercup = () => {
    const [hasButtercup, setHasButtercup] = useState<boolean>();
    useEffect(() => {
        (async() => {
            setHasButtercup(await checkTypesButtercup())
        })();
    })
    return hasButtercup
}

