import React from 'react'
import WindowWrapper from "#hoc/WindowWrapper.jsx";

const Safari = () => {
    return (
        <div>Safari</div>
    )
}
const SafariWindow = WindowWrapper(Safari, "safari");
export default SafariWindow;
