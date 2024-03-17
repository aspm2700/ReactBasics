
// Internaly React Converts The Component in Object/Tree Structure.

const reactElement = {
    type:'a',
    props:{
        href:'https://google.com',
        target:'_blank'
    },
    children:'Click me to vist google'
}

function renderReactElemnt(reactElement, container){
    const domElement = document.createElement(reactElement.type)
    domElement.appendChild(document.createTextNode(reactElement.children))

    for (let prop in reactElement.props) {
        domElement.setAttribute(prop, reactElement.props[prop])        
    }

    container.appendChild(domElement)
}

const mainContainer = documnet.getElementById('root')

renderReactElemnt(reactElement,mainContainer)