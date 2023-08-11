import React, { useState } from "react";
import { Button, Htag, Label, P, Rating } from "../components";
import { withLayout } from '../layout/Layout';

function Home(): JSX.Element {
    const [rating, setRating] = useState<number>(4);

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

            <Rating rating={4} isEditable />
            <Rating rating={3} />
            <Rating rating={rating} isEditable setRating={setRating} />
        </>
    );
}

export default withLayout(Home);