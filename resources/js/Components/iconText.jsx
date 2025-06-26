export default function IconText({ icon, text, className = "", textClassName = "" }) {
    return (
        <div className={`d-flex align-items-center ${className} p-0 m-0`}>
            <img src={icon} alt={text} className="me-2" style={{ width: "16px", height: "16px" }} />
            <span className={textClassName} >{text}</span>
        </div>
    );
}
