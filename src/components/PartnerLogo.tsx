interface PartnerLogoProps {
  name: string;
  logo: string;
}

export default function PartnerLogo({ name, logo }: PartnerLogoProps) {
  return (
    <div className="flex items-center justify-center p-4">
      <img src={logo} alt={name} className="max-h-16 grayscale hover:grayscale-0 transition-all" />
    </div>
  );
}