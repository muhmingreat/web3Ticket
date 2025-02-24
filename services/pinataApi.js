//--IMAGE UPLOAD
export const UPLOAD_IPFS_IMAGE = async (file) => {
    if (file) {
      const formData = new FormData();
      formData.append("file", file);
  
      console.log(file);
  
      const response = await axios({
        method: "post",
        url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
        data: formData,
        headers: {
          pinata_api_key: PINATA_AIP_KEY,
          pinata_secret_api_key: PINATA_SECRECT_KEY,
          "Content-Type": "multipart/form-data",
        },
      });
      const ImgHash = `https://gateway.pinata.cloud/ipfs/${response.data.IpfsHash}`;
      notifySuccess("Uploaded successfully");
      return ImgHash;
    }
  };
  
  //--METADAT UPLOAD
  export const UPLOAD_METADATA = async (nft, address) => {
    const { title,
      imageUrl,
      description,
      ticketCost,
      capacity,
      startsAt,
      endsAt } = nft;
  
    if (!title ||!imageUrl || !description || !ticketCost || !capacity ||
      !startsAt || !endsAt
    )
      return notifyError("Data is missing");
  
    const data = JSON.stringify({
      title:title,
      imageUrl: imageUrl,
      description: description,
      ticketCost: description,
      capacity: capacity,
      startsAt: startsAt,
      endsAt: endsAt
    });
  
    const response = await axios({
      method: "POST",
      url: "https://api.pinata.cloud/pinning/pinJSONToIPFS",
      data: data,
      headers: {
        pinata_api_key: PINATA_AIP_KEY,
        pinata_secret_api_key: PINATA_SECRECT_KEY,
        "Content-Type": "application/json",
      },
    });
  
    const _IPFS_URL = `https://gateway.pinata.cloud/ipfs/${response.data.IpfsHash}`;
  
    const EVENT_TICKET = {
      name: name,
      description: description,
      category: category,
      image: image,
      creator: address,
      IPFS_URL: _IPFS_URL,
    };
  
    let localNFTsTicket = [];
  
    const localNFTs = localStorage.getItem("EVENT_TICKET");
    if (localNFTs) {
      localNFTsTicket = JSON.parse(localStorage.getItem("EVENT_TICKET"));
      localNFTsTicket.push(EVENT_TICKET);
      localStorage.setItem("EVENT_TICKET", JSON.stringify(localNFTsTicket));
      notifySuccess("Uploaded successfully");
    } else {
      localNFTsTicket.push(EVENT_TICKET);
      localStorage.setItem("EVENT_TICKET", JSON.stringify(localNFTsTicket));
      notifySuccess("Uploaded successfully");
    }
  
    return _IPFS_URL;
  };
  