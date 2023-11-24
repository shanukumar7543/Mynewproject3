export const baseURL =
  process.env.NEXT_PUBLIC_API_KEY ??
  // 'http://localhost:4000';
  'https://yknhgry92i.execute-api.eu-north-1.amazonaws.com';


export const POST_LOGIN = `${baseURL}/auth/adminlogin`;
export const GET_USERS = `${baseURL}/user/getusercount`;
export const GET_ORG = `${baseURL}/org/getorgcount`;
export const GET_INTRA = `${baseURL}/auth/getint`;
export const GET_VIDYCHAT = `${baseURL}/vidychat/vidychatcount`;
export const GET_ORG_LIST = `${baseURL}/org/organizationsstats`;

// export const