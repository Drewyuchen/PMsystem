const getters={
    token: state => state.user.token,
    username: state => state.user.username,
    users: state => state.user.users,
    email_captcha: state=> state.user.email_captcha,
}
export default getters