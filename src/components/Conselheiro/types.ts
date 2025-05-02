import { MentoryFormData } from "../../pages/MentoryLegacy";

export type ConselheiroFormData = MentoryFormData;

export type ConselheiroFormProps = {
  onSubmit: (data: ConselheiroFormData) => void;
  InvestmentQuestionField: any;
  isSubmitting?: boolean;
};

export type ConselheiroFooterProps = {};
