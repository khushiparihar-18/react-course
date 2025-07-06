function customRender(reactElement, container){
    /*
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href',reactElement.props.href)
    domElement.setAttribute('target',reactElement.props.target)

    container.appendChild(domElement)
    */

    const domElement =  document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children;
    for (const property in reactElement.props) {
      if(property === 'children') continue;
      domElement.setAttribute(property,reactElement.props[property])
    }
    container.appendChild(domElement)

}

const reactElement = {
    type: 'a',
    props: {
        href:'https://google.com',
        target : '_blank'
    },
    children : 'Click here to Visit the Google!'
}


const root = document.querySelector('.root');

customRender(reactElement,root)
