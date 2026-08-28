# `route53HostedZone` Submodule <a name="`route53HostedZone` Submodule" id="@cdktn/provider-awscc.route53HostedZone"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Route53HostedZone <a name="Route53HostedZone" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53_hosted_zone awscc_route53_hosted_zone}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.Initializer"></a>

```java
import io.cdktn.providers.awscc.route53_hosted_zone.Route53HostedZone;

Route53HostedZone.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .hostedZoneConfig(Route53HostedZoneHostedZoneConfig)
//  .hostedZoneFeatures(Route53HostedZoneHostedZoneFeatures)
//  .hostedZoneTags(IResolvable|java.util.List<Route53HostedZoneHostedZoneTags>)
//  .name(java.lang.String)
//  .queryLoggingConfig(Route53HostedZoneQueryLoggingConfig)
//  .vpCs(IResolvable|java.util.List<Route53HostedZoneVpCs>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.Initializer.parameter.hostedZoneConfig">hostedZoneConfig</a></code> | <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfig">Route53HostedZoneHostedZoneConfig</a></code> | A complex type that contains an optional comment. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.Initializer.parameter.hostedZoneFeatures">hostedZoneFeatures</a></code> | <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeatures">Route53HostedZoneHostedZoneFeatures</a></code> | The features configuration for the hosted zone, including accelerated recovery settings and status information. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.Initializer.parameter.hostedZoneTags">hostedZoneTags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTags">Route53HostedZoneHostedZoneTags</a>></code> | Adds, edits, or deletes tags for a health check or a hosted zone. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the domain. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.Initializer.parameter.queryLoggingConfig">queryLoggingConfig</a></code> | <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfig">Route53HostedZoneQueryLoggingConfig</a></code> | Creates a configuration for DNS query logging. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.Initializer.parameter.vpCs">vpCs</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCs">Route53HostedZoneVpCs</a>></code> | *Private hosted zones:* A complex type that contains information about the VPCs that are associated with the specified hosted zone. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `hostedZoneConfig`<sup>Optional</sup> <a name="hostedZoneConfig" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.Initializer.parameter.hostedZoneConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfig">Route53HostedZoneHostedZoneConfig</a>

A complex type that contains an optional comment.

If you don't want to specify a comment, omit the `HostedZoneConfig` and `Comment` elements.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53_hosted_zone#hosted_zone_config Route53HostedZone#hosted_zone_config}

---

##### `hostedZoneFeatures`<sup>Optional</sup> <a name="hostedZoneFeatures" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.Initializer.parameter.hostedZoneFeatures"></a>

- *Type:* <a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeatures">Route53HostedZoneHostedZoneFeatures</a>

The features configuration for the hosted zone, including accelerated recovery settings and status information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53_hosted_zone#hosted_zone_features Route53HostedZone#hosted_zone_features}

---

##### `hostedZoneTags`<sup>Optional</sup> <a name="hostedZoneTags" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.Initializer.parameter.hostedZoneTags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTags">Route53HostedZoneHostedZoneTags</a>>

Adds, edits, or deletes tags for a health check or a hosted zone.

For information about using tags for cost allocation, see [Using Cost Allocation Tags](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html) in the *User Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53_hosted_zone#hosted_zone_tags Route53HostedZone#hosted_zone_tags}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the domain.

Specify a fully qualified domain name, for example, *www.example.com*. The trailing dot is optional; Amazon Route 53 assumes that the domain name is fully qualified. This means that Route 53 treats *www.example.com* (without a trailing dot) and *www.example.com.* (with a trailing dot) as identical.
If you're creating a public hosted zone, this is the name you have registered with your DNS registrar. If your domain name is registered with a registrar other than Route 53, change the name servers for your domain to the set of `NameServers` that are returned by the `Fn::GetAtt` intrinsic function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53_hosted_zone#name Route53HostedZone#name}

---

##### `queryLoggingConfig`<sup>Optional</sup> <a name="queryLoggingConfig" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.Initializer.parameter.queryLoggingConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfig">Route53HostedZoneQueryLoggingConfig</a>

Creates a configuration for DNS query logging.

After you create a query logging configuration, Amazon Route 53 begins to publish log data to an Amazon CloudWatch Logs log group.
DNS query logs contain information about the queries that Route 53 receives for a specified public hosted zone, such as the following:

* Route 53 edge location that responded to the DNS query
* Domain or subdomain that was requested
* DNS record type, such as A or AAAA
* DNS response code, such as `NoError` or `ServFail`
* Log Group and Resource Policy Before you create a query logging configuration, perform the following operations. If you create a query logging configuration using the Route 53 console, Route 53 performs these operations automatically. Create a CloudWatch Logs log group, and make note of the ARN, which you specify when you create a query logging configuration. Note the following: You must create the log group in the us-east-1 region. You must use the same to create the log group and the hosted zone that you want to configure query logging for. When you create log groups for query logging, we recommend that you use a consistent prefix, for example: /aws/route53/hosted zone name In the next step, you'll create a resource policy, which controls access to one or more log groups and the associated resources, such as Route 53 hosted zones. There's a limit on the number of resource policies that you can create, so we recommend that you use a consistent prefix so you can use the same resource policy for all the log groups that you create for query logging. Create a CloudWatch Logs resource policy, and give it the permissions that Route 53 needs to create log streams and to send query logs to log streams. You must create the CloudWatch Logs resource policy in the us-east-1 region. For the value of Resource, specify the ARN for the log group that you created in the previous step. To use the same resource policy for all the CloudWatch Logs log groups that you created for query logging configurations, replace the hosted zone name with *, for example: arn:aws:logs:us-east-1:123412341234:log-group:/aws/route53/* To avoid the confused deputy problem, a security issue where an entity without a permission for an action can coerce a more-privileged entity to perform it, you can optionally limit the permissions that a service has to a resource in a resource-based policy by supplying the following values: For aws:SourceArn, supply the hosted zone ARN used in creating the query logging configuration. For example, aws:SourceArn: arn:aws:route53:::hostedzone/hosted zone ID. For aws:SourceAccount, supply the account ID for the account that creates the query logging configuration. For example, aws:SourceAccount:111111111111. For more information, see The confused deputy problem in the IAM User Guide. You can't use the CloudWatch console to create or edit a resource policy. You must use the CloudWatch API, one of the SDKs, or the . + Log Streams and Edge Locations When Route 53 finishes creating the configuration for DNS query logging, it does the following: Creates a log stream for an edge location the first time that the edge location responds to DNS queries for the specified hosted zone. That log stream is used to log all queries that Route 53 responds to for that edge location. Begins to send query logs to the applicable log stream. The name of each log stream is in the following format: hosted zone ID/edge location code The edge location code is a three-letter code and an arbitrarily assigned number, for example, DFW3. The three-letter code typically corresponds with the International Air Transport Association airport code for an airport near the edge location. (These abbreviations might change in the future.) For a list of edge locations, see "The Route 53 Global Network" on the Route 53 Product Details page. + Queries That Are Logged Query logs contain only the queries that DNS resolvers forward to Route 53. If a DNS resolver has already cached the response to a query (such as the IP address for a load balancer for example.com), the resolver will continue to return the cached response. It doesn't forward another query to Route 53 until the TTL for the corresponding resource record set expires. Depending on how many DNS queries are submitted for a resource record set, and depending on the TTL for that resource record set, query logs might contain information about only one query out of every several thousand queries that are submitted to DNS. For more information about how DNS works, see Routing Internet Traffic to Your Website or Web Application in the Amazon Route 53 Developer Guide. + Log File Format For a list of the values in each query log and the format of each value, see Logging DNS Queries in the Amazon Route 53 Developer Guide. + Pricing For information about charges for query logs, see Amazon CloudWatch Pricing. + How to Stop Logging If you want Route 53 to stop sending query logs to CloudWatch Logs, delete the query logging configuration. For more information, see DeleteQueryLoggingConfig.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53_hosted_zone#query_logging_config Route53HostedZone#query_logging_config}

---

##### `vpCs`<sup>Optional</sup> <a name="vpCs" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.Initializer.parameter.vpCs"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCs">Route53HostedZoneVpCs</a>>

*Private hosted zones:* A complex type that contains information about the VPCs that are associated with the specified hosted zone.

For public hosted zones, omit `VPCs`, `VPCId`, and `VPCRegion`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53_hosted_zone#vp_cs Route53HostedZone#vp_cs}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.putHostedZoneConfig">putHostedZoneConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.putHostedZoneFeatures">putHostedZoneFeatures</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.putHostedZoneTags">putHostedZoneTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.putQueryLoggingConfig">putQueryLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.putVpCs">putVpCs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.resetHostedZoneConfig">resetHostedZoneConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.resetHostedZoneFeatures">resetHostedZoneFeatures</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.resetHostedZoneTags">resetHostedZoneTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.resetQueryLoggingConfig">resetQueryLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.resetVpCs">resetVpCs</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putHostedZoneConfig` <a name="putHostedZoneConfig" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.putHostedZoneConfig"></a>

```java
public void putHostedZoneConfig(Route53HostedZoneHostedZoneConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.putHostedZoneConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfig">Route53HostedZoneHostedZoneConfig</a>

---

##### `putHostedZoneFeatures` <a name="putHostedZoneFeatures" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.putHostedZoneFeatures"></a>

```java
public void putHostedZoneFeatures(Route53HostedZoneHostedZoneFeatures value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.putHostedZoneFeatures.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeatures">Route53HostedZoneHostedZoneFeatures</a>

---

##### `putHostedZoneTags` <a name="putHostedZoneTags" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.putHostedZoneTags"></a>

```java
public void putHostedZoneTags(IResolvable|java.util.List<Route53HostedZoneHostedZoneTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.putHostedZoneTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTags">Route53HostedZoneHostedZoneTags</a>>

---

##### `putQueryLoggingConfig` <a name="putQueryLoggingConfig" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.putQueryLoggingConfig"></a>

```java
public void putQueryLoggingConfig(Route53HostedZoneQueryLoggingConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.putQueryLoggingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfig">Route53HostedZoneQueryLoggingConfig</a>

---

##### `putVpCs` <a name="putVpCs" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.putVpCs"></a>

```java
public void putVpCs(IResolvable|java.util.List<Route53HostedZoneVpCs> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.putVpCs.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCs">Route53HostedZoneVpCs</a>>

---

##### `resetHostedZoneConfig` <a name="resetHostedZoneConfig" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.resetHostedZoneConfig"></a>

```java
public void resetHostedZoneConfig()
```

##### `resetHostedZoneFeatures` <a name="resetHostedZoneFeatures" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.resetHostedZoneFeatures"></a>

```java
public void resetHostedZoneFeatures()
```

##### `resetHostedZoneTags` <a name="resetHostedZoneTags" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.resetHostedZoneTags"></a>

```java
public void resetHostedZoneTags()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.resetName"></a>

```java
public void resetName()
```

##### `resetQueryLoggingConfig` <a name="resetQueryLoggingConfig" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.resetQueryLoggingConfig"></a>

```java
public void resetQueryLoggingConfig()
```

##### `resetVpCs` <a name="resetVpCs" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.resetVpCs"></a>

```java
public void resetVpCs()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Route53HostedZone resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.isConstruct"></a>

```java
import io.cdktn.providers.awscc.route53_hosted_zone.Route53HostedZone;

Route53HostedZone.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.route53_hosted_zone.Route53HostedZone;

Route53HostedZone.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.route53_hosted_zone.Route53HostedZone;

Route53HostedZone.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.route53_hosted_zone.Route53HostedZone;

Route53HostedZone.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),Route53HostedZone.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a Route53HostedZone resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the Route53HostedZone to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing Route53HostedZone that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53_hosted_zone#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the Route53HostedZone to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.hostedZoneConfig">hostedZoneConfig</a></code> | <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference">Route53HostedZoneHostedZoneConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.hostedZoneFeatures">hostedZoneFeatures</a></code> | <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference">Route53HostedZoneHostedZoneFeaturesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.hostedZoneId">hostedZoneId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.hostedZoneTags">hostedZoneTags</a></code> | <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsList">Route53HostedZoneHostedZoneTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.nameServers">nameServers</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.queryLoggingConfig">queryLoggingConfig</a></code> | <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference">Route53HostedZoneQueryLoggingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.vpCs">vpCs</a></code> | <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsList">Route53HostedZoneVpCsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.hostedZoneConfigInput">hostedZoneConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfig">Route53HostedZoneHostedZoneConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.hostedZoneFeaturesInput">hostedZoneFeaturesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeatures">Route53HostedZoneHostedZoneFeatures</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.hostedZoneTagsInput">hostedZoneTagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTags">Route53HostedZoneHostedZoneTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.queryLoggingConfigInput">queryLoggingConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfig">Route53HostedZoneQueryLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.vpCsInput">vpCsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCs">Route53HostedZoneVpCs</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `hostedZoneConfig`<sup>Required</sup> <a name="hostedZoneConfig" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.hostedZoneConfig"></a>

```java
public Route53HostedZoneHostedZoneConfigOutputReference getHostedZoneConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference">Route53HostedZoneHostedZoneConfigOutputReference</a>

---

##### `hostedZoneFeatures`<sup>Required</sup> <a name="hostedZoneFeatures" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.hostedZoneFeatures"></a>

```java
public Route53HostedZoneHostedZoneFeaturesOutputReference getHostedZoneFeatures();
```

- *Type:* <a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference">Route53HostedZoneHostedZoneFeaturesOutputReference</a>

---

##### `hostedZoneId`<sup>Required</sup> <a name="hostedZoneId" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.hostedZoneId"></a>

```java
public java.lang.String getHostedZoneId();
```

- *Type:* java.lang.String

---

##### `hostedZoneTags`<sup>Required</sup> <a name="hostedZoneTags" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.hostedZoneTags"></a>

```java
public Route53HostedZoneHostedZoneTagsList getHostedZoneTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsList">Route53HostedZoneHostedZoneTagsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `nameServers`<sup>Required</sup> <a name="nameServers" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.nameServers"></a>

```java
public java.util.List<java.lang.String> getNameServers();
```

- *Type:* java.util.List<java.lang.String>

---

##### `queryLoggingConfig`<sup>Required</sup> <a name="queryLoggingConfig" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.queryLoggingConfig"></a>

```java
public Route53HostedZoneQueryLoggingConfigOutputReference getQueryLoggingConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference">Route53HostedZoneQueryLoggingConfigOutputReference</a>

---

##### `vpCs`<sup>Required</sup> <a name="vpCs" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.vpCs"></a>

```java
public Route53HostedZoneVpCsList getVpCs();
```

- *Type:* <a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsList">Route53HostedZoneVpCsList</a>

---

##### `hostedZoneConfigInput`<sup>Optional</sup> <a name="hostedZoneConfigInput" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.hostedZoneConfigInput"></a>

```java
public IResolvable|Route53HostedZoneHostedZoneConfig getHostedZoneConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfig">Route53HostedZoneHostedZoneConfig</a>

---

##### `hostedZoneFeaturesInput`<sup>Optional</sup> <a name="hostedZoneFeaturesInput" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.hostedZoneFeaturesInput"></a>

```java
public IResolvable|Route53HostedZoneHostedZoneFeatures getHostedZoneFeaturesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeatures">Route53HostedZoneHostedZoneFeatures</a>

---

##### `hostedZoneTagsInput`<sup>Optional</sup> <a name="hostedZoneTagsInput" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.hostedZoneTagsInput"></a>

```java
public IResolvable|java.util.List<Route53HostedZoneHostedZoneTags> getHostedZoneTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTags">Route53HostedZoneHostedZoneTags</a>>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `queryLoggingConfigInput`<sup>Optional</sup> <a name="queryLoggingConfigInput" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.queryLoggingConfigInput"></a>

```java
public IResolvable|Route53HostedZoneQueryLoggingConfig getQueryLoggingConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfig">Route53HostedZoneQueryLoggingConfig</a>

---

##### `vpCsInput`<sup>Optional</sup> <a name="vpCsInput" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.vpCsInput"></a>

```java
public IResolvable|java.util.List<Route53HostedZoneVpCs> getVpCsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCs">Route53HostedZoneVpCs</a>>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### Route53HostedZoneConfig <a name="Route53HostedZoneConfig" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.route53_hosted_zone.Route53HostedZoneConfig;

Route53HostedZoneConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .hostedZoneConfig(Route53HostedZoneHostedZoneConfig)
//  .hostedZoneFeatures(Route53HostedZoneHostedZoneFeatures)
//  .hostedZoneTags(IResolvable|java.util.List<Route53HostedZoneHostedZoneTags>)
//  .name(java.lang.String)
//  .queryLoggingConfig(Route53HostedZoneQueryLoggingConfig)
//  .vpCs(IResolvable|java.util.List<Route53HostedZoneVpCs>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneConfig.property.hostedZoneConfig">hostedZoneConfig</a></code> | <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfig">Route53HostedZoneHostedZoneConfig</a></code> | A complex type that contains an optional comment. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneConfig.property.hostedZoneFeatures">hostedZoneFeatures</a></code> | <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeatures">Route53HostedZoneHostedZoneFeatures</a></code> | The features configuration for the hosted zone, including accelerated recovery settings and status information. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneConfig.property.hostedZoneTags">hostedZoneTags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTags">Route53HostedZoneHostedZoneTags</a>></code> | Adds, edits, or deletes tags for a health check or a hosted zone. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the domain. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneConfig.property.queryLoggingConfig">queryLoggingConfig</a></code> | <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfig">Route53HostedZoneQueryLoggingConfig</a></code> | Creates a configuration for DNS query logging. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneConfig.property.vpCs">vpCs</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCs">Route53HostedZoneVpCs</a>></code> | *Private hosted zones:* A complex type that contains information about the VPCs that are associated with the specified hosted zone. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `hostedZoneConfig`<sup>Optional</sup> <a name="hostedZoneConfig" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneConfig.property.hostedZoneConfig"></a>

```java
public Route53HostedZoneHostedZoneConfig getHostedZoneConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfig">Route53HostedZoneHostedZoneConfig</a>

A complex type that contains an optional comment.

If you don't want to specify a comment, omit the `HostedZoneConfig` and `Comment` elements.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53_hosted_zone#hosted_zone_config Route53HostedZone#hosted_zone_config}

---

##### `hostedZoneFeatures`<sup>Optional</sup> <a name="hostedZoneFeatures" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneConfig.property.hostedZoneFeatures"></a>

```java
public Route53HostedZoneHostedZoneFeatures getHostedZoneFeatures();
```

- *Type:* <a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeatures">Route53HostedZoneHostedZoneFeatures</a>

The features configuration for the hosted zone, including accelerated recovery settings and status information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53_hosted_zone#hosted_zone_features Route53HostedZone#hosted_zone_features}

---

##### `hostedZoneTags`<sup>Optional</sup> <a name="hostedZoneTags" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneConfig.property.hostedZoneTags"></a>

```java
public IResolvable|java.util.List<Route53HostedZoneHostedZoneTags> getHostedZoneTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTags">Route53HostedZoneHostedZoneTags</a>>

Adds, edits, or deletes tags for a health check or a hosted zone.

For information about using tags for cost allocation, see [Using Cost Allocation Tags](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html) in the *User Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53_hosted_zone#hosted_zone_tags Route53HostedZone#hosted_zone_tags}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the domain.

Specify a fully qualified domain name, for example, *www.example.com*. The trailing dot is optional; Amazon Route 53 assumes that the domain name is fully qualified. This means that Route 53 treats *www.example.com* (without a trailing dot) and *www.example.com.* (with a trailing dot) as identical.
If you're creating a public hosted zone, this is the name you have registered with your DNS registrar. If your domain name is registered with a registrar other than Route 53, change the name servers for your domain to the set of `NameServers` that are returned by the `Fn::GetAtt` intrinsic function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53_hosted_zone#name Route53HostedZone#name}

---

##### `queryLoggingConfig`<sup>Optional</sup> <a name="queryLoggingConfig" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneConfig.property.queryLoggingConfig"></a>

```java
public Route53HostedZoneQueryLoggingConfig getQueryLoggingConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfig">Route53HostedZoneQueryLoggingConfig</a>

Creates a configuration for DNS query logging.

After you create a query logging configuration, Amazon Route 53 begins to publish log data to an Amazon CloudWatch Logs log group.
DNS query logs contain information about the queries that Route 53 receives for a specified public hosted zone, such as the following:

* Route 53 edge location that responded to the DNS query
* Domain or subdomain that was requested
* DNS record type, such as A or AAAA
* DNS response code, such as `NoError` or `ServFail`
* Log Group and Resource Policy Before you create a query logging configuration, perform the following operations. If you create a query logging configuration using the Route 53 console, Route 53 performs these operations automatically. Create a CloudWatch Logs log group, and make note of the ARN, which you specify when you create a query logging configuration. Note the following: You must create the log group in the us-east-1 region. You must use the same to create the log group and the hosted zone that you want to configure query logging for. When you create log groups for query logging, we recommend that you use a consistent prefix, for example: /aws/route53/hosted zone name In the next step, you'll create a resource policy, which controls access to one or more log groups and the associated resources, such as Route 53 hosted zones. There's a limit on the number of resource policies that you can create, so we recommend that you use a consistent prefix so you can use the same resource policy for all the log groups that you create for query logging. Create a CloudWatch Logs resource policy, and give it the permissions that Route 53 needs to create log streams and to send query logs to log streams. You must create the CloudWatch Logs resource policy in the us-east-1 region. For the value of Resource, specify the ARN for the log group that you created in the previous step. To use the same resource policy for all the CloudWatch Logs log groups that you created for query logging configurations, replace the hosted zone name with *, for example: arn:aws:logs:us-east-1:123412341234:log-group:/aws/route53/* To avoid the confused deputy problem, a security issue where an entity without a permission for an action can coerce a more-privileged entity to perform it, you can optionally limit the permissions that a service has to a resource in a resource-based policy by supplying the following values: For aws:SourceArn, supply the hosted zone ARN used in creating the query logging configuration. For example, aws:SourceArn: arn:aws:route53:::hostedzone/hosted zone ID. For aws:SourceAccount, supply the account ID for the account that creates the query logging configuration. For example, aws:SourceAccount:111111111111. For more information, see The confused deputy problem in the IAM User Guide. You can't use the CloudWatch console to create or edit a resource policy. You must use the CloudWatch API, one of the SDKs, or the . + Log Streams and Edge Locations When Route 53 finishes creating the configuration for DNS query logging, it does the following: Creates a log stream for an edge location the first time that the edge location responds to DNS queries for the specified hosted zone. That log stream is used to log all queries that Route 53 responds to for that edge location. Begins to send query logs to the applicable log stream. The name of each log stream is in the following format: hosted zone ID/edge location code The edge location code is a three-letter code and an arbitrarily assigned number, for example, DFW3. The three-letter code typically corresponds with the International Air Transport Association airport code for an airport near the edge location. (These abbreviations might change in the future.) For a list of edge locations, see "The Route 53 Global Network" on the Route 53 Product Details page. + Queries That Are Logged Query logs contain only the queries that DNS resolvers forward to Route 53. If a DNS resolver has already cached the response to a query (such as the IP address for a load balancer for example.com), the resolver will continue to return the cached response. It doesn't forward another query to Route 53 until the TTL for the corresponding resource record set expires. Depending on how many DNS queries are submitted for a resource record set, and depending on the TTL for that resource record set, query logs might contain information about only one query out of every several thousand queries that are submitted to DNS. For more information about how DNS works, see Routing Internet Traffic to Your Website or Web Application in the Amazon Route 53 Developer Guide. + Log File Format For a list of the values in each query log and the format of each value, see Logging DNS Queries in the Amazon Route 53 Developer Guide. + Pricing For information about charges for query logs, see Amazon CloudWatch Pricing. + How to Stop Logging If you want Route 53 to stop sending query logs to CloudWatch Logs, delete the query logging configuration. For more information, see DeleteQueryLoggingConfig.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53_hosted_zone#query_logging_config Route53HostedZone#query_logging_config}

---

##### `vpCs`<sup>Optional</sup> <a name="vpCs" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneConfig.property.vpCs"></a>

```java
public IResolvable|java.util.List<Route53HostedZoneVpCs> getVpCs();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCs">Route53HostedZoneVpCs</a>>

*Private hosted zones:* A complex type that contains information about the VPCs that are associated with the specified hosted zone.

For public hosted zones, omit `VPCs`, `VPCId`, and `VPCRegion`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53_hosted_zone#vp_cs Route53HostedZone#vp_cs}

---

### Route53HostedZoneHostedZoneConfig <a name="Route53HostedZoneHostedZoneConfig" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.route53_hosted_zone.Route53HostedZoneHostedZoneConfig;

Route53HostedZoneHostedZoneConfig.builder()
//  .comment(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfig.property.comment">comment</a></code> | <code>java.lang.String</code> | Any comments that you want to include about the hosted zone. |

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfig.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

Any comments that you want to include about the hosted zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53_hosted_zone#comment Route53HostedZone#comment}

---

### Route53HostedZoneHostedZoneFeatures <a name="Route53HostedZoneHostedZoneFeatures" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeatures"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeatures.Initializer"></a>

```java
import io.cdktn.providers.awscc.route53_hosted_zone.Route53HostedZoneHostedZoneFeatures;

Route53HostedZoneHostedZoneFeatures.builder()
//  .enableAcceleratedRecovery(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeatures.property.enableAcceleratedRecovery">enableAcceleratedRecovery</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53_hosted_zone#enable_accelerated_recovery Route53HostedZone#enable_accelerated_recovery}. |

---

##### `enableAcceleratedRecovery`<sup>Optional</sup> <a name="enableAcceleratedRecovery" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeatures.property.enableAcceleratedRecovery"></a>

```java
public java.lang.Boolean|IResolvable getEnableAcceleratedRecovery();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53_hosted_zone#enable_accelerated_recovery Route53HostedZone#enable_accelerated_recovery}.

---

### Route53HostedZoneHostedZoneTags <a name="Route53HostedZoneHostedZoneTags" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.route53_hosted_zone.Route53HostedZoneHostedZoneTags;

Route53HostedZoneHostedZoneTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTags.property.key">key</a></code> | <code>java.lang.String</code> | The value of ``Key`` depends on the operation that you want to perform:   +  *Add a tag to a health check or hosted zone*: ``Key`` is the name that you want to give the new tag. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTags.property.value">value</a></code> | <code>java.lang.String</code> | The value of ``Value`` depends on the operation that you want to perform:   +  *Add a tag to a health check or hosted zone*: ``Value`` is the value that you want to give the new tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The value of ``Key`` depends on the operation that you want to perform:   +  *Add a tag to a health check or hosted zone*: ``Key`` is the name that you want to give the new tag.

* *Edit a tag*: `Key` is the name of the tag that you want to change the `Value` for.
* *Delete a key*: `Key` is the name of the tag you want to remove.
* *Give a name to a health check*: Edit the default `Name` tag. In the Amazon Route 53 console, the list of your health checks includes a *Name* column that lets you see the name that you've given to each health check.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53_hosted_zone#key Route53HostedZone#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value of ``Value`` depends on the operation that you want to perform:   +  *Add a tag to a health check or hosted zone*: ``Value`` is the value that you want to give the new tag.

* *Edit a tag*: `Value` is the new value that you want to assign the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53_hosted_zone#value Route53HostedZone#value}

---

### Route53HostedZoneQueryLoggingConfig <a name="Route53HostedZoneQueryLoggingConfig" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.route53_hosted_zone.Route53HostedZoneQueryLoggingConfig;

Route53HostedZoneQueryLoggingConfig.builder()
//  .cloudwatchLogsLogGroupArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfig.property.cloudwatchLogsLogGroupArn">cloudwatchLogsLogGroupArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the CloudWatch Logs log group that Amazon Route 53 is publishing logs to. |

---

##### `cloudwatchLogsLogGroupArn`<sup>Optional</sup> <a name="cloudwatchLogsLogGroupArn" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfig.property.cloudwatchLogsLogGroupArn"></a>

```java
public java.lang.String getCloudwatchLogsLogGroupArn();
```

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the CloudWatch Logs log group that Amazon Route 53 is publishing logs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53_hosted_zone#cloudwatch_logs_log_group_arn Route53HostedZone#cloudwatch_logs_log_group_arn}

---

### Route53HostedZoneVpCs <a name="Route53HostedZoneVpCs" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCs.Initializer"></a>

```java
import io.cdktn.providers.awscc.route53_hosted_zone.Route53HostedZoneVpCs;

Route53HostedZoneVpCs.builder()
//  .vpcId(java.lang.String)
//  .vpcRegion(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCs.property.vpcId">vpcId</a></code> | <code>java.lang.String</code> | *Private hosted zones only:* The ID of an Amazon VPC. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCs.property.vpcRegion">vpcRegion</a></code> | <code>java.lang.String</code> | *Private hosted zones only:* The region that an Amazon VPC was created in. |

---

##### `vpcId`<sup>Optional</sup> <a name="vpcId" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCs.property.vpcId"></a>

```java
public java.lang.String getVpcId();
```

- *Type:* java.lang.String

*Private hosted zones only:* The ID of an Amazon VPC.

For public hosted zones, omit `VPCs`, `VPCId`, and `VPCRegion`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53_hosted_zone#vpc_id Route53HostedZone#vpc_id}

---

##### `vpcRegion`<sup>Optional</sup> <a name="vpcRegion" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCs.property.vpcRegion"></a>

```java
public java.lang.String getVpcRegion();
```

- *Type:* java.lang.String

*Private hosted zones only:* The region that an Amazon VPC was created in.

For public hosted zones, omit `VPCs`, `VPCId`, and `VPCRegion`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53_hosted_zone#vpc_region Route53HostedZone#vpc_region}

---

## Classes <a name="Classes" id="Classes"></a>

### Route53HostedZoneHostedZoneConfigOutputReference <a name="Route53HostedZoneHostedZoneConfigOutputReference" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.route53_hosted_zone.Route53HostedZoneHostedZoneConfigOutputReference;

new Route53HostedZoneHostedZoneConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.resetComment">resetComment</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetComment` <a name="resetComment" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.resetComment"></a>

```java
public void resetComment()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.property.commentInput">commentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.property.comment">comment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfig">Route53HostedZoneHostedZoneConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.property.commentInput"></a>

```java
public java.lang.String getCommentInput();
```

- *Type:* java.lang.String

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|Route53HostedZoneHostedZoneConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfig">Route53HostedZoneHostedZoneConfig</a>

---


### Route53HostedZoneHostedZoneFeaturesOutputReference <a name="Route53HostedZoneHostedZoneFeaturesOutputReference" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.route53_hosted_zone.Route53HostedZoneHostedZoneFeaturesOutputReference;

new Route53HostedZoneHostedZoneFeaturesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.resetEnableAcceleratedRecovery">resetEnableAcceleratedRecovery</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnableAcceleratedRecovery` <a name="resetEnableAcceleratedRecovery" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.resetEnableAcceleratedRecovery"></a>

```java
public void resetEnableAcceleratedRecovery()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.property.enableAcceleratedRecoveryInput">enableAcceleratedRecoveryInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.property.enableAcceleratedRecovery">enableAcceleratedRecovery</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeatures">Route53HostedZoneHostedZoneFeatures</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enableAcceleratedRecoveryInput`<sup>Optional</sup> <a name="enableAcceleratedRecoveryInput" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.property.enableAcceleratedRecoveryInput"></a>

```java
public java.lang.Boolean|IResolvable getEnableAcceleratedRecoveryInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `enableAcceleratedRecovery`<sup>Required</sup> <a name="enableAcceleratedRecovery" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.property.enableAcceleratedRecovery"></a>

```java
public java.lang.Boolean|IResolvable getEnableAcceleratedRecovery();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.property.internalValue"></a>

```java
public IResolvable|Route53HostedZoneHostedZoneFeatures getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeatures">Route53HostedZoneHostedZoneFeatures</a>

---


### Route53HostedZoneHostedZoneTagsList <a name="Route53HostedZoneHostedZoneTagsList" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.route53_hosted_zone.Route53HostedZoneHostedZoneTagsList;

new Route53HostedZoneHostedZoneTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsList.get"></a>

```java
public Route53HostedZoneHostedZoneTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTags">Route53HostedZoneHostedZoneTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<Route53HostedZoneHostedZoneTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTags">Route53HostedZoneHostedZoneTags</a>>

---


### Route53HostedZoneHostedZoneTagsOutputReference <a name="Route53HostedZoneHostedZoneTagsOutputReference" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.route53_hosted_zone.Route53HostedZoneHostedZoneTagsOutputReference;

new Route53HostedZoneHostedZoneTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTags">Route53HostedZoneHostedZoneTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|Route53HostedZoneHostedZoneTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTags">Route53HostedZoneHostedZoneTags</a>

---


### Route53HostedZoneQueryLoggingConfigOutputReference <a name="Route53HostedZoneQueryLoggingConfigOutputReference" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.route53_hosted_zone.Route53HostedZoneQueryLoggingConfigOutputReference;

new Route53HostedZoneQueryLoggingConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.resetCloudwatchLogsLogGroupArn">resetCloudwatchLogsLogGroupArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCloudwatchLogsLogGroupArn` <a name="resetCloudwatchLogsLogGroupArn" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.resetCloudwatchLogsLogGroupArn"></a>

```java
public void resetCloudwatchLogsLogGroupArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.property.cloudwatchLogsLogGroupArnInput">cloudwatchLogsLogGroupArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.property.cloudwatchLogsLogGroupArn">cloudwatchLogsLogGroupArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfig">Route53HostedZoneQueryLoggingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cloudwatchLogsLogGroupArnInput`<sup>Optional</sup> <a name="cloudwatchLogsLogGroupArnInput" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.property.cloudwatchLogsLogGroupArnInput"></a>

```java
public java.lang.String getCloudwatchLogsLogGroupArnInput();
```

- *Type:* java.lang.String

---

##### `cloudwatchLogsLogGroupArn`<sup>Required</sup> <a name="cloudwatchLogsLogGroupArn" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.property.cloudwatchLogsLogGroupArn"></a>

```java
public java.lang.String getCloudwatchLogsLogGroupArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|Route53HostedZoneQueryLoggingConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfig">Route53HostedZoneQueryLoggingConfig</a>

---


### Route53HostedZoneVpCsList <a name="Route53HostedZoneVpCsList" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.route53_hosted_zone.Route53HostedZoneVpCsList;

new Route53HostedZoneVpCsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsList.get"></a>

```java
public Route53HostedZoneVpCsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCs">Route53HostedZoneVpCs</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<Route53HostedZoneVpCs> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCs">Route53HostedZoneVpCs</a>>

---


### Route53HostedZoneVpCsOutputReference <a name="Route53HostedZoneVpCsOutputReference" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.route53_hosted_zone.Route53HostedZoneVpCsOutputReference;

new Route53HostedZoneVpCsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.resetVpcId">resetVpcId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.resetVpcRegion">resetVpcRegion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetVpcId` <a name="resetVpcId" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.resetVpcId"></a>

```java
public void resetVpcId()
```

##### `resetVpcRegion` <a name="resetVpcRegion" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.resetVpcRegion"></a>

```java
public void resetVpcRegion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.property.vpcIdInput">vpcIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.property.vpcRegionInput">vpcRegionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.property.vpcId">vpcId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.property.vpcRegion">vpcRegion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCs">Route53HostedZoneVpCs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `vpcIdInput`<sup>Optional</sup> <a name="vpcIdInput" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.property.vpcIdInput"></a>

```java
public java.lang.String getVpcIdInput();
```

- *Type:* java.lang.String

---

##### `vpcRegionInput`<sup>Optional</sup> <a name="vpcRegionInput" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.property.vpcRegionInput"></a>

```java
public java.lang.String getVpcRegionInput();
```

- *Type:* java.lang.String

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.property.vpcId"></a>

```java
public java.lang.String getVpcId();
```

- *Type:* java.lang.String

---

##### `vpcRegion`<sup>Required</sup> <a name="vpcRegion" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.property.vpcRegion"></a>

```java
public java.lang.String getVpcRegion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.property.internalValue"></a>

```java
public IResolvable|Route53HostedZoneVpCs getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCs">Route53HostedZoneVpCs</a>

---



