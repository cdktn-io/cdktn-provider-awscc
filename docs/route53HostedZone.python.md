# `route53HostedZone` Submodule <a name="`route53HostedZone` Submodule" id="@cdktn/provider-awscc.route53HostedZone"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Route53HostedZone <a name="Route53HostedZone" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_hosted_zone awscc_route53_hosted_zone}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.Initializer"></a>

```python
from cdktn_provider_awscc import route53_hosted_zone

route53HostedZone.Route53HostedZone(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  hosted_zone_config: Route53HostedZoneHostedZoneConfig = None,
  hosted_zone_features: Route53HostedZoneHostedZoneFeatures = None,
  hosted_zone_tags: IResolvable | typing.List[Route53HostedZoneHostedZoneTags] = None,
  name: str = None,
  query_logging_config: Route53HostedZoneQueryLoggingConfig = None,
  vp_cs: IResolvable | typing.List[Route53HostedZoneVpCs] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.Initializer.parameter.hostedZoneConfig">hosted_zone_config</a></code> | <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfig">Route53HostedZoneHostedZoneConfig</a></code> | A complex type that contains an optional comment. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.Initializer.parameter.hostedZoneFeatures">hosted_zone_features</a></code> | <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeatures">Route53HostedZoneHostedZoneFeatures</a></code> | The features configuration for the hosted zone, including accelerated recovery settings and status information. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.Initializer.parameter.hostedZoneTags">hosted_zone_tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTags">Route53HostedZoneHostedZoneTags</a>]</code> | Adds, edits, or deletes tags for a health check or a hosted zone. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the domain. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.Initializer.parameter.queryLoggingConfig">query_logging_config</a></code> | <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfig">Route53HostedZoneQueryLoggingConfig</a></code> | Creates a configuration for DNS query logging. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.Initializer.parameter.vpCs">vp_cs</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCs">Route53HostedZoneVpCs</a>]</code> | *Private hosted zones:* A complex type that contains information about the VPCs that are associated with the specified hosted zone. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `hosted_zone_config`<sup>Optional</sup> <a name="hosted_zone_config" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.Initializer.parameter.hostedZoneConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfig">Route53HostedZoneHostedZoneConfig</a>

A complex type that contains an optional comment.

If you don't want to specify a comment, omit the `HostedZoneConfig` and `Comment` elements.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_hosted_zone#hosted_zone_config Route53HostedZone#hosted_zone_config}

---

##### `hosted_zone_features`<sup>Optional</sup> <a name="hosted_zone_features" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.Initializer.parameter.hostedZoneFeatures"></a>

- *Type:* <a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeatures">Route53HostedZoneHostedZoneFeatures</a>

The features configuration for the hosted zone, including accelerated recovery settings and status information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_hosted_zone#hosted_zone_features Route53HostedZone#hosted_zone_features}

---

##### `hosted_zone_tags`<sup>Optional</sup> <a name="hosted_zone_tags" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.Initializer.parameter.hostedZoneTags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTags">Route53HostedZoneHostedZoneTags</a>]

Adds, edits, or deletes tags for a health check or a hosted zone.

For information about using tags for cost allocation, see [Using Cost Allocation Tags](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html) in the *User Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_hosted_zone#hosted_zone_tags Route53HostedZone#hosted_zone_tags}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.Initializer.parameter.name"></a>

- *Type:* str

The name of the domain.

Specify a fully qualified domain name, for example, *www.example.com*. The trailing dot is optional; Amazon Route 53 assumes that the domain name is fully qualified. This means that Route 53 treats *www.example.com* (without a trailing dot) and *www.example.com.* (with a trailing dot) as identical.
If you're creating a public hosted zone, this is the name you have registered with your DNS registrar. If your domain name is registered with a registrar other than Route 53, change the name servers for your domain to the set of `NameServers` that are returned by the `Fn::GetAtt` intrinsic function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_hosted_zone#name Route53HostedZone#name}

---

##### `query_logging_config`<sup>Optional</sup> <a name="query_logging_config" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.Initializer.parameter.queryLoggingConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfig">Route53HostedZoneQueryLoggingConfig</a>

Creates a configuration for DNS query logging.

After you create a query logging configuration, Amazon Route 53 begins to publish log data to an Amazon CloudWatch Logs log group.
DNS query logs contain information about the queries that Route 53 receives for a specified public hosted zone, such as the following:

* Route 53 edge location that responded to the DNS query
* Domain or subdomain that was requested
* DNS record type, such as A or AAAA
* DNS response code, such as `NoError` or `ServFail`
* Log Group and Resource Policy Before you create a query logging configuration, perform the following operations. If you create a query logging configuration using the Route 53 console, Route 53 performs these operations automatically. Create a CloudWatch Logs log group, and make note of the ARN, which you specify when you create a query logging configuration. Note the following: You must create the log group in the us-east-1 region. You must use the same to create the log group and the hosted zone that you want to configure query logging for. When you create log groups for query logging, we recommend that you use a consistent prefix, for example: /aws/route53/hosted zone name In the next step, you'll create a resource policy, which controls access to one or more log groups and the associated resources, such as Route 53 hosted zones. There's a limit on the number of resource policies that you can create, so we recommend that you use a consistent prefix so you can use the same resource policy for all the log groups that you create for query logging. Create a CloudWatch Logs resource policy, and give it the permissions that Route 53 needs to create log streams and to send query logs to log streams. You must create the CloudWatch Logs resource policy in the us-east-1 region. For the value of Resource, specify the ARN for the log group that you created in the previous step. To use the same resource policy for all the CloudWatch Logs log groups that you created for query logging configurations, replace the hosted zone name with *, for example: arn:aws:logs:us-east-1:123412341234:log-group:/aws/route53/* To avoid the confused deputy problem, a security issue where an entity without a permission for an action can coerce a more-privileged entity to perform it, you can optionally limit the permissions that a service has to a resource in a resource-based policy by supplying the following values: For aws:SourceArn, supply the hosted zone ARN used in creating the query logging configuration. For example, aws:SourceArn: arn:aws:route53:::hostedzone/hosted zone ID. For aws:SourceAccount, supply the account ID for the account that creates the query logging configuration. For example, aws:SourceAccount:111111111111. For more information, see The confused deputy problem in the IAM User Guide. You can't use the CloudWatch console to create or edit a resource policy. You must use the CloudWatch API, one of the SDKs, or the . + Log Streams and Edge Locations When Route 53 finishes creating the configuration for DNS query logging, it does the following: Creates a log stream for an edge location the first time that the edge location responds to DNS queries for the specified hosted zone. That log stream is used to log all queries that Route 53 responds to for that edge location. Begins to send query logs to the applicable log stream. The name of each log stream is in the following format: hosted zone ID/edge location code The edge location code is a three-letter code and an arbitrarily assigned number, for example, DFW3. The three-letter code typically corresponds with the International Air Transport Association airport code for an airport near the edge location. (These abbreviations might change in the future.) For a list of edge locations, see "The Route 53 Global Network" on the Route 53 Product Details page. + Queries That Are Logged Query logs contain only the queries that DNS resolvers forward to Route 53. If a DNS resolver has already cached the response to a query (such as the IP address for a load balancer for example.com), the resolver will continue to return the cached response. It doesn't forward another query to Route 53 until the TTL for the corresponding resource record set expires. Depending on how many DNS queries are submitted for a resource record set, and depending on the TTL for that resource record set, query logs might contain information about only one query out of every several thousand queries that are submitted to DNS. For more information about how DNS works, see Routing Internet Traffic to Your Website or Web Application in the Amazon Route 53 Developer Guide. + Log File Format For a list of the values in each query log and the format of each value, see Logging DNS Queries in the Amazon Route 53 Developer Guide. + Pricing For information about charges for query logs, see Amazon CloudWatch Pricing. + How to Stop Logging If you want Route 53 to stop sending query logs to CloudWatch Logs, delete the query logging configuration. For more information, see DeleteQueryLoggingConfig.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_hosted_zone#query_logging_config Route53HostedZone#query_logging_config}

---

##### `vp_cs`<sup>Optional</sup> <a name="vp_cs" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.Initializer.parameter.vpCs"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCs">Route53HostedZoneVpCs</a>]

*Private hosted zones:* A complex type that contains information about the VPCs that are associated with the specified hosted zone.

For public hosted zones, omit `VPCs`, `VPCId`, and `VPCRegion`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_hosted_zone#vp_cs Route53HostedZone#vp_cs}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.putHostedZoneConfig">put_hosted_zone_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.putHostedZoneFeatures">put_hosted_zone_features</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.putHostedZoneTags">put_hosted_zone_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.putQueryLoggingConfig">put_query_logging_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.putVpCs">put_vp_cs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.resetHostedZoneConfig">reset_hosted_zone_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.resetHostedZoneFeatures">reset_hosted_zone_features</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.resetHostedZoneTags">reset_hosted_zone_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.resetQueryLoggingConfig">reset_query_logging_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.resetVpCs">reset_vp_cs</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.with"></a>

```python
def with(
  mixins: *IMixin
) -> IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_hosted_zone_config` <a name="put_hosted_zone_config" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.putHostedZoneConfig"></a>

```python
def put_hosted_zone_config(
  comment: str = None
) -> None
```

###### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.putHostedZoneConfig.parameter.comment"></a>

- *Type:* str

Any comments that you want to include about the hosted zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_hosted_zone#comment Route53HostedZone#comment}

---

##### `put_hosted_zone_features` <a name="put_hosted_zone_features" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.putHostedZoneFeatures"></a>

```python
def put_hosted_zone_features(
  enable_accelerated_recovery: bool | IResolvable = None
) -> None
```

###### `enable_accelerated_recovery`<sup>Optional</sup> <a name="enable_accelerated_recovery" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.putHostedZoneFeatures.parameter.enableAcceleratedRecovery"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_hosted_zone#enable_accelerated_recovery Route53HostedZone#enable_accelerated_recovery}.

---

##### `put_hosted_zone_tags` <a name="put_hosted_zone_tags" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.putHostedZoneTags"></a>

```python
def put_hosted_zone_tags(
  value: IResolvable | typing.List[Route53HostedZoneHostedZoneTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.putHostedZoneTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTags">Route53HostedZoneHostedZoneTags</a>]

---

##### `put_query_logging_config` <a name="put_query_logging_config" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.putQueryLoggingConfig"></a>

```python
def put_query_logging_config(
  cloudwatch_logs_log_group_arn: str = None
) -> None
```

###### `cloudwatch_logs_log_group_arn`<sup>Optional</sup> <a name="cloudwatch_logs_log_group_arn" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.putQueryLoggingConfig.parameter.cloudwatchLogsLogGroupArn"></a>

- *Type:* str

The Amazon Resource Name (ARN) of the CloudWatch Logs log group that Amazon Route 53 is publishing logs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_hosted_zone#cloudwatch_logs_log_group_arn Route53HostedZone#cloudwatch_logs_log_group_arn}

---

##### `put_vp_cs` <a name="put_vp_cs" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.putVpCs"></a>

```python
def put_vp_cs(
  value: IResolvable | typing.List[Route53HostedZoneVpCs]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.putVpCs.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCs">Route53HostedZoneVpCs</a>]

---

##### `reset_hosted_zone_config` <a name="reset_hosted_zone_config" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.resetHostedZoneConfig"></a>

```python
def reset_hosted_zone_config() -> None
```

##### `reset_hosted_zone_features` <a name="reset_hosted_zone_features" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.resetHostedZoneFeatures"></a>

```python
def reset_hosted_zone_features() -> None
```

##### `reset_hosted_zone_tags` <a name="reset_hosted_zone_tags" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.resetHostedZoneTags"></a>

```python
def reset_hosted_zone_tags() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_query_logging_config` <a name="reset_query_logging_config" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.resetQueryLoggingConfig"></a>

```python
def reset_query_logging_config() -> None
```

##### `reset_vp_cs` <a name="reset_vp_cs" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.resetVpCs"></a>

```python
def reset_vp_cs() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a Route53HostedZone resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.isConstruct"></a>

```python
from cdktn_provider_awscc import route53_hosted_zone

route53HostedZone.Route53HostedZone.is_construct(
  x: typing.Any
)
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

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.isTerraformElement"></a>

```python
from cdktn_provider_awscc import route53_hosted_zone

route53HostedZone.Route53HostedZone.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.isTerraformResource"></a>

```python
from cdktn_provider_awscc import route53_hosted_zone

route53HostedZone.Route53HostedZone.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import route53_hosted_zone

route53HostedZone.Route53HostedZone.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a Route53HostedZone resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Route53HostedZone to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Route53HostedZone that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_hosted_zone#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Route53HostedZone to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.hostedZoneConfig">hosted_zone_config</a></code> | <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference">Route53HostedZoneHostedZoneConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.hostedZoneFeatures">hosted_zone_features</a></code> | <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference">Route53HostedZoneHostedZoneFeaturesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.hostedZoneId">hosted_zone_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.hostedZoneTags">hosted_zone_tags</a></code> | <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsList">Route53HostedZoneHostedZoneTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.nameServers">name_servers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.queryLoggingConfig">query_logging_config</a></code> | <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference">Route53HostedZoneQueryLoggingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.vpCs">vp_cs</a></code> | <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsList">Route53HostedZoneVpCsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.hostedZoneConfigInput">hosted_zone_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfig">Route53HostedZoneHostedZoneConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.hostedZoneFeaturesInput">hosted_zone_features_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeatures">Route53HostedZoneHostedZoneFeatures</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.hostedZoneTagsInput">hosted_zone_tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTags">Route53HostedZoneHostedZoneTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.queryLoggingConfigInput">query_logging_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfig">Route53HostedZoneQueryLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.vpCsInput">vp_cs_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCs">Route53HostedZoneVpCs</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `hosted_zone_config`<sup>Required</sup> <a name="hosted_zone_config" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.hostedZoneConfig"></a>

```python
hosted_zone_config: Route53HostedZoneHostedZoneConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference">Route53HostedZoneHostedZoneConfigOutputReference</a>

---

##### `hosted_zone_features`<sup>Required</sup> <a name="hosted_zone_features" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.hostedZoneFeatures"></a>

```python
hosted_zone_features: Route53HostedZoneHostedZoneFeaturesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference">Route53HostedZoneHostedZoneFeaturesOutputReference</a>

---

##### `hosted_zone_id`<sup>Required</sup> <a name="hosted_zone_id" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.hostedZoneId"></a>

```python
hosted_zone_id: str
```

- *Type:* str

---

##### `hosted_zone_tags`<sup>Required</sup> <a name="hosted_zone_tags" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.hostedZoneTags"></a>

```python
hosted_zone_tags: Route53HostedZoneHostedZoneTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsList">Route53HostedZoneHostedZoneTagsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name_servers`<sup>Required</sup> <a name="name_servers" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.nameServers"></a>

```python
name_servers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `query_logging_config`<sup>Required</sup> <a name="query_logging_config" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.queryLoggingConfig"></a>

```python
query_logging_config: Route53HostedZoneQueryLoggingConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference">Route53HostedZoneQueryLoggingConfigOutputReference</a>

---

##### `vp_cs`<sup>Required</sup> <a name="vp_cs" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.vpCs"></a>

```python
vp_cs: Route53HostedZoneVpCsList
```

- *Type:* <a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsList">Route53HostedZoneVpCsList</a>

---

##### `hosted_zone_config_input`<sup>Optional</sup> <a name="hosted_zone_config_input" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.hostedZoneConfigInput"></a>

```python
hosted_zone_config_input: IResolvable | Route53HostedZoneHostedZoneConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfig">Route53HostedZoneHostedZoneConfig</a>

---

##### `hosted_zone_features_input`<sup>Optional</sup> <a name="hosted_zone_features_input" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.hostedZoneFeaturesInput"></a>

```python
hosted_zone_features_input: IResolvable | Route53HostedZoneHostedZoneFeatures
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeatures">Route53HostedZoneHostedZoneFeatures</a>

---

##### `hosted_zone_tags_input`<sup>Optional</sup> <a name="hosted_zone_tags_input" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.hostedZoneTagsInput"></a>

```python
hosted_zone_tags_input: IResolvable | typing.List[Route53HostedZoneHostedZoneTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTags">Route53HostedZoneHostedZoneTags</a>]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `query_logging_config_input`<sup>Optional</sup> <a name="query_logging_config_input" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.queryLoggingConfigInput"></a>

```python
query_logging_config_input: IResolvable | Route53HostedZoneQueryLoggingConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfig">Route53HostedZoneQueryLoggingConfig</a>

---

##### `vp_cs_input`<sup>Optional</sup> <a name="vp_cs_input" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.vpCsInput"></a>

```python
vp_cs_input: IResolvable | typing.List[Route53HostedZoneVpCs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCs">Route53HostedZoneVpCs</a>]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### Route53HostedZoneConfig <a name="Route53HostedZoneConfig" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneConfig.Initializer"></a>

```python
from cdktn_provider_awscc import route53_hosted_zone

route53HostedZone.Route53HostedZoneConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  hosted_zone_config: Route53HostedZoneHostedZoneConfig = None,
  hosted_zone_features: Route53HostedZoneHostedZoneFeatures = None,
  hosted_zone_tags: IResolvable | typing.List[Route53HostedZoneHostedZoneTags] = None,
  name: str = None,
  query_logging_config: Route53HostedZoneQueryLoggingConfig = None,
  vp_cs: IResolvable | typing.List[Route53HostedZoneVpCs] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneConfig.property.hostedZoneConfig">hosted_zone_config</a></code> | <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfig">Route53HostedZoneHostedZoneConfig</a></code> | A complex type that contains an optional comment. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneConfig.property.hostedZoneFeatures">hosted_zone_features</a></code> | <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeatures">Route53HostedZoneHostedZoneFeatures</a></code> | The features configuration for the hosted zone, including accelerated recovery settings and status information. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneConfig.property.hostedZoneTags">hosted_zone_tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTags">Route53HostedZoneHostedZoneTags</a>]</code> | Adds, edits, or deletes tags for a health check or a hosted zone. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneConfig.property.name">name</a></code> | <code>str</code> | The name of the domain. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneConfig.property.queryLoggingConfig">query_logging_config</a></code> | <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfig">Route53HostedZoneQueryLoggingConfig</a></code> | Creates a configuration for DNS query logging. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneConfig.property.vpCs">vp_cs</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCs">Route53HostedZoneVpCs</a>]</code> | *Private hosted zones:* A complex type that contains information about the VPCs that are associated with the specified hosted zone. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `hosted_zone_config`<sup>Optional</sup> <a name="hosted_zone_config" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneConfig.property.hostedZoneConfig"></a>

```python
hosted_zone_config: Route53HostedZoneHostedZoneConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfig">Route53HostedZoneHostedZoneConfig</a>

A complex type that contains an optional comment.

If you don't want to specify a comment, omit the `HostedZoneConfig` and `Comment` elements.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_hosted_zone#hosted_zone_config Route53HostedZone#hosted_zone_config}

---

##### `hosted_zone_features`<sup>Optional</sup> <a name="hosted_zone_features" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneConfig.property.hostedZoneFeatures"></a>

```python
hosted_zone_features: Route53HostedZoneHostedZoneFeatures
```

- *Type:* <a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeatures">Route53HostedZoneHostedZoneFeatures</a>

The features configuration for the hosted zone, including accelerated recovery settings and status information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_hosted_zone#hosted_zone_features Route53HostedZone#hosted_zone_features}

---

##### `hosted_zone_tags`<sup>Optional</sup> <a name="hosted_zone_tags" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneConfig.property.hostedZoneTags"></a>

```python
hosted_zone_tags: IResolvable | typing.List[Route53HostedZoneHostedZoneTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTags">Route53HostedZoneHostedZoneTags</a>]

Adds, edits, or deletes tags for a health check or a hosted zone.

For information about using tags for cost allocation, see [Using Cost Allocation Tags](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html) in the *User Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_hosted_zone#hosted_zone_tags Route53HostedZone#hosted_zone_tags}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the domain.

Specify a fully qualified domain name, for example, *www.example.com*. The trailing dot is optional; Amazon Route 53 assumes that the domain name is fully qualified. This means that Route 53 treats *www.example.com* (without a trailing dot) and *www.example.com.* (with a trailing dot) as identical.
If you're creating a public hosted zone, this is the name you have registered with your DNS registrar. If your domain name is registered with a registrar other than Route 53, change the name servers for your domain to the set of `NameServers` that are returned by the `Fn::GetAtt` intrinsic function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_hosted_zone#name Route53HostedZone#name}

---

##### `query_logging_config`<sup>Optional</sup> <a name="query_logging_config" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneConfig.property.queryLoggingConfig"></a>

```python
query_logging_config: Route53HostedZoneQueryLoggingConfig
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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_hosted_zone#query_logging_config Route53HostedZone#query_logging_config}

---

##### `vp_cs`<sup>Optional</sup> <a name="vp_cs" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneConfig.property.vpCs"></a>

```python
vp_cs: IResolvable | typing.List[Route53HostedZoneVpCs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCs">Route53HostedZoneVpCs</a>]

*Private hosted zones:* A complex type that contains information about the VPCs that are associated with the specified hosted zone.

For public hosted zones, omit `VPCs`, `VPCId`, and `VPCRegion`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_hosted_zone#vp_cs Route53HostedZone#vp_cs}

---

### Route53HostedZoneHostedZoneConfig <a name="Route53HostedZoneHostedZoneConfig" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfig.Initializer"></a>

```python
from cdktn_provider_awscc import route53_hosted_zone

route53HostedZone.Route53HostedZoneHostedZoneConfig(
  comment: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfig.property.comment">comment</a></code> | <code>str</code> | Any comments that you want to include about the hosted zone. |

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfig.property.comment"></a>

```python
comment: str
```

- *Type:* str

Any comments that you want to include about the hosted zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_hosted_zone#comment Route53HostedZone#comment}

---

### Route53HostedZoneHostedZoneFeatures <a name="Route53HostedZoneHostedZoneFeatures" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeatures"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeatures.Initializer"></a>

```python
from cdktn_provider_awscc import route53_hosted_zone

route53HostedZone.Route53HostedZoneHostedZoneFeatures(
  enable_accelerated_recovery: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeatures.property.enableAcceleratedRecovery">enable_accelerated_recovery</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_hosted_zone#enable_accelerated_recovery Route53HostedZone#enable_accelerated_recovery}. |

---

##### `enable_accelerated_recovery`<sup>Optional</sup> <a name="enable_accelerated_recovery" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeatures.property.enableAcceleratedRecovery"></a>

```python
enable_accelerated_recovery: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_hosted_zone#enable_accelerated_recovery Route53HostedZone#enable_accelerated_recovery}.

---

### Route53HostedZoneHostedZoneTags <a name="Route53HostedZoneHostedZoneTags" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTags.Initializer"></a>

```python
from cdktn_provider_awscc import route53_hosted_zone

route53HostedZone.Route53HostedZoneHostedZoneTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTags.property.key">key</a></code> | <code>str</code> | The value of ``Key`` depends on the operation that you want to perform:   +  *Add a tag to a health check or hosted zone*: ``Key`` is the name that you want to give the new tag. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTags.property.value">value</a></code> | <code>str</code> | The value of ``Value`` depends on the operation that you want to perform:   +  *Add a tag to a health check or hosted zone*: ``Value`` is the value that you want to give the new tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTags.property.key"></a>

```python
key: str
```

- *Type:* str

The value of ``Key`` depends on the operation that you want to perform:   +  *Add a tag to a health check or hosted zone*: ``Key`` is the name that you want to give the new tag.

* *Edit a tag*: `Key` is the name of the tag that you want to change the `Value` for.
* *Delete a key*: `Key` is the name of the tag you want to remove.
* *Give a name to a health check*: Edit the default `Name` tag. In the Amazon Route 53 console, the list of your health checks includes a *Name* column that lets you see the name that you've given to each health check.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_hosted_zone#key Route53HostedZone#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value of ``Value`` depends on the operation that you want to perform:   +  *Add a tag to a health check or hosted zone*: ``Value`` is the value that you want to give the new tag.

* *Edit a tag*: `Value` is the new value that you want to assign the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_hosted_zone#value Route53HostedZone#value}

---

### Route53HostedZoneQueryLoggingConfig <a name="Route53HostedZoneQueryLoggingConfig" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfig.Initializer"></a>

```python
from cdktn_provider_awscc import route53_hosted_zone

route53HostedZone.Route53HostedZoneQueryLoggingConfig(
  cloudwatch_logs_log_group_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfig.property.cloudwatchLogsLogGroupArn">cloudwatch_logs_log_group_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the CloudWatch Logs log group that Amazon Route 53 is publishing logs to. |

---

##### `cloudwatch_logs_log_group_arn`<sup>Optional</sup> <a name="cloudwatch_logs_log_group_arn" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfig.property.cloudwatchLogsLogGroupArn"></a>

```python
cloudwatch_logs_log_group_arn: str
```

- *Type:* str

The Amazon Resource Name (ARN) of the CloudWatch Logs log group that Amazon Route 53 is publishing logs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_hosted_zone#cloudwatch_logs_log_group_arn Route53HostedZone#cloudwatch_logs_log_group_arn}

---

### Route53HostedZoneVpCs <a name="Route53HostedZoneVpCs" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCs.Initializer"></a>

```python
from cdktn_provider_awscc import route53_hosted_zone

route53HostedZone.Route53HostedZoneVpCs(
  vpc_id: str = None,
  vpc_region: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCs.property.vpcId">vpc_id</a></code> | <code>str</code> | *Private hosted zones only:* The ID of an Amazon VPC. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCs.property.vpcRegion">vpc_region</a></code> | <code>str</code> | *Private hosted zones only:* The region that an Amazon VPC was created in. |

---

##### `vpc_id`<sup>Optional</sup> <a name="vpc_id" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCs.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

*Private hosted zones only:* The ID of an Amazon VPC.

For public hosted zones, omit `VPCs`, `VPCId`, and `VPCRegion`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_hosted_zone#vpc_id Route53HostedZone#vpc_id}

---

##### `vpc_region`<sup>Optional</sup> <a name="vpc_region" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCs.property.vpcRegion"></a>

```python
vpc_region: str
```

- *Type:* str

*Private hosted zones only:* The region that an Amazon VPC was created in.

For public hosted zones, omit `VPCs`, `VPCId`, and `VPCRegion`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_hosted_zone#vpc_region Route53HostedZone#vpc_region}

---

## Classes <a name="Classes" id="Classes"></a>

### Route53HostedZoneHostedZoneConfigOutputReference <a name="Route53HostedZoneHostedZoneConfigOutputReference" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import route53_hosted_zone

route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.resetComment">reset_comment</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_comment` <a name="reset_comment" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.resetComment"></a>

```python
def reset_comment() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.property.commentInput">comment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfig">Route53HostedZoneHostedZoneConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `comment_input`<sup>Optional</sup> <a name="comment_input" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.property.commentInput"></a>

```python
comment_input: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Route53HostedZoneHostedZoneConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfig">Route53HostedZoneHostedZoneConfig</a>

---


### Route53HostedZoneHostedZoneFeaturesOutputReference <a name="Route53HostedZoneHostedZoneFeaturesOutputReference" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import route53_hosted_zone

route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.resetEnableAcceleratedRecovery">reset_enable_accelerated_recovery</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enable_accelerated_recovery` <a name="reset_enable_accelerated_recovery" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.resetEnableAcceleratedRecovery"></a>

```python
def reset_enable_accelerated_recovery() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.property.enableAcceleratedRecoveryInput">enable_accelerated_recovery_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.property.enableAcceleratedRecovery">enable_accelerated_recovery</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeatures">Route53HostedZoneHostedZoneFeatures</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enable_accelerated_recovery_input`<sup>Optional</sup> <a name="enable_accelerated_recovery_input" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.property.enableAcceleratedRecoveryInput"></a>

```python
enable_accelerated_recovery_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enable_accelerated_recovery`<sup>Required</sup> <a name="enable_accelerated_recovery" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.property.enableAcceleratedRecovery"></a>

```python
enable_accelerated_recovery: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Route53HostedZoneHostedZoneFeatures
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeatures">Route53HostedZoneHostedZoneFeatures</a>

---


### Route53HostedZoneHostedZoneTagsList <a name="Route53HostedZoneHostedZoneTagsList" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import route53_hosted_zone

route53HostedZone.Route53HostedZoneHostedZoneTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Route53HostedZoneHostedZoneTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTags">Route53HostedZoneHostedZoneTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[Route53HostedZoneHostedZoneTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTags">Route53HostedZoneHostedZoneTags</a>]

---


### Route53HostedZoneHostedZoneTagsOutputReference <a name="Route53HostedZoneHostedZoneTagsOutputReference" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import route53_hosted_zone

route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTags">Route53HostedZoneHostedZoneTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Route53HostedZoneHostedZoneTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTags">Route53HostedZoneHostedZoneTags</a>

---


### Route53HostedZoneQueryLoggingConfigOutputReference <a name="Route53HostedZoneQueryLoggingConfigOutputReference" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import route53_hosted_zone

route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.resetCloudwatchLogsLogGroupArn">reset_cloudwatch_logs_log_group_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cloudwatch_logs_log_group_arn` <a name="reset_cloudwatch_logs_log_group_arn" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.resetCloudwatchLogsLogGroupArn"></a>

```python
def reset_cloudwatch_logs_log_group_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.property.cloudwatchLogsLogGroupArnInput">cloudwatch_logs_log_group_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.property.cloudwatchLogsLogGroupArn">cloudwatch_logs_log_group_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfig">Route53HostedZoneQueryLoggingConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cloudwatch_logs_log_group_arn_input`<sup>Optional</sup> <a name="cloudwatch_logs_log_group_arn_input" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.property.cloudwatchLogsLogGroupArnInput"></a>

```python
cloudwatch_logs_log_group_arn_input: str
```

- *Type:* str

---

##### `cloudwatch_logs_log_group_arn`<sup>Required</sup> <a name="cloudwatch_logs_log_group_arn" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.property.cloudwatchLogsLogGroupArn"></a>

```python
cloudwatch_logs_log_group_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Route53HostedZoneQueryLoggingConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfig">Route53HostedZoneQueryLoggingConfig</a>

---


### Route53HostedZoneVpCsList <a name="Route53HostedZoneVpCsList" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsList.Initializer"></a>

```python
from cdktn_provider_awscc import route53_hosted_zone

route53HostedZone.Route53HostedZoneVpCsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Route53HostedZoneVpCsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCs">Route53HostedZoneVpCs</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[Route53HostedZoneVpCs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCs">Route53HostedZoneVpCs</a>]

---


### Route53HostedZoneVpCsOutputReference <a name="Route53HostedZoneVpCsOutputReference" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import route53_hosted_zone

route53HostedZone.Route53HostedZoneVpCsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.resetVpcId">reset_vpc_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.resetVpcRegion">reset_vpc_region</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_vpc_id` <a name="reset_vpc_id" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.resetVpcId"></a>

```python
def reset_vpc_id() -> None
```

##### `reset_vpc_region` <a name="reset_vpc_region" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.resetVpcRegion"></a>

```python
def reset_vpc_region() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.property.vpcIdInput">vpc_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.property.vpcRegionInput">vpc_region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.property.vpcId">vpc_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.property.vpcRegion">vpc_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCs">Route53HostedZoneVpCs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `vpc_id_input`<sup>Optional</sup> <a name="vpc_id_input" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.property.vpcIdInput"></a>

```python
vpc_id_input: str
```

- *Type:* str

---

##### `vpc_region_input`<sup>Optional</sup> <a name="vpc_region_input" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.property.vpcRegionInput"></a>

```python
vpc_region_input: str
```

- *Type:* str

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

---

##### `vpc_region`<sup>Required</sup> <a name="vpc_region" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.property.vpcRegion"></a>

```python
vpc_region: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Route53HostedZoneVpCs
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCs">Route53HostedZoneVpCs</a>

---



