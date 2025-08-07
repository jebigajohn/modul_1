const album: string[] = ["holidays.jpg", "Restaurant.jpg", "desktop", "rooms.GIF", "DOGATBEACH.jpg"]

const cleanedAlbum = album.map((filename) => {
  const lowerCase = filename.toLowerCase()
  const dotIndex = lowerCase.lastIndexOf(".")

  if (dotIndex === -1) {
    return "invalid"
  } else {
    return lowerCase.slice(0, dotIndex)
  }
})

console.log(cleanedAlbum)
