import React, { useState, useImperativeHandle } from 'react';

export default React.forwardRef(({ children, label }, ref) => {
    const [visible, setVisible] = useState(false);
    const toggleVisibility = () => setVisible(!visible);

    useImperativeHandle(ref, () => { return { toggleVisibility }; });

    return <>
        {visible && children}
        <button onClick={toggleVisibility}>{visible ? 'Cancel' : label}</button>
    </>;
});