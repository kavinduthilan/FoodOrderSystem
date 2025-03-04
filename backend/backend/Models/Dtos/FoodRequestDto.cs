namespace backend.Models.Dtos
{
    public class FoodRequestDto
    {
        public string Name { get; set; }

        public string Description { get; set; }

        public string Price { get; set; }

        //public IFormFile Image { get; set; }

        public string Category { get; set; }

    }
}
