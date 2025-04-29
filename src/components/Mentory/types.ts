import { MentoryFormData } from "../../pages/MentoryLegacy";

export type MentoryFormProps = {
  onSubmit: (data: MentoryFormData) => void;
  customPriceText?: string;
  customButtonText?: string;
  customFormTitle?: string;
};

export type MentoryFooterProps = {
  customTitle?: string;
  customDescription?: string;
};
