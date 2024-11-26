interface SustainabilityCardProps {
  title: string;
  description: string;
  icon: string;
}

export default function SustainabilityCard({ title, description, icon }: SustainabilityCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="text-primary text-3xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-primary mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}