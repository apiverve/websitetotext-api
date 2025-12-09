APIVerve.API.WebsitetoText API
============

Website to Text is a simple tool for converting a website to text. It returns the text extracted from the website.

![Build Status](https://img.shields.io/badge/build-passing-green)
![Code Climate](https://img.shields.io/badge/maintainability-B-purple)
![Prod Ready](https://img.shields.io/badge/production-ready-blue)

This is a .NET Wrapper for the [APIVerve.API.WebsitetoText API](https://apiverve.com/marketplace/websitetotext)

---

## Installation

Using the .NET CLI:
```
dotnet add package APIVerve.API.WebsitetoText
```

Using the Package Manager:
```
nuget install APIVerve.API.WebsitetoText
```

Using the Package Manager Console:
```
Install-Package APIVerve.API.WebsitetoText
```

From within Visual Studio:

1. Open the Solution Explorer
2. Right-click on a project within your solution
3. Click on Manage NuGet Packages
4. Click on the Browse tab and search for "APIVerve.API.WebsitetoText"
5. Click on the APIVerve.API.WebsitetoText package, select the appropriate version in the right-tab and click Install

---

## Configuration

Before using the websitetotext API client, you have to setup your account and obtain your API Key.
You can get it by signing up at [https://apiverve.com](https://apiverve.com)

---

## Quick Start

Here's a simple example to get you started quickly:

```csharp
using System;
using APIVerve;

class Program
{
    static async Task Main(string[] args)
    {
        // Initialize the API client
        var apiClient = new WebsitetoTextAPIClient("[YOUR_API_KEY]");

        var queryOptions = new WebsitetoTextQueryOptions {
  url = "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/concepts"
};

        // Make the API call
        try
        {
            var response = await apiClient.ExecuteAsync(queryOptions);

            if (response.Error != null)
            {
                Console.WriteLine($"API Error: {response.Error}");
            }
            else
            {
                Console.WriteLine("Success!");
                // Access response data using the strongly-typed ResponseObj properties
                Console.WriteLine(Newtonsoft.Json.JsonConvert.SerializeObject(response, Newtonsoft.Json.Formatting.Indented));
            }
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Exception: {ex.Message}");
        }
    }
}
```

---

## Usage

The APIVerve.API.WebsitetoText API documentation is found here: [https://docs.apiverve.com/ref/websitetotext](https://docs.apiverve.com/ref/websitetotext).
You can find parameters, example responses, and status codes documented here.

### Setup

###### Authentication
APIVerve.API.WebsitetoText API uses API Key-based authentication. When you create an instance of the API client, you can pass your API Key as a parameter.

```csharp
// Create an instance of the API client
var apiClient = new WebsitetoTextAPIClient("[YOUR_API_KEY]");
```

---

## Usage Examples

### Basic Usage (Async/Await Pattern - Recommended)

The modern async/await pattern provides the best performance and code readability:

```csharp
using System;
using System.Threading.Tasks;
using APIVerve;

public class Example
{
    public static async Task Main(string[] args)
    {
        var apiClient = new WebsitetoTextAPIClient("[YOUR_API_KEY]");

        var queryOptions = new WebsitetoTextQueryOptions {
  url = "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/concepts"
};

        var response = await apiClient.ExecuteAsync(queryOptions);

        if (response.Error != null)
        {
            Console.WriteLine($"Error: {response.Error}");
        }
        else
        {
            Console.WriteLine(Newtonsoft.Json.JsonConvert.SerializeObject(response, Newtonsoft.Json.Formatting.Indented));
        }
    }
}
```

### Synchronous Usage

If you need to use synchronous code, you can use the `Execute` method:

```csharp
using System;
using APIVerve;

public class Example
{
    public static void Main(string[] args)
    {
        var apiClient = new WebsitetoTextAPIClient("[YOUR_API_KEY]");

        var queryOptions = new WebsitetoTextQueryOptions {
  url = "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/concepts"
};

        var response = apiClient.Execute(queryOptions);

        if (response.Error != null)
        {
            Console.WriteLine($"Error: {response.Error}");
        }
        else
        {
            Console.WriteLine(Newtonsoft.Json.JsonConvert.SerializeObject(response, Newtonsoft.Json.Formatting.Indented));
        }
    }
}
```

---

## Error Handling

The API client provides comprehensive error handling. Here are some examples:

### Handling API Errors

```csharp
using System;
using System.Threading.Tasks;
using APIVerve;

public class Example
{
    public static async Task Main(string[] args)
    {
        var apiClient = new WebsitetoTextAPIClient("[YOUR_API_KEY]");

        var queryOptions = new WebsitetoTextQueryOptions {
  url = "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/concepts"
};

        try
        {
            var response = await apiClient.ExecuteAsync(queryOptions);

            // Check for API-level errors
            if (response.Error != null)
            {
                Console.WriteLine($"API Error: {response.Error}");
                Console.WriteLine($"Status: {response.Status}");
                return;
            }

            // Success - use the data
            Console.WriteLine("Request successful!");
            Console.WriteLine(Newtonsoft.Json.JsonConvert.SerializeObject(response, Newtonsoft.Json.Formatting.Indented));
        }
        catch (ArgumentException ex)
        {
            // Invalid API key or parameters
            Console.WriteLine($"Invalid argument: {ex.Message}");
        }
        catch (System.Net.Http.HttpRequestException ex)
        {
            // Network or HTTP errors
            Console.WriteLine($"Network error: {ex.Message}");
        }
        catch (Exception ex)
        {
            // Other errors
            Console.WriteLine($"Unexpected error: {ex.Message}");
        }
    }
}
```

### Comprehensive Error Handling with Retry Logic

```csharp
using System;
using System.Threading.Tasks;
using APIVerve;

public class Example
{
    public static async Task Main(string[] args)
    {
        var apiClient = new WebsitetoTextAPIClient("[YOUR_API_KEY]");

        // Configure retry behavior (max 3 retries)
        apiClient.SetMaxRetries(3);        // Retry up to 3 times (default: 0, max: 3)
        apiClient.SetRetryDelay(2000);     // Wait 2 seconds between retries

        var queryOptions = new WebsitetoTextQueryOptions {
  url = "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/concepts"
};

        try
        {
            var response = await apiClient.ExecuteAsync(queryOptions);

            if (response.Error != null)
            {
                Console.WriteLine($"API Error: {response.Error}");
            }
            else
            {
                Console.WriteLine("Success!");
                Console.WriteLine(Newtonsoft.Json.JsonConvert.SerializeObject(response, Newtonsoft.Json.Formatting.Indented));
            }
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Failed after retries: {ex.Message}");
        }
    }
}
```

---

## Advanced Features

### Custom Headers

Add custom headers to your requests:

```csharp
var apiClient = new WebsitetoTextAPIClient("[YOUR_API_KEY]");

// Add custom headers
apiClient.AddCustomHeader("X-Custom-Header", "custom-value");
apiClient.AddCustomHeader("X-Request-ID", Guid.NewGuid().ToString());

var queryOptions = new WebsitetoTextQueryOptions {
  url = "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/concepts"
};

var response = await apiClient.ExecuteAsync(queryOptions);

// Remove a header
apiClient.RemoveCustomHeader("X-Custom-Header");

// Clear all custom headers
apiClient.ClearCustomHeaders();
```

### Request Logging

Enable logging for debugging:

```csharp
var apiClient = new WebsitetoTextAPIClient("[YOUR_API_KEY]", isDebug: true);

// Or use a custom logger
apiClient.SetLogger(message =>
{
    Console.WriteLine($"[LOG] {DateTime.Now:yyyy-MM-dd HH:mm:ss} - {message}");
});

var queryOptions = new WebsitetoTextQueryOptions {
  url = "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/concepts"
};

var response = await apiClient.ExecuteAsync(queryOptions);
```

### Retry Configuration

Customize retry behavior for failed requests:

```csharp
var apiClient = new WebsitetoTextAPIClient("[YOUR_API_KEY]");

// Set retry options
apiClient.SetMaxRetries(3);           // Retry up to 3 times (default: 0, max: 3)
apiClient.SetRetryDelay(1500);        // Wait 1.5 seconds between retries (default: 1000ms)

var queryOptions = new WebsitetoTextQueryOptions {
  url = "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/concepts"
};

var response = await apiClient.ExecuteAsync(queryOptions);
```

### Dispose Pattern

The API client implements `IDisposable` for proper resource cleanup:

```csharp
using (var apiClient = new WebsitetoTextAPIClient("[YOUR_API_KEY]"))
{
    var queryOptions = new WebsitetoTextQueryOptions {
  url = "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/concepts"
};
    var response = await apiClient.ExecuteAsync(queryOptions);
    Console.WriteLine(Newtonsoft.Json.JsonConvert.SerializeObject(response, Newtonsoft.Json.Formatting.Indented));
}
// HttpClient is automatically disposed here
```

---

## Example Response

```json
{
  "status": "ok",
  "error": null,
  "data": {
    "date": null,
    "description": "Use Amazon EC2 for scalable computing capacity in the AWS Cloud so you can develop and deploy applications without hardware constraints.",
    "title": "What is Amazon EC2?",
    "title_alt": "What is Amazon EC2?",
    "text": "Amazon Elastic Compute Cloud (Amazon EC2) provides on-demand, scalable computing capacity in the Amazon Web \t\tServices (AWS) Cloud. Using Amazon EC2 reduces hardware costs so you can develop and deploy \t\tapplications faster. You can use Amazon EC2 to launch as many or as few virtual servers as you \t\tneed, configure security and networking, and manage storage. You can add capacity (scale up) \t\tto handle compute-heavy tasks, such as monthly or yearly processes, or spikes in website \t\ttraffic. When usage decreases, you can reduce capacity (scale down) again.  An EC2 instance is a virtual server in the AWS Cloud. When you launch an EC2 instance,     \tthe instance type that you specify determines the hardware available to your instance.      \tEach instance type offers a different balance of compute, memory, network, and storage      \tresources. For more information, see the Amazon EC2 Instance Types Guide.  Amazon EC2 provides the following high-level features:  Amazon EC2 supports the processing, storage, and transmission  of credit card data by a merchant or service provider, and has been  validated as being compliant with Payment Card Industry (PCI) Data Security Standard (DSS).  For more information about PCI DSS, including how to request a copy of the AWS PCI Compliance Package,  see PCI DSS Level 1.  You can create and manage your Amazon EC2 instances using the following interfaces:  Amazon EC2 provides the following pricing options:  For a complete list of charges and prices for Amazon EC2 and more information about the purchase \t\t\tmodels, see Amazon EC2 pricing.  To create estimates for your AWS use cases, use the AWS Pricing Calculator.  To estimate the cost of transforming Microsoft  workloads to a modern architecture that uses open source and \t\t\t\tcloud-native services deployed on AWS, use the AWS  Modernization Calculator for Microsoft Workloads.  To see your bill, go to the Billing and Cost Management  Dashboard in the AWS Billing and Cost Management  console. Your bill contains links to usage reports that provide details \t\t\t\tabout your bill. To learn more about AWS account billing, see AWS Billing and Cost Management User  Guide.  If you have questions concerning AWS billing, accounts, and events, contact AWS Support.  To calculate the cost of a sample provisioned \t\t\t\t\tenvironment, see . When calculating the cost of a provisioned \t\t\t\tenvironment, remember to include incidental costs such as snapshot storage for EBS \t\t\t\tvolumes.  You can optimize the cost, security, and performance of your AWS environment \t\t\t\tusing AWS Trusted Advisor.  You can use AWS Cost Explorer to analyze the cost and usage of your EC2 instances. You can view  \t\t\t\tdata up to the last 13 months, and forecast how much you are likely to spend for the next  \t\t\t\t12 months. For more information, see \t\t\t\tAnalyzing your costs and usage with  AWS Cost Explorer in the AWS Cost Management User Guide.",
    "language": "en",
    "publisher": null,
    "url": "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/concepts"
  }
}
```

---

## Customer Support

Need any assistance? [Get in touch with Customer Support](https://apiverve.com/contact).

---

## Updates
Stay up to date by following [@apiverveHQ](https://twitter.com/apiverveHQ) on Twitter.

---

## Legal

All usage of the APIVerve website, API, and services is subject to the [APIVerve Terms of Service](https://apiverve.com/terms) and all legal documents and agreements.

---

## License
Licensed under the The MIT License (MIT)

Copyright (&copy;) 2025 APIVerve, and EvlarSoft LLC

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
