export async function GET(request) {
  const rate = parseFloat(process.env.VAT_RATE);
  return Response.json({ rate });
}

export async function POST(request){
  return Response.json({ message: "This is a POST method"})
}

export async function PUT(request){
  return Response.json({ message: "This is a PUT method"})
}