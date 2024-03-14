
function CustomRender(reactElement, Container)
{
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    
    if (reactElement.type === 'a') { 
        domElement.setAttribute('href', reactElement.props.href);
        domElement.setAttribute('target', reactElement.props.target);
    }
    console.log(domElement);
    Container.appendChild(domElement);
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'
};
const mainContainer = document.querySelector('#root');
console.log(mainContainer);
CustomRender(reactElement, mainContainer);

