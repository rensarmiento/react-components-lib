import classnames from "classnames"

export default function Badge({children, variant="white", shape="square"}) {
    const variantClassName = `badge-${variant}`;
    const shapeClassName = `${shape}`;
    const className = classnames('badge', variantClassName, shapeClassName);
    return (
        <div className={className}>
            <div className="badge-text">
                {children}
            </div>
        </div>
    )
}