using System;
using System.Linq;
using Chorder.Api.Core.Entities;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace Chorder.Api.Common.Helpers
{
    public class MappingHelper
    {
        public static JArray ParseLines(string linesJson)
        {
            if (string.IsNullOrEmpty(linesJson))
                return new JArray();
            return JArray.Parse(linesJson);
        }
        public static string StringifyLines(JArray lines)
        {
            if (lines != null)
                return (lines as JArray).ToString(Formatting.None);

            return string.Empty;
        }

        public static string GetFirstPartLyrics(Song song)
        {
            if (song.Parts == null || song.Parts.Count <= 0)
                return string.Empty;

            return song.Parts[0].Lyrics;
        }

        public static (string, bool) DeserializeOrderBy(string orderby)
        {
            var terms = orderby.Split('_');
            if (terms.Length < 2)
                throw new ArgumentException("Orderby input is invalid.");

            return (terms[0], terms[1].ToUpper().Equals("DESC"));
        }
    }
}