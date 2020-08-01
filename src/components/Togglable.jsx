import React, { useState, useImperativeHandle } from 'react';

export default React.forwardRef(({ children, labelOpen = 'Show', labelClose = 'Cancel' }, ref) => {
    const [visible, setVisible] = useState(false);
    const toggleVisibility = () => setVisible(!visible);

    useImperativeHandle(ref, () => { return { toggleVisibility }; });

    return <>
        {visible && children}
        <button onClick={toggleVisibility}>{visible ? labelClose : labelOpen}</button>
    </>;
});