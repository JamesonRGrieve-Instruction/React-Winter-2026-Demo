"use client";


export default function Card({ title, description, imageSrc, children }) {
    return (
        <div className="p-1 border-black border-solid border-4 relative">
            <h2>{title}</h2>
            <p>{description}</p>
            <img src={imageSrc} title={title} alt={description} />
            {children}
        </div>
    );
}
