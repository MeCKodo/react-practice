import React, { useState } from 'react';

function HookWithString() {
  const [string, setString] = useState('abcde');

  return (
    <div>
      <p>Render string is {string} </p>
      <button onClick={() => setString('zxcvb')}>Click me</button>
    </div>
  );
}

function HookWithArray() {
  const [array, setArray] = useState(['a', 'b']);

  return (
    <div>
      <p>Render array is {array.toString()} </p>
      <button onClick={() => setArray(array.concat('c'))}>Click me</button>
    </div>
  );
}

function HookWithObject() {
  const [data, setData] = useState({ name: '二哲', age: 18 });

  return (
    <div>
      <p>
        Render name is {data.name}, age is {data.age}
      </p>
      <button onClick={() => setData({ ...data, name: '二哲儿' })}>
        Click me
      </button>
    </div>
  );
}

const Wrapper = () => {
  return (
    <div>
      <HookWithString />
      <HookWithArray />
      <HookWithObject />
    </div>
  );
};

export default Wrapper;
