# `qldbStream` Submodule <a name="`qldbStream` Submodule" id="@cdktn/provider-awscc.qldbStream"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### QldbStream <a name="QldbStream" id="@cdktn/provider-awscc.qldbStream.QldbStream"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qldb_stream awscc_qldb_stream}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.qldbStream.QldbStream.Initializer"></a>

```python
from cdktn_provider_awscc import qldb_stream

qldbStream.QldbStream(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  inclusive_start_time: str,
  kinesis_configuration: QldbStreamKinesisConfiguration,
  ledger_name: str,
  role_arn: str,
  stream_name: str,
  exclusive_end_time: str = None,
  tags: IResolvable | typing.List[QldbStreamTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qldbStream.QldbStream.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.qldbStream.QldbStream.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.qldbStream.QldbStream.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qldbStream.QldbStream.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qldbStream.QldbStream.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qldbStream.QldbStream.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qldbStream.QldbStream.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qldbStream.QldbStream.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qldbStream.QldbStream.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qldbStream.QldbStream.Initializer.parameter.inclusiveStartTime">inclusive_start_time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qldb_stream#inclusive_start_time QldbStream#inclusive_start_time}. |
| <code><a href="#@cdktn/provider-awscc.qldbStream.QldbStream.Initializer.parameter.kinesisConfiguration">kinesis_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.qldbStream.QldbStreamKinesisConfiguration">QldbStreamKinesisConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qldb_stream#kinesis_configuration QldbStream#kinesis_configuration}. |
| <code><a href="#@cdktn/provider-awscc.qldbStream.QldbStream.Initializer.parameter.ledgerName">ledger_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qldb_stream#ledger_name QldbStream#ledger_name}. |
| <code><a href="#@cdktn/provider-awscc.qldbStream.QldbStream.Initializer.parameter.roleArn">role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qldb_stream#role_arn QldbStream#role_arn}. |
| <code><a href="#@cdktn/provider-awscc.qldbStream.QldbStream.Initializer.parameter.streamName">stream_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qldb_stream#stream_name QldbStream#stream_name}. |
| <code><a href="#@cdktn/provider-awscc.qldbStream.QldbStream.Initializer.parameter.exclusiveEndTime">exclusive_end_time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qldb_stream#exclusive_end_time QldbStream#exclusive_end_time}. |
| <code><a href="#@cdktn/provider-awscc.qldbStream.QldbStream.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.qldbStream.QldbStreamTags">QldbStreamTags</a>]</code> | An array of key-value pairs to apply to this resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.qldbStream.QldbStream.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.qldbStream.QldbStream.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.qldbStream.QldbStream.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.qldbStream.QldbStream.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.qldbStream.QldbStream.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.qldbStream.QldbStream.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.qldbStream.QldbStream.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.qldbStream.QldbStream.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.qldbStream.QldbStream.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `inclusive_start_time`<sup>Required</sup> <a name="inclusive_start_time" id="@cdktn/provider-awscc.qldbStream.QldbStream.Initializer.parameter.inclusiveStartTime"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qldb_stream#inclusive_start_time QldbStream#inclusive_start_time}.

---

##### `kinesis_configuration`<sup>Required</sup> <a name="kinesis_configuration" id="@cdktn/provider-awscc.qldbStream.QldbStream.Initializer.parameter.kinesisConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.qldbStream.QldbStreamKinesisConfiguration">QldbStreamKinesisConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qldb_stream#kinesis_configuration QldbStream#kinesis_configuration}.

---

##### `ledger_name`<sup>Required</sup> <a name="ledger_name" id="@cdktn/provider-awscc.qldbStream.QldbStream.Initializer.parameter.ledgerName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qldb_stream#ledger_name QldbStream#ledger_name}.

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.qldbStream.QldbStream.Initializer.parameter.roleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qldb_stream#role_arn QldbStream#role_arn}.

---

##### `stream_name`<sup>Required</sup> <a name="stream_name" id="@cdktn/provider-awscc.qldbStream.QldbStream.Initializer.parameter.streamName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qldb_stream#stream_name QldbStream#stream_name}.

---

##### `exclusive_end_time`<sup>Optional</sup> <a name="exclusive_end_time" id="@cdktn/provider-awscc.qldbStream.QldbStream.Initializer.parameter.exclusiveEndTime"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qldb_stream#exclusive_end_time QldbStream#exclusive_end_time}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.qldbStream.QldbStream.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.qldbStream.QldbStreamTags">QldbStreamTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qldb_stream#tags QldbStream#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qldbStream.QldbStream.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.qldbStream.QldbStream.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.qldbStream.QldbStream.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qldbStream.QldbStream.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.qldbStream.QldbStream.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.qldbStream.QldbStream.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qldbStream.QldbStream.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qldbStream.QldbStream.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.qldbStream.QldbStream.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.qldbStream.QldbStream.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qldbStream.QldbStream.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qldbStream.QldbStream.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qldbStream.QldbStream.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qldbStream.QldbStream.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qldbStream.QldbStream.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qldbStream.QldbStream.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qldbStream.QldbStream.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qldbStream.QldbStream.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qldbStream.QldbStream.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qldbStream.QldbStream.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qldbStream.QldbStream.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qldbStream.QldbStream.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.qldbStream.QldbStream.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.qldbStream.QldbStream.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.qldbStream.QldbStream.putKinesisConfiguration">put_kinesis_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qldbStream.QldbStream.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qldbStream.QldbStream.resetExclusiveEndTime">reset_exclusive_end_time</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qldbStream.QldbStream.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.qldbStream.QldbStream.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.qldbStream.QldbStream.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.qldbStream.QldbStream.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.qldbStream.QldbStream.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.qldbStream.QldbStream.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.qldbStream.QldbStream.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.qldbStream.QldbStream.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.qldbStream.QldbStream.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.qldbStream.QldbStream.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.qldbStream.QldbStream.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.qldbStream.QldbStream.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.qldbStream.QldbStream.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.qldbStream.QldbStream.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.qldbStream.QldbStream.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.qldbStream.QldbStream.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qldbStream.QldbStream.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.qldbStream.QldbStream.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qldbStream.QldbStream.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.qldbStream.QldbStream.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qldbStream.QldbStream.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.qldbStream.QldbStream.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qldbStream.QldbStream.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.qldbStream.QldbStream.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qldbStream.QldbStream.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.qldbStream.QldbStream.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qldbStream.QldbStream.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.qldbStream.QldbStream.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qldbStream.QldbStream.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.qldbStream.QldbStream.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qldbStream.QldbStream.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.qldbStream.QldbStream.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qldbStream.QldbStream.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.qldbStream.QldbStream.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.qldbStream.QldbStream.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.qldbStream.QldbStream.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.qldbStream.QldbStream.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.qldbStream.QldbStream.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qldbStream.QldbStream.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.qldbStream.QldbStream.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.qldbStream.QldbStream.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.qldbStream.QldbStream.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.qldbStream.QldbStream.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.qldbStream.QldbStream.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.qldbStream.QldbStream.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.qldbStream.QldbStream.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_kinesis_configuration` <a name="put_kinesis_configuration" id="@cdktn/provider-awscc.qldbStream.QldbStream.putKinesisConfiguration"></a>

```python
def put_kinesis_configuration(
  aggregation_enabled: bool | IResolvable = None,
  stream_arn: str = None
) -> None
```

###### `aggregation_enabled`<sup>Optional</sup> <a name="aggregation_enabled" id="@cdktn/provider-awscc.qldbStream.QldbStream.putKinesisConfiguration.parameter.aggregationEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qldb_stream#aggregation_enabled QldbStream#aggregation_enabled}.

---

###### `stream_arn`<sup>Optional</sup> <a name="stream_arn" id="@cdktn/provider-awscc.qldbStream.QldbStream.putKinesisConfiguration.parameter.streamArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qldb_stream#stream_arn QldbStream#stream_arn}.

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.qldbStream.QldbStream.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[QldbStreamTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.qldbStream.QldbStream.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.qldbStream.QldbStreamTags">QldbStreamTags</a>]

---

##### `reset_exclusive_end_time` <a name="reset_exclusive_end_time" id="@cdktn/provider-awscc.qldbStream.QldbStream.resetExclusiveEndTime"></a>

```python
def reset_exclusive_end_time() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.qldbStream.QldbStream.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qldbStream.QldbStream.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.qldbStream.QldbStream.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qldbStream.QldbStream.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qldbStream.QldbStream.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a QldbStream resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.qldbStream.QldbStream.isConstruct"></a>

```python
from cdktn_provider_awscc import qldb_stream

qldbStream.QldbStream.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.qldbStream.QldbStream.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.qldbStream.QldbStream.isTerraformElement"></a>

```python
from cdktn_provider_awscc import qldb_stream

qldbStream.QldbStream.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.qldbStream.QldbStream.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.qldbStream.QldbStream.isTerraformResource"></a>

```python
from cdktn_provider_awscc import qldb_stream

qldbStream.QldbStream.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.qldbStream.QldbStream.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.qldbStream.QldbStream.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import qldb_stream

qldbStream.QldbStream.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a QldbStream resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.qldbStream.QldbStream.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.qldbStream.QldbStream.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the QldbStream to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.qldbStream.QldbStream.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing QldbStream that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qldb_stream#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.qldbStream.QldbStream.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the QldbStream to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qldbStream.QldbStream.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.qldbStream.QldbStream.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qldbStream.QldbStream.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qldbStream.QldbStream.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qldbStream.QldbStream.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qldbStream.QldbStream.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qldbStream.QldbStream.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qldbStream.QldbStream.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qldbStream.QldbStream.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qldbStream.QldbStream.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qldbStream.QldbStream.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qldbStream.QldbStream.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qldbStream.QldbStream.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qldbStream.QldbStream.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qldbStream.QldbStream.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qldbStream.QldbStream.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qldbStream.QldbStream.property.kinesisConfiguration">kinesis_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.qldbStream.QldbStreamKinesisConfigurationOutputReference">QldbStreamKinesisConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qldbStream.QldbStream.property.streamId">stream_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qldbStream.QldbStream.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.qldbStream.QldbStreamTagsList">QldbStreamTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qldbStream.QldbStream.property.exclusiveEndTimeInput">exclusive_end_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qldbStream.QldbStream.property.inclusiveStartTimeInput">inclusive_start_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qldbStream.QldbStream.property.kinesisConfigurationInput">kinesis_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.qldbStream.QldbStreamKinesisConfiguration">QldbStreamKinesisConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qldbStream.QldbStream.property.ledgerNameInput">ledger_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qldbStream.QldbStream.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qldbStream.QldbStream.property.streamNameInput">stream_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qldbStream.QldbStream.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.qldbStream.QldbStreamTags">QldbStreamTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qldbStream.QldbStream.property.exclusiveEndTime">exclusive_end_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qldbStream.QldbStream.property.inclusiveStartTime">inclusive_start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qldbStream.QldbStream.property.ledgerName">ledger_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qldbStream.QldbStream.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qldbStream.QldbStream.property.streamName">stream_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.qldbStream.QldbStream.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.qldbStream.QldbStream.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.qldbStream.QldbStream.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.qldbStream.QldbStream.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.qldbStream.QldbStream.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.qldbStream.QldbStream.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.qldbStream.QldbStream.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.qldbStream.QldbStream.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.qldbStream.QldbStream.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.qldbStream.QldbStream.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.qldbStream.QldbStream.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.qldbStream.QldbStream.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.qldbStream.QldbStream.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.qldbStream.QldbStream.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.qldbStream.QldbStream.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.qldbStream.QldbStream.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `kinesis_configuration`<sup>Required</sup> <a name="kinesis_configuration" id="@cdktn/provider-awscc.qldbStream.QldbStream.property.kinesisConfiguration"></a>

```python
kinesis_configuration: QldbStreamKinesisConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.qldbStream.QldbStreamKinesisConfigurationOutputReference">QldbStreamKinesisConfigurationOutputReference</a>

---

##### `stream_id`<sup>Required</sup> <a name="stream_id" id="@cdktn/provider-awscc.qldbStream.QldbStream.property.streamId"></a>

```python
stream_id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.qldbStream.QldbStream.property.tags"></a>

```python
tags: QldbStreamTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.qldbStream.QldbStreamTagsList">QldbStreamTagsList</a>

---

##### `exclusive_end_time_input`<sup>Optional</sup> <a name="exclusive_end_time_input" id="@cdktn/provider-awscc.qldbStream.QldbStream.property.exclusiveEndTimeInput"></a>

```python
exclusive_end_time_input: str
```

- *Type:* str

---

##### `inclusive_start_time_input`<sup>Optional</sup> <a name="inclusive_start_time_input" id="@cdktn/provider-awscc.qldbStream.QldbStream.property.inclusiveStartTimeInput"></a>

```python
inclusive_start_time_input: str
```

- *Type:* str

---

##### `kinesis_configuration_input`<sup>Optional</sup> <a name="kinesis_configuration_input" id="@cdktn/provider-awscc.qldbStream.QldbStream.property.kinesisConfigurationInput"></a>

```python
kinesis_configuration_input: IResolvable | QldbStreamKinesisConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.qldbStream.QldbStreamKinesisConfiguration">QldbStreamKinesisConfiguration</a>

---

##### `ledger_name_input`<sup>Optional</sup> <a name="ledger_name_input" id="@cdktn/provider-awscc.qldbStream.QldbStream.property.ledgerNameInput"></a>

```python
ledger_name_input: str
```

- *Type:* str

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktn/provider-awscc.qldbStream.QldbStream.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `stream_name_input`<sup>Optional</sup> <a name="stream_name_input" id="@cdktn/provider-awscc.qldbStream.QldbStream.property.streamNameInput"></a>

```python
stream_name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.qldbStream.QldbStream.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[QldbStreamTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.qldbStream.QldbStreamTags">QldbStreamTags</a>]

---

##### `exclusive_end_time`<sup>Required</sup> <a name="exclusive_end_time" id="@cdktn/provider-awscc.qldbStream.QldbStream.property.exclusiveEndTime"></a>

```python
exclusive_end_time: str
```

- *Type:* str

---

##### `inclusive_start_time`<sup>Required</sup> <a name="inclusive_start_time" id="@cdktn/provider-awscc.qldbStream.QldbStream.property.inclusiveStartTime"></a>

```python
inclusive_start_time: str
```

- *Type:* str

---

##### `ledger_name`<sup>Required</sup> <a name="ledger_name" id="@cdktn/provider-awscc.qldbStream.QldbStream.property.ledgerName"></a>

```python
ledger_name: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.qldbStream.QldbStream.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `stream_name`<sup>Required</sup> <a name="stream_name" id="@cdktn/provider-awscc.qldbStream.QldbStream.property.streamName"></a>

```python
stream_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qldbStream.QldbStream.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.qldbStream.QldbStream.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### QldbStreamConfig <a name="QldbStreamConfig" id="@cdktn/provider-awscc.qldbStream.QldbStreamConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.qldbStream.QldbStreamConfig.Initializer"></a>

```python
from cdktn_provider_awscc import qldb_stream

qldbStream.QldbStreamConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  inclusive_start_time: str,
  kinesis_configuration: QldbStreamKinesisConfiguration,
  ledger_name: str,
  role_arn: str,
  stream_name: str,
  exclusive_end_time: str = None,
  tags: IResolvable | typing.List[QldbStreamTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qldbStream.QldbStreamConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qldbStream.QldbStreamConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qldbStream.QldbStreamConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qldbStream.QldbStreamConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qldbStream.QldbStreamConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qldbStream.QldbStreamConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qldbStream.QldbStreamConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qldbStream.QldbStreamConfig.property.inclusiveStartTime">inclusive_start_time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qldb_stream#inclusive_start_time QldbStream#inclusive_start_time}. |
| <code><a href="#@cdktn/provider-awscc.qldbStream.QldbStreamConfig.property.kinesisConfiguration">kinesis_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.qldbStream.QldbStreamKinesisConfiguration">QldbStreamKinesisConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qldb_stream#kinesis_configuration QldbStream#kinesis_configuration}. |
| <code><a href="#@cdktn/provider-awscc.qldbStream.QldbStreamConfig.property.ledgerName">ledger_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qldb_stream#ledger_name QldbStream#ledger_name}. |
| <code><a href="#@cdktn/provider-awscc.qldbStream.QldbStreamConfig.property.roleArn">role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qldb_stream#role_arn QldbStream#role_arn}. |
| <code><a href="#@cdktn/provider-awscc.qldbStream.QldbStreamConfig.property.streamName">stream_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qldb_stream#stream_name QldbStream#stream_name}. |
| <code><a href="#@cdktn/provider-awscc.qldbStream.QldbStreamConfig.property.exclusiveEndTime">exclusive_end_time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qldb_stream#exclusive_end_time QldbStream#exclusive_end_time}. |
| <code><a href="#@cdktn/provider-awscc.qldbStream.QldbStreamConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.qldbStream.QldbStreamTags">QldbStreamTags</a>]</code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.qldbStream.QldbStreamConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.qldbStream.QldbStreamConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.qldbStream.QldbStreamConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.qldbStream.QldbStreamConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.qldbStream.QldbStreamConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.qldbStream.QldbStreamConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.qldbStream.QldbStreamConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `inclusive_start_time`<sup>Required</sup> <a name="inclusive_start_time" id="@cdktn/provider-awscc.qldbStream.QldbStreamConfig.property.inclusiveStartTime"></a>

```python
inclusive_start_time: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qldb_stream#inclusive_start_time QldbStream#inclusive_start_time}.

---

##### `kinesis_configuration`<sup>Required</sup> <a name="kinesis_configuration" id="@cdktn/provider-awscc.qldbStream.QldbStreamConfig.property.kinesisConfiguration"></a>

```python
kinesis_configuration: QldbStreamKinesisConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.qldbStream.QldbStreamKinesisConfiguration">QldbStreamKinesisConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qldb_stream#kinesis_configuration QldbStream#kinesis_configuration}.

---

##### `ledger_name`<sup>Required</sup> <a name="ledger_name" id="@cdktn/provider-awscc.qldbStream.QldbStreamConfig.property.ledgerName"></a>

```python
ledger_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qldb_stream#ledger_name QldbStream#ledger_name}.

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.qldbStream.QldbStreamConfig.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qldb_stream#role_arn QldbStream#role_arn}.

---

##### `stream_name`<sup>Required</sup> <a name="stream_name" id="@cdktn/provider-awscc.qldbStream.QldbStreamConfig.property.streamName"></a>

```python
stream_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qldb_stream#stream_name QldbStream#stream_name}.

---

##### `exclusive_end_time`<sup>Optional</sup> <a name="exclusive_end_time" id="@cdktn/provider-awscc.qldbStream.QldbStreamConfig.property.exclusiveEndTime"></a>

```python
exclusive_end_time: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qldb_stream#exclusive_end_time QldbStream#exclusive_end_time}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.qldbStream.QldbStreamConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[QldbStreamTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.qldbStream.QldbStreamTags">QldbStreamTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qldb_stream#tags QldbStream#tags}

---

### QldbStreamKinesisConfiguration <a name="QldbStreamKinesisConfiguration" id="@cdktn/provider-awscc.qldbStream.QldbStreamKinesisConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.qldbStream.QldbStreamKinesisConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import qldb_stream

qldbStream.QldbStreamKinesisConfiguration(
  aggregation_enabled: bool | IResolvable = None,
  stream_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qldbStream.QldbStreamKinesisConfiguration.property.aggregationEnabled">aggregation_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qldb_stream#aggregation_enabled QldbStream#aggregation_enabled}. |
| <code><a href="#@cdktn/provider-awscc.qldbStream.QldbStreamKinesisConfiguration.property.streamArn">stream_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qldb_stream#stream_arn QldbStream#stream_arn}. |

---

##### `aggregation_enabled`<sup>Optional</sup> <a name="aggregation_enabled" id="@cdktn/provider-awscc.qldbStream.QldbStreamKinesisConfiguration.property.aggregationEnabled"></a>

```python
aggregation_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qldb_stream#aggregation_enabled QldbStream#aggregation_enabled}.

---

##### `stream_arn`<sup>Optional</sup> <a name="stream_arn" id="@cdktn/provider-awscc.qldbStream.QldbStreamKinesisConfiguration.property.streamArn"></a>

```python
stream_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qldb_stream#stream_arn QldbStream#stream_arn}.

---

### QldbStreamTags <a name="QldbStreamTags" id="@cdktn/provider-awscc.qldbStream.QldbStreamTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.qldbStream.QldbStreamTags.Initializer"></a>

```python
from cdktn_provider_awscc import qldb_stream

qldbStream.QldbStreamTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qldbStream.QldbStreamTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.qldbStream.QldbStreamTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.qldbStream.QldbStreamTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qldb_stream#key QldbStream#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.qldbStream.QldbStreamTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qldb_stream#value QldbStream#value}

---

## Classes <a name="Classes" id="Classes"></a>

### QldbStreamKinesisConfigurationOutputReference <a name="QldbStreamKinesisConfigurationOutputReference" id="@cdktn/provider-awscc.qldbStream.QldbStreamKinesisConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.qldbStream.QldbStreamKinesisConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import qldb_stream

qldbStream.QldbStreamKinesisConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qldbStream.QldbStreamKinesisConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.qldbStream.QldbStreamKinesisConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.qldbStream.QldbStreamKinesisConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qldbStream.QldbStreamKinesisConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qldbStream.QldbStreamKinesisConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qldbStream.QldbStreamKinesisConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qldbStream.QldbStreamKinesisConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qldbStream.QldbStreamKinesisConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qldbStream.QldbStreamKinesisConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qldbStream.QldbStreamKinesisConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qldbStream.QldbStreamKinesisConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qldbStream.QldbStreamKinesisConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qldbStream.QldbStreamKinesisConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qldbStream.QldbStreamKinesisConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qldbStream.QldbStreamKinesisConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qldbStream.QldbStreamKinesisConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.qldbStream.QldbStreamKinesisConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.qldbStream.QldbStreamKinesisConfigurationOutputReference.resetAggregationEnabled">reset_aggregation_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qldbStream.QldbStreamKinesisConfigurationOutputReference.resetStreamArn">reset_stream_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.qldbStream.QldbStreamKinesisConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.qldbStream.QldbStreamKinesisConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qldbStream.QldbStreamKinesisConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.qldbStream.QldbStreamKinesisConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qldbStream.QldbStreamKinesisConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.qldbStream.QldbStreamKinesisConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qldbStream.QldbStreamKinesisConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.qldbStream.QldbStreamKinesisConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qldbStream.QldbStreamKinesisConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.qldbStream.QldbStreamKinesisConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qldbStream.QldbStreamKinesisConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.qldbStream.QldbStreamKinesisConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qldbStream.QldbStreamKinesisConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.qldbStream.QldbStreamKinesisConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qldbStream.QldbStreamKinesisConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.qldbStream.QldbStreamKinesisConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qldbStream.QldbStreamKinesisConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.qldbStream.QldbStreamKinesisConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qldbStream.QldbStreamKinesisConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.qldbStream.QldbStreamKinesisConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.qldbStream.QldbStreamKinesisConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.qldbStream.QldbStreamKinesisConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.qldbStream.QldbStreamKinesisConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.qldbStream.QldbStreamKinesisConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_aggregation_enabled` <a name="reset_aggregation_enabled" id="@cdktn/provider-awscc.qldbStream.QldbStreamKinesisConfigurationOutputReference.resetAggregationEnabled"></a>

```python
def reset_aggregation_enabled() -> None
```

##### `reset_stream_arn` <a name="reset_stream_arn" id="@cdktn/provider-awscc.qldbStream.QldbStreamKinesisConfigurationOutputReference.resetStreamArn"></a>

```python
def reset_stream_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qldbStream.QldbStreamKinesisConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.qldbStream.QldbStreamKinesisConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qldbStream.QldbStreamKinesisConfigurationOutputReference.property.aggregationEnabledInput">aggregation_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qldbStream.QldbStreamKinesisConfigurationOutputReference.property.streamArnInput">stream_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qldbStream.QldbStreamKinesisConfigurationOutputReference.property.aggregationEnabled">aggregation_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qldbStream.QldbStreamKinesisConfigurationOutputReference.property.streamArn">stream_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qldbStream.QldbStreamKinesisConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.qldbStream.QldbStreamKinesisConfiguration">QldbStreamKinesisConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.qldbStream.QldbStreamKinesisConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.qldbStream.QldbStreamKinesisConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `aggregation_enabled_input`<sup>Optional</sup> <a name="aggregation_enabled_input" id="@cdktn/provider-awscc.qldbStream.QldbStreamKinesisConfigurationOutputReference.property.aggregationEnabledInput"></a>

```python
aggregation_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `stream_arn_input`<sup>Optional</sup> <a name="stream_arn_input" id="@cdktn/provider-awscc.qldbStream.QldbStreamKinesisConfigurationOutputReference.property.streamArnInput"></a>

```python
stream_arn_input: str
```

- *Type:* str

---

##### `aggregation_enabled`<sup>Required</sup> <a name="aggregation_enabled" id="@cdktn/provider-awscc.qldbStream.QldbStreamKinesisConfigurationOutputReference.property.aggregationEnabled"></a>

```python
aggregation_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `stream_arn`<sup>Required</sup> <a name="stream_arn" id="@cdktn/provider-awscc.qldbStream.QldbStreamKinesisConfigurationOutputReference.property.streamArn"></a>

```python
stream_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.qldbStream.QldbStreamKinesisConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | QldbStreamKinesisConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.qldbStream.QldbStreamKinesisConfiguration">QldbStreamKinesisConfiguration</a>

---


### QldbStreamTagsList <a name="QldbStreamTagsList" id="@cdktn/provider-awscc.qldbStream.QldbStreamTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.qldbStream.QldbStreamTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import qldb_stream

qldbStream.QldbStreamTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qldbStream.QldbStreamTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.qldbStream.QldbStreamTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.qldbStream.QldbStreamTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.qldbStream.QldbStreamTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qldbStream.QldbStreamTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.qldbStream.QldbStreamTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qldbStream.QldbStreamTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.qldbStream.QldbStreamTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qldbStream.QldbStreamTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.qldbStream.QldbStreamTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.qldbStream.QldbStreamTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.qldbStream.QldbStreamTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.qldbStream.QldbStreamTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.qldbStream.QldbStreamTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.qldbStream.QldbStreamTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.qldbStream.QldbStreamTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.qldbStream.QldbStreamTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.qldbStream.QldbStreamTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> QldbStreamTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.qldbStream.QldbStreamTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qldbStream.QldbStreamTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.qldbStream.QldbStreamTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qldbStream.QldbStreamTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.qldbStream.QldbStreamTags">QldbStreamTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.qldbStream.QldbStreamTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.qldbStream.QldbStreamTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.qldbStream.QldbStreamTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[QldbStreamTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.qldbStream.QldbStreamTags">QldbStreamTags</a>]

---


### QldbStreamTagsOutputReference <a name="QldbStreamTagsOutputReference" id="@cdktn/provider-awscc.qldbStream.QldbStreamTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.qldbStream.QldbStreamTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import qldb_stream

qldbStream.QldbStreamTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qldbStream.QldbStreamTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.qldbStream.QldbStreamTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.qldbStream.QldbStreamTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.qldbStream.QldbStreamTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.qldbStream.QldbStreamTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qldbStream.QldbStreamTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.qldbStream.QldbStreamTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.qldbStream.QldbStreamTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qldbStream.QldbStreamTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qldbStream.QldbStreamTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qldbStream.QldbStreamTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qldbStream.QldbStreamTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qldbStream.QldbStreamTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qldbStream.QldbStreamTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qldbStream.QldbStreamTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qldbStream.QldbStreamTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qldbStream.QldbStreamTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qldbStream.QldbStreamTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qldbStream.QldbStreamTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qldbStream.QldbStreamTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.qldbStream.QldbStreamTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.qldbStream.QldbStreamTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qldbStream.QldbStreamTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.qldbStream.QldbStreamTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.qldbStream.QldbStreamTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qldbStream.QldbStreamTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.qldbStream.QldbStreamTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qldbStream.QldbStreamTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.qldbStream.QldbStreamTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qldbStream.QldbStreamTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.qldbStream.QldbStreamTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qldbStream.QldbStreamTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.qldbStream.QldbStreamTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qldbStream.QldbStreamTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.qldbStream.QldbStreamTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qldbStream.QldbStreamTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.qldbStream.QldbStreamTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qldbStream.QldbStreamTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.qldbStream.QldbStreamTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qldbStream.QldbStreamTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.qldbStream.QldbStreamTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qldbStream.QldbStreamTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.qldbStream.QldbStreamTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.qldbStream.QldbStreamTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.qldbStream.QldbStreamTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.qldbStream.QldbStreamTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.qldbStream.QldbStreamTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.qldbStream.QldbStreamTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.qldbStream.QldbStreamTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qldbStream.QldbStreamTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.qldbStream.QldbStreamTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qldbStream.QldbStreamTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qldbStream.QldbStreamTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qldbStream.QldbStreamTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qldbStream.QldbStreamTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qldbStream.QldbStreamTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.qldbStream.QldbStreamTags">QldbStreamTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.qldbStream.QldbStreamTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.qldbStream.QldbStreamTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.qldbStream.QldbStreamTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.qldbStream.QldbStreamTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.qldbStream.QldbStreamTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.qldbStream.QldbStreamTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.qldbStream.QldbStreamTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | QldbStreamTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.qldbStream.QldbStreamTags">QldbStreamTags</a>

---



