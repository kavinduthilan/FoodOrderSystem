using backend.Data;
using backend.Models;
using backend.Models.Dtos;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace backend.Services
{
    public class FoodService
    {
        public readonly IMongoCollection<Food> _foodCollection;
        public FoodService(IOptions<FoodStore> foodStore)
        {
            var mongoClient = new MongoClient(foodStore.Value.ConnectionString);

            var foodDatabase = mongoClient.GetDatabase(foodStore.Value.DatabaseName);

            _foodCollection = foodDatabase.GetCollection<Food>(foodStore.Value.FoodCollectionName);
        }

        public async Task addFood(Food food)
        {
            await _foodCollection.InsertOneAsync(food);

        }

        public async Task<List<Food>> GetAllFoodsAsync()
        {
            
            return await _foodCollection.Find(food => true).ToListAsync();
        }
    }
}
