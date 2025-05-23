/**
 * @fileoverview Tests for no-bitwise rule.
 * @author Nicholas C. Zakas
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/no-bitwise"),
	RuleTester = require("../../../lib/rule-tester/rule-tester");

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();

ruleTester.run("no-bitwise", rule, {
	valid: [
		"a + b",
		"!a",
		"a && b",
		"a || b",
		"a += b",
		{ code: "a &&= b", languageOptions: { ecmaVersion: 2021 } },
		{ code: "a ||= b", languageOptions: { ecmaVersion: 2021 } },
		{ code: "a ??= b", languageOptions: { ecmaVersion: 2021 } },
		{ code: "~[1, 2, 3].indexOf(1)", options: [{ allow: ["~"] }] },
		{ code: "~1<<2 === -8", options: [{ allow: ["~", "<<"] }] },
		{ code: "a|0", options: [{ int32Hint: true }] },
		{ code: "a|0", options: [{ allow: ["|"], int32Hint: false }] },
	],
	invalid: [
		{
			code: "a ^ b",
			errors: [
				{
					messageId: "unexpected",
					data: { operator: "^" },
					type: "BinaryExpression",
				},
			],
		},
		{
			code: "a | b",
			errors: [
				{
					messageId: "unexpected",
					data: { operator: "|" },
					type: "BinaryExpression",
				},
			],
		},
		{
			code: "a & b",
			errors: [
				{
					messageId: "unexpected",
					data: { operator: "&" },
					type: "BinaryExpression",
				},
			],
		},
		{
			code: "a << b",
			errors: [
				{
					messageId: "unexpected",
					data: { operator: "<<" },
					type: "BinaryExpression",
				},
			],
		},
		{
			code: "a >> b",
			errors: [
				{
					messageId: "unexpected",
					data: { operator: ">>" },
					type: "BinaryExpression",
				},
			],
		},
		{
			code: "a >>> b",
			errors: [
				{
					messageId: "unexpected",
					data: { operator: ">>>" },
					type: "BinaryExpression",
				},
			],
		},
		{
			code: "a|0",
			errors: [
				{
					messageId: "unexpected",
					data: { operator: "|" },
					type: "BinaryExpression",
				},
			],
		},
		{
			code: "~a",
			errors: [
				{
					messageId: "unexpected",
					data: { operator: "~" },
					type: "UnaryExpression",
				},
			],
		},
		{
			code: "a ^= b",
			errors: [
				{
					messageId: "unexpected",
					data: { operator: "^=" },
					type: "AssignmentExpression",
				},
			],
		},
		{
			code: "a |= b",
			errors: [
				{
					messageId: "unexpected",
					data: { operator: "|=" },
					type: "AssignmentExpression",
				},
			],
		},
		{
			code: "a &= b",
			errors: [
				{
					messageId: "unexpected",
					data: { operator: "&=" },
					type: "AssignmentExpression",
				},
			],
		},
		{
			code: "a <<= b",
			errors: [
				{
					messageId: "unexpected",
					data: { operator: "<<=" },
					type: "AssignmentExpression",
				},
			],
		},
		{
			code: "a >>= b",
			errors: [
				{
					messageId: "unexpected",
					data: { operator: ">>=" },
					type: "AssignmentExpression",
				},
			],
		},
		{
			code: "a >>>= b",
			errors: [
				{
					messageId: "unexpected",
					data: { operator: ">>>=" },
					type: "AssignmentExpression",
				},
			],
		},
	],
});
