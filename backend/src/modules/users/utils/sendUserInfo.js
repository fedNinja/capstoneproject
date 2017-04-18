export function sendUserInfo(user) {
  return {
    id: user._id,
    userName: user.userName
  }
}
