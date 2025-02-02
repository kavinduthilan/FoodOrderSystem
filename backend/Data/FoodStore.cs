namespace backend.Data
{
    public class FoodStore
    {
        public string ConnectionString { get; set; } = null!;
        public string DatabaseName { get; set; } = null!;
        public string UserCollectionName {  get; set; } = null!;
        public string FoodCollectionName {  get; set; } = null!;
    }
}
