# `ssmguiconnectPreferences` Submodule <a name="`ssmguiconnectPreferences` Submodule" id="@cdktn/provider-awscc.ssmguiconnectPreferences"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SsmguiconnectPreferences <a name="SsmguiconnectPreferences" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmguiconnect_preferences awscc_ssmguiconnect_preferences}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.Initializer"></a>

```python
from cdktn_provider_awscc import ssmguiconnect_preferences

ssmguiconnectPreferences.SsmguiconnectPreferences(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  connection_recording_preferences: SsmguiconnectPreferencesConnectionRecordingPreferences = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.Initializer.parameter.connectionRecordingPreferences">connection_recording_preferences</a></code> | <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferences">SsmguiconnectPreferencesConnectionRecordingPreferences</a></code> | The set of preferences used for recording RDP connections in the requesting AWS account and AWS Region. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `connection_recording_preferences`<sup>Optional</sup> <a name="connection_recording_preferences" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.Initializer.parameter.connectionRecordingPreferences"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferences">SsmguiconnectPreferencesConnectionRecordingPreferences</a>

The set of preferences used for recording RDP connections in the requesting AWS account and AWS Region.

This includes details such as which S3 bucket recordings are stored in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmguiconnect_preferences#connection_recording_preferences SsmguiconnectPreferences#connection_recording_preferences}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.putConnectionRecordingPreferences">put_connection_recording_preferences</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.resetConnectionRecordingPreferences">reset_connection_recording_preferences</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_connection_recording_preferences` <a name="put_connection_recording_preferences" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.putConnectionRecordingPreferences"></a>

```python
def put_connection_recording_preferences(
  kms_key_arn: str = None,
  recording_destinations: SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinations = None
) -> None
```

###### `kms_key_arn`<sup>Optional</sup> <a name="kms_key_arn" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.putConnectionRecordingPreferences.parameter.kmsKeyArn"></a>

- *Type:* str

The ARN of a AWS KMS key that is used to encrypt data while it is being processed by the service.

This key must exist in the same AWS Region as the node you start an RDP connection to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmguiconnect_preferences#kms_key_arn SsmguiconnectPreferences#kms_key_arn}

---

###### `recording_destinations`<sup>Optional</sup> <a name="recording_destinations" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.putConnectionRecordingPreferences.parameter.recordingDestinations"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinations">SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinations</a>

Determines where recordings of RDP connections are stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmguiconnect_preferences#recording_destinations SsmguiconnectPreferences#recording_destinations}

---

##### `reset_connection_recording_preferences` <a name="reset_connection_recording_preferences" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.resetConnectionRecordingPreferences"></a>

```python
def reset_connection_recording_preferences() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a SsmguiconnectPreferences resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.isConstruct"></a>

```python
from cdktn_provider_awscc import ssmguiconnect_preferences

ssmguiconnectPreferences.SsmguiconnectPreferences.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.isTerraformElement"></a>

```python
from cdktn_provider_awscc import ssmguiconnect_preferences

ssmguiconnectPreferences.SsmguiconnectPreferences.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.isTerraformResource"></a>

```python
from cdktn_provider_awscc import ssmguiconnect_preferences

ssmguiconnectPreferences.SsmguiconnectPreferences.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import ssmguiconnect_preferences

ssmguiconnectPreferences.SsmguiconnectPreferences.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a SsmguiconnectPreferences resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SsmguiconnectPreferences to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SsmguiconnectPreferences that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmguiconnect_preferences#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SsmguiconnectPreferences to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.property.connectionRecordingPreferences">connection_recording_preferences</a></code> | <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference">SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.property.connectionRecordingPreferencesInput">connection_recording_preferences_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferences">SsmguiconnectPreferencesConnectionRecordingPreferences</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `connection_recording_preferences`<sup>Required</sup> <a name="connection_recording_preferences" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.property.connectionRecordingPreferences"></a>

```python
connection_recording_preferences: SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference">SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `connection_recording_preferences_input`<sup>Optional</sup> <a name="connection_recording_preferences_input" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.property.connectionRecordingPreferencesInput"></a>

```python
connection_recording_preferences_input: IResolvable | SsmguiconnectPreferencesConnectionRecordingPreferences
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferences">SsmguiconnectPreferencesConnectionRecordingPreferences</a>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SsmguiconnectPreferencesConfig <a name="SsmguiconnectPreferencesConfig" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConfig.Initializer"></a>

```python
from cdktn_provider_awscc import ssmguiconnect_preferences

ssmguiconnectPreferences.SsmguiconnectPreferencesConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  connection_recording_preferences: SsmguiconnectPreferencesConnectionRecordingPreferences = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConfig.property.connectionRecordingPreferences">connection_recording_preferences</a></code> | <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferences">SsmguiconnectPreferencesConnectionRecordingPreferences</a></code> | The set of preferences used for recording RDP connections in the requesting AWS account and AWS Region. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `connection_recording_preferences`<sup>Optional</sup> <a name="connection_recording_preferences" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConfig.property.connectionRecordingPreferences"></a>

```python
connection_recording_preferences: SsmguiconnectPreferencesConnectionRecordingPreferences
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferences">SsmguiconnectPreferencesConnectionRecordingPreferences</a>

The set of preferences used for recording RDP connections in the requesting AWS account and AWS Region.

This includes details such as which S3 bucket recordings are stored in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmguiconnect_preferences#connection_recording_preferences SsmguiconnectPreferences#connection_recording_preferences}

---

### SsmguiconnectPreferencesConnectionRecordingPreferences <a name="SsmguiconnectPreferencesConnectionRecordingPreferences" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferences"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferences.Initializer"></a>

```python
from cdktn_provider_awscc import ssmguiconnect_preferences

ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferences(
  kms_key_arn: str = None,
  recording_destinations: SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinations = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferences.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | The ARN of a AWS KMS key that is used to encrypt data while it is being processed by the service. |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferences.property.recordingDestinations">recording_destinations</a></code> | <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinations">SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinations</a></code> | Determines where recordings of RDP connections are stored. |

---

##### `kms_key_arn`<sup>Optional</sup> <a name="kms_key_arn" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferences.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

The ARN of a AWS KMS key that is used to encrypt data while it is being processed by the service.

This key must exist in the same AWS Region as the node you start an RDP connection to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmguiconnect_preferences#kms_key_arn SsmguiconnectPreferences#kms_key_arn}

---

##### `recording_destinations`<sup>Optional</sup> <a name="recording_destinations" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferences.property.recordingDestinations"></a>

```python
recording_destinations: SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinations
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinations">SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinations</a>

Determines where recordings of RDP connections are stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmguiconnect_preferences#recording_destinations SsmguiconnectPreferences#recording_destinations}

---

### SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinations <a name="SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinations" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinations.Initializer"></a>

```python
from cdktn_provider_awscc import ssmguiconnect_preferences

ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinations(
  s3_buckets: IResolvable | typing.List[SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3Buckets] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinations.property.s3Buckets">s3_buckets</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3Buckets">SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3Buckets</a>]</code> | The S3 bucket where RDP connection recordings are stored. |

---

##### `s3_buckets`<sup>Optional</sup> <a name="s3_buckets" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinations.property.s3Buckets"></a>

```python
s3_buckets: IResolvable | typing.List[SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3Buckets]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3Buckets">SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3Buckets</a>]

The S3 bucket where RDP connection recordings are stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmguiconnect_preferences#s3_buckets SsmguiconnectPreferences#s3_buckets}

---

### SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3Buckets <a name="SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3Buckets" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3Buckets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3Buckets.Initializer"></a>

```python
from cdktn_provider_awscc import ssmguiconnect_preferences

ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3Buckets(
  bucket_name: str = None,
  bucket_owner: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3Buckets.property.bucketName">bucket_name</a></code> | <code>str</code> | The name of the S3 bucket where RDP connection recordings are stored. |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3Buckets.property.bucketOwner">bucket_owner</a></code> | <code>str</code> | The AWS account number that owns the S3 bucket. |

---

##### `bucket_name`<sup>Optional</sup> <a name="bucket_name" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3Buckets.property.bucketName"></a>

```python
bucket_name: str
```

- *Type:* str

The name of the S3 bucket where RDP connection recordings are stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmguiconnect_preferences#bucket_name SsmguiconnectPreferences#bucket_name}

---

##### `bucket_owner`<sup>Optional</sup> <a name="bucket_owner" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3Buckets.property.bucketOwner"></a>

```python
bucket_owner: str
```

- *Type:* str

The AWS account number that owns the S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmguiconnect_preferences#bucket_owner SsmguiconnectPreferences#bucket_owner}

---

## Classes <a name="Classes" id="Classes"></a>

### SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference <a name="SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ssmguiconnect_preferences

ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.putRecordingDestinations">put_recording_destinations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.resetKmsKeyArn">reset_kms_key_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.resetRecordingDestinations">reset_recording_destinations</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_recording_destinations` <a name="put_recording_destinations" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.putRecordingDestinations"></a>

```python
def put_recording_destinations(
  s3_buckets: IResolvable | typing.List[SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3Buckets] = None
) -> None
```

###### `s3_buckets`<sup>Optional</sup> <a name="s3_buckets" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.putRecordingDestinations.parameter.s3Buckets"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3Buckets">SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3Buckets</a>]

The S3 bucket where RDP connection recordings are stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmguiconnect_preferences#s3_buckets SsmguiconnectPreferences#s3_buckets}

---

##### `reset_kms_key_arn` <a name="reset_kms_key_arn" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.resetKmsKeyArn"></a>

```python
def reset_kms_key_arn() -> None
```

##### `reset_recording_destinations` <a name="reset_recording_destinations" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.resetRecordingDestinations"></a>

```python
def reset_recording_destinations() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.property.recordingDestinations">recording_destinations</a></code> | <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference">SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.property.kmsKeyArnInput">kms_key_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.property.recordingDestinationsInput">recording_destinations_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinations">SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferences">SsmguiconnectPreferencesConnectionRecordingPreferences</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `recording_destinations`<sup>Required</sup> <a name="recording_destinations" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.property.recordingDestinations"></a>

```python
recording_destinations: SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference">SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference</a>

---

##### `kms_key_arn_input`<sup>Optional</sup> <a name="kms_key_arn_input" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.property.kmsKeyArnInput"></a>

```python
kms_key_arn_input: str
```

- *Type:* str

---

##### `recording_destinations_input`<sup>Optional</sup> <a name="recording_destinations_input" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.property.recordingDestinationsInput"></a>

```python
recording_destinations_input: IResolvable | SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinations
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinations">SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinations</a>

---

##### `kms_key_arn`<sup>Required</sup> <a name="kms_key_arn" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SsmguiconnectPreferencesConnectionRecordingPreferences
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferences">SsmguiconnectPreferencesConnectionRecordingPreferences</a>

---


### SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference <a name="SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ssmguiconnect_preferences

ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.putS3Buckets">put_s3_buckets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.resetS3Buckets">reset_s3_buckets</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_s3_buckets` <a name="put_s3_buckets" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.putS3Buckets"></a>

```python
def put_s3_buckets(
  value: IResolvable | typing.List[SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3Buckets]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.putS3Buckets.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3Buckets">SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3Buckets</a>]

---

##### `reset_s3_buckets` <a name="reset_s3_buckets" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.resetS3Buckets"></a>

```python
def reset_s3_buckets() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.property.s3Buckets">s3_buckets</a></code> | <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsList">SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.property.s3BucketsInput">s3_buckets_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3Buckets">SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3Buckets</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinations">SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `s3_buckets`<sup>Required</sup> <a name="s3_buckets" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.property.s3Buckets"></a>

```python
s3_buckets: SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsList
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsList">SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsList</a>

---

##### `s3_buckets_input`<sup>Optional</sup> <a name="s3_buckets_input" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.property.s3BucketsInput"></a>

```python
s3_buckets_input: IResolvable | typing.List[SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3Buckets]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3Buckets">SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3Buckets</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinations
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinations">SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinations</a>

---


### SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsList <a name="SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsList" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsList.Initializer"></a>

```python
from cdktn_provider_awscc import ssmguiconnect_preferences

ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3Buckets">SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3Buckets</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3Buckets]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3Buckets">SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3Buckets</a>]

---


### SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference <a name="SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ssmguiconnect_preferences

ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.resetBucketName">reset_bucket_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.resetBucketOwner">reset_bucket_owner</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_bucket_name` <a name="reset_bucket_name" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.resetBucketName"></a>

```python
def reset_bucket_name() -> None
```

##### `reset_bucket_owner` <a name="reset_bucket_owner" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.resetBucketOwner"></a>

```python
def reset_bucket_owner() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.property.bucketNameInput">bucket_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.property.bucketOwnerInput">bucket_owner_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.property.bucketName">bucket_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.property.bucketOwner">bucket_owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3Buckets">SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3Buckets</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_name_input`<sup>Optional</sup> <a name="bucket_name_input" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.property.bucketNameInput"></a>

```python
bucket_name_input: str
```

- *Type:* str

---

##### `bucket_owner_input`<sup>Optional</sup> <a name="bucket_owner_input" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.property.bucketOwnerInput"></a>

```python
bucket_owner_input: str
```

- *Type:* str

---

##### `bucket_name`<sup>Required</sup> <a name="bucket_name" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.property.bucketName"></a>

```python
bucket_name: str
```

- *Type:* str

---

##### `bucket_owner`<sup>Required</sup> <a name="bucket_owner" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.property.bucketOwner"></a>

```python
bucket_owner: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3Buckets
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3Buckets">SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3Buckets</a>

---



