import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { IMaskInput } from 'react-imask';
import axios from 'axios';

interface FormData {
  fullName: string;
  email: string;
  whatsapp: string;
  ramo: string;
  numEmployees: string;
  annualRevenue: string;
  eventPain: string;
  digitalStage: string;
  jobTitle: string;
}

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
  const totalSteps = 4;

  // Define quais campos validar em cada etapa
  const stepFields: (keyof FormData)[][] = [
    ['fullName', 'email', 'whatsapp'],
    ['ramo', 'numEmployees'],
    ['annualRevenue', 'eventPain'],
    ['digitalStage', 'jobTitle'],
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
    const makeWebHookURL = 'https://hook.us2.make.com/47xe9i36md8271us1rqxutf1wem8xhnw';

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 to-indigo-900 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-2xl bg-white/10 backdrop-blur-md rounded-lg shadow-lg p-8">
        <div className="mb-6 text-center">
          <h2 className="text-3xl font-bold text-white">Formulário de Confirmação</h2>
          <p className="text-white/80">
            Etapa {currentStep + 1} de {totalSteps}
          </p>
          <div className="mt-4 h-2 w-full bg-white/30 rounded-full">
            <div
              className="h-full bg-purple-400 rounded-full transition-all duration-300"
              style={{ width: `${((currentStep + 1) / totalSteps) * 100}%` }}
            ></div>
          </div>
        </div>

        {success && (
          <div
            className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-4"
            role="alert"
          >
            <p className="font-bold">Formulário Enviado com Sucesso!</p>
            <p>Em breve entraremos em contato com você.</p>
          </div>
        )}
        {error && (
          <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4" role="alert">
            <p className="font-bold">Erro ao Enviar Formulário!</p>
            <p>Por favor, recarregue a página</p>
          </div>
        )}

        {!success && (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {currentStep === 0 && (
              <>
                {/* Nome Completo */}
                <div>
                  <label className="block text-white font-semibold mb-2">Nome Completo:</label>
                  <input
                    type="text"
                    {...register('fullName', { required: 'Nome é obrigatório' })}
                    className={`w-full px-4 py-2 border rounded-lg bg-transparent text-white placeholder-white/70 focus:outline-none focus:ring-2 ${
                      errors.fullName
                        ? 'border-red-500 focus:ring-red-500'
                        : 'border-white/50 focus:ring-purple-300'
                    }`}
                    placeholder="Digite seu nome completo"
                  />
                  {errors.fullName && (
                    <p className="text-red-500 text-sm mt-1">{errors.fullName.message as string}</p>
                  )}
                </div>
                {/* E-mail */}
                <div>
                  <label className="block text-white font-semibold mb-2">Seu melhor e-mail:</label>
                  <input
                    type="email"
                    {...register('email', {
                      required: 'E-mail é obrigatório',
                      pattern: {
                        value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                        message: 'Formato de e-mail inválido',
                      },
                    })}
                    className={`w-full px-4 py-2 border rounded-lg bg-transparent text-white placeholder-white/70 focus:outline-none focus:ring-2 ${
                      errors.email
                        ? 'border-red-500 focus:ring-red-500'
                        : 'border-white/50 focus:ring-purple-300'
                    }`}
                    placeholder="exemplo@dominio.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email.message as string}</p>
                  )}
                </div>
                {/* Whatsapp */}
                <div>
                  <label className="block text-white font-semibold mb-2">
                    Whatsapp (Número + DDD):
                  </label>
                  <Controller
                    name="whatsapp"
                    control={control}
                    rules={{ required: 'Whatsapp é obrigatório' }}
                    render={({ field }) => (
                      <IMaskInput
                        mask="(00) 00000-0000"
                        {...field}
                        className={`w-full px-4 py-2 border rounded-lg bg-transparent text-white placeholder-white/70 focus:outline-none focus:ring-2 ${
                          errors.whatsapp
                            ? 'border-red-500 focus:ring-red-500'
                            : 'border-white/50 focus:ring-purple-300'
                        }`}
                        placeholder="(11) 91234-5678"
                      />
                    )}
                  />
                  {errors.whatsapp && (
                    <p className="text-red-500 text-sm mt-1">{errors.whatsapp.message as string}</p>
                  )}
                </div>
              </>
            )}

            {currentStep === 1 && (
              <>
                {/* Ramo de Atuação */}
                <div>
                  <label className="block text-white font-semibold mb-2">
                    Qual seu ramo de atuação?
                  </label>
                  <input
                    type="text"
                    {...register('ramo', { required: 'Este campo é obrigatório' })}
                    className={`w-full px-4 py-2 border rounded-lg bg-transparent text-white placeholder-white/70 focus:outline-none focus:ring-2 ${
                      errors.ramo
                        ? 'border-red-500 focus:ring-red-500'
                        : 'border-white/50 focus:ring-purple-300'
                    }`}
                    placeholder="Ex: Tecnologia, Saúde, Educação..."
                  />
                  {errors.ramo && (
                    <p className="text-red-500 text-sm mt-1">{errors.ramo.message as string}</p>
                  )}
                </div>
                {/* Número de Funcionários */}
                <div>
                  <p className="block text-white font-semibold mb-2">Número de Funcionários:</p>
                  <div className="flex space-x-4">
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        value="Menos de 5 Funcionários"
                        {...register('numEmployees', { required: 'Selecione uma opção' })}
                        className="form-radio text-purple-300"
                      />
                      <span className="ml-2 text-white">Menos de 5 Funcionários</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        value="Mais de 5 Funcionários"
                        {...register('numEmployees', { required: 'Selecione uma opção' })}
                        className="form-radio text-purple-300"
                      />
                      <span className="ml-2 text-white">Mais de 5 Funcionários</span>
                    </label>
                  </div>
                  {errors.numEmployees && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.numEmployees.message as string}
                    </p>
                  )}
                </div>
              </>
            )}

            {currentStep === 2 && (
              <>
                {/* Faturamento Anual */}
                <div>
                  <p className="block text-white font-semibold mb-2">Qual seu faturamento anual?</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {[
                      'Ainda não faturamos',
                      'Até 500k',
                      'De 500k a 1milhão',
                      'De 1 milhão a 5 milhões',
                      'De 5 milhões a 10 milhões',
                      'De 10 milhões a 50 milhões',
                      'De 50 milhões a 500 milhões',
                      'Acima de 500 milhões',
                    ].map((option) => (
                      <label key={option} className="inline-flex items-center">
                        <input
                          type="radio"
                          value={option}
                          {...register('annualRevenue', { required: 'Selecione uma opção' })}
                          className="form-radio text-purple-300"
                        />
                        <span className="ml-2 text-white">{option}</span>
                      </label>
                    ))}
                  </div>
                  {errors.annualRevenue && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.annualRevenue.message as string}
                    </p>
                  )}
                </div>
                {/* Dor que deseja resolver */}
                <div>
                  <label className="block text-white font-semibold mb-2">
                    Qual dor você deseja resolver no evento?
                  </label>
                  <textarea
                    {...register('eventPain', { required: 'Este campo é obrigatório' })}
                    className={`w-full px-4 py-2 border rounded-lg bg-transparent text-white placeholder-white/70 focus:outline-none focus:ring-2 ${
                      errors.eventPain
                        ? 'border-red-500 focus:ring-red-500'
                        : 'border-white/50 focus:ring-purple-300'
                    }`}
                    placeholder="Descreva a dor que deseja resolver..."
                  ></textarea>
                  {errors.eventPain && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.eventPain.message as string}
                    </p>
                  )}
                </div>
              </>
            )}

            {currentStep === 3 && (
              <>
                {/* Estágio Atual no Digital */}
                <div>
                  <p className="block text-white font-semibold mb-2">
                    Como você descreve seu estágio atual no digital?
                  </p>
                  <div className="flex flex-col space-y-2">
                    {[
                      { value: 'Basico', label: 'Básico (Tenho rede social, mas não uso)' },
                      {
                        value: 'Intermediario',
                        label: 'Intermediário (Tenho rede social e posto algumas coisas)',
                      },
                      {
                        value: 'Avancado',
                        label:
                          'Avançado (Tenho uma rede social ativa e já executo alguma estratégia)',
                      },
                    ].map((option) => (
                      <label key={option.value} className="inline-flex items-center">
                        <input
                          type="radio"
                          value={option.label}
                          {...register('digitalStage', { required: 'Selecione uma opção' })}
                          className="form-radio text-purple-300"
                        />
                        <span className="ml-2 text-white">{option.label}</span>
                      </label>
                    ))}
                  </div>
                  {errors.digitalStage && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.digitalStage.message as string}
                    </p>
                  )}
                </div>
                {/* Cargo na Empresa */}
                <div>
                  <p className="block text-white font-semibold mb-2">Qual Seu Cargo na empresa?</p>
                  <div className="flex flex-col space-y-2">
                    {[
                      'Coordenador',
                      'Gerente',
                      'Diretor',
                      'Vice Presidente',
                      'Presidente ou CEO',
                      'Sócio Fundador',
                    ].map((option) => (
                      <label key={option} className="inline-flex items-center">
                        <input
                          type="radio"
                          value={option}
                          {...register('jobTitle', { required: 'Selecione uma opção' })}
                          className="form-radio text-purple-300"
                        />
                        <span className="ml-2 text-white">{option}</span>
                      </label>
                    ))}
                  </div>
                  {errors.jobTitle && (
                    <p className="text-red-500 text-sm mt-1">{errors.jobTitle.message as string}</p>
                  )}
                </div>
              </>
            )}

            {/* Botões de Navegação */}
            <div className="flex justify-between">
              {currentStep > 0 && (
                <button
                  type="button"
                  onClick={handleBack}
                  className="bg-purple-600 hover:bg-purple-500 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
                >
                  Voltar
                </button>
              )}
              {currentStep < totalSteps - 1 && (
                <button
                  type="button"
                  onClick={handleNext}
                  className="ml-auto bg-purple-600 hover:bg-purple-500 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
                >
                  Próximo
                </button>
              )}
              {currentStep === totalSteps - 1 && (
                <button
                  type="submit"
                  className="ml-auto bg-purple-600 hover:bg-purple-500 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
                >
                  Enviar Formulário
                </button>
              )}
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default Formulario;
