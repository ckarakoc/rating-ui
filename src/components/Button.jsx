export const Button = ({children, className, disabled, onClick}) => {
    return (
        <button
            className={className}
            disabled={disabled}
            onClick={onClick}>{children}</button>
    )
}
