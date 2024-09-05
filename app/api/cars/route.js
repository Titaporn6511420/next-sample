export async function GET(request) {
  const searchParams = request.nextUrl.searchParams;
  const pageNo = parseInt(searchParams.get('p')) || 1;
  const dataUrl = "https://raw.githubusercontent.com/mchayapol/mchayapol.github.io/main/data/drive-com-au-cars.1.json";
  const res = await fetch(dataUrl, {
    next: { revalidate: 60 }, // Revalidate every 60 seconds
  });
  const data = await res.json();
  
  // Assume 10 items per page
  const startIndex = (pageNo - 1) * 10;
  const endIndex = pageNo * 10;
  console.log({pageNo, startIndex, endIndex});
  const cars = data.data.marketplaceListings.results.slice(startIndex, endIndex).map((car) => {
    return {
      id: car.id,
      makeName: car.makeName,
      modelName: car.modelName,
      image: car.featuredImage.srcUrl,
    };
  });
  return Response.json(cars);
}
