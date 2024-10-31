import Head from 'next/head'
import Button from '../components/Button'

interface BadgeProps {
  text: string
  top: string
  left: string
}

const Badge: React.FC<BadgeProps> = ({ text, top, left }) => {
  return (
    <span
      className="absolute px-4 py-2 text-white text-sm md:text-base font-semibold"
      style={{
        top,
        left,
        borderRadius: '20px',
        border: '1px solid rgba(255, 255, 255, 0.21)',
        background: 'rgba(255, 255, 255, 0.40)',
        color: '#FEFDFF',
        fontFamily: 'Roboto, sans-serif',
        fontSize: '16px',
      }}
    >
      {text}
    </span>
  )
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Humtech Recursos Humanos</title>
        <meta
          name="description"
          content="Estratégias para identificar e preparar futuros líderes"
        />
      </Head>

      <div
        className="relative min-h-screen bg-cover bg-center hidden md:block"
        style={{ backgroundImage: 'url(/images/HeroSection/bghero.png)' }}
      >
        <div className="absolute top-[322px] left-[175px]">
          <h3 className="text-white text-xl md:text-2xl font-semibold">
            Estratégias para identificar e preparar futuros líderes
          </h3>
        </div>

        <div className="absolute top-[400px] left-[175px] text-white">
          <h1 className="text-3xl md:text-5xl font-bold">Humtech</h1>
          <h2 className="text-xl md:text-3xl mt-4">Recursos Humanos</h2>
          <p className="text-lg md:text-xl mt-4">
            Entrega de resultado através de pessoas com RH{' '}
            <span className="font-bold">5.0!</span> <span>⭐⭐⭐⭐⭐</span>
          </p>

          <div className="3xl:mt-[160px] mt-[200px] ml-[150px]">
            <Button className="w-[290px] h-[100px] bg-[#6125C5] rounded-[60px] shadow-lg flex-shrink-0 text-white font-bold">
              Saiba Mais
            </Button>
          </div>
        </div>
        
        <Badge text="+ Engajamento do Time" top="437px" left="989px" />
        <Badge
          text="+ Retenção • Resultado • Performance"
          top="545px"
          left="1330px"
        />
        <Badge text="+ Cultura de Entrega" top="677px" left="924px" />
        <Badge text="+ Agilidade na Adaptação" top="798px" left="1233px" />
      </div>
    </>
  )
}
