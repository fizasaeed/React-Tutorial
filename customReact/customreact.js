function customRender(reactElement, container) {
  /*const domElement = document.createElement(reactElement.type);
  document.innerHTML = reactElement.children;
  domElement.setAttribute("href", reactElement.props.href);
  domElement.setAttribute("target", reactElement.props.target);
  container.appendChild(domElement);*/
  const domElement = document.createElement(reactElement.type);
  document.innerHTML = reactElement.children;
  for (const prop in props) {
  }
}

const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "click me to visit google",
};
const mainContainer = document.querySelector("#root");

customRender(reactElement, mainContainer);
