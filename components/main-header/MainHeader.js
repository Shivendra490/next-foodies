"use client"
import Link from "next/link";
import logoImg from "@/assets/logo.png"
import styles from "./MainHeader.module.css"
import MainHeaderBackGround from "./MainHeaderBackground";
import Image from "next/image";
import { usePathname } from "next/navigation";
import NavLink from "./NavLink";

export default function MainHeader(){
    const path=usePathname()
    return <>
    <header className={styles.header}>
        <MainHeaderBackGround/>
        <Link href="/" className={styles.logo}>
            <Image src={logoImg} alt="food Img"/>
        </Link>
        <nav className={styles.nav}>
            <ul>
                <li>
                    <NavLink href={"/meals"}>Browse Meals</NavLink>
                </li>
                <li>
                    <NavLink href={"/community"}>Foodies Community</NavLink>
                </li>
            </ul>
        </nav>
    </header>
    </>
}