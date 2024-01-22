"use client";

import { useRouter } from "next/navigation";
import { useContext, useState } from "react";


export type UserCheck = {
    received: "email" | "phone";
    value: string;
    user_exists: boolean;
    opt_sent: boolean;
    otp_channel: string | null;
    obfuscated: string | null;
};

export default function EmailLogin() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [userEmail, setUserEmail] = useState("");

    // * if has account send to login/validate-code page
    // * if not send to login/new-account page
    const sendVerificationCode = async () => {
        const data = {
            user: userEmail,
            channel: "phone",
        };
        // console.log("data", data);

        setIsLoading(true);
        // const csrfToken = getCookie("csrftoken");
        // const response: UserCheck = await postWithStatusCode(
        //     `${process.env.NEXT_PUBLIC_BASE_URL}otp-auth/check-user/`,
        //     csrfToken,
        //     data
        // );
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
        // console.log("response", response);

        // setIsLoading(false);

        let isLoggedIn: boolean;
        if ("response.user_exists") {
            isLoggedIn = true;
            // setLoggedIn(true);

            console.log("User Exists");
            router.push("/timeout-bug/correct");
        } else {
            isLoggedIn = false;
            // setLoggedIn(false);
            console.log("User Doesn't Exist");
            router.push("/timeout-bug/failed");
        }

        
    };

    return (
        <div>
            <label className="block">
                <span className="text-neutral-800">Ingresa tu correo</span>
                <input
                    name="correo"
                    value={userEmail}
                    onChange={(e) => setUserEmail(e.target.value)}
                    type="email"
                    placeholder="correo@provedor.com"
                    className="mt-1"
                    required
                />
            </label>
            {/* {errors.email && <span>Por favor añade un correo valido</span>} */}

            <button
                onClick={sendVerificationCode}
                className="w-full mt-6"
            >
                {isLoading ? "Cargando..." : "Siguiente"}
            </button>
        </div>
    );
}
