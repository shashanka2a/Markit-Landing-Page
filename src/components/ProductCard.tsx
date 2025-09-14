import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

interface ProductCardProps {
  title: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
  gradient: string;
}

export function ProductCard({ title, description, features, icon, gradient }: ProductCardProps) {
  return (
    <Card className="h-full hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 border-0 shadow-lg group">
      <CardHeader className="text-center">
        <div className={`w-16 h-16 ${gradient} rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:shadow-lg group-hover:shadow-blue-500/20 transition-all duration-500`}>
          {icon}
        </div>
        <CardTitle className="text-2xl">{title}</CardTitle>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
              <span className="text-gray-600">{feature}</span>
            </li>
          ))}
        </ul>
        <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300">
          Learn More
        </Button>
      </CardContent>
    </Card>
  );
}