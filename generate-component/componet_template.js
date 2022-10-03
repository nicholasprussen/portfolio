exports.component = name => `import React from 'react';
import styles from './${name}.module.scss';

export interface I${name}Props {}

const ${name} = (props: I${name}Props) => {
    return (
        <></>
    );
};
export default ${name};
`;