import Link from "next/link"
// import { useRouter } from "next/router"

export default function Menu() {
    // const router = useRouter()

    return (
        <>
        <ul className="main-menu__list">
            <li className="dropdown">
                <Link href="/">Home</Link>
                <ul>
                
                </ul>
            </li>
            <li>
                <Link href="/about">About Us</Link>
            </li>
           
            <li className="dropdown">
                <a href="#">Services</a>
                <ul>
               
                <li>
                    <Link href="/peak-performance-roofing">Pitched roof</Link>
                </li>
                <li>
                    <Link href="/flat-roof">flat roof</Link>
                </li>
                <li>
                    <Link href="/skyline-roofing-solutions">gutter,fascia and soffits</Link>
                </li>
                <li>
                    <Link href="/sure-guard-roofing-services">
                    chimney & lead
                    </Link>
                </li>
                <li>
                    <Link href="/reliable-roof-repair">roof repairs</Link>
                </li>
                <li>
                    <Link href="/top-notch-roofing-restoration">
                    roof and gutter cleaning.
                    </Link>
                </li>
                <li>
                    <Link href="/top-notch-roofing-restoration">
                    roof maintenance
                    </Link>
                </li>
                </ul>
            </li>
            <li className="dropdown">
                <a href="#">Projects</a>
                <ul>
                <li>
                    <Link href="/project">Projects</Link>
                </li>
                <li>
                    <Link href="/project-details">Project Details</Link>
                </li>
                </ul>
            </li>
            <li className="dropdown">
                <a href="#">Blog</a>
                <ul>
                <li>
                    <Link href="/blog">Blog</Link>
                </li>
                <li>
                    <Link href="/blog-list">Blog List</Link>
                </li>
                <li>
                    <Link href="/blog-details">Blog Details</Link>
                </li>
                </ul>
            </li>
            <li>
                <Link href="/contact">Contact</Link>
            </li>
        </ul>

        </>
    )
}
