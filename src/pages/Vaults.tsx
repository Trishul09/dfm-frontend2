import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Wallet, DollarSign } from "lucide-react";
import album1 from "@/assets/album-1.jpg";
import album2 from "@/assets/album-2.jpg";
import album3 from "@/assets/album-3.jpg";

interface VaultData {
  id: string;
  musicTitle: string;
  artist: string;
  cover: string;
  tokenHoldings: string;
  vaultBalance: string;
  apy: string;
  claimableYield: string;
  status: "active" | "claimable" | "pending";
}

const Vaults = () => {
  const [activeTab, setActiveTab] = useState("my-tokens");
  const [showClaimModal, setShowClaimModal] = useState(false);
  const [selectedVault, setSelectedVault] = useState<VaultData | null>(null);

  const vaultData: VaultData[] = [
    {
      id: "1",
      musicTitle: "Liquid Dreams",
      artist: "Aurora Synth",
      cover: album1,
      tokenHoldings: "125 tokens",
      vaultBalance: "6.25 SUI",
      apy: "12.5%",
      claimableYield: "0.78 SUI",
      status: "claimable"
    },
    {
      id: "2",
      musicTitle: "Digital Flow",
      artist: "Neon Pulse",
      cover: album2,
      tokenHoldings: "89 tokens",
      vaultBalance: "7.12 SUI",
      apy: "15.2%",
      claimableYield: "1.02 SUI",
      status: "claimable"
    },
    {
      id: "3",
      musicTitle: "Ethereal Mist",
      artist: "Cloud Walker",
      cover: album3,
      tokenHoldings: "203 tokens",
      vaultBalance: "6.09 SUI",
      apy: "8.7%",
      claimableYield: "0.45 SUI",
      status: "active"
    }
  ];

  const tabs = [
    { id: "my-tokens", label: "My Tokens" },
    { id: "revenue-vaults", label: "Revenue Vaults" },
    { id: "claimable", label: "Claimable" }
  ];

  const handleClaimYield = (vault: VaultData) => {
    setSelectedVault(vault);
    setShowClaimModal(true);
  };

  const filteredVaults = vaultData.filter(vault => {
    if (activeTab === "claimable") return vault.status === "claimable";
    return true;
  });

  return (
    <div className="min-h-screen watercolor-bg relative overflow-hidden">
      {/* Ambient background effects */}
      <div className="fixed inset-0 opacity-15">
        <div className="absolute top-32 left-32 w-96 h-96 bg-gradient-radial from-green-400/25 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-40 w-80 h-80 bg-gradient-radial from-blue-400/20 to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 min-h-screen p-6">
        {/* Header */}
        <div className="max-w-6xl mx-auto mb-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Vault Management</h1>
            <p className="text-xl text-gray-600">Monitor your investments and earnings</p>
          </div>

          {/* Tab Navigation */}
          <Card className="glass-panel rounded-2xl p-2 inline-flex space-x-2 glow-golden float">
            {tabs.map((tab) => (
              <Button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                variant={activeTab === tab.id ? "default" : "ghost"}
                className={`px-6 py-3 rounded-xl transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-gradient-to-r from-yellow-400 to-yellow-500 text-white glow-golden"
                    : "text-gray-600 hover:text-yellow-500 hover:bg-yellow-500/10"
                } liquid-glow`}
              >
                {tab.label}
              </Button>
            ))}
          </Card>
        </div>

        {/* Vault Cards Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredVaults.map((vault, index) => (
              <Card 
                key={vault.id}
                className="glass-panel rounded-2xl p-6 hover:scale-105 transition-all duration-300 float"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="space-y-4">
                  {/* Header with Music Info */}
                  <div className="flex items-center space-x-4">
                    <img 
                      src={vault.cover} 
                      alt={vault.musicTitle}
                      className="w-16 h-16 rounded-xl object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-800">{vault.musicTitle}</h3>
                      <p className="text-sm text-gray-600">{vault.artist}</p>
                      <Badge 
                        className={`mt-1 ${
                          vault.status === "claimable" 
                            ? "bg-green-500/20 text-green-700 border-green-300" 
                            : "bg-blue-500/20 text-blue-700 border-blue-300"
                        }`}
                      >
                        {vault.status === "claimable" ? "Ready to Claim" : "Active"}
                      </Badge>
                    </div>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-white/20 rounded-xl">
                      <div className="flex items-center justify-center mb-1">
                        <Wallet className="w-4 h-4 text-gray-600 mr-1" />
                      </div>
                      <p className="text-xs text-gray-600">Holdings</p>
                      <p className="font-semibold text-gray-800">{vault.tokenHoldings}</p>
                    </div>

                    <div className="text-center p-3 bg-white/20 rounded-xl">
                      <div className="flex items-center justify-center mb-1">
                        <DollarSign className="w-4 h-4 text-gray-600 mr-1" />
                      </div>
                      <p className="text-xs text-gray-600">Vault Balance</p>
                      <p className="font-semibold text-gray-800">{vault.vaultBalance}</p>
                    </div>

                    <div className="text-center p-3 bg-white/20 rounded-xl">
                      <div className="flex items-center justify-center mb-1">
                        <TrendingUp className="w-4 h-4 text-green-600 mr-1" />
                      </div>
                      <p className="text-xs text-gray-600">APY</p>
                      <p className="font-semibold text-green-600">{vault.apy}</p>
                    </div>

                    <div className="text-center p-3 bg-white/20 rounded-xl">
                      <p className="text-xs text-gray-600">Claimable</p>
                      <p className="font-semibold text-yellow-600">{vault.claimableYield}</p>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-2">
                    <Button
                      onClick={() => handleClaimYield(vault)}
                      disabled={vault.status !== "claimable"}
                      className={`w-full py-3 transition-all duration-300 ${
                        vault.status === "claimable"
                          ? "bg-gradient-to-r from-green-400 to-green-500 hover:from-green-500 hover:to-green-600 text-white glow-golden liquid-glow"
                          : "bg-gray-200 text-gray-500 cursor-not-allowed"
                      }`}
                    >
                      {vault.status === "claimable" ? "Claim Yield" : "No Yield Available"}
                    </Button>

                    <Button
                      variant="outline"
                      className="w-full border-gray-300 hover:border-yellow-500 hover:text-yellow-500 liquid-glow"
                    >
                      View on Explorer
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Claim Yield Modal */}
      {showClaimModal && selectedVault && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <Card className="glass-panel rounded-3xl p-8 max-w-md w-full glow-golden slide-in-right">
            <div className="text-center space-y-6">
              <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center mx-auto">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Claim Vault Yield</h3>
                <p className="text-gray-600">{selectedVault.musicTitle}</p>
              </div>
              
              <div className="space-y-4 text-left">
                <div className="flex justify-between items-center p-4 bg-white/20 rounded-xl">
                  <span className="text-gray-600">Available Yield:</span>
                  <span className="font-semibold text-green-600 text-lg">{selectedVault.claimableYield}</span>
                </div>
                
                <div className="flex justify-between items-center p-4 bg-white/20 rounded-xl">
                  <span className="text-gray-600">Network Fee:</span>
                  <span className="font-semibold text-gray-600">~0.01 SUI</span>
                </div>
                
                <div className="flex justify-between items-center p-4 bg-yellow-500/10 rounded-xl border border-yellow-300">
                  <span className="text-gray-800 font-medium">You'll Receive:</span>
                  <span className="font-bold text-yellow-600 text-lg">
                    {parseFloat(selectedVault.claimableYield.split(' ')[0]) - 0.01} SUI
                  </span>
                </div>
              </div>

              <div className="flex space-x-3">
                <Button
                  variant="outline"
                  onClick={() => setShowClaimModal(false)}
                  className="flex-1"
                >
                  Cancel
                </Button>
                <Button
                  onClick={() => {
                    setShowClaimModal(false);
                    setSelectedVault(null);
                    // Handle claim logic here
                  }}
                  className="flex-1 bg-gradient-to-r from-green-400 to-green-500 hover:from-green-500 hover:to-green-600 text-white glow-golden pulse-golden"
                >
                  Harvest Yield
                </Button>
              </div>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
};

export default Vaults;