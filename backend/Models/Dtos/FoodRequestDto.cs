namespace backend.Models.Dtos
{
    public class FoodRequestDto
    {
        public required String Name { get; set; }

        public required String Description { get; set; }

        public required Double Price { get; set; }

        public required String Category { get; set; }

        public required String ImageUrl { get; set; }

    }
}
