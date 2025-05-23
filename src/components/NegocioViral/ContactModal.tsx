import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { motion } from "../../../src/utils/nonAnimatedComponents";
import { useForm, Controller } from "react-hook-form";
import { IMaskInput } from "react-imask";
import axios from "axios";
import { getCheckoutUrl } from "../../utils/urlParams";
import { useMetaPixel } from "../../contexts/MetaPixelContext";
import useNegocioViralTracking from "../../utils/negocioViralTracker";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type FormData = {
  name: string;
  email: string;
  whatsapp: string;
};

type SendData = {
  fullName: string;
  email: string;
  whatsapp: string;
};

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { trackStandardEvent } = useMetaPixel();
  const tracking = useNegocioViralTracking();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);

    try {
      // Track checkout initiation with Meta Pixel
      trackStandardEvent("InitiateCheckout", {
        content_name: "Negocio Viral",
        content_category: "sales_page",
        content_ids: ["negocioviral_checkout"],
        value: 997.0, // Replace with actual value if available
        currency: "BRL",
      });

      // Also track with custom tracking
      tracking.trackPurchaseFunnel("InitiateCheckout", {
        content_name: "Negocio Viral",
        content_category: "sales_page",
        content_ids: ["negocioviral_checkout"],
        value: 997.0, // Replace with actual value if available
        currency: "BRL",
      });

      // Track lead generation
      tracking.trackPurchaseFunnel("Lead", {
        content_name: "Negocio Viral",
        content_category: "sales_page",
        lead_type: "checkout_form",
        value: 997.0,
        currency: "BRL",
      });

      // Track form submit event
      tracking.trackCustomEvent("form_submit", {
        form_name: "checkout_form",
        page: "negocio_viral",
      });

      // Here we would typically send the data to an API
      // For now, we'll just simulate a delay and redirect
      console.log("Form data:", data);

      const sendData: SendData = {
        fullName: data.name,
        email: data.email,
        whatsapp: data.whatsapp,
      };

      const makeWebhookURL =
        "https://hook.us2.make.com/ilj352ga4rp3e4l5gdvnsh3bphhmye4h";

      await axios.post(makeWebhookURL, sendData);

      // Get dynamic checkout URL based on source parameter
      const checkoutUrl = getCheckoutUrl();

      const finalCheckoutUrl = `${checkoutUrl}?name=${data.name}&email=${data.email}&phone=${data.whatsapp}&phone_local_code=55`;

      // Redirect to appropriate payment page based on source
      window.location.href = finalCheckoutUrl;
    } catch (error) {
      console.error("Error submitting form:", error);

      // Track form error
      tracking.trackCustomEvent("form_error", {
        form_name: "checkout_form",
        page: "negocio_viral",
        error: error instanceof Error ? error.message : "Unknown error",
      });
    } finally {
      setIsSubmitting(false);
      reset();
      onClose();
    }
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/60 backdrop-blur-[2px]" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-gradient-to-b from-[#131313] to-black border border-green-500/20 p-6 text-left align-middle shadow-xl transition-all">
                {/* Subtle gradient background animation */}
                <motion.div
                  className="absolute -inset-2 bg-gradient-to-br from-green-500/5 to-transparent rounded-3xl blur-xl z-0"
                  animate={{
                    opacity: [0.2, 0.4, 0.2],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    repeatType: "mirror",
                  }}
                />

                <div className="relative z-10">
                  <Dialog.Title
                    as="h3"
                    className="text-xl sm:text-2xl font-bold leading-6 text-white text-center mb-2"
                  >
                    Estamos quase lá!
                  </Dialog.Title>

                  <div className="text-center mb-6">
                    <p className="text-sm text-gray-300">
                      Preencha seus dados para acessar o Negócio Viral
                    </p>
                    <div className="inline-block bg-gradient-to-r from-green-600/20 to-green-400/20 px-4 py-1 rounded-full border border-green-500/30 text-green-400 text-xs font-medium uppercase tracking-wider mt-2 backdrop-blur-sm">
                      <span className="mr-1">⚡</span>
                      Redirecionando para pagamento
                    </div>
                  </div>

                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-200 mb-1"
                      >
                        Nome completo*
                      </label>
                      <input
                        id="name"
                        type="text"
                        className={`w-full rounded-md bg-black/50 border ${
                          errors.name
                            ? "border-red-500/50"
                            : "border-green-500/30"
                        } px-3 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500/50`}
                        placeholder="Digite seu nome completo"
                        {...register("name", { required: true })}
                      />
                      {errors.name && (
                        <p className="mt-1 text-xs text-red-400">
                          Nome é obrigatório
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-200 mb-1"
                      >
                        Email*
                      </label>
                      <input
                        id="email"
                        type="email"
                        className={`w-full rounded-md bg-black/50 border ${
                          errors.email
                            ? "border-red-500/50"
                            : "border-green-500/30"
                        } px-3 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500/50`}
                        placeholder="seu@email.com"
                        {...register("email", {
                          required: true,
                          pattern:
                            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                        })}
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs text-red-400">
                          Email válido é obrigatório
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="whatsapp"
                        className="block text-sm font-medium text-gray-200 mb-1"
                      >
                        WhatsApp*
                      </label>
                      <Controller
                        name="whatsapp"
                        control={control}
                        rules={{ required: true }}
                        render={({ field }) => (
                          <div
                            className={`w-full rounded-md bg-black/50 border ${
                              errors.whatsapp
                                ? "border-red-500/50"
                                : "border-green-500/30"
                            } px-3 py-2 text-white focus-within:ring-2 focus-within:ring-green-500/50`}
                          >
                            <IMaskInput
                              id="whatsapp"
                              mask="(00) 00000-0000"
                              unmask={false}
                              placeholder="(00) 00000-0000"
                              className="w-full bg-transparent focus:outline-none placeholder-gray-500"
                              onAccept={(value) => field.onChange(value)}
                              value={field.value || ""}
                              inputRef={field.ref}
                            />
                          </div>
                        )}
                      />
                      {errors.whatsapp && (
                        <p className="mt-1 text-xs text-red-400">
                          WhatsApp é obrigatório
                        </p>
                      )}
                    </div>

                    <div className="mt-6">
                      <motion.button
                        type="submit"
                        className="relative w-full py-3 bg-green-500 text-white font-bold rounded-md uppercase tracking-wide overflow-hidden cursor-pointer"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        disabled={isSubmitting}
                        onClick={() => {
                          // Track button click event
                          tracking.trackButtonClick(
                            "checkout_button",
                            "checkout_form",
                            {
                              button_text: "CONTINUAR PARA PAGAMENTO",
                              step: "payment_form",
                            }
                          );

                          // Track standard event for click
                          trackStandardEvent("InitiateCheckout", {
                            content_name: "Negocio Viral Button Click",
                            content_category: "sales_page",
                            content_ids: ["negocioviral_checkout_button"],
                            value: 447.0,
                            currency: "BRL",
                          });
                        }}
                      >
                        {/* Shine effect */}
                        <motion.div
                          className="absolute inset-0 overflow-hidden"
                          style={{
                            maskImage:
                              "linear-gradient(to right, transparent, black, transparent)",
                          }}
                        >
                          <motion.div
                            className="absolute inset-0 bg-white/10 w-1/3"
                            animate={{ x: ["-100%", "300%"] }}
                            transition={{
                              repeat: Infinity,
                              duration: 2,
                              repeatType: "loop",
                              ease: "linear",
                              repeatDelay: 3,
                            }}
                          />
                        </motion.div>

                        <span className="relative flex items-center justify-center">
                          {isSubmitting ? (
                            <>
                              <svg
                                className="animate-spin -ml-1 mr-2 h-5 w-5 text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                              >
                                <circle
                                  className="opacity-25"
                                  cx="12"
                                  cy="12"
                                  r="10"
                                  stroke="currentColor"
                                  strokeWidth="4"
                                ></circle>
                                <path
                                  className="opacity-75"
                                  fill="currentColor"
                                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                ></path>
                              </svg>
                              PROCESSANDO...
                            </>
                          ) : (
                            <>
                              CONTINUAR PARA PAGAMENTO
                              <motion.span
                                className="ml-2 text-xl"
                                animate={{ x: [0, 4, 0] }}
                                transition={{
                                  repeat: Infinity,
                                  duration: 1.2,
                                  repeatType: "loop",
                                  ease: "easeInOut",
                                }}
                              >
                                →
                              </motion.span>
                            </>
                          )}
                        </span>
                      </motion.button>
                    </div>

                    <div className="mt-2 text-center">
                      <p className="text-xs text-gray-400">
                        Seus dados estão seguros e não serão compartilhados
                      </p>
                    </div>
                  </form>

                  <div className="absolute top-2 right-2">
                    <button
                      type="button"
                      className="text-gray-400 hover:text-white focus:outline-none cursor-pointer"
                      onClick={onClose}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default ContactModal;
