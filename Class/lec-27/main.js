function DownloadFile(url,download){
  console.log("Started Downloading ");
  setTimeout(function(){
    var a=url.split("/").pop()
    download(a);
  DownloadFile(newurl,download)
  },2000);
}

function compressFile(path,compress){
  console.log("File compressing begain");
  setTimeout(function(){
    var a=path.split(".")[0]+".zip";
    compress(comp);
  },2000);
}

function uploadFile(comp,upload){
  console.log("uploaded successfull");
  setTimeout(()=>{
    const upl="http://LocalStorage"+comp;
    upload(upl);
  },2000);
}



