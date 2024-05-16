import { Test, TestingModule } from '@nestjs/testing';
import { ProdutorRuralController } from './produtor-rural.controller';

describe('ProdutorRuralController', () => {
  let controller: ProdutorRuralController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProdutorRuralController],
    }).compile();

    controller = module.get<ProdutorRuralController>(ProdutorRuralController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
