'use client'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { signIn } from "next-auth/react"

const LoginWithGoogle = () => {
    const submit = () => {
        signIn()
    }
    return (
        <button
            className='bg-white shadow text-center items-center
                    w-full py-4 flex gap-3 justify-center'
            onClick={submit}
        >
            <span>
                <FontAwesomeIcon
                    icon={faGoogle}
                    className="h-6"
                />
            </span>
            Sign In with Google
        </button>
    )
}

export default LoginWithGoogle