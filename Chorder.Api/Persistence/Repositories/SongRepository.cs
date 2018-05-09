using Chorder.Api.Core;
using Chorder.Api.Core.Entities;
using Chorder.Api.Core.Repositories;

namespace Chorder.Api.Persistence.Repositories
{
    public class SongRepository : ISongRepository
    {
        private readonly IApplicationDbContext _dbContext;

        public SongRepository(IApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
        }
        public void Create(Song song)
        {
            _dbContext.Songs.Add(song);
        }
    }
}