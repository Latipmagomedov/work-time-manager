interface IFormAuth {
  username: string,
  password: number | string,
}

interface IFormRegister extends IFormAuth {
  confirmPassword: number | string;
}

interface IAuthResponse {
  message: string,
  success: boolean
}

export {
  IFormAuth,
  IFormRegister,
  IAuthResponse
};
