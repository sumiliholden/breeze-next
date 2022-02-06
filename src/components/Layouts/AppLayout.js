import Link from 'next/link';
import { useAuth } from '@/hooks/auth'
// components
import Sidebar from "@/Components/Sidebar/Sidebar";
import Navbar from "@/Components/Navbar/Navbar";
import HeaderStats from "@/Components/Headers/HeaderStats";
import Footer from "@/Components/Footers/FooterAdmin";
const AppLayout = ({ header, children }) => {
    const { user } = useAuth({ middleware: 'auth' })

    return (
        <>
            <Sidebar />
            <div className="relative md:ml-64 bg-blueGray-100">
                <Navbar user={user} />
                <HeaderStats />
                <main>{children}</main>
                <Footer />
            </div>
        </>
    )
}

export default AppLayout
