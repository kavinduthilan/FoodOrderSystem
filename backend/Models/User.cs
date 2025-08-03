using System.ComponentModel.DataAnnotations;


namespace backend.Models
{
    public class User
    {
        public Int32 Id { get; set; }

        [EmailAddress]
        public required String Email { get; set; }

        public required String Password { get; set; }
    }
}
