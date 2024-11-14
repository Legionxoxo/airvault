import Hero from "./component/Hero";
import WhoAirVault from "./component/WhoAirVault";

export default function Home() {
    return (
        <main
            className="min-h-screen w-full bg-cover bg-no-repeat
                        bg-[url('/bgmobile.svg')]
                        md:bg-[url('/bgpad.svg')]
                        2xl:bg-[url('/bgtv.svg')]"
            style={{ backgroundSize: "cover", backgroundPosition: "center" }}
        >
            <Hero />
            <WhoAirVault />
        </main>
    );
}
