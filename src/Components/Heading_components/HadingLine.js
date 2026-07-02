function HeadingLine({text,textColor}) {
    
    return (
        <div className="container-sm my-3 fs-1 ">
            <p className={`autoType_font_size ${textColor} Font-DancingScript `}>
                {text}
            </p>
        </div>
    )
}
export default HeadingLine;