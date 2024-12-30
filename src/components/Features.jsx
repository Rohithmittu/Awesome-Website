import React, { useRef, useState } from "react";
import { TiLocationArrow } from "react-icons/ti";

const Bentotilt = ({ children, className = "" }) => {
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef();

  const handleMouseMove = (event) => {
    if (!itemRef.current) return;

    const { left, top, width, height } =
      itemRef.current.getBoundingClientRect();

    const relativeX = (event.clientX - left) / width;
    const relativeY = (event.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 10;
    const tiltY = (relativeX - 0.5) * -10;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95, .95, .95)`;
    setTransformStyle(newTransform);
  };

  const handleMouseLeave = () => {
    setTransformStyle("");
  };

  return (
    <div
      className={className}
      ref={itemRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
};

const Bentocard = ({ src, title, description, isComingSoon }) => {
  return (
    <div className="relative size-full">
      <video
        src={src}
        loop
        muted
        autoPlay
        className="absolute left-0 top-0 size-full object-cover object-center "
      />

      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50 ">
        <div>
          <h1 className="bento-title special-font">{title}</h1>
          {description && (
            <p className="mt-3 max-w-64 text-xs md:text-base">{description}</p>
          )}
        </div>
      </div>

      {title}
    </div>
  );
};

const Features = () => {
  return (
    <section className="bg-black pb-52">
      <div className="constainer mx-auto px-3 md:px-10">
        <div className="px-5 py-32">
          <p className="font-circular-web text-lg text-blue-50">
            Into the Metagame Layer
          </p>

          <p className="max-w-md font-circular-web text-lg text-blue-50 opacity-50">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus
            rerum impedit deserunt aperiam repudiandae quae exercitationem
            laudantium totam minima,
          </p>
        </div>
        <Bentotilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
          <Bentocard
            src="videos/feature-1.mp4"
            title={
              <>
                radi <b>n</b>t
              </>
            }
            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus sed culpa quasi reiciendis rem, soluta sit fuga mollitia error corporis nostrum ipsa minima magnam id aperiam omnis ut quo debitis"
            isComingSoon
          />
        </Bentotilt>

        <div className="grid h-[135vh] grid-cols-2 grid-rows-3 gap-7">
          <Bentotilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
            <Bentocard
              src="videos/feature-2.mp4"
              title={
                <>
                  zig<b>m</b>a
                </>
              }
              description="An anime and gaming-inspired NFT collection - the IP primed for expansion."
              isComingSoon
            />
          </Bentotilt>

          <Bentotilt className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0">
            <Bentocard
              src="videos/feature-3.mp4"
              title={
                <>
                  n<b>e</b>xus
                </>
              }
              description="A gamified social hub, adding a new dimension of play to social interaction for Web3 communities."
              isComingSoon
            />
          </Bentotilt>
          <Bentotilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
            <Bentocard
              src="videos/feature-4.mp4"
              title={
                <>
                  az<b>u</b>l
                </>
              }
              description="A cross-world AI Agent - elevating your gameplay to be more fun and productive."
              isComingSoon
            />
          </Bentotilt>

          <Bentotilt className="bento-tilt_2">
            <div className="flex size-full flex-col justify-between bg-violet-300 p-5">
              <h1 className="bento-title special-font max-w-64 text-black">
                M<b>o</b>re co<b>m</b>ing s<b>o</b>on.
              </h1>

              <TiLocationArrow className="m-5 scale-[5] self-end" />
            </div>
          </Bentotilt>

          <Bentotilt className="bento-tilt_2">
            <video
              src="videos/feature-5.mp4"
              loop
              muted
              autoPlay
              className="size-full object-cover object-center"
            />
          </Bentotilt>
        </div>
      </div>
    </section>
  );
};

export default Features;
