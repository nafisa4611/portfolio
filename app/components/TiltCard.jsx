"use client";

export default function TiltCard({ children }) {
  const move = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = -(y - rect.height / 2) / 10;
    const rotateY = (x - rect.width / 2) / 10;

    card.style.transform =
      `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
  };

  const leave = (e) => {
    e.currentTarget.style.transform =
      "rotateX(0deg) rotateY(0deg) scale(1)";
  };

  return (
    <div
      onMouseMove={move}
      onMouseLeave={leave}
      className="transition-transform duration-300"
      style={{ transformStyle: "preserve-3d" }}
    >
      {children}
    </div>
  );
}
