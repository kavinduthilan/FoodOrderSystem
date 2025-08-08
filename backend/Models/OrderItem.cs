public class OrderItem
{
     public Int32 Id { get; set; }
     public Int32 FoodId { get; set; }
     public Double UnitPrice { get; set; }
     public Int32 Quantity { get; set; }
     public Double TotalPrice { get; set; }
     public DateTime CreatedAt { get; set; }
}