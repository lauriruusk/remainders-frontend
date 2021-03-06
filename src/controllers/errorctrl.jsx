
// käsittelee virheilmoitukset. Toistaiseksi lähinnä vanhentuneelle tokenille ja jos yhteys
// backendiin katkeaa

// handles some error messages. For now just for expired token and if connection to backend breaks
const errorManage = (error) => {
    if (error.message === "Request failed with status code 401") {
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