import { Test, TestingModule } from '@nestjs/testing';
import { ProdutorRuralService } from './produtor-rural.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { ProdutorRural } from './entities/produtor-rural.entity';
import { Fazenda } from '../fazenda/entities/fazenda.entity';
import { Repository } from 'typeorm';

import { mockCaseCreate } from './mock/produtor-rural.mock'

export type MockType<T> = {
  [P in keyof T]?: jest.Mock<{}>;
};

const repositoryMockFactory: () => MockType<Repository<any>> = jest.fn(() => ({
  save: jest.fn((entity) => entity),
  find: jest.fn((entity) => entity),
  findOne: jest.fn((entity) => entity),
  delete: jest.fn((entity) => entity)
}));

describe('ProdutorRuralService', () => {
  let service: ProdutorRuralService;
  let produtorRepository: Repository<ProdutorRural>;
  let repositoryMock: MockType<Repository<ProdutorRural>>;

  const PRODUTORRURAL_REPOSITORY_TOKEN = getRepositoryToken(ProdutorRural);
  const FAZENDA_REPOSITORY_TOKEN = getRepositoryToken(Fazenda);

  const mockGenericService = {
    save: jest.fn().mockResolvedValue(null),
    delete: jest.fn().mockResolvedValue(null),
    find: jest.fn().mockResolvedValue(null),
    findOne: jest.fn().mockResolvedValue(null)
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProdutorRuralService,
        {
          provide: PRODUTORRURAL_REPOSITORY_TOKEN,
          useValue: mockGenericService
        },
        {
          provide: FAZENDA_REPOSITORY_TOKEN,
          useValue: mockGenericService
        }
      ],
    }).compile();

    service = await module.get<ProdutorRuralService>(ProdutorRuralService);
    repositoryMock = await module.get(PRODUTORRURAL_REPOSITORY_TOKEN);


  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  // it('produtorRuralRepository should be defined', () => {
  //   expect(produtorRepository).toBeDefined();
  // });

  describe('Create Produtor Rural', () => {
    it("should save a produtor rural in the database", async () => {
      const listProdutorRuralMock = mockCaseCreate();
      repositoryMock.save.mockReturnValue(listProdutorRuralMock[0]);
      expect(repositoryMock.save).not.toHaveBeenCalled();

      const mockProdutor = await service.create(listProdutorRuralMock[0]);
      expect(mockProdutor).toEqual(listProdutorRuralMock[0]);
    })

    // it("should save a produtor rural in the database and update", async () => {
    //   const listProdutorRuralMock = mockCaseCreate();
    //   repositoryMock.save.mockReturnValue(listProdutorRuralMock[0]);
    //   expect(repositoryMock.save).toHaveBeenCalledTimes(1);

    //   let idProdutorRural = 1;
    //   let mockProdutor = await service.create(listProdutorRuralMock[0]);
    //   const idMockProdutor = idProdutorRural;
    //   let teste = await service.findAll();
    //   console.log(teste);
    //   const nomeAlterado = `${mockProdutor.nome} Alterado`;
    //   const nomeFazendaAlterado = `${mockProdutor.fazenda.nome} Alterado`
    //   mockProdutor.nome = nomeAlterado;
    //   mockProdutor.fazenda.nome = nomeFazendaAlterado;

    //   await service.update(idMockProdutor, mockProdutor);
    //   let findMockProdutor = await service.findOne(idMockProdutor);

    //   expect(findMockProdutor.nome).toEqual(nomeAlterado);
    //   expect(findMockProdutor.fazenda.nome).toEqual(nomeFazendaAlterado);
    // })

    // it('should have at least 1 produtor rural', () => {
    //   expect(listProdutorRuralMock.length).toBeGreaterThan(0);
    // })

    // it('should create produtor rural with farm', async () => {
    //   const produtorRuralInput = listProdutorRuralMock[0];
    //   await service.create(produtorRuralInput);
    //   expect(service.create).toHaveReturnedWith(ProdutorRural);
    // })

  })

  describe('Get All Produtor Rural', () => {

    it("should get all produtor rural", async () => {
      const listProdutorRuralMock = mockCaseCreate();
      repositoryMock.find.mockReturnValue(listProdutorRuralMock);
      expect(repositoryMock.find).not.toHaveBeenCalled();

      const result = await service.findAll();
      expect(repositoryMock.find).toHaveBeenCalled();
      expect(result).toEqual(listProdutorRuralMock);
    });

  })

  describe('Remove Produtor Rural', () => {
    it('should delete produtor rural', async () => {
      repositoryMock.delete.mockReturnValue(1);
      expect(repositoryMock.delete).not.toHaveBeenCalled();
      await service.remove(1);
      expect(repositoryMock.delete).toHaveBeenCalledWith(1);
    });
  });



});
