import React from 'react';

const ParentContext = React.createContext({
    parent: '',
    grandparent: '',
    greatgrandparent: '',
    greatgreat: ''
});

export default ParentContext;