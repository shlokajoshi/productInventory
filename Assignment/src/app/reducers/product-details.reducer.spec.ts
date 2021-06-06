import { productDetailsReducer, initialState } from './product-details.reducer';

describe('UserDetails Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = productDetailsReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
