

describe('Pessonagens ', () => {

  const baseUrl = "https://rickandmortyapi.com/api"
  it('listar o nome e especie todos os perssonagens da familia - Sucesso', () => {
    cy.request({
      method: 'GET',
      url: baseUrl + '/character',
      headers: { 'Accept-Language': 'pt-br', },
    }).then((response)=>{
    
      expect(response.status).to .eq(200)
      expect(response.body).is.not.null 
      expect(response.body.results[0].name).to .eq("Rick Sanchez")
      expect(response.body.results[0].species).to .eq("Human")
      expect(response.body.results[1].name).to .eq("Morty Smith")
      expect(response.body.results[1].species).to .eq("Human")
      expect(response.body.results[2].name).to .eq("Summer Smith")
      expect(response.body.results[2].species).to .eq("Human")
      expect(response.body.results[3].name).to .eq("Beth Smith")
      expect(response.body.results[3].species).to .eq("Human")
      expect(response.body.results[4].name).to .eq("Jerry Smith")
      expect(response.body.results[4].species).to .eq("Human")
    });
      })
        })
        it(' Um personagem que nao existe - Falha', () => {
            const baseUrl = "https://rickandmortyapi.com/api"
            cy.request({
                method: 'GET',
                url: baseUrl + '/character/3209',
                failOnStatusCode: false,
                headers: { 'Accept-Language': 'pt-br', },
            }).then((response) => {
    
                expect(response.status).to.eq(404)
                expect(response.body).is.not.null
                expect(response.body.error).to.eq('Character not found')
    
            })
    
        });
    
