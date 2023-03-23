import { gql } from 'apollo-angular';

export const GET_CART = gql`
query GetCart($id: 	ID!){
    cart(id: $id) {
      id
      isEmpty
      abandoned
      totalItems
      totalUniqueItems
      items {
        id
        name
        description
        images
        unitTotal {
          amount
          formatted
        }
        lineTotal {
          amount
          formatted
        }
        quantity
        metadata
      }
    }
  }
`;

export const ADD_ITEM_TO_CART = gql`
mutation AddToCart($cartId: ID!, $id: ID!, $name: String, $description: String, $images: [String], $price: Int!, $quantity: Int, $metadata: Json){
    addItem(
      input: {
        cartId: $cartId
        id: $id
        name: $name
        description: $description
        images: $images
        price: $price
        quantity: $quantity
        metadata: $metadata
      }
    ) {
      id
      isEmpty
      abandoned
      totalItems
      totalUniqueItems
      items {
        id
        name
        description
        images
        unitTotal {
          amount
          formatted
        }
        lineTotal {
          amount
          formatted
        }
        quantity
        metadata
      }
    }
  }`

  export const REMOVE_ITEM_FROM_CART = gql`
  mutation RemoveFromCart($cartId: ID!, $id: ID!){
    removeItem(
      input: { 
          cartId: $cartId, 
          id: $id
        }
    ) {
      id
      isEmpty
      abandoned
      totalItems
      totalUniqueItems
      subTotal {
        formatted
      }
      items {
        id
        name
        description
        images
        unitTotal {
          amount
          formatted
        }
        lineTotal {
          amount
          formatted
        }
        quantity
        metadata
      }
    }
  }`

  export const CHECKOUT_CART = gql`
  mutation Checkout($cartId: ID!, $email: String!, $shipping: AddressInput!, $billing: AddressInput){
    checkout(
      input: {
        cartId: $cartId
        email: $email
        shipping: $shipping
        billing: $billing
      }
    ) {
      id
      email
      billing {
        name
        line1
        city
        postalCode
        country
      }
      shippingTotal {
        amount
        formatted
      }
      taxTotal {
        amount
        formatted
      }
      subTotal {
        amount
        formatted
      }
      grandTotal {
        formatted
      }
    }
  }`

  export const EMPTY_CART = gql`
  mutation Empty($id: ID!){
    emptyCart(input: { id: $id }) {
      id
      totalItems
      totalUniqueItems
    }
  }`

  export const INCREMENT_ITEM = gql`
  mutation IncrementItemQuantity($cartId: ID!, $id: ID!, $by: Int!){
    incrementItemQuantity(
      input: { cartId: $cartId, id: $id, by: $by }
    ) {
      id
      isEmpty
      abandoned
      totalItems
      totalUniqueItems
      items {
        id
        name
        description
        images
        quantity
      }
    }
  }`

  export const DECREMENT_ITEM = gql`
  mutation DecrementItemQuantity($cartId: ID!, $id: ID!, $by: Int!){
    decrementItemQuantity(
      input: { cartId: $cartId, id: $id, by: $by }
    ) {
      id
      isEmpty
      abandoned
      totalItems
      totalUniqueItems
      items {
        id
        name
        description
        images
        quantity
      }
    }
  }`