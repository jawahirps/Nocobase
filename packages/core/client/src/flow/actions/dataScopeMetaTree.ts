/**
 * This file is part of the NocoBase (R) project.
 * Copyright (c) 2020-2024 NocoBase Co., Ltd.
 * Authors: NocoBase Team.
 *
 * This project is dual-licensed under AGPL-3.0 and NocoBase Commercial License.
 * For more information, please refer to: https://www.nocobase.com/agreement.
 */

import type { MetaTreeNode } from '@nocobase/flow-engine';
import { mergeItemMetaTreeForAssignValue } from '../components/FieldAssignValueInput';

export function mergeDataScopeRightMetaTree(baseTree: MetaTreeNode[], overrideTree: MetaTreeNode[]) {
  if (!overrideTree.length) return baseTree;
  const merged = [...baseTree];
  const overrideItem = overrideTree.find((node) => node?.name === 'item');
  overrideTree.forEach((node) => {
    if (node?.name === 'item') return;
    const index = merged.findIndex((item) => item?.name === node?.name);
    if (index >= 0) {
      merged[index] = node;
    } else {
      merged.push(node);
    }
  });
  return overrideItem ? mergeItemMetaTreeForAssignValue(merged, [overrideItem]) : merged;
}
