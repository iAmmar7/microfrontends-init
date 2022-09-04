# Microfrontends Init

A Single-SPA based micro-frontends application developed with React, Angular, and Vue.

## Featues
- **3 microfrontends** running inside the root-config. :fire:
- **2 shared utility modules** are used by all microfrontends. :anchor:
- Navbar is built with **VueJS**. :fire:
- Auth module is built with **React**. :heart:
- Attendance module is built with **Angular**. :heart_on_fire:
- Home page is being rendered from the root-config. :chains:
- Style guide shared module is built with **Tailwind**. :small_blue_diamond:
- API shared module is using Axios. :calling:
- JSON server to perform authentication. :boom:

## Technologies
- Single SPA <img alt="Single-SPA" src="https://img.shields.io/badge/-Single%20SPA-EF689F?style=flat-square&logo=Single-SPA&logoColor=white" />
- React <img alt="React" src="https://img.shields.io/badge/-React-45b8d8?style=flat-square&logo=react&logoColor=white" />
- Angular <img alt="Angular" src="https://img.shields.io/badge/-Angular-C4002F?style=flat-square&logo=angular&logoColor=white" />
- Vue <img alt="Vue" src="https://img.shields.io/badge/-VueJS-42B883?style=flat-square&logo=Vue&logoColor=white" />
- Tailwind <img alt="Tailwind" src="https://img.shields.io/badge/-Tailwind-37BDF7?style=flat-square&logo=tailwindcss&logoColor=white" />
- JSON Server <img alt="JSON Server" src="https://img.shields.io/badge/-JSON%20Server-1E3A8A?style=flat-square&logo=json&logoColor=white" />

## How to run

Navigate to the root-config, styleguide, api, auth, attendance, navbar-vue, server folder and run the command

```js
npm install
```

## Run the application

- Navigate to the root-config, styleguide, api, auth, navbar-vue, server folder and run the below command

  ```js
  npm start
  ```

- To run the Angular app, navigate to the attendance folder and run

  ```js
  npm run serve:single-spa:attendance
  ```

  In the browser open the application at <http://localhost:9000>

- Carefully check the PORT of your applications and update it accordingly in the [import map](https://github.com/iAmmar7/microfrontends-task-app/blob/main/root-config/src/index.ejs#L55) defined in root-config.

- There are two navbar microfrontends, one is built with React and the other one is built with VueJS.

- Server is created using the json-server.
