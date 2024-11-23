import Image from "next/image";

export default function Hero() {
    return (
        <div id="home" className="relative w-screen h-screen">
            {/* Background Image with Opacity */}
            <div
                className="absolute inset-0 bg-[url('/bg.jpg')] bg-cover bg-center opacity-70"
                aria-hidden="true" // Mark this div as decorative
            ></div>

            {/* Main Content */}
            <div className="relative z-10">

                <div className="grid grid-cols-1 gap-2 md:gap-4 md:grid-cols-2 mx-8">
                        <Image className="border-b-4 rounded-xl border-purple-950" src={"/girl.png"} width={400} height={400} alt="girl"></Image>
                    <div className="flex flex-col justify-center">
                        <h3 className="text-2xl font-mono text-purple-950">About Us</h3>
                        <p className="text-4xl text-black">We are the top</p>
                        <p className="text-4xl text-purple-950">Learning Platform.</p>
                        <p className=" text-black text-xl">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur veniam recusandae impedit error facere labore vel officia, itaque ad eveniet minus ea tenetur voluptate eos perspiciatis quam cum ducimus consequatur.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
