"use client";

import Button from "./Button";
import Card from "./Card";


export default function Modal({ onConfirm, onCancel, children }) {
    return (
        <Card title="Modal" description="A modal." imageSrc="https://placehold.co/600x400/EEE/31343C">
            <Button label="X" onClick={onCancel} />
            {children}
            <Button label="Confirm" onClick={onConfirm} />
            <Button label="Cancel" onClick={onCancel} />
        </Card>
    );
}
