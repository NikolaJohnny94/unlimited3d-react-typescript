# 🤖 3D Model Configurator created with Unlimited3D <img src="https://yt3.googleusercontent.com/c3CU7GaslnZK4gss4sgcwJdWzinb9GOuPSJu_ze4FYKJKyEenQJ2mLyBn2CkQc36yIfebjtFvQ=s160-c-k-c0x00ffffff-no-rj" width="28"/>, React <img src="https://cdn.icon-icons.com/icons2/2415/PNG/512/react_original_logo_icon_146374.png" width="28"/>, TypeScript <img src="https://cdn.icon-icons.com/icons2/2415/PNG/512/typescript_plain_logo_icon_146316.png" width="28"/>, Tailwind <img src="https://cdn.icon-icons.com/icons2/2699/PNG/512/tailwindcss_logo_icon_167923.png" width="28px"/> and Vite <img src="https://vitejs.dev/logo.svg" width="28"/>

## Description 📜

3D Model configurator of a suitcase. There are 2 tabs: Configurator and Animations. On the Configurator tab, user have 4 **CTA** _(Cooperative Thread Array)_ buttons **Body**, **Handles**, **Corners**, **Wheels**. <br>
When user clicks any **CTA** button the color pallete modal opens with 6 colors to pick: **aluminium**, **black**, **red**, **blue**, **green** and **orange**. When user picks one color on the initial **CTA**, the color combination on other 3 **CTAs** are **aluminium**, **black** and the color of the initial **CTA**. For example: If user check **Body** **CTA** and picks **blue** color, on the other 3 **CTA**s the color combinations are **aluminium**, **black** and the color of the initial **CTA**, in this case **blue**. In this way user cannot combine colors like for example **blue** and **orange**, or **blue** and **green**, but can combine with **aluminium**, **black** and **blue**.
When the user picks another color on the initial **CTA**, but also colors on the other **CTA**s are applied, for example: **corners** have **blue** color, **handles** have **blue** color and **wheels** have **black** color, all this colors are reverted to default **aluminium** color, except for the initial **CTA**.<br>
When user clicks on the **Animations** tab, the **CTA** buttons are hidden and

## 🛰️ [Live Demo](https://unlimited3d-react-typescript.netlify.app/)

## 💻 Stack:

<img src="https://cdn.icon-icons.com/icons2/2415/PNG/512/react_original_logo_icon_146374.png" width="20"/> [React.js](https://reactjs.org/)<br>
<img src="https://cdn.icon-icons.com/icons2/2415/PNG/512/typescript_plain_logo_icon_146316.png" width="20"/> [TypeScript](https://www.typescriptlang.org/)<br/>
<img src="https://cdn.icon-icons.com/icons2/2699/PNG/512/tailwindcss_logo_icon_167923.png" width="22px"/> [Tailwindcss](https://tailwindcss.com/)<br>
<img src="https://vitejs.dev/logo.svg" width="20"/> [Vite](https://vitejs.dev/)<br>
<img src="https://yt3.googleusercontent.com/c3CU7GaslnZK4gss4sgcwJdWzinb9GOuPSJu_ze4FYKJKyEenQJ2mLyBn2CkQc36yIfebjtFvQ=s160-c-k-c0x00ffffff-no-rj" width="20px"/> [Unlimited3D](https://unlimited3d.com/)<br>

<hr/>
This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json', './tsconfig.app.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
