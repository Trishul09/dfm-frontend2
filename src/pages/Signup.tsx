import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { User, Mic, Mail, Lock, Upload, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const Signup = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState<"role" | "user" | "creator">("role");
  const [selectedRole, setSelectedRole] = useState<"user" | "creator" | null>(null);

  const handleRoleSelect = (role: "user" | "creator") => {
    setSelectedRole(role);
    setStep(role);
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen watercolor-secondary-bg relative overflow-hidden flex items-center justify-center p-6">
      {/* Ambient background effects */}
      <div className="fixed inset-0 opacity-20">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-radial from-purple-400/30 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-radial from-yellow-400/25 to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 w-full max-w-md">
        {step === "role" && (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-800 mb-2">Join the Platform</h1>
              <p className="text-gray-600">Choose your role to get started</p>
            </div>

            <div className="space-y-4">
              <Card 
                className="glass-panel rounded-2xl p-6 cursor-pointer hover:scale-105 transition-all duration-300 glow-golden liquid-glow group"
                onClick={() => handleRoleSelect("user")}
              >
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full flex items-center justify-center mx-auto group-hover:pulse-golden">
                    <User className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">I'm a User</h3>
                    <p className="text-gray-600">Listen, invest, and collect music NFTs</p>
                  </div>
                </div>
              </Card>

              <Card 
                className="glass-panel rounded-2xl p-6 cursor-pointer hover:scale-105 transition-all duration-300 glow-golden liquid-glow group"
                onClick={() => handleRoleSelect("creator")}
              >
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center mx-auto group-hover:pulse-golden">
                    <Mic className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">I'm a Creator</h3>
                    <p className="text-gray-600">Upload, tokenize, and monetize your music</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        )}

        {(step === "user" || step === "creator") && (
          <Card className="glass-panel rounded-3xl p-8 glow-golden slide-in-right">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                {step === "creator" ? "Creator Signup" : "User Signup"}
              </h2>
              <p className="text-gray-600">Create your account to get started</p>
            </div>

            <form onSubmit={handleSignup} className="space-y-6">
              <div className="space-y-4">
                <Input type="email" placeholder="Email address" className="rounded-xl" required />
                <Input type="password" placeholder="Password" className="rounded-xl" required />
                <Input type="password" placeholder="Confirm Password" className="rounded-xl" required />
              </div>

              {step === "creator" && (
                <div className="space-y-4 p-6 bg-white/20 rounded-xl">
                  <h3 className="font-semibold text-gray-800">KYC Verification</h3>
                  <div className="grid grid-cols-1 gap-4">
                    <div className="border-2 border-dashed border-gray-300 rounded-xl p-4 text-center hover:border-yellow-400 transition-colors">
                      <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-sm text-gray-600">Upload Government ID</p>
                    </div>
                    <div className="border-2 border-dashed border-gray-300 rounded-xl p-4 text-center hover:border-yellow-400 transition-colors">
                      <Camera className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-sm text-gray-600">Take Live Photo</p>
                    </div>
                  </div>
                </div>
              )}

              <Button
                type="submit"
                className="w-full py-3 text-lg bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-white glow-golden liquid-glow"
              >
                {step === "creator" ? "Create & Verify Account" : "Create Account"}
              </Button>
            </form>

            <div className="text-center mt-6">
              <p className="text-gray-600">
                Already have an account?{" "}
                <button
                  onClick={() => navigate("/login")}
                  className="text-yellow-600 hover:text-yellow-700 font-medium"
                >
                  Login
                </button>
              </p>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Signup;