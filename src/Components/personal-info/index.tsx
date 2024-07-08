import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z, ZodType } from "zod";
import clsx from "clsx";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Header from "../header";
import { motion } from "framer-motion";

type FormData = {
  name: string;
  email: string;
  phoneNumber: string;
};

const schema: ZodType<FormData> = z.object({
  name: z
    .string()
    .nonempty({ message: "Can't be empty" })
    .regex(/^[a-zA-Z]+(([' -][a-zA-Z ])?[a-zA-Z]*)*$/, {
      message: "Invalid name format",
    })
    .min(2, { message: "min 2 characters long." })
    .max(40, { message: "max 40 characters long." }),
  email: z
    .string()
    .nonempty({ message: "Can't be empty" })
    .email({ message: "Email address is invalid." })
    .max(40, { message: "max 40 characters long." }),
  phoneNumber: z
    .string()
    .nonempty({ message: "Can't be empty" })
    .regex(/^[0-9]+$/, { message: "Must be a number" })
    .min(9, { message: "min numbers 9" })
    .max(15, { message: "max numbers 15" }),
});

function PersonalInfo() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      phoneNumber: "",
    },
  });

  const navigate = useNavigate();

  useEffect(() => {
    const savedData = localStorage.getItem("formData");
    if (savedData) {
      const formData = JSON.parse(savedData);
      setValue("name", formData.name);
      setValue("email", formData.email);
      setValue("phoneNumber", formData.phoneNumber);
    }
  }, [setValue]);

  const onSubmit = (data: FormData) => {
    localStorage.setItem("formData", JSON.stringify(data));
    navigate("/select-plan");
    return data;
  };

  return (
    <div className="lg:items-center min-h-[100vh] relative flex justify-center">
      <div className="lg:translate-y-0 lg:p-[1rem] lg:flex lg:justify-between lg:max-w-[60rem] lg:h-[38rem] h-max px-[1.5rem] py-[2rem] mx-[1rem] bg-[#FFF] rounded-xl w-full max-w-[23rem] translate-y-[7rem]">
        <div className="lg:flex hidden">
          <Header />
        </div>
        <div className="lg:pr-[6rem] lg:pt-[3.5rem]">
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="lg:max-w-[28rem] mb-[1.4rem] max-w-[15rem]">
              <h1 className="lg:text-[2rem] lg:leading-[2.2rem] text-[1.5rem] leading-[1.7rem] font-[700] mb-[0.6rem] text-[#022959]">
                Personal info
              </h1>
              <span className="lg:text-[1rem] lg:leading-[1.5rem] lg:mb-[2rem] text-[1rem] leading-[1.5rem] font-[400] text-[#9699AA]">
                Please provide your name, email address, and phone number.
              </span>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="lg:mb-[1.5rem] mb-[1rem]">
                <div className="flex justify-between gap-[1rem]">
                  <h3 className="lg:text-[0.9rem] lg:leading-[1rem] lg:mb-[0.5rem] text-[0.8rem] leading-[0.9rem] font-[500] text-[#022959] mb-[0.2rem]">
                    Name
                  </h3>
                  {errors.name && (
                    <span className="text-[0.7rem] leading-[1rem] font-[700] italic text-[#EE374A] pr-[0.5rem]">
                      {errors.name?.message}
                    </span>
                  )}
                </div>
                <input
                  {...register("name")}
                  type="text"
                  placeholder="e.g. Stephen King"
                  className={clsx(
                    errors.name ? "border-[#EE374A]" : "border-[#D6D9E6]",
                    "text-[1rem] leading-[1.1rem] font-[500] text-[#9699AA] w-full outline-none border-[0.08rem] px-[1rem] py-[0.8rem] rounded-lg hover:border-[#483EFF]"
                  )}
                />
              </div>
              <div className="lg:mb-[1.5rem] mb-[1rem]">
                <div className="flex justify-between gap-[1rem]">
                  <h3 className="lg:text-[0.9rem] lg:leading-[1rem] lg:mb-[0.5rem] text-[0.8rem] leading-[0.9rem] font-[500] text-[#022959] mb-[0.2rem]">
                    Email Address
                  </h3>
                  {errors.email && (
                    <span className="text-[0.7rem] leading-[1rem] font-[700] italic text-[#EE374A] pr-[0.5rem]">
                      {errors.email?.message}
                    </span>
                  )}
                </div>
                <input
                  {...register("email")}
                  type="text"
                  placeholder="e.g. stephenking@lorem.com"
                  className={clsx(
                    errors.email ? "border-[#EE374A]" : "border-[#D6D9E6]",
                    "text-[1rem] leading-[1.1rem] font-[500] text-[#9699AA] w-full outline-none border-[0.08rem] px-[1rem] py-[0.8rem] rounded-lg hover:border-[#483EFF]"
                  )}
                />
              </div>
              <div>
                <div className="flex justify-between gap-[1rem]">
                  <h3 className="lg:text-[0.9rem] lg:leading-[1rem] lg:mb-[0.5rem] text-[0.8rem] leading-[0.9rem] font-[500] text-[#022959] mb-[0.2rem]">
                    Phone Number
                  </h3>
                  {errors.phoneNumber && (
                    <span className="text-[0.7rem] leading-[1rem] font-[700] italic text-[#EE374A] pr-[0.5rem]">
                      {errors.phoneNumber?.message}
                    </span>
                  )}
                </div>
                <input
                  {...register("phoneNumber")}
                  type="text"
                  maxLength={15}
                  placeholder="e.g. +1 234 567 890"
                  className={clsx(
                    errors.phoneNumber
                      ? "border-[#EE374A]"
                      : "border-[#D6D9E6]",
                    "text-[1rem] leading-[1.1rem] font-[500] text-[#9699AA] w-full outline-none border-[0.08rem] px-[1rem] py-[0.8rem] rounded-lg hover:border-[#483EFF]"
                  )}
                />
              </div>
            </form>
          </motion.div>
          <div className="lg:flex hidden absolute bottom-0 right-[7.55rem] py-[2rem]">
            <button
              onClick={handleSubmit(onSubmit)}
              className="text-[1rem] leading-[1.2rem] font-[500] text-[#FFF] px-[1rem] py-[0.8rem] bg-[#022959] hover:bg-[#164A8A] rounded-md outline-none transition-all duration-200"
            >
              Next Step
            </button>
          </div>
        </div>
      </div>
      <div className="lg:hidden flex items-center justify-end absolute bottom-0 left-0 right-0 p-[1rem] bg-[#FFF]">
        <button
          onClick={handleSubmit(onSubmit)}
          className="text-[1rem] leading-[1rem] font-[500] text-[#FFF] px-[1rem] py-[0.8rem] bg-[#022959] hover:bg-[#164A8A] rounded-md outline-none transition-all duration-200"
        >
          Next Step
        </button>
      </div>
    </div>
  );
}
export default PersonalInfo;
