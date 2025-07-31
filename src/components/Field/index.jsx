import { cn } from '@/utils'
import React, { useId } from 'react'
import { ErrorStyle, FieldStyle } from './style'

export const Field = ({ label, error, onChange, note, renderField, ...props }) => {
    const id = useId();
    const _onChange = (ev) => {
        onChange?.(ev.target.value)
    }
    const onChecked = (ev) => {
        onChange?.(ev.target.checked)
    }
    return (
        <FieldStyle className={cn(props.className, { error }, props.type === 'password' && "password")}>
            {
                props.type === 'checkbox' ? (<>
                    <input {...props} className="form-control" id={id} onChange={onChecked} />
                    {label && <label htmlFor={id}> {label}</label>}
                </>
                ) : (
                    renderField ? renderField({ ...props, error, label, onChange,id }) : (
                        <>
                            {label && <label htmlFor={id}>{label}</label>}
                            <input {...props} className="form-control" id={id} onChange={_onChange} />
                        </>
                    )
                )
            }

            {
                props.type === 'password' && (
                    <span className="toggle-password active">👁️</span>
                )
            }
            {
                note && <p className="form-note">{note}</p>
            }
            {
                error && <ErrorStyle>{error}</ErrorStyle>
            }
        </FieldStyle >
    )
}
