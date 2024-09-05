export async function GET(request, { params }) {
  const dataUrl = "https://raw.githubusercontent.com/mchayapol/mchayapol.github.io/main/data/drive-com-au-cars.1.json";
  const res = await fetch(dataUrl, {
    next: { revalidate: 60 }, // Revalidate every 60 seconds
  });
  const data = await res.json();
  const car = data.data.marketplaceListings.results.find((car) => car.id == params.id);
  return Response.json(car);
}
