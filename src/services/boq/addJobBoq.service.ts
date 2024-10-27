import { axiosAPI } from "@/utils/axios";
import _ from "lodash";

export interface AddJobBoqResponse {
  message: string;
}

export type AddJobBoqProps = {
  boq_id: string;
  job_id: string;
  quantity: number;
  labor_cost: number;
};

const addJobBoq = async (props?: AddJobBoqProps) => {
  try {
    const data = _.omit(props, ["boq_id"]);
    const res = await axiosAPI.post<AddJobBoqResponse>(
      "/boqs/" + props?.boq_id + "/jobs",
      data,
    );
    return res.data;
  } catch (error) {
    throw error;
  }
};

export default addJobBoq;