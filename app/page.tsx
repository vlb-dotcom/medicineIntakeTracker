import React from 'react'

const Home = () => {
  return (
    <section className='w-full flex-center flex-col'>
      <h1 className='head_text text-center'>
          Effortless Medication &nbsp;
        <br className='max-md: hidden' />
        <span className='orange_gradient text-center'> 
          Tracking Made Simple
        </span>
      </h1>
      <p className='desc text-center'>
        Simplify your medication routine with our easy-to-use app. Track doses, 
        set reminders, and stay on top of your health effortlessly.
      </p>
    </section>
  )
}

export default Home