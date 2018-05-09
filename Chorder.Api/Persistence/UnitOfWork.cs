using Chorder.Api.Core;
using Chorder.Api.Core.Repositories;
using Chorder.Api.Persistence.Repositories;

namespace Chorder.Api.Persistence
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly ApplicationDbContext _dbContext;

        public ISongRepository Songs { get; }

        public UnitOfWork(ApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
            Songs = new SongRepository(dbContext);
        }

        public void Complete()
        {
            _dbContext.SaveChanges();
        }

        public void Dispose()
        {
            _dbContext.Dispose();
        }
    }
}