/**
 * This file is part of the NocoBase (R) project.
 * Copyright (c) 2020-2024 NocoBase Co., Ltd.
 * Authors: NocoBase Team.
 *
 * This project is dual-licensed under AGPL-3.0 and NocoBase Commercial License.
 * For more information, please refer to: https://www.nocobase.com/agreement.
 */

import { Migration } from '@nocobase/server';
import { sleekDark } from '../builtinThemes';

export default class extends Migration {
  appVersion = '<2.0.58';
  async up() {
    const repository = this.db.getRepository('themeConfig');
    if (!repository) {
      return;
    }

    const count = await repository.count({
      filter: {
        uid: sleekDark.uid,
      },
    });
    if (count > 0) {
      return;
    }

    await repository.create({
      values: sleekDark,
    });
  }

  async down() {}
}
