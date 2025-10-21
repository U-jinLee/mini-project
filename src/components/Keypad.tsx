import { Button } from "./Button"

type KeypadProps = {
    onAppend: (value: string) => void;
    onClear: () => void;
    onCalculate: () => void;
}

export const Keypad = ({ onAppend, onClear, onCalculate }: KeypadProps) => {
    const buttons = [
        '7', '8', '9', '/',
        '4', '5', '6', '*',
        '1', '2', '3', '-',
        '0', '.', '=', '+',
    ];
    return (
        <div className="grid grid-cols-4 gap-2">
            <Button label="C" onClick={onClear} className="col-span-4 bg-red-300"/>
            {buttons.map((label) => (
                <Button 
                key={label} 
                label={label}
                onClick={() => {
                    if (label === '=') onCalculate();
                    else onAppend(label);
                }}
                />
            ))}
        </div>
    )
}