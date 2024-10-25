async function registerElement(tag) {
    classname = formatString(tag)
    console.log(`start registering ${tag} with ${classname}`)
    customElements.define(tag, NextCounter)
}


function formatString(input) {
    return input
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join('');
  }