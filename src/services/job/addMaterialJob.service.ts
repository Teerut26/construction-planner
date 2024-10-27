import { type MaterialJobSchemaType } from "@/schemas/job/job.schema";
import { axiosAPI } from "@/utils/axios";
import _ from "lodash";

export interface AddMaterialJobResponse {
  data: Data;
  message: string;
}

export interface Data {
  job_id: string;
  name: string;
  description: string;
  unit: string;
}

export type AddMaterialJobProps = {
  job_id: string;
  materials: MaterialJobSchemaType[];
};

const addMaterialJob = async (props?: AddMaterialJobProps) => {
  try {
    const data = _.omit(props, ["job_id"]);
    const res = await axiosAPI.post<AddMaterialJobResponse>(
      "/jobs/" + props?.job_id + "/materials",
      data,
    );
    return res.data;
  } catch (error) {
    throw error;
  }
};

export default addMaterialJob;