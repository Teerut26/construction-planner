import { z } from "zod";
import { addressSchema } from "../address.schema";

export const supplierSchema = z
  .object({
    name: z.string({ required_error: "กรุณากรอกชื่อ" }).min(1, "กรุณากรอกชื่อ"),
    email: z
      .string({ required_error: "กรุณากรอกอีเมล" })
      .min(1, "กรุณากรอกอีเมล")
      .email({ message: "อีเมลไม่ถูกต้อง" }),
    phone: z
      .string({ required_error: "กรุณากรอกเบอร์โทร" })
      .min(1, "กรุณากรอกเบอร์โทร")
      .refine((value) => {
        return /((0)(\d{1,2}\d{3}\d{4}))/gm.test(value);
      }, "กรุณากรอกเบอร์โทรให้ถูกต้อง"),
  })
  .merge(addressSchema);

export type SupplierSchemaType = z.infer<typeof supplierSchema>;