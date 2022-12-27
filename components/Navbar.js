import Link from "next/link";
import React from "react";

export const Navbar = () => {
  return (
    <div className="container">
      <nav>
        <div>
          <Link href="/">Coder Wikipedia</Link>
        </div>
        <div>
          <Link href="/about">About</Link>
          <Link href="/coders">All Coders</Link>
        </div>
        <div>
          <Link href="/developer">Developer</Link>
        </div>
      </nav>
    </div>
  );
};
