import { Test, TestingModule } from '@nestjs/testing';
import { ProdutorRuralService } from './produtor-rural.service';

describe('ProdutorRuralService', () => {
  let service: ProdutorRuralService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProdutorRuralService],
    }).compile();

    service = module.get<ProdutorRuralService>(ProdutorRuralService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
