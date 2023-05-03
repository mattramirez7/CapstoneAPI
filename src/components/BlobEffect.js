import React, { useEffect, useRef } from 'react';
import '../style/Blob.css';

const BlobEffect = () => {
  const blobRef = useRef(null);

  useEffect(() => {
    const handlePointerMove = (event) => {
      const { clientX, clientY } = event;

      blobRef.current.animate(
        {
          left: `${clientX}px`,
          top: `${clientY}px`,
        },
        { duration: 3000, fill: 'forwards' }
      );
    };

    window.addEventListener('pointermove', handlePointerMove);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
    };
  }, []);

  return (
    <>
      <div id="blob" ref={blobRef}></div>
      <div id="blur"></div>
    </>
  );
};
export default BlobEffect;