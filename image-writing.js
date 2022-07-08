window.addEventListener("load", () => {
  let type = document.querySelectorAll(".type"),
    name = document.querySelector("#getName"),
    errMsg = document.querySelector(".errName"),
    create = document.querySelector(".create-the-card");

  type[0].click();

  create.addEventListener("click", () => {
    let imageUrl = "/img/المعايدة العرضية.png";

    if (type[1].checked) {
      imageUrl = "/img/المعايدة الطولية.png";
    }

    if (
      name.value === "" ||
      name.value === null ||
      name.value.replace(/\s/g, "") === ""
    ) {
      errMsg.style.display = "block";

      setTimeout(() => {
        errMsg.style.display = "none";
      }, 2000);
      return;
    }

    // write the name on the image at the center bottom then download it
    let canvas = document.createElement("canvas");
    let ctx = canvas.getContext("2d");
    let img = new Image();
    img.src = imageUrl;
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      ctx.font = "bold 50px bahij";
      ctx.fillStyle = "white";
      ctx.textAlign = "center";
      if (type[1].checked) {
        ctx.fillText(name.value, img.width / 2 - 8, img.height / 2 + 340);
      } else {
        ctx.fillText(name.value, img.width / 2 - 8, img.height / 2 + 290);
      }

      let dataURL = canvas.toDataURL("image/png");

      let a = document.createElement("a");
      a.href = dataURL;
      a.download = `عيد اضحي مبارك - ${name.value}.png`;
      a.click();
    };
  });
});
