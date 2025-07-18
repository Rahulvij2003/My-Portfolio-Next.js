"use client";

import Image from "next/image";

export default function AboutPage({ isActive, onOpenModal }) {
  const testimonials = [
    {
      id: 1,
      avatar: "/assets/images/avatar-1.png",
      name: "Daniel Lewis",
      text: "Priyanshu is a highly skilled project manager with a deep understanding of software development. His ability to streamline processes and enhance team productivity is impressive.",
    },
    {
      id: 2,
      avatar: "/assets/images/avatar-2.png",
      name: "Jessica Miller",
      text: "Working with Priyanshu has been a great experience. His problem-solving approach and technical expertise have significantly improved our project workflows",
    },
    {
      id: 3,
      avatar: "/assets/images/avatar-3.png",
      name: "Emily Evans",
      text: "Priyanshu played a crucial role in our project’s success. His leadership, technical guidance, and strategic decision-making ensured a smooth and efficient development cycle.",
    },
    {
      id: 4,
      avatar: "/assets/images/avatar-4.png",
      name: "Henry William",
      text: "A results-driven professional! Priyanshu’s insights into IT strategy and automation have helped us optimize our business processes effectively.",
    },
  ];

  const handleTestimonialClick = (testimonial) => {
    onOpenModal({
      img: testimonial.avatar,
      title: testimonial.name,
      text: testimonial.text,
    });
  };

  return (
    <article className={`about ${isActive ? "active" : ""}`} data-page="about">
      <header>
        <h2 className="h2 article-title">About Me</h2>
      </header>

      <section className="about-text">
        <p>
        With over 4 years of experience in software development and full stack development, I specialize in delivering robust digital solutions tailored to business needs. My expertise spans Agile methodologies and end-to-end full-stack development. Currently, I work as a Full Stack Developer, ensuring smooth execution from concept to deployment.
</p>
        <p>
Driven by a passion for technology and problem-solving, I’ve collaborated with both startups and enterprises to optimize workflows, enhance user experiences, and build seamless mobile and web applications. Whether it’s developing scalable web platforms, streamlining development lifecycles, or integrating AI for business intelligence, I focus on delivering measurable and impactful results.
        </p>
      </section>

      {/* Service Section */}
      <section className="service">
        <h3 className="h3 service-title">What I am Doing</h3>

        <ul className="service-list">
          {[
            {
              title: "Project & Delivery Management",
              desc: "Managing end-to-end software delivery, sprint planning, and cend to end communication.",
              icon: "/assets/images/icon-design.svg",
            },
            {
              title: "Full Stack Web Development",
              desc: "Building full-stack applications using JAVA, SpringBoot, Node.js, Python, Django, React.js, React Native, MongoDB and MySQL with scalable deployment on AWS and DigitalOcean.",
              icon: "/assets/images/icon-dev.svg",
            },
            {
              title: "Mobile Application Development",
              desc: "Creating iOS and Android applications with a very seamless and user friendly design.",
              icon: "/assets/images/icon-app.svg",
            },
            {
              title: "DevOps / Cloud Computing",
              desc: "Reliable and scalable infrastructure automation & CI/CD pipelines, Integrating AI concepts and cloud architectures",
              icon: "/assets/images/icon-photo.svg",
            },
          ].map((service, index) => (
            <li key={index} className="service-item">
              <div className="service-icon-box">
                <Image
                  src={service.icon}
                  alt={`${service.title} icon`}
                  width={40}
                  height={40}
                />
              </div>
              <div className="service-content-box">
                <h4 className="h4 service-item-title">{service.title}</h4>
                <p className="service-item-text">{service.desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Testimonials Section */}
      {/* <section className="testimonials">
        <h3 className="h3 testimonials-title">Testimonials</h3>

        <ul className="testimonials-list has-scrollbar">
          {testimonials.map((testimonial) => (
            <li key={testimonial.id} className="testimonials-item">
              <div
                className="content-card"
                data-testimonials-item
                onClick={() => handleTestimonialClick(testimonial)}
              >
                <figure className="testimonials-avatar-box">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={60}
                    height={80}
                  />
                </figure>

                <h4 className="h4 testimonials-item-title">
                  {testimonial.name}
                </h4>

                <div className="testimonials-text">
                  <p>{testimonial.text}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section> */}

      {/* Clients Section */}
      {/* <section className="clients">
        <h3 className="h3 clients-title">Clients</h3>

        <ul className="clients-list has-scrollbar">
          {Array.from({ length: 6 }).map((_, i) => (
            <li key={i} className="clients-item">
              <a href="#">
                <Image src={`/assets/images/logo-${i + 1}.png`} alt={`Client ${i + 1}`} width={120} height={50} />
              </a>
            </li>
          ))}
        </ul>
      </section> */}
    </article>
  );
}
