import { CapitalizePipe } from './capitalize.pipe';

describe('CapitalizePipe', () => {
  it('create an instance', () => {
    const pipe = new CapitalizePipe();
    expect(pipe).toBeTruthy();
  });

  it('should capitalize a string', () => {
    const pipe = new CapitalizePipe();
    const check = pipe.transform('hello')
    expect(check).toEqual('HELLO')
  })

  it('shouldn\'t return anything', () => {
    const pipe = new CapitalizePipe();
    const check = pipe.transform(414123523);
    expect(check).toEqual(414123523)
  })
});
