import books from "../db";

export async function GET(){ //api endpoints
    return Response.json(books); // basix return response of sample database
}

export async function POST(request: Request){
    const book = await request.json();
    books.push(book);

    return Response.json(books)
}