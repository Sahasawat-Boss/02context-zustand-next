'use client';

import { useSimpleInputZStore } from "../store/InputZStore";

const DisplayZComp = () => {
    const { text, setText } = useSimpleInputZStore();

    return (
        <div className='bg-white text-black p-4 border'>
            <p className="">Typed: {text}</p>
        </div>
    );
};

export default DisplayZComp;
