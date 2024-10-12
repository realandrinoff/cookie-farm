import { useEffect, useState } from "react";
import { checkCacaoLevel } from "../dataManagement/cacaoData";
import { checkTypesButtercup, checkTypesChocolateChip } from "../shop/data/shopData";


export const hasAll = () => {
    useEffect(() => {
        (async() => {
            await checkTypesButtercup()
            await checkTypesChocolateChip()
        })();
    })
    return;
}

