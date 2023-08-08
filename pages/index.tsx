import React from "react";
import {Button, Htag, Label, P} from "../components";

export default function Home(): JSX.Element {
  return (
      <>
          <Htag tag='h1'>Heading level 1</Htag>
          <Htag tag='h2'>Heading level 2</Htag>
          <Htag tag='h3'>Heading level 3</Htag>

          <Button appearance='primary' arrow="right">Button Primary</Button>
          <Button appearance='ghost'>Button Ghost</Button>

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
