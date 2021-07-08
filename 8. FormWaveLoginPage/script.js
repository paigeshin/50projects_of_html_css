const labels = document.querySelectorAll('.form-control label')

labels.forEach(label => {
    const labelWithSpan = label.innerHTML
        .split('')
        .map((letter, index) => {
            return `<span style="transition-delay:${index * 50}ms">${letter}</span>`
        }) //array 
        .join('') //to string
    label.innerHTML = labelWithSpan
})