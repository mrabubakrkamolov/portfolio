import { useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus("Please fill in all fields.");
      return;
    }

    setLoading(true);
    setStatus("");

    try {
      await emailjs.send(
        "service_8390rxv",
        "template_stpnzyj",
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          time: new Date().toLocaleString(),
        },
        {
          publicKey: "ehbb1bX2nrJtUEzHn",
        }
      );

      setStatus("success");
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      setStatus("error");
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-glow"></div>

      <div className="contact-content">
        <span>04 — CONTACT</span>

        <h2>
          Have an idea?
          <br />
          Let's build it.
        </h2>

        <p>
          Have a project, question, or opportunity?
          Send me a message and I'll get back to you.
        </p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label>Your Name</label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
              />
            </div>

            <div className="form-group">
              <label>Your Email</label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
              />
            </div>
          </div>

          <div className="form-group">
            <label>Your Message</label>

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me about your project..."
              rows="6"
            ></textarea>
          </div>

          <button
            type="submit"
            className="send-button"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message ↗"}
          </button>

          {status === "success" && (
            <p className="form-success">
              ✓ Message sent successfully! I'll get back to you soon.
            </p>
          )}

          {status === "error" && (
            <p className="form-error">
              ✕ Something went wrong. Please try again.
            </p>
          )}

          {status !== "success" &&
            status !== "error" &&
            status !== "" && (
              <p className="form-error">{status}</p>
            )}
        </form>

        <div className="social-links">
          <a
            href="https://github.com/mrabubakrkamolov"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a href="#home">
            Back to top ↑
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;