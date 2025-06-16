export default function DangerButton({
    className = '',
    disabled,
    children,
    ...props
}) {
    return (
        <button
            {...props}
            className={
                `btn btn-danger ${disabled ? 'disabled' : ''} ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
