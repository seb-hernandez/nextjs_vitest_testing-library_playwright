import {sum} from "./sum";

describe('sum', function () {
    it('should return correct sum', function () {
        const res = sum(1,1)
        expect(res).toEqual(2)
    })
})
