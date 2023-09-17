import Link from "next/link";
import { BsBag } from "react-icons/bs";

function CartIcon({ cartCount }) {
  return (
    <Link href="/cart">
      <div className="lg:mr-10 relative">
        <BsBag size="24px" />
        {cartCount > 0 && (
          <div className="w-3 h-3 rounded-full bg-appPrimary text-white absolute -top-1 left-3 p-2.5 flex justify-center items-center text-sm">
            {cartCount}
          </div>
        )}
      </div>
    </Link>
  );
}

export default CartIcon;
