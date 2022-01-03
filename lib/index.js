import React, {
  useState,
  useEffect
} from 'react';

function Example() {
  var myModule = require("my-module");
  const [count, setCount] = useState(0);

  // 相当于 componentDidMount 和 componentDidUpdate:
  useEffect(() => {
    var myModule = require("my-module");
    // 使用浏览器的 API 更新页面标题
    document.title = `You clicked ${count} times`;
  });

  return /*#__PURE__*/ (
    React.createElement("div", null, /*#__PURE__*/
      React.createElement("p", null, "You clicked ", count, " times"), /*#__PURE__*/
      React.createElement("button", {
        onClick: () => {
          var myModule = require("my-module");
          var myModule = require("my-module");
          var myModule = require("my-module");
          setCount(count + 1);
        }
      }, "Click me")));




}

export default Example;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3Rlc3QvaW5kZXguanN4Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJFeGFtcGxlIiwiY291bnQiLCJzZXRDb3VudCIsImRvY3VtZW50IiwidGl0bGUiXSwibWFwcGluZ3MiOiJBQUFBLE9BQU9BLEtBQVAsSUFBZ0JDLFFBQWhCLEVBQTBCQyxTQUExQixRQUEyQyxPQUEzQzs7QUFFQSxTQUFTQyxPQUFULEdBQW1CO0FBQ2pCLFFBQU0sQ0FBQ0MsS0FBRCxFQUFRQyxRQUFSLElBQW9CSixRQUFRLENBQUMsQ0FBRCxDQUFsQzs7QUFFQTtBQUNBQyxFQUFBQSxTQUFTLENBQUMsTUFBTTtBQUNkO0FBQ0FJLElBQUFBLFFBQVEsQ0FBQ0MsS0FBVCxHQUFrQixlQUFjSCxLQUFNLFFBQXRDO0FBQ0QsR0FIUSxDQUFUOztBQUtBO0FBQ0U7QUFDRSxtREFBZ0JBLEtBQWhCLFdBREY7QUFFRSxvQ0FBUSxPQUFPLEVBQUUsTUFBTTtBQUNuQkMsUUFBQUEsUUFBUSxDQUFDRCxLQUFLLEdBQUcsQ0FBVCxDQUFSO0FBQ0gsT0FGRCxlQUZGLENBREY7Ozs7O0FBVUQ7O0FBRUQsZUFBZUQsT0FBZiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuXG5mdW5jdGlvbiBFeGFtcGxlKCkge1xuICBjb25zdCBbY291bnQsIHNldENvdW50XSA9IHVzZVN0YXRlKDApO1xuXG4gIC8vIOebuOW9k+S6jiBjb21wb25lbnREaWRNb3VudCDlkowgY29tcG9uZW50RGlkVXBkYXRlOlxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIOS9v+eUqOa1j+iniOWZqOeahCBBUEkg5pu05paw6aG16Z2i5qCH6aKYXG4gICAgZG9jdW1lbnQudGl0bGUgPSBgWW91IGNsaWNrZWQgJHtjb3VudH0gdGltZXNgO1xuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8cD5Zb3UgY2xpY2tlZCB7Y291bnR9IHRpbWVzPC9wPlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgc2V0Q291bnQoY291bnQgKyAxKVxuICAgICAgfX0+XG4gICAgICAgIENsaWNrIG1lXG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRXhhbXBsZSJdfQ==