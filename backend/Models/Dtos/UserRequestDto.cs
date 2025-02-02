using Org.BouncyCastle.Pqc.Crypto.Bike;
using System.ComponentModel.DataAnnotations;
using System.Runtime.InteropServices;

namespace backend.Models.Dtos
{
    public class userRequestDto
    {
        public string Email { get; set; }

        public string Password { get; set; }


    }
}
