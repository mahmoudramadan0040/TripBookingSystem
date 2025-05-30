"use client";
import DetailsWithSlider from "@/components/details-with-slider/details-with-slider";

export default function TourDetails({ params }) {
  const data = {
    id: "cd8bc7cd-0fdc-4544-930e-063c2c7b803d",
    price: "199.99",
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
    location: {
      country: "Egypt",
      city: "Giza",
    },
    tourLocations:["Giza pyramids", "Egyptian museum", "Khan el Khalili Bazaar"],
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
    excluded: ["Entry ticket to go inside any Pyramid", "Lunch", "Tips"],
    locations: ["Giza pyramids", "Sphinx"],
    IsDeleted: null,
    createdAt: "2025-05-30T14:01:18.963Z",
    updatedAt: "2025-05-30T14:01:18.963Z",
    images: [
      {
        id: "8b8f440d-5d7b-41e5-b1c5-a61e6f0b307c",
        localImage: null,
        cloudImage:
          "https://res.cloudinary.com/dibg7krep/image/upload/v1748613674/uploads/1748613670480-tour-details-banner.png.png",
        publicId: "uploads/1748613670480-tour-details-banner.png",
        TourId: "cd8bc7cd-0fdc-4544-930e-063c2c7b803d",
        createdAt: "2025-05-30T14:01:20.264Z",
        updatedAt: "2025-05-30T14:01:20.264Z",
      },
      {
        id: "a4364618-aee0-4c0b-a67c-c3a91c173135",
        localImage: null,
        cloudImage:
          "https://res.cloudinary.com/dibg7krep/image/upload/v1748613677/uploads/1748613672221-tour-details-banner-three.png.png",
        publicId: "uploads/1748613672221-tour-details-banner-three.png",
        TourId: "cd8bc7cd-0fdc-4544-930e-063c2c7b803d",
        createdAt: "2025-05-30T14:01:20.264Z",
        updatedAt: "2025-05-30T14:01:20.264Z",
      },
      {
        id: "145f43bc-cf4f-4c5c-83fc-ff3d51949e57",
        localImage: null,
        cloudImage:
          "https://res.cloudinary.com/dibg7krep/image/upload/v1748613678/uploads/1748613674368-tour-details-banner-two.png.png",
        publicId: "uploads/1748613674368-tour-details-banner-two.png",
        TourId: "cd8bc7cd-0fdc-4544-930e-063c2c7b803d",
        createdAt: "2025-05-30T14:01:20.264Z",
        updatedAt: "2025-05-30T14:01:20.264Z",
      },
    ],
  };

  return (
    <div>
      <DetailsWithSlider data={data} />
    </div>
  );
}
