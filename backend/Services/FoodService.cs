using backend.Data;
using backend.Models;
using backend.Models.Dtos;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace backend.Services
{
    public class FoodService
    {
        private readonly AppDbContext _context;

        public FoodService(AppDbContext context)
        {
            _context = context;
        }

        public async Task<ActionResult<Food>> createFood(FoodRequestDto food)
        {
            if (await _context.Food.AnyAsync(u => u.Name == food.Name))
                throw new Exception("Food Already exists");

            var newFood = new Food
            {
                Name = food.Name,
                Description = food.Description,
                Category = food.Category,
                Price = food.Price,
                ImageUrl = food.ImageUrl
            };

            await _context.AddAsync(newFood);
            await _context.SaveChangesAsync();

            return newFood;
        }

    }
}
