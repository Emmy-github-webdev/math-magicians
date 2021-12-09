import calculate from '../logic/calculate';

const obj = {
  next: null,
  total: null,
  operation: null,
};

describe('Check calculation methods', () => {
  it('Function should return an object', () => {
    expect(typeof (calculate(obj, 'AC'))).toBe('object');
  });

  it('AC button should work without error', () => {
    expect(calculate(obj, 'AC')).toEqual(obj);
  });
});

describe('Check click button', () => {
  it('Button value should work without error', () => {
    obj.next = '0';
    expect(calculate(obj, '0')).toEqual({});
  });

  it('Buttons value click should exist', () => {
    obj.operation = '+';
    obj.next = '6';
    const newValue = calculate(obj, '3');
    expect(newValue.next).toBe('63');
  });

  it('Object is null', () => {
    obj.operation = null;
    obj.next = '6';
    const newValue = calculate(obj, '3');
    expect(newValue.next).toBe('63');
    expect(newValue.total).toBeNull();
  });

  it('Return number if there is no operation', () => {
    obj.operation = null;
    obj.next = null;
    const newValue = calculate(obj, '3');
    expect(newValue.next).toBe('3');
    expect(newValue.total).toBeNull();
  });

  it('If button is .', () => {
    obj.next = '3.4';
    const newValue = calculate(obj, '.');
    expect(newValue.next).toBe('3.4');
  });

  it('If button is . and operation', () => {
    obj.operation = '+';
    obj.next = null;
    const newValue = calculate(obj, '.');
    expect(newValue.next).toBe('0.');
  });

  it('If buttons have .', () => {
    obj.total = '0.2';
    obj.operation = null;
    obj.next = null;
    expect(calculate(obj, '.')).toEqual({});
  });

  it('If button is =', () => {
    obj.total = '5';
    obj.next = '1';
    obj.operation = '+';
    const newValue = calculate(obj, '=');
    expect(newValue.total).toBe('6');
  });

  it('If button is ÷', () => {
    obj.total = '10';
    obj.next = '5';
    obj.operation = '÷';
    const newValue = calculate(obj, '=');
    expect(newValue.total).toBe('2');
  });

  it('If button next value exist', () => {
    obj.next = '3';
    const newValue = calculate(obj, '+/-');

    expect(newValue.next).toBe('-3');
  });
});
