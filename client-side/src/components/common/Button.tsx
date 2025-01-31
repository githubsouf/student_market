import { FC } from 'react';

interface ButtonProps {
    text: string;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
    className?: string;
}
const Button: FC<ButtonProps> = ({ text, onClick, type = 'button', className }) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${className}`}
        >
            {text}
        </button>
    );
};

export default Button;