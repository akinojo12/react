let base;

if (process.env.NODE_ENV === "development") {
    base = "http://localhost:5000";
} else {
    base = "https://mybackend-v1pp.onrender.com/"
}

export const baseUrl = base