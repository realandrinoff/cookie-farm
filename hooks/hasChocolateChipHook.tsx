import { useState, useEffect } from "react"
import { addTypesChocolateChip, checkTypesChocolateChip, deleteTypesChocolateChip } from "../shop/data/shopData";

export const hasChocolateChip = () => {
    const [hasChocolateChip, setHasChocolateChip] = useState<boolean>();
    useEffect(() => {
        (async() => {
            setHasChocolateChip(await checkTypesChocolateChip())
        })();
    })
    return hasChocolateChip
}