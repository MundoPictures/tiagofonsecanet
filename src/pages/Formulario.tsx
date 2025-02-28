import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { IMaskInput } from 'react-imask';
import axios from 'axios';
import signature from '../assets/tiagoassinatura.png';

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
  companyName: string;
  rg: string;
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
  const totalSteps = 5;

  // Define quais campos validar em cada etapa
  const stepFields: (keyof FormData)[][] = [
    ['fullName', 'email', 'whatsapp'],
    ['ramo', 'numEmployees'],
    ['annualRevenue'],
    ['eventPain'],
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
    <div className="min-h-screen relative overflow-hidden bg-[#0F0B21] flex flex-col items-center justify-between px-4 py-10">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-[10px] opacity-50">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-purple-600 blur-[120px]"></div>
          <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-blue-600 blur-[120px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-indigo-600 blur-[120px]"></div>
        </div>
      </div>

      <div className="w-full max-w-2xl relative">
        {/* Header with text and signature */}
        <div className="mb-12 flex items-center justify-between">
          <h1 className="text-3xl md:text-4xl font-light text-white">
            Seu primeiro passo
            <span className="block mt-1 bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent font-bold">
              rumo à autoridade
            </span>
          </h1>
          <img 
            src={signature} 
            alt="Assinatura Tiago Fonseca" 
            className="h-16 object-contain brightness-150 transform -rotate-6 hover:scale-105 transition-all duration-300 ml-6"
          />
        </div>

        {/* Card container with enhanced glassmorphism */}
        <div className="bg-white/10 backdrop-blur-xl rounded-2xl shadow-2xl p-8 border border-white/20">
          <div className="mb-8 text-center relative">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent mb-6">
              Formulário de Aplicação para Autoridade
            </h2>
            
            {/* Enhanced progress bar */}
            <div className="relative pt-1">
              <div className="overflow-hidden h-2 text-xs flex rounded-full bg-white/20">
                <div
                  className="transition-all duration-500 ease-out shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gradient-to-r from-purple-400 to-blue-400"
                  style={{ width: `${((currentStep + 1) / totalSteps) * 100}%` }}
                >
                </div>
              </div>
            </div>
          </div>

          {success && (
            <div className="relative">
              {/* Success animation background */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-xl blur-xl animate-pulse"></div>
              
              {/* Success content */}
              <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl p-8 text-center">
                {/* Success icon */}
                <div className="mb-6">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center p-1">
                    <div className="w-full h-full bg-[#0F0B21] rounded-full flex items-center justify-center">
                      <svg 
                        className="w-10 h-10 text-purple-400 animate-[bounce_1s_ease-in-out_infinite]" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Success message */}
                <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent mb-4">
                  Formulário Enviado com Sucesso! 🎉
                </h3>
                
                {/* Divider */}
                <div className="w-16 h-1 mx-auto bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mb-4"></div>
                
                {/* Success description */}
                <div className="space-y-4">
                  <p className="text-white/80 text-lg">
                    Obrigado por compartilhar suas informações!
                  </p>
                  <p className="text-white/60">
                    Em breve entraremos em contato com você para iniciar sua jornada rumo à autoridade digital.
                  </p>
                </div>

                {/* Signature on success */}
                <div className="mt-8 flex justify-center">
                  <img 
                    src={signature} 
                    alt="Assinatura Tiago Fonseca" 
                    className="h-12 object-contain brightness-150 transform -rotate-6 opacity-80"
                  />
                </div>
              </div>
            </div>
          )}

          {error && (
            <div className="relative">
              {/* Error animation background */}
              <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-pink-600/20 rounded-xl blur-xl animate-pulse"></div>
              
              {/* Error content */}
              <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl p-8 text-center">
                {/* Error icon */}
                <div className="mb-6">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center p-1">
                    <div className="w-full h-full bg-[#0F0B21] rounded-full flex items-center justify-center">
                      <svg 
                        className="w-10 h-10 text-red-400" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Error message */}
                <h3 className="text-2xl font-bold bg-gradient-to-r from-red-300 to-pink-300 bg-clip-text text-transparent mb-4">
                  Erro ao Enviar Formulário
                </h3>
                
                {/* Divider */}
                <div className="w-16 h-1 mx-auto bg-gradient-to-r from-red-500 to-pink-500 rounded-full mb-4"></div>
                
                {/* Error description */}
                <p className="text-white/80">
                  Por favor, recarregue a página e tente novamente.
                </p>
              </div>
            </div>
          )}

          {!success && (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              {/* Form content remains the same, updating styles for form elements */}
              <div className="transition-all duration-300 ease-in-out">
                {/* Existing form steps content */}
                {currentStep === 0 && (
                  <>
                    <div className="space-y-6">
                      <div className="form-group">
                        <label className="block text-white font-medium mb-2">Nome Completo</label>
                        <input
                          type="text"
                          {...register('fullName', { required: 'Nome é obrigatório' })}
                          className={`w-full px-4 py-3 border rounded-xl bg-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 transition-all duration-300 ${
                            errors.fullName
                              ? 'border-red-500/50 focus:ring-red-500/50'
                              : 'border-white/20 focus:ring-purple-500/50 hover:border-purple-400/50'
                          }`}
                          placeholder="Digite seu nome completo"
                        />
                        {errors.fullName && (
                          <p className="text-red-400 text-sm mt-2">{errors.fullName.message as string}</p>
                        )}
                      </div>

                      <div className="form-group">
                        <label className="block text-white font-medium mb-2">Seu melhor e-mail</label>
                        <input
                          type="email"
                          {...register('email', {
                            required: 'E-mail é obrigatório',
                            pattern: {
                              value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                              message: 'Formato de e-mail inválido',
                            },
                          })}
                          className={`w-full px-4 py-3 border rounded-xl bg-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 transition-all duration-300 ${
                            errors.email
                              ? 'border-red-500/50 focus:ring-red-500/50'
                              : 'border-white/20 focus:ring-purple-500/50 hover:border-purple-400/50'
                          }`}
                          placeholder="exemplo@dominio.com"
                        />
                        {errors.email && (
                          <p className="text-red-400 text-sm mt-2">{errors.email.message as string}</p>
                        )}
                      </div>

                      <div className="form-group">
                        <label className="block text-white font-medium mb-2">Whatsapp (Número + DDD)</label>
                        <Controller
                          name="whatsapp"
                          control={control}
                          rules={{ required: 'Whatsapp é obrigatório' }}
                          render={({ field }) => (
                            <IMaskInput
                              mask="(00) 00000-0000"
                              {...field}
                              className={`w-full px-4 py-3 border rounded-xl bg-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 transition-all duration-300 ${
                                errors.whatsapp
                                  ? 'border-red-500/50 focus:ring-red-500/50'
                                  : 'border-white/20 focus:ring-purple-500/50 hover:border-purple-400/50'
                              }`}
                              placeholder="(11) 91234-5678"
                            />
                          )}
                        />
                        {errors.whatsapp && (
                          <p className="text-red-400 text-sm mt-2">{errors.whatsapp.message as string}</p>
                        )}
                      </div>
                    </div>
                  </>
                )}

                {currentStep === 1 && (
                  <>
                    <div className="space-y-6">
                      <div className="form-group">
                        <label className="block text-white font-medium mb-2">Qual seu ramo de atuação?</label>
                        <input
                          type="text"
                          {...register('ramo', { required: 'Este campo é obrigatório' })}
                          className={`w-full px-4 py-3 border rounded-xl bg-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 transition-all duration-300 ${
                            errors.ramo
                              ? 'border-red-500/50 focus:ring-red-500/50'
                              : 'border-white/20 focus:ring-purple-500/50 hover:border-purple-400/50'
                          }`}
                          placeholder="Ex: Tecnologia, Saúde, Educação..."
                        />
                        {errors.ramo && (
                          <p className="text-red-400 text-sm mt-2">{errors.ramo.message as string}</p>
                        )}
                      </div>

                      <div className="form-group">
                        <p className="block text-white font-medium mb-4">Número de Funcionários</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <label className="relative">
                            <input
                              type="radio"
                              value="Menos de 5 Funcionários"
                              {...register('numEmployees', { required: 'Selecione uma opção' })}
                              className="peer sr-only"
                            />
                            <div className="w-full p-4 text-white rounded-xl border border-white/20 cursor-pointer transition-all duration-300 hover:border-purple-400/50 peer-checked:border-purple-400 peer-checked:bg-purple-400/20">
                              <span className="block">Menos de 5 Funcionários</span>
                            </div>
                          </label>
                          <label className="relative">
                            <input
                              type="radio"
                              value="Mais de 5 Funcionários"
                              {...register('numEmployees', { required: 'Selecione uma opção' })}
                              className="peer sr-only"
                            />
                            <div className="w-full p-4 text-white rounded-xl border border-white/20 cursor-pointer transition-all duration-300 hover:border-purple-400/50 peer-checked:border-purple-400 peer-checked:bg-purple-400/20">
                              <span className="block">Mais de 5 Funcionários</span>
                            </div>
                          </label>
                        </div>
                        {errors.numEmployees && (
                          <p className="text-red-400 text-sm mt-2">{errors.numEmployees.message as string}</p>
                        )}
                      </div>
                    </div>
                  </>
                )}

                {currentStep === 2 && (
                  <>
                    <div className="space-y-6">
                      <div className="form-group">
                        <label className="block text-white font-medium mb-2">Nome da Empresa</label>
                        <input
                          type="text"
                          {...register('companyName', { required: 'Nome da empresa é obrigatório' })}
                          className={`w-full px-4 py-3 border rounded-xl bg-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 transition-all duration-300 ${
                            errors.companyName
                              ? 'border-red-500/50 focus:ring-red-500/50'
                              : 'border-white/20 focus:ring-purple-500/50 hover:border-purple-400/50'
                          }`}
                          placeholder="Digite o nome da sua empresa"
                        />
                        {errors.companyName && (
                          <p className="text-red-400 text-sm mt-2">{errors.companyName.message as string}</p>
                        )}
                      </div>

                      <div className="form-group">
                        <label className="block text-white font-medium mb-2">RG</label>
                        <Controller
                          name="rg"
                          control={control}
                          rules={{ required: 'RG é obrigatório' }}
                          render={({ field }) => (
                            <IMaskInput
                              mask="00.000.000-0"
                              {...field}
                              className={`w-full px-4 py-3 border rounded-xl bg-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 transition-all duration-300 ${
                                errors.rg
                                  ? 'border-red-500/50 focus:ring-red-500/50'
                                  : 'border-white/20 focus:ring-purple-500/50 hover:border-purple-400/50'
                              }`}
                              placeholder="00.000.000-0"
                            />
                          )}
                        />
                        {errors.rg && (
                          <p className="text-red-400 text-sm mt-2">{errors.rg.message as string}</p>
                        )}
                      </div>

                      <div className="form-group">
                        <p className="block text-white font-medium mb-4">Qual seu faturamento anual?</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
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
                            <label key={option} className="relative">
                              <input
                                type="radio"
                                value={option}
                                {...register('annualRevenue', { required: 'Selecione uma opção' })}
                                className="peer sr-only"
                              />
                              <div className="w-full p-4 text-white rounded-xl border border-white/20 cursor-pointer transition-all duration-300 hover:border-purple-400/50 peer-checked:border-purple-400 peer-checked:bg-purple-400/20">
                                <span className="block text-sm">{option}</span>
                              </div>
                            </label>
                          ))}
                        </div>
                        {errors.annualRevenue && (
                          <p className="text-red-400 text-sm mt-2">{errors.annualRevenue.message as string}</p>
                        )}
                      </div>
                    </div>
                  </>
                )}

                {currentStep === 3 && (
                  <>
                    <div className="space-y-6">
                      <div className="form-group">
                        <p className="block text-white font-medium mb-4">Qual seu principal desafio atual?</p>
                        <div className="space-y-3">
                          {[
                            'Falta de autoridade digital – Quero me posicionar como uma referência no meu nicho.',
                            'Baixo engajamento nas redes sociais – Tenho dificuldade em atrair e engajar meu público.',
                            'Dificuldade em criar conteúdo estratégico – Não sei o que postar ou como planejar meus conteúdos.',
                            'Pouca geração de leads e vendas – Quero atrair mais clientes e vender meus produtos/serviços no digital.',
                            'Falta de conhecimento sobre marketing digital – Preciso entender melhor estratégias para crescer no online.',
                            'Medo ou insegurança – Tenho receio em aparecer e criar conteudo no digital',
                            'Falta de tempo e produtividade – Preciso de métodos para produzir conteúdo sem perder muito tempo.',
                          ].map((option) => (
                            <label key={option} className="relative">
                              <input
                                type="radio"
                                value={option}
                                {...register('eventPain', { required: 'Selecione uma opção' })}
                                className="peer sr-only"
                              />
                              <div className="w-full p-4 text-white rounded-xl border border-white/20 cursor-pointer transition-all duration-300 hover:border-purple-400/50 peer-checked:border-purple-400 peer-checked:bg-purple-400/20">
                                <span className="block text-sm">{option}</span>
                              </div>
                            </label>
                          ))}
                          {/* Outro option with text input */}
                          <label className="relative">
                            <input
                              type="radio"
                              value="Outro"
                              {...register('eventPain', { required: 'Selecione uma opção' })}
                              className="peer sr-only"
                            />
                            <div className="w-full p-4 text-white rounded-xl border border-white/20 cursor-pointer transition-all duration-300 hover:border-purple-400/50 peer-checked:border-purple-400 peer-checked:bg-purple-400/20">
                              <div className="flex items-center space-x-2">
                                <span className="block text-sm">Outro</span>
                                <input
                                  type="text"
                                  onClick={(e) => {
                                    const radio = e.currentTarget.parentElement?.parentElement?.previousElementSibling as HTMLInputElement;
                                    if (radio) radio.checked = true;
                                  }}
                                  onChange={(e) => {
                                    const radio = e.currentTarget.parentElement?.parentElement?.previousElementSibling as HTMLInputElement;
                                    if (radio) radio.value = `Outro – ${e.target.value}`;
                                  }}
                                  className="ml-2 flex-1 bg-transparent border-b border-white/30 focus:border-purple-400 outline-none px-2 py-1"
                                  placeholder="Especifique"
                                />
                              </div>
                            </div>
                          </label>
                        </div>
                        {errors.eventPain && (
                          <p className="text-red-400 text-sm mt-2">{errors.eventPain.message as string}</p>
                        )}
                      </div>
                    </div>
                  </>
                )}

                {currentStep === 4 && (
                  <>
                    <div className="space-y-6">
                      <div className="form-group">
                        <p className="block text-white font-medium mb-4">Como você descreve seu estágio atual no digital?</p>
                        <div className="space-y-3">
                          {[
                            { value: 'Basico', label: 'Iniciante (Estou começando no digital)' },
                            { value: 'Intermediario', label: 'Em Desenvolvimento (Já tenho presença digital mas preciso melhorar)' },
                            { value: 'Avancado', label: 'Avançado (Tenho presença digital estabelecida e busco autoridade)' },
                          ].map((option) => (
                            <label key={option.value} className="relative">
                              <input
                                type="radio"
                                value={option.label}
                                {...register('digitalStage', { required: 'Selecione uma opção' })}
                                className="peer sr-only"
                              />
                              <div className="w-full p-4 text-white rounded-xl border border-white/20 cursor-pointer transition-all duration-300 hover:border-purple-400/50 peer-checked:border-purple-400 peer-checked:bg-purple-400/20">
                                <span className="block">{option.label}</span>
                              </div>
                            </label>
                          ))}
                        </div>
                        {errors.digitalStage && (
                          <p className="text-red-400 text-sm mt-2">{errors.digitalStage.message as string}</p>
                        )}
                      </div>

                      <div className="form-group">
                        <p className="block text-white font-medium mb-4">Qual Seu Cargo na empresa?</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {[
                            'Coordenador',
                            'Gerente',
                            'Diretor',
                            'Vice Presidente',
                            'Presidente ou CEO',
                            'Sócio Fundador',
                          ].map((option) => (
                            <label key={option} className="relative">
                              <input
                                type="radio"
                                value={option}
                                {...register('jobTitle', { required: 'Selecione uma opção' })}
                                className="peer sr-only"
                              />
                              <div className="w-full p-4 text-white rounded-xl border border-white/20 cursor-pointer transition-all duration-300 hover:border-purple-400/50 peer-checked:border-purple-400 peer-checked:bg-purple-400/20">
                                <span className="block">{option}</span>
                              </div>
                            </label>
                          ))}
                        </div>
                        {errors.jobTitle && (
                          <p className="text-red-400 text-sm mt-2">{errors.jobTitle.message as string}</p>
                        )}
                      </div>
                    </div>
                  </>
                )}
              </div>

              {/* Navigation Buttons */}
              <div className="flex justify-between pt-6">
                {currentStep > 0 && (
                  <button
                    type="button"
                    onClick={handleBack}
                    className="px-6 cursor-pointer py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium transition-all duration-300 border border-white/20 hover:border-white/30 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                  >
                    Voltar
                  </button>
                )}
                {currentStep < totalSteps - 1 ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="ml-auto cursor-pointer px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-medium transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                  >
                    Próximo
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="ml-auto px-6 cursor-pointer py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-medium transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                  >
                    Enviar Formulário
                  </button>
                )}
              </div>
            </form>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 w-full max-w-2xl mt-8">
        <div className="text-center">
          <div className="inline-block">
            <div className="px-6 py-2 rounded-full bg-white/5 backdrop-blur-lg border border-white/10">
              <p className="text-white/70 text-sm">
                Tiago Fonseca | Todos os direitos reservados {new Date().getFullYear()}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Formulario;
