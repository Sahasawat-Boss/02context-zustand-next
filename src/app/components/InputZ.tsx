'use client';

import { useSimpleInputZStore } from "../store/InputZStore";

const InputZComp = () => {
    const { text, setText } = useSimpleInputZStore();

    return (
        <div className='bg-white text-black p-4 border'>
            <input
                type="text"
                placeholder="Type Here..."
                className="border"
                onChange={(e) => setText(e.target.value)}
                value={text}
            />
            <p className="">Typed: {text}</p>
            <button onClick={() => setText('')} className="border">Clear</button>
        </div>
    );
};

export default InputZComp;
