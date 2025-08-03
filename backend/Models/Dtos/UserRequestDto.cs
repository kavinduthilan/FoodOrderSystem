

using System.ComponentModel.DataAnnotations;

namespace backend.Models.Dtos
{
    public class UserRequestDto
    {
        [EmailAddress]
        public required string Email { get; set; }

        [Required]
        public string Password { get; set; } = null!;

    }
}
