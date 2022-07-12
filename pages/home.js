import Image from "next/image";
import React, { useEffect } from "react";
import effects from "../components/effects";

export default function Home() {
  //   useEffect(() => {
  //     const cursorRounded = document.querySelector(".mousehover");
  //     const moveCursor = (e) => {
  //       const mouseY = e.clientY;
  //       const mouseX = e.clientX;

  //       cursorRounded.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
  //     };

  //     window.addEventListener("mousemove", moveCursor);
  //   }, []);

  return (
    <div className="mousepointer h-[100vh] font-sans">
      <header className="h-[100px] pl-[4vw] pr-[4vw] flex items-center justify-between">
        <div className="logowrapper flex">
          <p className="text-[white] mt-[4px] text-[21px] font-black uppercase">
            spacers
          </p>
          <p className="text-[white] mt-[3px] mr-[6px] ml-[6px] text-[12px] leading-8">
            by
          </p>
          <div>
            <img
              src={
                "https://d2pas86kykpvmq.cloudfront.net/img_spacers/ic_logo.svg"
              }
              alt="company_logo"
            />
          </div>
        </div>
        <a className="pt-[12px] pr-[24px] pb-[10px] pl-[24px] border border-white rounded-3xl">
          <p className="text-[white] text-[12px] leading-4 font-black uppercase  ">
            Download
          </p>
        </a>
      </header>
      <div className="text-center mt-[50px] relative">
        <p className="text-[white] text-[17px] font-semibold uppercase">
          Big 3d set with cosmic illustration
        </p>
        <p className="text-[white] text-[140px] md:text-[220px] mt-[1rem] md:mt-[2rem] font-black uppercase leading-[150px]">
          Spacers
        </p>
        <div className="fixed top-[30vh] left-[49vw]">
          <img
            className=""
            src="https://d2pas86kykpvmq.cloudfront.net/img_spacers/star-1.svg"
          />
        </div>
      </div>

      <div className="hero-image flex justify-center relative">
        <img
          className="absolute top-[-4rem] w-[65vw] max-w-[650px] animate-bounceless "
          src="https://d2pas86kykpvmq.cloudfront.net/img_spacers/img-hero.png"
        />
      </div>
      {/*<div className="cursor mousehover rounded-full"></div> */}

      <div className="relative mt-[26em] section-2 pt-[140px] pb-[140px] pl-[4vw] pr-[4vw]">
        <p className=" text-[white] text-center uppercase text-[48px] font-black mb-[20px] leading-[56px]">
          3 characters
        </p>
        <p className=" text-[white] text-center uppercase">
          We have created 3 different characters. Choose
        </p>
        <p className="text-[white] text-center uppercase">
          that you like most for your design project.
        </p>
      </div>

      {/*} 3 videos*/}
      <div className="capsules ml-[12vw] flex justify-between max-w-[1080px]">
        <div className="capsule_wrapper w-[32%]">
          <div className="capsule">
            <video
              muted="muted"
              onMouseOver={(event) => event.target.play()}
              poster="https://d2pas86kykpvmq.cloudfront.net/img_spacers/alien.png"
              className="rounded-full"
            >
              <source
                type="video/webm"
                src="https://d2pas86kykpvmq.cloudfront.net/img_spacers/videos/alien.webm"
              />
              <source
                type="video/mp4"
                src="https://d2pas86kykpvmq.cloudfront.net/img_spacers/videos/alien.mp4"
              />
            </video>
          </div>
        </div>
        <div className="capsule_wrapper w-[32%]">
          <div className="capsule">
            <video
              muted="muted"
              className="rounded-full"
              onMouseOver={(event) => event.target.play()}
              poster="https://d2pas86kykpvmq.cloudfront.net/img_spacers/astro.png"
            >
              <source
                type="video/webm"
                src="https://d2pas86kykpvmq.cloudfront.net/img_spacers/videos/astro.webm"
              />
              <source
                type="video/mp4"
                src="https://d2pas86kykpvmq.cloudfront.net/img_spacers/videos/astro.mp4"
              />
            </video>
          </div>
        </div>
        <div className="capsule_wrapper w-[32%]">
          <div className="capsule">
            <video
              muted="muted"
              className="rounded-full"
              onMouseOver={(event) => event.target.play()}
              poster="https://d2pas86kykpvmq.cloudfront.net/img_spacers/cyclo.png"
            >
              <source
                type="video/webm"
                src="https://d2pas86kykpvmq.cloudfront.net/img_spacers/videos/cyclo.webm"
              />
              <source
                type="video/mp4"
                src="https://d2pas86kykpvmq.cloudfront.net/img_spacers/videos/cyclo.mp4"
              />
            </video>
          </div>
        </div>
      </div>

      <div className="mt-[60px] text-[white] text-center text-[220px]  uppercase font-black leading-[100%]">
        <p>ultra high</p>
        <p>quality</p>
        <p>renders</p>
        {/*<img
          className="relative text-center max-w-[800px] w-[80vw] bg-transparent pt-[100px]"
          src="https://d2pas86kykpvmq.cloudfront.net/img_spacers/skater.png"
        />*/}
        <div className="relative flex  flex-col ">
          <img
            src="https://d2pas86kykpvmq.cloudfront.net/img_spacers/skater.png"
            loading="lazy"
            sizes="(max-width: 991px) 100vw, (max-width: 1919px) 80vw, 1400px"
            srcSet="https://d2pas86kykpvmq.cloudfront.net/img_spacers/skater-p-500.png 500w, https://d2pas86kykpvmq.cloudfront.net/img_spacers/skater-p-800.png 800w, https://d2pas86kykpvmq.cloudfront.net/img_spacers/skater.png 1851w"
            alt=""
            className="skater"
          ></img>
          <img
            src="https://d2pas86kykpvmq.cloudfront.net/img_spacers/skater-btm.png"
            loading="eager"
            sizes="(max-width: 991px) 100vw, (max-width: 1919px) 80vw, 1400px"
            srcSet="https://d2pas86kykpvmq.cloudfront.net/img_spacers/skater-btm-p-500.png 500w, https://d2pas86kykpvmq.cloudfront.net/img_spacers/skater-btm-p-800.png 800w, https://d2pas86kykpvmq.cloudfront.net/img_spacers/skater-btm.png 1851w"
            alt=""
            className="skater-mask"
          />
        </div>
      </div>
      {/* horizontal scroll*/}
      <div>
        <div className="flex flex-row h-[50%] mt-[100px] mb-[280px]">
          <div className="title ml-[10vw] pt-[6em] pr-[5em]">
            <h1 className="text-[white] text-[48px] font-black">12</h1>
            <h1 className="text-[white] text-[48px] font-black uppercase">
              different
            </h1>
            <h1 className="text-[white] text-[48px] font-black uppercase">
              poses
            </h1>
            <p className="text-[white]">big variety of funny poses</p>
          </div>

          <div className="scroll-container flex flex-row px-8 py-8 overflow-scroll">
            <img
              className="bg-[#241EA9] hover:bg-[#501ED8] rounded-[2em]  h-[36em] mr-[2vw] pt-[9em] pb-[8em] pl-[2em] pr-[2em] "
              src="https://d2pas86kykpvmq.cloudfront.net/img_spacers/preview-9.png"
            />
            <img
              className="bg-[#241EA9] hover:bg-[#501ED8] rounded-[2em]  h-[36em] mr-[2vw] pt-[9em] pb-[8em] pl-[2em] pr-[2em] mr-[2vw]"
              src="https://d2pas86kykpvmq.cloudfront.net/img_spacers/preview-10.png"
            />
            <img
              className="bg-[#241EA9] hover:bg-[#501ED8] rounded-[2em]  h-[36em] mr-[2vw] pt-[9em] pb-[8em] pl-[2em] pr-[2em]"
              src="https://d2pas86kykpvmq.cloudfront.net/img_spacers/preview-13.png"
            />
            <img
              className="bg-[#241EA9] hover:bg-[#501ED8] rounded-[2em]  h-[36em] mr-[2vw] pt-[9em] pb-[8em] pl-[2em] pr-[2em]"
              src="https://d2pas86kykpvmq.cloudfront.net/img_spacers/preview-11.png"
            />
            <img
              className="bg-[#241EA9] hover:bg-[#501ED8] rounded-[2em]  h-[36em] mr-[2vw] pt-[9em] pb-[8em] pl-[2em] pr-[2em]"
              src="https://d2pas86kykpvmq.cloudfront.net/img_spacers/preview-8.png"
            />
            <img
              className="bg-[#241EA9] hover:bg-[#501ED8] rounded-[2em]  h-[36em] mr-[2vw] pt-[9em] pb-[8em] pl-[2em] pr-[2em]"
              src="https://d2pas86kykpvmq.cloudfront.net/img_spacers/preview-5.png"
            />
            <img
              className="bg-[#241EA9] hover:bg-[#501ED8] rounded-[2em]  h-[36em] mr-[2vw] pt-[9em] pb-[8em] pl-[2em] pr-[2em]"
              src="https://d2pas86kykpvmq.cloudfront.net/img_spacers/preview-12.png"
            />
            <img
              className="bg-[#241EA9] hover:bg-[#501ED8] rounded-[2em]  h-[36em] mr-[2vw] pt-[9em] pb-[8em] pl-[2em] pr-[2em]"
              src="https://d2pas86kykpvmq.cloudfront.net/img_spacers/preview-7.png"
            />
            <img
              className="bg-[#241EA9] hover:bg-[#501ED8] rounded-[2em]  h-[36em] mr-[2vw] pt-[9em] pb-[8em] pl-[2em] pr-[2em]"
              src="https://d2pas86kykpvmq.cloudfront.net/img_spacers/preview-6.png"
            />
            <img
              className="bg-[#241EA9] hover:bg-[#501ED8] rounded-[2em]  h-[36em] mr-[2vw] pt-[9em] pb-[8em] pl-[2em] pr-[2em]"
              src="https://d2pas86kykpvmq.cloudfront.net/img_spacers/preview-6.png"
            />
            <img
              className="bg-[#241EA9] hover:bg-[#501ED8] rounded-[2em]  h-[36em] mr-[2vw] pt-[9em] pb-[8em] pl-[2em] pr-[2em]"
              src="https://d2pas86kykpvmq.cloudfront.net/img_spacers/preview-14.png"
            />
          </div>
        </div>
      </div>

      <div className="text">
        <div className=" text-[100px] font-black text-center uppercase leading-[1em]">
          <p className="text-[white]">made specially</p>
          <p className="text-[white]">for digital</p>
          <p className="text-[white]">designers.</p>
        </div>
        <div className="image_wrapper flex justify-around pb-[180px]">
          <img
            className="max-w-[610px] animate-bounceless"
            src="https://d2pas86kykpvmq.cloudfront.net/img_spacers/spacer-alien.png"
          />
          <img
            className="max-w-[610px] animate-bounceless"
            src="https://d2pas86kykpvmq.cloudfront.net/img_spacers/spacer-astro.png"
          />
        </div>
      </div>

      <div className="text pt-[140px] pb-[180px]">
        <div className="flex justify-evenly">
          <div className="flex flex-col">
            <img
              className="max-w-[390px]"
              src="https://d2pas86kykpvmq.cloudfront.net/img_spacers/phone-2.png"
            />
            <img
              className="max-w-[390px] mt-[200px]"
              src="https://d2pas86kykpvmq.cloudfront.net/img_spacers/phone-3.png"
            />
            <img
              className="max-w-[390px] mt-[200px]"
              src="https://d2pas86kykpvmq.cloudfront.net/img_spacers/phone-1.png"
            />
          </div>
          <div className="text-[white] uppercase  mt-[200px]">
            <div className="sticky top-32">
              <p className=" text-[17px] font-medium  ">Where to use?</p>
              <div className="leading-[58px]">
                <p className="text-[48px] font-black mt-[41px]">vivid 3d</p>
                <p className="text-[48px] font-black">illustration</p>
                <p className="text-[48px] font-black">are perfect for </p>
                <p className="text-[48px] font-black">apps, landing</p>
                <p className="text-[48px] font-black">or ads</p>
                <p className="text-[48px] font-black">campaigns</p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center flex justify-center pt-[9em]">
          <img
            className=" w-[72%] max-w-[1000px]"
            src="https://d2pas86kykpvmq.cloudfront.net/img_spacers/Desktop.png"
          />
        </div>
      </div>

      {/* moving earth*/}
      <div className="bg-[#1d1630] pt-[200px]">
        <div className="text-center text-[white]">
          <p className="text-[48px] font-black uppercase leading-[35px]">
            use details to
          </p>
          <p className="text-[48px] font-black uppercase">make it pop</p>
          <div className="text-center text-[white] text-[20px] leading-[120%]">
            <p>as they say devil is in the detail along with</p>
            <p>characters we prepared small objects to make your</p>
            <p>product looking more professional</p>
          </div>
        </div>
        <div className="flex">
          <div className="flex-col">
            <img
              className="w-[22vw] animate-rotateanim"
              src="https://d2pas86kykpvmq.cloudfront.net/img_spacers/preview-39.png"
            />
            <img
              className="w-[22vw] animate-bounceless"
              src="https://d2pas86kykpvmq.cloudfront.net/img_spacers/preview-15.png"
            />
          </div>
          <video
            muted="muted"
            loop="loop"
            autoPlay="autoplay"
            alt="spinning planet illustration"
            poster="https://d2pas86kykpvmq.cloudfront.net/img_spacers/planet-prev.png"
            className="image-15 w-[60vw]"
          >
            <source
              type="video/webm"
              src="https://d2pas86kykpvmq.cloudfront.net/img_spacers/videos/planet.webm"
            />
            <source
              type="video/mp4"
              src="https://d2pas86kykpvmq.cloudfront.net/img_spacers/videos/planet.mp4"
            />
          </video>
          <div className="flex-col">
            <img
              className="w-[16vw] bg-[#1A152F]"
              src="https://d2pas86kykpvmq.cloudfront.net/img_spacers/preview-4_1.png"
            />
            <img
              className="w-[18vw] animate-rotateanim"
              src="https://d2pas86kykpvmq.cloudfront.net/img_spacers/preview-36.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
