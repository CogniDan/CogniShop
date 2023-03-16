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
mutation AddCart($cartId: ID!, $id: ID!, $name: String, $description: String, $images: [String], $price: Int!, $quantity: Int, $metadata: Json){
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
  mutation RemoveCart($cartId: ID!, $id: ID!){
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