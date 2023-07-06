import React from 'react'

/**
 * 
 * @param {number | string} width width of the icon
 * @param {number | string} height height of the icon
 * @param {string} fill color of the icon
 * @returns
 */

export default function SaveIcon({ width, height, fill = "rgb(245, 245, 245)" }) {
    return (
        <>
            <svg
                style={{ width: width, height: height, overflow: "visible", opacity: "unset", zIndex: "1", fill: fill, cursor: "pointer" }}
                viewBox="0 0 384 512"><path d="M0 512V48C0 21.49 21.49 0 48 0h288c26.51 0 48 21.49 48 48v464L192 400 0 512z"></path>
            </svg>
        </>
    )
}
