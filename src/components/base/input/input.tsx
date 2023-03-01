import React from 'react'
import { TextField } from '@mui/material';

type InputProps = {
    value?: string
    type?: 'number' | 'text' | 'date' | 'password'
    variant?: 'standard' | 'outlined' | 'filled'
    size?: 'small'
    inputProps?: {}
    error?: boolean
    validationText?: string
    styles?: React.CSSProperties
    className?: string
    id?: string
    sx?: {}
    placeholder: string
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Input = ({ className, id, value, type, variant, size, inputProps, handleChange, error, validationText, styles, sx, placeholder }: InputProps) => {
    return (
        <TextField
            id={id}
            className={className}
            InputProps={inputProps}
            type={type}
            value={value}
            variant={variant}
            size={size}
            onChange={handleChange}
            error={error}
            helperText={validationText}
            style={styles}
            sx={sx}
            placeholder={placeholder}
        />
    )
}

export default Input