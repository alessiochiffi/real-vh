# RealVH - vue plugin

Simple Vue js plugin to fix the popular problem when 100vh doesn’t fit the mobile browser screen.

Inspired by Louis Hoebregts article https://css-tricks.com/the-trick-to-viewport-units-on-mobile/

## Usage

Install `real-vh` using npm

```
npm i real-vh
```

Import the plugin in your application entry point (typically main.js if you used vue-cli to scaffold your project) and tell Vue to use it

```
import Vue from 'vue'
import App from './App.vue'
import RealVh from "real-vh";

Vue.use(RealVh);

new Vue({
  render: h => h(App)
}).$mount('#app')

```

It will automatically add the following css variables to the root:

```
:root {
    --vh: XXpx;
    --vh50: calc(var(--vh, 1vh) * 50);
    --vh100: calc(var(--vh, 1vh) * 100);
}
```

and you can directly add the css var in your style

```bash
  .full-screen {
    height: var(--vh100);
  }
```

The value will update when the browser window resizes
