import React from "react";
import "../styles/card.scss";

interface CardProps {
  title: string;
  body: string;
}

export default function Card({ title, body }: CardProps) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  );
}
