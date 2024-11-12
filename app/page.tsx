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
