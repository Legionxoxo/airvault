import Hero from "./component/Hero";
import WhoAirVault from "./component/WhoAirVault";

export default function Home() {
    return (
        <main
            className="h-full w-full bg-cover
    bg-[url('/bgmobile.svg')]
    md:bg-[url('/bgpad.svg')]
    2xl:bg-[url('/bgtv.svg')]"
        >
            <div>
                <Hero />

                {/* Main gradient circle - Responsive */}
                <div className="absolute inset-x-0 mx-auto -mt-16 sm:-mt-16 md:-mt-16 lg:-mt-16 h-[300px] w-[300px] sm:h-[400px] sm:w-[400px] md:h-[500px] md:w-[600px] lg:h-[600px] lg:w-[800px] rounded-full bg-[#FF7733] opacity-[0.15] blur-3xl mix-blend-lighten"></div>

                {/* Layered blur circles for more gradient depth - Responsive */}
                <div className="absolute inset-x-0 mx-auto -mt-16 sm:-mt-16 md:-mt-16 lg:-mt-16 h-[300px] w-[300px] sm:h-[400px] sm:w-[400px] md:h-[500px] md:w-[600px] lg:h-[600px] lg:w-[800px] rounded-full bg-[#FF7733] opacity-[0.1] blur-[80px] mix-blend-lighten"></div>
                <div className="absolute inset-x-0 mx-auto -mt-16 sm:-mt-16 md:-mt-16 lg:-mt-16 h-[300px] w-[300px] sm:h-[400px] sm:w-[400px] md:h-[500px] md:w-[600px] lg:h-[600px] lg:w-[800px] rounded-full bg-[#FF7733] opacity-[0.05] blur-[120px] mix-blend-lighten"></div>

                <div className="relative 2xl:h-screen">
                    <img
                        src="/shadow.png"
                        alt="Shadow"
                        className="absolute inset-0 w-full h-full object-cover opacity-75 mix-blend-overlay z-0"
                    />

                    <div className="relative z-10 -mt-24 2xl:-mt-[100px]">
                        <WhoAirVault />
                    </div>
                </div>
            </div>
        </main>
    );
}
