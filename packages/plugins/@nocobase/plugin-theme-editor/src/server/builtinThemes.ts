/**
 * This file is part of the NocoBase (R) project.
 * Copyright (c) 2020-2024 NocoBase Co., Ltd.
 * Authors: NocoBase Team.
 *
 * This project is dual-licensed under AGPL-3.0 and NocoBase Commercial License.
 * For more information, please refer to: https://www.nocobase.com/agreement.
 */

import { ThemeItem } from '../types';

/** antd 默认主题 */
export const defaultTheme: Omit<ThemeItem, 'id'> = {
  config: {
    name: 'Default',
  },
  optional: true,
  isBuiltIn: true,
  uid: 'default',
  default: process.env.__E2E__ ? true : false,
};

export const dark: Omit<ThemeItem, 'id'> = {
  config: {
    name: 'Dark',
    // @ts-ignore
    algorithm: 'darkAlgorithm',
  },
  optional: true,
  isBuiltIn: true,
  uid: 'dark',
  default: false,
};

export const compact: Omit<ThemeItem, 'id'> = {
  config: {
    name: 'Compact',
    // @ts-ignore
    algorithm: 'compactAlgorithm',
    token: {
      fontSize: 16,
    },
  },
  optional: true,
  isBuiltIn: true,
  uid: 'compact',
  default: false,
};

/** 暗黑模式 + 鲜亮紫色强调色 */
export const sleekDark: Omit<ThemeItem, 'id'> = {
  config: {
    name: 'Sleek dark',
    // @ts-ignore
    algorithm: 'darkAlgorithm',
    token: {
      colorPrimary: '#7c5cfc',
      colorInfo: '#7c5cfc',
      colorBgBase: '#09090b',
      borderRadius: 8,
      colorBgHeader: '#09090b',
      colorPrimaryHeader: '#09090b',
      colorTextHeaderMenu: '#a1a1aa',
      colorTextHeaderMenuHover: '#fafafa',
      colorTextHeaderMenuActive: '#fafafa',
      colorBgHeaderMenuHover: '#ffffff14',
      colorBgHeaderMenuActive: '#ffffff1f',
      colorSettings: '#a78bfa',
      colorBgSettingsHover: 'rgba(167, 139, 250, 0.08)',
      colorBorderSettingsHover: 'rgba(167, 139, 250, 0.35)',
    },
  },
  optional: true,
  isBuiltIn: true,
  uid: 'sleek_dark',
  default: process.env.__E2E__ ? false : true,
};

/** 明亮多彩模式：鲜艳的洋红主色 + 着色的导航栏和侧边栏 */
export const vibrant: Omit<ThemeItem, 'id'> = {
  config: {
    name: 'Vibrant',
    token: {
      colorPrimary: '#eb2f96',
      colorInfo: '#eb2f96',
      borderRadius: 10,
      colorBgHeader: '#520339',
      colorPrimaryHeader: '#520339',
      colorTextHeaderMenu: '#ffd6e7',
      colorTextHeaderMenuHover: '#ffffff',
      colorTextHeaderMenuActive: '#ffffff',
      colorBgHeaderMenuHover: '#ffffff26',
      colorBgHeaderMenuActive: '#ffffff33',
      colorBgSider: '#fff0f6',
      colorTextSiderMenu: '#9e1068',
      colorTextSiderMenuHover: '#c41d7f',
      colorTextSiderMenuActive: '#c41d7f',
      colorBgSiderMenuHover: '#ffd6e7',
      colorBgSiderMenuActive: '#ffd6e7',
      colorSettings: '#eb2f96',
      colorBgSettingsHover: 'rgba(235, 47, 150, 0.06)',
      colorBorderSettingsHover: 'rgba(235, 47, 150, 0.3)',
    },
  },
  optional: true,
  isBuiltIn: true,
  uid: 'vibrant',
  default: false,
};

/** 同时包含 `紧凑` 和 `暗黑` 两种模式 */
export const compactDark: Omit<ThemeItem, 'id'> = {
  config: {
    name: 'Compact dark',
    // @ts-ignore
    algorithm: ['compactAlgorithm', 'darkAlgorithm'],
    token: {
      fontSize: 16,
      colorBgHeader: '#000000',
      colorPrimaryHeader: '#000000',
    },
  },
  optional: true,
  isBuiltIn: true,
  uid: 'compact_dark',
  default: false,
};
