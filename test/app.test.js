const test = require("node:test");
const assert = require("node:assert/strict");
const { getMessage } = require("../app");

test("application returns the expected version message", () => {
  assert.equal(
    getMessage(),
    "Version 1 - AWS Native CI/CD is working!"
  );
});