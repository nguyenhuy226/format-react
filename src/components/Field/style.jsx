import styled from "styled-components";

export const FieldStyle = styled.div`
        &.error {
            .form-control {
                border-color: red;
                color: red;
                ::placehoder {
                    color: red;
                }
            }
        }
    `

export const ErrorStyle = styled.span`
    color: red;
    font-size: 0.8rem;
    margin-top: 0.5rem;
    display: block;
    font-weight: 500;
`