export const GetOrGenerateId = () => {
  const cartId = localStorage.getItem('cartId');
  
  return cartId ?? GenerateId();
}

export const GetCartId = () => {
  return localStorage.getItem('cartId');
}

export const SetCartId = (cartId: string) => {
  localStorage.setItem('cartId', cartId)
}

export const GenerateId = (length = 10) => {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}