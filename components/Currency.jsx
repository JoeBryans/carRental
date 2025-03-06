const Currency = ({ price }) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "NGN",
  });
  price = formatter.format(price);
  return (
    <div className="flex items-center gap-2 text-muted-foreground">
      <span>{price}</span>
    </div>
  );
};
export default Currency;
