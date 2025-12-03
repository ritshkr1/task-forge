import { Dropzone } from './dropzone';

describe('Dropzone', () => {
  it('should create an instance', () => {
    const directive = new Dropzone();
    expect(directive).toBeTruthy();
  });
});
