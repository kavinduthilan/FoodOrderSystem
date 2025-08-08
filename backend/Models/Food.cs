

using System.ComponentModel.DataAnnotations;

namespace backend.Models
{
    public class Food
    {
        public Int32 Id { get; set; }
        public required String Name { get; set; }
        [MaxLength(200)]
        public required String Description { get; set; }
        public required Double Price { get; set; }
        public required String Category { get; set; }
        public String? ImageUrl { get; set; }
    }
}
