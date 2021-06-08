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
    history.push("cadastro");
}


