import type {UserInfo} from '@vben/types';

import {requestClient} from '#/api/request';
import {requestClientB} from '#/api/requestBaidu';

/**
 *
 * 获取用户信息
 */
export async function getUserInfoApi() {
  return requestClient.get<UserInfo>('/user/info');
}

/**
 * 百度
 */
export async function baidu(data) {
  return requestClientB.get<UserInfo>(`/api?${data}`);
  // const queryString = `https://fanyi-api.baidu.com/api/trans/vip/translate?${objectToQueryString(apiData)}`;
}
