import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { 
  Music, 
  Heart, 
  Users, 
  BarChart3, 
  Upload, 
  Copy, 
  TrendingUp,
  ArrowLeft,
  Wallet
} from "lucide-react";
import userAvatar from "@/assets/user-avatar.jpg";
import album1 from "@/assets/album-1.jpg";
import album2 from "@/assets/album-2.jpg";
import album3 from "@/assets/album-3.jpg";

const CreatorProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("my-nfts");
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [tokenizeEnabled, setTokenizeEnabled] = useState(true);
  const [tokenPercentage, setTokenPercentage] = useState([75]);
  const [isWalletConnected, setIsWalletConnected] = useState(false);

  const userData = {
    name: "Aurora Synth",
    walletAddress: "0x5678...9abc",
    avatar: userAvatar,
    isVerified: true,
    followers: "25.8K",
    following: "1.2K",
  };

  const tabs = [
    { id: "my-nfts", label: "My NFTs", icon: Music },
    { id: "liked-songs", label: "Liked Songs", icon: Heart },
    { id: "following", label: "Following", icon: Users },
    { id: "vault-stats", label: "Vault Stats", icon: BarChart3 },
    { id: "revenue", label: "Revenue", icon: TrendingUp },
    { id: "upload", label: "Upload Track", icon: Upload },
  ];

  const mockNFTs = [
    { id: "1", title: "Liquid Dreams", artist: "Aurora Synth", cover: album1, owned: "Creator", earnings: "12.5 SUI" },
    { id: "2", title: "Digital Flow", artist: "Aurora Synth", cover: album2, owned: "Creator", earnings: "8.3 SUI" },
    { id: "3", title: "Ethereal Mist", artist: "Aurora Synth", cover: album3, owned: "Creator", earnings: "15.7 SUI" },
  ];

  const mockRevenue = [
    { title: "Liquid Dreams", vaultRevenue: "45.2 SUI", yieldEarned: "5.8 SUI", daoSupport: "87%", protocol: "Aave", withdrawable: "2.1 SUI" },
    { title: "Cosmic Waves", vaultRevenue: "32.1 SUI", yieldEarned: "4.2 SUI", daoSupport: "92%", protocol: "Cetus", withdrawable: "1.8 SUI" },
  ];

  const handleConnectWallet = () => {
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
                  <Badge className="bg-blue-500/20 text-blue-700 border-blue-300 mb-3">
                    Verified Creator
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
                          <p className="text-sm text-emerald-600">Status</p>
                          <p className="font-semibold">{nft.owned}</p>
                        </div>
                        <div>
                          <p className="text-sm text-emerald-600">Earnings</p>
                          <p className="font-semibold text-green-600">{nft.earnings}</p>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            )}

            {activeTab === "revenue" && (
              <div className="space-y-6">
                {mockRevenue.map((item, index) => (
                  <Card key={item.title} className="glass-panel rounded-2xl p-6 float" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="grid grid-cols-1 md:grid-cols-6 gap-4 items-center">
                      <div className="md:col-span-1">
                        <h3 className="font-semibold text-emerald-800">{item.title}</h3>
                      </div>
                      <div className="text-center">
                        <p className="text-sm text-emerald-600">Vault Revenue</p>
                        <p className="font-semibold text-blue-600">{item.vaultRevenue}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-sm text-emerald-600">Yield Earned</p>
                        <p className="font-semibold text-green-600">{item.yieldEarned}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-sm text-emerald-600">DAO Support</p>
                        <p className="font-semibold text-purple-600">{item.daoSupport}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-sm text-emerald-600">Protocol</p>
                        <p className="font-semibold text-emerald-600">{item.protocol}</p>
                      </div>
                      <div className="text-center">
                        <Button className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-white glow-golden">
                          Withdraw {item.withdrawable}
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            )}

            {activeTab === "upload" && (
              <Card className="glass-panel rounded-3xl p-8 glow-golden float">
                <div className="max-w-2xl mx-auto space-y-6">
                  <div className="text-center">
                    <h2 className="text-2xl font-bold text-emerald-800 mb-2">Upload New Music</h2>
                    <p className="text-emerald-600">Create and tokenize your latest track</p>
                  </div>

                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-emerald-700 mb-2">Music File</label>
                        <div className="border-2 border-dashed border-emerald-300 rounded-xl p-8 text-center hover:border-golden-glow transition-colors glow-golden">
                          <Upload className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
                          <p className="text-emerald-600">Drag & drop MP3/WAV file</p>
                          <Button variant="outline" className="mt-4 border-emerald-300 hover:border-golden-glow">Browse Files</Button>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-emerald-700 mb-2">Thumbnail</label>
                        <div className="border-2 border-dashed border-emerald-300 rounded-xl p-8 text-center hover:border-golden-glow transition-colors glow-golden">
                          <Upload className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
                          <p className="text-emerald-600">Upload cover art</p>
                          <Button variant="outline" className="mt-4 border-emerald-300 hover:border-golden-glow">Browse Images</Button>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-emerald-700 mb-2">Song Title</label>
                        <Input placeholder="Enter song title" className="rounded-xl border-emerald-300" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-emerald-700 mb-2">Genre</label>
                        <Input placeholder="Electronic, Ambient, etc." className="rounded-xl border-emerald-300" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-emerald-700 mb-2">Description</label>
                      <Textarea placeholder="Describe your music..." className="rounded-xl border-emerald-300" rows={3} />
                    </div>

                    <div className="space-y-4 p-6 bg-white/20 rounded-xl">
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-emerald-800">Tokenize this music</span>
                        <Switch checked={tokenizeEnabled} onCheckedChange={setTokenizeEnabled} />
                      </div>

                      {tokenizeEnabled && (
                        <div className="space-y-4">
                          <div>
                            <label className="block text-sm font-medium text-emerald-700 mb-2">
                              Tokenization Percentage: {tokenPercentage[0]}%
                            </label>
                            <Slider
                              value={tokenPercentage}
                              onValueChange={setTokenPercentage}
                              max={100}
                              step={5}
                              className="w-full"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-emerald-700 mb-2">Price per Token</label>
                            <Input placeholder="0.01 SUI" className="rounded-xl border-emerald-300" />
                          </div>
                        </div>
                      )}
                    </div>

                    <Button 
                      onClick={() => setShowUploadModal(true)}
                      className="w-full py-4 text-lg bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-white glow-golden"
                    >
                      Create and Tokenize
                    </Button>
                  </div>
                </div>
              </Card>
            )}

            {/* Placeholder content for other tabs */}
            {activeTab === "liked-songs" && (
              <Card className="glass-panel rounded-2xl p-8 text-center">
                <Heart className="w-16 h-16 text-emerald-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-emerald-800 mb-2">Liked Songs</h3>
                <p className="text-emerald-600">Your favorite tracks will appear here</p>
              </Card>
            )}
          </div>
        </div>
      </div>

      {/* Upload Success Modal */}
      {showUploadModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <Card className="glass-panel rounded-3xl p-8 max-w-md w-full glow-golden slide-in-right">
            <div className="text-center space-y-6">
              <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center mx-auto pulse-golden">
                <Upload className="w-8 h-8 text-white" />
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-emerald-800 mb-2">Upload Successful!</h3>
                <p className="text-emerald-600">Your music has been uploaded and tokenized successfully.</p>
              </div>
              
              <div className="space-y-3 text-left">
                <div className="flex justify-between items-center">
                  <span className="text-emerald-600">Status:</span>
                  <span className="font-semibold text-green-600">Processing</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-emerald-600">Tokens Created:</span>
                  <span className="font-semibold text-yellow-600">1,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-emerald-600">Your Share:</span>
                  <span className="font-semibold text-purple-600">{100 - tokenPercentage[0]}%</span>
                </div>
              </div>

              <Button
                onClick={() => setShowUploadModal(false)}
                className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-white glow-golden"
              >
                Continue
              </Button>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
};

export default CreatorProfile;