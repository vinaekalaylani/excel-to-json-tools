export function formatNumber(text) {
    let formatted = text.toString().replaceAll(/[^0-9-.]/g, "");

    return formatted;
}

export function formatCurrency(text) {
    let formatted = "0";

    // Currency formatter
    let currencyFormat = Intl.NumberFormat("de-DE", {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    });

    if (text !== "") {
        formatted = text.toString();
        formatted = formatted.replaceAll(/[^0-9-]/g, "");

        // TODO: handle dot for decimal/cent
        formatted = currencyFormat.format(formatted);
    }

    return formatted;
}