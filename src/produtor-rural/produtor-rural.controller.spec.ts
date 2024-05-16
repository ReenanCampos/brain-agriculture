import { Test, TestingModule } from '@nestjs/testing';
import { ProdutorRuralController } from './produtor-rural.controller';
import { ProdutorRuralService } from './produtor-rural.service';

describe('ProdutorRuralController', () => {
  let controller: ProdutorRuralController;

  const mockGeneric = {
    save: jest.fn().mockResolvedValue(null),
    delete: jest.fn().mockResolvedValue(null),
    find: jest.fn().mockResolvedValue(null),
    findOne: jest.fn().mockResolvedValue(null)
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProdutorRuralController],
      providers: [ProdutorRuralService,
        {
          provide: ProdutorRuralService,
          useValue: mockGeneric
        }
      ]
    }).compile();

    controller = module.get<ProdutorRuralController>(ProdutorRuralController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
