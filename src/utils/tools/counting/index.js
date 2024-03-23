import { formatCurrency, formatNumber } from "../formatting";

export function countTotalTransaction(datas, key) {
    let total = 0;

    if (datas && datas.length > 0) {
        for (const index in datas) {
            const value = datas[index][key];

            total += formatNumber(value);
        }
    }

    return formatCurrency(total);
}

export function countAvgTransaction(datas, key) {
    let average = 0;
    let countAll = 0;
    let total = 0;

    if (datas && datas.length > 0) {
        for (const index in datas) {
            const value = datas[index][key];

            total += formatNumber(value);
        }

        countAll = datas.length;
        average = total / countAll;
    }

    return formatCurrency(average.toFixed());
}