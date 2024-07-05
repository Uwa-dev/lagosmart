import { FOOTER_LINKS} from '../constants/index'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-black flexCenter mb-24">
      <div className="padding-container max-container flex w-full flex-col gap-14">
        <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
          <Link href="/" className="mb-10">
            <Image src="/logo.jpg" alt="logo" width={120} height={62}/>
          </Link>

          <div className='flex flex-wrap gap-1 sm:justify-between md:flex-1'>
          

            {FOOTER_LINKS.map((columns:any, index:any) => (
              <FooterColumn key={index} title={columns.title}>
                <p>{columns.title}</p>
                
                <ul className="regular-14 flex flex-col gap-1 text-gray-300">
                  {Array.isArray(columns.links) &&
                   columns.links.map((link:any, idx:any) => (
                    <li key={idx}>
                      <Link href="/">
                       {link}
                      </Link>
                    </li>
                 ))}
               </ul>
             </FooterColumn>
           ))}

          </div>
        </div>

        <div className="border bg-gray-20" />
           <ul className="regular-14 w-full flex flexBetween text-gray-30 ">
            <li>2010-2024 Lagosmart</li>
            <li>Activate Windows</li>
           </ul>
      </div>
    </footer>
  )
}

type FooterColumnProps = {
  title: string;
  children: React.ReactNode;
}

const FooterColumn = ({ title, children }: FooterColumnProps) => {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="bold-18 whitespace-nowrap">{title}</h4>
      {children}
    </div>
  )
}

export default Footer