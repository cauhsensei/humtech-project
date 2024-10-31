import Image from 'next/image';
import CustomLayout from '../components/CustomLayout'; 
import Button from '../components/Button';

const FullScreenBanner = () => {
  return (
    <div className="relative w-full min-h-screen lg:flex flex-col justify-start hidden">
      
      <div className="absolute inset-0">
        <Image
          src='/images/sections/bgbissines.png'
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="opacity-70"
        />
      </div>

      <div className="relative z-10 text-center text-white pt-10 md:pt-16 px-4">
        <h1 className="text-purple-darkness text-2xl md:text-[18px] lg:text-[50px] font-bold">
          Potencialize sua Empresa
        </h1>
        <p className="text-black text-lg md:text-[8px] lg:text-[18px] mt-2 md:mt-4">
          Transforme desafios em oportunidades de sucesso
        </p>
      </div>

      <div className="mt-[30px]"></div>

      <div className="relative z-20 flex justify-center items-center flex-grow px-4">
        <CustomLayout />
      </div>
      <div className="relative z-30 flex justify-center items-center mt-8 mb-12">
  <a
    href="https://api.whatsapp.com/send?phone=5541987838860&text=Olá,%20estava%20no%20site%20e%20gostaria%20de%20mais%20informações..."
    target="_blank"
    rel="noopener noreferrer"
    className="w-full h-full flex items-center justify-center"
  >
    <Button
      className="mt-8 w-[361px] h-[92px] bg-purple-darkness text-white font-roboto font-medium text-[20px] leading-normal shadow-2xl transition-colors duration-300 hover:bg-[#57128B]"
    >
      TRANSFORME SUA EMPRESA
    </Button>
  </a>
</div>

    </div>
  );
};

export default FullScreenBanner;
