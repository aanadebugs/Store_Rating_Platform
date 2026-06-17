import { StoreRepository } from "../repositories/store.repository";
import { UserRepository } from "../repositories/user.repository";
import { RatingRepository } from "../repositories/rating.repository";

export class DashboardService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly storeRepository: StoreRepository,
    private readonly ratingRepository: RatingRepository
  ) {}

  async getAdminDashboard() {
    const totalUsers =
      await this.userRepository.count();

    const totalStores =
      await this.storeRepository.count();

    const totalRatings =
      await this.ratingRepository.count();

    return {
      totalUsers,
      totalStores,
      totalRatings,
    };
  }
}