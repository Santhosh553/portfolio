'use client'
import { useGlobal } from '@/contexts/Global'
import Image from 'next/image'

interface IUseGlobal {
  globalStates: {
    isDark: boolean | null
  }
}

const Hero = () => {
  // UseGlobal context
  const { globalStates }: IUseGlobal = useGlobal()
  const { isDark } = globalStates

  return (
    <div id="me" className="w-full flex flex-col-reverse gap-5 lg:flex-row items-center justify-center pt-20 px-5 lg:px-32">
      {/* Name section */}
      <div className="w-full h-full flex flex-col items-center justify-center lg:items-start lg:justify-start">
        <div className="w-full flex flex-row items-center justify-center lg:items-start lg:justify-start space-x-3">
          <p className="flex text-3xl sm:text-4xl md:text-5xl font-medium tracking-wide whitespace-nowrap">Hello there</p>
          <Image src="/images/wave.webp" width={35} height={35} alt="Hello" />
        </div>

        <div className="w-full flex flex-col items-center justify-center lg:items-start lg:justify-start mt-2 lg:mt-4">
          <p className='flex text-3xl sm:text-4xl md:text-5xl font-light tracking-wide whitespace-nowrap'>
            My Name is
            <span className='font-medium text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-rose-600 dark:from-blue-400 dark:to-pink-400 pl-2 duration-500 ease-out'>Santhosh</span>
          </p>
        </div>

        <div className="w-full flex flex-col pt-1">
          <p className='w-full text-sm md:text-base text-center lg:text-left font-extralight italic'>A person who always motivated to learn a new thing</p>
        </div>
      </div>

      {/* Image section */}
      <div className="w-full flex flex-col items-center justify-center">
        <Image src='/images/picw.png' className={`${isDark ? 'flex' : 'hidden'}`} width={350} height={350} alt='Santhosh'/>
        <Image src='/images/picbw.png' className={`${isDark ? 'hidden' : 'flex'}`} width={350} height={350} alt='Santhosh'/>
      </div>
    </div>
  )
}

export default Hero
