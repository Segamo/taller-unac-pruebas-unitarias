import {mean} from '../src/mean-array';

test("al resultado de 2.5 (2+3)/2", () =>{
    expect(mean([2,3])).toBe(2.5);
    });
    test("al resultado de 3 (3+3)/2", () =>{
        expect(mean([3,3])).toBe(3);
        });