import * as errors from "utils/constants/error";

export function errorResponse(payload) {
    console.log(payload);
    const { errorCode } = payload;

    let error = errors.ERROR_SERVER

    if (errorCode === "9000") error = errors.ERROR_GENERAL
    else if (errorCode === "9001") error = errors.ERROR_PERSISTENCE

    else if (errorCode === "9101") error = errors.ERROR_NODATA

    else if (errorCode === "9200") error = errors.INVALID_ACCESS
    else if (errorCode === "9201") error = errors.INVALID_TOKEN
    else if (errorCode === "9202") error = errors.INVALID_PAYLOAD
    else if (errorCode === "9203") error = errors.INVALID_REQUESTCONTENT
    else if (errorCode === "9204") error = errors.INVALID_LOGIN
    else if (errorCode === "9205") error = errors.INVALID_PERMISSION

    else if (errorCode === "9301") error = errors.ERROR_USER_BLOCKED_TEMP
    else if (errorCode === "9302") error = errors.ERROR_USER_BLOCKED_PREM
    else if (errorCode === "9303") error = errors.ERROR_DATA_NOTFOUND
    else if (errorCode === "9304") error = errors.ERROR_DUPLICATE
    else if (errorCode === "9305") error = errors.ERROR_SAVEORUPDATE

    return error
}