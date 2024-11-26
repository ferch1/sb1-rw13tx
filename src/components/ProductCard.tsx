interface ProductProps {
  name: string;
  description: string;
  image: string;
}

export default function ProductCard({ name, description, image }: ProductProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={image} alt={name} className="w-full h-48 object-cover"/>
      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-800">{name}</h3>
        <p className="text-gray-600 mt-2">{description}</p>
        <div className="mt-4 flex justify-end">
          <button className="bg-secondary text-white px-4 py-2 rounded hover:bg-primary transition-colors">
            Ver detalles
          </button>
        </div>
      </div>
    </div>
  );
}