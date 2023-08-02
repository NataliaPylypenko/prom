import React from "react";
import {Button, Htag, Label, P} from "../components";

export default function Home(): JSX.Element {
  return (
      <>
          <Htag tag='h1'>Курсы по Photoshop</Htag>
          <Button appearance='primary' arrow="right">Button</Button>
          <Button appearance='ghost'>Button</Button>
          <P size='l'>Large</P>
          <P>Medium</P>
          <P size='s'>Small</P>
          <Label size='m' color='red'>figma.com</Label>
          <Label color='primary'>Web дизайн</Label>
          <Label color='success'>-10 000 ₽ </Label>
          <Label>Ghost</Label>
      </>
  );
}
