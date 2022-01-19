
const errorManage = (error) => {
    if (error.message === "Request failed with status code 401") {
        console.log(error);
        window.alert("Istunto vanhentunut");
    }
    else if (error.message === "Network Error") {
        window.alert("Yhteys ei toimi");
    }
    else {
        console.log(error.message);
    }
}

export default errorManage;