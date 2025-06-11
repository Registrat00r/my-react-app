import './Message.module.css'

interface MessageProps{
    text:string;
}

export default function Message({text}: MessageProps) {
    return (
        <p className="read-the-docs">
            {text}
        </p>
    )
};