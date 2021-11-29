import Image from 'next/image'

import { ProviderButton } from "../../../ui/buttons"
import github from "./google.png"


function GoogleProvider ({label, ...props}){
    return (
        <ProviderButton>
            <Image 
            src={github}
            layout="fixed"
            width={24}
            height={24}
            />
            <span>{label || "Sign up with Github"}</span>
        </ProviderButton>
    )
}

export default GoogleProvider