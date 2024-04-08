import React from 'react';
import s from './CustomButton.module.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const CustomButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, ...props }, ref) => {
    return (
      <button
        className={className ? `${className} ${s.custom_button}` : s.custom_button}
        ref={ref}
        {...props}
      />
    );
  }
);
