"use client";


export default function Button({ label, onClick, disabled = false }) {
    return <button onClick={onClick} disabled={disabled}>{label}</button>
}
