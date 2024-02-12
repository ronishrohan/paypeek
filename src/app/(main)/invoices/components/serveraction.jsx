export async function getData(){
    await connectDatabase();
    const data = await req.json();
    const user = await User.findOne(data)
    const invoices= user.invoices;
}