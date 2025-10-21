import { useState } from "react";

export const useCalculator = () => {
    const [expression, setExpression] = useState('');
    const [result, setResult] = useState('');

    // 이전 상태를 받아서 새로운 상태를 반환
    const append = (value: string) => setExpression(prev => prev + value);

    const clear = () => {
        setExpression('');
        setResult('');
    }

    const calculate = () => {
        try {
            setResult(eval(expression).toString());
        } catch {
            setResult('Error');
        }
    }

    return { expression, result, append, clear, calculate }

}