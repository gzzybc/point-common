import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  /**
   * 你好
   */
  useEffect(() => {
    // 使用浏览器的 API 更新页面标题
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => {
          setCount(count + 1)
      }}>
        Click me
      </button>
    </div>
  );
}

export default Example