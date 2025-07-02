import {
  registerMicroApps, start, initGlobalState, MicroAppStateActions
} from 'qiankun';
// import { prefix } from './config';
const prefix = ''

export interface AppItem {
  name: string
  entry: string
  container: string
  activeRule: string
}
export type { MicroAppStateActions };

// 注册微应用
const registerApp = (apps: AppItem[]) => {
  registerMicroApps(apps);
  // 启动
  start({ prefetch: true });
};

const initialState = { closeLoading: false };
// 全局方法
const globalActions: MicroAppStateActions = initGlobalState(initialState);

interface ILItem {
  name: string
  entry: string
}
// 微应用list
const appList: ILItem[] = [
  { name: 'reactApp', entry: '//localhost:3001' },
];
const microApps = appList?.map(({ name, entry }) => ({
  name,
  entry,
  container: '#container',
  activeRule: `${prefix}/${name}`,
  props: { prefix: `${prefix}/${name}`, entry }
})) ?? [];

export { globalActions, microApps };

export default registerApp;
