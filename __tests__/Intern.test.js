const Intern = require("../lib/Intern");

test("sets school", () => {
    const school = "UT Austin";
    const intern = new Intern("David", 1, "david@aol.com", school);
    expect(intern.school).toBe(school);
});

test("sets github username using getSchool()", () => {
    const school = "UT Austin";
    const intern = new Intern("David", 1, "david@aol.com", "UT Austin");
    expect(intern.getSchool()).toBe(school);
});

test("returning /* Intern */ using getRole()", () => {
    const test = "Intern";
    const intern = new Intern("David", 1, "david@aol.com", "cliffybar");
    expect(intern.getRole()).toBe(test);
});