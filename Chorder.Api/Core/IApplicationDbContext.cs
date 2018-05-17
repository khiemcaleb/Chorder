using Chorder.Api.Core.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking;

namespace Chorder.Api.Core
{
    public interface IApplicationDbContext
    {
        DbSet<Song> Songs { get; set; }
        DbSet<Part> Parts { get; set; }

        EntityEntry<TEntity> Entry<TEntity>(TEntity entity) where TEntity : class;
    }
}