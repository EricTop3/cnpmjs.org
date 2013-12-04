/*!
 * cnpmjs.org - controllers/registry/module.js
 *
 * Copyright(c) cnpmjs.org and other contributors.
 * MIT Licensed
 *
 * Authors:
 *  dead_horse <dead_horse@qq.com>
 *  fengmk2 <fengmk2@gmail.com> (http://fengmk2.github.com)
 */

'use strict';

/**
 * Module dependencies.
 */

var MOCK_MODULE_DATA = {
  _id: 'mock',
  _rev: '3-mock',
  name: 'mock',
  description: 'mock module',
  versions: {
    '0.0.0': {}
  }
};

exports.show = function (req, res) {
  res.json(MOCK_MODULE_DATA);
};

exports.add = function (req, res) {
  var params = req.params;
  if (params.module === 'exist') {
    res.statusCode = 409;
    return res.json( { error: 'conflict', reason: 'Document update conflict.' });
  }
  res.statusCode = 201;
  res.end();
};
