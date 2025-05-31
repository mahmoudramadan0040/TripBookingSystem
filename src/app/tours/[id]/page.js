"use client";
import DetailsWithSlider from "@/components/details-with-slider/details-with-slider";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "next/navigation";
export default function TourDetails() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/assets/js/main.js"; // place your script in public/
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); // clean up on unmount
    };
  }, []);
  const { id } = useParams();
  // const tour = useSelector((state) =>
  //   state.shared.tours.data.find((t) => t.id === id)
  // );
  const tour = {
      price: 30,
      title: "Giza pyramids, Egyptian museum and Khan el Khalili Bazaar",
      summary:
        "Explore the history and culture of Egypt at Great Pyramids of Giza and Sphinx, Egyptian museum for antiques. Hunt for unique bargains in the historic Khan El Khalili Bazaar.",
      tourDuration: "Up to 8 hours",
      activityDetails: {
        reserveNowPayLater: true,
        duration: "4 hours",
        skipTheTicketLine: true,
        liveTourGuide: true,
        pickupIncluded: "Please wait 10 minutes before your scheduled time.",
        privateGroup: true,
      },
      Governorate: "Giza",
      highlights: [
        "Explore the history and culture of Ancient Egypt",
        "Wander through 120,000 masterpieces of art at the Egyptian Museum",
        "See the treasures from the Tomb of Tutankhamen",
        "Visit the Pyramids of Giza and Great Sphinx",
        "Pick up some souvenir bargains and learn to haggle at the Khan El Khalili Bazaar",
      ],
      fullDescription:
        "Starts with Pickup from your hotel in either Cairo or Giza by tour guide to start your full day tour visiting Giza Pyramids where you visit the Great Pyramids - Cheops, Chephren & Mykerinos then Visit the Valley Temple where the Priests Mummified the dead body of King Chephren. Also there you will have a close-up look at The Sphinx. Then continue your day tour to the Egyptian Museum of antiquities. It exhibits over 250,000 genuine artifacts including treasures of Tutankhamon. Then visit the Khan El Khalili Bazaar known for trading fine brassware, copper, perfumes, leather, silver, gold, antiques and much more.",
      included: [
        "Hotel pickup and drop-off",
        "Transportation by air-conditioned vehicle",
        "Entry ticket",
        "Egyptologist tour guide",
        "Shopping at Papyrus Gallery and Essential Oils Factory",
        "Bottle of water",
      ],
      images: [
        {
          id: "e3c0fb0d-d4a3-4733-ab11-e8bdf9c6d64f",
          localImage: null,
          cloudImage:
            "https://res.cloudinary.com/dibg7krep/image/upload/v1748636634/uploads/1748636633766-product-03.png.png",
          publicId: "uploads/1748636633766-product-03.png",
          TourId: "e4528791-d99e-42d5-844d-d0f259fae7be",
          createdAt: "2025-05-30T20:23:58.478Z",
          updatedAt: "2025-05-30T20:23:58.478Z",
        },
        {
          id: "a3afdcc8-a511-4030-bb40-f82c9f760749",
          localImage: null,
          cloudImage:
            "https://res.cloudinary.com/dibg7krep/image/upload/v1748636637/uploads/1748636633754-package-7.jpg.jpg",
          publicId: "uploads/1748636633754-package-7.jpg",
          TourId: "e4528791-d99e-42d5-844d-d0f259fae7be",
          createdAt: "2025-05-30T20:23:58.478Z",
          updatedAt: "2025-05-30T20:23:58.478Z",
        },
      ],
      locations: ["Giza pyramids", "Egyptian museum", "Khan el Khalili Bazaar"],
      excluded: ["Entry ticket to go inside any Pyramid", "Lunch", "Tips"],
    }
    

  return (
    <div>
      <DetailsWithSlider tour={tour} />
    </div>
  );
}
