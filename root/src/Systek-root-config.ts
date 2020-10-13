import { registerApplication, start } from "single-spa";
import {
  constructApplications,
  constructRoutes,
  constructLayoutEngine,
} from "single-spa-layout";
import { tokenStore } from "./tokenStore";

const routes = constructRoutes(
  document.querySelector("#single-spa-layout") as HTMLTemplateElement,
  {
    loaders: {},
    props: {
      title: "Systek",
      tokenStore: tokenStore,
      version: "2020",
    },
  }
);
const applications = constructApplications({
  routes,
  loadApp({ name }) {
    return System.import(name);
  },
});
const layoutEngine = constructLayoutEngine({ routes, applications });

applications.forEach(registerApplication);
layoutEngine.activate();
start();
