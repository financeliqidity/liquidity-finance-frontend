import React from 'react'

interface Props {
    color?: string
    text?: string;
    width?: number;
    height?: number;
    clickable?: boolean;
    trigger?: () => any
}

export const Link: React.FC<Props> = ({ text }) => {
    return (
        <button className={``}>{text ? text : "Nothing.."}</button>
    )
}

export const Button: React.FC<Props> = ({text}) => {
    return (
        <button className={`wow`}>{text ? text : "Nothing.."}</button>)
}

