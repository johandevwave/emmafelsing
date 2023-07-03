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
            src="/images/emma_standing.jpg"
          />
        </div>
        <div>
          <p className=" text-red-500 lg:text-2xl mt-10 lg:mt-0">
            When I'm not creating content, I engage in other activities such as
            developing strategies, marketing plans, and conducting analyses. All
            with the aim of continuously propelling your company to the stars.
            We assess your company's needs and then devise a strategy to reach
            new heights.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default About;
