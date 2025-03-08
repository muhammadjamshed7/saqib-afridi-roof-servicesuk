// pages/index.js
import React from 'react';
import Layout from "@/components/layout/Layout";
import Testimonial from '@/components/Testimonial/Testimonial';
import CTASectionTwo from '@/components/common/CTASectionTwo';

const testimonials = [
  {
    imgSrc: 'assets/images/testimonial/testimonial-1-1.jpg',
    name: 'Cameron Williamson',
    title: 'Pro Roofing Experts',
    text: 'Construction is an essential industry that invo building and designing structures such as buildings, roads, bridges and more. It requires skilled workers, materials and the careful planning to ensure successful.',
    rating: 5,
    link: '/testimonials',
  },
  {
    imgSrc: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3DD',
    name: 'Sajid Hasan',
    title: 'Roofing Masters',
    text: 'Construction is an essential industry that invo building and designing structures such as buildings, roads, bridges and more. It requires skilled workers, materials and the careful planning to ensure successful.',
    rating: 5,
    link: '/testimonials',
  },
  {
    imgSrc: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3DD',
    name: 'Adam Smith',
    title: 'Roof Renovation',
    text: 'Construction is an essential industry that invo building and designing structures such as buildings, roads, bridges and more. It requires skilled workers, materials and the careful planning to ensure successful.',
    rating: 5,
    link: '/testimonials',
  },
  {
    imgSrc: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3DD',
    name: 'Robert Son',
    title: 'Roof Renovation',
    text: 'Construction is an essential industry that invo building and designing structures such as buildings, roads, bridges and more. It requires skilled workers, materials and the careful planning to ensure successful.',
    rating: 5,
    link: '/testimonials',
  },
  {
    imgSrc: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3DD',
    name: 'Adam Milne',
    title: 'Roof Renovation',
    text: 'Construction is an essential industry that invo building and designing structures such as buildings, roads, bridges and more. It requires skilled workers, materials and the careful planning to ensure successful.',
    rating: 5,
    link: '/testimonials',
  },
  {
    imgSrc: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3DD',
    name: 'Robert Illingworth',
    title: 'Roof Renovation',
    text: 'Construction is an essential industry that invo building and designing structures such as buildings, roads, bridges and more. It requires skilled workers, materials and the careful planning to ensure successful.',
    rating: 5,
    link: '/testimonials',
  },
  // Add more testimonials as needed...
];

export default function Home() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={2} breadcrumbTitle="Testimonials">
        <div>
          {/*Testimonial Page Start*/}
          <section className="testimonial-page">
            <div className="container">
              <div className="row">
                {testimonials.map((testimonial, index) => (
                  <Testimonial key={index} testimonial={testimonial} />
                ))}
              </div>
            </div>
          </section>
          {/*Testimonial Page End*/}

          {/*CTA Two Start*/}
            <CTASectionTwo
                backgroundImage="assets/images/backgrounds/cta-two-bg.jpg"
                imgSrc="assets/images/resources/cta-two-img-1.png"
                title="One Shingle at a Time"
                text="Roof service involves the installation, maintenance, and repair of roofs for residential and commercial buildings."
                buttonText="Contact Us"
                buttonLink="/contact"
            />
          {/*CTA Two End*/}
        </div>
      </Layout>
    </>
  );
}
