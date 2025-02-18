import Layout from "@/components/layout/Layout"
import Banner from "@/components/sections/home1/Banner"
import About from "@/components/sections/home1/About"
import SlidingText from "@/components/sections/home1/SlidingText"
import ServicesOne from "@/components/sections/home1/ServicesOne"
import CounterOne from "@/components/sections/home1/CounterOne"
import CTAOne from "@/components/sections/home1/CTAOne"
// import TeamOne from "@/components/sections/home1/TeamOne"
import ContactOne from "@/components/sections/home1/ContactOne"
import WeServe from "@/components/sections/home1/WeServe"
import TestimonialOne from "@/components/sections/home1/TestimonialOne"
import ProjectOne from "@/components/sections/home1/ProjectOne"
import BrandOne from "@/components/sections/home1/BrandOne"
import FaqOne from "@/components/sections/home1/FaqOne"
import BlogOne from "@/components/sections/home1/BlogOne"
export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1}>
                <Banner />
                <About />
                <SlidingText />
                <ServicesOne />
                <CounterOne />
                <CTAOne />
                {/* <TeamOne /> */}
                <ContactOne />
                <WeServe />
                <TestimonialOne />
                <ProjectOne />
                <BrandOne />
                <FaqOne />
                <BlogOne />
            </Layout>
        </>
    )
}