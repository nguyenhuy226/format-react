import { useDidUpdateEffect } from "@/hooks/useDidUpdateEffect";
import { cn } from "@/utils";
import { useId } from "react";
import { createContext, useContext, useState } from "react";

export const ContextRadio = createContext({});

export const Radio = ({ children, ...props }) => {
    const { value, onChange } = useContext(ContextRadio);

    return (
        <div
            className="custom-control custom-radio mb-3"
            onClick={() => {
                onChange(props.value);
            }}
        >
            <input
                checked={props.value == value}
                className="custom-control-input"
                type="radio"
                readOnly
            />
            <label
                className="custom-control-label flex items-center"
                htmlFor="seasonOne"
            >
                {children}
            </label>
        </div>
    );
};

Radio.Toggle = ({ address, children, ...props }) => {
    const { value, onChange } = useContext(ContextRadio);
    const id = useId()
    return (
        <div className={cn("cursor-pointer", {
            "hover:bg-[#EBEBEB]": !address,
            "bg-[#c7c7c7]": address    
        })}>
            <label onClick={() => {
                onChange(props.value);
            }}
                htmlFor={id}
                className={cn("cursor-pointer", {
                    active: props.value == value,

                })}
            >{children}</label>
            <input type="radio" readOnly id={id} checked={props.value == value} hidden />
        </div>
    );
};

Radio.Group = ({
    children,
    value: valueProps,
    defaultValue,
    toggle,
    ...props
}) => {
    const [value, setValue] = useState(valueProps || defaultValue);
    useDidUpdateEffect(() => {
        setValue(valueProps);
    }, [valueProps]);
    const onChange = (_value) => {
        if (toggle && _value == value) {

            setValue();
            props?.onChange?.();
            return;
        }
        setValue(_value);
        props?.onChange?.(_value);
    };
    return (
        <ContextRadio.Provider value={{ value, onChange }}>{children}</ContextRadio.Provider>
    );
};