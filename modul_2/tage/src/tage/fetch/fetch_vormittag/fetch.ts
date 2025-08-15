// * Unser Ziel ist, dass wir uns alle Posts von `https://jsonplaceholder.typicode.com/posts`abholen wollen

const API_URL = "https://jsonplaceholder.typicode.com/posts"

type TPost = {
  user: number
  title: string
  id: number
  body: string
}

fetch(API_URL)
  .then((response: Response) => {
    console.log(response)
    if (!response.ok) {
      console.error("Response doesn´t work")
    }
    // ? Immer nach resp bzw response ist der nächste Schritt: den Response in ein echtes Javascript OBJ umzuwandeln, indem man resp über json() methode in return zurückgibt⤵️

    return response.json()
  })
  .then((posts: TPost[]) => {
    // console.log(posts)
    posts.forEach((post: TPost) => {
      // console.log(post)

      const postObjToArray = Object.entries(post)

      // console.log(postObjToArray)

      postObjToArray.forEach(([key, value]: [string, string | number]) => {
        if (key === "title" || key === "id") {
          const titleElement = document.createElement("p") as HTMLParagraphElement
          titleElement.textContent = `${key}:${value.toString()} `
          document.body.appendChild(titleElement)
        }
      })
    })
  })
  .catch((error: Error) => {
    console.error(error)
  })
  .finally(() => {
    console.log("Done with fetching the posts")
  })
