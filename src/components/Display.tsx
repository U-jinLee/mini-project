type DisplayProps = {
    expression: string;
    result: string;
}

export const Display = ({ expression, result}: DisplayProps) => {
    return (
        <div className="bg-white p-4 rounded shadow mb-2">
            <div className="text-right text-lg text-gray-700">{expression}</div>
            <div className="text-right text-2xl font-bold">{result}</div>
        </div>
    )
}