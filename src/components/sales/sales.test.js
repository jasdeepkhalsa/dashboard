import SutClass from './sales';
let test = {};

describe('calculateValueAsPercentageWidth', () => {
    beforeEach(() => {
        test.sut = new SutClass();
        test.sut.calc = test.sut.calculateValueAsPercentageWidth;
    });

    it('current 0, target 100 = 0%', () => {
        expect(test.sut.calc(0, 100)).toEqual('0%');
    });

    it('current 50, target 100 = 50%', () => {
        expect(test.sut.calc(50, 100)).toEqual('50%');
    });

    it('current 100, target 100 = 100%', () => {
        expect(test.sut.calc(100, 100)).toEqual('100%');
    });

    afterEach(() => {
        test.sut.calc = null;
        test.sut = null;
        test = {};
    });
});