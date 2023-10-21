/* eslint-disable no-undef */

export default {
  env: "",
  port: 4321,
  database_url: "mongodb://admin:mahdi1381@localhost:27017/db",
  default_admin_pass: "mahdi1381",
  bycrypt_salt_rounds: 6,
  jwt: {
    secret: "process.env.JWT_SECRET",
    expires_in: "7200",
    refresh_secret: "process.env.JWT_SECRET",
    refresh_expires_in: "7200",
  },
  opt: {
    length: 6,
    upper_case_alphabets: false,
    lower_case_alphabets: false,
    special_chars: false,
  },
};