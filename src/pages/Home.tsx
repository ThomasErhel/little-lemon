import Hero from "../components/Hero";
import Nav from "../components/Nav";

export default function Home() {
    return (
        <>
        <header>
            <Nav />
        </header>
        <main>
            <Hero />
        </main>
        </>
    );
}