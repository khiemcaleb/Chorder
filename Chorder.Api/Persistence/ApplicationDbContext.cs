using Chorder.Api.Core.Entities;
using Microsoft.EntityFrameworkCore;

namespace Chorder.Api.Persistence
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {

        }

        public DbSet<Song> Songs { get; set; }

    }
}