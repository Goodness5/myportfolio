import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if any field is empty
    if (!form.name || !form.email || !form.message) {
      setError("Please fill out all fields.");
      return;
    }

    setLoading(true);

    emailjs
      .send(
        "service_txel7ll",
        "template_v2xksna",
        {
          from_name: form.name,
          to_name: "goodness",
          from_email: form.email,
          to_email: "goodnesskolapo@gmail.com",
          message: form.message,
        },
        "w4bwKHVObRANk4KFX"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className={`xl:mt-12 flex xl:flex-row ml-5 mr-5 justify-center flex-col gap-10 overflow-hidden`}>
      <div className='flex-[0.75] bg-[#210f5f] p-8 rounded-2xl'>
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form ref={formRef} onSubmit={handleSubmit} className='mt-12 flex flex-col gap-8'>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
          {!form.name && error && <p style={{ color: "red" }}>Please fill out this field.</p>}
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder='Your name'
              className='bg-white py-4 px-6 placeholder:text-secondary text-[#000000] rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
          {!form.email && error && <p style={{ color: "red" }}>Please fill out this field.</p>}
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder='Your email'
              className='bg-white py-4 px-6 placeholder:text-secondary text-[#000000] rounded-lg outline-none border-none font-medium'
              />
              </label>
              <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>Message</span>
              {!form.message && error && <p style={{ color: "red" }}>Please fill out this field.</p>}
              <textarea
                         name='message'
                         value={form.message}
                         onChange={handleChange}
                         placeholder='Your message'
                         className='bg-white py-4 px-6 placeholder:text-secondary text-[#000000] rounded-lg outline-none border-none font-medium h-48'
                       />
              </label>
              {error && <p style={{ color: "red" }}>{error}</p>}
              <button
        type='submit'
        disabled={loading}
        className={`bg-[#2b34bd] py-4 px-8 rounded-lg text-white font-medium ${
          loading ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        {loading ? "Sending..." : "Send"}
      </button>
    </form>
  </div>
</div>
);
};

export default Contact;
