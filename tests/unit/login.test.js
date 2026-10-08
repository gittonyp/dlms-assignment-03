import { describe, test, expect } from "vitest";
import { validateLogin } from "../../src/loginValidation.js";

describe("User Login (DLMS-25)", () => {
  test("accepts valid username and password", () => {
    expect(validateLogin("admin", "123456")).toBe("Login successful");
  });

  test("rejects empty username", () => {
    expect(validateLogin("", "123456")).toBe("Username is required");
  });

  test("rejects short password", () => {
    expect(validateLogin("admin", "123")).toBe(
      "Password must be at least 6 characters"
    );
  });
});
