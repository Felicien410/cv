import React from "react";

interface CardProps {
  className?: string;
  children: React.ReactNode;
}

export function Card({ className = "", children }: CardProps) {
  return (
    <div className={`bg-zinc-900 rounded-lg shadow-lg hover:shadow-pink-900/10 transition-all p-6 border border-zinc-800 ${className}`}>
      {children}
    </div>
  );
}

export function CardContent({ className = "", children }: CardProps) {
  return <div className={`${className}`}>{children}</div>;
}

export function CardHeader({ className = "", children }: CardProps) {
  return <div className={`mb-4 ${className}`}>{children}</div>;
}

export function CardFooter({ className = "", children }: CardProps) {
  return <div className={`mt-4 ${className}`}>{children}</div>;
}

export function CardTitle({ className = "", children }: CardProps) {
  return <h3 className={`text-xl font-bold text-white ${className}`}>{children}</h3>;
}

export function CardDescription({ className = "", children }: CardProps) {
  return <p className={`text-gray-400 ${className}`}>{children}</p>;
}