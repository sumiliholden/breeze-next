import Link from 'next/link'

const NavLink = ({ active = false, children, ...props }) => (
    <Link {...props}>
        <a
            className={`text-xs uppercase py-3 font-bold block ${
                active
                    ? 'text-lightBlue-500 hover:text-lightBlue-600'
                    : 'text-blueGray-700 hover:text-blueGray-500'
            }`}>
            {children}
        </a>
    </Link>
)

export default NavLink
