"use client";


export default function Greeter({ name, age, professions }) {
    return (
        <p>Hello {name}, you are a {professions.map(profession => <span key={profession}>{profession}</span>)} and this year you are {age} years old!</p>
    );
}
