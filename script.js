
function playaudio(){
    Csharpaudio.play()
}

//Audio
const Aaudio = document.getElementById("Aaudio")
const Asharpaudio = document.getElementById("Asharpaudio")

const Caudio = document.getElementById("Caudio")
const Csharpaudio = document.getElementById("Csharpaudio")

const Daudio = document.getElementById("Daudio")
const Dsharpaudio = document.getElementById("Dsharpaudio")

const Eaudio = document.getElementById("Eaudio")

const Faudio = document.getElementById("Faudio")
const Fsharpaudio = document.getElementById("Fsharpaudio")

const Gaudio = document.getElementById("Gaudio")
const Gsharpaudio = document.getElementById("Gsharpaudio")

//keys
var A = document.getElementById("A")
var B = document.getElementById("B")
var C = document.getElementById("C")
var D = document.getElementById("D")
var E = document.getElementById("E")
var F = document.getElementById("F")
var G = document.getElementById("G")


var Asharp = document.getElementById("Asharp")
var Csharp = document.getElementById("Csharp")
var Dsharp = document.getElementById("Dsharp")
var Fsharp = document.getElementById("Fsharp")
var Gsharp = document.getElementById("Gsharp")

//Event listener
A.addEventListener('click' , ()=>{
    Aaudio.play()
})
B.addEventListener('click' , ()=>{
    Baudio.play()
})
C.addEventListener('click' , ()=>{
    Caudio.play()
})
D.addEventListener('click' , ()=>{
    Daudio.play()
})
A.addEventListener('click' , ()=>{
    Aaudio.play()
})
E.addEventListener('click' , ()=>{
    Eaudio.play()
})
F.addEventListener('click' , ()=>{
    Faudio.play()
})
G.addEventListener('click' , ()=>{
    Gaudio.play()
})

Asharp.addEventListener('click' , ()=>{
    Asharpaudio.play()
})

Csharp.addEventListener('click' , ()=>{
    Csharpaudio.play()
})

Dsharp.addEventListener('click' , ()=>{
    Dsharpaudio.play()
})

Fsharp.addEventListener('click' , ()=>{
    Fsharpaudio.play()
})

Gsharp.addEventListener('click' , ()=>{
    Gsharpaudio.play()
})

