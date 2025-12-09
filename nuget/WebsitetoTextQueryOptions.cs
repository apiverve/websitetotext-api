using System;
using System.Collections.Generic;
using System.Text;
using Newtonsoft.Json;

namespace APIVerve.API.WebsitetoText
{
    /// <summary>
    /// Query options for the Website to Text API
    /// </summary>
    public class WebsitetoTextQueryOptions
    {
        /// <summary>
        /// The URL of the website to convert to text
        /// </summary>
        [JsonProperty("url")]
        public string Url { get; set; }
    }
}
