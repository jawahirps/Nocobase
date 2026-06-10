/**
 * This file is part of the NocoBase (R) project.
 * Copyright (c) 2020-2024 NocoBase Co., Ltd.
 * Authors: NocoBase Team.
 *
 * This project is dual-licensed under AGPL-3.0 and NocoBase Commercial License.
 * For more information, please refer to: https://www.nocobase.com/agreement.
 */

import { Migration } from '@nocobase/server';
import { sleekDark, vibrant } from '../builtinThemes';

export default class extends Migration {
  appVersion = '<2.0.58';
  async up() {
    const repository = this.db.getRepository('themeConfig');
    if (!repository) {
      return;
    }

    const sleekDarkCount = await repository.count({
      filter: {
        uid: sleekDark.uid,
      },
    });
    if (sleekDarkCount === 0) {
      await this.db.sequelize.transaction(async (t) => {
        await repository.update({
          values: {
            default: false,
          },
          filter: {
            default: true,
          },
          transaction: t,
        });
        await repository.create({
          values: {
            ...sleekDark,
            default: true,
          },
          transaction: t,
        });
      });
    }

    const vibrantCount = await repository.count({
      filter: {
        uid: vibrant.uid,
      },
    });
    if (vibrantCount === 0) {
      await repository.create({
        values: vibrant,
      });
    }
  }

  async down() {}
}
