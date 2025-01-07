import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button"; // Assuming you have a button component in this path

export default function NotFound() {
    return (
        <main>
            <Navbar />
            <section className="not-found" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', textAlign: 'center' }}>
                <div style={{ textAlign: 'center', fontSize: '5em', marginTop: '20px' }}>
                    <strong>The page you've tried to reach doesn't exist</strong>
                </div>
                <div style={{ textAlign: 'center', fontSize: '2em', marginTop: '10px' }}>
                    <strong>Error Code: 404</strong>
                </div>
                <div style={{ textAlign: 'center', marginTop: '20px' }} className="bg-red-600 text-white rounded-lg">
                    <Link href="/">
                        <Button variant="destructive">Go Home</Button>
                    </Link>
                </div>
            </section>
        </main>
    );
}
