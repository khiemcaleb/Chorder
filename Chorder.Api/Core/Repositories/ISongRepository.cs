using Chorder.Api.Core.Entities;

namespace Chorder.Api.Core.Repositories
{
    public interface ISongRepository
    {
        void Create(Song song);
    }
}