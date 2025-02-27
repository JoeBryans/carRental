"use client";

import Link from "next/link";
import Container from "../Container";

// import { useClerk, UserButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { User } from "lucide-react";
import { motion } from "framer-motion";

const NavBar = () => {
  const router = useRouter();
  const { user } = true;
  // const { user } = useClerk();
  console.log(user);

  useEffect(() => {
    //   if (user) {
    //     router.push("/dashboard");
    //   }1F2E4E 0259AA 003879
  }, [user]);

  return (
    <motion.div
      initial={{ opacity: 0, y: -200 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="bg-white shadow-md drop-shadow-sm"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, delay: 0.3, ease: "easeOut" }}
        className="w-full bg-slate-700 text-muted flex items-center justify-around"
      >
        <div className="flex items-center hap-4">@gmail.com</div>
      </motion.div>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.5, ease: "easeOut" }}
          className="navbar bg-base-100 -mt-5"
        >
          <div className="navbar-start">
            <Link href="/" className="font-bold text-2xl ">
              Decar
            </Link>
          </div>
          <div className="navbar-end">
            <div className="md:hidden block">
              <Link href="/sign-in" className="btn bg-white shadow-sm mr-3">
                sign in
              </Link>
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className=" text-center rounded-full">{/* bar */}</div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 px-2 py-3 shadow font-semibold text-xl top-14"
                >
                  <li>
                    <Link href="/model">Cars</Link>
                  </li>
                  <li>
                    <Link href="/model">Blog</Link>
                  </li>

                  <li className="mr-4">
                    <Link href="/brand">About</Link>
                  </li>
                  <li className="mr-4">
                    <Link href="/brand">Service</Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* users */}
            <div className="hidden md:block dropdown dropdown-end ">
              <ul className="menu menu-horizontal px-1 mr-3 items-center text-xl font-semibold w-max ">
                <li>
                  <Link href="/model">Cars</Link>
                </li>
                <li>
                  <Link href="/model">Blog</Link>
                </li>

                <li className="mr-4">
                  <Link href="/brand">About</Link>
                </li>
                <li className="mr-4">
                  <Link href="/brand">Service</Link>
                </li>
                {user ? (
                  <User />
                ) : (
                  <li>
                    <Link
                      href="/sign-in"
                      className="btn bg-white shadow-sm text-xl font-semibold "
                    >
                      sign in
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </motion.div>
      </Container>
    </motion.div>
  );
};

export default NavBar;
