import React, { useState } from "react";
import { Container, Row, Col, Form, FormGroup, Input, Button } from "reactstrap";
import { contactInfo, socialLinks, greetings } from "../portfolio";
import { Icon } from "@iconify/react";
import Fade from "./Fade";

const GithubProfileCard = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatusMessage("Please fill in all required fields (Name, Email, Message).");
      return;
    }

    // Direct mailto generation with clear transparency
    const subject = encodeURIComponent(
      formData.subject || `Portfolio Inquiry from ${formData.name}`
    );
    const body = encodeURIComponent(
      `Hello Akriti,\n\nMy name is ${formData.name} (${formData.email}).\n\n${formData.message}\n`
    );

    window.location.href = `mailto:${contactInfo.email}?subject=${subject}&body=${body}`;
    setStatusMessage("Opening your email client to send this message directly to Akriti...");
  };

  return (
    <footer id="contact" className="custom-section pb-0 border-0" style={{ background: "#05080f" }}>
      <Container className="pb-5">
        <Fade bottom duration={1000}>
          <div className="section-header text-center">
            <span className="section-tag">
              <Icon icon="carbon:send-alt" />
              <span>Get In Touch</span>
            </span>
            <h2>Let&apos;s Connect</h2>
            <p className="mx-auto" style={{ maxWidth: "680px" }}>
              Interested in discussing Data Analytics, MERN Stack opportunities, or collaborative projects? My inbox is always open.
            </p>
          </div>

          <Row className="g-4">
            {/* Left: Direct Contact Information */}
            <Col lg="5" className="mb-4 mb-lg-0">
              <div className="dark-card p-4 h-100">
                <h4 className="h5 text-white font-weight-700 mb-4">Contact Details</h4>

                {/* Email */}
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="contact-item-card"
                >
                  <div className="contact-item-icon">
                    <Icon icon="carbon:email" />
                  </div>
                  <div>
                    <div className="text-dim text-xs font-weight-600 text-uppercase">Email Address</div>
                    <div className="text-white font-weight-500 text-sm">{contactInfo.email}</div>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href={`tel:${contactInfo.phone.replace(/[^0-9+]/g, "")}`}
                  className="contact-item-card"
                >
                  <div className="contact-item-icon">
                    <Icon icon="carbon:phone" />
                  </div>
                  <div>
                    <div className="text-dim text-xs font-weight-600 text-uppercase">Phone Number</div>
                    <div className="text-white font-weight-500 text-sm">{contactInfo.phone}</div>
                  </div>
                </a>

                {/* Location */}
                <div className="contact-item-card">
                  <div className="contact-item-icon">
                    <Icon icon="carbon:location" />
                  </div>
                  <div>
                    <div className="text-dim text-xs font-weight-600 text-uppercase">Location</div>
                    <div className="text-white font-weight-500 text-sm">{contactInfo.location}</div>
                  </div>
                </div>

                {/* Social Profiles */}
                <div className="mt-4 pt-3 border-top" style={{ borderColor: "var(--border-subtle)" }}>
                  <div className="text-dim text-xs font-weight-600 text-uppercase mb-3">Online Profiles</div>
                  <div className="d-flex align-items-center">
                    {socialLinks.github && (
                      <a
                        href={socialLinks.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-btn-dark"
                        aria-label="GitHub Profile"
                      >
                        <Icon icon="akar-icons:github-fill" />
                      </a>
                    )}
                    {socialLinks.linkedin && (
                      <a
                        href={socialLinks.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-btn-dark"
                        aria-label="LinkedIn Profile"
                      >
                        <Icon icon="akar-icons:linkedin-fill" />
                      </a>
                    )}
                    {greetings.resumeLink && (
                      <a
                        href={greetings.resumeLink}
                        download="Akriti_Singh_Resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-btn-dark"
                        aria-label="Download Resume"
                      >
                        <Icon icon="carbon:document-download" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </Col>

            {/* Right: Contact Form */}
            <Col lg="7">
              <div className="dark-card p-4 p-md-5">
                <h4 className="h5 text-white font-weight-700 mb-2">Send a Message</h4>
                <p className="text-muted text-sm mb-4">
                  Fill in the details below to start a conversation directly via email.
                </p>

                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col md="6">
                      <FormGroup>
                        <label className="text-dim text-xs font-weight-600 text-uppercase mb-1">
                          Your Name *
                        </label>
                        <Input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Akriti's Visitor"
                          className="contact-form-control"
                        />
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <label className="text-dim text-xs font-weight-600 text-uppercase mb-1">
                          Your Email *
                        </label>
                        <Input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="visitor@example.com"
                          className="contact-form-control"
                        />
                      </FormGroup>
                    </Col>
                  </Row>

                  <FormGroup>
                    <label className="text-dim text-xs font-weight-600 text-uppercase mb-1">
                      Subject
                    </label>
                    <Input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project Collaboration / Opportunity"
                      className="contact-form-control"
                    />
                  </FormGroup>

                  <FormGroup>
                    <label className="text-dim text-xs font-weight-600 text-uppercase mb-1">
                      Message *
                    </label>
                    <Input
                      type="textarea"
                      name="message"
                      rows="4"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Hello Akriti, I would like to discuss..."
                      className="contact-form-control"
                    />
                  </FormGroup>

                  {statusMessage && (
                    <div
                      className="p-3 mb-3 rounded text-sm"
                      style={{
                        background: "rgba(99, 102, 241, 0.15)",
                        border: "1px solid var(--border-accent)",
                        color: "var(--accent-sky)",
                      }}
                    >
                      {statusMessage}
                    </div>
                  )}

                  <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 pt-2">
                    <Button type="submit" className="btn-primary-gradient">
                      <Icon icon="carbon:send-alt" width="18" height="18" />
                      <span>Send Email Message</span>
                    </Button>
                    <span className="text-dim text-xs">
                      Delivered directly to {contactInfo.email}
                    </span>
                  </div>
                </Form>
              </div>
            </Col>
          </Row>
        </Fade>
      </Container>

      {/* Footer Bar */}
      <div className="custom-footer text-center">
        <Container>
          <div className="d-flex flex-column flex-md-row align-items-center justify-content-between">
            <div className="mb-2 mb-md-0">
              <span>&copy; {new Date().getFullYear()} </span>
              <strong className="text-white">Akriti Singh</strong>. Data Analyst | MERN Stack Developer.
            </div>
            <div>
              <a href="#hero" className="text-gradient font-weight-600 text-sm">
                Back to Top &uarr;
              </a>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default GithubProfileCard;
