'use client'
import Layout from "@/components/layout/Layout";
import CTASection from '@/components/common/CTASection';
import { useState } from 'react';
import Link from "next/link";
import Footer1 from "@/components/layout/footer/Footer1";

export default function Home() {
    // State to hold dynamic content
    const [serviceDetails] = useState({
        title: "Pitched Roof Services",
        text1: "A pitched roof features sloping sides that meet at a ridge, allowing for effective water drainage and ventilation. Available in styles like gable, hip, and mansard, it offers durability, longevity, and extra space in the form of an attic. Ideal for areas with heavy rain or snow, a pitched roof is a reliable and timeless roofing solution.",
        image1: "assets/images/roof/pitchupdated.webp",
        title2: "Service all details",
        text2: "Roofing High has been delivering expert pitched roof services across London since 1990. With over three decades of experience, we are known for our precision, reliability, and high-quality workmanship. Specialising in pitched roof installations, repairs, and replacements, our skilled team uses only premium materials to ensure durability and weather resistance. Whether it’s a new build or a renovation, Roofing High provides tailored solutions that meet your roofing needs with professionalism and care. Trust Roofing High for pitched roofing that stands the test of time",
        points: [
            "Transforming houses into homes with superior",
            "Experience peace of mind under a sturdy",
            "Rise Above the Roof Service",
            "Roofing solutions tailored to your budget",
        ],
        images: [
            "assets/images/roof/p2.jpg",
            
        ],
        content3Title: "Elevating Excellence",
        text3: "Roofing High is your go-to expert for pitched roof services in London. Since 1990, we’ve provided top-quality pitched roof installations, repairs, and maintenance using durable materials and trusted techniques. Whether it’s a slate or tile roof, our experienced team ensures every project is built to last. Choose Roofing High – London’s reliable pitched roofing specialists.",
        text4: "",
        features: [
            {
                icon: "icon-crane-1",
                title: "Reliable Roof Repair",
                text: "Roof service involves the installation, maintenance, and repair of roofs for the commercial",
                link: "#",
            },
            {
                icon: "icon-buildings",
                title: "Building Roof Repair",
                text: "Roof service involves the installation, maintenance, and repair of roofs for the commercial",
                link: "#",
            },
        ],
      
    });
   

    return (
        <>
            <Layout headerStyle={1} footerStyle={2} breadcrumbTitle="Pitched Roof Services">
                <div>
                    {/* Service Details Start */}
                    <section className="service-details">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-8 col-lg-7">
                                    <div className="service-details__left">
                                        <div className="service-details__content-one">
                                            <h2 className="service-details__title-one">{serviceDetails.title}</h2>
                                            <p className="service-details__text-1">{serviceDetails.text1}</p>
                                            <div className="service-details__img-one">
                                                <img src={serviceDetails.image1} alt="" />
                                            </div>
                                        </div>
                                        <div className="service-details__content-two">
                                            <h4 className="service-details__title-two">{serviceDetails.title2}</h4>
                                            <p className="service-details__text-2">{serviceDetails.text2}</p>
                                            <ul className="list-unstyled service-details__points">
                                                {serviceDetails.points.map((point, index) => (
                                                    <li key={index}>
                                                        <div className="icon">
                                                            <i className="far fa-check" />
                                                        </div>
                                                        <div className="text">
                                                            <p>{point}</p>
                                                        </div>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="service-details__images-box">
                                            <div className="row">
                                                {serviceDetails.images.map((image, index) => (
                                                    <div key={index} className="col-xl-6 col-lg-6">
                                                        <div className="service-details__images-single">
                                                            <img src={image} alt="" />
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="service-details__content-three">
                                            <h4 className="service-details__title-four">{serviceDetails.content3Title}</h4>
                                            <p className="service-details__text-3">{serviceDetails.text3}</p>
                                            <p className="service-details__text-4">{serviceDetails.text4}</p>
                                        </div>
                                        <div className="service-details__feature-box">
                                            <div className="row">
                                                {serviceDetails.features.map((feature, index) => (
                                                    <div key={index} className="col-xl-6">
                                                        <div className="service-details__feature-single">
                                                            <div className="service-details__feature-icon-box">
                                                                <div className="service-details__feature-icon">
                                                                    <span className={feature.icon} />
                                                                </div>
                                                                <h4 className="service-details__feature-title">
                                                                    <Link href={feature.link}>{feature.title}</Link>
                                                                </h4>
                                                            </div>
                                                            <p className="service-details__feature-text">{feature.text}</p>
                                                            <Link href={feature.link} className="service-details__read-more">
                                                                Read more <span className="icon-dubble-arrow-right" />
                                                            </Link>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <div className="col-xl-4 col-lg-5">
                                    <div className="service-details__sidebar">
                                        <div className="service-details__service-list-box">
                                            <h4 className="service-details__sidebar-title">Main Service</h4>
                                            <ul className="service-details__service-list list-unstyled">
                                                {serviceDetails.sidebarLinks.map((link, index) => (
                                                    <li key={index} className={index === 0 ? "active" : ""}>
                                                        <Link href={link.href}>
                                                            <span className="icon-dubble-arrow-right" />
                                                            {link.text}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </section>
                    {/* Service Details End */}
                    {/* CTA Two Start */}
                        <CTASection
                        backgroundImage="assets/images/backgrounds/cta-two-bg.jpg"
                        imgSrc="assets/images/roof/padvantage.jpg"
                        title="One Single at a Time"
                        text="Roof service involves the installation, maintenance, and repair of roofs for residential and commercial buildings."
                        buttonText="Contact Us"
                        buttonLink="/contact"
                        />
                    {/* CTA Two End */}
                </div>
                <Footer1/>
            </Layout>
        </>
    )
}