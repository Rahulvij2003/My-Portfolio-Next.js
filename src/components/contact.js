"use client"

import { useState } from "react"

export default function ContactPage({ isActive }) {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    message: "",
  })

  const [isFormValid, setIsFormValid] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    const updatedFormData = { ...formData, [name]: value }

    setFormData(updatedFormData)

    setIsFormValid(
      updatedFormData.fullname.trim() !== "" &&
      updatedFormData.email.trim() !== "" &&
      updatedFormData.message.trim() !== ""
    )
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)

    // Reset form
    setFormData({ fullname: "", email: "", message: "" })
    setIsFormValid(false)
  }

  return (
    <article className={`contact ${isActive ? "active" : ""}`} data-page="contact">
      <header>
        <h2 className="h2 article-title">Contact</h2>
      </header>

      {/* Map Section */}
      <section className="mapbox" data-mapbox>
        <figure>
          <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13704.828890595402!2d76.7805332!3d30.3753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fed2b9c7be03d%3A0xaff42ebc1dd1c06b!2sAmbala%20City%2C%20Haryana%20134003!5e0!3m2!1sen!2sin!4v1719825340000!5m2!1sen!2sin"
  width="400"
  height="300"
  loading="lazy"
></iframe>

        </figure>
      </section>

      {/* Contact Form */}
      {/* <section className="contact-form">
        <h3 className="h3 form-title">Contact Form</h3>

        <form className="form" onSubmit={handleSubmit} data-form>
          <div className="input-wrapper">
            <input
              type="text"
              name="fullname"
              className="form-input"
              placeholder="Full name"
              required
              value={formData.fullname}
              onChange={handleInputChange}
              data-form-input
            />

            <input
              type="email"
              name="email"
              className="form-input"
              placeholder="Email address"
              required
              value={formData.email}
              onChange={handleInputChange}
              data-form-input
            />
          </div>

          <textarea
            name="message"
            className="form-input"
            placeholder="Your Message"
            required
            value={formData.message}
            onChange={handleInputChange}
            data-form-input
          ></textarea>

          <button className="form-btn" type="submit" disabled={!isFormValid} data-form-btn>
            <ion-icon name="paper-plane"></ion-icon>
            <span>Send Message</span>
          </button>
        </form>
      </section> */}
    </article>
  )
}
