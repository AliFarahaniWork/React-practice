import {
  type RouteConfig,
  index,
  route,
  prefix,
} from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  ...prefix("/HomeWork", [
    index("routes/HomeWork/homeWork.tsx"),
    route("/Sum", "routes/HomeWork/sum.tsx"),
    route("/Divide", "routes/HomeWork/divide.tsx"),
    route("/Multi", "routes/HomeWork/multi.tsx"),
    route("/Pow", "routes/HomeWork/pow.tsx"),
  ]),
] satisfies RouteConfig;
