"use client"; // Add this line at the top
import { useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import CTASection from '@/components/common/CTASection';

const imgName = [
  { img: "https://images.adsttc.com/media/images/5c5c/8d7e/284d/d1d5/4a00/00d7/newsletter/img-(14).jpg?1549569398" },
  { img: "https://images.adsttc.com/media/images/5c5c/8a24/284d/d1d5/4a00/00ce/newsletter/-_Featured_Image.jpg?1549568538" },
  { img: "https://metalroofingmiamifl.com/wp-content/uploads/2025/01/Roof-Underlayment.webp" },
  { img: "https://img77.uenicdn.com/image/upload/v1687796570/business/652b1e30-7d95-417d-88c6-20c037a36dba.jpg" }
];
export default function Home() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const Isotope = require('isotope-layout');

      const masonryLayout = document.querySelector('.masonary-layout');
      const postFilter = document.querySelector('.post-filter');

      if (masonryLayout) {
        new Isotope(masonryLayout, {
          layoutMode: 'masonry',
        });
      }

      if (postFilter) {
        postFilter.querySelectorAll('li .filter-text').forEach((filterText) => {
          filterText.addEventListener('click', (event) => {
            event.preventDefault();
            const Self = event.currentTarget;
            const selector = Self.parentElement.getAttribute('data-filter');
            postFilter.querySelectorAll('li').forEach((li) => li.classList.remove('active'));
            Self.parentElement.classList.add('active');

            new Isotope(masonryLayout, {
              filter: selector,
              animationOptions: {
                duration: 500,
                easing: 'linear',
                queue: false,
              },
            });
          });
        });

        // Dynamic filter counter logic
        const activeFilterItem = postFilter.querySelectorAll('li');
        activeFilterItem.forEach((item) => {
          const filterElement = item.getAttribute('data-filter');
          const count = masonryLayout.querySelectorAll(filterElement).length;
          item.querySelector('.filter-text').innerHTML += `<span class="count">${count}</span>`;
        });
      }
    }
  }, []);

  return (
    <>
      <Layout headerStyle={1} footerStyle={2} breadcrumbTitle="Projects">
        <div>
          {/* Project Page Start */}
          <section className="project-page">
            <div className="container">
              <div className="row masonary-layout">
                {imgName.map((item, index) => (
                  <div className="col-xl-6" key={index}>
                    <div className="project-page__single">
                      <div className="project-page__img">
                        {/* Use standard <img> */}
                        <img
                          src={`${item.img}`}
                          alt={`Project Image ${item.img}`}
                        />
                        <div className="project-page__icon">
                          <a className="img-popup" href={`${item.img}`}>
                            <span className="fas fa-plus"></span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          {/* Project Page End */}

          {/* CTA Two Start */}
          <CTASection
            backgroundImage="assets/images/backgrounds/cta-two-bg.jpg"
            imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt95wnmawD-VDxJrRtf9IFbNF04CKOhl2RvQ&s"
            title="One Single at a Time"
            text="Roof service involves the installation, maintenance, and repair of roofs for residential and commercial buildings."
            buttonText="Contact Us"
            buttonLink="/contact"
            />
        {/* CTA Two End */}
        </div>
      </Layout>
    </>
  );
}
