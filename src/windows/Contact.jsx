import { WindowControls } from '#components';
import { socials } from '#consonants';
import WindowWrapper from '#hoc/WindowWrapper';
import useWindowStore from '#store/window';
import React from 'react'

const Contact = () => {
    const { windows } = useWindowStore();

    return (
        <>
            <div id="window-header">
                <WindowControls target="contact" />
                <h2>Contact Me</h2>
                <div className="w-20"></div>
            </div>

            <div className="p-4">
                <div className='flex gap-4 mb-3'>
                    <img
                        src="/images/dhruv.png"
                        alt="Dhruv"
                        className="h-60 rounded-sm"
                    />
                    <div className="justify-center font-mono">
                        <h3 className="font-bold text-4xl mb-2">
                            Let's Connect!
                        </h3>
                        <p className="text-xl mb-2 text-gray-700 ">
                            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                        </p>
                        <p className="text-gray-500">
                            "Code is like humor. When you have to explain it, it’s bad." 😉
                        </p>
                    </div>
                </div>
                <ul>
                    {socials.map(({ id, bg, link, icon, text }) => (
                        <li key={id} style={{ backgroundColor: bg }}>
                            <a
                                href={link}
                                target='_blank'
                                rel="noopener noreferrer"
                                title={text}
                            >
                                <img src={icon} alt={text} className='size-5' />
                                <p>{text}</p>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

const ContactWindow = WindowWrapper(Contact, "contact");
export default ContactWindow;