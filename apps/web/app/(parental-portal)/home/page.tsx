import Link from "next/link";

export default function HomePage() {
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        gap: "20px",
      }}
    >
      <h1>Welcome to Maniarverse</h1>

      <Link href="/login">
        Login
      </Link>

      <Link href="/register">
        Register
      </Link>
    </main>
  );
}