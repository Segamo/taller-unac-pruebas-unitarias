import {sum} from '../src/sum-array';

test("al resultado de 2 + 4 =6", () =>{
    expect(sum([2,4])).toBe(6);
    });
    test("al resultado de 4 + 9 =13", () =>{
        expect(sum([4,9])).toBe(13);
        });
        test("al resultado de 1 + 1 =2", () =>{
            expect(sum([1,1])).toBe(2);
            });