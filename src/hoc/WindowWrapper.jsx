import React, {useLayoutEffect, useRef} from 'react'
import useWindowStore from "#store/window.js";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import { Draggable} from "gsap/Draggable";

const WindowWrapper = (Component, windowKey) => {
    const Wrapped = (props) => {
        const { focusWindow, windows } = useWindowStore();
        const { isOpen, zIndex } = windows[windowKey];
        const ref = useRef(null);

        useGSAP(() => {
            const elmnt = ref.current;
            if(!elmnt || !isOpen) return;

            elmnt.style.display = "block";

            gsap.fromTo(elmnt,
                 {scale:0.6, opacity:0, y:40},
                {scale: 1, opacity:1 , y:0, duration: 0.5, ease:"power3.out"},
            );
        },[isOpen]);

        useGSAP(() => {
            const elmnt = ref.current;
            if(!elmnt) return;

            const [instance] = Draggable.create(elmnt, { onPress: () => focusWindow(windowKey)});

            return () => instance.kill();
        }, []);

        useLayoutEffect(() => {
            const elmnt = ref.current;
            if(!elmnt) return;
            elmnt.style.display = isOpen ? "block" : "none";
        }, [isOpen]);

        return <section
                    id={windowKey}
                    ref={ref}
                    style={{zIndex}}
                    className="absolute"
                >
            <Component {...props}/>
        </section>
    }
    Wrapped.displayName = `WindowWrapper(${Component.displayName || Component.name || "Component"})`;

    return Wrapped;
}
export default WindowWrapper
