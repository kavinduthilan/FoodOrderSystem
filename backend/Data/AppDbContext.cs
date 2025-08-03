

using backend.Models;
using Microsoft.EntityFrameworkCore;

namespace backend.Data
{
     public class AppDbContext : DbContext
     {
          public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
          {

          }

          public DbSet<User> User { get; set; }
          public DbSet<Food> Food { get; set; }
     }
}