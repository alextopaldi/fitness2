import axios from "axios";
import { useState } from "react";

interface TranslateProps {
    word : string,
    from : string,
    to: string
}

export function useTranslate({word, to, from} : TranslateProps) {

    const googleTranslateURL = `https://translate.googleapis.com/translate_a/single?client=a&dt=t&sl=${from}&tl=${to}&q=${word}`;
    // const googleTranslateURL = 'https://translate.googleapis.com/translate_a/single?client=gtx&dt=t&sl=eng&tl=$ru&q=apple'
    const [translatedValue, setTranslatedValue] = useState('')

    async function Translate() {
        const response = await axios.post(googleTranslateURL)
        setTranslatedValue(response.data[0][0][0])
        return response.data[0][0][0]
    }

    return {Translate, translatedValue}
}