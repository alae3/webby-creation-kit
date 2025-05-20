
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguageStore } from '@/store/languageStore';
import { Users, Clock, Settings } from 'lucide-react';

const Admin = () => {
  const { t } = useLanguageStore();
  
  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold mb-8">Admin Panel</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Dashboard Card */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Settings className="mr-2 h-5 w-5" />
              Dashboard
            </CardTitle>
            <CardDescription>
              Manage countdown and subscribers
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-500 mb-4">
              Configure countdown timer settings and view your subscriber list
            </p>
          </CardContent>
          <CardFooter>
            <Link to="/admin/dashboard" className="w-full">
              <Button variant="default" className="w-full">
                Go to Dashboard
              </Button>
            </Link>
          </CardFooter>
        </Card>
        
        {/* Content Management Card */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Settings className="mr-2 h-5 w-5" />
              Content Management
            </CardTitle>
            <CardDescription>
              Manage website content
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-500 mb-4">
              Update text, images, and other content on your website
            </p>
          </CardContent>
          <CardFooter>
            <Button variant="default" className="w-full">
              Manage Content
            </Button>
          </CardFooter>
        </Card>
        
        {/* Product Management Card */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Settings className="mr-2 h-5 w-5" />
              Product Management
            </CardTitle>
            <CardDescription>
              Manage your product catalog
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-500 mb-4">
              Add, edit, and remove products from your store
            </p>
          </CardContent>
          <CardFooter>
            <Button variant="default" className="w-full">
              Manage Products
            </Button>
          </CardFooter>
        </Card>
        
        {/* Order Management Card */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Clock className="mr-2 h-5 w-5" />
              Order Management
            </CardTitle>
            <CardDescription>
              View and manage customer orders
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-500 mb-4">
              Process orders, update order status, and view order history
            </p>
          </CardContent>
          <CardFooter>
            <Button variant="default" className="w-full">
              Manage Orders
            </Button>
          </CardFooter>
        </Card>
        
        {/* Customer Management Card */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Users className="mr-2 h-5 w-5" />
              Customer Management
            </CardTitle>
            <CardDescription>
              View and manage customer information
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-500 mb-4">
              Access customer profiles, purchase history, and contact information
            </p>
          </CardContent>
          <CardFooter>
            <Button variant="default" className="w-full">
              Manage Customers
            </Button>
          </CardFooter>
        </Card>
        
        {/* Settings Card */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Settings className="mr-2 h-5 w-5" />
              Settings
            </CardTitle>
            <CardDescription>
              Configure store settings
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-500 mb-4">
              Update store information, shipping options, and payment methods
            </p>
          </CardContent>
          <CardFooter>
            <Button variant="default" className="w-full">
              Store Settings
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Admin;
