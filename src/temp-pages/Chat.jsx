import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Chat() {
    const formRef = useRef();
    const [error, setError] = React.useState(false);
    const [success, setSuccess] = React.useState(false);

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_portfolio', 'template_6en9lkh', formRef.current, {
        publicKey: 'cv0pdAAUtOtI0EHxi',
      })
      .then(
        () => {
          setSuccess(true);
        },
        (error) => {
          setError('false');
        },
      );
  };

    return(
        <section className="contact">
            <div className="form-container">
                <h1>Let's Chat</h1>
                <form ref={formRef}
                onSubmit={sendEmail}>
                    <input type="text" required placeholder="Name" name='name'/>
                    <input type="email" required placeholder="Email" name='email'/>
                    <textarea rows={8} required placeholder="Your message" name='message'/>
                    <button type="submit">Submit</button>
                    {error && "Something went wrong, please try again."}
                    {success && "Message sent successfully!"}
                </form>
            </div>

            <aside className="text-wrapper">
                <h2>Get in Touch</h2>
                <p>For general messages and questions, drop me them here</p>
                <div className="item">
                    <h2>Email</h2>
                    <p>k.anhthu02@gmail.com</p>
                </div>
                <div className="item">
                    <h2>Phone</h2>
                    <p>+45 42 22 15 91</p>
                </div>
                <div className="item">
                    <h2>Address</h2>
                    <p>Denmark, Horsens</p>
                </div>
                <aside className="social-container">
                    <a href="https://www.linkedin.com/in/anh-thu-kieu-411293383/" target="_blank" rel="noopener noreferrer">
                        <img src="./public/assets/linkedin.svg" alt="LinkedIn" />
                    </a>
                    <a href="https://github.com/anhthu258" target="_blank" rel="noopener noreferrer">
                        <img src="./public/assets/github.svg" alt="GitHub" />
                    </a>
                    <a href="https://www.facebook.com/anhthu.kieu.90/?locale=da_DK" target="_blank" rel="noopener noreferrer">
                        <img src="./public/assets/facebook.svg" alt="Facebook" />
                    </a>
                    <a href="https://www.instagram.com/in_sane258?igsh=MTBoc2hiOHIyOG9oag==" target="_blank" rel="noopener noreferrer">
                        <img src="./public/assets/instagram.svg" alt="Instagram" />
                    </a>
                </aside>
            </aside>

        </section>
    )

}