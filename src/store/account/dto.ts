import { IAccount } from "@/utils/types/account/account";
import { IAccountHttpResponse } from "@/utils/types/account/account-http";

export function parseAccount(dto: IAccountHttpResponse): IAccount {
  return {
    id: dto.id,
    createdAt: dto.created_at,
    name: dto.name,
    description: dto.Description,
    type: dto.type
  };
}
