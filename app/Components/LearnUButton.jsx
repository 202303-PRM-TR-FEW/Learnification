import React from 'react'

/**
 *
 * @param {string} text content for the button
 * @param {number} paddingBlock padding on the top and bottom of the button
 * @param {number} paddingInline padding on the left and right of the button
 * @param {string} bgColor background color of the button
 * @param {number} borderRadius border radius of the button
 * @param {string} width specify full or not
 * @param {string} className additional class names
 * @returns a button with the specified properties
 */
export default function LearnUButton({ text, paddingBlock = 10, paddingInline = 40, bgColor = "blue", borderRadius = 12, width = "", className }) {
    return (
        <>
            <button
                className={`${width === "full" ? "w-full" : ""} btn ${bgColor === "blue" ? "btn-primary" : "btn-secondary"} ${className}`}
                style={{ paddingInline: paddingInline, borderRadius: borderRadius, paddingBlock: paddingBlock }}>
                {text}
            </button >
        </>
    )
}
