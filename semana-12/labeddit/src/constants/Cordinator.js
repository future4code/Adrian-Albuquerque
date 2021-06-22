export const goToHomePage = (history) => {
    history.push("/")
}

export const goToLoginPage = (history) => {
    history.push("/login")
}

export const goToRegisterPage = (history) => {
    history.push("/register")
}

export const goToPostPage = (history) => {
    history.push("/post")
}

export const goToFeedPage = (history) => {
    history.push("/feed")
}
export const goToLastPage = (history) => {
    history.goBack()
}
