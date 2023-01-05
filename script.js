const keys = document.querySelectorAll(".key")
const audios = document.querySelectorAll('audio')

for (let n = 0; n < keys.length; n++) {

    let key = keys[n];
    let audio = audios[n]

    key.onclick = () => audio.play()
}