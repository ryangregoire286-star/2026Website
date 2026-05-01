use axum::Router;
use axum::routing::get;
use tower_http::cors::{Any, CorsLayer};

#[tokio::main]
async fn main() {

    let listen_server = tokio::net::TcpListener::bind("0.0.0.0:3000").await.unwrap();
    axum::serve(listen_server, start_router()).await.unwrap();
}

async fn hello() -> &'static str {
    "Hello I am Ryan James"
}

fn get_route(route: String) -> String {
    if route.contains("/") {
            "/";
    } else if route.contains("/About") {
        "/About";
    } else if route.contains("/Contact") {
        "/Contact";
    }

    format!("{:?}", "/")
}

fn start_router() -> Router {
    let cors = CorsLayer::new().allow_origin(Any);
    let ser = Router::new().route(&get_route("/".to_string()), get(hello)).layer(cors);
    ser
}