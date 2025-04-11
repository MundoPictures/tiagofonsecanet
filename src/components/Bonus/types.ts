export type FormData = {
  name: string;
  email: string;
  phone: string;
};

export type FeatureItem = {
  title: string;
  description: string;
  icon: string;
};

export type BenefitItem = string;

export type BonusHeaderProps = {
  formSubmitted: boolean;
  expirationTime: Date;
  remainingSpots: number;
};

export type BonusFormProps = {
  onSubmit: (data: FormData) => void;
  remainingSpots: number;
};
