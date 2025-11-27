export const useSplitText = () => {
  const split = (element: HTMLElement) => {
    if (!element) return
    const text = element.innerText
    const chars = text.split('')
    element.innerHTML = ''
    
    chars.forEach(char => {
      const span = document.createElement('span')
      span.innerText = char
      span.style.display = 'inline-block'
      span.style.opacity = '0'
      span.style.transform = 'translateY(20px)'
      // Handle spaces
      if (char === ' ') {
        span.style.width = '0.3em'
      }
      element.appendChild(span)
    })
    
    return element.children
  }

  return {
    split
  }
}
