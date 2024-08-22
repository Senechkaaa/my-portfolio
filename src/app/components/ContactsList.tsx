'use client'
import { contacts_info } from '../constants/contacts_info'
import Image from 'next/image'

const ContactsList = () => {
    const handleCopy = (text: string) => {
        navigator.clipboard.writeText(text)
    }

    return (
        <ul className="flex items-center justify-around">
            {contacts_info.map((el) => (
                <li className="flex items-center" key={el.id}>
                    <Image
                        className="mr-3"
                        src={el.src}
                        alt={el.alt}
                        width={65}
                        height={65}
                    />
                    <div className="flex flex-col">
                        <h3 className='text-lg'>{el.title}</h3>
                        <h3
                            className="cursor-pointer font-extrabold"
                            onClick={() => handleCopy(el.text)}
                        >
                            {el.text}
                        </h3>
                    </div>
                </li>
            ))}
        </ul>
    )
}

export default ContactsList
