import { app, db } from '../firebase';
import { test, expect } from 'vitest';
test('useFirebaseApp', () => {
  expect(db.toJSON() != null).toBe(false);
});
