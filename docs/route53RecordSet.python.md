# `route53RecordSet` Submodule <a name="`route53RecordSet` Submodule" id="@cdktn/provider-awscc.route53RecordSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Route53RecordSet <a name="Route53RecordSet" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53_record_set awscc_route53_record_set}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.Initializer"></a>

```python
from cdktn_provider_awscc import route53_record_set

route53RecordSet.Route53RecordSet(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  type: str,
  alias_target: Route53RecordSetAliasTarget = None,
  cidr_routing_config: Route53RecordSetCidrRoutingConfig = None,
  comment: str = None,
  failover: str = None,
  geo_location: Route53RecordSetGeoLocation = None,
  health_check_id: str = None,
  hosted_zone_id: str = None,
  hosted_zone_name: str = None,
  multi_value_answer: bool | IResolvable = None,
  region: str = None,
  resource_records: typing.List[str] = None,
  set_identifier: str = None,
  ttl: str = None,
  weight: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the record that you want to create, update, or delete. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.Initializer.parameter.type">type</a></code> | <code>str</code> | The DNS record type. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.Initializer.parameter.aliasTarget">alias_target</a></code> | <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTarget">Route53RecordSetAliasTarget</a></code> | Alias resource record sets only: Information about the AWS resource, such as a CloudFront distribution or an Amazon S3 bucket, that you want to route traffic to. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.Initializer.parameter.cidrRoutingConfig">cidr_routing_config</a></code> | <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfig">Route53RecordSetCidrRoutingConfig</a></code> | The object that is specified in resource record set object when you are linking a resource record set to a CIDR location. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.Initializer.parameter.comment">comment</a></code> | <code>str</code> | Optional: Any comments you want to include about a change batch request. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.Initializer.parameter.failover">failover</a></code> | <code>str</code> | To configure failover, you add the Failover element to two resource record sets. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.Initializer.parameter.geoLocation">geo_location</a></code> | <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocation">Route53RecordSetGeoLocation</a></code> | A complex type that lets you control how Amazon Route 53 responds to DNS queries based on the geographic origin of the query. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.Initializer.parameter.healthCheckId">health_check_id</a></code> | <code>str</code> | If you want Amazon Route 53 to return this resource record set in response to a DNS query only when the status of a health check is healthy, include the HealthCheckId element and specify the ID of the applicable health check. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.Initializer.parameter.hostedZoneId">hosted_zone_id</a></code> | <code>str</code> | The ID of the hosted zone that you want to create records in. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.Initializer.parameter.hostedZoneName">hosted_zone_name</a></code> | <code>str</code> | The name of the hosted zone that you want to create records in. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.Initializer.parameter.multiValueAnswer">multi_value_answer</a></code> | <code>bool \| cdktn.IResolvable</code> | To route traffic approximately randomly to multiple resources, such as web servers, create one multivalue answer record for each resource and specify true for MultiValueAnswer. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.Initializer.parameter.region">region</a></code> | <code>str</code> | The Amazon EC2 Region where you created the resource that this resource record set refers to. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.Initializer.parameter.resourceRecords">resource_records</a></code> | <code>typing.List[str]</code> | One or more values that correspond with the value that you specified for the Type property. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.Initializer.parameter.setIdentifier">set_identifier</a></code> | <code>str</code> | An identifier that differentiates among multiple resource record sets that have the same combination of name and type. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.Initializer.parameter.ttl">ttl</a></code> | <code>str</code> | The resource record cache time to live (TTL), in seconds. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.Initializer.parameter.weight">weight</a></code> | <code>typing.Union[int, float]</code> | Among resource record sets that have the same combination of DNS name and type, a value that determines the proportion of DNS queries that Amazon Route 53 responds to using the current resource record set. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.Initializer.parameter.name"></a>

- *Type:* str

The name of the record that you want to create, update, or delete.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53_record_set#name Route53RecordSet#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.Initializer.parameter.type"></a>

- *Type:* str

The DNS record type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53_record_set#type Route53RecordSet#type}

---

##### `alias_target`<sup>Optional</sup> <a name="alias_target" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.Initializer.parameter.aliasTarget"></a>

- *Type:* <a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTarget">Route53RecordSetAliasTarget</a>

Alias resource record sets only: Information about the AWS resource, such as a CloudFront distribution or an Amazon S3 bucket, that you want to route traffic to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53_record_set#alias_target Route53RecordSet#alias_target}

---

##### `cidr_routing_config`<sup>Optional</sup> <a name="cidr_routing_config" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.Initializer.parameter.cidrRoutingConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfig">Route53RecordSetCidrRoutingConfig</a>

The object that is specified in resource record set object when you are linking a resource record set to a CIDR location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53_record_set#cidr_routing_config Route53RecordSet#cidr_routing_config}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.Initializer.parameter.comment"></a>

- *Type:* str

Optional: Any comments you want to include about a change batch request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53_record_set#comment Route53RecordSet#comment}

---

##### `failover`<sup>Optional</sup> <a name="failover" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.Initializer.parameter.failover"></a>

- *Type:* str

To configure failover, you add the Failover element to two resource record sets.

For one resource record set, you specify PRIMARY as the value for Failover; for the other resource record set, you specify SECONDARY. In addition, you include the HealthCheckId element and specify the health check that you want Amazon Route 53 to perform for each resource record set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53_record_set#failover Route53RecordSet#failover}

---

##### `geo_location`<sup>Optional</sup> <a name="geo_location" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.Initializer.parameter.geoLocation"></a>

- *Type:* <a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocation">Route53RecordSetGeoLocation</a>

A complex type that lets you control how Amazon Route 53 responds to DNS queries based on the geographic origin of the query.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53_record_set#geo_location Route53RecordSet#geo_location}

---

##### `health_check_id`<sup>Optional</sup> <a name="health_check_id" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.Initializer.parameter.healthCheckId"></a>

- *Type:* str

If you want Amazon Route 53 to return this resource record set in response to a DNS query only when the status of a health check is healthy, include the HealthCheckId element and specify the ID of the applicable health check.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53_record_set#health_check_id Route53RecordSet#health_check_id}

---

##### `hosted_zone_id`<sup>Optional</sup> <a name="hosted_zone_id" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.Initializer.parameter.hostedZoneId"></a>

- *Type:* str

The ID of the hosted zone that you want to create records in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53_record_set#hosted_zone_id Route53RecordSet#hosted_zone_id}

---

##### `hosted_zone_name`<sup>Optional</sup> <a name="hosted_zone_name" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.Initializer.parameter.hostedZoneName"></a>

- *Type:* str

The name of the hosted zone that you want to create records in.

You must include a trailing dot (for example, www.example.com.) as part of the HostedZoneName.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53_record_set#hosted_zone_name Route53RecordSet#hosted_zone_name}

---

##### `multi_value_answer`<sup>Optional</sup> <a name="multi_value_answer" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.Initializer.parameter.multiValueAnswer"></a>

- *Type:* bool | cdktn.IResolvable

To route traffic approximately randomly to multiple resources, such as web servers, create one multivalue answer record for each resource and specify true for MultiValueAnswer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53_record_set#multi_value_answer Route53RecordSet#multi_value_answer}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.Initializer.parameter.region"></a>

- *Type:* str

The Amazon EC2 Region where you created the resource that this resource record set refers to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53_record_set#region Route53RecordSet#region}

---

##### `resource_records`<sup>Optional</sup> <a name="resource_records" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.Initializer.parameter.resourceRecords"></a>

- *Type:* typing.List[str]

One or more values that correspond with the value that you specified for the Type property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53_record_set#resource_records Route53RecordSet#resource_records}

---

##### `set_identifier`<sup>Optional</sup> <a name="set_identifier" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.Initializer.parameter.setIdentifier"></a>

- *Type:* str

An identifier that differentiates among multiple resource record sets that have the same combination of name and type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53_record_set#set_identifier Route53RecordSet#set_identifier}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.Initializer.parameter.ttl"></a>

- *Type:* str

The resource record cache time to live (TTL), in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53_record_set#ttl Route53RecordSet#ttl}

---

##### `weight`<sup>Optional</sup> <a name="weight" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.Initializer.parameter.weight"></a>

- *Type:* typing.Union[int, float]

Among resource record sets that have the same combination of DNS name and type, a value that determines the proportion of DNS queries that Amazon Route 53 responds to using the current resource record set.

Route 53 calculates the sum of the weights for the resource record sets that have the same combination of DNS name and type. Route 53 then responds to queries based on the ratio of a resource's weight to the total.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53_record_set#weight Route53RecordSet#weight}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.putAliasTarget">put_alias_target</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.putCidrRoutingConfig">put_cidr_routing_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.putGeoLocation">put_geo_location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.resetAliasTarget">reset_alias_target</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.resetCidrRoutingConfig">reset_cidr_routing_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.resetComment">reset_comment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.resetFailover">reset_failover</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.resetGeoLocation">reset_geo_location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.resetHealthCheckId">reset_health_check_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.resetHostedZoneId">reset_hosted_zone_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.resetHostedZoneName">reset_hosted_zone_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.resetMultiValueAnswer">reset_multi_value_answer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.resetResourceRecords">reset_resource_records</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.resetSetIdentifier">reset_set_identifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.resetTtl">reset_ttl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.resetWeight">reset_weight</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_alias_target` <a name="put_alias_target" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.putAliasTarget"></a>

```python
def put_alias_target(
  dns_name: str = None,
  evaluate_target_health: bool | IResolvable = None,
  hosted_zone_id: str = None
) -> None
```

###### `dns_name`<sup>Optional</sup> <a name="dns_name" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.putAliasTarget.parameter.dnsName"></a>

- *Type:* str

The value that you specify depends on where you want to route queries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53_record_set#dns_name Route53RecordSet#dns_name}

---

###### `evaluate_target_health`<sup>Optional</sup> <a name="evaluate_target_health" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.putAliasTarget.parameter.evaluateTargetHealth"></a>

- *Type:* bool | cdktn.IResolvable

When EvaluateTargetHealth is true, an alias resource record set inherits the health of the referenced AWS resource, such as an ELB load balancer or another resource record set in the hosted zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53_record_set#evaluate_target_health Route53RecordSet#evaluate_target_health}

---

###### `hosted_zone_id`<sup>Optional</sup> <a name="hosted_zone_id" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.putAliasTarget.parameter.hostedZoneId"></a>

- *Type:* str

The value used depends on where you want to route traffic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53_record_set#hosted_zone_id Route53RecordSet#hosted_zone_id}

---

##### `put_cidr_routing_config` <a name="put_cidr_routing_config" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.putCidrRoutingConfig"></a>

```python
def put_cidr_routing_config(
  collection_id: str = None,
  location_name: str = None
) -> None
```

###### `collection_id`<sup>Optional</sup> <a name="collection_id" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.putCidrRoutingConfig.parameter.collectionId"></a>

- *Type:* str

The CIDR collection ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53_record_set#collection_id Route53RecordSet#collection_id}

---

###### `location_name`<sup>Optional</sup> <a name="location_name" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.putCidrRoutingConfig.parameter.locationName"></a>

- *Type:* str

The CIDR collection location name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53_record_set#location_name Route53RecordSet#location_name}

---

##### `put_geo_location` <a name="put_geo_location" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.putGeoLocation"></a>

```python
def put_geo_location(
  continent_code: str = None,
  country_code: str = None,
  subdivision_code: str = None
) -> None
```

###### `continent_code`<sup>Optional</sup> <a name="continent_code" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.putGeoLocation.parameter.continentCode"></a>

- *Type:* str

For geolocation resource record sets, a two-letter abbreviation that identifies a continent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53_record_set#continent_code Route53RecordSet#continent_code}

---

###### `country_code`<sup>Optional</sup> <a name="country_code" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.putGeoLocation.parameter.countryCode"></a>

- *Type:* str

For geolocation resource record sets, the two-letter code for a country.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53_record_set#country_code Route53RecordSet#country_code}

---

###### `subdivision_code`<sup>Optional</sup> <a name="subdivision_code" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.putGeoLocation.parameter.subdivisionCode"></a>

- *Type:* str

For geolocation resource record sets, the two-letter code for a state of the United States.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53_record_set#subdivision_code Route53RecordSet#subdivision_code}

---

##### `reset_alias_target` <a name="reset_alias_target" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.resetAliasTarget"></a>

```python
def reset_alias_target() -> None
```

##### `reset_cidr_routing_config` <a name="reset_cidr_routing_config" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.resetCidrRoutingConfig"></a>

```python
def reset_cidr_routing_config() -> None
```

##### `reset_comment` <a name="reset_comment" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.resetComment"></a>

```python
def reset_comment() -> None
```

##### `reset_failover` <a name="reset_failover" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.resetFailover"></a>

```python
def reset_failover() -> None
```

##### `reset_geo_location` <a name="reset_geo_location" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.resetGeoLocation"></a>

```python
def reset_geo_location() -> None
```

##### `reset_health_check_id` <a name="reset_health_check_id" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.resetHealthCheckId"></a>

```python
def reset_health_check_id() -> None
```

##### `reset_hosted_zone_id` <a name="reset_hosted_zone_id" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.resetHostedZoneId"></a>

```python
def reset_hosted_zone_id() -> None
```

##### `reset_hosted_zone_name` <a name="reset_hosted_zone_name" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.resetHostedZoneName"></a>

```python
def reset_hosted_zone_name() -> None
```

##### `reset_multi_value_answer` <a name="reset_multi_value_answer" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.resetMultiValueAnswer"></a>

```python
def reset_multi_value_answer() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_resource_records` <a name="reset_resource_records" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.resetResourceRecords"></a>

```python
def reset_resource_records() -> None
```

##### `reset_set_identifier` <a name="reset_set_identifier" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.resetSetIdentifier"></a>

```python
def reset_set_identifier() -> None
```

##### `reset_ttl` <a name="reset_ttl" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.resetTtl"></a>

```python
def reset_ttl() -> None
```

##### `reset_weight` <a name="reset_weight" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.resetWeight"></a>

```python
def reset_weight() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a Route53RecordSet resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.isConstruct"></a>

```python
from cdktn_provider_awscc import route53_record_set

route53RecordSet.Route53RecordSet.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.isTerraformElement"></a>

```python
from cdktn_provider_awscc import route53_record_set

route53RecordSet.Route53RecordSet.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.isTerraformResource"></a>

```python
from cdktn_provider_awscc import route53_record_set

route53RecordSet.Route53RecordSet.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import route53_record_set

route53RecordSet.Route53RecordSet.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a Route53RecordSet resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Route53RecordSet to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Route53RecordSet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53_record_set#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Route53RecordSet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.aliasTarget">alias_target</a></code> | <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference">Route53RecordSetAliasTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.cidrRoutingConfig">cidr_routing_config</a></code> | <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference">Route53RecordSetCidrRoutingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.geoLocation">geo_location</a></code> | <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference">Route53RecordSetGeoLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.aliasTargetInput">alias_target_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTarget">Route53RecordSetAliasTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.cidrRoutingConfigInput">cidr_routing_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfig">Route53RecordSetCidrRoutingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.commentInput">comment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.failoverInput">failover_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.geoLocationInput">geo_location_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocation">Route53RecordSetGeoLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.healthCheckIdInput">health_check_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.hostedZoneIdInput">hosted_zone_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.hostedZoneNameInput">hosted_zone_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.multiValueAnswerInput">multi_value_answer_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.resourceRecordsInput">resource_records_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.setIdentifierInput">set_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.ttlInput">ttl_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.weightInput">weight_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.failover">failover</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.healthCheckId">health_check_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.hostedZoneId">hosted_zone_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.hostedZoneName">hosted_zone_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.multiValueAnswer">multi_value_answer</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.resourceRecords">resource_records</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.setIdentifier">set_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.ttl">ttl</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.weight">weight</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `alias_target`<sup>Required</sup> <a name="alias_target" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.aliasTarget"></a>

```python
alias_target: Route53RecordSetAliasTargetOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference">Route53RecordSetAliasTargetOutputReference</a>

---

##### `cidr_routing_config`<sup>Required</sup> <a name="cidr_routing_config" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.cidrRoutingConfig"></a>

```python
cidr_routing_config: Route53RecordSetCidrRoutingConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference">Route53RecordSetCidrRoutingConfigOutputReference</a>

---

##### `geo_location`<sup>Required</sup> <a name="geo_location" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.geoLocation"></a>

```python
geo_location: Route53RecordSetGeoLocationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference">Route53RecordSetGeoLocationOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `alias_target_input`<sup>Optional</sup> <a name="alias_target_input" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.aliasTargetInput"></a>

```python
alias_target_input: IResolvable | Route53RecordSetAliasTarget
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTarget">Route53RecordSetAliasTarget</a>

---

##### `cidr_routing_config_input`<sup>Optional</sup> <a name="cidr_routing_config_input" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.cidrRoutingConfigInput"></a>

```python
cidr_routing_config_input: IResolvable | Route53RecordSetCidrRoutingConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfig">Route53RecordSetCidrRoutingConfig</a>

---

##### `comment_input`<sup>Optional</sup> <a name="comment_input" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.commentInput"></a>

```python
comment_input: str
```

- *Type:* str

---

##### `failover_input`<sup>Optional</sup> <a name="failover_input" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.failoverInput"></a>

```python
failover_input: str
```

- *Type:* str

---

##### `geo_location_input`<sup>Optional</sup> <a name="geo_location_input" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.geoLocationInput"></a>

```python
geo_location_input: IResolvable | Route53RecordSetGeoLocation
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocation">Route53RecordSetGeoLocation</a>

---

##### `health_check_id_input`<sup>Optional</sup> <a name="health_check_id_input" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.healthCheckIdInput"></a>

```python
health_check_id_input: str
```

- *Type:* str

---

##### `hosted_zone_id_input`<sup>Optional</sup> <a name="hosted_zone_id_input" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.hostedZoneIdInput"></a>

```python
hosted_zone_id_input: str
```

- *Type:* str

---

##### `hosted_zone_name_input`<sup>Optional</sup> <a name="hosted_zone_name_input" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.hostedZoneNameInput"></a>

```python
hosted_zone_name_input: str
```

- *Type:* str

---

##### `multi_value_answer_input`<sup>Optional</sup> <a name="multi_value_answer_input" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.multiValueAnswerInput"></a>

```python
multi_value_answer_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `resource_records_input`<sup>Optional</sup> <a name="resource_records_input" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.resourceRecordsInput"></a>

```python
resource_records_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `set_identifier_input`<sup>Optional</sup> <a name="set_identifier_input" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.setIdentifierInput"></a>

```python
set_identifier_input: str
```

- *Type:* str

---

##### `ttl_input`<sup>Optional</sup> <a name="ttl_input" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.ttlInput"></a>

```python
ttl_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `weight_input`<sup>Optional</sup> <a name="weight_input" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.weightInput"></a>

```python
weight_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `failover`<sup>Required</sup> <a name="failover" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.failover"></a>

```python
failover: str
```

- *Type:* str

---

##### `health_check_id`<sup>Required</sup> <a name="health_check_id" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.healthCheckId"></a>

```python
health_check_id: str
```

- *Type:* str

---

##### `hosted_zone_id`<sup>Required</sup> <a name="hosted_zone_id" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.hostedZoneId"></a>

```python
hosted_zone_id: str
```

- *Type:* str

---

##### `hosted_zone_name`<sup>Required</sup> <a name="hosted_zone_name" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.hostedZoneName"></a>

```python
hosted_zone_name: str
```

- *Type:* str

---

##### `multi_value_answer`<sup>Required</sup> <a name="multi_value_answer" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.multiValueAnswer"></a>

```python
multi_value_answer: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `resource_records`<sup>Required</sup> <a name="resource_records" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.resourceRecords"></a>

```python
resource_records: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `set_identifier`<sup>Required</sup> <a name="set_identifier" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.setIdentifier"></a>

```python
set_identifier: str
```

- *Type:* str

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.ttl"></a>

```python
ttl: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.weight"></a>

```python
weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### Route53RecordSetAliasTarget <a name="Route53RecordSetAliasTarget" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTarget"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTarget.Initializer"></a>

```python
from cdktn_provider_awscc import route53_record_set

route53RecordSet.Route53RecordSetAliasTarget(
  dns_name: str = None,
  evaluate_target_health: bool | IResolvable = None,
  hosted_zone_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTarget.property.dnsName">dns_name</a></code> | <code>str</code> | The value that you specify depends on where you want to route queries. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTarget.property.evaluateTargetHealth">evaluate_target_health</a></code> | <code>bool \| cdktn.IResolvable</code> | When EvaluateTargetHealth is true, an alias resource record set inherits the health of the referenced AWS resource, such as an ELB load balancer or another resource record set in the hosted zone. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTarget.property.hostedZoneId">hosted_zone_id</a></code> | <code>str</code> | The value used depends on where you want to route traffic. |

---

##### `dns_name`<sup>Optional</sup> <a name="dns_name" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTarget.property.dnsName"></a>

```python
dns_name: str
```

- *Type:* str

The value that you specify depends on where you want to route queries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53_record_set#dns_name Route53RecordSet#dns_name}

---

##### `evaluate_target_health`<sup>Optional</sup> <a name="evaluate_target_health" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTarget.property.evaluateTargetHealth"></a>

```python
evaluate_target_health: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

When EvaluateTargetHealth is true, an alias resource record set inherits the health of the referenced AWS resource, such as an ELB load balancer or another resource record set in the hosted zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53_record_set#evaluate_target_health Route53RecordSet#evaluate_target_health}

---

##### `hosted_zone_id`<sup>Optional</sup> <a name="hosted_zone_id" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTarget.property.hostedZoneId"></a>

```python
hosted_zone_id: str
```

- *Type:* str

The value used depends on where you want to route traffic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53_record_set#hosted_zone_id Route53RecordSet#hosted_zone_id}

---

### Route53RecordSetCidrRoutingConfig <a name="Route53RecordSetCidrRoutingConfig" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfig.Initializer"></a>

```python
from cdktn_provider_awscc import route53_record_set

route53RecordSet.Route53RecordSetCidrRoutingConfig(
  collection_id: str = None,
  location_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfig.property.collectionId">collection_id</a></code> | <code>str</code> | The CIDR collection ID. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfig.property.locationName">location_name</a></code> | <code>str</code> | The CIDR collection location name. |

---

##### `collection_id`<sup>Optional</sup> <a name="collection_id" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfig.property.collectionId"></a>

```python
collection_id: str
```

- *Type:* str

The CIDR collection ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53_record_set#collection_id Route53RecordSet#collection_id}

---

##### `location_name`<sup>Optional</sup> <a name="location_name" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfig.property.locationName"></a>

```python
location_name: str
```

- *Type:* str

The CIDR collection location name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53_record_set#location_name Route53RecordSet#location_name}

---

### Route53RecordSetConfig <a name="Route53RecordSetConfig" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.Initializer"></a>

```python
from cdktn_provider_awscc import route53_record_set

route53RecordSet.Route53RecordSetConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  type: str,
  alias_target: Route53RecordSetAliasTarget = None,
  cidr_routing_config: Route53RecordSetCidrRoutingConfig = None,
  comment: str = None,
  failover: str = None,
  geo_location: Route53RecordSetGeoLocation = None,
  health_check_id: str = None,
  hosted_zone_id: str = None,
  hosted_zone_name: str = None,
  multi_value_answer: bool | IResolvable = None,
  region: str = None,
  resource_records: typing.List[str] = None,
  set_identifier: str = None,
  ttl: str = None,
  weight: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.name">name</a></code> | <code>str</code> | The name of the record that you want to create, update, or delete. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.type">type</a></code> | <code>str</code> | The DNS record type. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.aliasTarget">alias_target</a></code> | <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTarget">Route53RecordSetAliasTarget</a></code> | Alias resource record sets only: Information about the AWS resource, such as a CloudFront distribution or an Amazon S3 bucket, that you want to route traffic to. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.cidrRoutingConfig">cidr_routing_config</a></code> | <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfig">Route53RecordSetCidrRoutingConfig</a></code> | The object that is specified in resource record set object when you are linking a resource record set to a CIDR location. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.comment">comment</a></code> | <code>str</code> | Optional: Any comments you want to include about a change batch request. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.failover">failover</a></code> | <code>str</code> | To configure failover, you add the Failover element to two resource record sets. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.geoLocation">geo_location</a></code> | <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocation">Route53RecordSetGeoLocation</a></code> | A complex type that lets you control how Amazon Route 53 responds to DNS queries based on the geographic origin of the query. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.healthCheckId">health_check_id</a></code> | <code>str</code> | If you want Amazon Route 53 to return this resource record set in response to a DNS query only when the status of a health check is healthy, include the HealthCheckId element and specify the ID of the applicable health check. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.hostedZoneId">hosted_zone_id</a></code> | <code>str</code> | The ID of the hosted zone that you want to create records in. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.hostedZoneName">hosted_zone_name</a></code> | <code>str</code> | The name of the hosted zone that you want to create records in. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.multiValueAnswer">multi_value_answer</a></code> | <code>bool \| cdktn.IResolvable</code> | To route traffic approximately randomly to multiple resources, such as web servers, create one multivalue answer record for each resource and specify true for MultiValueAnswer. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.region">region</a></code> | <code>str</code> | The Amazon EC2 Region where you created the resource that this resource record set refers to. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.resourceRecords">resource_records</a></code> | <code>typing.List[str]</code> | One or more values that correspond with the value that you specified for the Type property. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.setIdentifier">set_identifier</a></code> | <code>str</code> | An identifier that differentiates among multiple resource record sets that have the same combination of name and type. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.ttl">ttl</a></code> | <code>str</code> | The resource record cache time to live (TTL), in seconds. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.weight">weight</a></code> | <code>typing.Union[int, float]</code> | Among resource record sets that have the same combination of DNS name and type, a value that determines the proportion of DNS queries that Amazon Route 53 responds to using the current resource record set. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the record that you want to create, update, or delete.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53_record_set#name Route53RecordSet#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.type"></a>

```python
type: str
```

- *Type:* str

The DNS record type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53_record_set#type Route53RecordSet#type}

---

##### `alias_target`<sup>Optional</sup> <a name="alias_target" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.aliasTarget"></a>

```python
alias_target: Route53RecordSetAliasTarget
```

- *Type:* <a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTarget">Route53RecordSetAliasTarget</a>

Alias resource record sets only: Information about the AWS resource, such as a CloudFront distribution or an Amazon S3 bucket, that you want to route traffic to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53_record_set#alias_target Route53RecordSet#alias_target}

---

##### `cidr_routing_config`<sup>Optional</sup> <a name="cidr_routing_config" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.cidrRoutingConfig"></a>

```python
cidr_routing_config: Route53RecordSetCidrRoutingConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfig">Route53RecordSetCidrRoutingConfig</a>

The object that is specified in resource record set object when you are linking a resource record set to a CIDR location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53_record_set#cidr_routing_config Route53RecordSet#cidr_routing_config}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.comment"></a>

```python
comment: str
```

- *Type:* str

Optional: Any comments you want to include about a change batch request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53_record_set#comment Route53RecordSet#comment}

---

##### `failover`<sup>Optional</sup> <a name="failover" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.failover"></a>

```python
failover: str
```

- *Type:* str

To configure failover, you add the Failover element to two resource record sets.

For one resource record set, you specify PRIMARY as the value for Failover; for the other resource record set, you specify SECONDARY. In addition, you include the HealthCheckId element and specify the health check that you want Amazon Route 53 to perform for each resource record set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53_record_set#failover Route53RecordSet#failover}

---

##### `geo_location`<sup>Optional</sup> <a name="geo_location" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.geoLocation"></a>

```python
geo_location: Route53RecordSetGeoLocation
```

- *Type:* <a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocation">Route53RecordSetGeoLocation</a>

A complex type that lets you control how Amazon Route 53 responds to DNS queries based on the geographic origin of the query.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53_record_set#geo_location Route53RecordSet#geo_location}

---

##### `health_check_id`<sup>Optional</sup> <a name="health_check_id" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.healthCheckId"></a>

```python
health_check_id: str
```

- *Type:* str

If you want Amazon Route 53 to return this resource record set in response to a DNS query only when the status of a health check is healthy, include the HealthCheckId element and specify the ID of the applicable health check.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53_record_set#health_check_id Route53RecordSet#health_check_id}

---

##### `hosted_zone_id`<sup>Optional</sup> <a name="hosted_zone_id" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.hostedZoneId"></a>

```python
hosted_zone_id: str
```

- *Type:* str

The ID of the hosted zone that you want to create records in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53_record_set#hosted_zone_id Route53RecordSet#hosted_zone_id}

---

##### `hosted_zone_name`<sup>Optional</sup> <a name="hosted_zone_name" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.hostedZoneName"></a>

```python
hosted_zone_name: str
```

- *Type:* str

The name of the hosted zone that you want to create records in.

You must include a trailing dot (for example, www.example.com.) as part of the HostedZoneName.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53_record_set#hosted_zone_name Route53RecordSet#hosted_zone_name}

---

##### `multi_value_answer`<sup>Optional</sup> <a name="multi_value_answer" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.multiValueAnswer"></a>

```python
multi_value_answer: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

To route traffic approximately randomly to multiple resources, such as web servers, create one multivalue answer record for each resource and specify true for MultiValueAnswer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53_record_set#multi_value_answer Route53RecordSet#multi_value_answer}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.region"></a>

```python
region: str
```

- *Type:* str

The Amazon EC2 Region where you created the resource that this resource record set refers to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53_record_set#region Route53RecordSet#region}

---

##### `resource_records`<sup>Optional</sup> <a name="resource_records" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.resourceRecords"></a>

```python
resource_records: typing.List[str]
```

- *Type:* typing.List[str]

One or more values that correspond with the value that you specified for the Type property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53_record_set#resource_records Route53RecordSet#resource_records}

---

##### `set_identifier`<sup>Optional</sup> <a name="set_identifier" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.setIdentifier"></a>

```python
set_identifier: str
```

- *Type:* str

An identifier that differentiates among multiple resource record sets that have the same combination of name and type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53_record_set#set_identifier Route53RecordSet#set_identifier}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.ttl"></a>

```python
ttl: str
```

- *Type:* str

The resource record cache time to live (TTL), in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53_record_set#ttl Route53RecordSet#ttl}

---

##### `weight`<sup>Optional</sup> <a name="weight" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.weight"></a>

```python
weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Among resource record sets that have the same combination of DNS name and type, a value that determines the proportion of DNS queries that Amazon Route 53 responds to using the current resource record set.

Route 53 calculates the sum of the weights for the resource record sets that have the same combination of DNS name and type. Route 53 then responds to queries based on the ratio of a resource's weight to the total.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53_record_set#weight Route53RecordSet#weight}

---

### Route53RecordSetGeoLocation <a name="Route53RecordSetGeoLocation" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocation.Initializer"></a>

```python
from cdktn_provider_awscc import route53_record_set

route53RecordSet.Route53RecordSetGeoLocation(
  continent_code: str = None,
  country_code: str = None,
  subdivision_code: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocation.property.continentCode">continent_code</a></code> | <code>str</code> | For geolocation resource record sets, a two-letter abbreviation that identifies a continent. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocation.property.countryCode">country_code</a></code> | <code>str</code> | For geolocation resource record sets, the two-letter code for a country. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocation.property.subdivisionCode">subdivision_code</a></code> | <code>str</code> | For geolocation resource record sets, the two-letter code for a state of the United States. |

---

##### `continent_code`<sup>Optional</sup> <a name="continent_code" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocation.property.continentCode"></a>

```python
continent_code: str
```

- *Type:* str

For geolocation resource record sets, a two-letter abbreviation that identifies a continent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53_record_set#continent_code Route53RecordSet#continent_code}

---

##### `country_code`<sup>Optional</sup> <a name="country_code" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocation.property.countryCode"></a>

```python
country_code: str
```

- *Type:* str

For geolocation resource record sets, the two-letter code for a country.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53_record_set#country_code Route53RecordSet#country_code}

---

##### `subdivision_code`<sup>Optional</sup> <a name="subdivision_code" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocation.property.subdivisionCode"></a>

```python
subdivision_code: str
```

- *Type:* str

For geolocation resource record sets, the two-letter code for a state of the United States.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53_record_set#subdivision_code Route53RecordSet#subdivision_code}

---

## Classes <a name="Classes" id="Classes"></a>

### Route53RecordSetAliasTargetOutputReference <a name="Route53RecordSetAliasTargetOutputReference" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import route53_record_set

route53RecordSet.Route53RecordSetAliasTargetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.resetDnsName">reset_dns_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.resetEvaluateTargetHealth">reset_evaluate_target_health</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.resetHostedZoneId">reset_hosted_zone_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_dns_name` <a name="reset_dns_name" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.resetDnsName"></a>

```python
def reset_dns_name() -> None
```

##### `reset_evaluate_target_health` <a name="reset_evaluate_target_health" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.resetEvaluateTargetHealth"></a>

```python
def reset_evaluate_target_health() -> None
```

##### `reset_hosted_zone_id` <a name="reset_hosted_zone_id" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.resetHostedZoneId"></a>

```python
def reset_hosted_zone_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.property.dnsNameInput">dns_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.property.evaluateTargetHealthInput">evaluate_target_health_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.property.hostedZoneIdInput">hosted_zone_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.property.dnsName">dns_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.property.evaluateTargetHealth">evaluate_target_health</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.property.hostedZoneId">hosted_zone_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTarget">Route53RecordSetAliasTarget</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dns_name_input`<sup>Optional</sup> <a name="dns_name_input" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.property.dnsNameInput"></a>

```python
dns_name_input: str
```

- *Type:* str

---

##### `evaluate_target_health_input`<sup>Optional</sup> <a name="evaluate_target_health_input" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.property.evaluateTargetHealthInput"></a>

```python
evaluate_target_health_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `hosted_zone_id_input`<sup>Optional</sup> <a name="hosted_zone_id_input" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.property.hostedZoneIdInput"></a>

```python
hosted_zone_id_input: str
```

- *Type:* str

---

##### `dns_name`<sup>Required</sup> <a name="dns_name" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.property.dnsName"></a>

```python
dns_name: str
```

- *Type:* str

---

##### `evaluate_target_health`<sup>Required</sup> <a name="evaluate_target_health" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.property.evaluateTargetHealth"></a>

```python
evaluate_target_health: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `hosted_zone_id`<sup>Required</sup> <a name="hosted_zone_id" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.property.hostedZoneId"></a>

```python
hosted_zone_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Route53RecordSetAliasTarget
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTarget">Route53RecordSetAliasTarget</a>

---


### Route53RecordSetCidrRoutingConfigOutputReference <a name="Route53RecordSetCidrRoutingConfigOutputReference" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import route53_record_set

route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.resetCollectionId">reset_collection_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.resetLocationName">reset_location_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_collection_id` <a name="reset_collection_id" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.resetCollectionId"></a>

```python
def reset_collection_id() -> None
```

##### `reset_location_name` <a name="reset_location_name" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.resetLocationName"></a>

```python
def reset_location_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.property.collectionIdInput">collection_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.property.locationNameInput">location_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.property.collectionId">collection_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.property.locationName">location_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfig">Route53RecordSetCidrRoutingConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `collection_id_input`<sup>Optional</sup> <a name="collection_id_input" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.property.collectionIdInput"></a>

```python
collection_id_input: str
```

- *Type:* str

---

##### `location_name_input`<sup>Optional</sup> <a name="location_name_input" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.property.locationNameInput"></a>

```python
location_name_input: str
```

- *Type:* str

---

##### `collection_id`<sup>Required</sup> <a name="collection_id" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.property.collectionId"></a>

```python
collection_id: str
```

- *Type:* str

---

##### `location_name`<sup>Required</sup> <a name="location_name" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.property.locationName"></a>

```python
location_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Route53RecordSetCidrRoutingConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfig">Route53RecordSetCidrRoutingConfig</a>

---


### Route53RecordSetGeoLocationOutputReference <a name="Route53RecordSetGeoLocationOutputReference" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import route53_record_set

route53RecordSet.Route53RecordSetGeoLocationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.resetContinentCode">reset_continent_code</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.resetCountryCode">reset_country_code</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.resetSubdivisionCode">reset_subdivision_code</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_continent_code` <a name="reset_continent_code" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.resetContinentCode"></a>

```python
def reset_continent_code() -> None
```

##### `reset_country_code` <a name="reset_country_code" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.resetCountryCode"></a>

```python
def reset_country_code() -> None
```

##### `reset_subdivision_code` <a name="reset_subdivision_code" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.resetSubdivisionCode"></a>

```python
def reset_subdivision_code() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.property.continentCodeInput">continent_code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.property.countryCodeInput">country_code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.property.subdivisionCodeInput">subdivision_code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.property.continentCode">continent_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.property.countryCode">country_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.property.subdivisionCode">subdivision_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocation">Route53RecordSetGeoLocation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `continent_code_input`<sup>Optional</sup> <a name="continent_code_input" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.property.continentCodeInput"></a>

```python
continent_code_input: str
```

- *Type:* str

---

##### `country_code_input`<sup>Optional</sup> <a name="country_code_input" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.property.countryCodeInput"></a>

```python
country_code_input: str
```

- *Type:* str

---

##### `subdivision_code_input`<sup>Optional</sup> <a name="subdivision_code_input" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.property.subdivisionCodeInput"></a>

```python
subdivision_code_input: str
```

- *Type:* str

---

##### `continent_code`<sup>Required</sup> <a name="continent_code" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.property.continentCode"></a>

```python
continent_code: str
```

- *Type:* str

---

##### `country_code`<sup>Required</sup> <a name="country_code" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.property.countryCode"></a>

```python
country_code: str
```

- *Type:* str

---

##### `subdivision_code`<sup>Required</sup> <a name="subdivision_code" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.property.subdivisionCode"></a>

```python
subdivision_code: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Route53RecordSetGeoLocation
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocation">Route53RecordSetGeoLocation</a>

---



