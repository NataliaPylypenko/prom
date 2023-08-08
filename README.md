<h1> Prom </h1>
This is a project [Prom](https://github.com/NataliaPylypenko/prom) on [Next.js](https://nextjs.org/).


## Getting Started


### Project start

```bash
# Project start
npx create-next-app prom --use-npm
touch tscinfig.json
npm i -D typescript @types/node @types/react

# Setting eslint
npm i -D eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin

# Setting stylelint 
npm i -D stylelint stylelint-config-standard stylelint-order stylelint-order-config-standard

# Server with hot reload at http://localhost:8081/
npm run dev

# Output will be at dist/ folder
npm run build
```

### Project Structure:

* `components/[name]/[name].module.css` -
* `components/[name]/[name].props.ts` -
* `components/[name]/[name].tsx` -
* `components/index.ts` -

* `pages/_app.tsx` -
* `pages/_document.tsx` -
* `pages/index.tsx` -

* `.eslintrc` -
* `.stylelintrc.json` -
* `next-env.d.ts` -
* `next.config.js` -
* `tsconfig.json` -
* `types.d.ts` -

