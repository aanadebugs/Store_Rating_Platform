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

  async getStoreOwnerDashboard(
    ownerId: string
  ) {
    const store =
      await this.storeRepository.getStoreWithRatings(
        ownerId
      );

    if (!store) {
      return {
        totalStores: 0,
        totalRatings: 0,
        averageRating: 0,
        storeName: "",
      };
    }

    const totalRatings =
      store.ratings.length;

    const averageRating =
      totalRatings === 0
        ? 0
        : Number(
            (
              store.ratings.reduce(
                (
                  total,
                  rating
                ) =>
                  total +
                  rating.rating,
                0
              ) / totalRatings
            ).toFixed(2)
          );

    return {
      totalStores: 1,
      totalRatings,
      averageRating,
      storeName: store.name,
    };
  }
}