import { DurationPipe } from './duration.pipe';

fdescribe('DurationPipe', () => {
  it('should show seconds and prepend zeroes', () => {
    const pipe = new DurationPipe();
    expect(pipe.transform(1)).toBe('0:00:01');
  });

  it('should show minutes and seconds', () => {
    const pipe = new DurationPipe();
    expect(pipe.transform(754)).toBe('0:12:34');
  });

  it('should show hours, minutes and seconds', () => {
    const pipe = new DurationPipe();
    expect(pipe.transform(45296)).toBe('12:34:56');
  });
});
