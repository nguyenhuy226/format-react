import React from 'react'
import { Popconfirm as PopcomfirmM } from 'antd'
import { Button } from '../Button'

export const Popconfirm = ({showCancel = true, description, ...props }) => {
    return (
        <PopcomfirmM {...props}
            showCancel={false}
            okButtonProps={{hidden: true}}
            description={<>
                {description}
                <div className="flex justify-end gap-2 mt-2">
                    {
                        showCancel && <Button className="btn-xs" onClick={props.onCancle}>{props.cancelText || "Cancle"}</Button>
                    }
                    <Button onClick={props.onConfirm}>{props.okText || "Ok"}</Button>
                </div>
            </>}
        />
    )
}
