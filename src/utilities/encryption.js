import CryptoJS from "crypto-js";

export const encodeData = (data, key = "i love you")=>{
    try {
        if(key === ""){
            key = "i love you";
        };

        const encodedData = CryptoJS.AES.encrypt(data,key).toString();
        return {status: true, data: encodedData};
    } catch (error) {
        console.log(error);
        return {status: false, error};
    };
};

export const decodeData = (data, key="i love you")=>{
    try {

        if(key === ""){
            key = "i love you";
        };
        const bytes = CryptoJS.AES.decrypt(data, key);
        const result = bytes.toString(CryptoJS.enc.Utf8);

        return {status: true, data: result};
        
    } catch (error) {
        console.log(error);
        return {status: false, error};
    };
};