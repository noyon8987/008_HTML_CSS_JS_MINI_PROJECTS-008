const imageContainer = document.getElementById("imageContainer");
const imageApi = "https://picsum.photos/v2/list";

const getPicture = () => {
  fetch(imageApi).then(data=>data.json()).then(item=>{
    console.log(item)
    item.forEach((picture)=>{
        const imageSection = document.createElement('div');
        imageSection.classList.add('imageContainer');

        const id = document.createElement('p');
        id.innerText = picture.id;
        imageSection.appendChild(id);

        const author = document.createElement('p');
        author.innerText = picture.author;
        imageSection.appendChild(author);

        const img = document.createElement('img');
        img.src = picture.download_url;
        imageSection.appendChild(img);

        // const height = document.createElement('p');
        // height.innerText = picture.height;
        // imageSection.appendChild(height);

        // const wight = document.createElement('p');
        // wight.innerText = picture.width;
        // imageSection.appendChild(wight);

        imageContainer.appendChild(imageSection);
        
    })
  });
};
getPicture();

















// const imageContainer = document.getElementById("imageContainer");
// const imageApi = "https://picsum.photos/v2/list";

// const getPicture = () => {
//     fetch(imageApi)
//         .then((data) => data.json())
//         .then((item) =>{
//             console.log(item)
//             item.forEach((pictureObject)=>{
//                 const imageSection = document.createElement('div');
//                 imageSection.classList.add('imageContainer');
//                 const image = document.createElement('img');
//                 image.src = pictureObject.download_url;
//                 imageSection.appendChild(image);
//                 const para = document.createElement('p');
//                 para.innerText = pictureObject.author;
//                 imageSection.appendChild(para);

//                 imageContainer.appendChild(imageSection);
//             })
//         });
// };
// getPicture();
