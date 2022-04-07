import { monthsUnac } from "../src/months-unac";
test("Conts array contains Jan", () => {
    expect(monthsUnac()).toContain("Jan");
    });
    test("Conts array contains Feb", () => {
        expect(monthsUnac()).toContain("Feb");
        });
        test("Conts array contains March", () => {
            expect(monthsUnac()).toContain("March");
            });
            test("Conts array contains April", () => {
                expect(monthsUnac()).toContain("April");
                });
                test("Conts array contains June", () => {
                    expect(monthsUnac()).toContain("June");
                    });
                    test("Conts array contains May", () => {
                        expect(monthsUnac()).toContain("May");
                        });