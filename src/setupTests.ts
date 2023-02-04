import '@testing-library/jest-dom';
import Enzyme from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';
import rmwcTestPolyfill from '@rmwc/base/dist/test-polyfill';
Enzyme.configure({ adapter: new Adapter() });

rmwcTestPolyfill();