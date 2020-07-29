import React from 'react';

export default ({ msg, cls }) => msg && <div className={`${cls} toast`}>{msg}</div>;