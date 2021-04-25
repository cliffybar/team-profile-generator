const Engineer = require("../lib/Engineer");

test("sets github username", () => {
    const github = "cliffybar";
    const engineer = new Engineer("David", 1, "david@aol.com", github);
    expect(engineer.github).toBe(github);
});

test("sets github username using getGithub()", () => {
    const github = "cliffybar";
    const engineer = new Engineer("David", 1, "david@aol.com", github);
    expect(engineer.getGithub()).toBe(github);
});

test("returning /* Engineer */ using getRole()", () => {
    const test = "Engineer";
    const engineer = new Engineer("David", 1, "david@aol.com", "cliffybar");
    expect(engineer.getRole()).toBe(test);
});