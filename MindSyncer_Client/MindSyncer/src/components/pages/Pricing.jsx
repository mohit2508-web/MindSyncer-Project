import { useState } from "react";
import ContactUsPopup from "./ContactUsPopup";

export default function Pricing() {
  const [selectedPlan, setSelectedPlan] = useState("professional");
  const [billingCycle, setBillingCycle] = useState("monthly");
  const [isPopupOpen, setPopupOpen] = useState(false);

  const handleSelect = (plan) => {
    setSelectedPlan(plan);
  };

  const isSelected = (plan) => selectedPlan === plan;

  const plans = {
    basic: {
      name: "Free Plan",
      monthlyPrice: 0,
      annualPrice: 0,
      description: "Perfect for small businesses just starting out",
      features: [
        "Employee Onboarding",
        "Basic Payroll Processing",
        "Email Support",
        "50 Employee Profiles"
      ],
      popular: false
    },
    professional: {
      name: "Professional Plan",
      monthlyPrice: 79,
      annualPrice: 65,
      description: "Ideal for growing businesses needing more advanced features",
      features: [
        "All Basic Features",
        "Advanced Payroll Processing",
        "Custom Reports & Analytics",
        "Third-Party Integrations"
      ],
      popular: true
    },
    enterprise: {
      name: "Enterprise Plan",
      monthlyPrice: 199,
      annualPrice: 165,
      description: "Designed for large organizations needing comprehensive HR solutions",
      features: [
        "All Professional Features",
        "Unlimited Employees",
        "Custom Workflows",
        "Dedicated Account Manager"
      ],
      popular: false
    }
  };

  const getPrice = (plan) => {
    return billingCycle === "monthly" ? plans[plan].monthlyPrice : plans[plan].annualPrice;
  };

  const getSavings = (plan) => {
    const monthly = plans[plan].monthlyPrice;
    const annual = plans[plan].annualPrice;
    return Math.round(((monthly - annual) / monthly) * 100);
  };

  return (
    <div className="bg-gradient-to-br from-slate-50 to-blue-50 min-h-screen py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            Plans That Fit Your Business
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From startups to enterprises, find the right solution to streamline your HR processes
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-xl p-2 shadow-lg border">
            <button
              className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
                billingCycle === "monthly"
                  ? "bg-indigo-600 text-white shadow-md"
                  : "text-gray-600 hover:text-indigo-600"
              }`}
              onClick={() => setBillingCycle("monthly")}
            >
              Monthly
            </button>
            <button
              className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 relative ${
                billingCycle === "annually"
                  ? "bg-indigo-600 text-white shadow-md"
                  : "text-gray-600 hover:text-indigo-600"
              }`}
              onClick={() => setBillingCycle("annually")}
            >
              Annually
              {billingCycle === "annually" && (
                <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                  Save 20%
                </span>
              )}
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {Object.entries(plans).map(([key, plan]) => (
            <div
              key={key}
              className={`rounded-3xl shadow-xl p-8 cursor-pointer transition-all duration-500 transform hover:scale-[1.02] relative overflow-hidden ${
                isSelected(key)
                  ? "bg-gradient-to-br from-indigo-600 to-purple-700 text-white shadow-2xl"
                  : plan.popular
                  ? "bg-white border-2 border-indigo-200 shadow-lg"
                  : "bg-white border border-gray-200 hover:border-indigo-300"
              }`}
              onClick={() => handleSelect(key)}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4 py-2 rounded-bl-lg text-sm font-semibold">
                  Most Popular
                </div>
              )}

              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="mb-6 md:mb-0 md:flex-1">
                  <h3 className={`text-2xl font-bold mb-2 ${isSelected(key) ? "text-white" : "text-gray-900"}`}>
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline mb-4">
                    <span className={`text-5xl font-bold ${isSelected(key) ? "text-white" : "text-gray-900"}`}>
                      ${getPrice(key)}
                    </span>
                    <span className={`text-lg ml-2 ${isSelected(key) ? "text-indigo-100" : "text-gray-600"}`}>
                      /{billingCycle === "monthly" ? "month" : "month"}
                    </span>
                  </div>
                  {billingCycle === "annually" && (
                    <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium inline-block mb-4">
                      Save {getSavings(key)}% annually
                    </div>
                  )}
                  <p className={`text-lg ${isSelected(key) ? "text-indigo-100" : "text-gray-600"}`}>
                    {plan.description}
                  </p>
                </div>

                {/* Upcoming Button */}
                <div className="mt-6 w-full">
                <button
                  disabled
                  className="w-full rounded-full mb-3 font-semibold text-lg shadow-md transition-all duration-300 bg-gray-400 text-white cursor-not-allowed"
                >
                  Upcoming Plans
                </button>

                <span
                  className="block text-white font-semibold mt-2 text-center"
                  style={{
                    // textShadow: '0 0 4px #22c55e, 0 0 8px #22c55e, 0 0 12px #22c55e',
                    color: '#22c55e'
                  }}
                >
                  ✨ Comming soon
                </span>
              </div>

              </div>

              <div className={`mt-8 pt-6 border-t border-opacity-20 ${isSelected(key) ? "border-white" : "border-gray-200"}`}>
                <p className={`text-sm font-semibold mb-4 ${isSelected(key) ? "text-indigo-100" : "text-gray-500"}`}>
                  What you will get
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {plan.features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                        isSelected(key) ? "bg-white" : "bg-indigo-100"
                      }`}>
                        <svg className="w-3 h-3 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className={`text-sm ${isSelected(key) ? "text-white" : "text-gray-600"}`}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-600 text-lg mb-4">
            Need a custom solution? We've got you covered.
          </p>
          <button 
            onClick={() => setPopupOpen(true)}
            className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg">
            Contact Us
          </button>
          <ContactUsPopup isOpen={isPopupOpen} onClose={() => setPopupOpen(false)} />
        </div>
      </div>
    </div>
  );
}
