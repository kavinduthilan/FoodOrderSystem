using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using backend.Models;
using Microsoft.IdentityModel.Tokens;

public class GenerateToken
{
     private readonly IConfiguration _configuration;

     public GenerateToken(IConfiguration configuration)
     {
          _configuration = configuration;
     }

     public string createToken(User user)
     {
          // add claims
          var claims = new[]
          {
               new Claim(JwtRegisteredClaimNames.Email, user.Email),
               new Claim(JwtRegisteredClaimNames.Sub, user.Id.ToString())
          };


          // create key
          var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["Jwt:Key"]));
          var cred = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);



          // build token

          var notBefore = DateTime.UtcNow;
          var expire = notBefore.AddMinutes(double.Parse(_configuration["Jwt:ExpirationMinutes"]));

          var token = new JwtSecurityToken(
               issuer: _configuration["Jwt:Issuer"],
               audience: _configuration["Jwt:Audience"],
               claims: claims,
               notBefore: notBefore,
               expires: expire,
               signingCredentials: cred
          );



          // return token

          return new JwtSecurityTokenHandler().WriteToken(token);
     }



}