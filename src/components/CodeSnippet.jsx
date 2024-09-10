import React from 'react';

import { useEffect, useRef } from 'react';

export default function CodeSnippet() {
  console.log('inital call');

  const codeRef = useRef(null);

  useEffect(() => {
    console.log('component  mounted');
  }, []);

  return (
    <pre>
      <code className='javascript'>
        npm i primereact primeicons primeflex uuid react-router-dom
        @tanstack/react-query --save
      </code>
    </pre>
  );
}
