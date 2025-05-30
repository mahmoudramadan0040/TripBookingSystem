import DetailsWithSlider from "@/components/details-with-slider/details-with-slider";

export default function PackageDetails({ params }) {
    
  console.log(params.id);

  return (
    <div>
      <DetailsWithSlider  />
    </div>
  );
}
