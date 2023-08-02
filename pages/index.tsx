import React from "react";
import {Button, Htag, P} from "../components";

export default function Home(): JSX.Element {
  return (
      <>
          <Htag tag='h1'>Курсы по Photoshop</Htag>
          <Button appearance='primary' arrow="right">Button</Button>
          <Button appearance='ghost'>Button</Button>
          <P size='l'>Large</P>
          <P>Medium</P>
          <P size='s'>Small</P>
      </>
  );
}
