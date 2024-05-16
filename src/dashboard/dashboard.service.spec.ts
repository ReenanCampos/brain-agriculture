import { Test, TestingModule } from '@nestjs/testing';
import { DashboardService } from './dashboard.service';

describe('DashboardService', () => {
  let service: DashboardService;

  const mockGenericService = {
    save: jest.fn().mockResolvedValue(null),
    delete: jest.fn().mockResolvedValue(null),
    find: jest.fn().mockResolvedValue(null),
    findOne: jest.fn().mockResolvedValue(null)
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DashboardService,
        {
          provide: DashboardService,
          useValue: mockGenericService
        }
      ],
    }).compile();

    service = module.get<DashboardService>(DashboardService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
