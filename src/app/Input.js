"use client";


export default function Input({ value, onChange, validate }) {
    return <input type="text" value={value} onChange={onChange} validate={validate} />;
}
