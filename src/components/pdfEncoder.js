import React, { useState } from 'react'
import LayoutContainer from './LayoutContainer'
import {  encodeData } from '../utilities/encryption';
import HeaderComponent from './HeaderComponent';

const PdfEncoder = () => {

    const [text, setText] = useState("");
    const [key, setKey] = useState("");

    const handleChange = (e) => {
        e.preventDefault();
        const { value } = e.target;
        setText(value);
    };

    const handleKeyChange = (e) => {
        e.preventDefault();
        setKey(e.target.value);
    };

    const encode = () => {
        if (text === "") {
            alert("please enter a value")
        } else {
            let result = encodeData(text, key);
            if (result.status) {
                setText(result.data);
            } else {
                alert(result.error)
            }
        }
    };

    const reset = () => {
        setText("")
    };
    const resetKey = () => {
        setKey("")
    };

    return (
        <>
            <HeaderComponent title="Pdf Encoder" />
            <LayoutContainer className={'p-4'}>
                <div className='w-full h-auto flex flex-col justify-start items-center'>
                    <div className=' w-full grid grid-cols-12 gap-4 '>
                        <div className='w-full h-[40px] flex items-center justify-center col-span-4 md:col-span-12 md:order-2'>
                            <span>Key: <input value={key} onChange={(e) => handleKeyChange(e)} className='h-[40px] border-[2px] rounded border-dark' /> <span className='underline cursor-pointer' onClick={resetKey} >Reset Key</span></span>
                        </div>
                        <div className='w-full h-[40px] col-span-4 flex justify-center items-center md:col-span-12 md:order-1'>
                            <p>Paste the Text here for Encode </p>
                        </div>

                        <div className='w-full col-span-4 pl-96 flex justify-between items-center md:pl-4 md:flex-col md:gap-4 md:col-span-12 md:order-3'>
                            <button className='bg-dark w-[100px] h-[40px] rounded text-light hover:bg-secondary' onClick={encode}>Encode</button>
                            <button className='bg-dark w-[100px] h-[40px] rounded text-light hover:bg-secondary' onClick={reset}>Reset</button>
                        </div>
                    </div>
                    <div className='w-full h-auto flex justify-center items-center pt-4'>
                        <textarea value={text} onChange={(e) => handleChange(e)} className='w-full h-full border-solid border-dark border-[4px] bg-light text-dark p-10' rows={25} cols={500} />
                    </div>
                </div>
            </LayoutContainer>
        </>
    )
}

export default PdfEncoder