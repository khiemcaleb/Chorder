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

        public IEnumerable<Song> Get(int skip, int take, string sort, bool desc)
        {
            var pi = typeof(Song).GetProperty(sort);

            var orderedQuery =
                desc ?
                _dbContext.Songs.OrderByDescending(x => x.Id) :
                _dbContext.Songs.OrderBy(x => x.Id);

            return orderedQuery
                .Skip(skip)
                .Take(take)
                .Include(s => s.Parts)
                .AsNoTracking();
        }

        public void Update(Song song)
        {
            _dbContext.Songs.Update(song);
        }
    }
}