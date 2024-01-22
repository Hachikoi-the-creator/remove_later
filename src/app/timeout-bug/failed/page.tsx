"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState, type ChangeEvent } from "react";

export default function Page() {
    const router = useRouter();
    const [timeLeft, setTimeLeft] = useState(13);
    const [loginCode, setLoginCode] = useState("");
    const [intervalVar, setIntervalVar] = useState<NodeJS.Timer | null>(null);

    const [invalidCode, setInvalidCode] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    // number to be able to re-start several times
    const [countdownRestart, setCountdownRestart] = useState(0);

    const handleCodeChange = async (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.currentTarget.value;
        // force to only use numbers
        if (isNaN(+value)) return;
        setLoginCode(value);

        if (invalidCode) setInvalidCode(false);

        if (value.length === 4) {
            setIsLoading(true);
            // console.log("code finished");
            // todo, make the logic for when logins w/phone
            const data = {
                user: "store.email",
                code: value,
            };
            if (Math.random() < 0.5) {
                setTimeLeft(0);
                console.log("all ok");
            } else {
                console.log("something wrong");

                setInvalidCode(true);
            }
            setIsLoading(false);


        };}



        const retryCodeSend = async (medium: "phone" | "email") => {
            setTimeLeft(45);
            setCountdownRestart((prev) => prev + 1);
            setIsLoading(true);
            setTimeout(() => {
                setIsLoading(false)
            }, 2000);

            console.log("existent user res");
        };

        useEffect(() => {
            const interval = setInterval(() => {
                setTimeLeft((prev) => {
                    if (prev === 0) {
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);

            setIntervalVar(interval);
            return () => clearInterval(interval);
        }, [countdownRestart]);

        return (
            <div className="container mb-24 lg:mb-32">
                {isLoading && <div className="bg-white/40 flex items-center justify-center absolute top-0 left-0 w-full h-full z-50">
                    <span className="w-12 h-12 border-[5px] border-primary-500 animate-spin rounded-3xl border-b-[rgba(255,255,255,0)] " />
                </div>}
                <h2 className="my-20 flex items-center justify-center text-3xl font-semibold leading-[115%] text-neutral-900 dark:text-neutral-100 md:text-5xl md:leading-[115%]">
                    FAILED
                </h2>
                <div className="mx-auto max-w-md space-y-6">
                    <form
                        onSubmit={(e) => e.preventDefault()}
                        className="flex flex-col gap-5"
                    >

                        <label htmlFor="login-code">
                            Ingresa el codigo enviado por Watsapp al número{" "}
                            {"store.ofuscadedNumber"}
                            <input
                                type="text"
                                maxLength={4}
                                id="login-code"
                                name="login-code"
                                className="w-full rounded-md bg-lightGrey/30 p-2"
                                value={loginCode}
                                onChange={handleCodeChange}
                            />
                        </label>
WTF
                        {invalidCode && (
                            <span className="text-red-500">
                                El codigo no es correcto
                            </span>
                        )}

                        {timeLeft !== 0 && (
                            <p>Enviar de nuevo en: {timeLeft} segundos</p>
                        )}

                        <button
                            disabled={timeLeft !== 0 || isLoading}
                            onClick={() => retryCodeSend("phone")}
                            className={`w-full mt-6 ${timeLeft !== 0 &&
                                "bg-white text-neutral-400 border border-gray-300 hover:bg-white"
                                }`}
                        >
                            Enviar codigo por WhatsApp
                        </button>

                       

                    </form>
                </div>
            </div>
        );
    }
