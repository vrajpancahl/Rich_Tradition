
import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "80px 20px",
        minHeight: "100vh"
      }}
    >
      <h1 style={{ fontSize: "70px", color: "#d35400" }}>404</h1>

      <h2>Oops! Page Not Found</h2>

      <p style={{ color: "#666", maxWidth: "500px", margin: "15px auto" }}>
        The page you're looking for doesn't exist, has been moved,
        or the URL may be incorrect.
      </p>

      <Link
        to="/"
        style={{
          display: "inline-block",
          marginTop: "25px",
          padding: "12px 28px",
          background: "#d35400",
          color: "#fff",
          textDecoration: "none",
          borderRadius: "8px"
        }}
      >
        🏠 Back to Home
      </Link>
    </div>
  );
}

export default ErrorPage;