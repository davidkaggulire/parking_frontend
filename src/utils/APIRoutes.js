export const host = "http://localhost:5000";

export const getAllUsersRoute = `${host}/api/v1/users`;
export const registerRoute = `${host}/api/v1/auth/signup`;
export const loginRoute = `${host}/api/v1/auth/login`;
export const logoutRoute = `${host}/api/v1/auth/logout`;
export const forgotPassword = `${host}/api/v1/users/forgotPassword`;
export const uploadImage = `${host}/api/v1/users/updateMe`;
export const getCurrentUserRoute = `${host}/api/v1/users/me`;

export const getAllVehiclesURL = `${host}/api/v1/vehicles`;
export const getAllMessageRoute = `${host}/api/v1/messages/getMessages`;

export const carTypesURL = `${host}/api/v1/cartypes`;

// clinic services
export const clinicService = `${host}/api/v1/cartyreservices`;

// charges
export const truckChargesURL = `${host}/api/v1/truckcharges`;
export const taxiChargesURL = `${host}/api/v1/taxicharges`;
export const bodaChargesURL = `${host}/api/v1/bodacharges`;
export const carChargesURL = `${host}/api/v1/carcharges`;
export const coasterChargesURL = `${host}/api/v1/coastercharges`;

