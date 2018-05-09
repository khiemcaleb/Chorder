using Chorder.Api.Core.Dtos;

namespace Chorder.Api.Core.Services
{
    public interface ISongService
    {
        int CreateSong(SongDto songDto);
    }
}