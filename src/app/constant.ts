let loggedIn = false

export function isLoggedIn() {
  return loggedIn === true
}
export function successLogin() {
  loggedIn = true
}
