import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { 
  User, 
  Music, 
  Heart, 
  Users, 
  BarChart3, 
  Copy, 
  ArrowLeft,
  Wallet
} from "lucide-react";
import userAvatar from "@/assets/user-avatar.jpg";
import album1 from "@/assets/album-1.jpg";
import album2 from "@/assets/album-2.jpg";
import album3 from "@/assets/album-3.jpg";

const ListenerProfile = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("my-nfts");
  const [isWalletConnected, setIsWalletConnected] = useState(false);

  const userData = {
    name: "Alex Chen",
    walletAddress: "0x1234...5678",
    avatar: userAvatar,
    followers: "1.2K",
    following: "834",
  };

  const tabs = [
    { id: "my-nfts", label: "My NFTs", icon: Music },
    { id: "liked-songs", label: "Liked Songs", icon: Heart },
    { id: "following", label: "Following", icon: Users },
    { id: "vault-stats", label: "Vault Stats", icon: BarChart3 },
  ];

  const mockNFTs = [
    { id: "1", title: "Liquid Dreams", artist: "Aurora Synth", cover: album1, owned: "5 tokens", earnings: "0.25 SUI" },
    { id: "2", title: "Digital Flow", artist: "Neon Pulse", cover: album2, owned: "3 tokens", earnings: "0.18 SUI" },
    { id: "3", title: "Ethereal Mist", artist: "Cloud Walker", cover: album3, owned: "8 tokens", earnings: "0.42 SUI" },
  ];

  const mockVaults = [
    { title: "Liquid Dreams", invested: "2.5 SUI", tvl: "125.8 SUI", apr: "18.2%", withdrawable: "0.31 SUI" },
    { title: "Digital Flow", invested: "1.8 SUI", tvl: "89.3 SUI", apr: "22.1%", withdrawable: "0.24 SUI" },
  ];

  const handleConnectWallet = () => {
    // Mock wallet connection
    setIsWalletConnected(!isWalletConnected);
  };

  return (
    <div className="min-h-screen emerald-bg relative overflow-hidden">
      {/* Ambient background effects */}
      <div className="fixed inset-0 opacity-20">
        <div className="absolute top-20 right-32 w-96 h-96 bg-gradient-radial from-yellow-400/25 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 left-20 w-80 h-80 bg-gradient-radial from-emerald-400/30 to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 min-h-screen p-6">
        <div className="max-w-6xl mx-auto">
          {/* Header with Back Button and Wallet Connect */}
          <div className="flex items-center justify-between mb-8">
            <Button
              variant="ghost"
              onClick={() => navigate("/dashboard")}
              className="flex items-center space-x-2 text-emerald-700 hover:text-golden-glow hover:bg-golden-glow/10 rounded-xl p-3 glow-golden"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Dashboard</span>
            </Button>

            <Button
              onClick={handleConnectWallet}
              className={`flex items-center space-x-2 px-6 py-3 rounded-xl transition-all duration-300 ${
                isWalletConnected
                  ? "bg-gradient-to-r from-emerald-500 to-emerald-600 text-white"
                  : "bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-white"
              } glow-golden`}
            >
              <Wallet className="w-5 h-5" />
              <span>{isWalletConnected ? "Connected" : "Connect Wallet"}</span>
            </Button>
          </div>

          {/* Profile Header */}
          <Card className="glass-panel rounded-3xl p-8 mb-8 glow-golden float">
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
              {/* Avatar */}
              <div className="relative">
                <img 
                  src={userData.avatar} 
                  alt={userData.name}
                  className="w-32 h-32 rounded-full object-cover border-4 border-white/30 shadow-xl"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-t from-emerald-400/20 to-transparent"></div>
              </div>

              {/* Profile Info */}
              <div className="flex-1 text-center md:text-left space-y-4">
                <div>
                  <h1 className="text-3xl font-bold text-emerald-800 mb-2">{userData.name}</h1>
                  <Badge className="bg-emerald-500/20 text-emerald-700 border-emerald-300 mb-3">
                    Music Lover
                  </Badge>
                  <div className="flex items-center justify-center md:justify-start space-x-2 text-emerald-600">
                    <span className="font-mono text-sm">{userData.walletAddress}</span>
                    <Button variant="ghost" size="sm" className="hover:text-golden-glow glow-golden">
                      <Copy className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <div className="flex items-center justify-center md:justify-start space-x-6">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-emerald-800">{userData.followers}</p>
                    <p className="text-sm text-emerald-600">Followers</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-emerald-800">{userData.following}</p>
                    <p className="text-sm text-emerald-600">Following</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Tab Navigation */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-2 justify-center">
              {tabs.map((tab) => (
                <Button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  variant={activeTab === tab.id ? "default" : "ghost"}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-xl transition-all duration-300 ${
                    activeTab === tab.id
                      ? "bg-gradient-to-r from-yellow-400 to-yellow-500 text-white glow-golden"
                      : "text-emerald-600 hover:text-golden-glow hover:bg-golden-glow/10"
                  }`}
                >
                  <tab.icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </Button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="space-y-6">
            {activeTab === "my-nfts" && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {mockNFTs.map((nft, index) => (
                  <Card key={nft.id} className="glass-panel rounded-2xl p-6 float" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="space-y-4">
                      <img src={nft.cover} alt={nft.title} className="w-full aspect-square rounded-xl object-cover" />
                      <div>
                        <h3 className="font-semibold text-emerald-800">{nft.title}</h3>
                        <p className="text-sm text-emerald-600">{nft.artist}</p>
                      </div>
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-sm text-emerald-600">Owned</p>
                          <p className="font-semibold">{nft.owned}</p>
                        </div>
                        <div>
                          <p className="text-sm text-emerald-600">Earnings</p>
                          <p className="font-semibold text-green-600">{nft.earnings}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Switch defaultChecked />
                        <span className="text-sm text-emerald-600">DAO Voting</span>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            )}

            {activeTab === "vault-stats" && (
              <div className="space-y-6">
                {mockVaults.map((vault, index) => (
                  <Card key={vault.title} className="glass-panel rounded-2xl p-6 float" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
                      <div>
                        <h3 className="font-semibold text-emerald-800">{vault.title}</h3>
                      </div>
                      <div className="text-center">
                        <p className="text-sm text-emerald-600">Invested</p>
                        <p className="font-semibold text-blue-600">{vault.invested}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-sm text-emerald-600">TVL</p>
                        <p className="font-semibold text-emerald-600">{vault.tvl}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-sm text-emerald-600">APR</p>
                        <p className="font-semibold text-green-600">{vault.apr}</p>
                      </div>
                      <div className="text-center">
                        <Button className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-white glow-golden">
                          Withdraw {vault.withdrawable}
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            )}

            {/* Placeholder content for other tabs */}
            {activeTab === "liked-songs" && (
              <Card className="glass-panel rounded-2xl p-8 text-center">
                <Heart className="w-16 h-16 text-emerald-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-emerald-800 mb-2">Liked Songs</h3>
                <p className="text-emerald-600">Your favorite tracks will appear here</p>
              </Card>
            )}

            {activeTab === "following" && (
              <Card className="glass-panel rounded-2xl p-8 text-center">
                <Users className="w-16 h-16 text-emerald-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-emerald-800 mb-2">Following</h3>
                <p className="text-emerald-600">Artists and creators you follow will appear here</p>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListenerProfile;