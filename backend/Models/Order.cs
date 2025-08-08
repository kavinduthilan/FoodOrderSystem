public class Order
{
     public Int32 Id { get; set; }
     public Int32 CustomerId { get; set; }
     public required Double TotalAmount { get; set; }
     public required DateTime OrderAt { get; set; }
}