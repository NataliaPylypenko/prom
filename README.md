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

* `components/[name]/[name].module.css` - component styles
* `components/[name]/[name].props.ts` - input properties of the component
* `components/[name]/[name].tsx` - the component itself
* `components/index.ts` - root file for easy export

* `pages/_app.tsx` -
* `pages/_document.tsx` - redefining the entire document
* `pages/index.tsx` -

* `.eslintrc` -
* `.stylelintrc.json` -
* `next-env.d.ts` -
* `next.config.js` -
* `tsconfig.json` -
* `types.d.ts` -


### Example Component
Create the component itself in `components/MyComponent/MyComponent.tsx`
``` tsx
import { MyComponentProps } from './MyComponent.props';
import styles from './MyComponent.module.css';

export const MyComponent = ({ text, children }: MyComponentProps): JSX.Element => {
    return (
        <div className="MyClass">
            // ...
        </div>
    )
};
```

Create input properties of the component in `components/MyComponent/MyComponent.props.ts`
``` ts
import { ReactNode } from 'react';

export interface MyComponentProps {
    children: ReactNode;
    text: string;
    // ...
}
```

Create css module in `components/MyComponent/MyComponent.module.css`
``` scss
// here we write the CSS code
.MyClass {}
```
