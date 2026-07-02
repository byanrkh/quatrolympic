import React from "react";

export default function Container({
  children,
  className,
}: Readonly<{
  children?: React.ReactNode;
  className?: string;
}>) {
  return (
    <section className={`border-b-2 ${className || ""}`}>{children}</section>
  );
}
