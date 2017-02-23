import SutClass from './stats';
let test = {};

describe('calculateConfigurationsCompleted', () => {
    beforeEach(() => {
        test.sut = new SutClass();
        test.sut.calc = test.sut.calculateConfigurationsCompleted;
    });

    it('0 = 0k', () => {
        expect(test.sut.calc(0)).toEqual('0k');
    });

    it('100 = 100', () => {
        expect(test.sut.calc(100)).toEqual('0.1k');
    });

    it('1000 = 1k', () => {
        expect(test.sut.calc(1000)).toEqual('1k');
    });

    it('10,000 = 10k', () => {
        expect(test.sut.calc(10000)).toEqual('10k');
    });

    it('100,000 = 100k', () => {
        expect(test.sut.calc(100000)).toEqual('100k');
    });

    afterEach(() => {
        test.sut.calc = null;
        test.sut = null;
        test = {};
    });
});