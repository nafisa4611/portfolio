"use client";

export default function MagneticButton({ children }) {
  const move = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    e.currentTarget.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
  };

  const leave = (e) => {
    e.currentTarget.style.transform = "translate(0,0)";
  };

  return (
    <button
      onMouseMove={move}
      onMouseLeave={leave}
      className="magnetic px-6 py-3 rounded-xl glass font-semibold"
    >
      {children}
    </button>
  );
}
