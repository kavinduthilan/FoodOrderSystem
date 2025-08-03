using backend.Data;
using backend.Models.Dtos;
using backend.Models;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace backend.Services
{
    public class UserService
    {
        private readonly AppDbContext _context;
        private readonly GenerateToken _generateToken;
        public UserService(AppDbContext context, GenerateToken generateToken)
        {
            _context = context;
            _generateToken = generateToken;
        }

        public async Task<User> CreateUser([FromBody] UserRequestDto user)
        {
            if (await _context.User.AnyAsync(u => u.Email == user.Email))
                throw new Exception("User with this email already exists.");


            var newUser = new User
            {
                Email = user.Email,
                Password = user.Password
            };

            await _context.User.AddAsync(newUser);
            await _context.SaveChangesAsync();

            return newUser;
        }

        public async Task<string> Login(UserRequestDto user)
        {
            var existingUser = await _context.User.FirstOrDefaultAsync(u => u.Email == user.Email && u.Password == user.Password);
            if (existingUser == null)
                throw new Exception("Invalid email or password.");

            return _generateToken.createToken(existingUser);

        }


    }
}
