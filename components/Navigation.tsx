"use client"


import { LayoutPanelLeft, User, BriefcaseBusiness, FolderKanban, Contact } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'


interface NavigationProps {
    isOpen: boolean
}

const Navigation= ({ isOpen }: NavigationProps) => {
    return (
        <div className='flex flex-col justify-between items-center w-full h-full'>
            <div className='relative flex items-center justify-center w-full border-b border-border_color text-center py-3'>
                <Image
                    src="/img/Me2.jpg"
                    width={80}
                    height={80}
                    alt='My profile'
                    className={`${isOpen ? "w-7/12 border-8" : "w-9/12 border-3"} rounded-full border-border_color transition-all duration-300 ease-in-out`}
                />
            </div>
            <ul className="w-full h-full flex flex-col gap-2 justify-center items-center">
                <li className="navitem">
                    <NavLink href='/' icon={LayoutPanelLeft} collapsed={isOpen}>
                        ACCUEIL
                    </NavLink>
                </li>
                <li className="navitem">
                    <NavLink href='/about' icon={User} collapsed={isOpen}>
                        A propos
                    </NavLink>
                </li>
                <li className="navitem">
                    <NavLink href='/parcours' icon={BriefcaseBusiness} collapsed={isOpen}>
                        Parcours
                    </NavLink>
                </li>
                <li className="navitem">
                    <NavLink href='/portfolio' icon={FolderKanban} collapsed={isOpen}>
                        Portfolios
                    </NavLink>
                </li>
                <li className="navitem">
                    <NavLink href='/contact' icon={Contact} collapsed={isOpen}>
                        Contact
                    </NavLink>
                </li>
            </ul>
            <footer className='border-t border-t-border_color w-full'>
                {isOpen
                 ? <p className='py-5 px-2 text-base text-center'>@2025 Mon portfolio powered by NextJS</p>
                 : <p className='py-5 px-2 text-base text-center'>@2025</p>
                }
            </footer>
        </div>
    )
}

interface NavLinkProps {
    href: string
    icon: React.ElementType
    children: React.ReactNode
    collapsed?: boolean
}

function NavLink({ href, icon: Icon, children, collapsed }: NavLinkProps) {
    const pathname = usePathname()

    return (
        <Link
            href={href}
            className={`item flex items-center ${collapsed ? "justify-start pl-9" : "justify-center"} gap-4 text-lg py-1 z-10 uppercase font-semibold hover:cursor-pointer hover:text-foreground transition-all duration-300 ease-in-out ${pathname === href ? "bg-primary text-white" : ""}`}
        >
            <Icon className="h-7 w-7" />
            {collapsed && (
                <p className='tracking-wide'>{children}</p>
            )}
        </Link>
    )
}

export default Navigation