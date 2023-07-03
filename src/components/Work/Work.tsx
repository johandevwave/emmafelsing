import Image from "next/image";

const Work: React.FunctionComponent = () => (
  <section id="trusted" className="lg:my-20 lg:py-10 px-4">
    <div className="container mx-auto">
      <h2 className="text-red-500 lg:text-5xl text-2xl underline lg:mb-10 uppercase">Trusted by</h2>
      <div className="grid lg:grid-cols-4 grid-cols-2 gap-5">
        <div className="">
          <div>
            <Image
              alt="logo image"
              src="/images/1.png"
              width={250}
              height={100}
            />
          </div>
        </div>
        <div>
          <Image
            alt="logo image"
            src="/images/2.png"
            width={250}
            height={100}
          />
        </div>
        <div>
          <Image
            alt="logo image"
            src="/images/3.png"
            width={250}
            height={100}
          />
        </div>
        <div>
          <Image
            alt="logo image"
            src="/images/4.png"
            width={250}
            height={100}
          />
        </div>
        <div>
          <Image
            alt="logo image"
            src="/images/5.png"
            width={250}
            height={100}
          />
        </div>
        <div>
          <Image
            alt="logo image"
            src="/images/6.png"
            width={250}
            height={100}
          />
        </div>
        <div>
          <Image
            alt="logo image"
            src="/images/7.png"
            width={250}
            height={100}
          />
        </div>
        <div>
          <Image
            alt="logo image"
            src="/images/8.png"
            width={250}
            height={100}
          />
        </div>
      </div>
      <div>
        <h2 className=" text-red-500 font-extrabold lg:text-4xl max-w-4xl uppercase">
          Companies that I have been entrusted to work with.
        </h2>
      </div>
    </div>
  </section>
);

export default Work;
