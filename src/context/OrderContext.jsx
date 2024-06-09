import { createContext, useEffect, useMemo, useState } from "react";

export const OrderContext = createContext();
export function OrderContextProvider(props) {
    const [orderCounts, setOrderCounts] = useState({
        products: new Map(),
        options: new Map()
    })

    const [totals, setTotals] = useState({
        products: 0,
        options: 0,
        total: 0,
    })

    const [pricePerItem, setPricePerItem] = useState({
        products: 1000,
        options: 500
    })

    const calculatorSubTotal = (orderType, orderCounts) => {
        let optionCounts = 0;
        for (const count of orderCounts[orderType].values()) {
            optionCounts += count;
        }

        return optionCounts * pricePerItem[orderType]
    }

    useEffect(() => {
        const productsTotal = calculatorSubTotal('products', orderCounts);
        const optionsTotal = calculatorSubTotal('options', orderCounts);
        const total = productsTotal + optionsTotal
        setTotals({
            products: productsTotal,
            options: optionsTotal,
            total
        })
    }, [orderCounts])
    

    const value = useMemo(() => {
        const updateItemCount = (itemName, newItemCount, orderType) => {
            const newOrderCounts = { ...orderCounts };

            const orderCountsMap = orderCounts[orderType];
            orderCountsMap.set(itemName, parseInt(newItemCount));

            setOrderCounts(newOrderCounts)
        }

        return [{...orderCounts, totals}, updateItemCount]
    }, [orderCounts, totals])

    return <OrderContext.Provider value={value} {...props} />
}