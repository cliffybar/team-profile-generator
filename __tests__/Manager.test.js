const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

test("sets officeNumber", () => {
    const officeNumber = 2;
    const manager = new Manager("David", 1, "david@aol.com", officeNumber);
    expect(manager.officeNumber).toBe(officeNumber);
});

test("sets officeNumber using getOfficeNumber()", () => {
    const officeNumber = 2;
    const manager = new Manager("David", 1, "david@aol.com", 2);
    expect(manager.getOfficeNumber()).toBe(officeNumber);
});

test("returning /* Manager */ using getRole()", () => {
    const test = "Manager";
    const manager = new Manager("David", 1, "david@aol.com", 2);
    expect(manager.getRole()).toBe(test);
});