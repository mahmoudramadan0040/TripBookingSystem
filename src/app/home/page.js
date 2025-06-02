"use client";
import { Fragment } from "react";
import HeaderComponent from "@/components/Home/Header/HeaderComponent";
import BannerContentComponent from "@/components/Home/Content/BannerContentComponent";
import SearchTransportComponent from "@/components/Home/Content/SearchTransportComponent";
import PopularPakageComponent from "@/components/Home/Content/PopularPakageComponent";
import FooterContentComponent from "@/components/Home/Content/FooterContentComponent";
import FavoritPakageComponent from "@/components/Home/Content/FavoritPakageComponent";
import { useGetToursQuery } from "../Redux/slices/TourSlice";
import { useDispatch } from "react-redux";
import { setTours } from "../Redux/slices/SharedSlice";
import { useEffect } from "react";
import AboutUsComponent from "@/components/Home/Content/AboutUsComponent";
function HomePage() {


  const toursDummy ={
    "total": 54,
    "count": 17,
    "data": [
        {
            "id": "34e7f56d-939b-47f4-9d24-7f7becd07bc6",
            "title": "Grand Egyptian Museum (GEM)",
            "price": "199",
            "offer": null,
            "Duration": 4,
            "Description": "Experience the wonders of ancient Egypt with a visit to the Grand Egyptian Museum, including convenient hotel pickup for a seamless adventure.",
            "FullDescription": "    • The Grand Egyptian Museum (GEM), also known as the Giza Museum, is an archaeological museum in Giza, Egypt, about 2 kilometers (1.2 miles) from the Giza pyramid complex. The Museum hosts over 100,000 artifacts from ancient Egyptian civilization, including the complete Tutankhamun collection, and many pieces will be on display for the first time. With 81,000 m2 (872,000 sq. ft.) of floor space, it will be the world's largest archeological museum. It is being built as part of a new master plan for the Giza Plateau, known as \"Giza 2030\".     • The GEM will also host permanent exhibition galleries, temporary exhibitions, special exhibitions, children museum, and virtual and large format screens with a total floor area of 32,000 m2.     • The museum was built by a joint venture of the Belgian BESIX Group and the Egyptian Orascom Construction.      • The original opening was scheduled for 2012, but it was only partially open on 16 October 2024. The Grand Hall, Grand Staircase, commercial area, 12 public galleries and the exterior gardens are open for tours, while the Tutankhamun gallery and Solar Boat Museum are not yet open to the public. Announced by the Egyptian Authorities, the museum will officially open to the public on 6 July 2025 ",
            "included": [
                "Hotel pickup and drop-off",
                "Transportation by air-conditioned vehicle",
                "Entry ticket",
                "Egyptologist tour guide",
                "Bottle of water"
            ],
            "excluded": [
                "Entry ticket to go inside any Pyramid",
                "Lunch expenses",
                "Tips"
            ],
            "highlight": [
                "Uncover ancient Egyptian history on a private tour of the Giza Pyramids",
                "Marvel at the Great Sphinx of Giza, a limestone statue of a reclining sphinx"
            ],
            "locations": [
                "Egyptian Museum for antiques",
                "Cairo"
            ],
            "ActitvityDetails": null,
            "Governorate": "Cairo",
            "category": "Popular",
            "IsDeleted": null,
            "IsFeatured": true,
            "createdAt": "2025-06-01T17:43:34.660Z",
            "updatedAt": "2025-06-01T17:43:34.660Z",
            "images": [
                {
                    "id": "93438b35-2855-4435-a4f6-87de20ea596c",
                    "localImage": null,
                    "cloudImage": "https://res.cloudinary.com/dibg7krep/image/upload/v1748799814/uploads/1748799807745-package-13.jpg.jpg",
                    "publicId": "uploads/1748799807745-package-13.jpg",
                    "TourId": "34e7f56d-939b-47f4-9d24-7f7becd07bc6",
                    "createdAt": "2025-06-01T17:43:34.668Z",
                    "updatedAt": "2025-06-01T17:43:34.668Z"
                },
                {
                    "id": "0d3b9752-b6ae-4dd0-b937-ea342649a2c9",
                    "localImage": null,
                    "cloudImage": "https://res.cloudinary.com/dibg7krep/image/upload/v1748799812/uploads/1748799804006-package-20.jpg.jpg",
                    "publicId": "uploads/1748799804006-package-20.jpg",
                    "TourId": "34e7f56d-939b-47f4-9d24-7f7becd07bc6",
                    "createdAt": "2025-06-01T17:43:34.668Z",
                    "updatedAt": "2025-06-01T17:43:34.668Z"
                },
                {
                    "id": "0aea073f-f1c2-4f83-a246-b4e475ac6f5e",
                    "localImage": null,
                    "cloudImage": "https://res.cloudinary.com/dibg7krep/image/upload/v1748799805/uploads/1748799803052-package-17.jpg.jpg",
                    "publicId": "uploads/1748799803052-package-17.jpg",
                    "TourId": "34e7f56d-939b-47f4-9d24-7f7becd07bc6",
                    "createdAt": "2025-06-01T17:43:34.668Z",
                    "updatedAt": "2025-06-01T17:43:34.668Z"
                }
            ]
        },
        {
            "id": "ef615604-98f4-4d55-983e-e889332fbcde",
            "title": "Grand Egyptian Museum (GEM)",
            "price": "199",
            "offer": null,
            "Duration": 4,
            "Description": "Experience the wonders of ancient Egypt with a visit to the Grand Egyptian Museum, including convenient hotel pickup for a seamless adventure.",
            "FullDescription": "    • The Grand Egyptian Museum (GEM), also known as the Giza Museum, is an archaeological museum in Giza, Egypt, about 2 kilometers (1.2 miles) from the Giza pyramid complex. The Museum hosts over 100,000 artifacts from ancient Egyptian civilization, including the complete Tutankhamun collection, and many pieces will be on display for the first time. With 81,000 m2 (872,000 sq. ft.) of floor space, it will be the world's largest archeological museum. It is being built as part of a new master plan for the Giza Plateau, known as \"Giza 2030\".     • The GEM will also host permanent exhibition galleries, temporary exhibitions, special exhibitions, children museum, and virtual and large format screens with a total floor area of 32,000 m2.     • The museum was built by a joint venture of the Belgian BESIX Group and the Egyptian Orascom Construction.      • The original opening was scheduled for 2012, but it was only partially open on 16 October 2024. The Grand Hall, Grand Staircase, commercial area, 12 public galleries and the exterior gardens are open for tours, while the Tutankhamun gallery and Solar Boat Museum are not yet open to the public. Announced by the Egyptian Authorities, the museum will officially open to the public on 6 July 2025 ",
            "included": [
                "Hotel pickup and drop-off",
                "Transportation by air-conditioned vehicle",
                "Entry ticket",
                "Egyptologist tour guide",
                "Bottle of water"
            ],
            "excluded": [
                "Entry ticket to go inside any Pyramid",
                "Lunch expenses",
                "Tips"
            ],
            "highlight": [
                "Uncover ancient Egyptian history on a private tour of the Giza Pyramids",
                "Marvel at the Great Sphinx of Giza, a limestone statue of a reclining sphinx"
            ],
            "locations": [
                "Egyptian Museum for antiques",
                "Cairo"
            ],
            "ActitvityDetails": null,
            "Governorate": "Cairo",
            "category": "Favorit",
            "IsDeleted": null,
            "IsFeatured": true,
            "createdAt": "2025-06-01T17:40:53.379Z",
            "updatedAt": "2025-06-01T17:40:53.379Z",
            "images": [
                {
                    "id": "8abcc251-492f-4216-8acf-a320ba3f4678",
                    "localImage": null,
                    "cloudImage": "https://res.cloudinary.com/dibg7krep/image/upload/v1748799644/uploads/1748799641519-package-17.jpg.jpg",
                    "publicId": "uploads/1748799641519-package-17.jpg",
                    "TourId": "ef615604-98f4-4d55-983e-e889332fbcde",
                    "createdAt": "2025-06-01T17:40:53.412Z",
                    "updatedAt": "2025-06-01T17:40:53.412Z"
                },
                {
                    "id": "edd6812d-713e-46d8-b63d-763f7efc2da3",
                    "localImage": null,
                    "cloudImage": "https://res.cloudinary.com/dibg7krep/image/upload/v1748799652/uploads/1748799644396-package-13.jpg.jpg",
                    "publicId": "uploads/1748799644396-package-13.jpg",
                    "TourId": "ef615604-98f4-4d55-983e-e889332fbcde",
                    "createdAt": "2025-06-01T17:40:53.412Z",
                    "updatedAt": "2025-06-01T17:40:53.412Z"
                },
                {
                    "id": "b8039552-25fd-4132-8cff-b178336b3f3c",
                    "localImage": null,
                    "cloudImage": "https://res.cloudinary.com/dibg7krep/image/upload/v1748799646/uploads/1748799642453-package-20.jpg.jpg",
                    "publicId": "uploads/1748799642453-package-20.jpg",
                    "TourId": "ef615604-98f4-4d55-983e-e889332fbcde",
                    "createdAt": "2025-06-01T17:40:53.412Z",
                    "updatedAt": "2025-06-01T17:40:53.412Z"
                }
            ]
        },
        {
            "id": "bcb5e82b-3ef6-4fb6-912c-32eb85242f67",
            "title": "Grand Egyptian Museum (GEM)",
            "price": "199",
            "offer": null,
            "Duration": 4,
            "Description": "Experience the wonders of ancient Egypt with a visit to the Grand Egyptian Museum, including convenient hotel pickup for a seamless adventure.",
            "FullDescription": "    • The Grand Egyptian Museum (GEM), also known as the Giza Museum, is an archaeological museum in Giza, Egypt, about 2 kilometers (1.2 miles) from the Giza pyramid complex. The Museum hosts over 100,000 artifacts from ancient Egyptian civilization, including the complete Tutankhamun collection, and many pieces will be on display for the first time. With 81,000 m2 (872,000 sq. ft.) of floor space, it will be the world's largest archeological museum. It is being built as part of a new master plan for the Giza Plateau, known as \"Giza 2030\".     • The GEM will also host permanent exhibition galleries, temporary exhibitions, special exhibitions, children museum, and virtual and large format screens with a total floor area of 32,000 m2.     • The museum was built by a joint venture of the Belgian BESIX Group and the Egyptian Orascom Construction.      • The original opening was scheduled for 2012, but it was only partially open on 16 October 2024. The Grand Hall, Grand Staircase, commercial area, 12 public galleries and the exterior gardens are open for tours, while the Tutankhamun gallery and Solar Boat Museum are not yet open to the public. Announced by the Egyptian Authorities, the museum will officially open to the public on 6 July 2025 ",
            "included": [
                "Hotel pickup and drop-off",
                "Transportation by air-conditioned vehicle",
                "Entry ticket",
                "Egyptologist tour guide",
                "Bottle of water"
            ],
            "excluded": [
                "Entry ticket to go inside any Pyramid",
                "Lunch expenses",
                "Tips"
            ],
            "highlight": [
                "Uncover ancient Egyptian history on a private tour of the Giza Pyramids",
                "Marvel at the Great Sphinx of Giza, a limestone statue of a reclining sphinx"
            ],
            "locations": [
                "Egyptian Museum for antiques",
                "Cairo"
            ],
            "ActitvityDetails": null,
            "Governorate": "Giza",
            "category": "Popular",
            "IsDeleted": null,
            "IsFeatured": true,
            "createdAt": "2025-06-01T17:40:19.270Z",
            "updatedAt": "2025-06-01T17:40:19.270Z",
            "images": [
                {
                    "id": "b8a86bca-6788-4832-ad94-23c31e716220",
                    "localImage": null,
                    "cloudImage": "https://res.cloudinary.com/dibg7krep/image/upload/v1748799613/uploads/1748799610442-package-20.jpg.jpg",
                    "publicId": "uploads/1748799610442-package-20.jpg",
                    "TourId": "bcb5e82b-3ef6-4fb6-912c-32eb85242f67",
                    "createdAt": "2025-06-01T17:40:19.303Z",
                    "updatedAt": "2025-06-01T17:40:19.303Z"
                },
                {
                    "id": "1f82ee7d-44fb-4c7e-9d11-9efa397b0b35",
                    "localImage": null,
                    "cloudImage": "https://res.cloudinary.com/dibg7krep/image/upload/v1748799618/uploads/1748799612836-package-13.jpg.jpg",
                    "publicId": "uploads/1748799612836-package-13.jpg",
                    "TourId": "bcb5e82b-3ef6-4fb6-912c-32eb85242f67",
                    "createdAt": "2025-06-01T17:40:19.303Z",
                    "updatedAt": "2025-06-01T17:40:19.303Z"
                },
                {
                    "id": "058a9a96-2f8f-4aec-b05a-3df0d1d51939",
                    "localImage": null,
                    "cloudImage": "https://res.cloudinary.com/dibg7krep/image/upload/v1748799612/uploads/1748799609550-package-17.jpg.jpg",
                    "publicId": "uploads/1748799609550-package-17.jpg",
                    "TourId": "bcb5e82b-3ef6-4fb6-912c-32eb85242f67",
                    "createdAt": "2025-06-01T17:40:19.303Z",
                    "updatedAt": "2025-06-01T17:40:19.303Z"
                }
            ]
        },
        {
            "id": "3be878a2-d5dc-462c-87ea-708c66c80d8d",
            "title": "Grand Egyptian Museum (GEM)",
            "price": "199",
            "offer": null,
            "Duration": 4,
            "Description": "Experience the wonders of ancient Egypt with a visit to the Grand Egyptian Museum, including convenient hotel pickup for a seamless adventure.",
            "FullDescription": "    • The Grand Egyptian Museum (GEM), also known as the Giza Museum, is an archaeological museum in Giza, Egypt, about 2 kilometers (1.2 miles) from the Giza pyramid complex. The Museum hosts over 100,000 artifacts from ancient Egyptian civilization, including the complete Tutankhamun collection, and many pieces will be on display for the first time. With 81,000 m2 (872,000 sq. ft.) of floor space, it will be the world's largest archeological museum. It is being built as part of a new master plan for the Giza Plateau, known as \"Giza 2030\".     • The GEM will also host permanent exhibition galleries, temporary exhibitions, special exhibitions, children museum, and virtual and large format screens with a total floor area of 32,000 m2.     • The museum was built by a joint venture of the Belgian BESIX Group and the Egyptian Orascom Construction.      • The original opening was scheduled for 2012, but it was only partially open on 16 October 2024. The Grand Hall, Grand Staircase, commercial area, 12 public galleries and the exterior gardens are open for tours, while the Tutankhamun gallery and Solar Boat Museum are not yet open to the public. Announced by the Egyptian Authorities, the museum will officially open to the public on 6 July 2025 ",
            "included": [
                "Hotel pickup and drop-off",
                "Transportation by air-conditioned vehicle",
                "Entry ticket",
                "Egyptologist tour guide",
                "Bottle of water"
            ],
            "excluded": [
                "Entry ticket to go inside any Pyramid",
                "Lunch expenses",
                "Tips"
            ],
            "highlight": [
                "Uncover ancient Egyptian history on a private tour of the Giza Pyramids",
                "Marvel at the Great Sphinx of Giza, a limestone statue of a reclining sphinx"
            ],
            "locations": [
                "Egyptian Museum for antiques",
                "Cairo"
            ],
            "ActitvityDetails": null,
            "Governorate": "Cairo",
            "category": "Popular",
            "IsDeleted": null,
            "IsFeatured": true,
            "createdAt": "2025-06-01T17:39:35.341Z",
            "updatedAt": "2025-06-01T17:39:35.341Z",
            "images": [
                {
                    "id": "e64089ba-bf9d-4648-83ae-b08e3d365103",
                    "localImage": null,
                    "cloudImage": "https://res.cloudinary.com/dibg7krep/image/upload/v1748799568/uploads/1748799564925-package-20.jpg.jpg",
                    "publicId": "uploads/1748799564925-package-20.jpg",
                    "TourId": "3be878a2-d5dc-462c-87ea-708c66c80d8d",
                    "createdAt": "2025-06-01T17:39:35.374Z",
                    "updatedAt": "2025-06-01T17:39:35.374Z"
                },
                {
                    "id": "dad55824-01a8-4ca1-bbef-96162ab37bd3",
                    "localImage": null,
                    "cloudImage": "https://res.cloudinary.com/dibg7krep/image/upload/v1748799574/uploads/1748799566694-package-13.jpg.jpg",
                    "publicId": "uploads/1748799566694-package-13.jpg",
                    "TourId": "3be878a2-d5dc-462c-87ea-708c66c80d8d",
                    "createdAt": "2025-06-01T17:39:35.374Z",
                    "updatedAt": "2025-06-01T17:39:35.374Z"
                },
                {
                    "id": "ced02763-ad2d-4147-9334-89fdb1a95401",
                    "localImage": null,
                    "cloudImage": "https://res.cloudinary.com/dibg7krep/image/upload/v1748799566/uploads/1748799563987-package-17.jpg.jpg",
                    "publicId": "uploads/1748799563987-package-17.jpg",
                    "TourId": "3be878a2-d5dc-462c-87ea-708c66c80d8d",
                    "createdAt": "2025-06-01T17:39:35.374Z",
                    "updatedAt": "2025-06-01T17:39:35.374Z"
                }
            ]
        },
        {
            "id": "467159ed-25ac-45c2-97e4-8331e2042ade",
            "title": "Grand Egyptian Museum (GEM)",
            "price": "199",
            "offer": null,
            "Duration": 4,
            "Description": "Experience the wonders of ancient Egypt with a visit to the Grand Egyptian Museum, including convenient hotel pickup for a seamless adventure.",
            "FullDescription": "    • The Grand Egyptian Museum (GEM), also known as the Giza Museum, is an archaeological museum in Giza, Egypt, about 2 kilometers (1.2 miles) from the Giza pyramid complex. The Museum hosts over 100,000 artifacts from ancient Egyptian civilization, including the complete Tutankhamun collection, and many pieces will be on display for the first time. With 81,000 m2 (872,000 sq. ft.) of floor space, it will be the world's largest archeological museum. It is being built as part of a new master plan for the Giza Plateau, known as \"Giza 2030\".     • The GEM will also host permanent exhibition galleries, temporary exhibitions, special exhibitions, children museum, and virtual and large format screens with a total floor area of 32,000 m2.     • The museum was built by a joint venture of the Belgian BESIX Group and the Egyptian Orascom Construction.      • The original opening was scheduled for 2012, but it was only partially open on 16 October 2024. The Grand Hall, Grand Staircase, commercial area, 12 public galleries and the exterior gardens are open for tours, while the Tutankhamun gallery and Solar Boat Museum are not yet open to the public. Announced by the Egyptian Authorities, the museum will officially open to the public on 6 July 2025 ",
            "included": [
                "Hotel pickup and drop-off",
                "Transportation by air-conditioned vehicle",
                "Entry ticket",
                "Egyptologist tour guide",
                "Bottle of water"
            ],
            "excluded": [
                "Entry ticket to go inside any Pyramid",
                "Lunch expenses",
                "Tips"
            ],
            "highlight": [
                "Uncover ancient Egyptian history on a private tour of the Giza Pyramids",
                "Marvel at the Great Sphinx of Giza, a limestone statue of a reclining sphinx"
            ],
            "locations": [
                "Egyptian Museum for antiques",
                "Cairo"
            ],
            "ActitvityDetails": null,
            "Governorate": "Cairo",
            "category": "Popular",
            "IsDeleted": null,
            "IsFeatured": true,
            "createdAt": "2025-06-01T17:38:35.619Z",
            "updatedAt": "2025-06-01T17:38:35.619Z",
            "images": [
                {
                    "id": "cb5d9ebb-3c95-487a-8d5f-10ff0c7eb7a0",
                    "localImage": null,
                    "cloudImage": "https://res.cloudinary.com/dibg7krep/image/upload/v1748799515/uploads/1748799507357-package-15.jpg.jpg",
                    "publicId": "uploads/1748799507357-package-15.jpg",
                    "TourId": "467159ed-25ac-45c2-97e4-8331e2042ade",
                    "createdAt": "2025-06-01T17:38:35.623Z",
                    "updatedAt": "2025-06-01T17:38:35.623Z"
                },
                {
                    "id": "ab84a783-7ed1-4f26-9c24-5cddd2e25b25",
                    "localImage": null,
                    "cloudImage": "https://res.cloudinary.com/dibg7krep/image/upload/v1748799509/uploads/1748799507352-package-11.jpg.jpg",
                    "publicId": "uploads/1748799507352-package-11.jpg",
                    "TourId": "467159ed-25ac-45c2-97e4-8331e2042ade",
                    "createdAt": "2025-06-01T17:38:35.623Z",
                    "updatedAt": "2025-06-01T17:38:35.623Z"
                }
            ]
        },
        {
            "id": "73893555-9168-4852-b740-b323e7e357db",
            "title": "Grand Egyptian Museum (GEM)",
            "price": "199",
            "offer": null,
            "Duration": 4,
            "Description": "Experience the wonders of ancient Egypt with a visit to the Grand Egyptian Museum, including convenient hotel pickup for a seamless adventure.",
            "FullDescription": "    • The Grand Egyptian Museum (GEM), also known as the Giza Museum, is an archaeological museum in Giza, Egypt, about 2 kilometers (1.2 miles) from the Giza pyramid complex. The Museum hosts over 100,000 artifacts from ancient Egyptian civilization, including the complete Tutankhamun collection, and many pieces will be on display for the first time. With 81,000 m2 (872,000 sq. ft.) of floor space, it will be the world's largest archeological museum. It is being built as part of a new master plan for the Giza Plateau, known as \"Giza 2030\".     • The GEM will also host permanent exhibition galleries, temporary exhibitions, special exhibitions, children museum, and virtual and large format screens with a total floor area of 32,000 m2.     • The museum was built by a joint venture of the Belgian BESIX Group and the Egyptian Orascom Construction.      • The original opening was scheduled for 2012, but it was only partially open on 16 October 2024. The Grand Hall, Grand Staircase, commercial area, 12 public galleries and the exterior gardens are open for tours, while the Tutankhamun gallery and Solar Boat Museum are not yet open to the public. Announced by the Egyptian Authorities, the museum will officially open to the public on 6 July 2025 ",
            "included": [
                "Hotel pickup and drop-off",
                "Transportation by air-conditioned vehicle",
                "Entry ticket",
                "Egyptologist tour guide",
                "Bottle of water"
            ],
            "excluded": [
                "Entry ticket to go inside any Pyramid",
                "Lunch expenses",
                "Tips"
            ],
            "highlight": [
                "Uncover ancient Egyptian history on a private tour of the Giza Pyramids",
                "Marvel at the Great Sphinx of Giza, a limestone statue of a reclining sphinx"
            ],
            "locations": [
                "Egyptian Museum for antiques",
                "Cairo"
            ],
            "ActitvityDetails": null,
            "Governorate": "Cairo",
            "category": "Popular",
            "IsDeleted": null,
            "IsFeatured": true,
            "createdAt": "2025-06-01T17:38:26.332Z",
            "updatedAt": "2025-06-01T17:38:26.332Z",
            "images": [
                {
                    "id": "45ca1446-23fb-40f0-947d-f7050b5b0ead",
                    "localImage": null,
                    "cloudImage": "https://res.cloudinary.com/dibg7krep/image/upload/v1748799505/uploads/1748799498223-package-15.jpg.jpg",
                    "publicId": "uploads/1748799498223-package-15.jpg",
                    "TourId": "73893555-9168-4852-b740-b323e7e357db",
                    "createdAt": "2025-06-01T17:38:26.366Z",
                    "updatedAt": "2025-06-01T17:38:26.366Z"
                },
                {
                    "id": "e870c2f3-69d1-49ba-9435-f4be38b5d981",
                    "localImage": null,
                    "cloudImage": "https://res.cloudinary.com/dibg7krep/image/upload/v1748799499/uploads/1748799497280-package-11.jpg.jpg",
                    "publicId": "uploads/1748799497280-package-11.jpg",
                    "TourId": "73893555-9168-4852-b740-b323e7e357db",
                    "createdAt": "2025-06-01T17:38:26.366Z",
                    "updatedAt": "2025-06-01T17:38:26.366Z"
                }
            ]
        },
        {
            "id": "90794b37-01ca-49ea-90b0-c3cd2374d1c8",
            "title": "Grand Egyptian Museum (GEM)",
            "price": "199",
            "offer": null,
            "Duration": 4,
            "Description": "Experience the wonders of ancient Egypt with a visit to the Grand Egyptian Museum, including convenient hotel pickup for a seamless adventure.",
            "FullDescription": "    • The Grand Egyptian Museum (GEM), also known as the Giza Museum, is an archaeological museum in Giza, Egypt, about 2 kilometers (1.2 miles) from the Giza pyramid complex. The Museum hosts over 100,000 artifacts from ancient Egyptian civilization, including the complete Tutankhamun collection, and many pieces will be on display for the first time. With 81,000 m2 (872,000 sq. ft.) of floor space, it will be the world's largest archeological museum. It is being built as part of a new master plan for the Giza Plateau, known as \"Giza 2030\".     • The GEM will also host permanent exhibition galleries, temporary exhibitions, special exhibitions, children museum, and virtual and large format screens with a total floor area of 32,000 m2.     • The museum was built by a joint venture of the Belgian BESIX Group and the Egyptian Orascom Construction.      • The original opening was scheduled for 2012, but it was only partially open on 16 October 2024. The Grand Hall, Grand Staircase, commercial area, 12 public galleries and the exterior gardens are open for tours, while the Tutankhamun gallery and Solar Boat Museum are not yet open to the public. Announced by the Egyptian Authorities, the museum will officially open to the public on 6 July 2025 ",
            "included": [
                "Hotel pickup and drop-off",
                "Transportation by air-conditioned vehicle",
                "Entry ticket",
                "Egyptologist tour guide",
                "Bottle of water"
            ],
            "excluded": [
                "Entry ticket to go inside any Pyramid",
                "Lunch expenses",
                "Tips"
            ],
            "highlight": [
                "Uncover ancient Egyptian history on a private tour of the Giza Pyramids",
                "Marvel at the Great Sphinx of Giza, a limestone statue of a reclining sphinx"
            ],
            "locations": [
                "Egyptian Museum for antiques",
                "Cairo"
            ],
            "ActitvityDetails": null,
            "Governorate": "Alexandria",
            "category": "Popular",
            "IsDeleted": null,
            "IsFeatured": true,
            "createdAt": "2025-06-01T17:37:15.796Z",
            "updatedAt": "2025-06-01T17:37:15.796Z",
            "images": [
                {
                    "id": "2386088b-d998-4556-a6c9-9949900c4a22",
                    "localImage": null,
                    "cloudImage": "https://res.cloudinary.com/dibg7krep/image/upload/v1748799435/uploads/1748799426711-package-15.jpg.jpg",
                    "publicId": "uploads/1748799426711-package-15.jpg",
                    "TourId": "90794b37-01ca-49ea-90b0-c3cd2374d1c8",
                    "createdAt": "2025-06-01T17:37:15.801Z",
                    "updatedAt": "2025-06-01T17:37:15.801Z"
                },
                {
                    "id": "798ce43f-8b0a-4ffb-bfb4-b176fe676e7c",
                    "localImage": null,
                    "cloudImage": "https://res.cloudinary.com/dibg7krep/image/upload/v1748799429/uploads/1748799426703-package-11.jpg.jpg",
                    "publicId": "uploads/1748799426703-package-11.jpg",
                    "TourId": "90794b37-01ca-49ea-90b0-c3cd2374d1c8",
                    "createdAt": "2025-06-01T17:37:15.801Z",
                    "updatedAt": "2025-06-01T17:37:15.801Z"
                }
            ]
        },
        {
            "id": "29ab3190-6ae7-4e67-9fb7-30a1b88375fe",
            "title": "Grand Egyptian Museum (GEM)",
            "price": "199",
            "offer": null,
            "Duration": 4,
            "Description": "Experience the wonders of ancient Egypt with a visit to the Grand Egyptian Museum, including convenient hotel pickup for a seamless adventure.",
            "FullDescription": "    • The Grand Egyptian Museum (GEM), also known as the Giza Museum, is an archaeological museum in Giza, Egypt, about 2 kilometers (1.2 miles) from the Giza pyramid complex. The Museum hosts over 100,000 artifacts from ancient Egyptian civilization, including the complete Tutankhamun collection, and many pieces will be on display for the first time. With 81,000 m2 (872,000 sq. ft.) of floor space, it will be the world's largest archeological museum. It is being built as part of a new master plan for the Giza Plateau, known as \"Giza 2030\".     • The GEM will also host permanent exhibition galleries, temporary exhibitions, special exhibitions, children museum, and virtual and large format screens with a total floor area of 32,000 m2.     • The museum was built by a joint venture of the Belgian BESIX Group and the Egyptian Orascom Construction.      • The original opening was scheduled for 2012, but it was only partially open on 16 October 2024. The Grand Hall, Grand Staircase, commercial area, 12 public galleries and the exterior gardens are open for tours, while the Tutankhamun gallery and Solar Boat Museum are not yet open to the public. Announced by the Egyptian Authorities, the museum will officially open to the public on 6 July 2025 ",
            "included": [
                "Hotel pickup and drop-off",
                "Transportation by air-conditioned vehicle",
                "Entry ticket",
                "Egyptologist tour guide",
                "Bottle of water"
            ],
            "excluded": [
                "Entry ticket to go inside any Pyramid",
                "Lunch expenses",
                "Tips"
            ],
            "highlight": [
                "Uncover ancient Egyptian history on a private tour of the Giza Pyramids",
                "Marvel at the Great Sphinx of Giza, a limestone statue of a reclining sphinx"
            ],
            "locations": [
                "Egyptian Museum for antiques",
                "Cairo"
            ],
            "ActitvityDetails": null,
            "Governorate": "Alexandria",
            "category": "Popular",
            "IsDeleted": null,
            "IsFeatured": true,
            "createdAt": "2025-06-01T17:37:05.179Z",
            "updatedAt": "2025-06-01T17:37:05.179Z",
            "images": [
                {
                    "id": "e432efb2-646e-479f-b4e9-2f495aefeda2",
                    "localImage": null,
                    "cloudImage": "https://res.cloudinary.com/dibg7krep/image/upload/v1748799424/uploads/1748799416584-package-15.jpg.jpg",
                    "publicId": "uploads/1748799416584-package-15.jpg",
                    "TourId": "29ab3190-6ae7-4e67-9fb7-30a1b88375fe",
                    "createdAt": "2025-06-01T17:37:05.277Z",
                    "updatedAt": "2025-06-01T17:37:05.277Z"
                },
                {
                    "id": "5f6c4fa3-0ff8-461b-a672-14df5d08368e",
                    "localImage": null,
                    "cloudImage": "https://res.cloudinary.com/dibg7krep/image/upload/v1748799418/uploads/1748799415589-package-11.jpg.jpg",
                    "publicId": "uploads/1748799415589-package-11.jpg",
                    "TourId": "29ab3190-6ae7-4e67-9fb7-30a1b88375fe",
                    "createdAt": "2025-06-01T17:37:05.277Z",
                    "updatedAt": "2025-06-01T17:37:05.277Z"
                }
            ]
        },
        {
            "id": "9460b89a-e3c1-4da9-a23e-41bda4d7fbe0",
            "title": "Grand Egyptian Museum (GEM)",
            "price": "199",
            "offer": null,
            "Duration": 4,
            "Description": "Experience the wonders of ancient Egypt with a visit to the Grand Egyptian Museum, including convenient hotel pickup for a seamless adventure.",
            "FullDescription": "    • The Grand Egyptian Museum (GEM), also known as the Giza Museum, is an archaeological museum in Giza, Egypt, about 2 kilometers (1.2 miles) from the Giza pyramid complex. The Museum hosts over 100,000 artifacts from ancient Egyptian civilization, including the complete Tutankhamun collection, and many pieces will be on display for the first time. With 81,000 m2 (872,000 sq. ft.) of floor space, it will be the world's largest archeological museum. It is being built as part of a new master plan for the Giza Plateau, known as \"Giza 2030\".     • The GEM will also host permanent exhibition galleries, temporary exhibitions, special exhibitions, children museum, and virtual and large format screens with a total floor area of 32,000 m2.     • The museum was built by a joint venture of the Belgian BESIX Group and the Egyptian Orascom Construction.      • The original opening was scheduled for 2012, but it was only partially open on 16 October 2024. The Grand Hall, Grand Staircase, commercial area, 12 public galleries and the exterior gardens are open for tours, while the Tutankhamun gallery and Solar Boat Museum are not yet open to the public. Announced by the Egyptian Authorities, the museum will officially open to the public on 6 July 2025 ",
            "included": [
                "Hotel pickup and drop-off",
                "Transportation by air-conditioned vehicle",
                "Entry ticket",
                "Egyptologist tour guide",
                "Bottle of water"
            ],
            "excluded": [
                "Entry ticket to go inside any Pyramid",
                "Lunch expenses",
                "Tips"
            ],
            "highlight": [
                "Uncover ancient Egyptian history on a private tour of the Giza Pyramids",
                "Marvel at the Great Sphinx of Giza, a limestone statue of a reclining sphinx"
            ],
            "locations": [
                "Egyptian Museum for antiques",
                "Cairo"
            ],
            "ActitvityDetails": null,
            "Governorate": "Alexandria",
            "category": "Popular",
            "IsDeleted": null,
            "IsFeatured": true,
            "createdAt": "2025-06-01T17:26:51.500Z",
            "updatedAt": "2025-06-01T17:26:51.500Z",
            "images": [
                {
                    "id": "94fde720-4490-414f-8a34-ca4a1dc08462",
                    "localImage": null,
                    "cloudImage": "https://res.cloudinary.com/dibg7krep/image/upload/v1748798810/uploads/1748798803502-package-15.jpg.jpg",
                    "publicId": "uploads/1748798803502-package-15.jpg",
                    "TourId": "9460b89a-e3c1-4da9-a23e-41bda4d7fbe0",
                    "createdAt": "2025-06-01T17:26:51.538Z",
                    "updatedAt": "2025-06-01T17:26:51.538Z"
                },
                {
                    "id": "ef8e693f-beab-486e-992f-f28ea10f5faf",
                    "localImage": null,
                    "cloudImage": "https://res.cloudinary.com/dibg7krep/image/upload/v1748798805/uploads/1748798802455-package-11.jpg.jpg",
                    "publicId": "uploads/1748798802455-package-11.jpg",
                    "TourId": "9460b89a-e3c1-4da9-a23e-41bda4d7fbe0",
                    "createdAt": "2025-06-01T17:26:51.538Z",
                    "updatedAt": "2025-06-01T17:26:51.538Z"
                }
            ]
        },
        {
            "id": "e4ef4750-22e2-44ac-bfe3-76a6e5d5aab5",
            "title": "Egyptian Museum for antiques:",
            "price": "199",
            "offer": null,
            "Duration": 6,
            "Description": "Explore the old Egyptian Museum for antiques on a half-day tour of Cairo with hotel transfers, immersing yourself in the spirit of ancient Egypt.",
            "FullDescription": "The Museum of Egyptian Antiquities, commonly known as the Egyptian Museum  (also called the Cairo Museum), located in Cairo, Egypt, houses the largest collection of Egyptian antiquities in the world. It houses over 120,000 items, with a representative amount on display. Located in Tahrir Square in a building built in 1901, it is the largest museum in Africa. Among its masterpieces are Pharaoh Tutankhamun's treasure, including its iconic gold burial mask, widely considered one of the best-known works of art in the world and a prominent symbol of ancient Egypt. ",
            "included": [
                "Hotel pickup and drop-off",
                "Transportation by air-conditioned vehicle",
                "Entry ticket",
                "Egyptologist tour guide",
                "Bottle of water"
            ],
            "excluded": [
                "Entry ticket to go inside any Pyramid",
                "Lunch expenses",
                "Tips"
            ],
            "highlight": [
                "Uncover ancient Egyptian history on a private tour of the Giza Pyramids",
                "Marvel at the Great Sphinx of Giza, a limestone statue of a reclining sphinx"
            ],
            "locations": [
                "Egyptian Museum for antiques",
                "Cairo"
            ],
            "ActitvityDetails": null,
            "Governorate": "Alexandria",
            "category": "Favorit",
            "IsDeleted": null,
            "IsFeatured": true,
            "createdAt": "2025-06-01T17:25:20.902Z",
            "updatedAt": "2025-06-01T17:25:20.902Z",
            "images": [
                {
                    "id": "835508b7-46f8-49e0-9f60-7201d902de39",
                    "localImage": null,
                    "cloudImage": "https://res.cloudinary.com/dibg7krep/image/upload/v1748798718/uploads/1748798715427-package-11.jpg.jpg",
                    "publicId": "uploads/1748798715427-package-11.jpg",
                    "TourId": "e4ef4750-22e2-44ac-bfe3-76a6e5d5aab5",
                    "createdAt": "2025-06-01T17:25:20.933Z",
                    "updatedAt": "2025-06-01T17:25:20.933Z"
                },
                {
                    "id": "e4035864-9578-408c-8f51-13397bde977e",
                    "localImage": null,
                    "cloudImage": "https://res.cloudinary.com/dibg7krep/image/upload/v1748798720/uploads/1748798716483-package-17.jpg.jpg",
                    "publicId": "uploads/1748798716483-package-17.jpg",
                    "TourId": "e4ef4750-22e2-44ac-bfe3-76a6e5d5aab5",
                    "createdAt": "2025-06-01T17:25:20.933Z",
                    "updatedAt": "2025-06-01T17:25:20.933Z"
                },
                {
                    "id": "7d4b9754-aff0-49c0-a4f5-ba6fd1b7c3e6",
                    "localImage": null,
                    "cloudImage": "https://res.cloudinary.com/dibg7krep/image/upload/v1748798719/uploads/1748798715422-package-19.jpg.png",
                    "publicId": "uploads/1748798715422-package-19.jpg",
                    "TourId": "e4ef4750-22e2-44ac-bfe3-76a6e5d5aab5",
                    "createdAt": "2025-06-01T17:25:20.933Z",
                    "updatedAt": "2025-06-01T17:25:20.933Z"
                }
            ]
        },
        {
            "id": "f510e9d4-a560-4501-9a5d-6a38eb8ce01c",
            "title": "Egyptian Museum for antiques:",
            "price": "100",
            "offer": null,
            "Duration": 6,
            "Description": "Explore the old Egyptian Museum for antiques on a half-day tour of Cairo with hotel transfers, immersing yourself in the spirit of ancient Egypt.",
            "FullDescription": "The Museum of Egyptian Antiquities, commonly known as the Egyptian Museum  (also called the Cairo Museum), located in Cairo, Egypt, houses the largest collection of Egyptian antiquities in the world. It houses over 120,000 items, with a representative amount on display. Located in Tahrir Square in a building built in 1901, it is the largest museum in Africa. Among its masterpieces are Pharaoh Tutankhamun's treasure, including its iconic gold burial mask, widely considered one of the best-known works of art in the world and a prominent symbol of ancient Egypt. ",
            "included": [
                "Hotel pickup and drop-off",
                "Transportation by air-conditioned vehicle",
                "Entry ticket",
                "Egyptologist tour guide",
                "Bottle of water"
            ],
            "excluded": [
                "Entry ticket to go inside any Pyramid",
                "Lunch expenses",
                "Tips"
            ],
            "highlight": [
                "Uncover ancient Egyptian history on a private tour of the Giza Pyramids",
                "Marvel at the Great Sphinx of Giza, a limestone statue of a reclining sphinx"
            ],
            "locations": [
                "Egyptian Museum for antiques",
                "Cairo"
            ],
            "ActitvityDetails": null,
            "Governorate": "Alexandria",
            "category": "Favorit",
            "IsDeleted": null,
            "IsFeatured": true,
            "createdAt": "2025-06-01T17:25:06.124Z",
            "updatedAt": "2025-06-01T17:25:06.124Z",
            "images": [
                {
                    "id": "f7756214-48b3-441d-9d93-9dfc5f76ab68",
                    "localImage": null,
                    "cloudImage": "https://res.cloudinary.com/dibg7krep/image/upload/v1748798703/uploads/1748798700743-package-11.jpg.jpg",
                    "publicId": "uploads/1748798700743-package-11.jpg",
                    "TourId": "f510e9d4-a560-4501-9a5d-6a38eb8ce01c",
                    "createdAt": "2025-06-01T17:25:06.155Z",
                    "updatedAt": "2025-06-01T17:25:06.155Z"
                },
                {
                    "id": "373f9211-724c-445b-8a37-da39dd008faa",
                    "localImage": null,
                    "cloudImage": "https://res.cloudinary.com/dibg7krep/image/upload/v1748798703/uploads/1748798700738-package-19.jpg.png",
                    "publicId": "uploads/1748798700738-package-19.jpg",
                    "TourId": "f510e9d4-a560-4501-9a5d-6a38eb8ce01c",
                    "createdAt": "2025-06-01T17:25:06.155Z",
                    "updatedAt": "2025-06-01T17:25:06.155Z"
                },
                {
                    "id": "c6c4e1a4-6342-4210-89ee-62d680b9d2a9",
                    "localImage": null,
                    "cloudImage": "https://res.cloudinary.com/dibg7krep/image/upload/v1748798705/uploads/1748798701962-package-17.jpg.jpg",
                    "publicId": "uploads/1748798701962-package-17.jpg",
                    "TourId": "f510e9d4-a560-4501-9a5d-6a38eb8ce01c",
                    "createdAt": "2025-06-01T17:25:06.155Z",
                    "updatedAt": "2025-06-01T17:25:06.155Z"
                }
            ]
        },
        {
            "id": "4ed09976-adcd-4f0a-8f58-ad647db9b643",
            "title": "Egyptian Museum for antiques:",
            "price": "100",
            "offer": null,
            "Duration": 6,
            "Description": "Explore the old Egyptian Museum for antiques on a half-day tour of Cairo with hotel transfers, immersing yourself in the spirit of ancient Egypt.",
            "FullDescription": "The Museum of Egyptian Antiquities, commonly known as the Egyptian Museum  (also called the Cairo Museum), located in Cairo, Egypt, houses the largest collection of Egyptian antiquities in the world. It houses over 120,000 items, with a representative amount on display. Located in Tahrir Square in a building built in 1901, it is the largest museum in Africa. Among its masterpieces are Pharaoh Tutankhamun's treasure, including its iconic gold burial mask, widely considered one of the best-known works of art in the world and a prominent symbol of ancient Egypt. ",
            "included": [
                "Hotel pickup and drop-off",
                "Transportation by air-conditioned vehicle",
                "Entry ticket",
                "Egyptologist tour guide",
                "Bottle of water"
            ],
            "excluded": [
                "Entry ticket to go inside any Pyramid",
                "Lunch expenses",
                "Tips"
            ],
            "highlight": [
                "Uncover ancient Egyptian history on a private tour of the Giza Pyramids",
                "Marvel at the Great Sphinx of Giza, a limestone statue of a reclining sphinx"
            ],
            "locations": [
                "Egyptian Museum for antiques",
                "Cairo"
            ],
            "ActitvityDetails": null,
            "Governorate": "Aswan",
            "category": "Favorit",
            "IsDeleted": null,
            "IsFeatured": true,
            "createdAt": "2025-06-01T17:24:53.680Z",
            "updatedAt": "2025-06-01T17:24:53.680Z",
            "images": [
                {
                    "id": "81d5e740-f5c8-4b19-9bec-970fd82afafa",
                    "localImage": null,
                    "cloudImage": "https://res.cloudinary.com/dibg7krep/image/upload/v1748798693/uploads/1748798688851-package-17.jpg.jpg",
                    "publicId": "uploads/1748798688851-package-17.jpg",
                    "TourId": "4ed09976-adcd-4f0a-8f58-ad647db9b643",
                    "createdAt": "2025-06-01T17:24:53.712Z",
                    "updatedAt": "2025-06-01T17:24:53.712Z"
                },
                {
                    "id": "9e001a48-00f9-4a29-af31-ee7edb313f7f",
                    "localImage": null,
                    "cloudImage": "https://res.cloudinary.com/dibg7krep/image/upload/v1748798691/uploads/1748798687800-package-11.jpg.jpg",
                    "publicId": "uploads/1748798687800-package-11.jpg",
                    "TourId": "4ed09976-adcd-4f0a-8f58-ad647db9b643",
                    "createdAt": "2025-06-01T17:24:53.712Z",
                    "updatedAt": "2025-06-01T17:24:53.712Z"
                },
                {
                    "id": "0d22414a-fa4a-472e-9ad8-27c0ceb75dea",
                    "localImage": null,
                    "cloudImage": "https://res.cloudinary.com/dibg7krep/image/upload/v1748798690/uploads/1748798687795-package-19.jpg.png",
                    "publicId": "uploads/1748798687795-package-19.jpg",
                    "TourId": "4ed09976-adcd-4f0a-8f58-ad647db9b643",
                    "createdAt": "2025-06-01T17:24:53.712Z",
                    "updatedAt": "2025-06-01T17:24:53.712Z"
                }
            ]
        },
        {
            "id": "34302b95-c70e-4c5f-809e-edd60d2fc884",
            "title": "Egyptian Museum for antiques:",
            "price": "50",
            "offer": null,
            "Duration": 6,
            "Description": "Explore the old Egyptian Museum for antiques on a half-day tour of Cairo with hotel transfers, immersing yourself in the spirit of ancient Egypt.",
            "FullDescription": "The Museum of Egyptian Antiquities, commonly known as the Egyptian Museum  (also called the Cairo Museum), located in Cairo, Egypt, houses the largest collection of Egyptian antiquities in the world. It houses over 120,000 items, with a representative amount on display. Located in Tahrir Square in a building built in 1901, it is the largest museum in Africa. Among its masterpieces are Pharaoh Tutankhamun's treasure, including its iconic gold burial mask, widely considered one of the best-known works of art in the world and a prominent symbol of ancient Egypt. ",
            "included": [
                "Hotel pickup and drop-off",
                "Transportation by air-conditioned vehicle",
                "Entry ticket",
                "Egyptologist tour guide",
                "Bottle of water"
            ],
            "excluded": [
                "Entry ticket to go inside any Pyramid",
                "Lunch expenses",
                "Tips"
            ],
            "highlight": [
                "Uncover ancient Egyptian history on a private tour of the Giza Pyramids",
                "Marvel at the Great Sphinx of Giza, a limestone statue of a reclining sphinx"
            ],
            "locations": [
                "Egyptian Museum for antiques",
                "Cairo"
            ],
            "ActitvityDetails": null,
            "Governorate": "Cairo",
            "category": "Favorit",
            "IsDeleted": null,
            "IsFeatured": true,
            "createdAt": "2025-06-01T17:24:34.482Z",
            "updatedAt": "2025-06-01T17:24:34.482Z",
            "images": [
                {
                    "id": "1f9310d9-789d-4e5a-bd97-d354a85a7311",
                    "localImage": null,
                    "cloudImage": "https://res.cloudinary.com/dibg7krep/image/upload/v1748798671/uploads/1748798669146-package-19.jpg.png",
                    "publicId": "uploads/1748798669146-package-19.jpg",
                    "TourId": "34302b95-c70e-4c5f-809e-edd60d2fc884",
                    "createdAt": "2025-06-01T17:24:34.517Z",
                    "updatedAt": "2025-06-01T17:24:34.517Z"
                },
                {
                    "id": "37f7364a-4caa-4b5d-b479-736a8fc40818",
                    "localImage": null,
                    "cloudImage": "https://res.cloudinary.com/dibg7krep/image/upload/v1748798673/uploads/1748798670175-package-17.jpg.jpg",
                    "publicId": "uploads/1748798670175-package-17.jpg",
                    "TourId": "34302b95-c70e-4c5f-809e-edd60d2fc884",
                    "createdAt": "2025-06-01T17:24:34.517Z",
                    "updatedAt": "2025-06-01T17:24:34.517Z"
                },
                {
                    "id": "7f0cbfc6-0bb7-46a6-a696-338c82611cae",
                    "localImage": null,
                    "cloudImage": "https://res.cloudinary.com/dibg7krep/image/upload/v1748798672/uploads/1748798669157-package-11.jpg.jpg",
                    "publicId": "uploads/1748798669157-package-11.jpg",
                    "TourId": "34302b95-c70e-4c5f-809e-edd60d2fc884",
                    "createdAt": "2025-06-01T17:24:34.517Z",
                    "updatedAt": "2025-06-01T17:24:34.517Z"
                }
            ]
        },
        {
            "id": "991527dd-47e2-4e4e-bec5-c68935b16e9e",
            "title": "Giza pyramids and Sphinx. “With camel ride”",
            "price": "50",
            "offer": null,
            "Duration": 12,
            "Description": "Explore the Pyramids of Giza and the Great Sphinx on a half-day tour of Cairo with hotel transfers. Enjoy a short camel ride near the pyramids, immersing yourself in the spirit of ancient Egypt.",
            "FullDescription": "    • The Great pyramids The Giza pyramid complex consists of the Great Pyramid (also known as the Pyramid of Cheops or Khufu and constructed c. 2580 – c. 2560 BC), the slightly smaller Pyramid of Khafre (or Chephren) a few hundred metres to the south-west, and the relatively modest-sized Pyramid of Menkaure (or Mykerinos) a few hundred metres farther south-west. The Great Sphinx lies on the east side of the complex. Consensus among Egyptologists is that the head of the Great Sphinx is that of Khafre. Along with these major monuments are a number of smaller satellite edifices, known as \"queens\" pyramids, causeways, and temples. Besides the archaeological structures, the ancient landscape has also been investigated.      • Sphinx The Sphinx partially excavated, photo taken between 1867 and 1899 Main article: Great Sphinx of Giza The Sphinx dates from the reign of king Khafre. During the New Kingdom, Amenhotep II dedicated a new temple to Hauron-Haremakhet and this structure was added onto by later rulers. Finally, enjoy a 15-minute camel ride, adding a touch of adventure to your historical exploration. Revel in the blend of history and entertainment as you create lasting memories against the backdrop of the Giza Pyramids.",
            "included": [
                "Hotel pickup and drop-off",
                "Transportation by air-conditioned vehicle",
                "Entry ticket"
            ],
            "excluded": [
                "Entry ticket to go inside any Pyramid",
                "Lunch expenses",
                "Tips"
            ],
            "highlight": [
                "Uncover ancient Egyptian history on a private tour of the Giza Pyramids",
                "Marvel at the Great Sphinx of Giza, a limestone statue of a reclining sphinx"
            ],
            "locations": [
                "Giza pyramids",
                "Sphinx"
            ],
            "ActitvityDetails": null,
            "Governorate": "Giza",
            "category": "Special",
            "IsDeleted": null,
            "IsFeatured": true,
            "createdAt": "2025-06-01T17:20:35.420Z",
            "updatedAt": "2025-06-01T17:20:35.420Z",
            "images": [
                {
                    "id": "274882cf-b29b-4b4f-bcb9-bddf5ede7c83",
                    "localImage": null,
                    "cloudImage": "https://res.cloudinary.com/dibg7krep/image/upload/v1748798432/uploads/1748798426292-package-5.jpg.jpg",
                    "publicId": "uploads/1748798426292-package-5.jpg",
                    "TourId": "991527dd-47e2-4e4e-bec5-c68935b16e9e",
                    "createdAt": "2025-06-01T17:20:35.453Z",
                    "updatedAt": "2025-06-01T17:20:35.453Z"
                },
                {
                    "id": "67773fe5-9608-443a-9d67-1fc0b3b383c5",
                    "localImage": null,
                    "cloudImage": "https://res.cloudinary.com/dibg7krep/image/upload/v1748798434/uploads/1748798429348-package-17.jpg.jpg",
                    "publicId": "uploads/1748798429348-package-17.jpg",
                    "TourId": "991527dd-47e2-4e4e-bec5-c68935b16e9e",
                    "createdAt": "2025-06-01T17:20:35.453Z",
                    "updatedAt": "2025-06-01T17:20:35.453Z"
                },
                {
                    "id": "3e8b955a-59a1-49a3-9a06-cae5dd656c78",
                    "localImage": null,
                    "cloudImage": "https://res.cloudinary.com/dibg7krep/image/upload/v1748798430/uploads/1748798429348-package-2.png.png",
                    "publicId": "uploads/1748798429348-package-2.png",
                    "TourId": "991527dd-47e2-4e4e-bec5-c68935b16e9e",
                    "createdAt": "2025-06-01T17:20:35.453Z",
                    "updatedAt": "2025-06-01T17:20:35.453Z"
                },
                {
                    "id": "b036e2f4-4299-45de-bf3a-7196896479ea",
                    "localImage": null,
                    "cloudImage": "https://res.cloudinary.com/dibg7krep/image/upload/v1748798433/uploads/1748798426299-cards-02.png.png",
                    "publicId": "uploads/1748798426299-cards-02.png",
                    "TourId": "991527dd-47e2-4e4e-bec5-c68935b16e9e",
                    "createdAt": "2025-06-01T17:20:35.453Z",
                    "updatedAt": "2025-06-01T17:20:35.453Z"
                },
                {
                    "id": "3740f7d3-0408-48e9-b3d2-3eec094d21c4",
                    "localImage": null,
                    "cloudImage": "https://res.cloudinary.com/dibg7krep/image/upload/v1748798428/uploads/1748798419029-package-7.jpg.jpg",
                    "publicId": "uploads/1748798419029-package-7.jpg",
                    "TourId": "991527dd-47e2-4e4e-bec5-c68935b16e9e",
                    "createdAt": "2025-06-01T17:20:35.453Z",
                    "updatedAt": "2025-06-01T17:20:35.453Z"
                }
            ]
        },
        {
            "id": "17cde27d-f220-46a2-abcd-263f16337c58",
            "title": "Giza pyramids and Sphinx. “With camel ride”",
            "price": "50",
            "offer": null,
            "Duration": 12,
            "Description": "Explore the Pyramids of Giza and the Great Sphinx on a half-day tour of Cairo with hotel transfers. Enjoy a short camel ride near the pyramids, immersing yourself in the spirit of ancient Egypt.",
            "FullDescription": "    • The Great pyramids The Giza pyramid complex consists of the Great Pyramid (also known as the Pyramid of Cheops or Khufu and constructed c. 2580 – c. 2560 BC), the slightly smaller Pyramid of Khafre (or Chephren) a few hundred metres to the south-west, and the relatively modest-sized Pyramid of Menkaure (or Mykerinos) a few hundred metres farther south-west. The Great Sphinx lies on the east side of the complex. Consensus among Egyptologists is that the head of the Great Sphinx is that of Khafre. Along with these major monuments are a number of smaller satellite edifices, known as \"queens\" pyramids, causeways, and temples. Besides the archaeological structures, the ancient landscape has also been investigated.      • Sphinx The Sphinx partially excavated, photo taken between 1867 and 1899 Main article: Great Sphinx of Giza The Sphinx dates from the reign of king Khafre. During the New Kingdom, Amenhotep II dedicated a new temple to Hauron-Haremakhet and this structure was added onto by later rulers. Finally, enjoy a 15-minute camel ride, adding a touch of adventure to your historical exploration. Revel in the blend of history and entertainment as you create lasting memories against the backdrop of the Giza Pyramids.",
            "included": [
                "Hotel pickup and drop-off",
                "Transportation by air-conditioned vehicle",
                "Entry ticket"
            ],
            "excluded": [
                "Entry ticket to go inside any Pyramid",
                "Lunch expenses",
                "Tips"
            ],
            "highlight": [
                "Uncover ancient Egyptian history on a private tour of the Giza Pyramids",
                "Marvel at the Great Sphinx of Giza, a limestone statue of a reclining sphinx"
            ],
            "locations": [
                "Giza pyramids",
                "Sphinx"
            ],
            "ActitvityDetails": null,
            "Governorate": "Giza",
            "category": "Popular",
            "IsDeleted": null,
            "IsFeatured": true,
            "createdAt": "2025-06-01T17:20:15.237Z",
            "updatedAt": "2025-06-01T17:20:15.237Z",
            "images": [
                {
                    "id": "cf75ca97-49e1-426c-ac56-eeb79dd3d8cb",
                    "localImage": null,
                    "cloudImage": "https://res.cloudinary.com/dibg7krep/image/upload/v1748798411/uploads/1748798406366-package-5.jpg.jpg",
                    "publicId": "uploads/1748798406366-package-5.jpg",
                    "TourId": "17cde27d-f220-46a2-abcd-263f16337c58",
                    "createdAt": "2025-06-01T17:20:15.272Z",
                    "updatedAt": "2025-06-01T17:20:15.272Z"
                },
                {
                    "id": "fdf7d717-08f8-442d-a344-efcbf8334d9a",
                    "localImage": null,
                    "cloudImage": "https://res.cloudinary.com/dibg7krep/image/upload/v1748798414/uploads/1748798410611-package-17.jpg.jpg",
                    "publicId": "uploads/1748798410611-package-17.jpg",
                    "TourId": "17cde27d-f220-46a2-abcd-263f16337c58",
                    "createdAt": "2025-06-01T17:20:15.272Z",
                    "updatedAt": "2025-06-01T17:20:15.272Z"
                },
                {
                    "id": "d711706f-a09a-4a13-b930-692251c15b45",
                    "localImage": null,
                    "cloudImage": "https://res.cloudinary.com/dibg7krep/image/upload/v1748798411/uploads/1748798410611-package-2.png.png",
                    "publicId": "uploads/1748798410611-package-2.png",
                    "TourId": "17cde27d-f220-46a2-abcd-263f16337c58",
                    "createdAt": "2025-06-01T17:20:15.272Z",
                    "updatedAt": "2025-06-01T17:20:15.272Z"
                },
                {
                    "id": "7d7530fc-62f4-4060-b08c-4b73c2f21def",
                    "localImage": null,
                    "cloudImage": "https://res.cloudinary.com/dibg7krep/image/upload/v1748798414/uploads/1748798406371-cards-02.png.png",
                    "publicId": "uploads/1748798406371-cards-02.png",
                    "TourId": "17cde27d-f220-46a2-abcd-263f16337c58",
                    "createdAt": "2025-06-01T17:20:15.272Z",
                    "updatedAt": "2025-06-01T17:20:15.272Z"
                },
                {
                    "id": "2b028bf3-d33a-4b03-ac7d-86d2391dc394",
                    "localImage": null,
                    "cloudImage": "https://res.cloudinary.com/dibg7krep/image/upload/v1748798409/uploads/1748798405127-package-7.jpg.jpg",
                    "publicId": "uploads/1748798405127-package-7.jpg",
                    "TourId": "17cde27d-f220-46a2-abcd-263f16337c58",
                    "createdAt": "2025-06-01T17:20:15.272Z",
                    "updatedAt": "2025-06-01T17:20:15.272Z"
                }
            ]
        },
        {
            "id": "3df4a332-5bdc-4e51-962a-4d5dbc57c06e",
            "title": "Giza pyramids and Sphinx. “With camel ride”",
            "price": "50",
            "offer": null,
            "Duration": 12,
            "Description": "Explore the Pyramids of Giza and the Great Sphinx on a half-day tour of Cairo with hotel transfers. Enjoy a short camel ride near the pyramids, immersing yourself in the spirit of ancient Egypt.",
            "FullDescription": "    • The Great pyramids The Giza pyramid complex consists of the Great Pyramid (also known as the Pyramid of Cheops or Khufu and constructed c. 2580 – c. 2560 BC), the slightly smaller Pyramid of Khafre (or Chephren) a few hundred metres to the south-west, and the relatively modest-sized Pyramid of Menkaure (or Mykerinos) a few hundred metres farther south-west. The Great Sphinx lies on the east side of the complex. Consensus among Egyptologists is that the head of the Great Sphinx is that of Khafre. Along with these major monuments are a number of smaller satellite edifices, known as \"queens\" pyramids, causeways, and temples. Besides the archaeological structures, the ancient landscape has also been investigated.      • Sphinx The Sphinx partially excavated, photo taken between 1867 and 1899 Main article: Great Sphinx of Giza The Sphinx dates from the reign of king Khafre. During the New Kingdom, Amenhotep II dedicated a new temple to Hauron-Haremakhet and this structure was added onto by later rulers. Finally, enjoy a 15-minute camel ride, adding a touch of adventure to your historical exploration. Revel in the blend of history and entertainment as you create lasting memories against the backdrop of the Giza Pyramids.",
            "included": [
                "Hotel pickup and drop-off",
                "Transportation by air-conditioned vehicle",
                "Entry ticket"
            ],
            "excluded": [
                "Entry ticket to go inside any Pyramid",
                "Lunch expenses",
                "Tips"
            ],
            "highlight": [
                "Uncover ancient Egyptian history on a private tour of the Giza Pyramids",
                "Marvel at the Great Sphinx of Giza, a limestone statue of a reclining sphinx"
            ],
            "locations": [
                "Giza pyramids",
                "Sphinx"
            ],
            "ActitvityDetails": null,
            "Governorate": "Giza",
            "category": "Favorit",
            "IsDeleted": null,
            "IsFeatured": true,
            "createdAt": "2025-06-01T17:19:40.197Z",
            "updatedAt": "2025-06-01T17:19:40.197Z",
            "images": [
                {
                    "id": "aae35e49-521e-418c-8150-572a7995c449",
                    "localImage": null,
                    "cloudImage": "https://res.cloudinary.com/dibg7krep/image/upload/v1748798373/uploads/1748798369303-package-5.jpg.jpg",
                    "publicId": "uploads/1748798369303-package-5.jpg",
                    "TourId": "3df4a332-5bdc-4e51-962a-4d5dbc57c06e",
                    "createdAt": "2025-06-01T17:19:40.231Z",
                    "updatedAt": "2025-06-01T17:19:40.231Z"
                },
                {
                    "id": "c07c7529-cda6-42b2-805c-04c6b1cf9632",
                    "localImage": null,
                    "cloudImage": "https://res.cloudinary.com/dibg7krep/image/upload/v1748798379/uploads/1748798375487-package-17.jpg.jpg",
                    "publicId": "uploads/1748798375487-package-17.jpg",
                    "TourId": "3df4a332-5bdc-4e51-962a-4d5dbc57c06e",
                    "createdAt": "2025-06-01T17:19:40.231Z",
                    "updatedAt": "2025-06-01T17:19:40.231Z"
                },
                {
                    "id": "e245f6f1-6a50-44ec-8706-4d7224426f0a",
                    "localImage": null,
                    "cloudImage": "https://res.cloudinary.com/dibg7krep/image/upload/v1748798375/uploads/1748798375486-package-2.png.png",
                    "publicId": "uploads/1748798375486-package-2.png",
                    "TourId": "3df4a332-5bdc-4e51-962a-4d5dbc57c06e",
                    "createdAt": "2025-06-01T17:19:40.231Z",
                    "updatedAt": "2025-06-01T17:19:40.231Z"
                },
                {
                    "id": "8070be0a-fe6f-4fcd-9372-d9d8fce48371",
                    "localImage": null,
                    "cloudImage": "https://res.cloudinary.com/dibg7krep/image/upload/v1748798379/uploads/1748798369309-cards-02.png.png",
                    "publicId": "uploads/1748798369309-cards-02.png",
                    "TourId": "3df4a332-5bdc-4e51-962a-4d5dbc57c06e",
                    "createdAt": "2025-06-01T17:19:40.231Z",
                    "updatedAt": "2025-06-01T17:19:40.231Z"
                },
                {
                    "id": "e0ecbbae-3170-425a-bd4e-f940f2687d9b",
                    "localImage": null,
                    "cloudImage": "https://res.cloudinary.com/dibg7krep/image/upload/v1748798372/uploads/1748798368283-package-7.jpg.jpg",
                    "publicId": "uploads/1748798368283-package-7.jpg",
                    "TourId": "3df4a332-5bdc-4e51-962a-4d5dbc57c06e",
                    "createdAt": "2025-06-01T17:19:40.231Z",
                    "updatedAt": "2025-06-01T17:19:40.231Z"
                }
            ]
        },
        {
            "id": "b8b2b25a-03f1-4f08-8f5b-4e1fd148d29f",
            "title": "Giza pyramids and Sphinx. “With camel ride”",
            "price": "50",
            "offer": null,
            "Duration": 3,
            "Description": "Explore the Pyramids of Giza and the Great Sphinx on a half-day tour of Cairo with hotel transfers. Enjoy a short camel ride near the pyramids, immersing yourself in the spirit of ancient Egypt.",
            "FullDescription": "Explore the Pyramids of Giza and the Great Sphinx on a half-day tour of Cairo with hotel transfers. Enjoy a short camel ride near the pyramids, immersing yourself in the spirit of ancient Egypt.",
            "included": [
                "Hotel pickup and drop-off",
                "Transportation by air-conditioned vehicle",
                "Entry ticket"
            ],
            "excluded": [
                "Entry ticket to go inside any Pyramid",
                "Lunch expenses",
                "Tips"
            ],
            "highlight": [
                "Uncover ancient Egyptian history on a private tour of the Giza Pyramids",
                "Marvel at the Great Sphinx of Giza, a limestone statue of a reclining sphinx"
            ],
            "locations": [
                "Giza pyramids",
                "Sphinx"
            ],
            "ActitvityDetails": null,
            "Governorate": "Giza",
            "category": "Favorit",
            "IsDeleted": null,
            "IsFeatured": true,
            "createdAt": "2025-06-01T17:18:39.331Z",
            "updatedAt": "2025-06-01T17:18:39.331Z",
            "images": [
                {
                    "id": "8c42840d-47de-440c-ac9f-390299ab7ad0",
                    "localImage": null,
                    "cloudImage": "https://res.cloudinary.com/dibg7krep/image/upload/v1748798313/uploads/1748798309325-package-7.jpg.jpg",
                    "publicId": "uploads/1748798309325-package-7.jpg",
                    "TourId": "b8b2b25a-03f1-4f08-8f5b-4e1fd148d29f",
                    "createdAt": "2025-06-01T17:18:39.386Z",
                    "updatedAt": "2025-06-01T17:18:39.386Z"
                },
                {
                    "id": "2cef5355-a5d5-4cd0-b0ab-a4383da4fed9",
                    "localImage": null,
                    "cloudImage": "https://res.cloudinary.com/dibg7krep/image/upload/v1748798318/uploads/1748798315283-package-17.jpg.jpg",
                    "publicId": "uploads/1748798315283-package-17.jpg",
                    "TourId": "b8b2b25a-03f1-4f08-8f5b-4e1fd148d29f",
                    "createdAt": "2025-06-01T17:18:39.386Z",
                    "updatedAt": "2025-06-01T17:18:39.386Z"
                },
                {
                    "id": "b4281317-0eab-418f-95c2-e72046a709e4",
                    "localImage": null,
                    "cloudImage": "https://res.cloudinary.com/dibg7krep/image/upload/v1748798315/uploads/1748798315283-package-2.png.png",
                    "publicId": "uploads/1748798315283-package-2.png",
                    "TourId": "b8b2b25a-03f1-4f08-8f5b-4e1fd148d29f",
                    "createdAt": "2025-06-01T17:18:39.386Z",
                    "updatedAt": "2025-06-01T17:18:39.386Z"
                },
                {
                    "id": "89222f1f-11ec-4acd-b5c3-fd6f6104c034",
                    "localImage": null,
                    "cloudImage": "https://res.cloudinary.com/dibg7krep/image/upload/v1748798318/uploads/1748798310615-cards-02.png.png",
                    "publicId": "uploads/1748798310615-cards-02.png",
                    "TourId": "b8b2b25a-03f1-4f08-8f5b-4e1fd148d29f",
                    "createdAt": "2025-06-01T17:18:39.386Z",
                    "updatedAt": "2025-06-01T17:18:39.386Z"
                },
                {
                    "id": "38cb237d-324f-4fd1-9271-76faba25ae07",
                    "localImage": null,
                    "cloudImage": "https://res.cloudinary.com/dibg7krep/image/upload/v1748798315/uploads/1748798310611-package-5.jpg.jpg",
                    "publicId": "uploads/1748798310611-package-5.jpg",
                    "TourId": "b8b2b25a-03f1-4f08-8f5b-4e1fd148d29f",
                    "createdAt": "2025-06-01T17:18:39.386Z",
                    "updatedAt": "2025-06-01T17:18:39.386Z"
                }
            ]
        }
    ]
}
  // const { data: tours, isSuccess } = useGetToursQuery();
  // console.log(tours);
  const dispatch = useDispatch();
  dispatch(setTours(toursDummy));
  // useEffect(() => {
  //   if (isSuccess) {
  //     dispatch(setTours(tours));
  //   }
  // }, [tours, dispatch, isSuccess]);
  //   useEffect(() => {
  //     dispatch(setTours(tours));
    
  // }, [tours, dispatch]);
  return (
    <Fragment>
      <HeaderComponent></HeaderComponent>
      <BannerContentComponent></BannerContentComponent>
      <SearchTransportComponent></SearchTransportComponent>
      <PopularPakageComponent></PopularPakageComponent>
      <FavoritPakageComponent></FavoritPakageComponent>
      <AboutUsComponent></AboutUsComponent>
      {/* <FooterContentComponent></FooterContentComponent> */}
    </Fragment>
  );
}

export default HomePage;
