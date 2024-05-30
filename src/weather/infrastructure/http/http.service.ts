import { Injectable } from "@nestjs/common";
import { HttpService as AxiosHttpService } from "@nestjs/axios";
import { AxiosRequestConfig, AxiosResponse } from "axios";
import { lastValueFrom } from "rxjs";

@Injectable()
export class HttpService {
  constructor(private readonly axiosHttpService: AxiosHttpService) { }

  public async get<Response = any>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<Response>> {
    return await lastValueFrom(
      this.axiosHttpService.get<Response>(url, config)
    )
  }
}
