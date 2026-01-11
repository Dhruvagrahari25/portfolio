import React from 'react'
import { WindowControls } from '#components'
import WindowWrapper from '#hoc/WindowWrapper.jsx'
import useWindowStore from '#store/window'

const Text = () => {
    const { windows } = useWindowStore();
    const data = windows.txtfile?.data;

    if(!data) return null;

    const { name, image, subtitle, description } = data;

    return (
        <>
            <div id="window-header">
                <WindowControls target="txtfile" />
                <h2>{name}</h2>
                <div className="w-20"></div>
            </div>
            <div className="bg-white p-5">
                {image ? (<div className="w-full">
                    <img src={image} alt={name} className="w-full h-auto rounded"/>
                </div>) : null}

                {subtitle ? (<h3 className="text-lg font-semibold mt-2">{subtitle}</h3>) : null}

                {Array.isArray(description) ? (
                    description.map((para, index) => (
                        <p key={index} className="text-gray-800 mt-4">{para}</p>
                    ))
                ) : null}
            </div>
        </>
    );
}

const TextWindow = WindowWrapper(Text, "txtfile");
export default TextWindow;
