import React from 'react'

const FAQ = () => {

    const FAQBox = (filled: boolean) => {
        return <div className={`${filled ? "bg-color-primary rounded-md text-white " : 'md:bg-white bg-color-primary md:text-black text-white'} py-5 mt-3 md:mt-0 px-8`}>
          <h1 className="md:text-2xl mb-1 font-bold">The best Financial Accounting App Ever !</h1>
          <p className='text-sm md:text-md'>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</p>
        </div>
      }

  return (
    <section className="w-full">
        <div className="md:w-3/4 w-11/12 mx-auto">
          <h1 className="text-color-primary">FAQ</h1>
          <h1 className="md:text-5xl text-2xl md:w-1/2 font-black">Frequently Asked Questions</h1>
          <div className="md:grid grid-cols-2 gap-4 mt-6">
            {FAQBox(true)}
            {FAQBox(false)}
            {FAQBox(false)}
            {FAQBox(true)}
            {FAQBox(true)}
            {FAQBox(false)}
          </div>
        </div>
      </section>
  )
}

export default FAQ