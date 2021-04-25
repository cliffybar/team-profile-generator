const Employee = require("../lib/Employee");

test("creates employee object", () => {
    const employee = new Employee();
    expect(typeof(employee)).toBe("object");
});

test("sets employee name", () => {
    const name = "David";
    const employee = new Employee(name);
    expect(employee.name).toBe(name);
});

test("sets employee id", () => {
    const id = 1;
    const employee = new Employee("David", id);
    expect(employee.id).toBe(id);
});

test("sets employee email", () => {
    const email = "david@aol.com";
    const employee = new Employee("David", 1, email);
    expect(employee.email).toBe(email);
});

test("sets employee name using getName()", () => {
    const name = "David";
    const employee = new Employee(name);
    expect(employee.getName()).toBe(name); 
});

test("sets employee id using getId()", () => {
    const id = 1;
    const employee = new Employee("David", id);
    expect(employee.getId()).toBe(id);
});

test("sets employee email getEmail()", () => {
    const email = "david@aol.com";
    const employee = new Employee("David", 1, email);
    expect(employee.getEmail()).toBe(email);
});

test("returning /* Employee */ using getRole()", () => {
    const test = "Employee";
    const employee = new Employee("David", 1, "david@aol.com");
    expect(employee.getRole()).toBe(test);
});