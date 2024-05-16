import { redirect } from "next/navigation"
import { successLogin } from "../constant"

const login = async (form: FormData) => {
  "use server"
  const email = form.get("email")
  const password = form.get("password")

  console.log({ email, password })

  if (email !== "hoge@gmail.com" || password !== "1234") {
    return { message: "authentication failed" }
  }
  console.log("success!")
  successLogin()
  redirect("/")
}

export default function Page() {
  return (
    <div
      style={{
        display: "grid",
        placeContent: "space-evenly",
        gridTemplateColumns: "45rem",
        padding: "7rem",
      }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
        <h1>ログイン画面</h1>
        <form action={login}>
          <div style={{ display: "flex", padding: "0.5rem", gap: "0.5rem" }}>
            <label htmlFor="email" style={{ flex: 3 }}>
              メールアドレス:
            </label>
            <input
              name="email"
              type="email"
              style={{ flex: 10, padding: "1rem" }}
            />
          </div>
          <div style={{ display: "flex", padding: "1rem", gap: "0.5rem" }}>
            <label htmlFor="password" style={{ flex: 3 }}>
              パスワード:
            </label>
            <input
              name="password"
              type="password"
              style={{ flex: 10, padding: "1rem" }}
            />
          </div>
          <button type="submit">ログイン</button>
        </form>
      </div>
    </div>
  )
}
