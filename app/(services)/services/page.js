'use client'
import React from 'react';
import ServicesPage from '../../../components/ServicesPage/ServicesPage'
import Layout from "@/components/layout/Layout"
import CTASection from '../../../components/common/CTASection';
const servicesData = [
    {
      imgSrc: 'https://cdn.cupapizarras.com/wp-content/uploads/2024/10/pitched-roofs.jpg',
      iconClass: 'icon-paint',
      title: 'Pitched Roof',
      description: 'A pitched roof is a sloped roofing style designed for effective water drainage, durability, and energy efficiency.',
      link: 'reliable-roof-repair',
    },
    {
      imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoX66ZJAXTz55ArIBnPJ6vSLM9XC-WVdbSIg&s',
      iconClass: 'icon-paint',
      title: 'Flat Roof',
      description: 'A flat roof is a level, low-slope roofing style ideal for modern designs, easy maintenance & additional usable space.',
      link: 'sure-guard-roofing-services',
    },
    {
      imgSrc: 'https://www.alu-rex.com/blogue/wp-content/uploads/2018/04/Diff%C3%A9rences-EN-1.png',
      iconClass: 'icon-paint',
      title: 'Gutter, fascia, and soffits',
      description: 'Gutter, fascia, and soffits protect the roof by managing water flow, supporting edges, and ensuring ventilation.',
      link: 'peak-performance-roofing',
    },
    
    {
      imgSrc: 'https://www.diydoctor.org.uk/images/chimney_flashing_part1.jpg',
      iconClass: 'icon-box-2',
      title: 'Chimney & lead ',
      description: 'Chimney & lead ensure a watertight seal, preventing leaks and protecting your roof from weather damage.',
      link: 'top-notch-roofing-restoration',
    },
    {
      imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu8k_63-PMRYv3kOiVceXbRaC7hHylCvl9hA&s',
      iconClass: 'icon-stairs',
      title: 'Roof Repairs',
      description: 'Roof repairs fix leaks, damages, and wear to maintain durability and weather protection.',
      link: 'peak-performance-roofing',
    },
    {
      imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAMwCNtJ9ES8HetokN0WmRG-C7t6I0YEuplQ&s',
      iconClass: 'icon-stairs',
      title: 'roof and gutter cleaning',
      description: 'Roof and gutter cleaning remove debris, algae & moss to prevent water damage & maintain roof health.',
      link: 'peak-performance-roofing',
    },
    {
      imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbvkTEuXTTxE8lJ9oyH4naM37zwDARSfrz7g&s',
      iconClass: 'icon-stairs',
      title: 'Roof maintenance',
      description: 'Roof maintenance includes inspections, repairs, and cleaning to prevent leaks, damages, and wear.',
      link: 'peak-performance-roofing',
    },
  ];
  
export default function Home() {
   

    return (
        <>
            <Layout headerStyle={1} footerStyle={2} breadcrumbTitle="Services">
            <div>
                {/*Services Page Start*/}
                <ServicesPage services={servicesData} />
                {/*Services Page End*/}
                {/* Other components and sections */}
                <CTASection
                    backgroundImage="assets/images/backgrounds/cta-two-bg.jpg"
                    imgSrc="assets/images/resources/cta-two-img-1.png"
                    title="One Shingle at a Time"
                    text="Roof service involves the installation, maintenance, and repair of roofs for residential and commercial buildings."
                    buttonText="Contact Us"
                    buttonLink="/contact"
                    />
                {/* Other components and sections */}
            </div>
            </Layout>
        </>
    )
}