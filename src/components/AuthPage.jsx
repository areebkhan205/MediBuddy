import git from "./../assets/git.jpg";
import logo from "./../assets/ecomedx-logo.png";
import { useForm } from "react-hook-form";



export function AuthPage({ type, onClick, errorMessage }) {
  const {
    register,
    handleSubmit,
    watch,

    formState: { errors, isSubmitting },

    // formState: { errors },
  } = useForm({
    defaultValues: { role: "doctor" },
  });

  function onSubmit(data) {
    // Simulate async submission (e.g., API call)
    return new Promise((resolve) => {
      setTimeout(() => {
        onClick(data);
        resolve();
      }, 1000);
    });
  }

  return (
    <div className="flex h-screen bg-gradient-to-r from-blue-50 to-teal-50">
      {/* Left Image Section */}
      <div className="w-[50%] max-md:hidden relative overflow-hidden">
        <img
          className="absolute top-4 left-4 h-24 w-32 object-contain"
          src={logo}
          alt="EcoMedX Logo"
        />
        <img
          className="w-full h-full object-cover"
          src={git}
          alt="Hospital Authentication"
        />
      </div>

      {/* Right Form Section */}
      <div className="w-[50%] max-md:w-full flex items-center justify-center p-4">
        <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
          <h1 className="text-center text-3xl font-bold text-teal-700 mb-8">
            {type === "signup" ? "Join EcoMedX" : "EcoMedX Login"}
          </h1>
          <p className="text-center text-gray-600 mb-6">
            {type === "signup"
              ? "Create your account to access hospital services"
              : "Sign in to manage your healthcare needs"}
          </p>

          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            {/* Username Field (Signup Only) */}
            {type === "signup" && (
              <label htmlFor="username" className="block mb-4">
                <p className="text-lg font-medium text-gray-700">Username</p>
                <input
                  className="w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-teal-500 focus:outline-none"
                  placeholder="e.g., DrSmith123"
                  type="text"
                  {...register("username", {
                    required: "Username is required",
                    minLength: { value: 3, message: "Minimum 3 characters" },
                    maxLength: { value: 15, message: "Maximum 15 characters" },
                    pattern: {
                      value: /^[a-zA-Z0-9]+$/,
                      message: "Alphanumeric characters only",
                    },
                  })}
                />
                {errors.username && (
                  <p className="text-red-600 text-sm mt-1">
                    {errors.username.message}
                  </p>
                )}
              </label>
            )}

            {/* Email Field */}
            <label htmlFor="email" className="block mb-4">
              <p className="text-lg font-medium text-gray-700">Email</p>
              <input
                className="w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-teal-500 focus:outline-none"
                placeholder="e.g., doctor@ecomedx.com"
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Enter a valid email address",
                  },
                })}
              />
              {errors.email && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </label>

            {/* Password Field */}
            <label htmlFor="password" className="block mb-4">
              <p className="text-lg font-medium text-gray-700">Password</p>
              <input
                className="w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-teal-500 focus:outline-none"
                placeholder="Enter your password"
                type="password"
                {...register("password", {
                  required: "Password is required",
                  ...(type === "signup" && {
                    minLength: {
                      value: 8,
                      message: "Password must be at least 8 characters",
                    },
                    pattern: {
                      value:
                        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/,
                      message:
                        "Must include letters, numbers, and special characters",
                    },
                  }),
                })}
              />
              {type === "login" && errorMessage ? (
                <p className="text-red-600 text-sm mt-1">{errorMessage}</p>
              ) : (
                errors.password && (
                  <p className="text-red-600 text-sm mt-1">
                    {errors.password.message}
                  </p>
                )
              )}
            </label>

            {/* Role Selection (Signup Only) */}
            {type === "signup" && (
              <div className="mb-6">
                <p className="text-lg font-medium text-gray-700 mb-2">
                  Select Role
                </p>
                <div className="flex gap-6">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="role"
                      value="doctor"
                      className="w-4 h-4 text-teal-600 focus:ring-teal-500"
                      {...register("role", { required: "Role is required" })}
                    />
                    <span className="text-gray-700">Doctor</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="role"
                      value="patient"
                      className="w-4 h-4 text-teal-600 focus:ring-teal-500"
                      {...register("role", { required: "Role is required" })}
                    />
                    <span className="text-gray-700">Patient</span>
                  </label>
                </div>
                {errors.role && (
                  <p className="text-red-600 text-sm mt-1">
                    {errors.role.message}
                  </p>
                )}
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-2 mt-4 rounded-md text-white font-semibold ${
                isSubmitting
                  ? "bg-teal-400 cursor-not-allowed"
                  : "bg-teal-600 hover:bg-teal-700"
              }`}
            >
              {isSubmitting
                ? "Processing..."
                : type === "signup"
                ? "Sign Up"
                : "Log In"}
            </button>
          </form>

          {/* Footer Link */}
          <p className="text-center text-gray-600 mt-6">
            {type === "signup"
              ? "Already have an account? "
              : "Need an account? "}
            <a
              href={type === "signup" ? "/login" : "/signup"}
              className="text-teal-600 hover:underline"
            >
              {type === "signup" ? "Log In" : "Sign Up"}
            </a>
          </p>

          {/* Security Note */}
          <p className="text-center text-xs text-gray-500 mt-4">
            Protected by EcoMedX Security | HIPAA Compliant
          </p>
        </div>
      </div>
    </div>
  );

}
