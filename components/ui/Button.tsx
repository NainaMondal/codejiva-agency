import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  children: React.ReactNode;
}

export const Button = ({ variant = 'primary', children, className = '', ...props }: ButtonProps) => {
  const baseStyle = "px-6 py-3 rounded-lg font-medium transition-all duration-300 ease-in-out inline-flex items-center justify-center";
  const variants = {
    primary: "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg shadow-blue-500/20",
    secondary: "bg-white text-slate-900 hover:bg-slate-100",
    outline: "border border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white"
  };

  return (
    <button className={`${baseStyle} ${variants[variant]}${className}`} {...props}>
      {children}
    </button>
  );
};