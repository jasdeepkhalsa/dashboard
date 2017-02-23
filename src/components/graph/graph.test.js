import SutClass from './graph';

describe('formatDate', () => {
    let tests = [
      {name: 'epoch', input: 1451606400000, output: '01 Jan 2016'},
      {name: 'string date', input: '2016-01-01', output: '01 Jan 2016'},
      {name: 'an empty string with an empty string', input: '', output: ''},
      {name: 'undefined value with an empty string', input: undefined, output: ''},
      {name: 'not a number (NaN) with an empty string', input: NaN, output: ''}
    ];

    tests.forEach((test) => {
        it('correctly handles ' + test.name, () => {
            let sut = new SutClass();
            expect(sut.formatDate(test.input)).toEqual(test.output);
            sut = null;
        });
    });
});

describe('formatMonth', () => {
    let tests = [
      {name: 'month 0 (Jan)', input: 0, output: 'Jan'},
      {name: 'month 1 (Feb)', input: 1, output: 'Feb'},
      {name: 'month 2 (Mar)', input: 2, output: 'Mar'},
      {name: 'month 3 (Apr)', input: 3, output: 'Apr'},
      {name: 'month 4 (May)', input: 4, output: 'May'},
      {name: 'month 5 (Jun)', input: 5, output: 'Jun'},
      {name: 'month 6 (Jul)', input: 6, output: 'Jul'},
      {name: 'month 7 (Aug)', input: 7, output: 'Aug'},
      {name: 'month 8 (Sep)', input: 8, output: 'Sep'},
      {name: 'month 9 (Oct)', input: 9, output: 'Oct'},
      {name: 'month 10 (Nov)', input: 10, output: 'Nov'},
      {name: 'month 11 (Dec)', input: 11, output: 'Dec'},
      {name: 'not a number (NaN)', input: NaN, output: ''},
      {name: 'undefined', input: undefined, output: ''}
    ];

    tests.forEach((test) => {
        it('correctly handles ' + test.name, () => {
            let sut = new SutClass();
            expect(sut.formatMonth(test.input)).toEqual(test.output);
            sut = null;
        });
    });
});