//   const data = [
//     {
//       text: 'Free',
//       price: '0/monthly',
//       holati: 'Features',
//       imkoniyat1: 'Example Feature 1',
//       imkoniyat2: 'Example Feature 2',
//       imkoniyat3: 'Example Feature 3',
//       buttonText: 'Get Started'
//     },
//     {
//       text: 'Pro',
//       price: '9.99/monthly',
//       holati: 'Features',
//       imkoniyat1: 'Example Feature 1',
//       imkoniyat2: 'Example Feature 2',
//       imkoniyat3: 'Example Feature 3',
//       imkoniyat4: 'Example Feature 4',
//       buttonText: 'Get Started'
//     },
//     {
//       text: 'Enterprise',
//       price: '19.99/monthly',
//       holati: 'Features',
//       imkoniyat1: 'Example Feature 1',
//       imkoniyat2: 'Example Feature 2',
//       imkoniyat3: 'Example Feature 3',
//       imkoniyat4: 'Example Feature 4',
//       imkoniyat5: 'Example Feature 5',
//       buttonText: 'Get Started'
//     }
//   ]
//   return (
//     <>
//     <div>
//       <div className='flex justify-center gap-10 mt-10 items-center '>
//         {data.map(d => (
//           <div className='bg-[#1f2937] p-10 px-10 text-white'>
//             <div className='text-4xl font-bold'>{d.text}</div>
//             <p className='mt-2 text-2xl'>{d.price}</p>
//             <h1 className='mt-2 mb-3 text-2xl'>{d.holati}</h1>
//             <p>{d.imkoniyat1}</p>
//             <p>{d.imkoniyat2}</p>
//             <p>{d.imkoniyat3}</p>
//             <p>{d.imkoniyat4}</p>
//             <p>{d.imkoniyat5}</p>
//             <button className='bg-[#a78bfa] text-[#1f2937] p-4 px-20 mt-10 cursor-pointer'>{d.buttonText}</button>
//           </div>
//         ))}
//       </div>
//     </div>
//     <div>
//         <div className='text-center mt-50'>
//           <h1 className='font-semibold text-4xl'>Testimonials
// </h1>
// <p>Hello
// </p>
//         </div>
//         <div className='max-w-[1350px] mx-auto flex justify-between'>
//           <div className='text-center'>

//           <div className="flex items-center justify-center">
//             <div className="my-6">
//               <img className='w-40' src={Picture1} alt="" />
//             </div>

//             </div>
//             <svg
//   xmlns='http://www.w3.org/2000/svg'
//   viewBox='0 0 512 512'
//   fill='currentColor'
//   className='absolute left-[250px] w-8 h-8 dark:text-gray-700'
// >
//   <path d='M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z'></path>
//   <path d='M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z'></path>
// </svg>

//             <p className='px-6 py-1 text-lg italic'>
//   ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium <br />
//   doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore <br />
//   veritatis et quasi architecto beatae vitae dicta sunt explicabo.
// </p>
// <svg
//   xmlns='http://www.w3.org/2000/svg'
//   viewBox='0 0 512 512'
//   fill='currentColor'
//   className='absolute right-[980px] w-8 h-8 dark:text-gray-700'
// >
//   <path d='M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z'></path>
//   <path d='M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z'></path>
// </svg>
// <div className='bg-[#a78bfa] w-14 h-1 my-3 mx-auto rounded-md'></div>
// <p>Paul Brats</p>

//         </div>
//         <div className='text-center'>
//   <div className='flex items-center justify-center'>
//     <div className='my-6'>
//       <img className='w-40 rounded-full' src={Picture2} alt='' />
//     </div>
//   </div>
//   <svg
//     xmlns='http://www.w3.org/2000/svg'
//     viewBox='0 0 512 512'
//     fill='currentColor'
//     className='absolute left-[930px] w-8 h-8 dark:text-gray-700'
//   >
//     <path d='M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z'></path>
//     <path d='M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z'></path>
//   </svg>

//   <p className='px-6 py-1 text-lg italic'>
//     ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium{' '}
//     <br />
//     doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore{' '}
//     <br />
//     veritatis et quasi architecto beatae vitae dicta sunt explicabo.
//   </p>
//   <svg
//     xmlns='http://www.w3.org/2000/svg'
//     viewBox='0 0 512 512'
//     fill='currentColor'
//     className='absolute right-[250px] w-8 h-8 dark:text-gray-700'
//   >
//     <path d='M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z'></path>
//     <path d='M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z'></path>
//   </svg>
//   <div className='bg-[#a78bfa] w-14 h-1 my-3 mx-auto rounded-md'></div>
//   <p>Kit Kat</p>
// </div>

//           </div>
//     </div>
//     <div className="max-w-[1350px] mx-auto flex justify-between items-center" >
//       <div>
//         <h1 className='font-bold text-6xl'>Join our community.</h1>
//         <p className='mt-3 text-lg'>Doloribus consectetur quasi ipsa quo neque culpa blanditiis ducimus recusandae a veritatis optio cumque, in harum ad nam!</p>
//       </div>
//       <div className="flex flex-row">

//         <input type="email" placeholder='Enter your email' className="w-3/5 p-3 rounded-l-lg bg-white text-gray-700" />
//         <button type="button" className="w-2/5 p-3 font-semibold rounded-r-lg sm:w-1/3 dark:bg-violet-400 dark:text-gray-900 cursor-pointer">Submit</button>
//         </div>
//     </div>
//     <div className='max-w-[1350px] mx-auto flex justify-between mt-10 items-center'>
//         <a aria-label="Back to homepage" className="flex items-center p-2 " href="/">
//         <img className='w-14 mr-' src="https://strapi-starter-local-setup.vercel.app/_next/image?url=https%3A%2F%2Fexciting-gift-8e69796398.media.strapiapp.com%2Flogo_dark_89c13bfcef.png&w=96&q=75" alt="" />
//         <div class="ml-2">
//           <h2 class="text-2xl font-bold">Strapi Starter</h2>
//           </div>
//           </a>
//         <p class='pb-1 text-lg font-medium'>Categories</p>
//         <div className='mr-60'>

//         <p class='pb-1 text-lg font-medium'>Menu</p>
//         <ul>
//   <li class='flex'>
//     <a class='hover:dark:text-violet-400 false}' href='/'>
//       Home
//     </a>
//   </li>
//   <li class='flex'>
//     <a class='hover:dark:text-violet-400 false}' href='/blog'>
//       Blog
//     </a>
//   </li>
//   <li class='flex'>
//     <a class='hover:dark:text-violet-400 false}' href='/about'>
//       About
//     </a>
//   </li>
// </ul>

//         </div>
//     </div>
//     <div className="max-w-[1350px] mx-auto"></div>
//         </>
// import Picture1 from '../src/assets/img/paul_brats_012832af74 (1).webp'
// import Picture2 from '../src/assets/img/kit_kat_96feba6636.webp'
