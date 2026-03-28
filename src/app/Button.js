"use client";


export default function Button({ label, onClick, disabled = false, ...props }) {
    return <button onClick={onClick} disabled={disabled} {...props}>{label}</button>
}
