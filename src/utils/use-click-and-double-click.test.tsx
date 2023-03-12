import {renderHook} from '@testing-library/react';
import {act} from 'react-dom/test-utils';
import {useClickAndDoubleClick} from './use-click-and-double-click';

jest.useFakeTimers();

describe('useClickAndDoubleClick', () => {
  it('should call onClick function on single click', () => {
    const onClick = jest.fn();
    const onDoubleClick = jest.fn();

    const {result} = renderHook(() => useClickAndDoubleClick({onClick, onDoubleClick}));

    act(() => {
      result.current.onClick('single click');
    });

    act(() => {
      setTimeout(() => {
        expect(onClick).toHaveBeenCalled();
        expect(onDoubleClick).not.toHaveBeenCalled();
      }, 500);
    });
  });

  it('should call onDoubleClick function on double click', () => {
    const onClick = jest.fn();
    const onDoubleClick = jest.fn();

    const {result} = renderHook(() => useClickAndDoubleClick({onClick, onDoubleClick}));

    act(() => {
      result.current.onClick('first click');
      result.current.onDoubleClick('double click');
    });

    expect(onClick).not.toHaveBeenCalled();
    expect(onDoubleClick).toHaveBeenCalledWith('double click');
  });

  it('should not call onClick function if double click is detected within the delay time', () => {
    const onClick = jest.fn();
    const onDoubleClick = jest.fn();

    const {result} = renderHook(() => useClickAndDoubleClick({onClick, onDoubleClick}));

    act(() => {
      result.current.onClick('first click');
      setTimeout(() => result.current.onClick('second click'), 100);
      setTimeout(() => result.current.onClick('third click'), 300);
    });

    expect(onClick).not.toHaveBeenCalled();
    expect(onDoubleClick).not.toHaveBeenCalled();

    act(() => {
      setTimeout(() => {
        expect(onClick).toHaveBeenCalledWith('third click');
        expect(onDoubleClick).not.toHaveBeenCalled();
      }, 500);
    });
  });
});
