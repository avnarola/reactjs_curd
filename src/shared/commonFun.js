export const getUser = () => {
  return localStorage.getItem('user') ? localStorage.getItem('user') : null
}
