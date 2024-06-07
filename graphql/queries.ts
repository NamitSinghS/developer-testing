import {gql} from '@apollo/client';

export const GET_PROPERTIES = gql`
query ExampleQuery($category: String, $minPrice: Float, $maxPrice: Float, $bedroom: Int, $minArea: Float, $maxArea: Float) {
    properties(category: $category, minPrice: $minPrice, maxPrice: $maxPrice, bedroom: $bedroom, minArea: $minArea, maxArea: $maxArea) {
      area
      bedroom
      category
      description
      id
      name
      price
    }
  }
`;