// for protected routes
const requireAuth = () => {
    if (!localStorage.getItem('token')) {
        <Redirect to="/login" />
    }
    // stay on this route since the user is authenticated
}

// unprotected routes 
const verifyAuth = () => {
    if (localStorage.getItem('token')) {
        <Redirect to="/" />
    }
    // stay on this route since the user is not authenticated
}