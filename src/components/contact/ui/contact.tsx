"use client"
import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "~/components/ui/button";
import { toast } from "react-toastify";

interface FormContent {
    name: string;
    email: string;
    message: string;
}

export default function Contact() {
    const [formContent, setFormContent] = useState<FormContent>({
        name: "",
        email: "",
        message: "",
    });
    const [isSending, setIsSending] = useState<boolean>(false);

    const animateText = {
        hidden: { x: 30, opacity: 0 },
        visible: ({ delay }: { delay: number }) => ({
            x: 0,
            opacity: 1,
            transition: {
                delay,
                duration: 0.5,
                ease: "easeInOut",
            },
        }),
    };

    const handleSubmit = async () => {
        if (formContent.name === "") {
            toast.warning("Please enter your name");
            return;
        }
        if (formContent.email === "" || !validateEmail(formContent.email)) {
            toast.warning("Please enter a valid email address");
            return;
        }
        if (formContent.message === "") {
            toast.warning("Please enter a message");
            return;
        }

        setIsSending(true);
        setFormContent({ name: "", email: "", message: "" });

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                body: JSON.stringify(formContent),
            });
            const data = await response.json();
            setIsSending(false);

            if (data.message === "success") {
                toast.success("Message sent successfully!");
                return;
            }

            throw new Error();
        } catch (error) {
            toast.error("Something went wrong, try again please");
        }
    };

    const validateEmail = (email: string): boolean => {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    };

    return (
        <div className="sticky w-full my-0 pt-10 bg-gradient-to-b from-[#141414] to-black tall:top-0 tall:mt-0 tall:h-screen">
            <div className="mx-auto flex h-full w-[90%] flex-col items-center justify-center md:w-auto">
                <div className="mb-5 text-center md:mb-28 ">
                    <motion.h2
                        className="mb-3 text-2xl font-bold font-title text-purple md:text-5xl lg:text-6xl"
                        variants={animateText}
                        custom={{ delay: 0 }}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        Send me a message !
                    </motion.h2>
                    <motion.p
                        className="sm:text-xl md:text-2xl"
                        custom={{ delay: 0.5 }}
                        variants={animateText}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        Got a question, a proposal, or just want
                        <br />
                        to say hello ? Go ahead.
                    </motion.p>
                </div>
                <div className="mb-10 flex w-11/12 max-w-[845px] flex-col items-center justify-center md:w-8/12">
                    <motion.div
                        className="flex flex-col justify-around w-full mb-5 md:mb-20 md:flex-row"
                        custom={{ delay: 1 }}
                        variants={animateText}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <div className="flex flex-col md:mr-10 md:w-1/2">
                            <label htmlFor="name" className="ml-2">Name</label>
                            <input
                                className="outline-none p-4 text-lg bg-transparent border-b border-purple"
                                id="name"
                                placeholder="Enter your name"
                                type="text"
                                required
                                value={formContent.name}
                                onChange={(e) => setFormContent({ ...formContent, name: e.target.value })}
                            />
                        </div>
                        <div className="flex flex-col md:ml-10 md:w-1/2">
                            <label htmlFor="email" className="ml-2">Email</label>
                            <input
                                className="outline-none p-4 text-lg bg-transparent border-b border-purple"
                                id="email"
                                placeholder="Enter your email"
                                type="email"
                                required
                                value={formContent.email}
                                onChange={(e) => setFormContent({ ...formContent, email: e.target.value })}
                            />
                        </div>
                    </motion.div>
                    <motion.div
                        className="flex flex-col w-full"
                        custom={{ delay: 1.5 }}
                        variants={animateText}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <label htmlFor="message" className="ml-2">Message</label>
                        <textarea
                            className="outline-none p-4 text-lg bg-transparent border-b resize-none h-28 border-purple"
                            id="message"
                            placeholder="Enter your message"
                            required
                            minLength={30}
                            value={formContent.message}
                            onChange={(e) => setFormContent({ ...formContent, message: e.target.value })}
                        />
                    </motion.div>
                </div>
                <motion.div
                    custom={{ delay: 1.7 }}
                    variants={animateText}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    onClick={handleSubmit}
                    className="mb-20"
                >
                    <Button
                        className="flex items-center justify-center px-8 py-4 shadow-[2px_2px_#00000069_inset] transition-all duration-100 ease-in-out hover:translate-x-[-1px] hover:bg-white hover:shadow-[1px_1px_#00000069_inset]"
                    >
                        {isSending ?
                            <LoadingIcon />
                            :
                            <span className="font-bold">Send</span>
                        }
                    </Button>
                </motion.div>
            </div>
        </div>
    );
}

function LoadingIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            style={{
                background: "transparent",
                display: "block",
                shapeRendering: "auto",
            }}
            width="30px"
            height="30px"
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid"
            stroke="black"
        >
            <circle
                cx="50"
                cy="50"
                fill="none"
                strokeWidth="10"
                r="35"
                strokeDasharray="164.93361431346415 56.97787143782138"
            >
                <animateTransform
                    attributeName="transform"
                    type="rotate"
                    repeatCount="indefinite"
                    dur="1s"
                    values="0 50 50;360 50 50"
                    keyTimes="0;1"
                ></animateTransform>
            </circle>
        </svg>
    )
}
