import { registerApplication, start } from 'single-spa';
import { constructApplications, constructRoutes, constructLayoutEngine } from 'single-spa-layout';

import microfrontendLayout from './html/layout.html';
import loader from './html/loader.html';
import error from './html/error.html';

const data = {
  loaders: {
    customLoader: loader,
  },
  props: {
    projectLink: 'https://github.com/iAmmar7/microfrontends-task-app',
  },
  errors: {
    customError: error,
  },
};

const routes = constructRoutes(microfrontendLayout, data);
const applications = constructApplications({
  routes,
  loadApp({ name }) {
    return System.import(name);
  },
});
const layoutEngine = constructLayoutEngine({
  routes,
  applications,
  active: false,
});

applications.forEach(registerApplication);

System.import('@venturedive/styleguide').then(() => {
  // Activate the layout engine once the styleguide CSS is loaded
  layoutEngine.activate();
  start();
});
