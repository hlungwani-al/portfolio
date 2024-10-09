import React, { useState } from "react";
import PageHeaderContent from "../../components/pageheader";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { Animate } from "react-simple-animate";
import "./styles.scss";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    description: "",
  });

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    description: false,
  });

  const [successMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const nameValid = formData.name.trim() !== "";
    const emailValid = validateEmail(formData.email);
    const descriptionValid = formData.description.trim() !== "";

    setErrors({
      name: !nameValid,
      email: !emailValid,
      description: !descriptionValid,
    });

    if (nameValid && emailValid && descriptionValid) {
      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            access_key: "f25d35cc-0d90-4ecf-aede-8f64d3703ef9",
            ...formData,
          }),
        });

        if (response.ok) {
          alert("Thanks for reaching out! We'll be in touch very soon");
          setFormData({ name: "", email: "", description: "" });
        } else {
          console.error("Form submission failed", response.statusText);
        }
      } catch (error) {
        console.error("Form submission error", error);
      }
    }
  };

  return (
    <section id="contact" className="contact">
      <PageHeaderContent
        headerText="Contact Me"
        icon={<MdOutlineMarkEmailRead size={40} />}
      />
      <div className="contact__content">
        <Animate
          play
          duration={1.5}
          delay={0}
          start={{
            transform: "translateX(-200px)",
          }}
          end={{
            transform: "translateX(0px)",
          }}
        >
          <h3 className="contact__content__header-text">Let's Talk</h3>
        </Animate>
        <Animate
          play
          duration={1.5}
          delay={0}
          start={{
            transform: "translateX(200px)",
          }}
          end={{
            transform: "translateX(0px)",
          }}
        >
          <form onSubmit={handleSubmit} className="contact__content__form">
            <input
              type="hidden"
              name="access_key"
              value="f25d35cc-0d90-4ecf-aede-8f64d3703ef9"
            />
            <div className="contact__content__form__controlswrapper">
              <div>
                <input
                  required
                  name="name"
                  id="name"
                  className={`inputName ${errors.name ? "error" : ""}`}
                  type="text"
                  value={formData.name}
                  autoComplete="name"
                  onChange={handleChange}
                />
                <label htmlFor="name" className="nameLabel">
                  Name(s)
                </label>
                {errors.name && (
                  <p className="error-message">Name is required.</p>
                )}
              </div>
              <div>
                <input
                  required
                  name="email"
                  id="email"
                  className={`inputEmail ${errors.email ? "error" : ""}`}
                  type="text"
                  value={formData.email}
                  autoComplete="email"
                  onChange={handleChange}
                />
                <label htmlFor="email" className="emailLabel">
                  Email
                </label>
                {errors.email && (
                  <p className="error-message">
                    Please Enter An Email Address!
                  </p>
                )}
              </div>
              <div>
                <textarea
                  required
                  name="description"
                  id="description"
                  className={`inputDescription ${
                    errors.description ? "error" : ""
                  }`}
                  rows="5"
                  value={formData.description}
                  autoComplete="text"
                  onChange={handleChange}
                />
                <label htmlFor="description" className="descriptionLabel">
                  What can I do for you?
                </label>
                {errors.description && (
                  <p className="error-message">Description is required.</p>
                )}
              </div>
            </div>
            <button type="submit">Submit</button>
            {successMessage && <p className="success-message">{successMessage}</p>}
          </form>
        </Animate>
      </div>
    </section>
  );
};

export default Contact;
