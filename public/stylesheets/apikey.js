//    function updatemusic(){
//     const coverfile = cover.files[0];
//     const audiofile = audio.files[0];
//     let xor = new Uint8Array([
//         55,  52,  99, 102, 102, 57, 54, 98, 45,
//   111, 104, 103, 121,  45, 54, 50, 51, 49,
//    45,  51,  98, 106, 122, 45, 98, 53, 53,
//    98,  48,  52,  54,  56, 97, 52, 97, 56
//         ])
//     let nor = new TextDecoder('utf-8')
// fetch('https://api.github.com/repos/babyo77/Music-Player/contents/data.json')
//   .then(response => response.json())
//   .then(data => {
//     const existingContent = atob(data.content);
//     const modifiedContent = existingContent.replace( '[',`[{
//         "title": "${songname.value}",
//         "artist": "${aristname.value}",
//         "audio": "Music/${audiofile.name}",
//         "cover": "Cover/${coverfile.name}"
//       },`)
//     const encodedContent = btoa(modifiedContent);
//     fetch(data.url, {
//       method: 'PUT',
//       headers: {
//         'Authorization': `token ${(nor.decode(xor))}`,
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         message: 'Update JavaScript file',
//         content: encodedContent,
//         sha: data.sha,
//       }),
//     })
//     .then(response => {
//       if (response.ok) {
//         console.log('JavaScript file content updated successfully');
//         alert('Music Added successfully - It Take 60sec To Appear')
//         loader.style.display="none"
//         button.textContent="Redirecting..."
//       } else {
//         console.error('Error updating JavaScript file content');
//         alert('Error Adding Muisc')
//         loader.style.display="None"
//         button.textContent="Upload"
//         submit.disabled=false
//       }
//     });
//   });
// }


// function uploadcover(){
//     const coverfile = cover.files[0];
//     const reader = new FileReader();
//     reader.onload = function() {
//         const imageBase64 = reader.result.split(',')[1];
//         let xor = new Uint8Array([
//             55,  52,  99, 102, 102, 57, 54, 98, 45,
//             111, 104, 103, 121,  45, 54, 50, 51, 49,
//              45,  51,  98, 106, 122, 45, 98, 53, 53,
//              98,  48,  52,  54,  56, 97, 52, 97, 56
//             ])
//         let nor = new TextDecoder('utf-8')
//         fetch(`https://api.github.com/repos/babyo77/Music-Player/contents/Cover/${coverfile.name}`, {
//             method: 'PUT',
//             headers: {
//               'Authorization': `token ${(nor.decode(xor))}`,
//               'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({
//               message: 'add iamge file',
//               content: imageBase64,
//               branch: 'main'
//             }),
//           })
//           .then(response => {
//             if (response.ok) {
//               console.log('image file content upload successfully');
//               alert('Cover file  uploaded successfully')
//               addmusic()
//             } else {
//               console.error('Error uploading image file content');
//               alert('Error uploading Cover file content')
//             }
//           });
//         };
//         reader.readAsDataURL(coverfile);
//       }


// function uploadaudio(){
//   loader.style.display="block"
//     submit.disabled= true
//     button.textContent=""
//     const audiofile = audio.files[0];
//     const reader = new FileReader();
//     reader.onload = function() {
//         const audioBase64 = reader.result.split(',')[1];
//         let xor = new Uint8Array([
//             55,  52,  99, 102, 102, 57, 54, 98, 45,
//             111, 104, 103, 121,  45, 54, 50, 51, 49,
//              45,  51,  98, 106, 122, 45, 98, 53, 53,
//              98,  48,  52,  54,  56, 97, 52, 97, 56
//             ])
//         let nor = new TextDecoder('utf-8')
//         fetch(`https://api.github.com/repos/babyo77/Music-Player/contents/Music/${audiofile.name}`, {
//             method: 'PUT',
//             headers: {
//               'Authorization': `token ${(nor.decode(xor))}`,
//               'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({
//               message: 'add iamge file',
//               content: audioBase64,
//               branch: 'main'
//             }),
//           })
//           .then(response => {
//             if (response.ok) {
//               console.log('audio file content upload successfully');
//               alert('Audio file uploaded successfully')
//               loader.style.display="block"
//         button.textContent=""
//         uploadcover()
//             } else {
//               console.error('Error uploading audio file content');
//               alert('Error uploading audio file content')
//               return
//             }
//           });
//         };
//         reader.readAsDataURL(audiofile);
//       }
// cover.addEventListener('change', function() {
//   const selectedFile = cover.files[0];
//   const objectURL = URL.createObjectURL(selectedFile);
//   document.querySelector("#cover-image").src = objectURL;
// });

document.querySelector("#form").onsubmit=()=>{
    document.querySelector("#loader").style.display="block"
    document.querySelector("#Join").style.display="none"
    fetch('/')
    .then(response=()=>{
        if(!response.ok){
            document.querySelector("#Join").style.display="block"
            document.querySelector("#loader").style.display="none"

        }
    })
}


document.body.onclick=()=>{
    document.querySelector("#audio").play()
}

