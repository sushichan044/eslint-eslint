/**
 * @fileoverview Helpers to test EventGenerator interface.
 * @author Toru Nagashima
 */
"use strict";

/* globals describe, it -- Mocha globals */

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const assert = require("node:assert");

//------------------------------------------------------------------------------
// Public Interface
//------------------------------------------------------------------------------

module.exports = {
	/**
	 * Overridable `describe` function to test.
	 * @param {string} text A description.
	 * @param {Function} method A test logic.
	 * @returns {any} The returned value with the test logic.
	 */
	describe:
		typeof describe === "function"
			? describe
			: /* c8 ignore next */ function (text, method) {
					return method.apply(this);
				},

	/**
	 * Overridable `it` function to test.
	 * @param {string} text A description.
	 * @param {Function} method A test logic.
	 * @returns {any} The returned value with the test logic.
	 */
	it:
		typeof it === "function"
			? it
			: /* c8 ignore next */ function (text, method) {
					return method.apply(this);
				},

	/**
	 * Does some tests to check a given object implements the EventGenerator interface.
	 * @param {Object} instance An object to check.
	 * @returns {void}
	 */
	testEventGeneratorInterface(instance) {
		this.describe("should implement EventGenerator interface", () => {
			this.it("should have `emitter` property.", () => {
				assert.strictEqual(typeof instance.emitter, "object");
				assert.strictEqual(typeof instance.emitter.emit, "function");
			});

			this.it("should have `enterNode` property.", () => {
				assert.strictEqual(typeof instance.enterNode, "function");
			});

			this.it("should have `leaveNode` property.", () => {
				assert.strictEqual(typeof instance.leaveNode, "function");
			});
		});
	},
};
