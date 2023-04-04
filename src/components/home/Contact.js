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
  BuildingOffice2Icon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";

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
      <div id="contact">
        {/* TAILWIND COMPONENT */}
        <div className="relative isolate">
          <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
            <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
              <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
                <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-gray-100 ring-1 ring-gray-900/10 lg:w-1/2"></div>
                <h2 className="text-3xl font-bold tracking-tight text-secondary">
                  Get in touch
                </h2>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Proin volutpat consequat porttitor cras nullam gravida at.
                  Orci molestie a eu arcu. Sed ut tincidunt integer elementum id
                  sem. Arcu sed malesuada et magna.
                </p>
                <dl className="mt-10 space-y-4 text-base leading-7 text-gray-600">
                  <div className="flex gap-x-4">
                    <dt className="flex-none">
                      <span className="sr-only">Telephone</span>
                      <BuildingOffice2Icon
                        className="h-7 w-6 text-gray-400"
                        aria-hidden="true"
                      />
                    </dt>
                    <dd>
                      545 Mavis Island
                      <br />
                      Chicago, IL 99191
                    </dd>
                  </div>
                  <div className="flex gap-x-4">
                    <dt className="flex-none">
                      <span className="sr-only">Telephone</span>
                      <PhoneIcon
                        className="h-7 w-6 text-gray-400"
                        aria-hidden="true"
                      />
                    </dt>
                    <dd>
                      <a
                        className="hover:text-gray-900"
                        href="tel:+1 (555) 234-5678"
                      >
                        +1 (555) 234-5678
                      </a>
                    </dd>
                  </div>
                  <div className="flex gap-x-4">
                    <dt className="flex-none">
                      <span className="sr-only">Telephone</span>
                      <EnvelopeIcon
                        className="h-7 w-6 text-gray-400"
                        aria-hidden="true"
                      />
                    </dt>
                    <dd>
                      <a
                        className="hover:text-gray-900"
                        href="mailto:hello@example.com"
                      >
                        hello@example.com
                      </a>
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
            {/* ********************* Form ********************* */}
            {/* DIV WITH FORM AND TOASTIFY NOTIF */}
            <form
              id="contact-form"
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48"
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
                      className="form-control formInput block w-full rounded-md border-0 px-3.5 py-2 text-blue shadow-sm ring-1 ring-inset ring-green sm:text-sm sm:leading-6"
                      placeholder="First Name"
                    ></input>
                    {errors.name && (
                      <span className="errorMessage">
                        {errors.firstName.message}
                      </span>
                    )}
                    </div>
                  </div>
                  {/* Last Name */}
                  <div className="">
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
                      className="form-control formInput"
                      placeholder="Last Name"
                    ></input>
                    {errors.lastName && (
                      <span className="errorMessage">
                        {errors.lastName.message}
                      </span>
                    )}
                  </div>
                  {/* Email */}
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
                      placeholder="Email Address"
                    ></input>
                    {errors.email && (
                      <span className="errorMessage">
                        Please enter a valid email address
                      </span>
                    )}
                  </div>
                  {/* Phone */}
                  <div className="">
                    <input
                      type="text"
                      name="phone"
                      {...register("phone", {
                        required: {
                          value: false,
                          message: "Please enter your phone number.",
                        },
                        maxLength: {
                          value: 11,
                          message: "Please use 11 characters or less",
                        },
                      })}
                      className="form-control formInput"
                      placeholder="Phone Number"
                    ></input>
                    {errors.phone && (
                      <span className="errorMessage">
                        {errors.phone.message}
                      </span>
                    )}
                  </div>
             
                {/* Message */}
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
                </div>
                {/* Submit Button */}
                <button className="submit-btn" type="submit">
                  Submit
                </button>
              </div>
            </form>
            {/* Toastify Notification */}
            <ToastContainer />

            {/* LARGER DIV */}
          </div>
        </div>
      </div>
    </>
  );
}
