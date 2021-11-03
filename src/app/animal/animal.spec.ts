import { Animal } from './animal';

describe('Animal', () => {
  it('should create an instance', () => {
    expect(new Animal("name", "species", "veterinarian", "comment", "email","phoneNumber")).toBeTruthy();
  });
});
