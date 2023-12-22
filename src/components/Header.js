import { authOptions } from '@/app/api/auth/[..nextauth]/route';
import { getServerSession } from 'next-auth';
import Link from 'next/link';

const Header = async () => {
    const session = await getServerSession(authOptions)
    console.log(session)
    return (
        <header className="bg-white border-b py-4">
            <div className="max-w-4xl flex justify-between mx-auto px-6">
                <div className="flex items-center gap-6">
                    <Link href={'/'} className="flex items-center gap-2 text-blue-500">
                        {/* <FontAwesomeIcon icon={faLink} className="text-blue-500" /> */}
                        <span className="font-bold">LinkList</span>
                    </Link>
                    <nav className="flex items-center gap-4 text-slate-500 text-sm">
                        <Link href={'/about'}>About</Link>
                        <Link href={'/pricing'}>Pricing</Link>
                        <Link href={'/contact'}>Contact</Link>
                    </nav>
                </div>
                <nav className='flex items-center gap-4 text-sm text-slate-500'>
                    <Link href={'/login'}>Sign In</Link>
                    <Link href={'/register'}>Create Account</Link>
                </nav>
            </div>
        </header>
    )
}

export default Header