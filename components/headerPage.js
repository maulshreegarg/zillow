import Link from "next/link";
import Image from "next/image";
import logoimg from "@/assets/logo.svg";
import classes from "./main-header.module.css";

export default function Header(){
    return (
<header className={classes.logo}>
    <nav className={classes.nav}>
        <ul>
            <li>
                <Link href="/buy">Buy</Link>
            </li>
            <li>
                <Link href="/rent">Rent</Link>
            </li>
            <li>
                <Link href="/sell">Sell</Link>
            </li>
            <li>
                <Link href="/homeloans">Home Loans</Link>
            </li>
            <li>
                <Link href="/agent">Find an Agent</Link>
            </li>
        </ul>
        </nav>
    <Image className={classes.logoimg} src={logoimg}/>
    <nav className={classes.nav}>
    <ul>
            <li>
                <Link href="/">Manage rentals</Link>
            </li>
            <li>
                <Link href="/">Advertise</Link>
            </li>
            <li>
                <Link href="/">Help</Link>
            </li>
            <li>
                <Link href="/">Sign in</Link>
            </li>
        </ul>
 </nav>
</header>
    );
}