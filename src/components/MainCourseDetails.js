import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import G3 from "@/public/Gallery/G3.jpg"
import rightArrowWhite from "@/public/img/rightArrowWhite.png"
const MainCourseDetails = (props) => {
  return (
    <>
    <main>
        <section>
            <article>
            <div className='flex w-[95vw] justify-center items-start mx-auto gap-x-10'>
                <div>
                  <div className='w-[60vw] '>
                    <div className='flex justify-center items-center'>
                      <Image
                        src={G3}
                        className=' w-[55vw] rounded-2xl'
                        alt="Picture of the author"
                      />
                    </div>
                    <div className='flex justify-between items-center m-8'>
                      <div className='text-3xl font-bold'>{props.Head}</div>
                      <div className='flex justify-center items-center gap-x-10 '>
                        <div className='hover:text-orange-400'>{props.Price}</div>
                        <div className='hover:text-orange-400'>{props.Level}</div>
                        <div className='hover:text-orange-400'>{props.Duration}</div>
                      </div>
                    </div>

                    <div className='flex flex-col gap-y-5 mx-8'>
                      <div>{props.contentParaFirst}
                      </div>
                      <div>{props.contentParaSecond}</div>
                    </div>

                    <div className='flex justify-center items-center border-2 border-[#FFEED5] bg-[#ffeed525] text-orange-400 w-fit font-semibold gap-x-5 mx-auto my-8'>
                      <div>Buy Your Driving Lessons with Us!</div>
                      <div>
                        <Link href="/pages/contact">
                          <button type="button" className="text-white flex justify-center items-end gap-x-2 bg-gradient-to-br from-pink-400 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-600 font-medium rounded-lg text-sm px-5 py-4 text-center me-2 mb-2">BUY NOW
                            <Image
                              src={rightArrowWhite}
                              width={18}
                              height={20}
                              alt="Picture of the author"
                            />
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>


                </div>

                <div className='w-[30vw]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad beatae at modi iste repellendus, ducimus suscipit architecto magnam cum eveniet debitis officiis hic explicabo aliquam deleniti laboriosam, quia provident. Iusto.
                  Et temporibus at, eos quaerat beatae veniam aliquid nemo eum velit doloribus rem. A doloremque rerum, rem illo ea dolores nesciunt nulla, enim necessitatibus magni eius. Commodi, quod reprehenderit. Voluptas!
                  Dolorum saepe exercitationem repellat rem laborum. Dignissimos veritatis incidunt laborum suscipit similique. Corporis necessitatibus corrupti, laboriosam aperiam sit soluta dolore
                  Explicabo praesentium quos est necessitatibus placeat ipsam atque corrupti nemo sapiente exercitationem iusto, fuga ipsum laborum totam dolores aperiam reiciendis aliquam temporibus! Corporis tempore quidem aperiam sapiente nemo laborum repellat.</div>
              </div>
            </article>
        </section>
    </main>
    </>
  )
}

export default MainCourseDetails