const add = require("./index")

test("adds 1 + 2 to equal 3", () => {
    expect(add(1,2)).toBe(3);
});

test("adds -2 + 2 to equal 0", () => {
    expect(add(-2,2)).toBe(0);
});

test("adds string + 2 to equal err", () => {
    expect(() => {
        add('hello',2)
    }).toThrow(TypeError('Input is not a number'));
});

