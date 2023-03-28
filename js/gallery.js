function activateGallery(){


    let thumbnails = document
        .querySelectorAll("#gallery-thumbs > div > img");

    let mainImage = document.querySelector("#gallery-photo > img");

    thumbnails.forEach(function (thumbnail) {
        thumbnail.addEventListener("click", function () {
            let newImageSrc = thumbnail.dataset.largeVersion;
            let newAlt = thumbnail.alt;
            mainImage.setAttribute("src", newImageSrc);
            mainImage.setAttribute("alt", newAlt);

            // Image info to be updated
            let galleryInfo = document.querySelector("#gallery-info");
            let title
                = galleryInfo.querySelector(".title");
            let description = galleryInfo.querySelector(".description");

            // change which image is current.

            document.querySelector(".current").classList.remove("current");
            thumbnail.parentNode.classList.add("current");

            // Update image info.
            title.innerHTML = thumbnail.dataset.title;

            description.innerHTML = thumbnail.dataset.description;

        });
    });
}

