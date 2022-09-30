export const host = "http://localhost:5000";
// export const host = "https://mimose.herokuapp.com";

export const getAllUsersRoute = `${host}/api/v1/users`;
export const registerRoute = `${host}/api/v1/auth/signup`;
export const loginRoute = `${host}/api/v1/auth/login`;
export const logoutRoute = `${host}/api/v1/auth/logout`;
export const forgotPassword = `${host}/api/v1/users/forgotPassword`;
export const uploadImage = `${host}/api/v1/users/updateMe`;
export const getCurrentUserRoute = `${host}/api/v1/users/me`;

export const sendMessageRoute = `${host}/api/v1/messages/addMessage`;
export const getAllMessageRoute = `${host}/api/v1/messages/getMessages`;