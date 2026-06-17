import {
  NextFunction,
  Request,
  Response,
} from "express";

import { DashboardService } from "../services/dashboard.service";

import { HTTP_STATUS } from "../constants/http-status.constants";

export class DashboardController {
  constructor(
    private readonly dashboardService: DashboardService
  ) {}

  getAdminDashboard = async (
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const dashboardData =
        await this.dashboardService.getAdminDashboard();

      response.status(HTTP_STATUS.OK).json({
        success: true,
        data: dashboardData,
      });
    } catch (error) {
      next(error);
    }
  };
}