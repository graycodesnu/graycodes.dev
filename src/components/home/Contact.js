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
  // ! Submit form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [disabled, setDisabled] = useState(false);

  const onSubmit = async (data) => {
    // Destructure data object
    const { name, email, message } = data;
    try {
      // Disable form while processing submission
      setDisabled(true);

      // Define template params
      const templateParams = {
        name,
        email,
        message,
      };

      await emailjs.send(
        "service_0agu8bd",
        "template_k7jtwav",
        templateParams,
        "hX2zE410wRCeBkCxO"
      );

      // Reset contact form fields after submission
      reset();
      // Display success toast
      toastifySuccess();
      // Re-enable form submission
      setDisabled(false);
    } catch (e) {
      console.log(e);
    }
  };
  // ! Notification upon successful form submission
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

  // //! Pointer leave
  // const [pointer, pointerSetError] = useState("");

  // function pointerLeave(event) {
  //   if (!event.target.value) {
  //     pointerSetError("*All fields are required.");
  //   } else {
  //     pointer("");
  //   }
  // }

  //! Email validation
  const [message, setMessage] = useState("");
  const [emailError, setEmailError] = useState(null);

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleEmailChange = (event) => {
    if (!isValidEmail(event.target.value)) {
      setEmailError("Please enter a valid email address.");
    } else {
      setEmailError(null);
    }

    setMessage(event.target.value);
  };

  // ** RETURN **
  return (
    <>
      <div id="contact">
        {/* Toastify Notification */}
        <div>
          <ToastContainer closeButton={false} />
        </div>
        {/* Header */}
        <h1 className="xl:mt-14 text-5xl font-bold tracking-tight text-secondary sm:text-6xl">
          <span className="contactHeadingUnderline">Say Hello</span>
        </h1>
      </div>

      <div>
        {/* LARGE CONTAINER */}
        <div className="border relative isolate py-12 px-6 sm:py-10 lg:px-8">
          <div className="mx-auto max-w-xl lg:max-w-4xl">
            {/* Subheaders */}
            <h2 className="text-4xl font-bold tracking-tight text-silver">
              Contact me via any of the below methods.
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              I'm always looking to connect with folks across all industries!
            </p>
            {/* Form, Contact Info */}
            <div className="mt-12 flex flex-col gap-16 sm:gap-y-20 lg:flex-row">
              <form
                action="#"
                method="POST"
                className="lg:flex-auto"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="grid grid-cols-1 gap-y-6 gap-x-8 sm:grid-cols-2">
                  {/* Input Name */}
                  <div>
                    <label
                      className="block text-sm font-semibold leading-6 text-secondary"
                    >
                      Name
                    </label>
                    <div className="mt-1.5">
                      {/* input error for name field */}
                      {errors.name && (
                        <span className="errorMessage">
                          {errors.name.message}
                        </span>
                      )}
                      <input
                        type="text"
                        label="Name"
                        name="name"
                        id="name"
                        autoComplete="name"
                        className="block w-full rounded-md border-0 py-2 px-3.5 bg-white text-blue shadow-sm ring-1 ring-inset ring-green placeholder:text-purple focus:ring-2 focus:ring-inset focus:ring-green-light focus:bg-white-light sm:text-sm sm:leading-6 "
                        // Field submit message
                        {...register("name", {
                          required: {
                            value: true,
                            message: "Please enter your name.",
                          },
                        })}
                        placeholder="Name"
                      />
                    </div>
                  </div>
                  
                  
                  {/* Input Email */}
                  <div>
                    <label
                      className="block text-sm font-semibold leading-6 text-secondary"
                    >
                      Email
                    </label>
                    <div className="mt-1.5">
                      {/* input error for email field */}
                      {errors.email && (
                        <span className="errorMessage">
                          Please enter a valid email address.
                        </span>
                      )}
                      <input
                      label="Email"
                        type="email"
                        name="email"
                        id="email"
                        autoComplete="email"
                        className="block w-full rounded-md border-0 py-2 px-3.5 bg-white text-blue shadow-sm ring-1 ring-inset ring-green placeholder:text-purple focus:ring-2 focus:ring-inset focus:ring-green-light focus:bg-white-light sm:text-sm sm:leading-6"
                        // Validation
                        value={message}
                        onChange={handleEmailChange}
                        helperText={emailError && <alert>{emailError}</alert>}
                        placeholder="Email"
                      />
                    </div>
                  </div>
                  
                  
                  {/* Input Message */}
                  <div className="sm:col-span-2">
                    <label
                      className="block text-sm font-semibold leading-6 text-secondary"
                    >
                      Message
                    </label>
                    <div className="mt-1.5">
                      {errors.message && (
                        <span className="errorMessage">
                          Please enter a message.
                        </span>
                      )}
                      <textarea
                        id="message"
                        name="message"
                        label="Message"
                        rows={4}
                        className="block w-full rounded-md border-0 py-2 px-3.5 bg-white text-blue shadow-sm ring-1 ring-inset ring-green placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-light focus:bg-white-light sm:text-sm sm:leading-6"
                        defaultValue={""}
                        placeholder="Enter your message here."

                      />
                    </div>
                  </div>
                </div>
                {/* Submit Button */}
                <div className="mt-10">
                  <button
                    type="submit"
                    disabled={disabled}
                    className="block w-full rounded-md bg-green px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue hover:text-gold"
                  >
                    Let’s talk
                  </button>
                </div>
                <p className="mt-4 text-sm leading-6 text-gray-500">
                  By submitting this form, I agree to the{" "}
                  <a href="#" className="font-semibold text-red">
                    privacy&nbsp;policy
                  </a>
                  .
                </p>
              </form>
              <div className="lg:mt-6 lg:w-80 lg:flex-none">
                <img
                  className="h-12 w-auto"
                  src="https://tailwindui.com/img/logos/workcation-logo-indigo-600.svg"
                  alt=""
                />
                <figure className="mt-10">
                  <blockquote className="text-lg font-semibold leading-8 text-gray-900">
                    <p>
                      “Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nemo expedita voluptas culpa sapiente alias molestiae.
                      Numquam corrupti in laborum sed rerum et corporis.”
                    </p>
                  </blockquote>
                  <figcaption className="mt-10 flex gap-x-6">
                    <img
                      src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=96&h=96&q=80"
                      alt=""
                      className="h-12 w-12 flex-none rounded-full bg-gray-50"
                    />
                    <div>
                      <div className="text-base font-semibold text-gray-900">
                        Brenna Goyette
                      </div>
                      <div className="text-sm leading-6 text-gray-600">
                        CEO of Workcation
                      </div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
