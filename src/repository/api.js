import { db } from '../firebase';
import { collection, getDocs, query, where } from "firebase/firestore";
import { updateLocalStorage } from '../repository/localStorageUtils';

// Function to fetch brands and their associated item counts from Firestore
export const getBrandsAndCategories = async () => {
    try {
        // Fetch categories first
        const categoriesCollection = collection(db, "categories");
        const categoriesQuerySnapshot = await getDocs(categoriesCollection);

        // Initialize categories map with counts
        const categoriesMap = new Map();
        categoriesQuerySnapshot.forEach((categoryDoc) => {
            const categoryName = categoryDoc.data().name;
            categoriesMap.set(categoryName, 0);
        });

        // Fetch brands and calculate counts
        const brandsCollection = collection(db, "brands");
        const brandsQuerySnapshot = await getDocs(brandsCollection);

        const brands = [];
        brandsQuerySnapshot.forEach((brandDoc) => {
            const brandData = brandDoc.data();
            const brandName = brandData.name;
            const brand = { ...brandData, count: 0 };

            // Query products associated with this brand
            const productsCollection = collection(db, "products");
            const productsQuery = query(productsCollection, where("brand", "==", brandName));
            getDocs(productsQuery)
                .then((productsSnapshot) => {
                    brand.count = productsSnapshot.size;

                    // Increment category counts based on products of this brand
                    productsSnapshot.forEach((productDoc) => {
                        const productCategories = productDoc.data().categories || [];
                        productCategories.forEach((category) => {
                            if (categoriesMap.has(category)) {
                                categoriesMap.set(category, categoriesMap.get(category) + 1);
                            }
                        });
                    });
                })
                .catch((error) => {
                    console.error(`Error fetching products for brand ${brandName}:`, error);
                });

            brands.push(brand);
        });

        // Convert categories Map to an array of objects
        const categories = Array.from(categoriesMap.entries()).map(([name, count]) => ({ name, count }));

        // Update local storage with brands and categories
        updateLocalStorage('brands', brands);
        updateLocalStorage('categories', categories);

        return { brands, categories };
    } catch (error) {
        console.error("Error fetching brands and categories:", error);
        throw error;
    }
};
