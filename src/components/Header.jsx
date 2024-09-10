import React from 'react';

export default function Header() {
  return (
    <header>
      <nav>
        <ul className='flex gap-4 align-items-center justify-content-center'>
          <li>
            <a href='#'>Home</a>
          </li>
          <li>
            <a href='#'>About Us</a>
          </li>
          <li>
            <a href='#'>Contact</a>
          </li>
          <li>
            <a href='#'>Products</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
