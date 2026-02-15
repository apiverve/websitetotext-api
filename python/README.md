Website to Text API
============

Website to Text is a simple tool for converting a website to text. It returns the text extracted from the website.

![Build Status](https://img.shields.io/badge/build-passing-green)
![Code Climate](https://img.shields.io/badge/maintainability-B-purple)
![Prod Ready](https://img.shields.io/badge/production-ready-blue)

This is a Python API Wrapper for the [Website to Text API](https://apiverve.com/marketplace/websitetotext?utm_source=pypi&utm_medium=readme)

---

## Installation

Using `pip`:

```bash
pip install apiverve-websitetotext
```

Using `pip3`:

```bash
pip3 install apiverve-websitetotext
```

---

## Configuration

Before using the websitetotext API client, you have to setup your account and obtain your API Key.
You can get it by signing up at [https://apiverve.com](https://apiverve.com?utm_source=pypi&utm_medium=readme)

---

## Quick Start

Here's a simple example to get you started quickly:

```python
from apiverve_websitetotext.apiClient import WebsitetotextAPIClient

# Initialize the client with your APIVerve API key
api = WebsitetotextAPIClient("[YOUR_API_KEY]")

query = { "url": "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/concepts" }

try:
    # Make the API call
    result = api.execute(query)

    # Print the result
    print(result)
except Exception as e:
    print(f"Error: {e}")
```

---

## Usage

The Website to Text API documentation is found here: [https://docs.apiverve.com/ref/websitetotext](https://docs.apiverve.com/ref/websitetotext?utm_source=pypi&utm_medium=readme).
You can find parameters, example responses, and status codes documented here.

### Setup

```python
# Import the client module
from apiverve_websitetotext.apiClient import WebsitetotextAPIClient

# Initialize the client with your APIVerve API key
api = WebsitetotextAPIClient("[YOUR_API_KEY]")
```

---

## Perform Request

Using the API client, you can perform requests to the API.

###### Define Query

```python
query = { "url": "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/concepts" }
```

###### Simple Request

```python
# Make a request to the API
result = api.execute(query)

# Print the result
print(result)
```

###### Example Response

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

## Error Handling

The API client provides comprehensive error handling through the `WebsitetotextAPIClientError` exception. Here are some examples:

### Basic Error Handling

```python
from apiverve_websitetotext.apiClient import WebsitetotextAPIClient, WebsitetotextAPIClientError

api = WebsitetotextAPIClient("[YOUR_API_KEY]")

query = { "url": "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/concepts" }

try:
    result = api.execute(query)
    print("Success!")
    print(result)
except WebsitetotextAPIClientError as e:
    print(f"API Error: {e.message}")
    if e.status_code:
        print(f"Status Code: {e.status_code}")
    if e.response:
        print(f"Response: {e.response}")
```

### Handling Specific Error Types

```python
from apiverve_websitetotext.apiClient import WebsitetotextAPIClient, WebsitetotextAPIClientError

api = WebsitetotextAPIClient("[YOUR_API_KEY]")

query = { "url": "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/concepts" }

try:
    result = api.execute(query)

    # Check for successful response
    if result.get('status') == 'success':
        print("Request successful!")
        print(result.get('data'))
    else:
        print(f"API returned an error: {result.get('error')}")

except WebsitetotextAPIClientError as e:
    # Handle API client errors
    if e.status_code == 401:
        print("Unauthorized: Invalid API key")
    elif e.status_code == 429:
        print("Rate limit exceeded")
    elif e.status_code >= 500:
        print("Server error - please try again later")
    else:
        print(f"API error: {e.message}")
except Exception as e:
    # Handle unexpected errors
    print(f"Unexpected error: {str(e)}")
```

### Using Context Manager (Recommended)

The client supports the context manager protocol for automatic resource cleanup:

```python
from apiverve_websitetotext.apiClient import WebsitetotextAPIClient, WebsitetotextAPIClientError

query = { "url": "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/concepts" }

# Using context manager ensures proper cleanup
with WebsitetotextAPIClient("[YOUR_API_KEY]") as api:
    try:
        result = api.execute(query)
        print(result)
    except WebsitetotextAPIClientError as e:
        print(f"Error: {e.message}")
# Session is automatically closed here
```

---

## Advanced Features

### Debug Mode

Enable debug logging to see detailed request and response information:

```python
from apiverve_websitetotext.apiClient import WebsitetotextAPIClient

# Enable debug mode
api = WebsitetotextAPIClient("[YOUR_API_KEY]", debug=True)

query = { "url": "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/concepts" }

# Debug information will be printed to console
result = api.execute(query)
```

### Manual Session Management

If you need to manually manage the session lifecycle:

```python
from apiverve_websitetotext.apiClient import WebsitetotextAPIClient

api = WebsitetotextAPIClient("[YOUR_API_KEY]")

try:
    query = { "url": "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/concepts" }
    result = api.execute(query)
    print(result)
finally:
    # Manually close the session when done
    api.close()
```

---

## Customer Support

Need any assistance? [Get in touch with Customer Support](https://apiverve.com/contact?utm_source=pypi&utm_medium=readme).

---

## Updates
Stay up to date by following [@apiverveHQ](https://twitter.com/apiverveHQ) on Twitter.

---

## Legal

All usage of the APIVerve website, API, and services is subject to the [APIVerve Terms of Service](https://apiverve.com/terms?utm_source=pypi&utm_medium=readme) and all legal documents and agreements.

---

## License
Licensed under the The MIT License (MIT)

Copyright (&copy;) 2026 APIVerve, and EvlarSoft LLC

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
