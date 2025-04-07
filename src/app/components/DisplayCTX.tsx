'use client';

import { useInputContext } from "../context/inputStore";

const DisplayCTX = () => {
    const { text } = useInputContext();

    return (
        <div className="p-6">
            <p className="mt-3">Data from Context Store: {text}</p>
        </div>
    );
};

export default DisplayCTX;
