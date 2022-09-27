exports.page = name => `import type { NextPage } from 'next';
import styles from './${name}.module.scss';

const ${name}: NextPage = () => {
  return (
    <>New Page</>
  );
};
export default ${name};
`;