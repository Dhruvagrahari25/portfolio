import React, { useState } from 'react';
import clsx from 'clsx';

import { WindowControls } from '#components';
import WindowWrapper from '#hoc/WindowWrapper';
import useWindowStore from '#store/window';
import { photosLinks, gallery } from '#consonants/index.js';

const Photos = () => {
    const { openWindow } = useWindowStore();
    const [activeLocation, setActiveLocation] = useState(photosLinks[0]);

    const renderList = (name, items) =>(
        <div>
            <h3>{name}</h3>
            <ul>
                {items.map((item) => (
                    <li
                        key={item.id}
                        onClick={() => setActiveLocation(item)}
                        className={clsx(item.id === activeLocation.id ? "active" : "not-active")}
                    >
                        <img src={item.icon} className="w-4" alt={item.title}/>
                        <p className="text-sm font-medium truncate">{item.title}</p>
                    </li>
                ))}
            </ul>
        </div>
    );

    return (
        <>
            <div id="window-header">
                <WindowControls target="photos" />
                <h2>Photos</h2>
                <div />
            </div>

            <div className="flex bg-white">
                {/* Sidebar */}
                <aside className="sidebar w-56 border-r">
                    {renderList('Albums', photosLinks)}
                </aside>

                {/* Gallery */}
                <main className="gallery flex-1 p-4 overflow-auto max-h-[60vh]">
                    <ul className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {gallery.map((item) => (
                            <li
                                key={item.id}
                                onClick={() =>
                                    openWindow("imgfile", {
                                        name: `Photo ${item.id}`,
                                        imageUrl: item.img,
                                    })
                                }
                                className="cursor-pointer"
                            >
                                <img
                                    src={item.img}
                                    alt={`Gallery ${item.id}`}
                                    className="max-h-50 rounded"
                                />
                            </li>
                        ))}
                    </ul>
                </main>
            </div>
        </>
    );
};

const PhotosWindow = WindowWrapper(Photos, "photos");
export default PhotosWindow;
