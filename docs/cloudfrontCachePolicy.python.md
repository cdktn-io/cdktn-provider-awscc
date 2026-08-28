# `cloudfrontCachePolicy` Submodule <a name="`cloudfrontCachePolicy` Submodule" id="@cdktn/provider-awscc.cloudfrontCachePolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudfrontCachePolicy <a name="CloudfrontCachePolicy" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudfront_cache_policy awscc_cloudfront_cache_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.Initializer"></a>

```python
from cdktn_provider_awscc import cloudfront_cache_policy

cloudfrontCachePolicy.CloudfrontCachePolicy(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  cache_policy_config: CloudfrontCachePolicyCachePolicyConfig
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.Initializer.parameter.cachePolicyConfig">cache_policy_config</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfig">CloudfrontCachePolicyCachePolicyConfig</a></code> | The cache policy configuration. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `cache_policy_config`<sup>Required</sup> <a name="cache_policy_config" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.Initializer.parameter.cachePolicyConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfig">CloudfrontCachePolicyCachePolicyConfig</a>

The cache policy configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudfront_cache_policy#cache_policy_config CloudfrontCachePolicy#cache_policy_config}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.putCachePolicyConfig">put_cache_policy_config</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_cache_policy_config` <a name="put_cache_policy_config" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.putCachePolicyConfig"></a>

```python
def put_cache_policy_config(
  default_ttl: typing.Union[int, float],
  max_ttl: typing.Union[int, float],
  min_ttl: typing.Union[int, float],
  name: str,
  parameters_in_cache_key_and_forwarded_to_origin: CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOrigin,
  comment: str = None
) -> None
```

###### `default_ttl`<sup>Required</sup> <a name="default_ttl" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.putCachePolicyConfig.parameter.defaultTtl"></a>

- *Type:* typing.Union[int, float]

The default amount of time, in seconds, that you want objects to stay in the CloudFront cache before CloudFront sends another request to the origin to see if the object has been updated.

CloudFront uses this value as the object's time to live (TTL) only when the origin does *not* send `Cache-Control` or `Expires` headers with the object. For more information, see [Managing How Long Content Stays in an Edge Cache (Expiration)](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Expiration.html) in the *Amazon CloudFront Developer Guide*.
The default value for this field is 86400 seconds (one day). If the value of `MinTTL` is more than 86400 seconds, then the default value for this field is the same as the value of `MinTTL`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudfront_cache_policy#default_ttl CloudfrontCachePolicy#default_ttl}

---

###### `max_ttl`<sup>Required</sup> <a name="max_ttl" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.putCachePolicyConfig.parameter.maxTtl"></a>

- *Type:* typing.Union[int, float]

The maximum amount of time, in seconds, that objects stay in the CloudFront cache before CloudFront sends another request to the origin to see if the object has been updated.

CloudFront uses this value only when the origin sends `Cache-Control` or `Expires` headers with the object. For more information, see [Managing How Long Content Stays in an Edge Cache (Expiration)](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Expiration.html) in the *Amazon CloudFront Developer Guide*.
The default value for this field is 31536000 seconds (one year). If the value of `MinTTL` or `DefaultTTL` is more than 31536000 seconds, then the default value for this field is the same as the value of `DefaultTTL`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudfront_cache_policy#max_ttl CloudfrontCachePolicy#max_ttl}

---

###### `min_ttl`<sup>Required</sup> <a name="min_ttl" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.putCachePolicyConfig.parameter.minTtl"></a>

- *Type:* typing.Union[int, float]

The minimum amount of time, in seconds, that you want objects to stay in the CloudFront cache before CloudFront sends another request to the origin to see if the object has been updated.

For more information, see [Managing How Long Content Stays in an Edge Cache (Expiration)](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Expiration.html) in the *Amazon CloudFront Developer Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudfront_cache_policy#min_ttl CloudfrontCachePolicy#min_ttl}

---

###### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.putCachePolicyConfig.parameter.name"></a>

- *Type:* str

A unique name to identify the cache policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudfront_cache_policy#name CloudfrontCachePolicy#name}

---

###### `parameters_in_cache_key_and_forwarded_to_origin`<sup>Required</sup> <a name="parameters_in_cache_key_and_forwarded_to_origin" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.putCachePolicyConfig.parameter.parametersInCacheKeyAndForwardedToOrigin"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOrigin">CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOrigin</a>

The HTTP headers, cookies, and URL query strings to include in the cache key.

The values included in the cache key are also included in requests that CloudFront sends to the origin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudfront_cache_policy#parameters_in_cache_key_and_forwarded_to_origin CloudfrontCachePolicy#parameters_in_cache_key_and_forwarded_to_origin}

---

###### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.putCachePolicyConfig.parameter.comment"></a>

- *Type:* str

A comment to describe the cache policy. The comment cannot be longer than 128 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudfront_cache_policy#comment CloudfrontCachePolicy#comment}

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a CloudfrontCachePolicy resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.isConstruct"></a>

```python
from cdktn_provider_awscc import cloudfront_cache_policy

cloudfrontCachePolicy.CloudfrontCachePolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.isTerraformElement"></a>

```python
from cdktn_provider_awscc import cloudfront_cache_policy

cloudfrontCachePolicy.CloudfrontCachePolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.isTerraformResource"></a>

```python
from cdktn_provider_awscc import cloudfront_cache_policy

cloudfrontCachePolicy.CloudfrontCachePolicy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import cloudfront_cache_policy

cloudfrontCachePolicy.CloudfrontCachePolicy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a CloudfrontCachePolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CloudfrontCachePolicy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CloudfrontCachePolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudfront_cache_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CloudfrontCachePolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.property.cachePolicyConfig">cache_policy_config</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigOutputReference">CloudfrontCachePolicyCachePolicyConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.property.cachePolicyId">cache_policy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.property.lastModifiedTime">last_modified_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.property.cachePolicyConfigInput">cache_policy_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfig">CloudfrontCachePolicyCachePolicyConfig</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `cache_policy_config`<sup>Required</sup> <a name="cache_policy_config" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.property.cachePolicyConfig"></a>

```python
cache_policy_config: CloudfrontCachePolicyCachePolicyConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigOutputReference">CloudfrontCachePolicyCachePolicyConfigOutputReference</a>

---

##### `cache_policy_id`<sup>Required</sup> <a name="cache_policy_id" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.property.cachePolicyId"></a>

```python
cache_policy_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `last_modified_time`<sup>Required</sup> <a name="last_modified_time" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.property.lastModifiedTime"></a>

```python
last_modified_time: str
```

- *Type:* str

---

##### `cache_policy_config_input`<sup>Optional</sup> <a name="cache_policy_config_input" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.property.cachePolicyConfigInput"></a>

```python
cache_policy_config_input: IResolvable | CloudfrontCachePolicyCachePolicyConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfig">CloudfrontCachePolicyCachePolicyConfig</a>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CloudfrontCachePolicyCachePolicyConfig <a name="CloudfrontCachePolicyCachePolicyConfig" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfig.Initializer"></a>

```python
from cdktn_provider_awscc import cloudfront_cache_policy

cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfig(
  default_ttl: typing.Union[int, float],
  max_ttl: typing.Union[int, float],
  min_ttl: typing.Union[int, float],
  name: str,
  parameters_in_cache_key_and_forwarded_to_origin: CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOrigin,
  comment: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfig.property.defaultTtl">default_ttl</a></code> | <code>typing.Union[int, float]</code> | The default amount of time, in seconds, that you want objects to stay in the CloudFront cache before CloudFront sends another request to the origin to see if the object has been updated. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfig.property.maxTtl">max_ttl</a></code> | <code>typing.Union[int, float]</code> | The maximum amount of time, in seconds, that objects stay in the CloudFront cache before CloudFront sends another request to the origin to see if the object has been updated. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfig.property.minTtl">min_ttl</a></code> | <code>typing.Union[int, float]</code> | The minimum amount of time, in seconds, that you want objects to stay in the CloudFront cache before CloudFront sends another request to the origin to see if the object has been updated. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfig.property.name">name</a></code> | <code>str</code> | A unique name to identify the cache policy. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfig.property.parametersInCacheKeyAndForwardedToOrigin">parameters_in_cache_key_and_forwarded_to_origin</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOrigin">CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOrigin</a></code> | The HTTP headers, cookies, and URL query strings to include in the cache key. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfig.property.comment">comment</a></code> | <code>str</code> | A comment to describe the cache policy. The comment cannot be longer than 128 characters. |

---

##### `default_ttl`<sup>Required</sup> <a name="default_ttl" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfig.property.defaultTtl"></a>

```python
default_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The default amount of time, in seconds, that you want objects to stay in the CloudFront cache before CloudFront sends another request to the origin to see if the object has been updated.

CloudFront uses this value as the object's time to live (TTL) only when the origin does *not* send `Cache-Control` or `Expires` headers with the object. For more information, see [Managing How Long Content Stays in an Edge Cache (Expiration)](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Expiration.html) in the *Amazon CloudFront Developer Guide*.
The default value for this field is 86400 seconds (one day). If the value of `MinTTL` is more than 86400 seconds, then the default value for this field is the same as the value of `MinTTL`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudfront_cache_policy#default_ttl CloudfrontCachePolicy#default_ttl}

---

##### `max_ttl`<sup>Required</sup> <a name="max_ttl" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfig.property.maxTtl"></a>

```python
max_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum amount of time, in seconds, that objects stay in the CloudFront cache before CloudFront sends another request to the origin to see if the object has been updated.

CloudFront uses this value only when the origin sends `Cache-Control` or `Expires` headers with the object. For more information, see [Managing How Long Content Stays in an Edge Cache (Expiration)](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Expiration.html) in the *Amazon CloudFront Developer Guide*.
The default value for this field is 31536000 seconds (one year). If the value of `MinTTL` or `DefaultTTL` is more than 31536000 seconds, then the default value for this field is the same as the value of `DefaultTTL`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudfront_cache_policy#max_ttl CloudfrontCachePolicy#max_ttl}

---

##### `min_ttl`<sup>Required</sup> <a name="min_ttl" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfig.property.minTtl"></a>

```python
min_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The minimum amount of time, in seconds, that you want objects to stay in the CloudFront cache before CloudFront sends another request to the origin to see if the object has been updated.

For more information, see [Managing How Long Content Stays in an Edge Cache (Expiration)](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Expiration.html) in the *Amazon CloudFront Developer Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudfront_cache_policy#min_ttl CloudfrontCachePolicy#min_ttl}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfig.property.name"></a>

```python
name: str
```

- *Type:* str

A unique name to identify the cache policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudfront_cache_policy#name CloudfrontCachePolicy#name}

---

##### `parameters_in_cache_key_and_forwarded_to_origin`<sup>Required</sup> <a name="parameters_in_cache_key_and_forwarded_to_origin" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfig.property.parametersInCacheKeyAndForwardedToOrigin"></a>

```python
parameters_in_cache_key_and_forwarded_to_origin: CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOrigin
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOrigin">CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOrigin</a>

The HTTP headers, cookies, and URL query strings to include in the cache key.

The values included in the cache key are also included in requests that CloudFront sends to the origin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudfront_cache_policy#parameters_in_cache_key_and_forwarded_to_origin CloudfrontCachePolicy#parameters_in_cache_key_and_forwarded_to_origin}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfig.property.comment"></a>

```python
comment: str
```

- *Type:* str

A comment to describe the cache policy. The comment cannot be longer than 128 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudfront_cache_policy#comment CloudfrontCachePolicy#comment}

---

### CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOrigin <a name="CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOrigin" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOrigin"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOrigin.Initializer"></a>

```python
from cdktn_provider_awscc import cloudfront_cache_policy

cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOrigin(
  cookies_config: CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfig,
  enable_accept_encoding_gzip: bool | IResolvable,
  headers_config: CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfig,
  query_strings_config: CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfig,
  enable_accept_encoding_brotli: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOrigin.property.cookiesConfig">cookies_config</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfig">CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfig</a></code> | An object that determines whether any cookies in viewer requests (and if so, which cookies) are included in the cache key and in requests that CloudFront sends to the origin. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOrigin.property.enableAcceptEncodingGzip">enable_accept_encoding_gzip</a></code> | <code>bool \| cdktn.IResolvable</code> | A flag that can affect whether the ``Accept-Encoding`` HTTP header is included in the cache key and included in requests that CloudFront sends to the origin. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOrigin.property.headersConfig">headers_config</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfig">CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfig</a></code> | An object that determines whether any HTTP headers (and if so, which headers) are included in the cache key and in requests that CloudFront sends to the origin. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOrigin.property.queryStringsConfig">query_strings_config</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfig">CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfig</a></code> | An object that determines whether any URL query strings in viewer requests (and if so, which query strings) are included in the cache key and in requests that CloudFront sends to the origin. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOrigin.property.enableAcceptEncodingBrotli">enable_accept_encoding_brotli</a></code> | <code>bool \| cdktn.IResolvable</code> | A flag that can affect whether the ``Accept-Encoding`` HTTP header is included in the cache key and included in requests that CloudFront sends to the origin. |

---

##### `cookies_config`<sup>Required</sup> <a name="cookies_config" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOrigin.property.cookiesConfig"></a>

```python
cookies_config: CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfig">CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfig</a>

An object that determines whether any cookies in viewer requests (and if so, which cookies) are included in the cache key and in requests that CloudFront sends to the origin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudfront_cache_policy#cookies_config CloudfrontCachePolicy#cookies_config}

---

##### `enable_accept_encoding_gzip`<sup>Required</sup> <a name="enable_accept_encoding_gzip" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOrigin.property.enableAcceptEncodingGzip"></a>

```python
enable_accept_encoding_gzip: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

A flag that can affect whether the ``Accept-Encoding`` HTTP header is included in the cache key and included in requests that CloudFront sends to the origin.

This field is related to the `EnableAcceptEncodingBrotli` field. If one or both of these fields is `true`*and* the viewer request includes the `Accept-Encoding` header, then CloudFront does the following:

* Normalizes the value of the viewer's `Accept-Encoding` header
* Includes the normalized header in the cache key
* Includes the normalized header in the request to the origin, if a request is necessary

For more information, see [Compression support](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-policy-compressed-objects) in the *Amazon CloudFront Developer Guide*.
If you set this value to `true`, and this cache behavior also has an origin request policy attached, do not include the `Accept-Encoding` header in the origin request policy. CloudFront always includes the `Accept-Encoding` header in origin requests when the value of this field is `true`, so including this header in an origin request policy has no effect.
If both of these fields are `false`, then CloudFront treats the `Accept-Encoding` header the same as any other HTTP header in the viewer request. By default, it's not included in the cache key and it's not included in origin requests. In this case, you can manually add `Accept-Encoding` to the headers whitelist like any other HTTP header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudfront_cache_policy#enable_accept_encoding_gzip CloudfrontCachePolicy#enable_accept_encoding_gzip}

---

##### `headers_config`<sup>Required</sup> <a name="headers_config" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOrigin.property.headersConfig"></a>

```python
headers_config: CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfig">CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfig</a>

An object that determines whether any HTTP headers (and if so, which headers) are included in the cache key and in requests that CloudFront sends to the origin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudfront_cache_policy#headers_config CloudfrontCachePolicy#headers_config}

---

##### `query_strings_config`<sup>Required</sup> <a name="query_strings_config" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOrigin.property.queryStringsConfig"></a>

```python
query_strings_config: CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfig">CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfig</a>

An object that determines whether any URL query strings in viewer requests (and if so, which query strings) are included in the cache key and in requests that CloudFront sends to the origin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudfront_cache_policy#query_strings_config CloudfrontCachePolicy#query_strings_config}

---

##### `enable_accept_encoding_brotli`<sup>Optional</sup> <a name="enable_accept_encoding_brotli" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOrigin.property.enableAcceptEncodingBrotli"></a>

```python
enable_accept_encoding_brotli: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

A flag that can affect whether the ``Accept-Encoding`` HTTP header is included in the cache key and included in requests that CloudFront sends to the origin.

This field is related to the `EnableAcceptEncodingGzip` field. If one or both of these fields is `true`*and* the viewer request includes the `Accept-Encoding` header, then CloudFront does the following:

* Normalizes the value of the viewer's `Accept-Encoding` header
* Includes the normalized header in the cache key
* Includes the normalized header in the request to the origin, if a request is necessary

For more information, see [Compression support](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-policy-compressed-objects) in the *Amazon CloudFront Developer Guide*.
If you set this value to `true`, and this cache behavior also has an origin request policy attached, do not include the `Accept-Encoding` header in the origin request policy. CloudFront always includes the `Accept-Encoding` header in origin requests when the value of this field is `true`, so including this header in an origin request policy has no effect.
If both of these fields are `false`, then CloudFront treats the `Accept-Encoding` header the same as any other HTTP header in the viewer request. By default, it's not included in the cache key and it's not included in origin requests. In this case, you can manually add `Accept-Encoding` to the headers whitelist like any other HTTP header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudfront_cache_policy#enable_accept_encoding_brotli CloudfrontCachePolicy#enable_accept_encoding_brotli}

---

### CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfig <a name="CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfig" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfig.Initializer"></a>

```python
from cdktn_provider_awscc import cloudfront_cache_policy

cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfig(
  cookie_behavior: str,
  cookies: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfig.property.cookieBehavior">cookie_behavior</a></code> | <code>str</code> | Determines whether any cookies in viewer requests are included in the cache key and in requests that CloudFront sends to the origin. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfig.property.cookies">cookies</a></code> | <code>typing.List[str]</code> | Contains a list of cookie names. |

---

##### `cookie_behavior`<sup>Required</sup> <a name="cookie_behavior" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfig.property.cookieBehavior"></a>

```python
cookie_behavior: str
```

- *Type:* str

Determines whether any cookies in viewer requests are included in the cache key and in requests that CloudFront sends to the origin.

Valid values are:

* `none` ? No cookies in viewer requests are included in the cache key or in requests that CloudFront sends to the origin. Even when this field is set to `none`, any cookies that are listed in an `OriginRequestPolicy`*are* included in origin requests.
* `whitelist` ? Only the cookies in viewer requests that are listed in the `CookieNames` type are included in the cache key and in requests that CloudFront sends to the origin.
* `allExcept` ? All cookies in viewer requests are included in the cache key and in requests that CloudFront sends to the origin, *except* for those that are listed in the `CookieNames` type, which are not included.
* `all` ? All cookies in viewer requests are included in the cache key and in requests that CloudFront sends to the origin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudfront_cache_policy#cookie_behavior CloudfrontCachePolicy#cookie_behavior}

---

##### `cookies`<sup>Optional</sup> <a name="cookies" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfig.property.cookies"></a>

```python
cookies: typing.List[str]
```

- *Type:* typing.List[str]

Contains a list of cookie names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudfront_cache_policy#cookies CloudfrontCachePolicy#cookies}

---

### CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfig <a name="CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfig" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfig.Initializer"></a>

```python
from cdktn_provider_awscc import cloudfront_cache_policy

cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfig(
  header_behavior: str,
  headers: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfig.property.headerBehavior">header_behavior</a></code> | <code>str</code> | Determines whether any HTTP headers are included in the cache key and in requests that CloudFront sends to the origin. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfig.property.headers">headers</a></code> | <code>typing.List[str]</code> | Contains a list of HTTP header names. |

---

##### `header_behavior`<sup>Required</sup> <a name="header_behavior" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfig.property.headerBehavior"></a>

```python
header_behavior: str
```

- *Type:* str

Determines whether any HTTP headers are included in the cache key and in requests that CloudFront sends to the origin.

Valid values are:

* `none` ? No HTTP headers are included in the cache key or in requests that CloudFront sends to the origin. Even when this field is set to `none`, any headers that are listed in an `OriginRequestPolicy`*are* included in origin requests.
* `whitelist` ? Only the HTTP headers that are listed in the `Headers` type are included in the cache key and in requests that CloudFront sends to the origin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudfront_cache_policy#header_behavior CloudfrontCachePolicy#header_behavior}

---

##### `headers`<sup>Optional</sup> <a name="headers" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfig.property.headers"></a>

```python
headers: typing.List[str]
```

- *Type:* typing.List[str]

Contains a list of HTTP header names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudfront_cache_policy#headers CloudfrontCachePolicy#headers}

---

### CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfig <a name="CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfig" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfig.Initializer"></a>

```python
from cdktn_provider_awscc import cloudfront_cache_policy

cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfig(
  query_string_behavior: str,
  query_strings: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfig.property.queryStringBehavior">query_string_behavior</a></code> | <code>str</code> | Determines whether any URL query strings in viewer requests are included in the cache key and in requests that CloudFront sends to the origin. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfig.property.queryStrings">query_strings</a></code> | <code>typing.List[str]</code> | Contains a list of query string names. |

---

##### `query_string_behavior`<sup>Required</sup> <a name="query_string_behavior" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfig.property.queryStringBehavior"></a>

```python
query_string_behavior: str
```

- *Type:* str

Determines whether any URL query strings in viewer requests are included in the cache key and in requests that CloudFront sends to the origin.

Valid values are:

* `none` ? No query strings in viewer requests are included in the cache key or in requests that CloudFront sends to the origin. Even when this field is set to `none`, any query strings that are listed in an `OriginRequestPolicy`*are* included in origin requests.
* `whitelist` ? Only the query strings in viewer requests that are listed in the `QueryStringNames` type are included in the cache key and in requests that CloudFront sends to the origin.
* `allExcept` ? All query strings in viewer requests are included in the cache key and in requests that CloudFront sends to the origin, *except* those that are listed in the `QueryStringNames` type, which are not included.
* `all` ? All query strings in viewer requests are included in the cache key and in requests that CloudFront sends to the origin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudfront_cache_policy#query_string_behavior CloudfrontCachePolicy#query_string_behavior}

---

##### `query_strings`<sup>Optional</sup> <a name="query_strings" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfig.property.queryStrings"></a>

```python
query_strings: typing.List[str]
```

- *Type:* typing.List[str]

Contains a list of query string names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudfront_cache_policy#query_strings CloudfrontCachePolicy#query_strings}

---

### CloudfrontCachePolicyConfig <a name="CloudfrontCachePolicyConfig" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyConfig.Initializer"></a>

```python
from cdktn_provider_awscc import cloudfront_cache_policy

cloudfrontCachePolicy.CloudfrontCachePolicyConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  cache_policy_config: CloudfrontCachePolicyCachePolicyConfig
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyConfig.property.cachePolicyConfig">cache_policy_config</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfig">CloudfrontCachePolicyCachePolicyConfig</a></code> | The cache policy configuration. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `cache_policy_config`<sup>Required</sup> <a name="cache_policy_config" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyConfig.property.cachePolicyConfig"></a>

```python
cache_policy_config: CloudfrontCachePolicyCachePolicyConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfig">CloudfrontCachePolicyCachePolicyConfig</a>

The cache policy configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudfront_cache_policy#cache_policy_config CloudfrontCachePolicy#cache_policy_config}

---

## Classes <a name="Classes" id="Classes"></a>

### CloudfrontCachePolicyCachePolicyConfigOutputReference <a name="CloudfrontCachePolicyCachePolicyConfigOutputReference" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cloudfront_cache_policy

cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigOutputReference.putParametersInCacheKeyAndForwardedToOrigin">put_parameters_in_cache_key_and_forwarded_to_origin</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigOutputReference.resetComment">reset_comment</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_parameters_in_cache_key_and_forwarded_to_origin` <a name="put_parameters_in_cache_key_and_forwarded_to_origin" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigOutputReference.putParametersInCacheKeyAndForwardedToOrigin"></a>

```python
def put_parameters_in_cache_key_and_forwarded_to_origin(
  cookies_config: CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfig,
  enable_accept_encoding_gzip: bool | IResolvable,
  headers_config: CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfig,
  query_strings_config: CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfig,
  enable_accept_encoding_brotli: bool | IResolvable = None
) -> None
```

###### `cookies_config`<sup>Required</sup> <a name="cookies_config" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigOutputReference.putParametersInCacheKeyAndForwardedToOrigin.parameter.cookiesConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfig">CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfig</a>

An object that determines whether any cookies in viewer requests (and if so, which cookies) are included in the cache key and in requests that CloudFront sends to the origin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudfront_cache_policy#cookies_config CloudfrontCachePolicy#cookies_config}

---

###### `enable_accept_encoding_gzip`<sup>Required</sup> <a name="enable_accept_encoding_gzip" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigOutputReference.putParametersInCacheKeyAndForwardedToOrigin.parameter.enableAcceptEncodingGzip"></a>

- *Type:* bool | cdktn.IResolvable

A flag that can affect whether the ``Accept-Encoding`` HTTP header is included in the cache key and included in requests that CloudFront sends to the origin.

This field is related to the `EnableAcceptEncodingBrotli` field. If one or both of these fields is `true`*and* the viewer request includes the `Accept-Encoding` header, then CloudFront does the following:

* Normalizes the value of the viewer's `Accept-Encoding` header
* Includes the normalized header in the cache key
* Includes the normalized header in the request to the origin, if a request is necessary

For more information, see [Compression support](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-policy-compressed-objects) in the *Amazon CloudFront Developer Guide*.
If you set this value to `true`, and this cache behavior also has an origin request policy attached, do not include the `Accept-Encoding` header in the origin request policy. CloudFront always includes the `Accept-Encoding` header in origin requests when the value of this field is `true`, so including this header in an origin request policy has no effect.
If both of these fields are `false`, then CloudFront treats the `Accept-Encoding` header the same as any other HTTP header in the viewer request. By default, it's not included in the cache key and it's not included in origin requests. In this case, you can manually add `Accept-Encoding` to the headers whitelist like any other HTTP header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudfront_cache_policy#enable_accept_encoding_gzip CloudfrontCachePolicy#enable_accept_encoding_gzip}

---

###### `headers_config`<sup>Required</sup> <a name="headers_config" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigOutputReference.putParametersInCacheKeyAndForwardedToOrigin.parameter.headersConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfig">CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfig</a>

An object that determines whether any HTTP headers (and if so, which headers) are included in the cache key and in requests that CloudFront sends to the origin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudfront_cache_policy#headers_config CloudfrontCachePolicy#headers_config}

---

###### `query_strings_config`<sup>Required</sup> <a name="query_strings_config" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigOutputReference.putParametersInCacheKeyAndForwardedToOrigin.parameter.queryStringsConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfig">CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfig</a>

An object that determines whether any URL query strings in viewer requests (and if so, which query strings) are included in the cache key and in requests that CloudFront sends to the origin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudfront_cache_policy#query_strings_config CloudfrontCachePolicy#query_strings_config}

---

###### `enable_accept_encoding_brotli`<sup>Optional</sup> <a name="enable_accept_encoding_brotli" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigOutputReference.putParametersInCacheKeyAndForwardedToOrigin.parameter.enableAcceptEncodingBrotli"></a>

- *Type:* bool | cdktn.IResolvable

A flag that can affect whether the ``Accept-Encoding`` HTTP header is included in the cache key and included in requests that CloudFront sends to the origin.

This field is related to the `EnableAcceptEncodingGzip` field. If one or both of these fields is `true`*and* the viewer request includes the `Accept-Encoding` header, then CloudFront does the following:

* Normalizes the value of the viewer's `Accept-Encoding` header
* Includes the normalized header in the cache key
* Includes the normalized header in the request to the origin, if a request is necessary

For more information, see [Compression support](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-policy-compressed-objects) in the *Amazon CloudFront Developer Guide*.
If you set this value to `true`, and this cache behavior also has an origin request policy attached, do not include the `Accept-Encoding` header in the origin request policy. CloudFront always includes the `Accept-Encoding` header in origin requests when the value of this field is `true`, so including this header in an origin request policy has no effect.
If both of these fields are `false`, then CloudFront treats the `Accept-Encoding` header the same as any other HTTP header in the viewer request. By default, it's not included in the cache key and it's not included in origin requests. In this case, you can manually add `Accept-Encoding` to the headers whitelist like any other HTTP header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudfront_cache_policy#enable_accept_encoding_brotli CloudfrontCachePolicy#enable_accept_encoding_brotli}

---

##### `reset_comment` <a name="reset_comment" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigOutputReference.resetComment"></a>

```python
def reset_comment() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigOutputReference.property.parametersInCacheKeyAndForwardedToOrigin">parameters_in_cache_key_and_forwarded_to_origin</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginOutputReference">CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigOutputReference.property.commentInput">comment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigOutputReference.property.defaultTtlInput">default_ttl_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigOutputReference.property.maxTtlInput">max_ttl_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigOutputReference.property.minTtlInput">min_ttl_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigOutputReference.property.parametersInCacheKeyAndForwardedToOriginInput">parameters_in_cache_key_and_forwarded_to_origin_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOrigin">CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOrigin</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigOutputReference.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigOutputReference.property.defaultTtl">default_ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigOutputReference.property.maxTtl">max_ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigOutputReference.property.minTtl">min_ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfig">CloudfrontCachePolicyCachePolicyConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `parameters_in_cache_key_and_forwarded_to_origin`<sup>Required</sup> <a name="parameters_in_cache_key_and_forwarded_to_origin" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigOutputReference.property.parametersInCacheKeyAndForwardedToOrigin"></a>

```python
parameters_in_cache_key_and_forwarded_to_origin: CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginOutputReference">CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginOutputReference</a>

---

##### `comment_input`<sup>Optional</sup> <a name="comment_input" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigOutputReference.property.commentInput"></a>

```python
comment_input: str
```

- *Type:* str

---

##### `default_ttl_input`<sup>Optional</sup> <a name="default_ttl_input" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigOutputReference.property.defaultTtlInput"></a>

```python
default_ttl_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_ttl_input`<sup>Optional</sup> <a name="max_ttl_input" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigOutputReference.property.maxTtlInput"></a>

```python
max_ttl_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_ttl_input`<sup>Optional</sup> <a name="min_ttl_input" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigOutputReference.property.minTtlInput"></a>

```python
min_ttl_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `parameters_in_cache_key_and_forwarded_to_origin_input`<sup>Optional</sup> <a name="parameters_in_cache_key_and_forwarded_to_origin_input" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigOutputReference.property.parametersInCacheKeyAndForwardedToOriginInput"></a>

```python
parameters_in_cache_key_and_forwarded_to_origin_input: IResolvable | CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOrigin
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOrigin">CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOrigin</a>

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigOutputReference.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `default_ttl`<sup>Required</sup> <a name="default_ttl" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigOutputReference.property.defaultTtl"></a>

```python
default_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_ttl`<sup>Required</sup> <a name="max_ttl" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigOutputReference.property.maxTtl"></a>

```python
max_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_ttl`<sup>Required</sup> <a name="min_ttl" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigOutputReference.property.minTtl"></a>

```python
min_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CloudfrontCachePolicyCachePolicyConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfig">CloudfrontCachePolicyCachePolicyConfig</a>

---


### CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference <a name="CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cloudfront_cache_policy

cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.resetCookies">reset_cookies</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cookies` <a name="reset_cookies" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.resetCookies"></a>

```python
def reset_cookies() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.property.cookieBehaviorInput">cookie_behavior_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.property.cookiesInput">cookies_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.property.cookieBehavior">cookie_behavior</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.property.cookies">cookies</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfig">CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cookie_behavior_input`<sup>Optional</sup> <a name="cookie_behavior_input" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.property.cookieBehaviorInput"></a>

```python
cookie_behavior_input: str
```

- *Type:* str

---

##### `cookies_input`<sup>Optional</sup> <a name="cookies_input" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.property.cookiesInput"></a>

```python
cookies_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `cookie_behavior`<sup>Required</sup> <a name="cookie_behavior" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.property.cookieBehavior"></a>

```python
cookie_behavior: str
```

- *Type:* str

---

##### `cookies`<sup>Required</sup> <a name="cookies" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.property.cookies"></a>

```python
cookies: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfig">CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfig</a>

---


### CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference <a name="CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cloudfront_cache_policy

cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.resetHeaders">reset_headers</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_headers` <a name="reset_headers" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.resetHeaders"></a>

```python
def reset_headers() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.property.headerBehaviorInput">header_behavior_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.property.headersInput">headers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.property.headerBehavior">header_behavior</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.property.headers">headers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfig">CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `header_behavior_input`<sup>Optional</sup> <a name="header_behavior_input" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.property.headerBehaviorInput"></a>

```python
header_behavior_input: str
```

- *Type:* str

---

##### `headers_input`<sup>Optional</sup> <a name="headers_input" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.property.headersInput"></a>

```python
headers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `header_behavior`<sup>Required</sup> <a name="header_behavior" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.property.headerBehavior"></a>

```python
header_behavior: str
```

- *Type:* str

---

##### `headers`<sup>Required</sup> <a name="headers" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.property.headers"></a>

```python
headers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfig">CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfig</a>

---


### CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginOutputReference <a name="CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginOutputReference" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cloudfront_cache_policy

cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginOutputReference.putCookiesConfig">put_cookies_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginOutputReference.putHeadersConfig">put_headers_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginOutputReference.putQueryStringsConfig">put_query_strings_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginOutputReference.resetEnableAcceptEncodingBrotli">reset_enable_accept_encoding_brotli</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_cookies_config` <a name="put_cookies_config" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginOutputReference.putCookiesConfig"></a>

```python
def put_cookies_config(
  cookie_behavior: str,
  cookies: typing.List[str] = None
) -> None
```

###### `cookie_behavior`<sup>Required</sup> <a name="cookie_behavior" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginOutputReference.putCookiesConfig.parameter.cookieBehavior"></a>

- *Type:* str

Determines whether any cookies in viewer requests are included in the cache key and in requests that CloudFront sends to the origin.

Valid values are:

* `none` ? No cookies in viewer requests are included in the cache key or in requests that CloudFront sends to the origin. Even when this field is set to `none`, any cookies that are listed in an `OriginRequestPolicy`*are* included in origin requests.
* `whitelist` ? Only the cookies in viewer requests that are listed in the `CookieNames` type are included in the cache key and in requests that CloudFront sends to the origin.
* `allExcept` ? All cookies in viewer requests are included in the cache key and in requests that CloudFront sends to the origin, *except* for those that are listed in the `CookieNames` type, which are not included.
* `all` ? All cookies in viewer requests are included in the cache key and in requests that CloudFront sends to the origin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudfront_cache_policy#cookie_behavior CloudfrontCachePolicy#cookie_behavior}

---

###### `cookies`<sup>Optional</sup> <a name="cookies" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginOutputReference.putCookiesConfig.parameter.cookies"></a>

- *Type:* typing.List[str]

Contains a list of cookie names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudfront_cache_policy#cookies CloudfrontCachePolicy#cookies}

---

##### `put_headers_config` <a name="put_headers_config" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginOutputReference.putHeadersConfig"></a>

```python
def put_headers_config(
  header_behavior: str,
  headers: typing.List[str] = None
) -> None
```

###### `header_behavior`<sup>Required</sup> <a name="header_behavior" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginOutputReference.putHeadersConfig.parameter.headerBehavior"></a>

- *Type:* str

Determines whether any HTTP headers are included in the cache key and in requests that CloudFront sends to the origin.

Valid values are:

* `none` ? No HTTP headers are included in the cache key or in requests that CloudFront sends to the origin. Even when this field is set to `none`, any headers that are listed in an `OriginRequestPolicy`*are* included in origin requests.
* `whitelist` ? Only the HTTP headers that are listed in the `Headers` type are included in the cache key and in requests that CloudFront sends to the origin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudfront_cache_policy#header_behavior CloudfrontCachePolicy#header_behavior}

---

###### `headers`<sup>Optional</sup> <a name="headers" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginOutputReference.putHeadersConfig.parameter.headers"></a>

- *Type:* typing.List[str]

Contains a list of HTTP header names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudfront_cache_policy#headers CloudfrontCachePolicy#headers}

---

##### `put_query_strings_config` <a name="put_query_strings_config" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginOutputReference.putQueryStringsConfig"></a>

```python
def put_query_strings_config(
  query_string_behavior: str,
  query_strings: typing.List[str] = None
) -> None
```

###### `query_string_behavior`<sup>Required</sup> <a name="query_string_behavior" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginOutputReference.putQueryStringsConfig.parameter.queryStringBehavior"></a>

- *Type:* str

Determines whether any URL query strings in viewer requests are included in the cache key and in requests that CloudFront sends to the origin.

Valid values are:

* `none` ? No query strings in viewer requests are included in the cache key or in requests that CloudFront sends to the origin. Even when this field is set to `none`, any query strings that are listed in an `OriginRequestPolicy`*are* included in origin requests.
* `whitelist` ? Only the query strings in viewer requests that are listed in the `QueryStringNames` type are included in the cache key and in requests that CloudFront sends to the origin.
* `allExcept` ? All query strings in viewer requests are included in the cache key and in requests that CloudFront sends to the origin, *except* those that are listed in the `QueryStringNames` type, which are not included.
* `all` ? All query strings in viewer requests are included in the cache key and in requests that CloudFront sends to the origin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudfront_cache_policy#query_string_behavior CloudfrontCachePolicy#query_string_behavior}

---

###### `query_strings`<sup>Optional</sup> <a name="query_strings" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginOutputReference.putQueryStringsConfig.parameter.queryStrings"></a>

- *Type:* typing.List[str]

Contains a list of query string names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudfront_cache_policy#query_strings CloudfrontCachePolicy#query_strings}

---

##### `reset_enable_accept_encoding_brotli` <a name="reset_enable_accept_encoding_brotli" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginOutputReference.resetEnableAcceptEncodingBrotli"></a>

```python
def reset_enable_accept_encoding_brotli() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginOutputReference.property.cookiesConfig">cookies_config</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference">CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginOutputReference.property.headersConfig">headers_config</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference">CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginOutputReference.property.queryStringsConfig">query_strings_config</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference">CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginOutputReference.property.cookiesConfigInput">cookies_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfig">CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginOutputReference.property.enableAcceptEncodingBrotliInput">enable_accept_encoding_brotli_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginOutputReference.property.enableAcceptEncodingGzipInput">enable_accept_encoding_gzip_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginOutputReference.property.headersConfigInput">headers_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfig">CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginOutputReference.property.queryStringsConfigInput">query_strings_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfig">CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginOutputReference.property.enableAcceptEncodingBrotli">enable_accept_encoding_brotli</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginOutputReference.property.enableAcceptEncodingGzip">enable_accept_encoding_gzip</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOrigin">CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOrigin</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cookies_config`<sup>Required</sup> <a name="cookies_config" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginOutputReference.property.cookiesConfig"></a>

```python
cookies_config: CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference">CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference</a>

---

##### `headers_config`<sup>Required</sup> <a name="headers_config" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginOutputReference.property.headersConfig"></a>

```python
headers_config: CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference">CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference</a>

---

##### `query_strings_config`<sup>Required</sup> <a name="query_strings_config" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginOutputReference.property.queryStringsConfig"></a>

```python
query_strings_config: CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference">CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference</a>

---

##### `cookies_config_input`<sup>Optional</sup> <a name="cookies_config_input" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginOutputReference.property.cookiesConfigInput"></a>

```python
cookies_config_input: IResolvable | CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfig">CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginCookiesConfig</a>

---

##### `enable_accept_encoding_brotli_input`<sup>Optional</sup> <a name="enable_accept_encoding_brotli_input" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginOutputReference.property.enableAcceptEncodingBrotliInput"></a>

```python
enable_accept_encoding_brotli_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enable_accept_encoding_gzip_input`<sup>Optional</sup> <a name="enable_accept_encoding_gzip_input" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginOutputReference.property.enableAcceptEncodingGzipInput"></a>

```python
enable_accept_encoding_gzip_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `headers_config_input`<sup>Optional</sup> <a name="headers_config_input" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginOutputReference.property.headersConfigInput"></a>

```python
headers_config_input: IResolvable | CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfig">CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginHeadersConfig</a>

---

##### `query_strings_config_input`<sup>Optional</sup> <a name="query_strings_config_input" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginOutputReference.property.queryStringsConfigInput"></a>

```python
query_strings_config_input: IResolvable | CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfig">CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfig</a>

---

##### `enable_accept_encoding_brotli`<sup>Required</sup> <a name="enable_accept_encoding_brotli" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginOutputReference.property.enableAcceptEncodingBrotli"></a>

```python
enable_accept_encoding_brotli: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enable_accept_encoding_gzip`<sup>Required</sup> <a name="enable_accept_encoding_gzip" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginOutputReference.property.enableAcceptEncodingGzip"></a>

```python
enable_accept_encoding_gzip: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOrigin
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOrigin">CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOrigin</a>

---


### CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference <a name="CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cloudfront_cache_policy

cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.resetQueryStrings">reset_query_strings</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_query_strings` <a name="reset_query_strings" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.resetQueryStrings"></a>

```python
def reset_query_strings() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.property.queryStringBehaviorInput">query_string_behavior_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.property.queryStringsInput">query_strings_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.property.queryStringBehavior">query_string_behavior</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.property.queryStrings">query_strings</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfig">CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `query_string_behavior_input`<sup>Optional</sup> <a name="query_string_behavior_input" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.property.queryStringBehaviorInput"></a>

```python
query_string_behavior_input: str
```

- *Type:* str

---

##### `query_strings_input`<sup>Optional</sup> <a name="query_strings_input" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.property.queryStringsInput"></a>

```python
query_strings_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `query_string_behavior`<sup>Required</sup> <a name="query_string_behavior" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.property.queryStringBehavior"></a>

```python
query_string_behavior: str
```

- *Type:* str

---

##### `query_strings`<sup>Required</sup> <a name="query_strings" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.property.queryStrings"></a>

```python
query_strings: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudfrontCachePolicy.CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfig">CloudfrontCachePolicyCachePolicyConfigParametersInCacheKeyAndForwardedToOriginQueryStringsConfig</a>

---



