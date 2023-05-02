export const SET_DATA = "SET_DATA";

export const getDataQuery = (data, dispatch) => {
    fetch(`http://localhost:4000/api/${(data.value)}`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
    })
    .then((res) => res.json())
    .then((data) => {
        if (data) {
            console.log(data);
            dispatch(setData(data))
        } else {
            console.log("No data");
        }
    })
    .catch((err) => {
        console.log(err);
    });
};

export const setData = (data) => {
    return {
        type: SET_DATA,
        dataQuery: data
    }
}