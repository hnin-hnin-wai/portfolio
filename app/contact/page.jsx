"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

import { useForm } from "react-hook-form";
//import { sendEmail } from "@/utils/send-email";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "+1 (641) 233 2352",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "hninhnin.wai.career@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Fairfield, IA",
  },
];

const Contact = () => {
  const formData = {
    name: "",
    email: "",
    message: "",
  };

  const { register, handleSubmit } = useForm(formData);

  function onSubmit(formData) {
    // sendEmail(formData);
    console.log(formData);
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[20px] rounded">
          {/* form */}
          <div className="min-h-[60vh] w-full">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-6 p-5 bg-[#27272c] rouded-xl max-w-[700px] mx-auto"
            >
              <h3 className="text-3xl text-accent">Let's connect!</h3>
              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  type="Name"
                  placeholder="Name"
                  {...register("name", { required: true })}
                />
                <Input
                  type="email"
                  placeholder="Email"
                  {...register("email", { required: true })}
                />
              </div>
              {/* Textarea */}
              <Textarea
                className="h-[200px]"
                placeholder="Type your message here"
                {...register("message", { required: true })}
              />
              {/*  btn */}
              <Button type="submit" size="md" className="max-w-40">
                Send message
              </Button>
            </form>
          </div>

          {/* Info */}
          <div className="flex-1 flex items-center xl:flex-row xl:justify-end order-1 xl:order-none mb-8 xl:mb-0  w-full">
            {
              <ul className="flex flex-col gap-10">
                {info.map((item, index) => {
                  return (
                    <li key={index} className="flex items-center gap-6">
                      <div className="w-[20px] h-[20px] xl:w-[30px] xl:h-[30px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                        <div className="text-[20px]">{item.icon}</div>
                      </div>
                      <div className="flex-1">
                        <p className="text-white/60">{item.title}</p>
                        <h3 className="text-md">{item.description}</h3>
                      </div>
                    </li>
                  );
                })}
              </ul>
            }
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
