import React from 'react'




const NavBar2 = () => {

    const navItems = [
        { name: "Home", icon: <i class="fa-solid fa-house" style="color: #FFD43B;"></i>, path: "/" },
        { name: "About", icon: <i class="fa-regular fa-address-card" style="color: #FFD43B;"></i>, path: "/about" },
        { name: "Contact", icon: <i class="fa-solid fa-address-card" style="color: #FFD43B;"></i>, path: "/contact" },
        { name: "Login", icon: <i class="fa-solid fa-right-to-bracket" style="color: #FFD43B;"></i>, path: "/login" }
    ]
    return (
        <div>
            <nav className='bg-gradient-to-l from-blue-200 to-yellow-200 p-4'>
                <ul className='flex space -x-6'>
                    {
                        navItems.map((item) => (
                            <li>
                                <Link
                                    to={item.path}
                                    className="flex items-center hover:bg-blue-200 hover: p-2">
                                    {item.icon}
                                    <span className='ml-2'>{item.name}</span>
                                </Link>
                            </li>
                        )

                        )
                    }
                </ul>
            </nav>
        </div>
    )
}

export default NavBar2
