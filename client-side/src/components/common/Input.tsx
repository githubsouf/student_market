import React, { FC } from 'react';

interface InputProps {
    type: string;
    placeholder?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string;
}

const Input: FC<InputProps> = ({ type, placeholder, value, onChange, className }) => {
    return (
        <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className={`border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 ${className}`}
        />
    );
};

export default Input;