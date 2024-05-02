'use strict';

/**
 * quize service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::quize.quize');
