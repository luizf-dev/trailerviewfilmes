import { SquarePlay } from "lucide-react";
import Link from "next/link";

function Navbar(){
    return(
        <nav className="flex fixed z-50 justify-between items-center bg-slate-800 w-full p-5">
            <Link href="/"><SquarePlay className="text-amber-400" size={28}/></Link>
            <Link href="/">
            <h1 className="text-amber-400 text-2xl font-bold uppercase">TrailerView</h1>
            </Link>
            <Link href="/sobre">Sobre</Link>
        </nav>
    );
}

export default Navbar;