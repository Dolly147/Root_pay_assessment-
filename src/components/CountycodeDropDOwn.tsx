import { useState } from "react";

type Country = {
  name: string;
  code: string;
  flag: string;
};

const COUNTRIES: Country[] = [
  { name: "India", code: "+91", flag: "🇮🇳" },
  { name: "United States", code: "+1", flag: "🇺🇸" },
  { name: "United Kingdom", code: "+44", flag: "🇬🇧" },
  { name: "UAE", code: "+971", flag: "🇦🇪" },
];

export default function CountryCodeDropdown({
  value,
  onChange,
}: {
  value: Country;
  onChange: (country: Country) => void;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative ">
      {/* Selected */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="
          flex items-center gap-2 
          h-[78px]
          px-2
          border
          border-[#8fb1f5]
          rounded-[8px]
          bg-white
          text-[14px]
        "
      >
        <span>{value.flag}</span>
        <span>{value.code}</span>
        <span className="ml-1">▾</span>
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute z-10 mt-1 w-full bg-white border border-slate-200 rounded-lg shadow-md">
          {COUNTRIES.map((country) => (
            <button
              key={country.code}
              onClick={() => {
                onChange(country);
                setOpen(false);
              }}
              className="
                w-full
                flex items-center gap-2
                px-3 py-2
                text-sm
                hover:bg-slate-100
              "
            >
              <span>{country.flag}</span>
              <span>{country.name}</span>
              <span className="ml-auto text-slate-500">
                {country.code}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
