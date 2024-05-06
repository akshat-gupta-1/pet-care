'use client';
import React, { useState } from 'react';
import Card from './_components/Card';
import { cn } from '@/utils/utils';
const page = () => {
  const [hover1, setHover1] = useState<boolean>(false);
  const [hover2, setHover2] = useState<boolean>(false);
  const [hover3, setHover3] = useState<boolean>(false);
  return (
    <div className=" max-w-screen-xl mx-auto text-center mt-10 ">
      <h4 className="font-bold text-5xl uppercase">Bubblelicious Spa</h4>
      <h4 className="font-bold text-5xl uppercase">Adventures</h4>
      <div className="mt-32 grid grid-cols-3 gap-x-16">
        <Card
          color="#512772"
          img="/image-1.png"
          hover={hover1}
          setHover={setHover1}
        >
          <div className="text-[#FCEDE5]  px-6 ">
            <h2
              className={cn('uppercase font-bold text-2xl pt-4', {
                'text-[#FFC65C]': hover1,
              })}
            >
              Bath & Brush
            </h2>
            <h6 className="text-center text-base font-normal mt-10 ">
              Treat your pet to a luxurious bath and grooming experience. Our
              gentle cleansing shampoos and professional brushing techniques
              leave your pet's coat clean, shiny, and irresistibly soft.
            </h6>
          </div>
        </Card>
        <Card
          color="#3F7A8C"
          img="/image-2.png"
          hover={hover2}
          setHover={setHover2}
        >
          <div className="text-[#FCEDE5]  px-6 ">
            <h2
              className={cn('uppercase font-bold text-2xl pt-4', {
                'text-[#FFC65C]': hover2,
              })}
            >
              Bath & Brush
            </h2>
            <h6 className="text-center text-base font-normal mt-10 ">
              Treat your pet to a luxurious bath and grooming experience. Our
              gentle cleansing shampoos and professional brushing techniques
              leave your pet's coat clean, shiny, and irresistibly soft.
            </h6>
          </div>
        </Card>
        <Card
          color="#67196B"
          img="/image-3.png"
          hover={hover3}
          setHover={setHover3}
        >
          <div className="text-[#FCEDE5]  px-6 ">
            <h2
              className={cn('uppercase font-bold text-2xl pt-4', {
                'text-[#FFC65C]': hover3,
              })}
            >
              Bath & Brush
            </h2>
            <h6 className="text-center text-base font-normal mt-10 ">
              Treat your pet to a luxurious bath and grooming experience. Our
              gentle cleansing shampoos and professional brushing techniques
              leave your pet's coat clean, shiny, and irresistibly soft.
            </h6>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default page;
