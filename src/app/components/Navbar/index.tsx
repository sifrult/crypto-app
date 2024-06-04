"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [coins, setCoins] = useState(["123", "abc"]);
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setCoins([...coins, value]);
    setValue("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} value={value} />
      </form>
      <ul>
        {coins.map((coin) => (
          <li key={coin}>
            <Link href={`/Home/Coins/${coin}`}>{coin}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
