import Image from 'next/image'

import { ProviderButton } from "../../../ui/buttons"
import google from "./github.png"


function GoogleProvider ({label, ...props}){
    return (
        <ProviderButton>
            <Image 
            src={google}
            layout="fixed"
            width={24}
            height={24}
            />
            <span>{label || "Sign up with Google"}</span>
        </ProviderButton>
    )
}

export default GoogleProvider