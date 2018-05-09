using Chorder.Api.Core.Entities;
using Microsoft.EntityFrameworkCore;

namespace Chorder.Api.Core
{
    public interface IApplicationDbContext
    {
        DbSet<Song> Songs { get; set; }
        DbSet<Part> Parts { get; set; }
    }
}