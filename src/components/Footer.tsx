// components/Footer.tsx
export default function Footer() {
    return (
        <footer className="w-full py-8 px-6 bg-(--color-primary) text-white text-left items-center">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-2 mx-0 md:mx-6">
                <div className="flex flex-col gap-4">
                    <h4 className="font-bold">Software Recruitment co.</h4>
                    <div className="flex flex-row gap-2">
                        <a href="linkedin.com"><img src="/social-media/linkedin.svg" alt="LinkedIn icon" /></a>
                        <a href="facebook.com"><img src="/social-media/facebook.svg" alt="Facebook icon" /></a>
                        <a href="instagram.com"><img src="/social-media/instagram.svg" alt="Instagram icon" /></a>
                        <a href="x.com"><img src="/social-media/twitter.svg" alt="Twitter icon" /></a>
                    </div>
                </div>
                <div className="flex flex-col gap-6 text-wrap">
                    <h3 className="font-bold">Explore</h3>
                    <div className="flex flex-col gap-2 text-wrap">
                    {["Homepage", "For jobseekers", "For clients", "Our Sectors", "Resources", "Contact Us"].map((label, idx) => (
                        <a
                        key={idx}
                        href="#"
                        className="footer-link"
                        >
                        <span>{label}</span>
                        </a>
                    ))}
                    </div>
                </div>
                <div className="flex flex-col gap-6 text-wrap">
                    <h3 className="font-bold">Sectors</h3>
                    <div className="flex flex-col gap-2 text-wrap">
                    {["Software Engineering", "DevOps", "Cloud", "Infrastructure", "Testing", "Security"].map((label, idx) => (
                        <a
                        key={idx}
                        href="#"
                        className="footer-link"
                        >
                        <span>{label}</span>
                        </a>
                    ))}
                    </div>
                </div>
                <div className="flex flex-col gap-6 text-wrap">
                    <h3 className="font-bold">Services</h3>
                    <div className="flex flex-col gap-2 text-wrap">
                    {["Nav item", "Nav item", "Nav item", "Nav item", "Nav item"].map((label, idx) => (
                        <a
                        key={idx}
                        href="#"
                        className="footer-link"
                        >
                        <span>{label}</span>
                        </a>
                    ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}