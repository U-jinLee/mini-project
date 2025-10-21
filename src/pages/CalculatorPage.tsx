
import { useCalculator } from "../hooks/useCalculator"
import { Display } from "../components/Display"
import { Keypad }  from "../components/Keypad"

export const CalculatorPage = () => {

    const { expression, result, append, clear, calculate } = useCalculator();

    return (
        // w-[400px] : 사용자 지정 스타일 
        // flex 적용하기
        <div className="w-[300px] p-4 bg-white rounded-lg shadow-lg animate-fade-in">
            <Display expression={expression} result={result} />
            <Keypad onAppend={append} onClear={clear} onCalculate={calculate} />
        </div>        
    )
}