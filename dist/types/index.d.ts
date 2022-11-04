import { App } from 'vue';
import './assets/main.scss';
declare function install(app: App): void;
declare const _default: {
    install: typeof install;
};
export default _default;
export * from './components/index.ts';
export * from './constants/index.ts';
export * from './utils/index.ts';
