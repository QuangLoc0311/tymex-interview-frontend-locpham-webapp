import { FC } from "react";

export type RouteType = {
  id: string;
  title: string;
  path: string;
  component: FC;
  redirectTo?: string;
};
