import { DataType } from 'src/pages/Products/components/types';
import { SingleProduct } from '../../src/pages/Products/components/SingleProduct/SingleProduct';
import { mount } from '@cypress/react18';

const data: DataType = {
  id: 2,
  title: 'Rhythm Ruler',
  category: 'Epic',
  price: 52.57,
  isFavorite: true,
  createdAt: 1652687980000,
  theme: 'Halloween',
  tier: 'Deluxe',
  imageId: 11,
  author: {
    firstName: 'Thaddeus',
    lastName: 'Tumulty',
    email: 'ttumultyt@t-online.de',
    gender: 'Male',
    avatar:
      'https://robohash.org/perferendisitaquedolor.png?size=100x100&set=set1',
    onlineStatus: 'offline',
  },
};

describe('Single Product', () => {
  it('contains the correct all informations', () => {
    mount(<SingleProduct data={data} />);
    cy.get('#product-item')
      .should('exist')
      .and('be.visible')
      .within(() => {
        cy.get('#single-product-tier')
          .should('exist')
          .and('be.visible')
          .and('have.text', 'Deluxe');

        cy.get('#single-product-image').should('exist').and('be.visible');

        cy.get('#single-product-name')
          .should('exist')
          .and('be.visible')
          .and('have.text', 'Rhythm Ruler');

        cy.get('#single-product-price')
          .should('exist')
          .and('be.visible')
          .and('have.text', '52.57 ETH');

        cy.get('#single-product-author')
          .should('exist')
          .and('be.visible')
          .and('have.text', 'Thaddeus Tumulty');
      })
      .and('have.prop', 'tagName')
      .should('equal', 'DIV');
  });
});
