import cookie from "cookie";

export function parseCookies(req) {
  console.log(req.headers.cookie);
  return cookie.parse(req ? req.headers.cookie || "" : "");
}
