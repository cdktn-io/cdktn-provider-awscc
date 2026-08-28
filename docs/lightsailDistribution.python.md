# `lightsailDistribution` Submodule <a name="`lightsailDistribution` Submodule" id="@cdktn/provider-awscc.lightsailDistribution"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LightsailDistribution <a name="LightsailDistribution" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_distribution awscc_lightsail_distribution}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.Initializer"></a>

```python
from cdktn_provider_awscc import lightsail_distribution

lightsailDistribution.LightsailDistribution(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  bundle_id: str,
  default_cache_behavior: LightsailDistributionDefaultCacheBehavior,
  distribution_name: str,
  origin: LightsailDistributionOrigin,
  cache_behaviors: IResolvable | typing.List[LightsailDistributionCacheBehaviors] = None,
  cache_behavior_settings: LightsailDistributionCacheBehaviorSettings = None,
  certificate_name: str = None,
  ip_address_type: str = None,
  is_enabled: bool | IResolvable = None,
  tags: IResolvable | typing.List[LightsailDistributionTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.Initializer.parameter.bundleId">bundle_id</a></code> | <code>str</code> | The bundle ID to use for the distribution. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.Initializer.parameter.defaultCacheBehavior">default_cache_behavior</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehavior">LightsailDistributionDefaultCacheBehavior</a></code> | An object that describes the default cache behavior for the distribution. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.Initializer.parameter.distributionName">distribution_name</a></code> | <code>str</code> | The name for the distribution. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.Initializer.parameter.origin">origin</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOrigin">LightsailDistributionOrigin</a></code> | An object that describes the origin resource for the distribution, such as a Lightsail instance or load balancer. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.Initializer.parameter.cacheBehaviors">cache_behaviors</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviors">LightsailDistributionCacheBehaviors</a>]</code> | An array of objects that describe the per-path cache behavior for the distribution. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.Initializer.parameter.cacheBehaviorSettings">cache_behavior_settings</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettings">LightsailDistributionCacheBehaviorSettings</a></code> | An object that describes the cache behavior settings for the distribution. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.Initializer.parameter.certificateName">certificate_name</a></code> | <code>str</code> | The certificate attached to the Distribution. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.Initializer.parameter.ipAddressType">ip_address_type</a></code> | <code>str</code> | The IP address type for the distribution. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.Initializer.parameter.isEnabled">is_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates whether the distribution is enabled. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTags">LightsailDistributionTags</a>]</code> | An array of key-value pairs to apply to this resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `bundle_id`<sup>Required</sup> <a name="bundle_id" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.Initializer.parameter.bundleId"></a>

- *Type:* str

The bundle ID to use for the distribution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_distribution#bundle_id LightsailDistribution#bundle_id}

---

##### `default_cache_behavior`<sup>Required</sup> <a name="default_cache_behavior" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.Initializer.parameter.defaultCacheBehavior"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehavior">LightsailDistributionDefaultCacheBehavior</a>

An object that describes the default cache behavior for the distribution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_distribution#default_cache_behavior LightsailDistribution#default_cache_behavior}

---

##### `distribution_name`<sup>Required</sup> <a name="distribution_name" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.Initializer.parameter.distributionName"></a>

- *Type:* str

The name for the distribution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_distribution#distribution_name LightsailDistribution#distribution_name}

---

##### `origin`<sup>Required</sup> <a name="origin" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.Initializer.parameter.origin"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOrigin">LightsailDistributionOrigin</a>

An object that describes the origin resource for the distribution, such as a Lightsail instance or load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_distribution#origin LightsailDistribution#origin}

---

##### `cache_behaviors`<sup>Optional</sup> <a name="cache_behaviors" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.Initializer.parameter.cacheBehaviors"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviors">LightsailDistributionCacheBehaviors</a>]

An array of objects that describe the per-path cache behavior for the distribution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_distribution#cache_behaviors LightsailDistribution#cache_behaviors}

---

##### `cache_behavior_settings`<sup>Optional</sup> <a name="cache_behavior_settings" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.Initializer.parameter.cacheBehaviorSettings"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettings">LightsailDistributionCacheBehaviorSettings</a>

An object that describes the cache behavior settings for the distribution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_distribution#cache_behavior_settings LightsailDistribution#cache_behavior_settings}

---

##### `certificate_name`<sup>Optional</sup> <a name="certificate_name" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.Initializer.parameter.certificateName"></a>

- *Type:* str

The certificate attached to the Distribution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_distribution#certificate_name LightsailDistribution#certificate_name}

---

##### `ip_address_type`<sup>Optional</sup> <a name="ip_address_type" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.Initializer.parameter.ipAddressType"></a>

- *Type:* str

The IP address type for the distribution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_distribution#ip_address_type LightsailDistribution#ip_address_type}

---

##### `is_enabled`<sup>Optional</sup> <a name="is_enabled" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.Initializer.parameter.isEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Indicates whether the distribution is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_distribution#is_enabled LightsailDistribution#is_enabled}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTags">LightsailDistributionTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_distribution#tags LightsailDistribution#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.putCacheBehaviors">put_cache_behaviors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.putCacheBehaviorSettings">put_cache_behavior_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.putDefaultCacheBehavior">put_default_cache_behavior</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.putOrigin">put_origin</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.resetCacheBehaviors">reset_cache_behaviors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.resetCacheBehaviorSettings">reset_cache_behavior_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.resetCertificateName">reset_certificate_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.resetIpAddressType">reset_ip_address_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.resetIsEnabled">reset_is_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_cache_behaviors` <a name="put_cache_behaviors" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.putCacheBehaviors"></a>

```python
def put_cache_behaviors(
  value: IResolvable | typing.List[LightsailDistributionCacheBehaviors]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.putCacheBehaviors.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviors">LightsailDistributionCacheBehaviors</a>]

---

##### `put_cache_behavior_settings` <a name="put_cache_behavior_settings" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.putCacheBehaviorSettings"></a>

```python
def put_cache_behavior_settings(
  allowed_http_methods: str = None,
  cached_http_methods: str = None,
  default_ttl: typing.Union[int, float] = None,
  forwarded_cookies: LightsailDistributionCacheBehaviorSettingsForwardedCookies = None,
  forwarded_headers: LightsailDistributionCacheBehaviorSettingsForwardedHeaders = None,
  forwarded_query_strings: LightsailDistributionCacheBehaviorSettingsForwardedQueryStrings = None,
  maximum_ttl: typing.Union[int, float] = None,
  minimum_ttl: typing.Union[int, float] = None
) -> None
```

###### `allowed_http_methods`<sup>Optional</sup> <a name="allowed_http_methods" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.putCacheBehaviorSettings.parameter.allowedHttpMethods"></a>

- *Type:* str

The HTTP methods that are processed and forwarded to the distribution's origin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_distribution#allowed_http_methods LightsailDistribution#allowed_http_methods}

---

###### `cached_http_methods`<sup>Optional</sup> <a name="cached_http_methods" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.putCacheBehaviorSettings.parameter.cachedHttpMethods"></a>

- *Type:* str

The HTTP method responses that are cached by your distribution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_distribution#cached_http_methods LightsailDistribution#cached_http_methods}

---

###### `default_ttl`<sup>Optional</sup> <a name="default_ttl" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.putCacheBehaviorSettings.parameter.defaultTtl"></a>

- *Type:* typing.Union[int, float]

The default amount of time that objects stay in the distribution's cache before the distribution forwards another request to the origin to determine whether the content has been updated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_distribution#default_ttl LightsailDistribution#default_ttl}

---

###### `forwarded_cookies`<sup>Optional</sup> <a name="forwarded_cookies" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.putCacheBehaviorSettings.parameter.forwardedCookies"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookies">LightsailDistributionCacheBehaviorSettingsForwardedCookies</a>

An object that describes the cookies that are forwarded to the origin.

Your content is cached based on the cookies that are forwarded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_distribution#forwarded_cookies LightsailDistribution#forwarded_cookies}

---

###### `forwarded_headers`<sup>Optional</sup> <a name="forwarded_headers" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.putCacheBehaviorSettings.parameter.forwardedHeaders"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeaders">LightsailDistributionCacheBehaviorSettingsForwardedHeaders</a>

An object that describes the headers that are forwarded to the origin.

Your content is cached based on the headers that are forwarded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_distribution#forwarded_headers LightsailDistribution#forwarded_headers}

---

###### `forwarded_query_strings`<sup>Optional</sup> <a name="forwarded_query_strings" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.putCacheBehaviorSettings.parameter.forwardedQueryStrings"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStrings">LightsailDistributionCacheBehaviorSettingsForwardedQueryStrings</a>

An object that describes the query strings that are forwarded to the origin.

Your content is cached based on the query strings that are forwarded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_distribution#forwarded_query_strings LightsailDistribution#forwarded_query_strings}

---

###### `maximum_ttl`<sup>Optional</sup> <a name="maximum_ttl" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.putCacheBehaviorSettings.parameter.maximumTtl"></a>

- *Type:* typing.Union[int, float]

The maximum amount of time that objects stay in the distribution's cache before the distribution forwards another request to the origin to determine whether the object has been updated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_distribution#maximum_ttl LightsailDistribution#maximum_ttl}

---

###### `minimum_ttl`<sup>Optional</sup> <a name="minimum_ttl" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.putCacheBehaviorSettings.parameter.minimumTtl"></a>

- *Type:* typing.Union[int, float]

The minimum amount of time that objects stay in the distribution's cache before the distribution forwards another request to the origin to determine whether the object has been updated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_distribution#minimum_ttl LightsailDistribution#minimum_ttl}

---

##### `put_default_cache_behavior` <a name="put_default_cache_behavior" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.putDefaultCacheBehavior"></a>

```python
def put_default_cache_behavior(
  behavior: str = None
) -> None
```

###### `behavior`<sup>Optional</sup> <a name="behavior" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.putDefaultCacheBehavior.parameter.behavior"></a>

- *Type:* str

The cache behavior of the distribution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_distribution#behavior LightsailDistribution#behavior}

---

##### `put_origin` <a name="put_origin" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.putOrigin"></a>

```python
def put_origin(
  name: str = None,
  protocol_policy: str = None,
  region_name: str = None
) -> None
```

###### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.putOrigin.parameter.name"></a>

- *Type:* str

The name of the origin resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_distribution#name LightsailDistribution#name}

---

###### `protocol_policy`<sup>Optional</sup> <a name="protocol_policy" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.putOrigin.parameter.protocolPolicy"></a>

- *Type:* str

The protocol that your Amazon Lightsail distribution uses when establishing a connection with your origin to pull content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_distribution#protocol_policy LightsailDistribution#protocol_policy}

---

###### `region_name`<sup>Optional</sup> <a name="region_name" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.putOrigin.parameter.regionName"></a>

- *Type:* str

The AWS Region name of the origin resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_distribution#region_name LightsailDistribution#region_name}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[LightsailDistributionTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTags">LightsailDistributionTags</a>]

---

##### `reset_cache_behaviors` <a name="reset_cache_behaviors" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.resetCacheBehaviors"></a>

```python
def reset_cache_behaviors() -> None
```

##### `reset_cache_behavior_settings` <a name="reset_cache_behavior_settings" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.resetCacheBehaviorSettings"></a>

```python
def reset_cache_behavior_settings() -> None
```

##### `reset_certificate_name` <a name="reset_certificate_name" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.resetCertificateName"></a>

```python
def reset_certificate_name() -> None
```

##### `reset_ip_address_type` <a name="reset_ip_address_type" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.resetIpAddressType"></a>

```python
def reset_ip_address_type() -> None
```

##### `reset_is_enabled` <a name="reset_is_enabled" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.resetIsEnabled"></a>

```python
def reset_is_enabled() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a LightsailDistribution resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.isConstruct"></a>

```python
from cdktn_provider_awscc import lightsail_distribution

lightsailDistribution.LightsailDistribution.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.isTerraformElement"></a>

```python
from cdktn_provider_awscc import lightsail_distribution

lightsailDistribution.LightsailDistribution.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.isTerraformResource"></a>

```python
from cdktn_provider_awscc import lightsail_distribution

lightsailDistribution.LightsailDistribution.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import lightsail_distribution

lightsailDistribution.LightsailDistribution.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a LightsailDistribution resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the LightsailDistribution to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing LightsailDistribution that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_distribution#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the LightsailDistribution to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.ableToUpdateBundle">able_to_update_bundle</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.cacheBehaviors">cache_behaviors</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsList">LightsailDistributionCacheBehaviorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.cacheBehaviorSettings">cache_behavior_settings</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference">LightsailDistributionCacheBehaviorSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.defaultCacheBehavior">default_cache_behavior</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference">LightsailDistributionDefaultCacheBehaviorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.distributionArn">distribution_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.origin">origin</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference">LightsailDistributionOriginOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsList">LightsailDistributionTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.bundleIdInput">bundle_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.cacheBehaviorSettingsInput">cache_behavior_settings_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettings">LightsailDistributionCacheBehaviorSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.cacheBehaviorsInput">cache_behaviors_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviors">LightsailDistributionCacheBehaviors</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.certificateNameInput">certificate_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.defaultCacheBehaviorInput">default_cache_behavior_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehavior">LightsailDistributionDefaultCacheBehavior</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.distributionNameInput">distribution_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.ipAddressTypeInput">ip_address_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.isEnabledInput">is_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.originInput">origin_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOrigin">LightsailDistributionOrigin</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTags">LightsailDistributionTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.bundleId">bundle_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.certificateName">certificate_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.distributionName">distribution_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.ipAddressType">ip_address_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.isEnabled">is_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `able_to_update_bundle`<sup>Required</sup> <a name="able_to_update_bundle" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.ableToUpdateBundle"></a>

```python
able_to_update_bundle: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `cache_behaviors`<sup>Required</sup> <a name="cache_behaviors" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.cacheBehaviors"></a>

```python
cache_behaviors: LightsailDistributionCacheBehaviorsList
```

- *Type:* <a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsList">LightsailDistributionCacheBehaviorsList</a>

---

##### `cache_behavior_settings`<sup>Required</sup> <a name="cache_behavior_settings" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.cacheBehaviorSettings"></a>

```python
cache_behavior_settings: LightsailDistributionCacheBehaviorSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference">LightsailDistributionCacheBehaviorSettingsOutputReference</a>

---

##### `default_cache_behavior`<sup>Required</sup> <a name="default_cache_behavior" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.defaultCacheBehavior"></a>

```python
default_cache_behavior: LightsailDistributionDefaultCacheBehaviorOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference">LightsailDistributionDefaultCacheBehaviorOutputReference</a>

---

##### `distribution_arn`<sup>Required</sup> <a name="distribution_arn" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.distributionArn"></a>

```python
distribution_arn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `origin`<sup>Required</sup> <a name="origin" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.origin"></a>

```python
origin: LightsailDistributionOriginOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference">LightsailDistributionOriginOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.tags"></a>

```python
tags: LightsailDistributionTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsList">LightsailDistributionTagsList</a>

---

##### `bundle_id_input`<sup>Optional</sup> <a name="bundle_id_input" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.bundleIdInput"></a>

```python
bundle_id_input: str
```

- *Type:* str

---

##### `cache_behavior_settings_input`<sup>Optional</sup> <a name="cache_behavior_settings_input" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.cacheBehaviorSettingsInput"></a>

```python
cache_behavior_settings_input: IResolvable | LightsailDistributionCacheBehaviorSettings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettings">LightsailDistributionCacheBehaviorSettings</a>

---

##### `cache_behaviors_input`<sup>Optional</sup> <a name="cache_behaviors_input" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.cacheBehaviorsInput"></a>

```python
cache_behaviors_input: IResolvable | typing.List[LightsailDistributionCacheBehaviors]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviors">LightsailDistributionCacheBehaviors</a>]

---

##### `certificate_name_input`<sup>Optional</sup> <a name="certificate_name_input" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.certificateNameInput"></a>

```python
certificate_name_input: str
```

- *Type:* str

---

##### `default_cache_behavior_input`<sup>Optional</sup> <a name="default_cache_behavior_input" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.defaultCacheBehaviorInput"></a>

```python
default_cache_behavior_input: IResolvable | LightsailDistributionDefaultCacheBehavior
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehavior">LightsailDistributionDefaultCacheBehavior</a>

---

##### `distribution_name_input`<sup>Optional</sup> <a name="distribution_name_input" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.distributionNameInput"></a>

```python
distribution_name_input: str
```

- *Type:* str

---

##### `ip_address_type_input`<sup>Optional</sup> <a name="ip_address_type_input" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.ipAddressTypeInput"></a>

```python
ip_address_type_input: str
```

- *Type:* str

---

##### `is_enabled_input`<sup>Optional</sup> <a name="is_enabled_input" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.isEnabledInput"></a>

```python
is_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `origin_input`<sup>Optional</sup> <a name="origin_input" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.originInput"></a>

```python
origin_input: IResolvable | LightsailDistributionOrigin
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOrigin">LightsailDistributionOrigin</a>

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[LightsailDistributionTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTags">LightsailDistributionTags</a>]

---

##### `bundle_id`<sup>Required</sup> <a name="bundle_id" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.bundleId"></a>

```python
bundle_id: str
```

- *Type:* str

---

##### `certificate_name`<sup>Required</sup> <a name="certificate_name" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.certificateName"></a>

```python
certificate_name: str
```

- *Type:* str

---

##### `distribution_name`<sup>Required</sup> <a name="distribution_name" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.distributionName"></a>

```python
distribution_name: str
```

- *Type:* str

---

##### `ip_address_type`<sup>Required</sup> <a name="ip_address_type" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.ipAddressType"></a>

```python
ip_address_type: str
```

- *Type:* str

---

##### `is_enabled`<sup>Required</sup> <a name="is_enabled" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.isEnabled"></a>

```python
is_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### LightsailDistributionCacheBehaviors <a name="LightsailDistributionCacheBehaviors" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviors.Initializer"></a>

```python
from cdktn_provider_awscc import lightsail_distribution

lightsailDistribution.LightsailDistributionCacheBehaviors(
  behavior: str = None,
  path: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviors.property.behavior">behavior</a></code> | <code>str</code> | The cache behavior for the specified path. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviors.property.path">path</a></code> | <code>str</code> | The path to a directory or file to cached, or not cache. |

---

##### `behavior`<sup>Optional</sup> <a name="behavior" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviors.property.behavior"></a>

```python
behavior: str
```

- *Type:* str

The cache behavior for the specified path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_distribution#behavior LightsailDistribution#behavior}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviors.property.path"></a>

```python
path: str
```

- *Type:* str

The path to a directory or file to cached, or not cache.

Use an asterisk symbol to specify wildcard directories (path/to/assets/*), and file types (*.html, *jpg, *js). Directories and file paths are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_distribution#path LightsailDistribution#path}

---

### LightsailDistributionCacheBehaviorSettings <a name="LightsailDistributionCacheBehaviorSettings" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettings.Initializer"></a>

```python
from cdktn_provider_awscc import lightsail_distribution

lightsailDistribution.LightsailDistributionCacheBehaviorSettings(
  allowed_http_methods: str = None,
  cached_http_methods: str = None,
  default_ttl: typing.Union[int, float] = None,
  forwarded_cookies: LightsailDistributionCacheBehaviorSettingsForwardedCookies = None,
  forwarded_headers: LightsailDistributionCacheBehaviorSettingsForwardedHeaders = None,
  forwarded_query_strings: LightsailDistributionCacheBehaviorSettingsForwardedQueryStrings = None,
  maximum_ttl: typing.Union[int, float] = None,
  minimum_ttl: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettings.property.allowedHttpMethods">allowed_http_methods</a></code> | <code>str</code> | The HTTP methods that are processed and forwarded to the distribution's origin. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettings.property.cachedHttpMethods">cached_http_methods</a></code> | <code>str</code> | The HTTP method responses that are cached by your distribution. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettings.property.defaultTtl">default_ttl</a></code> | <code>typing.Union[int, float]</code> | The default amount of time that objects stay in the distribution's cache before the distribution forwards another request to the origin to determine whether the content has been updated. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettings.property.forwardedCookies">forwarded_cookies</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookies">LightsailDistributionCacheBehaviorSettingsForwardedCookies</a></code> | An object that describes the cookies that are forwarded to the origin. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettings.property.forwardedHeaders">forwarded_headers</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeaders">LightsailDistributionCacheBehaviorSettingsForwardedHeaders</a></code> | An object that describes the headers that are forwarded to the origin. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettings.property.forwardedQueryStrings">forwarded_query_strings</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStrings">LightsailDistributionCacheBehaviorSettingsForwardedQueryStrings</a></code> | An object that describes the query strings that are forwarded to the origin. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettings.property.maximumTtl">maximum_ttl</a></code> | <code>typing.Union[int, float]</code> | The maximum amount of time that objects stay in the distribution's cache before the distribution forwards another request to the origin to determine whether the object has been updated. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettings.property.minimumTtl">minimum_ttl</a></code> | <code>typing.Union[int, float]</code> | The minimum amount of time that objects stay in the distribution's cache before the distribution forwards another request to the origin to determine whether the object has been updated. |

---

##### `allowed_http_methods`<sup>Optional</sup> <a name="allowed_http_methods" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettings.property.allowedHttpMethods"></a>

```python
allowed_http_methods: str
```

- *Type:* str

The HTTP methods that are processed and forwarded to the distribution's origin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_distribution#allowed_http_methods LightsailDistribution#allowed_http_methods}

---

##### `cached_http_methods`<sup>Optional</sup> <a name="cached_http_methods" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettings.property.cachedHttpMethods"></a>

```python
cached_http_methods: str
```

- *Type:* str

The HTTP method responses that are cached by your distribution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_distribution#cached_http_methods LightsailDistribution#cached_http_methods}

---

##### `default_ttl`<sup>Optional</sup> <a name="default_ttl" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettings.property.defaultTtl"></a>

```python
default_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The default amount of time that objects stay in the distribution's cache before the distribution forwards another request to the origin to determine whether the content has been updated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_distribution#default_ttl LightsailDistribution#default_ttl}

---

##### `forwarded_cookies`<sup>Optional</sup> <a name="forwarded_cookies" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettings.property.forwardedCookies"></a>

```python
forwarded_cookies: LightsailDistributionCacheBehaviorSettingsForwardedCookies
```

- *Type:* <a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookies">LightsailDistributionCacheBehaviorSettingsForwardedCookies</a>

An object that describes the cookies that are forwarded to the origin.

Your content is cached based on the cookies that are forwarded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_distribution#forwarded_cookies LightsailDistribution#forwarded_cookies}

---

##### `forwarded_headers`<sup>Optional</sup> <a name="forwarded_headers" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettings.property.forwardedHeaders"></a>

```python
forwarded_headers: LightsailDistributionCacheBehaviorSettingsForwardedHeaders
```

- *Type:* <a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeaders">LightsailDistributionCacheBehaviorSettingsForwardedHeaders</a>

An object that describes the headers that are forwarded to the origin.

Your content is cached based on the headers that are forwarded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_distribution#forwarded_headers LightsailDistribution#forwarded_headers}

---

##### `forwarded_query_strings`<sup>Optional</sup> <a name="forwarded_query_strings" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettings.property.forwardedQueryStrings"></a>

```python
forwarded_query_strings: LightsailDistributionCacheBehaviorSettingsForwardedQueryStrings
```

- *Type:* <a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStrings">LightsailDistributionCacheBehaviorSettingsForwardedQueryStrings</a>

An object that describes the query strings that are forwarded to the origin.

Your content is cached based on the query strings that are forwarded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_distribution#forwarded_query_strings LightsailDistribution#forwarded_query_strings}

---

##### `maximum_ttl`<sup>Optional</sup> <a name="maximum_ttl" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettings.property.maximumTtl"></a>

```python
maximum_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum amount of time that objects stay in the distribution's cache before the distribution forwards another request to the origin to determine whether the object has been updated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_distribution#maximum_ttl LightsailDistribution#maximum_ttl}

---

##### `minimum_ttl`<sup>Optional</sup> <a name="minimum_ttl" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettings.property.minimumTtl"></a>

```python
minimum_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The minimum amount of time that objects stay in the distribution's cache before the distribution forwards another request to the origin to determine whether the object has been updated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_distribution#minimum_ttl LightsailDistribution#minimum_ttl}

---

### LightsailDistributionCacheBehaviorSettingsForwardedCookies <a name="LightsailDistributionCacheBehaviorSettingsForwardedCookies" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookies.Initializer"></a>

```python
from cdktn_provider_awscc import lightsail_distribution

lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookies(
  cookies_allow_list: typing.List[str] = None,
  option: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookies.property.cookiesAllowList">cookies_allow_list</a></code> | <code>typing.List[str]</code> | The specific cookies to forward to your distribution's origin. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookies.property.option">option</a></code> | <code>str</code> | Specifies which cookies to forward to the distribution's origin for a cache behavior: all, none, or allow-list to forward only the cookies specified in the cookiesAllowList parameter. |

---

##### `cookies_allow_list`<sup>Optional</sup> <a name="cookies_allow_list" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookies.property.cookiesAllowList"></a>

```python
cookies_allow_list: typing.List[str]
```

- *Type:* typing.List[str]

The specific cookies to forward to your distribution's origin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_distribution#cookies_allow_list LightsailDistribution#cookies_allow_list}

---

##### `option`<sup>Optional</sup> <a name="option" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookies.property.option"></a>

```python
option: str
```

- *Type:* str

Specifies which cookies to forward to the distribution's origin for a cache behavior: all, none, or allow-list to forward only the cookies specified in the cookiesAllowList parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_distribution#option LightsailDistribution#option}

---

### LightsailDistributionCacheBehaviorSettingsForwardedHeaders <a name="LightsailDistributionCacheBehaviorSettingsForwardedHeaders" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeaders.Initializer"></a>

```python
from cdktn_provider_awscc import lightsail_distribution

lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeaders(
  headers_allow_list: typing.List[str] = None,
  option: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeaders.property.headersAllowList">headers_allow_list</a></code> | <code>typing.List[str]</code> | The specific headers to forward to your distribution's origin. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeaders.property.option">option</a></code> | <code>str</code> | The headers that you want your distribution to forward to your origin and base caching on. |

---

##### `headers_allow_list`<sup>Optional</sup> <a name="headers_allow_list" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeaders.property.headersAllowList"></a>

```python
headers_allow_list: typing.List[str]
```

- *Type:* typing.List[str]

The specific headers to forward to your distribution's origin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_distribution#headers_allow_list LightsailDistribution#headers_allow_list}

---

##### `option`<sup>Optional</sup> <a name="option" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeaders.property.option"></a>

```python
option: str
```

- *Type:* str

The headers that you want your distribution to forward to your origin and base caching on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_distribution#option LightsailDistribution#option}

---

### LightsailDistributionCacheBehaviorSettingsForwardedQueryStrings <a name="LightsailDistributionCacheBehaviorSettingsForwardedQueryStrings" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStrings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStrings.Initializer"></a>

```python
from cdktn_provider_awscc import lightsail_distribution

lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStrings(
  option: bool | IResolvable = None,
  query_strings_allow_list: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStrings.property.option">option</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates whether the distribution forwards and caches based on query strings. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStrings.property.queryStringsAllowList">query_strings_allow_list</a></code> | <code>typing.List[str]</code> | The specific query strings that the distribution forwards to the origin. |

---

##### `option`<sup>Optional</sup> <a name="option" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStrings.property.option"></a>

```python
option: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Indicates whether the distribution forwards and caches based on query strings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_distribution#option LightsailDistribution#option}

---

##### `query_strings_allow_list`<sup>Optional</sup> <a name="query_strings_allow_list" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStrings.property.queryStringsAllowList"></a>

```python
query_strings_allow_list: typing.List[str]
```

- *Type:* typing.List[str]

The specific query strings that the distribution forwards to the origin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_distribution#query_strings_allow_list LightsailDistribution#query_strings_allow_list}

---

### LightsailDistributionConfig <a name="LightsailDistributionConfig" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionConfig.Initializer"></a>

```python
from cdktn_provider_awscc import lightsail_distribution

lightsailDistribution.LightsailDistributionConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  bundle_id: str,
  default_cache_behavior: LightsailDistributionDefaultCacheBehavior,
  distribution_name: str,
  origin: LightsailDistributionOrigin,
  cache_behaviors: IResolvable | typing.List[LightsailDistributionCacheBehaviors] = None,
  cache_behavior_settings: LightsailDistributionCacheBehaviorSettings = None,
  certificate_name: str = None,
  ip_address_type: str = None,
  is_enabled: bool | IResolvable = None,
  tags: IResolvable | typing.List[LightsailDistributionTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionConfig.property.bundleId">bundle_id</a></code> | <code>str</code> | The bundle ID to use for the distribution. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionConfig.property.defaultCacheBehavior">default_cache_behavior</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehavior">LightsailDistributionDefaultCacheBehavior</a></code> | An object that describes the default cache behavior for the distribution. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionConfig.property.distributionName">distribution_name</a></code> | <code>str</code> | The name for the distribution. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionConfig.property.origin">origin</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOrigin">LightsailDistributionOrigin</a></code> | An object that describes the origin resource for the distribution, such as a Lightsail instance or load balancer. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionConfig.property.cacheBehaviors">cache_behaviors</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviors">LightsailDistributionCacheBehaviors</a>]</code> | An array of objects that describe the per-path cache behavior for the distribution. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionConfig.property.cacheBehaviorSettings">cache_behavior_settings</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettings">LightsailDistributionCacheBehaviorSettings</a></code> | An object that describes the cache behavior settings for the distribution. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionConfig.property.certificateName">certificate_name</a></code> | <code>str</code> | The certificate attached to the Distribution. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionConfig.property.ipAddressType">ip_address_type</a></code> | <code>str</code> | The IP address type for the distribution. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionConfig.property.isEnabled">is_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates whether the distribution is enabled. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTags">LightsailDistributionTags</a>]</code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `bundle_id`<sup>Required</sup> <a name="bundle_id" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionConfig.property.bundleId"></a>

```python
bundle_id: str
```

- *Type:* str

The bundle ID to use for the distribution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_distribution#bundle_id LightsailDistribution#bundle_id}

---

##### `default_cache_behavior`<sup>Required</sup> <a name="default_cache_behavior" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionConfig.property.defaultCacheBehavior"></a>

```python
default_cache_behavior: LightsailDistributionDefaultCacheBehavior
```

- *Type:* <a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehavior">LightsailDistributionDefaultCacheBehavior</a>

An object that describes the default cache behavior for the distribution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_distribution#default_cache_behavior LightsailDistribution#default_cache_behavior}

---

##### `distribution_name`<sup>Required</sup> <a name="distribution_name" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionConfig.property.distributionName"></a>

```python
distribution_name: str
```

- *Type:* str

The name for the distribution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_distribution#distribution_name LightsailDistribution#distribution_name}

---

##### `origin`<sup>Required</sup> <a name="origin" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionConfig.property.origin"></a>

```python
origin: LightsailDistributionOrigin
```

- *Type:* <a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOrigin">LightsailDistributionOrigin</a>

An object that describes the origin resource for the distribution, such as a Lightsail instance or load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_distribution#origin LightsailDistribution#origin}

---

##### `cache_behaviors`<sup>Optional</sup> <a name="cache_behaviors" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionConfig.property.cacheBehaviors"></a>

```python
cache_behaviors: IResolvable | typing.List[LightsailDistributionCacheBehaviors]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviors">LightsailDistributionCacheBehaviors</a>]

An array of objects that describe the per-path cache behavior for the distribution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_distribution#cache_behaviors LightsailDistribution#cache_behaviors}

---

##### `cache_behavior_settings`<sup>Optional</sup> <a name="cache_behavior_settings" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionConfig.property.cacheBehaviorSettings"></a>

```python
cache_behavior_settings: LightsailDistributionCacheBehaviorSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettings">LightsailDistributionCacheBehaviorSettings</a>

An object that describes the cache behavior settings for the distribution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_distribution#cache_behavior_settings LightsailDistribution#cache_behavior_settings}

---

##### `certificate_name`<sup>Optional</sup> <a name="certificate_name" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionConfig.property.certificateName"></a>

```python
certificate_name: str
```

- *Type:* str

The certificate attached to the Distribution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_distribution#certificate_name LightsailDistribution#certificate_name}

---

##### `ip_address_type`<sup>Optional</sup> <a name="ip_address_type" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionConfig.property.ipAddressType"></a>

```python
ip_address_type: str
```

- *Type:* str

The IP address type for the distribution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_distribution#ip_address_type LightsailDistribution#ip_address_type}

---

##### `is_enabled`<sup>Optional</sup> <a name="is_enabled" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionConfig.property.isEnabled"></a>

```python
is_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Indicates whether the distribution is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_distribution#is_enabled LightsailDistribution#is_enabled}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[LightsailDistributionTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTags">LightsailDistributionTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_distribution#tags LightsailDistribution#tags}

---

### LightsailDistributionDefaultCacheBehavior <a name="LightsailDistributionDefaultCacheBehavior" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehavior"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehavior.Initializer"></a>

```python
from cdktn_provider_awscc import lightsail_distribution

lightsailDistribution.LightsailDistributionDefaultCacheBehavior(
  behavior: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehavior.property.behavior">behavior</a></code> | <code>str</code> | The cache behavior of the distribution. |

---

##### `behavior`<sup>Optional</sup> <a name="behavior" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehavior.property.behavior"></a>

```python
behavior: str
```

- *Type:* str

The cache behavior of the distribution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_distribution#behavior LightsailDistribution#behavior}

---

### LightsailDistributionOrigin <a name="LightsailDistributionOrigin" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOrigin"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOrigin.Initializer"></a>

```python
from cdktn_provider_awscc import lightsail_distribution

lightsailDistribution.LightsailDistributionOrigin(
  name: str = None,
  protocol_policy: str = None,
  region_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOrigin.property.name">name</a></code> | <code>str</code> | The name of the origin resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOrigin.property.protocolPolicy">protocol_policy</a></code> | <code>str</code> | The protocol that your Amazon Lightsail distribution uses when establishing a connection with your origin to pull content. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOrigin.property.regionName">region_name</a></code> | <code>str</code> | The AWS Region name of the origin resource. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOrigin.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the origin resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_distribution#name LightsailDistribution#name}

---

##### `protocol_policy`<sup>Optional</sup> <a name="protocol_policy" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOrigin.property.protocolPolicy"></a>

```python
protocol_policy: str
```

- *Type:* str

The protocol that your Amazon Lightsail distribution uses when establishing a connection with your origin to pull content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_distribution#protocol_policy LightsailDistribution#protocol_policy}

---

##### `region_name`<sup>Optional</sup> <a name="region_name" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOrigin.property.regionName"></a>

```python
region_name: str
```

- *Type:* str

The AWS Region name of the origin resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_distribution#region_name LightsailDistribution#region_name}

---

### LightsailDistributionTags <a name="LightsailDistributionTags" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTags.Initializer"></a>

```python
from cdktn_provider_awscc import lightsail_distribution

lightsailDistribution.LightsailDistributionTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_distribution#key LightsailDistribution#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_distribution#value LightsailDistribution#value}

---

## Classes <a name="Classes" id="Classes"></a>

### LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference <a name="LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import lightsail_distribution

lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.resetCookiesAllowList">reset_cookies_allow_list</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.resetOption">reset_option</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cookies_allow_list` <a name="reset_cookies_allow_list" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.resetCookiesAllowList"></a>

```python
def reset_cookies_allow_list() -> None
```

##### `reset_option` <a name="reset_option" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.resetOption"></a>

```python
def reset_option() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.property.cookiesAllowListInput">cookies_allow_list_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.property.optionInput">option_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.property.cookiesAllowList">cookies_allow_list</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.property.option">option</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookies">LightsailDistributionCacheBehaviorSettingsForwardedCookies</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cookies_allow_list_input`<sup>Optional</sup> <a name="cookies_allow_list_input" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.property.cookiesAllowListInput"></a>

```python
cookies_allow_list_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `option_input`<sup>Optional</sup> <a name="option_input" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.property.optionInput"></a>

```python
option_input: str
```

- *Type:* str

---

##### `cookies_allow_list`<sup>Required</sup> <a name="cookies_allow_list" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.property.cookiesAllowList"></a>

```python
cookies_allow_list: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `option`<sup>Required</sup> <a name="option" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.property.option"></a>

```python
option: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LightsailDistributionCacheBehaviorSettingsForwardedCookies
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookies">LightsailDistributionCacheBehaviorSettingsForwardedCookies</a>

---


### LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference <a name="LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import lightsail_distribution

lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.resetHeadersAllowList">reset_headers_allow_list</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.resetOption">reset_option</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_headers_allow_list` <a name="reset_headers_allow_list" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.resetHeadersAllowList"></a>

```python
def reset_headers_allow_list() -> None
```

##### `reset_option` <a name="reset_option" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.resetOption"></a>

```python
def reset_option() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.property.headersAllowListInput">headers_allow_list_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.property.optionInput">option_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.property.headersAllowList">headers_allow_list</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.property.option">option</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeaders">LightsailDistributionCacheBehaviorSettingsForwardedHeaders</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `headers_allow_list_input`<sup>Optional</sup> <a name="headers_allow_list_input" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.property.headersAllowListInput"></a>

```python
headers_allow_list_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `option_input`<sup>Optional</sup> <a name="option_input" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.property.optionInput"></a>

```python
option_input: str
```

- *Type:* str

---

##### `headers_allow_list`<sup>Required</sup> <a name="headers_allow_list" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.property.headersAllowList"></a>

```python
headers_allow_list: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `option`<sup>Required</sup> <a name="option" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.property.option"></a>

```python
option: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LightsailDistributionCacheBehaviorSettingsForwardedHeaders
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeaders">LightsailDistributionCacheBehaviorSettingsForwardedHeaders</a>

---


### LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference <a name="LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import lightsail_distribution

lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.resetOption">reset_option</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.resetQueryStringsAllowList">reset_query_strings_allow_list</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_option` <a name="reset_option" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.resetOption"></a>

```python
def reset_option() -> None
```

##### `reset_query_strings_allow_list` <a name="reset_query_strings_allow_list" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.resetQueryStringsAllowList"></a>

```python
def reset_query_strings_allow_list() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.property.optionInput">option_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.property.queryStringsAllowListInput">query_strings_allow_list_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.property.option">option</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.property.queryStringsAllowList">query_strings_allow_list</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStrings">LightsailDistributionCacheBehaviorSettingsForwardedQueryStrings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `option_input`<sup>Optional</sup> <a name="option_input" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.property.optionInput"></a>

```python
option_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `query_strings_allow_list_input`<sup>Optional</sup> <a name="query_strings_allow_list_input" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.property.queryStringsAllowListInput"></a>

```python
query_strings_allow_list_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `option`<sup>Required</sup> <a name="option" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.property.option"></a>

```python
option: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `query_strings_allow_list`<sup>Required</sup> <a name="query_strings_allow_list" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.property.queryStringsAllowList"></a>

```python
query_strings_allow_list: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LightsailDistributionCacheBehaviorSettingsForwardedQueryStrings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStrings">LightsailDistributionCacheBehaviorSettingsForwardedQueryStrings</a>

---


### LightsailDistributionCacheBehaviorSettingsOutputReference <a name="LightsailDistributionCacheBehaviorSettingsOutputReference" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import lightsail_distribution

lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.putForwardedCookies">put_forwarded_cookies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.putForwardedHeaders">put_forwarded_headers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.putForwardedQueryStrings">put_forwarded_query_strings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.resetAllowedHttpMethods">reset_allowed_http_methods</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.resetCachedHttpMethods">reset_cached_http_methods</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.resetDefaultTtl">reset_default_ttl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.resetForwardedCookies">reset_forwarded_cookies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.resetForwardedHeaders">reset_forwarded_headers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.resetForwardedQueryStrings">reset_forwarded_query_strings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.resetMaximumTtl">reset_maximum_ttl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.resetMinimumTtl">reset_minimum_ttl</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_forwarded_cookies` <a name="put_forwarded_cookies" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.putForwardedCookies"></a>

```python
def put_forwarded_cookies(
  cookies_allow_list: typing.List[str] = None,
  option: str = None
) -> None
```

###### `cookies_allow_list`<sup>Optional</sup> <a name="cookies_allow_list" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.putForwardedCookies.parameter.cookiesAllowList"></a>

- *Type:* typing.List[str]

The specific cookies to forward to your distribution's origin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_distribution#cookies_allow_list LightsailDistribution#cookies_allow_list}

---

###### `option`<sup>Optional</sup> <a name="option" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.putForwardedCookies.parameter.option"></a>

- *Type:* str

Specifies which cookies to forward to the distribution's origin for a cache behavior: all, none, or allow-list to forward only the cookies specified in the cookiesAllowList parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_distribution#option LightsailDistribution#option}

---

##### `put_forwarded_headers` <a name="put_forwarded_headers" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.putForwardedHeaders"></a>

```python
def put_forwarded_headers(
  headers_allow_list: typing.List[str] = None,
  option: str = None
) -> None
```

###### `headers_allow_list`<sup>Optional</sup> <a name="headers_allow_list" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.putForwardedHeaders.parameter.headersAllowList"></a>

- *Type:* typing.List[str]

The specific headers to forward to your distribution's origin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_distribution#headers_allow_list LightsailDistribution#headers_allow_list}

---

###### `option`<sup>Optional</sup> <a name="option" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.putForwardedHeaders.parameter.option"></a>

- *Type:* str

The headers that you want your distribution to forward to your origin and base caching on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_distribution#option LightsailDistribution#option}

---

##### `put_forwarded_query_strings` <a name="put_forwarded_query_strings" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.putForwardedQueryStrings"></a>

```python
def put_forwarded_query_strings(
  option: bool | IResolvable = None,
  query_strings_allow_list: typing.List[str] = None
) -> None
```

###### `option`<sup>Optional</sup> <a name="option" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.putForwardedQueryStrings.parameter.option"></a>

- *Type:* bool | cdktn.IResolvable

Indicates whether the distribution forwards and caches based on query strings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_distribution#option LightsailDistribution#option}

---

###### `query_strings_allow_list`<sup>Optional</sup> <a name="query_strings_allow_list" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.putForwardedQueryStrings.parameter.queryStringsAllowList"></a>

- *Type:* typing.List[str]

The specific query strings that the distribution forwards to the origin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_distribution#query_strings_allow_list LightsailDistribution#query_strings_allow_list}

---

##### `reset_allowed_http_methods` <a name="reset_allowed_http_methods" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.resetAllowedHttpMethods"></a>

```python
def reset_allowed_http_methods() -> None
```

##### `reset_cached_http_methods` <a name="reset_cached_http_methods" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.resetCachedHttpMethods"></a>

```python
def reset_cached_http_methods() -> None
```

##### `reset_default_ttl` <a name="reset_default_ttl" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.resetDefaultTtl"></a>

```python
def reset_default_ttl() -> None
```

##### `reset_forwarded_cookies` <a name="reset_forwarded_cookies" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.resetForwardedCookies"></a>

```python
def reset_forwarded_cookies() -> None
```

##### `reset_forwarded_headers` <a name="reset_forwarded_headers" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.resetForwardedHeaders"></a>

```python
def reset_forwarded_headers() -> None
```

##### `reset_forwarded_query_strings` <a name="reset_forwarded_query_strings" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.resetForwardedQueryStrings"></a>

```python
def reset_forwarded_query_strings() -> None
```

##### `reset_maximum_ttl` <a name="reset_maximum_ttl" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.resetMaximumTtl"></a>

```python
def reset_maximum_ttl() -> None
```

##### `reset_minimum_ttl` <a name="reset_minimum_ttl" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.resetMinimumTtl"></a>

```python
def reset_minimum_ttl() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.forwardedCookies">forwarded_cookies</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference">LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.forwardedHeaders">forwarded_headers</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference">LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.forwardedQueryStrings">forwarded_query_strings</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference">LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.allowedHttpMethodsInput">allowed_http_methods_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.cachedHttpMethodsInput">cached_http_methods_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.defaultTtlInput">default_ttl_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.forwardedCookiesInput">forwarded_cookies_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookies">LightsailDistributionCacheBehaviorSettingsForwardedCookies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.forwardedHeadersInput">forwarded_headers_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeaders">LightsailDistributionCacheBehaviorSettingsForwardedHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.forwardedQueryStringsInput">forwarded_query_strings_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStrings">LightsailDistributionCacheBehaviorSettingsForwardedQueryStrings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.maximumTtlInput">maximum_ttl_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.minimumTtlInput">minimum_ttl_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.allowedHttpMethods">allowed_http_methods</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.cachedHttpMethods">cached_http_methods</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.defaultTtl">default_ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.maximumTtl">maximum_ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.minimumTtl">minimum_ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettings">LightsailDistributionCacheBehaviorSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `forwarded_cookies`<sup>Required</sup> <a name="forwarded_cookies" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.forwardedCookies"></a>

```python
forwarded_cookies: LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference">LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference</a>

---

##### `forwarded_headers`<sup>Required</sup> <a name="forwarded_headers" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.forwardedHeaders"></a>

```python
forwarded_headers: LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference">LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference</a>

---

##### `forwarded_query_strings`<sup>Required</sup> <a name="forwarded_query_strings" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.forwardedQueryStrings"></a>

```python
forwarded_query_strings: LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference">LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference</a>

---

##### `allowed_http_methods_input`<sup>Optional</sup> <a name="allowed_http_methods_input" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.allowedHttpMethodsInput"></a>

```python
allowed_http_methods_input: str
```

- *Type:* str

---

##### `cached_http_methods_input`<sup>Optional</sup> <a name="cached_http_methods_input" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.cachedHttpMethodsInput"></a>

```python
cached_http_methods_input: str
```

- *Type:* str

---

##### `default_ttl_input`<sup>Optional</sup> <a name="default_ttl_input" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.defaultTtlInput"></a>

```python
default_ttl_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `forwarded_cookies_input`<sup>Optional</sup> <a name="forwarded_cookies_input" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.forwardedCookiesInput"></a>

```python
forwarded_cookies_input: IResolvable | LightsailDistributionCacheBehaviorSettingsForwardedCookies
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookies">LightsailDistributionCacheBehaviorSettingsForwardedCookies</a>

---

##### `forwarded_headers_input`<sup>Optional</sup> <a name="forwarded_headers_input" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.forwardedHeadersInput"></a>

```python
forwarded_headers_input: IResolvable | LightsailDistributionCacheBehaviorSettingsForwardedHeaders
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeaders">LightsailDistributionCacheBehaviorSettingsForwardedHeaders</a>

---

##### `forwarded_query_strings_input`<sup>Optional</sup> <a name="forwarded_query_strings_input" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.forwardedQueryStringsInput"></a>

```python
forwarded_query_strings_input: IResolvable | LightsailDistributionCacheBehaviorSettingsForwardedQueryStrings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStrings">LightsailDistributionCacheBehaviorSettingsForwardedQueryStrings</a>

---

##### `maximum_ttl_input`<sup>Optional</sup> <a name="maximum_ttl_input" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.maximumTtlInput"></a>

```python
maximum_ttl_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minimum_ttl_input`<sup>Optional</sup> <a name="minimum_ttl_input" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.minimumTtlInput"></a>

```python
minimum_ttl_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `allowed_http_methods`<sup>Required</sup> <a name="allowed_http_methods" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.allowedHttpMethods"></a>

```python
allowed_http_methods: str
```

- *Type:* str

---

##### `cached_http_methods`<sup>Required</sup> <a name="cached_http_methods" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.cachedHttpMethods"></a>

```python
cached_http_methods: str
```

- *Type:* str

---

##### `default_ttl`<sup>Required</sup> <a name="default_ttl" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.defaultTtl"></a>

```python
default_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `maximum_ttl`<sup>Required</sup> <a name="maximum_ttl" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.maximumTtl"></a>

```python
maximum_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minimum_ttl`<sup>Required</sup> <a name="minimum_ttl" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.minimumTtl"></a>

```python
minimum_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LightsailDistributionCacheBehaviorSettings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettings">LightsailDistributionCacheBehaviorSettings</a>

---


### LightsailDistributionCacheBehaviorsList <a name="LightsailDistributionCacheBehaviorsList" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsList.Initializer"></a>

```python
from cdktn_provider_awscc import lightsail_distribution

lightsailDistribution.LightsailDistributionCacheBehaviorsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LightsailDistributionCacheBehaviorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviors">LightsailDistributionCacheBehaviors</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[LightsailDistributionCacheBehaviors]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviors">LightsailDistributionCacheBehaviors</a>]

---


### LightsailDistributionCacheBehaviorsOutputReference <a name="LightsailDistributionCacheBehaviorsOutputReference" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import lightsail_distribution

lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.resetBehavior">reset_behavior</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.resetPath">reset_path</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_behavior` <a name="reset_behavior" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.resetBehavior"></a>

```python
def reset_behavior() -> None
```

##### `reset_path` <a name="reset_path" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.resetPath"></a>

```python
def reset_path() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.property.behaviorInput">behavior_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.property.behavior">behavior</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviors">LightsailDistributionCacheBehaviors</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `behavior_input`<sup>Optional</sup> <a name="behavior_input" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.property.behaviorInput"></a>

```python
behavior_input: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `behavior`<sup>Required</sup> <a name="behavior" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.property.behavior"></a>

```python
behavior: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LightsailDistributionCacheBehaviors
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviors">LightsailDistributionCacheBehaviors</a>

---


### LightsailDistributionDefaultCacheBehaviorOutputReference <a name="LightsailDistributionDefaultCacheBehaviorOutputReference" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import lightsail_distribution

lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.resetBehavior">reset_behavior</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_behavior` <a name="reset_behavior" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.resetBehavior"></a>

```python
def reset_behavior() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.property.behaviorInput">behavior_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.property.behavior">behavior</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehavior">LightsailDistributionDefaultCacheBehavior</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `behavior_input`<sup>Optional</sup> <a name="behavior_input" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.property.behaviorInput"></a>

```python
behavior_input: str
```

- *Type:* str

---

##### `behavior`<sup>Required</sup> <a name="behavior" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.property.behavior"></a>

```python
behavior: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LightsailDistributionDefaultCacheBehavior
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehavior">LightsailDistributionDefaultCacheBehavior</a>

---


### LightsailDistributionOriginOutputReference <a name="LightsailDistributionOriginOutputReference" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import lightsail_distribution

lightsailDistribution.LightsailDistributionOriginOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.resetProtocolPolicy">reset_protocol_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.resetRegionName">reset_region_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_protocol_policy` <a name="reset_protocol_policy" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.resetProtocolPolicy"></a>

```python
def reset_protocol_policy() -> None
```

##### `reset_region_name` <a name="reset_region_name" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.resetRegionName"></a>

```python
def reset_region_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.property.protocolPolicyInput">protocol_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.property.regionNameInput">region_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.property.protocolPolicy">protocol_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.property.regionName">region_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOrigin">LightsailDistributionOrigin</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `protocol_policy_input`<sup>Optional</sup> <a name="protocol_policy_input" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.property.protocolPolicyInput"></a>

```python
protocol_policy_input: str
```

- *Type:* str

---

##### `region_name_input`<sup>Optional</sup> <a name="region_name_input" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.property.regionNameInput"></a>

```python
region_name_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `protocol_policy`<sup>Required</sup> <a name="protocol_policy" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.property.protocolPolicy"></a>

```python
protocol_policy: str
```

- *Type:* str

---

##### `region_name`<sup>Required</sup> <a name="region_name" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.property.regionName"></a>

```python
region_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LightsailDistributionOrigin
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOrigin">LightsailDistributionOrigin</a>

---


### LightsailDistributionTagsList <a name="LightsailDistributionTagsList" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import lightsail_distribution

lightsailDistribution.LightsailDistributionTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LightsailDistributionTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTags">LightsailDistributionTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[LightsailDistributionTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTags">LightsailDistributionTags</a>]

---


### LightsailDistributionTagsOutputReference <a name="LightsailDistributionTagsOutputReference" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import lightsail_distribution

lightsailDistribution.LightsailDistributionTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTags">LightsailDistributionTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LightsailDistributionTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTags">LightsailDistributionTags</a>

---



