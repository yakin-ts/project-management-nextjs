interface CardProps {
    children: React.ReactNode
    className?: string
    variant?: "primary" | "secondary" | "text"
    size?: "small" | "medium" | "large"
}

const Card: React.FC<CardProps> = ({ children, ...props }) => {
    return (
        <div className='w-3/6 h-full mx-auto my-auto rounded-3xl drop-shadow-xl bg-white px-10 py-4'>
            {children}
        </div>
    )
}

export default Card