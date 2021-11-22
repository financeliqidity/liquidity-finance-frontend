import {FC} from 'react'
import {useRouter} from 'next/router'

interface Props {
    className?: string;
    color?: string
    text?: string;
    width?: number;
    height?: number;
    clickable?: boolean;
    trigger?: () => any
}

export const Link: FC<Props> = ({ text, className }) => {

    const router = useRouter()
    return (
        <button onClick={() => router.push('/')} className={`${className}`}>{text ? text : "Nothing.."}</button>
    )
}

export const Button: FC<Props> = ({text, className}) => {
    return (
        <button className={`${className} wow`}>{text ? text : "Nothing.."}</button>)
}

