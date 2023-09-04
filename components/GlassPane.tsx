import clsx from "clsx"

const GlassPane: React.FC = ({ children, className }: any) => {
    return (
        <div className={clsx("glass rounded-2xl border-solid border-2 border-gray-200 backdrop-blur-lg",
            className)}>
            {children}
        </div>
    )
}

export default GlassPane