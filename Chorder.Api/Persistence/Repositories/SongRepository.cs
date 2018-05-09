using System.Collections.Generic;
using System.Linq;
using Chorder.Api.Core;
using Chorder.Api.Core.Entities;
using Chorder.Api.Core.Repositories;
using Microsoft.EntityFrameworkCore;

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

        public void Delete(Song song)
        {
            _dbContext.Songs.Remove(song);
        }

        public Song GetById(int id)
        {
            return _dbContext.Songs
                .AsNoTracking()
                .Include(s => s.Parts)
                .SingleOrDefault(s => s.Id == id);
        }

        public IEnumerable<Song> Get(int pageSize = 10, int pageNo = 1)
        {
            return _dbContext.Songs
                .AsNoTracking()
                .Skip(pageSize * (pageNo - 1))
                .Take(pageSize);
        }

        public void Update(Song song)
        {
            _dbContext.Songs.Update(song);
        }
    }
}