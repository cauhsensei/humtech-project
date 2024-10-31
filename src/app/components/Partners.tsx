import Image from 'next/image';

const Partners = () => {
  return (
    <div
      className="relative w-full h-[100px] lg:h-[217px] flex items-center justify-center"
      style={{
        background: 'linear-gradient(90deg, #320057 0%, #6D00BD 100%)',
      }}
    >
      <Image
        src='/images/sections/partners.png'
        alt="Partners"
        layout="intrinsic"
        width={989}
        height={113}
        quality={100}
      />
    </div>
  );
};

export default Partners;
