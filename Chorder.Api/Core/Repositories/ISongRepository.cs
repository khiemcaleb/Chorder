using System.Collections.Generic;
using Chorder.Api.Core.Entities;

namespace Chorder.Api.Core.Repositories
{
    public interface ISongRepository
    {
        void Create(Song song);
        Song GetById(int id);
        IEnumerable<Song> Get(int skip, int take, string sort, bool desc);
        void Delete(Song song);
        void Update(Song song);
    }
}