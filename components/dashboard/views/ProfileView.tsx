'use client';

import { User, Settings, Bell, Shield, CreditCard, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const userProfile = {
  name: "John Anderson",
  email: "john.anderson@email.com",
  memberSince: "January 2024",
  membershipTier: "Elite",
  avatar: "",
  phone: "+1 (555) 123-4567",
  company: "Anderson Consulting Group",
  location: "New York, NY",
  timezone: "EST (UTC-5)"
};

const accountStats = [
  { label: "Videos Watched", value: "47", total: "47" },
  { label: "Events Attended", value: "12", total: "15" },
  { label: "Resources Downloaded", value: "23", total: "127" },
  { label: "Community Posts", value: "8", total: "--" }
];

const preferences = {
  emailNotifications: true,
  pushNotifications: false,
  marketingEmails: true,
  weeklyDigest: true,
  eventReminders: true
};

const billingInfo = {
  plan: "Elite Business Coaching",
  price: "$497/month",
  nextBilling: "January 15, 2025",
  paymentMethod: "**** **** **** 4242",
  status: "Active"
};

export function ProfileView() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold flex items-center gap-2">
            <User className="h-8 w-8" />
            My Profile
          </h1>
          <p className="text-muted-foreground mt-1">
            Manage your account settings, preferences, and membership details
          </p>
        </div>
        <Button variant="outline" className="flex items-center gap-2">
          <Settings className="h-4 w-4" />
          Settings
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Overview */}
        <Card className="lg:col-span-1">
          <CardHeader className="text-center">
            <Avatar className="h-24 w-24 mx-auto mb-4">
              <AvatarFallback className="text-2xl">
                {userProfile.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            <CardTitle className="text-xl">{userProfile.name}</CardTitle>
            <div className="flex items-center justify-center gap-2">
              <Badge className="bg-purple-600">{userProfile.membershipTier}</Badge>
              <Badge variant="outline">Member since {userProfile.memberSince}</Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-center">
              <p className="text-sm text-muted-foreground">{userProfile.email}</p>
              <p className="text-sm text-muted-foreground">{userProfile.company}</p>
              <p className="text-sm text-muted-foreground">{userProfile.location}</p>
            </div>
            
            <Separator />
            
            <div className="space-y-3">
              <h4 className="font-medium">Account Activity</h4>
              {accountStats.map((stat, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{stat.label}</span>
                  <span className="text-sm font-medium">
                    {stat.value}{stat.total !== '--' && `/${stat.total}`}
                  </span>
                </div>
              ))}
            </div>
            
            <Separator />
            
            <Button className="w-full" variant="outline">
              Edit Profile
            </Button>
          </CardContent>
        </Card>

        {/* Account Details & Settings */}
        <div className="lg:col-span-2 space-y-6">
          {/* Personal Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5" />
                Personal Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" defaultValue="John" />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" defaultValue="Anderson" />
                </div>
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" defaultValue={userProfile.email} />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" defaultValue={userProfile.phone} />
                </div>
                <div>
                  <Label htmlFor="company">Company</Label>
                  <Input id="company" defaultValue={userProfile.company} />
                </div>
                <div>
                  <Label htmlFor="timezone">Timezone</Label>
                  <Input id="timezone" defaultValue={userProfile.timezone} />
                </div>
              </div>
              <div className="flex gap-2">
                <Button>Save Changes</Button>
                <Button variant="outline">Cancel</Button>
              </div>
            </CardContent>
          </Card>

          {/* Notification Preferences */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="h-5 w-5" />
                Notification Preferences
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">Email Notifications</div>
                    <div className="text-sm text-muted-foreground">Receive email updates about your account</div>
                  </div>
                  <Badge variant={preferences.emailNotifications ? "default" : "outline"}>
                    {preferences.emailNotifications ? "Enabled" : "Disabled"}
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">Push Notifications</div>
                    <div className="text-sm text-muted-foreground">Receive push notifications on your devices</div>
                  </div>
                  <Badge variant={preferences.pushNotifications ? "default" : "outline"}>
                    {preferences.pushNotifications ? "Enabled" : "Disabled"}
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">Marketing Emails</div>
                    <div className="text-sm text-muted-foreground">Receive updates about new content and features</div>
                  </div>
                  <Badge variant={preferences.marketingEmails ? "default" : "outline"}>
                    {preferences.marketingEmails ? "Enabled" : "Disabled"}
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">Weekly Digest</div>
                    <div className="text-sm text-muted-foreground">Get a weekly summary of your activity</div>
                  </div>
                  <Badge variant={preferences.weeklyDigest ? "default" : "outline"}>
                    {preferences.weeklyDigest ? "Enabled" : "Disabled"}
                  </Badge>
                </div>
              </div>
              <Button variant="outline">Manage Preferences</Button>
            </CardContent>
          </Card>

          {/* Billing Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CreditCard className="h-5 w-5" />
                Billing & Subscription
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label>Current Plan</Label>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="font-medium">{billingInfo.plan}</span>
                    <Badge className="bg-green-600">{billingInfo.status}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{billingInfo.price}</p>
                </div>
                <div>
                  <Label>Next Billing Date</Label>
                  <p className="font-medium mt-1">{billingInfo.nextBilling}</p>
                </div>
                <div>
                  <Label>Payment Method</Label>
                  <p className="font-medium mt-1">{billingInfo.paymentMethod}</p>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="outline">Update Payment Method</Button>
                <Button variant="outline">View Billing History</Button>
              </div>
            </CardContent>
          </Card>

          {/* Security */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Security
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">Two-Factor Authentication</div>
                    <div className="text-sm text-muted-foreground">Add an extra layer of security to your account</div>
                  </div>
                  <Badge variant="outline">Not Enabled</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">Password</div>
                    <div className="text-sm text-muted-foreground">Last changed 3 months ago</div>
                  </div>
                  <Button variant="outline" size="sm">Change Password</Button>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="outline">Enable 2FA</Button>
                <Button variant="outline">Download Account Data</Button>
              </div>
            </CardContent>
          </Card>

          {/* Danger Zone */}
          <Card className="border-red-200 dark:border-red-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-red-600">
                <LogOut className="h-5 w-5" />
                Account Management
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium">Pause Membership</div>
                  <div className="text-sm text-muted-foreground">Temporarily pause your membership</div>
                </div>
                <Button variant="outline" size="sm">Pause</Button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium text-red-600">Delete Account</div>
                  <div className="text-sm text-muted-foreground">Permanently delete your account and all data</div>
                </div>
                <Button variant="destructive" size="sm">Delete</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}