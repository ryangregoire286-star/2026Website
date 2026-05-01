pub mod routes {
    pub fn get_route(route: String) -> String {
        if route.contains("/") {
            "/";
        } else if route.contains("/About") {
            "/About";
        } else if route.contains("/Contact") {
            "/Contact";
        }

        route
    }
}