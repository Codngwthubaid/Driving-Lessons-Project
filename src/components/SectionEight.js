import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import rightArrowWhite from "../public/img/rightArrowWhite.png"
const SectionEight = () => {
  return (
    <>
    <main>
    <section>
          <article>
            <div className="bg-[#c1e1c1] min-h-fit h-[60vh] px-5 flex flex-col justify-center items-center gap-y-10">
              <div className="text-green-400 font-semibold text-2xl">06143 82099</div>
              <div className="flex flex-col justify-center items-start sm:items-center">
                <div className="text-4xl lg:text-5xl text-gray-700 font-bold">Boek uw eerste rijles</div>
                <div className="text-4xl lg:-5xl text-gray-700 font-bold">En neem contact met ons op</div>
              </div>
              <div className="flex justify-center items-center gap-x-3">
                <div>
                  <Link href="pages/courses">
                    <button type="button" className="text-white flex justify-center items-end gap-x-2 bg-green-400 p-4 rounded-xl">BOEK NU
                      <Image
                        src={rightArrowWhite}
                        width={18}
                        height={20}
                        alt="Picture of the author"
                      />
                    </button>
                  </Link>
                </div>
                <div>
                  <Link href="pages/courses">
                    <button type="button" className="text-white flex justify-center items-end gap-x-2 bg-green-400 p-4 rounded-xl">NEEM CONTACT MET ONS OP
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
          </article>
        </section>
    </main>
    </>
  )
}

export default SectionEight
