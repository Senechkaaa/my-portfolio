import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const About = () => {
  return (
    <section className='flex mt-60 mb-10 items-center justify-around about_section'>
        <div className='img_container'>
            <Image className='rounded-3xl img_about' src='https://www.notik.ru/content/img/1590125588_03-laptop-for-coding.jpg' alt='about_me' width={480} height={320} />
        </div>
        <div className='max-w-lg'>
            <h4 id='about' className='section_title mb-1'>About me</h4>
            <h2 className='font-extrabold text-3xl'>I am a Frontend Developer from Belarus</h2>
            <p className='text-slate-500 mt-3'>I am a Frontend Developer from Belarus. 
            My technology stack is html, css, js, react, ts, next. And many libraries such as - firebase, react-hook-form + zod, mobx, redux-toolkit, RTK, jest, react-testing-library, sccs, react-hook-form, MUI, Antd, tailwind css</p>
        </div>
    </section>
  )
}

export default About