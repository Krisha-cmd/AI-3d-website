const canvas=document.querySelector('.canvas')
canvas.width=window.innerWidth
canvas.height=window.innerHeight

const context=canvas.getContext("2d")
const frameCount=57

const currentFrame=(index)=>`./mlsc/${(index+1).toString()}.jpg`
