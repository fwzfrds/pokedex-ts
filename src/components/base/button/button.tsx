import React from 'react'
import Button from '@mui/material/Button';

type ButtonProps = {
    handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void
    styles?: React.CSSProperties
    children: string | number | React.ReactNode
    className?: string
    form?: string
    type?: string
    disabled?: boolean
    variant?: 'text' | 'outlined' | 'contained'
} & React.ComponentProps<'button'>

const ButtonComp = ({ styles, handleClick, children, className, form, type, disabled, variant }: ButtonProps) => {

    return (
        <Button
            style={styles}
            onClick={(e) => handleClick(e)}
            className={className}
            form={form}
            type={type}
            variant={variant}
            disabled={disabled}
        >
            {children}
        </Button>
    )
}

export default ButtonComp