import { AnimalDirective } from './animal.directive';

describe('AnimalDirective', () => {
  it('should create an instance', () => {
    const directive = new AnimalDirective(null);
    expect(directive).toBeTruthy();
  });
});
