import React, { useState } from 'react';
import MultiImageInput from 'react-multiple-image-input';
 
function MultiImage
() {
  const crop = {
    unit: '%',
    aspect: 309 / 143,
    width: '100'
  };
 
  const [images, setImages] = useState({});
 
  return (
    <MultiImageInput
      images={images}
      setImages={setImages}
      cropConfig={{ crop, ruleOfThirds: true }}
    />
  );
}
export default MultiImage

