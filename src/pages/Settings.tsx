import { useState } from "react";
import { ArrowLeft, User, Palette, Bell, Shield, Wallet, Moon, Sun, Volume2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";

export default function Settings() {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState({
    vault: true,
    dao: true,
    price: false,
    marketing: false
  });
  const [glowIntensity, setGlowIntensity] = useState([75]);
  const [fontSize, setFontSize] = useState([16]);
  const [walletConnected, setWalletConnected] = useState(false);

  return (
    <div className="min-h-screen emerald-bg">
      <div className="container mx-auto px-6 py-8 max-w-4xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Link 
            to="/dashboard" 
            className="flex items-center space-x-2 text-emerald-700 hover:text-golden-glow hover:bg-golden-glow/10 rounded-xl p-3 glow-golden transition-all duration-300"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Dashboard</span>
          </Link>
          
          <Button 
            onClick={() => setWalletConnected(!walletConnected)}
            className={`glow-golden ${walletConnected ? 'bg-emerald-600' : ''}`}
          >
            <Wallet className="w-5 h-5 mr-2" />
            {walletConnected ? "0x742d...8a1b" : "Connect Wallet"}
          </Button>
        </div>

        {/* Title */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Settings
          </h1>
          <p className="text-lg text-muted-foreground">
            Personalize your experience with calming, therapeutic settings
          </p>
        </div>

        <Tabs defaultValue="account" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5 glass-panel">
            <TabsTrigger value="account" className="data-[state=active]:glow-golden">
              <User className="w-4 h-4 mr-2" />
              Account
            </TabsTrigger>
            <TabsTrigger value="theme" className="data-[state=active]:glow-golden">
              <Palette className="w-4 h-4 mr-2" />
              Theme
            </TabsTrigger>
            <TabsTrigger value="notifications" className="data-[state=active]:glow-golden">
              <Bell className="w-4 h-4 mr-2" />
              Notifications
            </TabsTrigger>
            <TabsTrigger value="web3" className="data-[state=active]:glow-golden">
              <Wallet className="w-4 h-4 mr-2" />
              Web3
            </TabsTrigger>
            <TabsTrigger value="privacy" className="data-[state=active]:glow-golden">
              <Shield className="w-4 h-4 mr-2" />
              Privacy
            </TabsTrigger>
          </TabsList>

          {/* Account Settings */}
          <TabsContent value="account" className="space-y-6">
            <Card className="glass-panel p-6">
              <h3 className="text-xl font-semibold mb-6 flex items-center">
                <User className="w-5 h-5 mr-3" />
                Account Information
              </h3>
              
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="display-name">Display Name</Label>
                    <Input 
                      id="display-name"
                      placeholder="Enter your display name"
                      className="glow-golden focus:ring-2"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input 
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      className="glow-golden focus:ring-2"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="bio">Bio</Label>
                  <textarea 
                    id="bio"
                    className="w-full p-3 rounded-lg border border-border bg-background text-foreground min-h-[100px] glow-golden focus:ring-2"
                    placeholder="Tell us about yourself..."
                  />
                </div>
                
                <Button className="glow-golden">
                  Save Changes
                </Button>
              </div>
            </Card>
          </TabsContent>

          {/* Theme Settings */}
          <TabsContent value="theme" className="space-y-6">
            <Card className="glass-panel p-6">
              <h3 className="text-xl font-semibold mb-6 flex items-center">
                <Palette className="w-5 h-5 mr-3" />
                Visual Therapy Settings
              </h3>
              
              <div className="space-y-8">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label className="text-base font-medium">Dark Mode</Label>
                    <p className="text-sm text-muted-foreground">
                      Easier on the eyes during evening sessions
                    </p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Sun className="w-5 h-5 text-amber-500" />
                    <Switch
                      checked={darkMode}
                      onCheckedChange={setDarkMode}
                      className="data-[state=checked]:bg-primary"
                    />
                    <Moon className="w-5 h-5 text-blue-500" />
                  </div>
                </div>
                
                <Separator />
                
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label className="text-base font-medium">Glow Effect Intensity</Label>
                    <p className="text-sm text-muted-foreground">
                      Adjust the golden glow effect for comfort
                    </p>
                  </div>
                  <div className="px-4">
                    <Slider
                      value={glowIntensity}
                      onValueChange={setGlowIntensity}
                      max={100}
                      step={5}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground mt-2">
                      <span>Subtle</span>
                      <span>Current: {glowIntensity[0]}%</span>
                      <span>Intense</span>
                    </div>
                  </div>
                </div>
                
                <Separator />
                
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label className="text-base font-medium">Font Size</Label>
                    <p className="text-sm text-muted-foreground">
                      Comfortable reading size for extended use
                    </p>
                  </div>
                  <div className="px-4">
                    <Slider
                      value={fontSize}
                      onValueChange={setFontSize}
                      min={12}
                      max={24}
                      step={1}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground mt-2">
                      <span>Small</span>
                      <span>Current: {fontSize[0]}px</span>
                      <span>Large</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Notifications */}
          <TabsContent value="notifications" className="space-y-6">
            <Card className="glass-panel p-6">
              <h3 className="text-xl font-semibold mb-6 flex items-center">
                <Bell className="w-5 h-5 mr-3" />
                Mindful Notifications
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label className="text-base font-medium">Vault Updates</Label>
                    <p className="text-sm text-muted-foreground">
                      Gentle reminders about yield and earnings
                    </p>
                  </div>
                  <Switch
                    checked={notifications.vault}
                    onCheckedChange={(checked) => 
                      setNotifications({...notifications, vault: checked})
                    }
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label className="text-base font-medium">DAO Proposals</Label>
                    <p className="text-sm text-muted-foreground">
                      Community governance participation reminders
                    </p>
                  </div>
                  <Switch
                    checked={notifications.dao}
                    onCheckedChange={(checked) => 
                      setNotifications({...notifications, dao: checked})
                    }
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label className="text-base font-medium">Price Alerts</Label>
                    <p className="text-sm text-muted-foreground">
                      Token price change notifications
                    </p>
                  </div>
                  <Switch
                    checked={notifications.price}
                    onCheckedChange={(checked) => 
                      setNotifications({...notifications, price: checked})
                    }
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label className="text-base font-medium">Platform Updates</Label>
                    <p className="text-sm text-muted-foreground">
                      New features and platform news
                    </p>
                  </div>
                  <Switch
                    checked={notifications.marketing}
                    onCheckedChange={(checked) => 
                      setNotifications({...notifications, marketing: checked})
                    }
                  />
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Web3 Settings */}
          <TabsContent value="web3" className="space-y-6">
            <Card className="glass-panel p-6">
              <h3 className="text-xl font-semibold mb-6 flex items-center">
                <Wallet className="w-5 h-5 mr-3" />
                Web3 Preferences
              </h3>
              
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label>Default Network</Label>
                    <Select defaultValue="sui">
                      <SelectTrigger className="glow-golden">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="sui">Sui Network</SelectItem>
                        <SelectItem value="ethereum">Ethereum</SelectItem>
                        <SelectItem value="polygon">Polygon</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label>Preferred Yield Protocol</Label>
                    <Select defaultValue="cetus">
                      <SelectTrigger className="glow-golden">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="cetus">Cetus Finance</SelectItem>
                        <SelectItem value="scallop">Scallop</SelectItem>
                        <SelectItem value="sui-lend">Sui Lend</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="gas-limit">Default Gas Limit</Label>
                  <Input 
                    id="gas-limit"
                    type="number"
                    placeholder="21000"
                    className="glow-golden"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="slippage">Slippage Tolerance (%)</Label>
                  <Input 
                    id="slippage"
                    type="number"
                    placeholder="0.5"
                    step="0.1"
                    className="glow-golden"
                  />
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Privacy Settings */}
          <TabsContent value="privacy" className="space-y-6">
            <Card className="glass-panel p-6">
              <h3 className="text-xl font-semibold mb-6 flex items-center">
                <Shield className="w-5 h-5 mr-3" />
                Privacy & Security
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label className="text-base font-medium">Public Profile</Label>
                    <p className="text-sm text-muted-foreground">
                      Allow others to view your listening activity
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label className="text-base font-medium">Anonymous Analytics</Label>
                    <p className="text-sm text-muted-foreground">
                      Help improve the platform with usage data
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label className="text-base font-medium">Data Export</Label>
                    <p className="text-sm text-muted-foreground">
                      Download your data and activity history
                    </p>
                  </div>
                  <Button variant="outline" size="sm" className="glow-golden">
                    Export Data
                  </Button>
                </div>
                
                <Separator />
                
                <div className="space-y-4">
                  <Label className="text-base font-medium text-destructive">
                    Danger Zone
                  </Label>
                  <div className="p-4 border border-destructive/20 rounded-lg bg-destructive/5">
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <Label className="text-base font-medium">Delete Account</Label>
                        <p className="text-sm text-muted-foreground">
                          Permanently delete your account and all data
                        </p>
                      </div>
                      <Button variant="destructive" size="sm">
                        Delete Account
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}