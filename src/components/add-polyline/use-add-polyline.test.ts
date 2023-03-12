import { renderHook } from '@testing-library/react';
import { LeafletMouseEvent } from 'leaflet';
import { expect, it, describe } from '@jest/globals';
import { useAddPolyline } from './use-add-polyline';

import { CreateObjectCallback } from './types';
import { act } from 'react-dom/test-utils';

const mockCb: CreateObjectCallback = () => {
  // mock-cb;
};

const creatLeafletMouseEvent = (latlng?: { lat: number; lng: number }) => {
  return {
    latlng: latlng || { lat: 1, lng: 2 },
  } as unknown as LeafletMouseEvent;
};

describe('useAddPolyline', () => {
  it('points list should be empty on first render', () => {
    const { result } = renderHook(() => useAddPolyline(mockCb));

    expect(result.current.position.length).toBe(0);
  });

  it('should add lines on click', () => {
    const { result } = renderHook(() => useAddPolyline(mockCb));

    act(() => {
      result.current.handleClick(creatLeafletMouseEvent({ lat: 1, lng: 2 }));
      result.current.handleClick(creatLeafletMouseEvent({ lat: 1, lng: 2 }));
    });

    expect(result.current.position.length).toBe(2);
  });

  test('should not call cb when handleDoubleClick is called with less than 2 points', () => {
    const mockCb = jest.fn();
    const { result } = renderHook(() => useAddPolyline(mockCb));

    act(() => {
      result.current.handleClick(creatLeafletMouseEvent({ lat: 1, lng: 2 }));
      result.current.handleDoubleClick();
    });

    expect(mockCb).not.toHaveBeenCalled();
    expect(result.current.position).toEqual([[1, 2]]);
  });

  it('should not call the callback and log an error when handleDoubleClick is called with less than two points', () => {
    const mockCallback = jest.fn();
    const { result } = renderHook(() => useAddPolyline(mockCallback));
    const { handleDoubleClick } = result.current;

    const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {
      //..
    });

    act(() => {
      handleDoubleClick();
    });

    expect(mockCallback).not.toHaveBeenCalled();
    expect(consoleSpy).toHaveBeenCalledWith('Not completed');
    expect(result.current.position).toEqual([]);

    consoleSpy.mockRestore();
  });
});
