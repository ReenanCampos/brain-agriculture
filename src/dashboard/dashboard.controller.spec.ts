import { Test, TestingModule } from '@nestjs/testing';
import { DashboardController } from './dashboard.controller';
import { DashboardService } from './dashboard.service';

describe('DashboardController', () => {
  let controller: DashboardController;

  const mockGeneric = {
    save: jest.fn().mockResolvedValue(null),
    delete: jest.fn().mockResolvedValue(null),
    find: jest.fn().mockResolvedValue(null),
    findOne: jest.fn().mockResolvedValue(null)
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DashboardController],
      providers: [DashboardService,
        {
          provide: DashboardService,
          useValue: mockGeneric
        }
      ],
    }).compile();

    controller = module.get<DashboardController>(DashboardController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
