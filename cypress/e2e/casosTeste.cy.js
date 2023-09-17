describe('template spec', () => {
  it('Pesquisa de Produtos', () => {
    cy.visit('https://www.magazineluiza.com.br/')
    cy.get('[data-testid="input-search"]').type('smartphone{enter}')
  })

  it('Adicionar Produto ao Carrinho', () => {
    cy.visit('https://www.magazineluiza.com.br/')
    cy.get('[data-testid="input-search"]').type('smartphone{enter}')
    cy.get(':nth-child(1) > [data-testid="product-card-container"] > [data-testid="product-card-content"] > [data-testid="product-title"]').click()
    cy.get(':nth-child(2) > [data-testid="bagButton"]').click()
    cy.get('[data-testid="summary-continue-btn"]').click()
  })

  it('Visualizar Carrinho de Compras', () => {
    cy.visit('https://www.magazineluiza.com.br/')
    cy.get('[data-testid="numbered-btn-counter"]').click()
  })
})