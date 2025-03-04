using backend.Models;
using backend.Models.Dtos;
using backend.Services;
using Microsoft.AspNetCore.Mvc;
using Amazon.S3;
using Amazon.S3.Util;
using Amazon.S3.Model;
using Microsoft.AspNetCore.Authorization;

namespace backend.Controllers
{

    [Authorize]
    [ApiController]
    [Route("[controller]")]
    public class FoodController : ControllerBase
    {
        private readonly FoodService _foodService;

        private string bucketName = "myawsbucket-kavi98";
        public FoodController(FoodService foodService)
        {
            _foodService = foodService;
        }

        [HttpPost]
        [Consumes("multipart/form-data")]
        public async Task<ActionResult> AddFood([FromForm] FoodRequestDto food)
        {
            // var client = new AmazonS3Client();

            // var bucketExist = await AmazonS3Util.DoesS3BucketExistV2Async(client, bucketName);
            /*
            if (bucketExist)
            {
                Console.WriteLine("Bucket exists");

                // Add file to bucket

                string keyFile = $"{DateTime.Now:yyyymmddhhmmss}-{food.Image.FileName}";

                var putRequest = new PutObjectRequest
                {
                    BucketName = bucketName,
                    Key = keyFile,
                    InputStream = food.Image.OpenReadStream()
                };

                var response = await client.PutObjectAsync(putRequest);

                var objectUrl = "https://myawsbucket-kavi98.s3.ap-south-1.amazonaws.com/${keyFile}";

            */

                // Add food to database
                var foodItem = new Food
                {
                    Name = food.Name,
                    Description = food.Description,
                    Price = food.Price,
                    Category = food.Category
                };


                await _foodService.addFood(foodItem);

                return Ok(foodItem);

            

        }

        [HttpGet]
        public async Task<ActionResult<List<Food>>> GetFoods()
        {
            var foods = await _foodService.GetAllFoodsAsync();

            return Ok(foods);
        }


    }
}
