const Engineer = require("../lib/Engineer");

test("Can create a github.", () => {
    const testGithub = "TanatswaS";
    const employeeInstance = new Engineer("Tanatswa", 2, "tanatswasingano@gmail.com", testGithub);
    expect(employeeInstance.github).toBe(testGithub);
});

test("Testing getGithub will return github.", () => {
    const testGithub = "TanatswaS";
    const employeeInstance = new Engineer("Tanatswa", 2, "tanatswasingano@gmail.com", testGithub);
    expect(employeeInstance.getGithub()).toBe(testGithub);
});

test("Testing role.", () => {
    const returnValue = "Engineer";
    const employeeInstance = new Engineer("Tanatswa", 2, "tanatswasingano@gmail.com", "TanatswaS");
    expect(employeeInstance.getRole()).toBe(returnValue);
});