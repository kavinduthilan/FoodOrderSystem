using backend.Data;
using backend.Models;
using backend.Models.Dtos;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace backend.Services
{
    public class UserService
    {
        private readonly IMongoCollection<User> _userCollection;

        public UserService(IOptions<FoodStore> foodStore)
        {
            var mongoClient = new MongoClient(
            foodStore.Value.ConnectionString);

            var mongoDatabase = mongoClient.GetDatabase(
                foodStore.Value.DatabaseName);

            _userCollection = mongoDatabase.GetCollection<User>(
                foodStore.Value.UserCollectionName);
        }

        
        public async Task<User> GetAsync(string email, string password)
        {
            return await _userCollection.Find(u => u.Email == email && u.Password == password).FirstOrDefaultAsync();
        }

        public async Task createUser(User user)
        {
            await _userCollection.InsertOneAsync(user);
        }
    }
}
 