export const getDogImageFetch = (): Promise<any> => {
    return fetch('https://dog.ceo/api/breeds/image/random')
      .then((resp) => resp.json())
      .catch((error) => console.log(error));
  }