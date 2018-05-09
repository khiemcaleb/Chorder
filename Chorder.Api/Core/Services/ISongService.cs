using System.Collections.Generic;
using Chorder.Api.Core.Dtos;

namespace Chorder.Api.Core.Services
{
    public interface ISongService
    {
        int CreateSong(SongDto songDto);
        SongDto GetSongById(int id);
        IEnumerable<SongDto> GetSongs();
        bool DeleteSongById(int id);
        bool Update(SongDto dto);
    }
}