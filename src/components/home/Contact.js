// ! Imports
// Animation
import { motion } from "framer-motion";
// Email/Message Send Functionality
import emailjs from "emailjs-com";
// Form Element
import { useForm } from "react-hook-form";
// Notification
import { ToastContainer, toast } from "react-toastify";
// Icons
import {
  MapPinIcon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";

// * Animation
const visible = { opacity: 1, y: 0, transition: { duration: 0.75 } };

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible,
};

// ! Function
export default function Contact() {
  
  // * Form submission
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
    const { firstName, lastName, email, phone, message } = data;
    try {
      const templateParams = {
        firstName,
        lastName,
        email,
        phone,
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
      <div id="contact" className="mt-8">
        {/* TAILWIND COMPONENT */}
        <div className="relative isolate">
          <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
            <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
              <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
                <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden border-r border-green lg:w-1/2"></div>
                <h2 className="text-5xl font-bold tracking-tight text-secondary">
                  <span className="contactHeadingUnderline">Say Hello</span>
                </h2>
                <p className="mt-6 text-lg leading-8 text-silver">
                  Contact me via any of the below methods or send me a direct message through the submission form. I'm always looking to connect with new people across all industries!
                </p>
                <dl className="mt-10 space-y-4 text-base leading-7">
                  <div className="flex gap-x-4">
                    <dt className="flex-none">
                      <span className="sr-only">Telephone</span>
                      <MapPinIcon
                        className="h-7 w-6 text-purple"
                        aria-hidden="true"
                      />
                    </dt>
                    <dd>
                      Chicago, IL
                    </dd>
                  </div>
                  <div className="flex gap-x-4">
                    <dt className="flex-none">
                      <span className="sr-only">Telephone</span>
                      <PhoneIcon
                        className="h-7 w-6 text-purple"
                        aria-hidden="true"
                      />
                    </dt>
                    <dd>
                      <a
                        className="hover:text-gold"
                        href="tel:+1 (555) 234-5678"
                      >
                        +1 (714) 733-3371
                      </a>
                    </dd>
                  </div>
                  <div className="flex gap-x-4">
                    <dt className="flex-none">
                      <span className="sr-only">Telephone</span>
                      <EnvelopeIcon
                        className="h-7 w-6 text-purple"
                        aria-hidden="true"
                      />
                    </dt>
                    <dd>
                      <a
                        className="hover:text-gold"
                        href="mailto:graycodes.nu@gmail.com"
                      >
                        graycodes.nu@gmail.com
                      </a>
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
            {/* ********************* Form ********************* */}
            {/* DIV WITH FORM AND TOASTIFY NOTIF */}
            <div className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48">
              <form
                id="contact-form"
                onSubmit={handleSubmit(onSubmit)}
                noValidate
              >
                {/* WHOLE FORM DIV */}
                <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
                  {/* DIV WITHOUT BUTTON */}
                  <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                    {/* First Name */}
                    <div>
                      <label className="block text-sm font-semibold leading-6">
                        First Name
                      </label>
                      <div className="mt-2.5">
                        <input
                          type="text"
                          name="firstName"
                          {...register("firstName", {
                            required: {
                              value: true,
                              message: "Please enter your first name.",
                            },
                            maxLength: {
                              value: 30,
                              message: "Please use 30 characters or less",
                            },
                          })}
                          className="form-control formInput block w-full rounded-md border-0 px-3.5 py-2 text-blue shadow-sm ring-1 ring-inset ring-green focus:ring-2 focus:ring-inset focus:ring-green-light sm:text-sm sm:leading-6"
                          placeholder="First Name"
                        />
                      </div>
                      {errors.firstName && (
                        <span className="errorMessage text-red-light">
                          {errors.firstName.message}
                        </span>
                      )}
                    </div>
                    {/* Last Name */}
                    <div>
                      <label className="block text-sm font-semibold leading-6">
                        Last Name
                      </label>
                      <div className="mt-2.5">
                        <input
                          type="text"
                          name="lastName"
                          {...register("lastName", {
                            required: {
                              value: true,
                              message: "Please enter your last name.",
                            },
                            maxLength: {
                              value: 30,
                              message: "Please use 30 characters or less",
                            },
                          })}
                          className="form-control formInput block w-full rounded-md border-0 px-3.5 py-2 text-blue shadow-sm ring-1 ring-inset ring-green focus:ring-2 focus:ring-inset focus:ring-green-light sm:text-sm sm:leading-6"
                          placeholder="Last Name"
                        />
                      </div>
                      {errors.lastName && (
                        <span className="errorMessage text-red-light">
                          {errors.lastName.message}
                        </span>
                      )}
                    </div>
                    {/* Email */}
                    <div className="sm:col-span-2">
                      <label className="block text-sm font-semibold leading-6">
                        Email
                      </label>
                      <div className="mt-2.5">
                        <input
                          type="email"
                          name="email"
                          {...register("email", {
                            required: true,
                            pattern:
                              /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                          })}
                          className="form-control formInput block w-full rounded-md border-0 px-3.5 py-2 text-blue shadow-sm ring-1 ring-inset ring-green focus:ring-2 focus:ring-inset focus:ring-green-light sm:text-sm sm:leading-6"
                          placeholder="Email Address"
                        />
                      </div>
                      {errors.email && (
                        <span className="errorMessage text-red-light">
                          Please enter a valid email address.
                        </span>
                      )}
                    </div>
                    {/* Phone */}
                    <div className="sm:col-span-2">
                      <label className="block text-sm font-semibold leading-6">
                        Phone
                      </label>
                      <div className="mt-2.5">
                        <input
                          type="text"
                          name="phone"
                          {...register("phone", {
                            required: {
                              value: true,
                              message: "Please enter your phone number.",
                            },
                            maxLength: {
                              value: 11,
                              message: "Please use 11 characters or less",
                            },
                          })}
                          className="form-control formInput block w-full rounded-md border-0 px-3.5 py-2 text-blue shadow-sm ring-1 ring-inset ring-green focus:ring-2 focus:ring-inset focus:ring-green-light sm:text-sm sm:leading-6"
                          placeholder="Phone Number"
                        />
                      </div>
                      {errors.phone && (
                        <span className="errorMessage text-red-light">
                          {errors.phone.message}
                        </span>
                      )}
                    </div>

                    {/* Message */}
                    <div className="sm:col-span-2">
                      <label className="block text-sm font-semibold leading-6">
                        Message
                      </label>
                      <div className="mt-2.5">
                        <textarea
                          rows={3}
                          name="message"
                          {...register("message", {
                            required: true,
                          })}
                          className="form-control formInput block w-full rounded-md border-0 px-3.5 py-2 text-blue shadow-sm ring-1 ring-inset ring-green focus:ring-2 focus:ring-inset focus:ring-green-light sm:text-sm sm:leading-6"
                          placeholder="Message"
                        />
                      </div>
                      {errors.message && (
                        <span className="errorMessage text-red-light">
                          Please include a message.
                        </span>
                      )}
                    </div>
                  </div>
                  {/* Toastify Notification */}
                  <ToastContainer closeButton={false}/>
                  {/* Submit Button */}
                  <div className="mt-8 flex justify-end">
                    <button
                      className="submit-btn rounded-md outline outline-green px-3.5 py-2.5 text-secondary text-center text-sm font-semibold shadow-sm hover:bg-blue hover:text-gold hover:outline-none"
                      type="submit"
                    >
                      Submit Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
