using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace Chorder.Api.Common.Helpers
{
    public class MappingHelper
    {
        public static JArray ParseLines(string linesJson){
            if (string.IsNullOrEmpty(linesJson))
                return new JArray();
            return JArray.Parse(linesJson);
        }
        public static string StringifyLines(JArray lines)
        {
            if (lines != null)
            {
                return (lines as JArray).ToString(Formatting.None);
            }

            return string.Empty;
        }
    }
}