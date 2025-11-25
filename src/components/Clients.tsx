// components/Clients.tsx


import Image from "next/image";


export default function Clients() {
    

    const logos = [
        { src: "/logos/microsoft.png", alt: "Microsoft Logo" },
        { src: "/logos/oracle.svg", alt: "Oracle Logo" },
        { src: "/logos/attlassian.png", alt: "Atlassian Logo" },
        { src: "/logos/cloudflare.png", alt: "Cloudflare Logo" },
        { src: "/logos/vmware.png", alt: "VMWare Logo" },
    ];

    return (
        <section className="w-full p-8 bg-white items-center text-center flex flex-col gap-10"> 
            <h6 className="font-bold text-(--text-secondary)">Who we work with</h6>
            <div className="overflow-hidden w-4/5 inline-flex flex-nowrap [mask-image:_linear-gradient(to_right,transparent_0,black_128px,black_calc(100%-200px),transparent_100%)]">
                <ul className="flex animate-infinite-scroll items-center justify-center md:justify-start [&_img]:max-w-none [&_li]:mx-8 whitespace-nowrap">
                    {logos.map((logo, index) => (
                    <li key={index}>
                        <Image src={logo.src} alt={logo.alt} width={150} height={100} className="object-contain"/>
                    </li>
                    ))}
                </ul>
                <ul
                    className="flex animate-infinite-scroll items-center justify-center md:justify-start [&_img]:max-w-none [&_li]:mx-8 whitespace-nowrap"
                    aria-hidden="true"
                >
                    {logos.map((logo, index) => (
                    <li key={index}>
                        <Image src={logo.src} alt={logo.alt} width={150} height={100} className="object-contain" />
                    </li>
                    ))}
                </ul>
            </div>
            
        </section>
    );
}