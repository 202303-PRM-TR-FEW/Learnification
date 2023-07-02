import React from 'react'

export default function LearnUButton({ text, paddingInline = 40, bgColor = "blue", borderRadius = 12 }) {
    return (
        <>
            <button
                className={`btn ${bgColor === "blue" ? "btn-primary" : "btn-secondary"}`}
                style={{ paddingInline: paddingInline, borderRadius: borderRadius }}>
                {text}
            </button >
        </>
    )
}