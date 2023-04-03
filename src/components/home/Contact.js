// ! Imports
// Animation
import { motion } from "framer-motion";
// State
import { useState } from "react";
// Email/Message Send Functionality
import emailjs from "emailjs-com";
// Form Element
import { useForm } from "react-hook-form";
// Notification
import { ToastContainer, toast } from "react-toastify";

// ! Animation
const visible = { opacity: 1, y: 0, transition: { duration: 0.75 } };

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible,
};

export default function Contact() {
  // ! Form testing

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // Function that displays a success toast on bottom right of the page when form submission is successful
  const toastifySuccess = () => {
    toast("Message sent!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      className: "submit-feedback success",
      toastId: "notifyToast",
    });
  };

  // Function called on submit that uses emailjs to send email of valid contact form
  const onSubmit = async (data) => {
    // Destrcture data object
    const { name, email, subject, message } = data;
    try {
      const templateParams = {
        name,
        email,
        subject,
        message,
      };

      await emailjs.send(
        "service_0agu8bd",
        "template_k7jtwav",
        templateParams,
        "hX2zE410wRCeBkCxO"
      );

      reset();
      toastifySuccess();
    } catch (e) {
      console.log(e);
    }
  };

  // ** RETURN **
  return (
    <>
      <div id="contact">
        <div className="ContactForm">
          <div className="container">
            <div className="row">
              <div className="">
                <div className="">
                  <form
                    id="contact-form"
                    onSubmit={handleSubmit(onSubmit)}
                    noValidate
                  >
                    {/* Row 1 of form */}
                    <div className="">
                      <div className="">
                        <input
                          type="text"
                          name="name"
                          {...register("name", {
                            required: {
                              value: true,
                              message: "Please enter your name",
                            },
                            maxLength: {
                              value: 30,
                              message: "Please use 30 characters or less",
                            },
                          })}
                          className="form-control formInput"
                          placeholder="Name"
                        ></input>
                        {errors.name && (
                          <span className="errorMessage">
                            {errors.name.message}
                          </span>
                        )}
                      </div>
                      <div className="col-6">
                        <input
                          type="email"
                          name="email"
                          {...register("email", {
                            required: true,
                            pattern:
                              /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                          })}
                          className="form-control formInput"
                          placeholder="Email address"
                        ></input>
                        {errors.email && (
                          <span className="errorMessage">
                            Please enter a valid email address
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Row 3 of form */}
                    <div className="row formRow">
                      <div className="col">
                        <textarea
                          rows={3}
                          name="message"
                          {...register("message", {
                            required: true,
                          })}
                          className="form-control formInput"
                          placeholder="Message"
                        ></textarea>
                        {errors.message && (
                          <span className="errorMessage">
                            Please enter a message
                          </span>
                        )}
                      </div>
                    </div>
                    <button className="submit-btn" type="submit">
                      Submit
                    </button>
                  </form>
                </div>
                <ToastContainer />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
