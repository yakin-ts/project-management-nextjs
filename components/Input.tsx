interface InputProps {  
    className?: string
    variant?: "primary" | "secondary" | "text"
    size?: "small" | "medium" | "large"
}

const Input: React.FC<InputProps> = ({
    className,
    variant,
    size,
    ...props
}) => {
    return (
        <input className='border-solid border-gray border-2 px-6 py-2 text-lg rounded-3xl w-full' {...props} />
    )
}

export default Input