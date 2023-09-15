import { Button } from "./ui/button";
import { ClipLoader } from "react-spinners";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import { useState } from "react";

function GoogleButton() {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <Button
      variant="outline"
      type="button"
      onClick={() => setIsLoading(true)}
      disabled={isLoading}
      asChild
    >
      <Link
        href={`${process.env.NEXT_PUBLIC_STRAPI_BACKEND_URL}/api/connect/google`}
      >
        {isLoading && (
          <ClipLoader color="rgba(0, 0, 0, .3)" size={22} className="mr-3" />
        )}
        <FcGoogle className="mr-2" size={18} />
        <span className="uppercase">Google</span>
      </Link>
    </Button>
  );
}

export default GoogleButton;
