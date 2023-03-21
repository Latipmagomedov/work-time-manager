import api from "./api";
import { IFormAuth, IAuthResponse } from "@/types/auth";

const auth = {
  login(payload: IFormAuth): Promise<IAuthResponse> {
    return api.post("/account/login", payload);
  },
  register(payload: IFormAuth): Promise<IAuthResponse> {
    return api.post("/account/register", payload);
  },
  getAccount() {
    return api.get("/account");
  }
};

export default auth;
