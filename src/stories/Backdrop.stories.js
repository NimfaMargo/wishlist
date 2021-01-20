import React, { useState } from 'react';
import Backdrop from 'components/Backdrop';

export default {
    title: 'Components/Backdrop',
    component: Backdrop,
    parameters: {
        layout: 'centered',
    },
};

export const Primary = () => {
    const [isOpen, setOpen] = useState(false);
    return (
        <>
            <button onClick={() => setOpen(true)}>Click to open</button>
            {isOpen && <Backdrop onClick={() => setOpen(false)} />}
        </>
    );
};

