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
            <img 
                src="/images/adrian.jpg"
                alt="Dhruv"
                className="w-20 rounded-full "
            />
            <h3>Let's connect !</h3>
            <ul>
                {socials.map(({ id, bg, link, icon, text }) => (
                    <li key={id} style={{backgroundColor: bg}}>
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