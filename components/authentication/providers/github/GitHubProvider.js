import Image from "next/image";

import { ProviderButton } from "ui/buttons";

import github from "./github.png";

function GitHubProvider({ children, ...props }) {
  return (
    <ProviderButton>
      <div>
        <Image
          src={github}
          alt={"logo"}
          layout="fixed"
          width={24}
          height={24}
          quality={30}
        />
        <span> {children}</span>
      </div>
    </ProviderButton>
  );
}

export default GitHubProvider;
