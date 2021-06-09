export const countryAPI = "https://restcountries.eu/rest/v2/all";

// ROTAS CLIENT
export const goToHomePage = (history) => {
    history.push("/");
}
export const goToLastPage = (history) => {
    history.goBack();
}
export const goToListTrips = (history) => {
    history.push("lista-de-viagens");
}
export const goToFormPage = (history) => {
    history.push("/lista-de-viagens/cadastro");
}

//ROTAS ADMIN

export const goToAdminPage = (history) => {
    history.push("admin");
}
export const goToLoginPage = (history) => {
    history.push("login");
}