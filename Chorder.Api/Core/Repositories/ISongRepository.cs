using System.Collections.Generic;
using Chorder.Api.Core.Entities;

namespace Chorder.Api.Core.Repositories
{
    public interface ISongRepository
    {
        void Create(Song song);
        Song GetById(int id);
        IEnumerable<Song> Get(int pageSize = 10, int pageNo  = 1);
        void Delete(Song song);
    }
}