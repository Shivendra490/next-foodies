import Link from "next/link";
import logoImg from "@/assets/logo.png"
import styles from "./MainHeader.module.css"
import MainHeaderBackGround from "./MainHeaderBackground";
import Image from "next/image";

export default function MainHeader(){
    return <>
    <header className={styles.header}>
        <MainHeaderBackGround/>
        <Link href="/" className={styles.logo}>
            <Image src={logoImg} alt="food Img"/>
        </Link>
        <nav className={styles.nav}>
            <ul>
                <li>
                    <Link href="/meals">Browse Meals</Link>
                </li>
                <li>
                    <Link href="/community">Foodies Community</Link>
                </li>
            </ul>
        </nav>
    </header>
    </>
}