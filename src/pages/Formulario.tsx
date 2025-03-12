import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

// Import types
import { FormData } from "../types/FormData";

// Import components
import FormBackground from "../components/Formulario/FormBackground";
import FormContainer from "../components/Formulario/FormContainer";
import FormHeader from "../components/Formulario/FormHeader";
import FormProgress from "../components/Formulario/FormProgress";
import FormSuccess from "../components/Formulario/FormSuccess";
import FormError from "../components/Formulario/FormError";
import FormFooter from "../components/Formulario/FormFooter";
import FormNavigation from "../components/Formulario/FormNavigation";
import FormStep1 from "../components/Formulario/FormStep1";
import FormStep2 from "../components/Formulario/FormStep2";
import FormStep3 from "../components/Formulario/FormStep3";
import FormStep4 from "../components/Formulario/FormStep4";
import FormStep5 from "../components/Formulario/FormStep5";

function Formulario() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    trigger,
  } = useForm<FormData>();

  const [currentStep, setCurrentStep] = useState(0);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const totalSteps = 5;

  // Define quais campos validar em cada etapa
  const stepFields: (keyof FormData)[][] = [
    ["fullName", "email", "whatsapp"],
    ["ramo", "numEmployees"],
    ["annualRevenue", "companyName", "rg"],
    ["eventPain"],
    ["digitalStage", "jobTitle"],
  ];

  const handleNext = async () => {
    const valid = await trigger(stepFields[currentStep]);
    if (valid) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const onSubmit = async (data: FormData) => {
    const makeWebHookURL =
      "https://hook.us2.make.com/47xe9i36md8271us1rqxutf1wem8xhnw";

    try {
      await axios.post(makeWebHookURL, data);
      setSuccess(true);
      setError(false);
    } catch (error) {
      console.log(error);
      setSuccess(false);
      setError(true);
    }
  };

  // Render the current step
  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <FormStep1 register={register} control={control} errors={errors} />
        );
      case 1:
        return <FormStep2 register={register} errors={errors} />;
      case 2:
        return (
          <FormStep3 register={register} control={control} errors={errors} />
        );
      case 3:
        return <FormStep4 register={register} errors={errors} />;
      case 4:
        return <FormStep5 register={register} errors={errors} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-[#0F0B21] flex flex-col items-center justify-between px-4 py-10">
      {/* Background animation */}
      <FormBackground />

      <div className="w-full max-w-2xl relative">
        {/* Header */}
        <FormHeader />

        {/* Form container */}
        <FormContainer>
          {/* Progress bar */}
          {!success && !error && (
            <FormProgress currentStep={currentStep} totalSteps={totalSteps} />
          )}

          {/* Success message */}
          {success && <FormSuccess />}

          {/* Error message */}
          {error && <FormError />}

          {/* Form content */}
          {!success && !error && (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              <div className="transition-all duration-300 ease-in-out">
                {renderStep()}
              </div>

              {/* Navigation buttons */}
              <FormNavigation
                currentStep={currentStep}
                handleBack={handleBack}
                handleNext={handleNext}
                isLastStep={currentStep === totalSteps - 1}
              />
            </form>
          )}
        </FormContainer>
      </div>

      {/* Footer */}
      <FormFooter />
    </div>
  );
}

export default Formulario;
