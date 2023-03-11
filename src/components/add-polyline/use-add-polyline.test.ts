
import { renderHook } from '@testing-library/react';

import { expect, it, describe } from '@jest/globals';
import { useAddPolyline } from './use-add-polyline';
import { CreateObjectCallback } from './types';


const mockCb: CreateObjectCallback = () => {
  // mock-cb;
};

describe('useAddPolyline', () => {
  it('points list should be empty on first render', () => {
    const { result } = renderHook(() => useAddPolyline(mockCb));

    expect(result.current.position.length).toBe(0);
  });
});
