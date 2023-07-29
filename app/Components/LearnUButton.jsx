import React, { forwardRef } from 'react'

/**
 *
 * @param {string} text content for the button
 * @param {number} paddingBlock padding on the top and bottom of the button
 * @param {number} paddingInline padding on the left and right of the button
 * @param {string} bgColor background color of the button
 * @param {number} borderRadius border radius of the button
 * @param {string} width specify full or not
 * @param {string} className additional class names
 * @param {string} type button type
 * @returns a button with the specified properties
 */
const LearnUButton = forwardRef(({ text, paddingBlock = 10, paddingInline = 40, bgColor = "blue", borderRadius = 12, width = "", className }, ref) => {
    return (
        <>

            <button
                ref={ref}
                className={`${width === "full" ? "w-full" : ""} btn ${bgColor === "blue" ? "btn-primary" : "btn-secondary"} ${className}`}
                style={{ paddingInline: paddingInline, borderRadius: borderRadius, paddingBlock: paddingBlock }}>
                {text}
            </button >
        </>
    )
})

// set display name to overcome the error of not having a display name
LearnUButton.displayName = 'LearnUButton';
export default LearnUButton
