# React + TypeScript + Vite

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
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list


![Screenshot (25)](https://github.com/zahran001/NoteMart/assets/114562123/6d6bd90f-a4b8-4dff-8325-9d58e3e921d3)
![Screenshot (26)](https://github.com/zahran001/NoteMart/assets/114562123/f81c67d4-08a4-4889-9170-d45bc0bd07b3)
![Screenshot (27)](https://github.com/zahran001/NoteMart/assets/114562123/19f0b676-91f7-44cf-b5e8-9afab23b4bc4)
![Screenshot (28)](https://github.com/zahran001/NoteMart/assets/114562123/8e40205e-c9eb-48b9-8e97-9bb9a68ad38c)




