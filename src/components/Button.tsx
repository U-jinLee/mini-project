type ButtonProps = {
    label: string;
    onClick: () => void;
    className?: string;
};

export const Button = ({ label, onClick, className}: ButtonProps) => {
    return (
        <button 
        className={`bg-gray-200 hover:bg-gray-300 text-xl p-4 rounded ${className}`}
        onClick= {onClick}>
            {label}
        </button>
    )
}