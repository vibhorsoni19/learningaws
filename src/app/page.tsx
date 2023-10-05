"use client";
import React, { useState } from "react";

export default function Home() {
  const [name, setName] = useState<string>(""); // Individual name input
  const [namesArray, setNamesArray] = useState<string[]>([]); // Array to store names

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleClick = () => {
    setNamesArray([...namesArray, name]); // Push the name into the array
    setName(""); // Clear the input field
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <main className="text-center p-24">
        <h1>Hello Devops</h1>
        <input
          type="text"
          value={name}
          placeholder="Please Enter your name ...."
          onChange={handleChange}
        />
        <button onClick={handleClick}>Submit</button>
        <div>
          {/* Render the array of names */}
          {namesArray.map((name, index) => (
            <ul key={index}>
              <li>{name}</li>
            </ul>
          ))}
        </div>
      </main>
    </div>
  );
}
