import Image from "next/image";

const About: React.FunctionComponent = () => (
  <section id="about" className="lg:my-20 py-10 px-4 bg-slate-50">
    <div className="container mx-auto">
      <div className="grid lg:grid-cols-2 gap-10">
        <div>
          <Image
            alt="image of Emma standing in front of a house"
            width={600}
            height={700}
            src="/images/emma_about.jpg"
          />
        </div>
        <div>
          <p className=" text-red-500 lg:text-2xl lg:mt-0">
            Born and raised in Borås. Lived and learned in Halmstad. I'm a
            marketer and content creator leaving my fingerprints on the social
            media world at every turn. When I'm not creating content, I engage
            in other activities such as developing strategies, marketing plans,
            and analyses. All with the aim of continuously propelling your
            company to the stars. I assess your company's needs and then devise
            a strategy to reach new heights.
          </p>
          <p className=" pt-5 text-red-500 lg:text-2xl mt-10 lg:mt-0">
            Do you need help with gaining visibility on social media? Reach out
            to me!{" "}
          </p>

          <p className=" pt-5 text-red-500 lg:text-2xl mt-10 lg:mt-0">
            Commercial folio available upon request.
          </p>
          <div className="mt-5">
            <a
              className=" underline text-red-500 lg:text-2xl"
              href="mailto:emmafelsing@hotmail.com"
            >
              emmafelsing@hotmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
