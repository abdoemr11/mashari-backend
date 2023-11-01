"use strict";

import { projects } from "./sampleprojects";

module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/*{ strapi }*/) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  async bootstrap({ strapi }) {
    const test = await strapi.entityService.deleteMany("api::project.project");
    for (const project of projects) {
      await strapi.entityService.create("api::project.project", {
        data: {
          ...project,
        },
      });
    }
  },
};
