import {
    SET_URL,

    SET_CAT_STAFF,
    SET_CAT_STATE,
    SET_CAT_CITY,
    SET_CAT_BRANCH,
    SET_CAT_BRANCH_AREA,
    SET_CAT_CLIENT,
    SET_CAT_MACHINES,
    SET_CAT_MACHINE_TYPE,
    SET_CAT_MACHINE_BRAND,
    SET_CAT_MACHINE_MODEL,
    SET_CAT_PROBLEM_GROUP,
    SET_CAT_PROBLEM,

    SET_IS_ERROR,
    SET_IS_LOADING,
} from "store/constants/app";
import axios from "axios";
import { decrypt } from "utils/tools/cryptojs";

/* ------------------------------------------ */

export function setUrl(payload) {
    return {
        type: SET_URL,
        payload,
    };
}

/* ------------------------------------------ */

export function setCatStaff(payload) {
    return {
        type: SET_CAT_STAFF,
        payload,
    };
}

export function setCatState(payload) {
    return {
        type: SET_CAT_STATE,
        payload,
    };
}

export function setCatCity(payload) {
    return {
        type: SET_CAT_CITY,
        payload,
    };
}

export function setCatBranch(payload) {
    return {
        type: SET_CAT_BRANCH,
        payload,
    };
}

export function setCatBranchArea(payload) {
    return {
        type: SET_CAT_BRANCH_AREA,
        payload,
    };
}

export function setCatClient(payload) {
    return {
        type: SET_CAT_CLIENT,
        payload,
    };
}

export function setCatMachines(payload) {
    return {
        type: SET_CAT_MACHINES,
        payload,
    };
}

export function setCatMachineType(payload) {
    return {
        type: SET_CAT_MACHINE_TYPE,
        payload,
    };
}

export function setCatMachineBrand(payload) {
    return {
        type: SET_CAT_MACHINE_BRAND,
        payload,
    };
}

export function setCatMachineModel(payload) {
    return {
        type: SET_CAT_MACHINE_MODEL,
        payload,
    };
}

export function setCatProblemGroup(payload) {
    return {
        type: SET_CAT_PROBLEM_GROUP,
        payload,
    };
}

export function setCatProblem(payload) {
    return {
        type: SET_CAT_PROBLEM,
        payload,
    };
}

/* ------------------------------------------ */

export function setIsLoading(payload) {
    return {
        type: SET_IS_LOADING,
        payload,
    };
}

export function setIsError(payload) {
    return {
        type: SET_IS_ERROR,
        payload,
    };
}

/* Function */

export function httpRequest(path, method, data) {
    return (dispatch, getState) => {
        const baseUrl = getState().app.url;
        return new Promise((resolve, reject) => {
            axios({
                method,
                url: baseUrl + path,
                headers: {
                    "Content-Type": "application/json",
                },
                data,
            })
                .then(({ data }) => {
                    if (data.errorCode === "1000") {
                        const content = JSON.parse(
                            decrypt({
                                sharedKey: localStorage.getItem("sharedKey"),
                                clientKey: localStorage.getItem("clientKey"),
                                payload: data?.content,
                            })
                        );

                        resolve(content);
                    } else {
                        reject(data);
                    }
                })
                .catch(({ message }) => {
                    dispatch(setIsError(message))
                    reject(message);
                })
        });
    };
}

export function hsCode(url, encrypted) {
    return (dispatch, getState) => {
        dispatch(setIsLoading(true))
        return new Promise((resolve, reject) => {
            axios({
                method: "POST",
                url: url + "/access/handshake",
                headers: {
                    "Content-Type": "application/json",
                },
                data: encrypted,
            })
                .then(({ data }) => {
                    if (data.errorCode === "1000") {
                        resolve(data)
                    } else {
                        dispatch(setIsError(data))
                        reject(data)
                    }
                })
                .catch(({ message }) => {
                    dispatch(setIsError(message))
                    reject(message)
                })
                .finally(() => {
                    dispatch(setIsLoading(false))
                });
        });
    };
}

export function login(url, encrypted) {
    return (dispatch, getState) => {
        dispatch(setIsLoading(true))
        return new Promise((resolve, reject) => {
            axios({
                method: "POST",
                url: url + "/access/login",
                headers: {
                    "Content-Type": "application/json"
                },
                data: encrypted
            })
                .then(({ data }) => {
                    if (data.errorCode === "1000") {
                        resolve(data)
                    } else {
                        dispatch(setIsError(data))
                        reject(data)
                    }
                })
                .catch(({ message }) => {
                    dispatch(setIsError(message))
                    reject(message)
                })
                .finally(() => {
                    dispatch(setIsLoading(false))
                })
        });
    };
}

export function createOrUpdateMachine(encrypted, isCreate = false) {
    return (dispatch, getState) => {
        dispatch(setIsLoading(true))
        return new Promise((resolve, reject) => {
            dispatch(httpRequest("/put/machine", "POST", encrypted))
                .then((data) => {
                    if (isCreate) {
                    } else {
                        resolve(data);
                    }
                })
                .catch((error) => {
                    reject(error);
                    dispatch(setIsLoading(false))
                })
        });
    };
}

export function getConfig(url) {
    return (dispatch, getState) => {
        dispatch(setIsLoading(true))
        return new Promise((resolve, reject) => {
            axios({
                method: "GET",
                url: url
            })
                .then(({ data }) => {
                    dispatch(setUrl(data["URL"]))
                    resolve(data["URL"])
                })
                .catch(({ message }) => {
                    dispatch(setIsError(message))
                    reject(message)
                })
                .finally(() => {
                    dispatch(setIsLoading(false))
                })
        })
    }
}

/* Function Get Categories */
export function getCatStaff(encrypted) {
    return (dispatch, getState) => {
        return new Promise((resolve, reject) => {
            dispatch(httpRequest("/get/person", "POST", encrypted))
                .then((data) => {
                    const { results = [] } = data;
                    dispatch(setCatStaff(results))
                    resolve(data);
                })
                .catch((error) => {
                    dispatch(setCatStaff([]))
                    reject(error);
                })
        });
    };
}

export function getCatState(encrypted) {
    return (dispatch, getState) => {
        return new Promise((resolve, reject) => {
            dispatch(httpRequest("/get/state", "POST", encrypted))
                .then((data) => {
                    const { results = [] } = data;
                    dispatch(setCatState(results))
                    resolve(data);
                })
                .catch((error) => {
                    dispatch(setCatState([]))
                    reject(error);
                })
        });
    };
}

export function getCatCity(encrypted) {
    return (dispatch, getState) => {
        return new Promise((resolve, reject) => {
            dispatch(httpRequest("/get/city", "POST", encrypted))
                .then((data) => {
                    const { results = [] } = data;
                    dispatch(setCatCity(results))
                    resolve(data);
                })
                .catch((error) => {
                    dispatch(setCatCity([]))
                    reject(error);
                })
        });
    };
}

export function getCatBranch(encrypted) {
    return (dispatch, getState) => {
        return new Promise((resolve, reject) => {
            dispatch(httpRequest("/get/branch", "POST", encrypted))
                .then((data) => {
                    const { results = [] } = data;
                    dispatch(setCatBranch(results))
                    resolve(data);
                })
                .catch((error) => {
                    dispatch(setCatBranch([]))
                    reject(error);
                })
        });
    };
}

export function getCatBranchArea(encrypted, parentId) {
    return (dispatch, getState) => {
        return new Promise((resolve, reject) => {
            dispatch(httpRequest("/get/branchArea", "POST", encrypted))
                .then((data) => {
                    const { results = [] } = data;
                    const newData = {
                        ...data,
                        results: results.filter((el) => el.branch.id === parentId)
                    };

                    dispatch(setCatBranchArea(newData.results))
                    resolve(newData);
                })
                .catch((error) => {
                    dispatch(setCatBranchArea([]))
                    reject(error);
                })
        });
    };
}

export function getCatClient(encrypted) {
    return (dispatch, getState) => {
        return new Promise((resolve, reject) => {
            dispatch(httpRequest("/get/client", "POST", encrypted))
                .then((data) => {
                    const { results = [] } = data;
                    dispatch(setCatClient(results))
                    resolve(data);
                })
                .catch((error) => {
                    dispatch(setCatClient([]))
                    reject(error);
                })
        });
    };
}

export function getCatMachine(encrypted) {
    return (dispatch, getState) => {
        return new Promise((resolve, reject) => {
            dispatch(httpRequest("/get/machine", "POST", encrypted))
                .then((data) => {
                    const { results = [] } = data;
                    dispatch(setCatMachines(results))
                    resolve(data);
                })
                .catch((error) => {
                    dispatch(setCatMachines([]))
                    reject(error);
                })
        });
    };
}

export function getCatMachineType(encrypted) {
    return (dispatch, getState) => {
        return new Promise((resolve, reject) => {
            dispatch(httpRequest("/get/machineType", "POST", encrypted))
                .then((data) => {
                    const { dataObjects = [] } = data;
                    dispatch(setCatMachineType(dataObjects))
                    resolve(data);
                })
                .catch((error) => {
                    dispatch(setCatMachineType([]))
                    reject(error);
                })
        });
    };
}

export function getCatMachineBrand(encrypted) {
    return (dispatch, getState) => {
        return new Promise((resolve, reject) => {
            dispatch(httpRequest("/get/machineBrand", "POST", encrypted))
                .then((data) => {
                    const { results = [] } = data;
                    dispatch(setCatMachineBrand(results))
                    resolve(data);
                })
                .catch((error) => {
                    dispatch(setCatMachineBrand([]))
                    reject(error);
                })
        });
    };
}

export function getCatMachineModel(encrypted, parentId) {
    return (dispatch, getState) => {
        return new Promise((resolve, reject) => {
            dispatch(httpRequest("/get/machineModel", "POST", encrypted))
                .then((data) => {
                    const { results = [] } = data;
                    const newData = {
                        ...data,
                        results: results.filter((el) => el.machineBrand.id === parentId)
                    };

                    dispatch(setCatMachineModel(newData.results))
                    resolve(newData);
                })
                .catch((error) => {
                    dispatch(setCatMachineModel([]))
                    reject(error);
                })
        });
    };
}

export function getCatProblemGroup(encrypted) {
    return (dispatch, getState) => {
        return new Promise((resolve, reject) => {
            dispatch(httpRequest("/get/problemCategory", "POST", encrypted))
                .then((data) => {
                    const { dataObjects = [] } = data;
                    dispatch(setCatProblemGroup(dataObjects))
                    resolve(data);
                })
                .catch((error) => {
                    dispatch(setCatProblemGroup([]))
                    reject(error);
                })
        });
    };
}

export function getCatProblem(encrypted) {
    return (dispatch, getState) => {
        return new Promise((resolve, reject) => {
            const { children = [] } = encrypted;
            dispatch(setCatProblem(children))
            resolve(encrypted)
        });
    };
}