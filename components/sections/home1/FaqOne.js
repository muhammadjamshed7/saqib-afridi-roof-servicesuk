'use client'
import React, { useState } from 'react';
import CounterUp from 'react-countup'; // Make sure you have this installed

export default function FaqOne() {
  const [isActive, setIsActive] = useState({ status: false, key: 1 });

  const handleToggle = (key) => {
    if (isActive.key === key) {
      setIsActive({ status: false });
    } else {
      setIsActive({ status: true, key });
    }
  };

  return (
    <section className="faq-one">
      <div className="container">
        <div className="row">
          <div className="col-xl-6">
            <div className="faq-one__left">
              <div className="section-title text-left">
                <div className="section-title__tagline-box">
                  <span className="section-title__tagline">Free Consultancy</span>
                </div>
                <h2 className="section-title__title">Get a free consultancy call with our experts</h2>
              </div>
              <div className="accrodion-grp faq-one-accrodion" data-grp-name="faq-one-accrodion-1">
                <div className={`accrodion ${isActive.key === 1 ? 'active' : ''}`} onClick={() => handleToggle(1)}>
                  <div className="accrodion-title">
                    <h4>Can I get a free consultancy call?</h4>
                  </div>
                  <div className="accrodion-content" style={{ display: isActive.key === 1 ? 'block' : 'none' }}>
                    <div className="inner">
                      <p>Yes, you can get a free consultancy call with our experts. Just contact us and we will schedule a call at your convenience.</p>
                    </div>
                  </div>
                </div>
                <div className={`accrodion ${isActive.key === 2 ? 'active' : ''}`} onClick={() => handleToggle(2)}>
                  <div className="accrodion-title">
                    <h4>Is the consultancy call really free?</h4>
                  </div>
                  <div className="accrodion-content" style={{ display: isActive.key === 2 ? 'block' : 'none' }}>
                    <div className="inner">
                      <p>Yes, the consultancy call is completely free. We are here to help you with your roofing needs without any charges.</p>
                    </div>
                  </div>
                </div>
                <div className={`accrodion ${isActive.key === 3 ? 'active' : ''}`} onClick={() => handleToggle(3)}>
                  <div className="accrodion-title">
                    <h4>How can I schedule a consultancy call?</h4>
                  </div>
                  <div className="accrodion-content" style={{ display: isActive.key === 3 ? 'block' : 'none' }}>
                    <div className="inner">
                      <p>You can schedule a consultancy call by contacting us through our website or giving us a call. Our team will assist you in setting up a convenient time.</p>
                    </div>
                  </div>
                </div>
                <div className={`accrodion ${isActive.key === 4 ? 'active' : ''}`} onClick={() => handleToggle(4)}>
                  <div className="accrodion-title">
                    <h4>What can I expect from the consultancy call?</h4>
                  </div>
                  <div className="accrodion-content" style={{ display: isActive.key === 4 ? 'block' : 'none' }}>
                    <div className="inner">
                      <p>During the consultancy call, our experts will answer your questions, provide advice, and help you understand the best options for your roofing needs.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="faq-one__right">
              <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-6">
                  <div className="faq-one__img-1">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStobLSv1FX0FW_sWrJRXedFE6O_znUbgLlVg&s" alt="" />
                  </div>
                  <div className="faq-one__count-box">
                    <div className="faq-one__icon">
                      <span className="icon-Group"></span>
                    </div>
                    <div className="faq-one__count-inner count-box">
                      <div className="faq-one__count count-box">
                        <h3 className="count-text">
                            <CounterUp end={5} />
                        </h3>
                        <span>k</span>
                        <span>+</span>
                      </div>
                      <p>Trusted Customer</p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6">
                  <div className="faq-one__img-2">
                    <img src="https://www.jjroofingsupplies.co.uk/media/wysiwyg/Myblogs/double_pitched_roof.jpg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
