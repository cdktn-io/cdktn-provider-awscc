# `cloudfrontRealtimeLogConfig` Submodule <a name="`cloudfrontRealtimeLogConfig` Submodule" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudfrontRealtimeLogConfig <a name="CloudfrontRealtimeLogConfig" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudfront_realtime_log_config awscc_cloudfront_realtime_log_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.Initializer"></a>

```python
from cdktn_provider_awscc import cloudfront_realtime_log_config

cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  end_points: IResolvable | typing.List[CloudfrontRealtimeLogConfigEndPoints],
  fields: typing.List[str],
  name: str,
  sampling_rate: typing.Union[int, float]
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.Initializer.parameter.endPoints">end_points</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPoints">CloudfrontRealtimeLogConfigEndPoints</a>]</code> | Contains information about the Amazon Kinesis data stream where you are sending real-time log data for this real-time log configuration. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.Initializer.parameter.fields">fields</a></code> | <code>typing.List[str]</code> | A list of fields that are included in each real-time log record. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.Initializer.parameter.name">name</a></code> | <code>str</code> | The unique name of this real-time log configuration. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.Initializer.parameter.samplingRate">sampling_rate</a></code> | <code>typing.Union[int, float]</code> | The sampling rate for this real-time log configuration. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `end_points`<sup>Required</sup> <a name="end_points" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.Initializer.parameter.endPoints"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPoints">CloudfrontRealtimeLogConfigEndPoints</a>]

Contains information about the Amazon Kinesis data stream where you are sending real-time log data for this real-time log configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudfront_realtime_log_config#end_points CloudfrontRealtimeLogConfig#end_points}

---

##### `fields`<sup>Required</sup> <a name="fields" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.Initializer.parameter.fields"></a>

- *Type:* typing.List[str]

A list of fields that are included in each real-time log record.

In an API response, the fields are provided in the same order in which they are sent to the Amazon Kinesis data stream.
For more information about fields, see [Real-time log configuration fields](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/real-time-logs.html#understand-real-time-log-config-fields) in the *Amazon CloudFront Developer Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudfront_realtime_log_config#fields CloudfrontRealtimeLogConfig#fields}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.Initializer.parameter.name"></a>

- *Type:* str

The unique name of this real-time log configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudfront_realtime_log_config#name CloudfrontRealtimeLogConfig#name}

---

##### `sampling_rate`<sup>Required</sup> <a name="sampling_rate" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.Initializer.parameter.samplingRate"></a>

- *Type:* typing.Union[int, float]

The sampling rate for this real-time log configuration.

The sampling rate determines the percentage of viewer requests that are represented in the real-time log data. The sampling rate is an integer between 1 and 100, inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudfront_realtime_log_config#sampling_rate CloudfrontRealtimeLogConfig#sampling_rate}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.putEndPoints">put_end_points</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_end_points` <a name="put_end_points" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.putEndPoints"></a>

```python
def put_end_points(
  value: IResolvable | typing.List[CloudfrontRealtimeLogConfigEndPoints]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.putEndPoints.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPoints">CloudfrontRealtimeLogConfigEndPoints</a>]

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a CloudfrontRealtimeLogConfig resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.isConstruct"></a>

```python
from cdktn_provider_awscc import cloudfront_realtime_log_config

cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.isTerraformElement"></a>

```python
from cdktn_provider_awscc import cloudfront_realtime_log_config

cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.isTerraformResource"></a>

```python
from cdktn_provider_awscc import cloudfront_realtime_log_config

cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import cloudfront_realtime_log_config

cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a CloudfrontRealtimeLogConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CloudfrontRealtimeLogConfig to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CloudfrontRealtimeLogConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudfront_realtime_log_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CloudfrontRealtimeLogConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.endPoints">end_points</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsList">CloudfrontRealtimeLogConfigEndPointsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.endPointsInput">end_points_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPoints">CloudfrontRealtimeLogConfigEndPoints</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.fieldsInput">fields_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.samplingRateInput">sampling_rate_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.fields">fields</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.samplingRate">sampling_rate</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `end_points`<sup>Required</sup> <a name="end_points" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.endPoints"></a>

```python
end_points: CloudfrontRealtimeLogConfigEndPointsList
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsList">CloudfrontRealtimeLogConfigEndPointsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `end_points_input`<sup>Optional</sup> <a name="end_points_input" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.endPointsInput"></a>

```python
end_points_input: IResolvable | typing.List[CloudfrontRealtimeLogConfigEndPoints]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPoints">CloudfrontRealtimeLogConfigEndPoints</a>]

---

##### `fields_input`<sup>Optional</sup> <a name="fields_input" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.fieldsInput"></a>

```python
fields_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `sampling_rate_input`<sup>Optional</sup> <a name="sampling_rate_input" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.samplingRateInput"></a>

```python
sampling_rate_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `fields`<sup>Required</sup> <a name="fields" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.fields"></a>

```python
fields: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `sampling_rate`<sup>Required</sup> <a name="sampling_rate" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.samplingRate"></a>

```python
sampling_rate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfig.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CloudfrontRealtimeLogConfigConfig <a name="CloudfrontRealtimeLogConfigConfig" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigConfig.Initializer"></a>

```python
from cdktn_provider_awscc import cloudfront_realtime_log_config

cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  end_points: IResolvable | typing.List[CloudfrontRealtimeLogConfigEndPoints],
  fields: typing.List[str],
  name: str,
  sampling_rate: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigConfig.property.endPoints">end_points</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPoints">CloudfrontRealtimeLogConfigEndPoints</a>]</code> | Contains information about the Amazon Kinesis data stream where you are sending real-time log data for this real-time log configuration. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigConfig.property.fields">fields</a></code> | <code>typing.List[str]</code> | A list of fields that are included in each real-time log record. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigConfig.property.name">name</a></code> | <code>str</code> | The unique name of this real-time log configuration. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigConfig.property.samplingRate">sampling_rate</a></code> | <code>typing.Union[int, float]</code> | The sampling rate for this real-time log configuration. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `end_points`<sup>Required</sup> <a name="end_points" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigConfig.property.endPoints"></a>

```python
end_points: IResolvable | typing.List[CloudfrontRealtimeLogConfigEndPoints]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPoints">CloudfrontRealtimeLogConfigEndPoints</a>]

Contains information about the Amazon Kinesis data stream where you are sending real-time log data for this real-time log configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudfront_realtime_log_config#end_points CloudfrontRealtimeLogConfig#end_points}

---

##### `fields`<sup>Required</sup> <a name="fields" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigConfig.property.fields"></a>

```python
fields: typing.List[str]
```

- *Type:* typing.List[str]

A list of fields that are included in each real-time log record.

In an API response, the fields are provided in the same order in which they are sent to the Amazon Kinesis data stream.
For more information about fields, see [Real-time log configuration fields](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/real-time-logs.html#understand-real-time-log-config-fields) in the *Amazon CloudFront Developer Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudfront_realtime_log_config#fields CloudfrontRealtimeLogConfig#fields}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The unique name of this real-time log configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudfront_realtime_log_config#name CloudfrontRealtimeLogConfig#name}

---

##### `sampling_rate`<sup>Required</sup> <a name="sampling_rate" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigConfig.property.samplingRate"></a>

```python
sampling_rate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The sampling rate for this real-time log configuration.

The sampling rate determines the percentage of viewer requests that are represented in the real-time log data. The sampling rate is an integer between 1 and 100, inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudfront_realtime_log_config#sampling_rate CloudfrontRealtimeLogConfig#sampling_rate}

---

### CloudfrontRealtimeLogConfigEndPoints <a name="CloudfrontRealtimeLogConfigEndPoints" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPoints"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPoints.Initializer"></a>

```python
from cdktn_provider_awscc import cloudfront_realtime_log_config

cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPoints(
  kinesis_stream_config: CloudfrontRealtimeLogConfigEndPointsKinesisStreamConfig,
  stream_type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPoints.property.kinesisStreamConfig">kinesis_stream_config</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsKinesisStreamConfig">CloudfrontRealtimeLogConfigEndPointsKinesisStreamConfig</a></code> | Contains information about the Amazon Kinesis data stream where you are sending real-time log data in a real-time log configuration. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPoints.property.streamType">stream_type</a></code> | <code>str</code> | The type of data stream where you are sending real-time log data. The only valid value is ``Kinesis``. |

---

##### `kinesis_stream_config`<sup>Required</sup> <a name="kinesis_stream_config" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPoints.property.kinesisStreamConfig"></a>

```python
kinesis_stream_config: CloudfrontRealtimeLogConfigEndPointsKinesisStreamConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsKinesisStreamConfig">CloudfrontRealtimeLogConfigEndPointsKinesisStreamConfig</a>

Contains information about the Amazon Kinesis data stream where you are sending real-time log data in a real-time log configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudfront_realtime_log_config#kinesis_stream_config CloudfrontRealtimeLogConfig#kinesis_stream_config}

---

##### `stream_type`<sup>Required</sup> <a name="stream_type" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPoints.property.streamType"></a>

```python
stream_type: str
```

- *Type:* str

The type of data stream where you are sending real-time log data. The only valid value is ``Kinesis``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudfront_realtime_log_config#stream_type CloudfrontRealtimeLogConfig#stream_type}

---

### CloudfrontRealtimeLogConfigEndPointsKinesisStreamConfig <a name="CloudfrontRealtimeLogConfigEndPointsKinesisStreamConfig" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsKinesisStreamConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsKinesisStreamConfig.Initializer"></a>

```python
from cdktn_provider_awscc import cloudfront_realtime_log_config

cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsKinesisStreamConfig(
  role_arn: str,
  stream_arn: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsKinesisStreamConfig.property.roleArn">role_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of an IAMlong (IAM) role that CloudFront can use to send real-time log data to your Kinesis data stream. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsKinesisStreamConfig.property.streamArn">stream_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the Kinesis data stream where you are sending real-time log data. |

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsKinesisStreamConfig.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

The Amazon Resource Name (ARN) of an IAMlong (IAM) role that CloudFront can use to send real-time log data to your Kinesis data stream.

For more information the IAM role, see [Real-time log configuration IAM role](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/real-time-logs.html#understand-real-time-log-config-iam-role) in the *Amazon CloudFront Developer Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudfront_realtime_log_config#role_arn CloudfrontRealtimeLogConfig#role_arn}

---

##### `stream_arn`<sup>Required</sup> <a name="stream_arn" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsKinesisStreamConfig.property.streamArn"></a>

```python
stream_arn: str
```

- *Type:* str

The Amazon Resource Name (ARN) of the Kinesis data stream where you are sending real-time log data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudfront_realtime_log_config#stream_arn CloudfrontRealtimeLogConfig#stream_arn}

---

## Classes <a name="Classes" id="Classes"></a>

### CloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference <a name="CloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cloudfront_realtime_log_config

cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.property.streamArnInput">stream_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.property.streamArn">stream_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsKinesisStreamConfig">CloudfrontRealtimeLogConfigEndPointsKinesisStreamConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `stream_arn_input`<sup>Optional</sup> <a name="stream_arn_input" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.property.streamArnInput"></a>

```python
stream_arn_input: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `stream_arn`<sup>Required</sup> <a name="stream_arn" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.property.streamArn"></a>

```python
stream_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CloudfrontRealtimeLogConfigEndPointsKinesisStreamConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsKinesisStreamConfig">CloudfrontRealtimeLogConfigEndPointsKinesisStreamConfig</a>

---


### CloudfrontRealtimeLogConfigEndPointsList <a name="CloudfrontRealtimeLogConfigEndPointsList" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsList.Initializer"></a>

```python
from cdktn_provider_awscc import cloudfront_realtime_log_config

cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CloudfrontRealtimeLogConfigEndPointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPoints">CloudfrontRealtimeLogConfigEndPoints</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CloudfrontRealtimeLogConfigEndPoints]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPoints">CloudfrontRealtimeLogConfigEndPoints</a>]

---


### CloudfrontRealtimeLogConfigEndPointsOutputReference <a name="CloudfrontRealtimeLogConfigEndPointsOutputReference" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cloudfront_realtime_log_config

cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsOutputReference.putKinesisStreamConfig">put_kinesis_stream_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_kinesis_stream_config` <a name="put_kinesis_stream_config" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsOutputReference.putKinesisStreamConfig"></a>

```python
def put_kinesis_stream_config(
  role_arn: str,
  stream_arn: str
) -> None
```

###### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsOutputReference.putKinesisStreamConfig.parameter.roleArn"></a>

- *Type:* str

The Amazon Resource Name (ARN) of an IAMlong (IAM) role that CloudFront can use to send real-time log data to your Kinesis data stream.

For more information the IAM role, see [Real-time log configuration IAM role](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/real-time-logs.html#understand-real-time-log-config-iam-role) in the *Amazon CloudFront Developer Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudfront_realtime_log_config#role_arn CloudfrontRealtimeLogConfig#role_arn}

---

###### `stream_arn`<sup>Required</sup> <a name="stream_arn" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsOutputReference.putKinesisStreamConfig.parameter.streamArn"></a>

- *Type:* str

The Amazon Resource Name (ARN) of the Kinesis data stream where you are sending real-time log data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudfront_realtime_log_config#stream_arn CloudfrontRealtimeLogConfig#stream_arn}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsOutputReference.property.kinesisStreamConfig">kinesis_stream_config</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference">CloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsOutputReference.property.kinesisStreamConfigInput">kinesis_stream_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsKinesisStreamConfig">CloudfrontRealtimeLogConfigEndPointsKinesisStreamConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsOutputReference.property.streamTypeInput">stream_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsOutputReference.property.streamType">stream_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPoints">CloudfrontRealtimeLogConfigEndPoints</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kinesis_stream_config`<sup>Required</sup> <a name="kinesis_stream_config" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsOutputReference.property.kinesisStreamConfig"></a>

```python
kinesis_stream_config: CloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference">CloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference</a>

---

##### `kinesis_stream_config_input`<sup>Optional</sup> <a name="kinesis_stream_config_input" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsOutputReference.property.kinesisStreamConfigInput"></a>

```python
kinesis_stream_config_input: IResolvable | CloudfrontRealtimeLogConfigEndPointsKinesisStreamConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsKinesisStreamConfig">CloudfrontRealtimeLogConfigEndPointsKinesisStreamConfig</a>

---

##### `stream_type_input`<sup>Optional</sup> <a name="stream_type_input" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsOutputReference.property.streamTypeInput"></a>

```python
stream_type_input: str
```

- *Type:* str

---

##### `stream_type`<sup>Required</sup> <a name="stream_type" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsOutputReference.property.streamType"></a>

```python
stream_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPointsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CloudfrontRealtimeLogConfigEndPoints
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudfrontRealtimeLogConfig.CloudfrontRealtimeLogConfigEndPoints">CloudfrontRealtimeLogConfigEndPoints</a>

---



