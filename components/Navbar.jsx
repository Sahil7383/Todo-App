import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";

const Navbar = () => {
  const navigationRoutes = ["Home", "Completed"];
  const router = useRouter();
  function NavigationLink({ href, text, router }) {
    const isActive = router.asPath === (href === "/Home" ? "/" : href);

    return (
      <Link href={href === "/Home" ? "/" : href}>
        <a
          href={href === "/Home" ? "/" : href}
          className={`${isActive && "nav_item_active"} nav_item mx-3`}
          style={{
            display: "inline-block",
            textDecoration: "none",
            color: "black",
            fontSize: "20px",
          }}
        >
          {text}
        </a>
      </Link>
    );
  }

  return (
    <nav>
      {navigationRoutes.map((singleRoute) => (
        <NavigationLink
          key={singleRoute}
          href={`/${singleRoute}`}
          text={singleRoute}
          router={router}
        />
      ))}
    </nav>
  );
};

export default Navbar;
