import axios from "axios";
// import Cookies from 'js-cookie';

import * as url from "./url_helpers";
import Cookies from "js-cookie";

// export const getLogin = async (data) => {
//   try {
//     const response = await axios.post(url.POST_LOGIN, data);
//     return { success: response.status === 200, data: response.data };
//   } catch (error) {
//     console.log(error);
//     return { success: false, data: error };
//   }
// };

const token = Cookies.get("accessToken");

export const getLogin = async (data) => {
  try {
    const response = await axios.post(url.POST_LOGIN, data);
    return { success: response.status === 200, data: response.data };
  } catch (error) {
    // console.log(error);
    console.log(error);
    return { success: false, data: error };
  }
};

export const getUsers = async () => {
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  try {
    const response = await axios.get(url.GET_USERS, { headers });
    return { success: response.status === 200, data: response.data };
  } catch (error) {
    console.log(error);
    return { success: false, data: error };
  }
};

export const getOrg = async () => {
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  try {
    const response = await axios.get(url.GET_ORG, { headers });
    return { success: response.status === 200, data: response.data };
  } catch (error) {
    console.log(error);
    return { success: false, data: error };
  }
};

export const getOrgList = async () => {
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  try {
    const response = await axios.get(url.GET_ORG_LIST, { headers });
    return { success: response.status === 200, data: response.data };
  } catch (error) {
    console.log(error);
    return { success: false, data: error };
  }
};

export const getVidychat = async () => {
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  try {
    const response = await axios.get(url.GET_VIDYCHAT, { headers });
    return { success: response.status === 200, data: response.data };
  } catch (error) {
    console.log(error);
    return { success: false, data: error };
  }
};

// export const resetPassword = async ({
//   email,
//   password,
//   token,
// }: {
//   email: string;
//   password: string;
//   token: string;
// }) => {
//   try {
//     const response = await axiosInstance.post(url.POST_RESET_PASSWORD, {
//       email,
//       password,
//       token,
//     });
//     if (response.status === 200) return { success: true, data: response.data };

//     return { success: false, data: response.data };
//   } catch (error: any) {
//     errorHandler(error);
//     return { success: false, data: error.response, message: error.message };
//   }
// };
