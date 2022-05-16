import axios from "axios";

const requestServer1 = axios.create({
  baseURL: "https://nguyenthinh.getflycrm.com/api",
  timeout: 600000,
  headers: {
    "Content-type": "application/json",
  },

});

export const Api = {
  requestServer1,
};
