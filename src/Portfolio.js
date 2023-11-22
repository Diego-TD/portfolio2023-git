import React from "react";

export const Portfolio = () => {
  return (
    <div className="bg-[#f7f7f7] flex flex-row justify-center w-full">
      <div className="bg-[#f7f7f7] w-[1920px] h-[1080px] relative">
        <div className="absolute w-[1920px] h-[979px] top-[101px] left-0">
          <div className="absolute w-[502px] h-[979px] top-0 left-0">
            <div className="relative w-[498px] h-[979px] bg-[100%_100%]">
              <img
                className="absolute w-[363px] h-[283px] top-[217px] left-[65px] object-cover"
                alt="Dtd formal"
                src={process.env.PUBLIC_URL + '/dtd-formal.png'}
              />
              <div className="absolute w-[319px] h-[60px] top-[678px] left-[85px] bg-[#3a3636] rounded-[20px]">
                <div className="absolute top-[12px] left-[30px] [font-family:'Poppins-Bold',Helvetica] font-bold text-[#f7f7f7] text-[24px] tracking-[0] leading-[normal]">
                  Download resume !-!
                </div>
              </div>
              <div className="absolute w-[75px] h-[60px] top-[570px] left-[209px] bg-[#d8dede] rounded-[20px]">
                <img
                  className="absolute w-[46px] h-[46px] top-[7px] left-[15px] object-cover"
                  alt="Github mark"
                  src={process.env.PUBLIC_URL + '/dtd-formal.png'}
                />
              </div>
              <div className="absolute w-[75px] h-[60px] top-[570px] left-[85px] bg-[#d8dede] rounded-[20px]">
                <img
                  className="absolute w-[45px] h-[45px] top-[7px] left-[15px] object-cover"
                  alt="Image"
                  src={process.env.PUBLIC_URL + '/dtd-formal.png'}
                />
              </div>
              <div className="absolute w-[75px] h-[60px] top-[570px] left-[329px] bg-[#d8dede] rounded-[20px]">
                <img
                  className="absolute w-[38px] h-[38px] top-[11px] left-[19px]"
                  alt="Envelope solid"
                  src={process.env.PUBLIC_URL + '/dtd-formal.png'}
                />
              </div>
              <a
                className="absolute top-[517px] left-[112px] [font-family:'Poppins-Medium',Helvetica] font-medium text-[#0f0a0a] text-[24px] tracking-[0] leading-[normal] underline"
                href="mailto:diegod@cetys.edu.mx"
                rel="noopener noreferrer"
                target="_blank"
              >
                diegod@cetys.edu.mx
              </a>
              <div className="absolute top-[157px] left-[65px] [font-family:'Poppins-Medium',Helvetica] font-medium text-[#0f0a0a] text-[24px] tracking-[0] leading-[normal]">
                &lt;&gt; Fullstack developer
              </div>
              <div className="absolute w-[371px] top-[111px] left-[65px] [font-family:'Poppins-Bold',Helvetica] font-bold text-[#0f0a0a] text-[34px] tracking-[0] leading-[normal]">
                Diego Torres Durante
              </div>
            </div>
          </div>
          <div className="absolute w-[1331px] h-[768px] top-[115px] left-[539px]">
            <div className="absolute w-[681px] h-[278px] top-[128px] left-[656px]">
              <button className="absolute w-[285px] top-[218px] left-0 [font-family:'Poppins-Bold',Helvetica] font-bold text-[#4c4c8a] text-[40px] tracking-[0] leading-[normal] all-[unset] box-border">
                Learn more
              </button>
              <p className="w-[675px] top-[90px] [font-family:'Poppins-Medium',Helvetica] font-medium text-[24px] absolute left-0 text-[#0f0a0a] tracking-[0] leading-[normal]">
                I&#39;m a software developer, driven by self-initiated learning and a passion for innovation. My journey
                showcases a growth mindset and proactive dedication.
              </p>
              <div className="w-[371px] top-0 [text-shadow:0px_4px_4px_#00000040] [font-family:'Poppins-Bold',Helvetica] font-bold text-[50px] absolute left-0 text-[#0f0a0a] tracking-[0] leading-[normal]">
                About me
              </div>
            </div>
            <div className="absolute w-[681px] h-[260px] top-[481px] left-[656px]">
              <div className="w-[334px] top-[200px] [font-family:'Poppins-Bold',Helvetica] font-bold text-[#4c4c8a] text-[40px] absolute left-0 tracking-[0] leading-[normal]">
                Browse projects
              </div>
              <p className="w-[675px] top-[81px] [font-family:'Poppins-Medium',Helvetica] font-medium text-[#0f0a0a] text-[24px] absolute left-0 tracking-[0] leading-[normal]">
                Experienced web developer crafting impactful solutions with clean, maintainable code. I bring
                proactivity and a commitment to excellence to every project.
              </p>
              <div className="w-[285px] top-0 [text-shadow:0px_4px_4px_#00000040] [-webkit-text-stroke:1px_#000000] [font-family:'Poppins-Bold',Helvetica] font-bold text-[#0f0a0a] text-[50px] absolute left-0 tracking-[0] leading-[normal]">
                My work
              </div>
            </div>
            <div className="absolute w-[602px] h-[768px] top-0 left-0">
              <div className="relative w-[600px] h-[776px]">
                <img className="absolute w-[558px] h-[567px] top-[209px] left-[21px]" alt="Image" src={process.env.PUBLIC_URL + '/dtd-formal.png'} />
                <p className="absolute w-[600px] top-0 left-0 [text-shadow:0px_4px_4px_#00000040] [font-family:'Poppins-Bold',Helvetica] font-bold text-transparent text-[100px] tracking-[0] leading-[normal]">
                  <span className="text-[#4c4c8a]">Hi!</span>
                  <span className="text-[#0f0a0a]"> I&#39;m </span>
                  <span className="text-[#4c4c8a]">
                    DTD
                    <br />
                  </span>
                  <span className="text-[#0f0a0a] text-[36px]">&amp; I am a developer</span>
                </p>
              </div>
            </div>
          </div>
          <div className="absolute w-[1920px] h-[979px] top-0 left-0">
            <div className="top-[935px] absolute w-[1920px] h-[44px] left-0 bg-[#d9d9d9]" />
            <div className="top-0 absolute w-[1920px] h-[44px] left-0 bg-[#d9d9d9]" />
          </div>
        </div>
        <div className="absolute w-[1920px] h-[101px] top-0 left-0 bg-[#f7f7f7] border border-solid border-[#dfdfdf]">
          <div className="relative w-[484px] h-[28px] top-[35px] left-[721px]">
            <div className="absolute w-[82px] top-0 left-[394px] [font-family:'Poppins-Medium',Helvetica] font-medium text-[#3a3636] text-[20px] tracking-[0] leading-[normal]">
              Contact
            </div>
            <div className="w-[106px] left-[239px] absolute top-0 [font-family:'Poppins-Medium',Helvetica] font-medium text-[#3a3636] text-[20px] tracking-[0] leading-[normal]">
              About-me
            </div>
            <div className="w-[81px] left-[109px] absolute top-0 [font-family:'Poppins-Medium',Helvetica] font-medium text-[#3a3636] text-[20px] tracking-[0] leading-[normal]">
              Projects
            </div>
            <div className="w-[60px] left-0 absolute top-0 [font-family:'Poppins-Medium',Helvetica] font-medium text-[#3a3636] text-[20px] tracking-[0] leading-[normal]">
              Home
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Portfolio;
