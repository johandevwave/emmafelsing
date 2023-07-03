import Image from "next/image";

const Hero: React.FunctionComponent = () => (
  <section className=" bg-slate-100">
    <div className="container mx-auto">
      <div className="grid px-4 py-0 lg:mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto mt-10 lg:mt-0 place-self-center lg:col-span-7">
          <div className="lg:relative">
            <div>
              <a
                className="lg:text-4xl text-red-500 text-2xl text-center italic lg:z-20 lg:relative"
                href="mailto:emmafelsing@hotmail.com"
              >
                emmafelsing@hotmail.com
              </a>
            </div>
            <h1 className="text-center mb-5 text-red-500 lg:mb-0 text-[3rem] lg:text-left 2xl:text-[12rem] xl:w-[80rem] lg:text-[8rem] xl:text-[10rem] lg:w-[60rem] 2xl:w-[100rem] lg:absolute xl:top-0 lg:top-10 lg:z-10">
              SOCIAL MEDIA
            </h1>
          </div>
          <div className="hidden lg:flex relative">
            <h1 className="text-red-500 mb-4 2xl:text-[12rem] xl:w-[80rem] lg:text-[8rem] xl:text-[10rem] lg:w-[60rem] 2xl:w-[100rem] lg:absolute lg:top-36">
              SOCIAL MEDIA
            </h1>
          </div>
          <div className=" lg:mt-[25rem]">
            <p className="text-red-500 hidden lg:flex max-w-2xl mb-6 font-light lg:mb-2 md:text-lg lg:text-xl">
              I´m Emma, creative and organized, a star of multitasking, based in
              Sweden. Before I worked with Social Media for companies, I was an
              influencer, now I am both. I have been in the digital world for
              over 11 years and still counting. I hold a university degree in
              digital marketing, I am certified, have led projects, and have
              served as a marketing manager.
            </p>
            <p className="text-red-500 font-light lg:mb-2 md:text-lg lg:text-xl lg:mb-6">
              Do you need help with gaining visibility on social media? Reach
              out to me!
            </p>
            <a
              className="border-2 font-bold text-lg transition ease-in-out hover:-translate-y-1 hover:scale-110 border-red-500 py-2 px-3 text-center text-red-500 hover:bg-red-500 hover:text-white"
              href="mailto:emmafelsing@hotmail.com"
            >
              Email me
            </a>
          </div>
        </div>

        <div className="lg:mt-0 lg:col-span-5 w-full lg:flex lg:relative">
          <Image
            sizes="responsive"
            width={600}
            height={700}
            alt="image on Emma Felsing"
            src="/images/emma_sun_1.jpg"
          />
        </div>
        <div className="lg:hidden max-w-2xl mb-10 mt-10 lg:mb-8 ">
          <p className="text-red-500 font-light md:text-lg lg:text-xl">
            I´m Emma, creative and organized, a star of multitasking, based in
            Sweden. Before I worked with Social Media for companies, I was an
            influencer, now I am both. I have been in the digital world for over
            11 years and still counting. I hold a university degree in digital
            marketing, I am certified, have led projects, and have served as a
            marketing manager.
          </p>
          <p className="text-red-500 pt-5 font-light md:text-lg lg:text-xl ">
            Do you need help with gaining visibility on social media? Reach out
            to me!
          </p>
          <div className="mt-8">
            <a
              className="border-2 font-bold text-lg transition ease-in-out hover:-translate-y-1 hover:scale-110 border-red-500 py-2 px-3 text-center text-red-500 hover:bg-red-500 hover:text-white"
              href="mailto:emmafelsing@hotmail.com"
            >
              Email me
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);
export default Hero;
