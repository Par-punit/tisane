import React, { useState } from "react";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  firstname: Yup.string().required("First Name is required"),
  lastname: Yup.string().required("Last Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  jobtitle: Yup.string().required("Job Title is required"),
  company: Yup.string().required("Company is required"),
  companysize: Yup.string().required("Company Size is required"),
  privacyPolicy: Yup.boolean()
    .required("You must accept the Privacy Policy")
    .oneOf([true], "You must accept the Privacy Policy"),
});

function Contact() {
  const [openquote, setOpenQuote] = useState(false);
  const [openDemo, setOpenDemo] = useState(false);
  const [openEnquiries, setOpenEnquiries] = useState(false);

  const handleSubmit = (values: any, { setSubmitting, resetForm }: any) => {
    if (values) {
      console.log("Form Values:", values);
      resetForm();
      setSubmitting(false);
    }
  };

  return (
    <div className="w-full h-auto">
      <div className="w-full max-w-[1500px] mx-auto py-[50px] md:py-[80px] lg:pt-[80px] lg:pb-[60px] px-5 md:px-5">
        {/* Changed from md: to lg: breakpoint to match SCSS */}
        <div className="w-full flex flex-col lg:flex-row lg:items-start justify-center">
          {/* Left section */}
          <div className="w-full max-w-[350px] lg:w-[36%] xl:w-[34%] 2xl:w-[30%] 3xl:w-[27%] lg:pr-7 xl:pr-8 2xl:pr-8">
            <div>
              <li className="text-[#333] text-base font-semibold leading-[110%] tracking-[-0.16px] marker:text-[#f35218] marker:text-base lg:text-[15px] lg:marker:text-[15px]">
                CONTACT
              </li>
              <div className="mt-[13px]">
                <h4 className="text-[#333] text-[20px] font-semibold leading-[100%] tracking-[-0.8px] sm:text-[20px] lg:text-[22px] xl:text-[28px] 2xl:text-[34px] 3xl:text-[40px]">
                  How can we help?
                </h4>
                <div className="mt-3">
                  <img
                    src="/phone.svg"
                    alt="phone"
                    className="mr-[3px] inline-block align-middle"
                  />
                  <span className="text-[#525d6b] text-sm font-normal tracking-[-0.14px] leading-[140%]">
                    <span className="text-[#333] font-semibold">
                      Get a quote
                    </span>{" "}
                    from our team to see how Tisane can boost your company's
                    workflow and create a safer digital space.
                  </span>
                </div>
              </div>
            </div>

            {/* Changed margin breakpoints to match SCSS */}
            <div className="mt-6 lg:mt-[358px] xl:mt-[358px]">
              <h3 className="text-[#333] text-[15px] font-semibold leading-[110%] tracking-[-0.16px] max-w-[200px] 2xl:text-base">
                Prefer sending a direct email over contact forms?
              </h3>
              <div className="xl:mt-12 lg:mt-12 mt-6 flex flex-col xl:gap-[30px] lg:gap-[30px] gap-[20px]">
                <div>
                  <h5 className="text-[#333] text-[10px] font-normal leading-[100%] tracking-[-0.2px] uppercase">
                    GET A QUOTE
                  </h5>
                  <p className="text-[#333] text-sm font-normal leading-[140%] tracking-[-0.14px] mt-1">
                    contact@tisane.ai
                  </p>
                </div>

                <div>
                  <h5 className="text-[#333] text-[10px] font-normal leading-[100%] tracking-[-0.2px] uppercase">
                    DEMO
                  </h5>
                  <p className="text-[#333] text-sm font-normal leading-[140%] tracking-[-0.14px] mt-1">
                    contact@tisane.ai
                  </p>
                </div>

                <div>
                  <h5 className="text-[#333] text-[10px] font-normal leading-[100%] tracking-[-0.2px] uppercase">
                    GENERAL
                  </h5>
                  <p className="text-[#333] text-sm font-normal leading-[140%] tracking-[-0.14px] mt-1">
                    contact@tisane.ai
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right section - Updated margin and breakpoints */}
          <div className="w-full mt-3 lg:mt-0 lg:w-[64%] xl:w-[66%] 2xl:w-[70%] 3xl:w-[73%] lg:pl-7 xl:pl-8 lg:border-l lg:border-[#cecece]">
            <div className="flex items-center justify-between py-5">
              <h3 className="text-[#333] text-[18px] font-semibold leading-[110%] tracking-[-0.56px] sm:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px] 3xl:text-[28px]">
                Get a quote
              </h3>
              <div
                className="cursor-pointer"
                onClick={() => setOpenQuote(!openquote)}
              >
                {openquote ? (
                  <img
                    src="/plus.svg"
                    alt="plus"
                    className="block max-w-[20px] lg:max-w-[20px] xl:max-w-[22px] 2xl:max-w-[24px]"
                  />
                ) : (
                  <img
                    src="/dash.svg"
                    alt="dash"
                    className="block max-w-[20px] lg:max-w-[20px] xl:max-w-[22px] 2xl:max-w-[24px]"
                  />
                )}
              </div>
            </div>

            <div className="w-full">
              <Formik
                initialValues={{
                  firstname: "",
                  lastname: "",
                  email: "",
                  jobtitle: "",
                  company: "",
                  companysize: "",
                  privacyPolicy: false,
                }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({ errors, touched }) => (
                  <Form>
                    <div className="w-full mb-3">
                      <div>
                        {/* Updated focus-within breakpoints */}
                        <div className="w-full border-b border-[#cecece] transition-all duration-400 focus-within:border-[#333] focus-within:w-[85%] sm:focus-within:w-[80%] md:focus-within:w-[85%] lg:focus-within:w-[70%] xl:focus-within:w-[60%] 2xl:focus-within:w-[50%]">
                          <Field
                            id="firstname"
                            name="firstname"
                            className="w-full border-none outline-none resize-none appearance-none bg-transparent py-5 text-[#706f6d] font-normal text-base leading-[100%] tracking-[-0.32px] placeholder-[#706f6d] focus:text-[#333] focus:placeholder-[#333]"
                            placeholder="First Name"
                            type="text"
                          />
                        </div>
                        {errors.firstname && touched.firstname && (
                          <div className="mt-[10px]">
                            <p className="text-[13px] font-normal leading-[100%] text-red-500">
                              {errors.firstname}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="w-full mb-3">
                      <div>
                        <div className="w-full border-b border-[#cecece] transition-all duration-400 focus-within:border-[#333] focus-within:w-[85%] sm:focus-within:w-[80%] md:focus-within:w-[85%] lg:focus-within:w-[70%] xl:focus-within:w-[60%] 2xl:focus-within:w-[50%]">
                          <Field
                            id="lastname"
                            name="lastname"
                            className="w-full border-none outline-none resize-none appearance-none bg-transparent py-5 text-[#706f6d] font-normal text-base leading-[100%] tracking-[-0.32px] placeholder-[#706f6d] focus:text-[#333] focus:placeholder-[#333]"
                            placeholder="Last Name"
                            type="text"
                          />
                        </div>
                        {errors.lastname && touched.lastname && (
                          <div className="mt-[10px]">
                            <p className="text-[13px] font-normal leading-[100%] text-red-500">
                              {errors.lastname}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="w-full mb-3">
                      <div>
                        <div className="w-full border-b border-[#cecece] transition-all duration-400 focus-within:border-[#333] focus-within:w-[85%] sm:focus-within:w-[80%] md:focus-within:w-[85%] lg:focus-within:w-[70%] xl:focus-within:w-[60%] 2xl:focus-within:w-[50%]">
                          <Field
                            id="email"
                            name="email"
                            className="w-full border-none outline-none resize-none appearance-none bg-transparent py-5 text-[#706f6d] font-normal text-base leading-[100%] tracking-[-0.32px] placeholder-[#706f6d] focus:text-[#333] focus:placeholder-[#333]"
                            placeholder="Email"
                            type="email"
                          />
                        </div>
                        {errors.email && touched.email && (
                          <div className="mt-[10px]">
                            <p className="text-[13px] font-normal leading-[100%] text-red-500">
                              {errors.email}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="w-full mb-3">
                      <div>
                        <div className="w-full border-b border-[#cecece] transition-all duration-400 focus-within:border-[#333] focus-within:w-[85%] sm:focus-within:w-[80%] md:focus-within:w-[85%] lg:focus-within:w-[70%] xl:focus-within:w-[60%] 2xl:focus-within:w-[50%]">
                          <Field
                            id="jobtitle"
                            name="jobtitle"
                            className="w-full border-none outline-none resize-none appearance-none bg-transparent py-5 text-[#706f6d] font-normal text-base leading-[100%] tracking-[-0.32px] placeholder-[#706f6d] focus:text-[#333] focus:placeholder-[#333]"
                            placeholder="Job Title"
                            type="text"
                          />
                        </div>
                        {errors.jobtitle && touched.jobtitle && (
                          <div className="mt-[10px]">
                            <p className="text-[13px] font-normal leading-[100%] text-red-500">
                              {errors.jobtitle}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="w-full mb-3">
                      <div>
                        <div className="w-full border-b border-[#cecece] transition-all duration-400 focus-within:border-[#333] focus-within:w-[85%] sm:focus-within:w-[80%] md:focus-within:w-[85%] lg:focus-within:w-[70%] xl:focus-within:w-[60%] 2xl:focus-within:w-[50%]">
                          <Field
                            id="company"
                            name="company"
                            className="w-full border-none outline-none resize-none appearance-none bg-transparent py-5 text-[#706f6d] font-normal text-base leading-[100%] tracking-[-0.32px] placeholder-[#706f6d] focus:text-[#333] focus:placeholder-[#333]"
                            placeholder="Company"
                            type="text"
                          />
                        </div>
                        {errors.company && touched.company && (
                          <div className="mt-[10px]">
                            <p className="text-[13px] font-normal leading-[100%] text-red-500">
                              {errors.company}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="w-full mb-3">
                      <div>
                        <div className="w-full border-b border-[#cecece] transition-all duration-400 focus-within:border-[#333] focus-within:w-[85%] sm:focus-within:w-[80%] md:focus-within:w-[85%] lg:focus-within:w-[70%] xl:focus-within:w-[60%] 2xl:focus-within:w-[50%]">
                          <Field
                            id="companysize"
                            name="companysize"
                            className="w-full border-none outline-none resize-none appearance-none bg-transparent py-5 text-[#706f6d] font-normal text-base leading-[100%] tracking-[-0.32px] placeholder-[#706f6d] focus:text-[#333] focus:placeholder-[#333]"
                            placeholder="Company Size"
                            type="number"
                          />
                        </div>
                        {errors.companysize && touched.companysize && (
                          <div className="mt-[10px]">
                            <p className="text-[13px] font-normal leading-[100%] text-red-500">
                              {errors.companysize}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="mt-6">
                      <label className="cursor-pointer flex items-center gap-2">
                        <Field
                          type="checkbox"
                          name="privacyPolicy"
                          className="max-w-[16px] cursor-pointer"
                        />
                        <p className="text-[#495057] text-xs font-normal leading-[130%] tracking-[-0.12px]">
                          I agree to{" "}
                          <span className="text-[#495057] text-xs font-normal leading-[130%] tracking-[-0.12px] underline">
                            Privacy Policy
                          </span>
                        </p>
                      </label>
                    </div>
                    {errors.privacyPolicy && touched.privacyPolicy && (
                      <div className="mt-[10px]">
                        <p className="text-[13px] font-normal leading-[100%] text-red-500">
                          {errors.privacyPolicy}
                        </p>
                      </div>
                    )}

                    <div>
                      <button
                        type="submit"
                        className="mt-6 py-4 px-6 lg:py-[14px] lg:px-[22px] 2xl:py-4 2xl:px-6 border-none cursor-pointer rounded bg-[#f35218] text-white text-xs font-normal leading-[100%] tracking-[-0.12px] uppercase transition-all duration-300 hover:rounded-[10px] md:hover:rounded-[30px] active:rounded-[30px]"
                      >
                        Submit
                      </button>
                    </div>
                    <div className="mt-10">
                      <div className="py-5 border-t border-[#cecece]">
                        <div className="flex justify-between items-center">
                          <h4 className="text-[#333] text-[18px] font-semibold leading-[110%] tracking-[-0.56px] sm:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px] 3xl:text-[28px]">
                            Schedule a demo
                          </h4>
                          <div
                            className="cursor-pointer"
                            onClick={() => setOpenDemo(!openDemo)}
                          >
                            {openDemo ? (
                              <img
                                src="/plus.svg"
                                alt="plus"
                                className="block max-w-[20px] lg:max-w-[20px] xl:max-w-[22px] 2xl:max-w-[24px]"
                              />
                            ) : (
                              <img
                                src="/dash.svg"
                                alt="dash"
                                className="block max-w-[20px] lg:max-w-[20px] xl:max-w-[22px] 2xl:max-w-[24px]"
                              />
                            )}
                          </div>
                        </div>

                        {openDemo && (
                          <p className="mt-3 text-[#525d6b] text-xs font-normal leading-[130%] tracking-[-0.12px]">
                            Answer Lorem ipsum text etc
                          </p>
                        )}
                      </div>

                      <div className="py-5 border-t border-[#cecece]">
                        <div className="flex justify-between items-center">
                          <h4 className="text-[#333] text-[18px] font-semibold leading-[110%] tracking-[-0.56px] sm:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px] 3xl:text-[28px]">
                            General Enquiries
                          </h4>
                          <div
                            className="cursor-pointer"
                            onClick={() => setOpenEnquiries(!openEnquiries)}
                          >
                            {openEnquiries ? (
                              <img
                                src="/plus.svg"
                                alt="plus"
                                className="block max-w-[20px] lg:max-w-[20px] xl:max-w-[22px] 2xl:max-w-[24px]"
                              />
                            ) : (
                              <img
                                src="/dash.svg"
                                alt="dash"
                                className="block max-w-[20px] lg:max-w-[20px] xl:max-w-[22px] 2xl:max-w-[24px]"
                              />
                            )}
                          </div>
                        </div>
                        {openEnquiries && (
                          <p className="mt-3 text-[#525d6b] text-xs font-normal leading-[130%] tracking-[-0.12px]">
                            Answer Lorem ipsum text etc
                          </p>
                        )}
                      </div>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
