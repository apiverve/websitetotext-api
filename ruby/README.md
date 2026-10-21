# Website to Text API - Ruby Gem

Website to Text converts any webpage URL into plain text stripped of HTML tags. It returns the extracted body copy, page title, meta description, publication date, and detected language code.

## Installation

Add this line to your application's Gemfile:

```ruby
gem 'apiverve_websitetotext'
```

And then execute:

```bash
$ bundle install
```

Or install it yourself as:

```bash
$ gem install apiverve_websitetotext
```

## Getting Started

Get your API key at [APIVerve](https://apiverve.com)

### Basic Usage

```ruby
require 'apiverve_websitetotext'

# Initialize the client
client = APIVerve::Websitetotext::Client.new(api_key: "YOUR_API_KEY")

# Make a request
response = client.execute({ url: "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/concepts" })

# Print the response
puts response
```


### Error Handling

```ruby
begin
  response = client.execute({ url: "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/concepts" })
  puts response["data"]
rescue APIVerve::Websitetotext::ValidationError => e
  puts "Validation error: #{e.errors.join(', ')}"
rescue APIVerve::Websitetotext::APIError => e
  puts "API error: #{e.message}"
  puts "Status code: #{e.status_code}"
end
```

### Debug Mode

```ruby
# Enable debug logging
client = APIVerve::Websitetotext::Client.new(
  api_key: "YOUR_API_KEY",
  debug: true
)
```

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

## Documentation

For more information, visit the [API Documentation](https://docs.apiverve.com/ref/websitetotext?utm_source=rubygems&utm_medium=referral&utm_content=readme).

## Support

- Website: [https://apiverve.com/marketplace/websitetotext?utm_source=ruby&utm_medium=referral&utm_content=readme](https://apiverve.com/marketplace/websitetotext?utm_source=ruby&utm_medium=referral&utm_content=readme)
- Email: hello@apiverve.com

## License

This gem is available under the [MIT License](LICENSE).
