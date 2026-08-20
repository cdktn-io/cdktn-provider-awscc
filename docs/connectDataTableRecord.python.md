# `connectDataTableRecord` Submodule <a name="`connectDataTableRecord` Submodule" id="@cdktn/provider-awscc.connectDataTableRecord"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConnectDataTableRecord <a name="ConnectDataTableRecord" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_data_table_record awscc_connect_data_table_record}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.Initializer"></a>

```python
from cdktn_provider_awscc import connect_data_table_record

connectDataTableRecord.ConnectDataTableRecord(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  data_table_arn: str,
  data_table_record: ConnectDataTableRecordDataTableRecord,
  instance_arn: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.Initializer.parameter.dataTableArn">data_table_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_data_table_record#data_table_arn ConnectDataTableRecord#data_table_arn}. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.Initializer.parameter.dataTableRecord">data_table_record</a></code> | <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecord">ConnectDataTableRecordDataTableRecord</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_data_table_record#data_table_record ConnectDataTableRecord#data_table_record}. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.Initializer.parameter.instanceArn">instance_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_data_table_record#instance_arn ConnectDataTableRecord#instance_arn}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `data_table_arn`<sup>Required</sup> <a name="data_table_arn" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.Initializer.parameter.dataTableArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_data_table_record#data_table_arn ConnectDataTableRecord#data_table_arn}.

---

##### `data_table_record`<sup>Required</sup> <a name="data_table_record" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.Initializer.parameter.dataTableRecord"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecord">ConnectDataTableRecordDataTableRecord</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_data_table_record#data_table_record ConnectDataTableRecord#data_table_record}.

---

##### `instance_arn`<sup>Required</sup> <a name="instance_arn" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.Initializer.parameter.instanceArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_data_table_record#instance_arn ConnectDataTableRecord#instance_arn}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.putDataTableRecord">put_data_table_record</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_data_table_record` <a name="put_data_table_record" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.putDataTableRecord"></a>

```python
def put_data_table_record(
  values: IResolvable | typing.List[ConnectDataTableRecordDataTableRecordValues],
  primary_values: IResolvable | typing.List[ConnectDataTableRecordDataTableRecordPrimaryValues] = None
) -> None
```

###### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.putDataTableRecord.parameter.values"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValues">ConnectDataTableRecordDataTableRecordValues</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_data_table_record#values ConnectDataTableRecord#values}.

---

###### `primary_values`<sup>Optional</sup> <a name="primary_values" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.putDataTableRecord.parameter.primaryValues"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValues">ConnectDataTableRecordDataTableRecordPrimaryValues</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_data_table_record#primary_values ConnectDataTableRecord#primary_values}.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a ConnectDataTableRecord resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.isConstruct"></a>

```python
from cdktn_provider_awscc import connect_data_table_record

connectDataTableRecord.ConnectDataTableRecord.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.isTerraformElement"></a>

```python
from cdktn_provider_awscc import connect_data_table_record

connectDataTableRecord.ConnectDataTableRecord.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.isTerraformResource"></a>

```python
from cdktn_provider_awscc import connect_data_table_record

connectDataTableRecord.ConnectDataTableRecord.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import connect_data_table_record

connectDataTableRecord.ConnectDataTableRecord.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a ConnectDataTableRecord resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ConnectDataTableRecord to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ConnectDataTableRecord that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_data_table_record#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ConnectDataTableRecord to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.dataTableRecord">data_table_record</a></code> | <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference">ConnectDataTableRecordDataTableRecordOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.recordId">record_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.dataTableArnInput">data_table_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.dataTableRecordInput">data_table_record_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecord">ConnectDataTableRecordDataTableRecord</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.instanceArnInput">instance_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.dataTableArn">data_table_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.instanceArn">instance_arn</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `data_table_record`<sup>Required</sup> <a name="data_table_record" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.dataTableRecord"></a>

```python
data_table_record: ConnectDataTableRecordDataTableRecordOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference">ConnectDataTableRecordDataTableRecordOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `record_id`<sup>Required</sup> <a name="record_id" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.recordId"></a>

```python
record_id: str
```

- *Type:* str

---

##### `data_table_arn_input`<sup>Optional</sup> <a name="data_table_arn_input" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.dataTableArnInput"></a>

```python
data_table_arn_input: str
```

- *Type:* str

---

##### `data_table_record_input`<sup>Optional</sup> <a name="data_table_record_input" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.dataTableRecordInput"></a>

```python
data_table_record_input: IResolvable | ConnectDataTableRecordDataTableRecord
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecord">ConnectDataTableRecordDataTableRecord</a>

---

##### `instance_arn_input`<sup>Optional</sup> <a name="instance_arn_input" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.instanceArnInput"></a>

```python
instance_arn_input: str
```

- *Type:* str

---

##### `data_table_arn`<sup>Required</sup> <a name="data_table_arn" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.dataTableArn"></a>

```python
data_table_arn: str
```

- *Type:* str

---

##### `instance_arn`<sup>Required</sup> <a name="instance_arn" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.instanceArn"></a>

```python
instance_arn: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ConnectDataTableRecordConfig <a name="ConnectDataTableRecordConfig" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordConfig.Initializer"></a>

```python
from cdktn_provider_awscc import connect_data_table_record

connectDataTableRecord.ConnectDataTableRecordConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  data_table_arn: str,
  data_table_record: ConnectDataTableRecordDataTableRecord,
  instance_arn: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordConfig.property.dataTableArn">data_table_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_data_table_record#data_table_arn ConnectDataTableRecord#data_table_arn}. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordConfig.property.dataTableRecord">data_table_record</a></code> | <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecord">ConnectDataTableRecordDataTableRecord</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_data_table_record#data_table_record ConnectDataTableRecord#data_table_record}. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordConfig.property.instanceArn">instance_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_data_table_record#instance_arn ConnectDataTableRecord#instance_arn}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `data_table_arn`<sup>Required</sup> <a name="data_table_arn" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordConfig.property.dataTableArn"></a>

```python
data_table_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_data_table_record#data_table_arn ConnectDataTableRecord#data_table_arn}.

---

##### `data_table_record`<sup>Required</sup> <a name="data_table_record" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordConfig.property.dataTableRecord"></a>

```python
data_table_record: ConnectDataTableRecordDataTableRecord
```

- *Type:* <a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecord">ConnectDataTableRecordDataTableRecord</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_data_table_record#data_table_record ConnectDataTableRecord#data_table_record}.

---

##### `instance_arn`<sup>Required</sup> <a name="instance_arn" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordConfig.property.instanceArn"></a>

```python
instance_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_data_table_record#instance_arn ConnectDataTableRecord#instance_arn}.

---

### ConnectDataTableRecordDataTableRecord <a name="ConnectDataTableRecordDataTableRecord" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecord"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecord.Initializer"></a>

```python
from cdktn_provider_awscc import connect_data_table_record

connectDataTableRecord.ConnectDataTableRecordDataTableRecord(
  values: IResolvable | typing.List[ConnectDataTableRecordDataTableRecordValues],
  primary_values: IResolvable | typing.List[ConnectDataTableRecordDataTableRecordPrimaryValues] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecord.property.values">values</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValues">ConnectDataTableRecordDataTableRecordValues</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_data_table_record#values ConnectDataTableRecord#values}. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecord.property.primaryValues">primary_values</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValues">ConnectDataTableRecordDataTableRecordPrimaryValues</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_data_table_record#primary_values ConnectDataTableRecord#primary_values}. |

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecord.property.values"></a>

```python
values: IResolvable | typing.List[ConnectDataTableRecordDataTableRecordValues]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValues">ConnectDataTableRecordDataTableRecordValues</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_data_table_record#values ConnectDataTableRecord#values}.

---

##### `primary_values`<sup>Optional</sup> <a name="primary_values" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecord.property.primaryValues"></a>

```python
primary_values: IResolvable | typing.List[ConnectDataTableRecordDataTableRecordPrimaryValues]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValues">ConnectDataTableRecordDataTableRecordPrimaryValues</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_data_table_record#primary_values ConnectDataTableRecord#primary_values}.

---

### ConnectDataTableRecordDataTableRecordPrimaryValues <a name="ConnectDataTableRecordDataTableRecordPrimaryValues" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValues"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValues.Initializer"></a>

```python
from cdktn_provider_awscc import connect_data_table_record

connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValues(
  attribute_id: str = None,
  attribute_value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValues.property.attributeId">attribute_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_data_table_record#attribute_id ConnectDataTableRecord#attribute_id}. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValues.property.attributeValue">attribute_value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_data_table_record#attribute_value ConnectDataTableRecord#attribute_value}. |

---

##### `attribute_id`<sup>Optional</sup> <a name="attribute_id" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValues.property.attributeId"></a>

```python
attribute_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_data_table_record#attribute_id ConnectDataTableRecord#attribute_id}.

---

##### `attribute_value`<sup>Optional</sup> <a name="attribute_value" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValues.property.attributeValue"></a>

```python
attribute_value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_data_table_record#attribute_value ConnectDataTableRecord#attribute_value}.

---

### ConnectDataTableRecordDataTableRecordValues <a name="ConnectDataTableRecordDataTableRecordValues" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValues"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValues.Initializer"></a>

```python
from cdktn_provider_awscc import connect_data_table_record

connectDataTableRecord.ConnectDataTableRecordDataTableRecordValues(
  attribute_id: str = None,
  attribute_value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValues.property.attributeId">attribute_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_data_table_record#attribute_id ConnectDataTableRecord#attribute_id}. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValues.property.attributeValue">attribute_value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_data_table_record#attribute_value ConnectDataTableRecord#attribute_value}. |

---

##### `attribute_id`<sup>Optional</sup> <a name="attribute_id" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValues.property.attributeId"></a>

```python
attribute_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_data_table_record#attribute_id ConnectDataTableRecord#attribute_id}.

---

##### `attribute_value`<sup>Optional</sup> <a name="attribute_value" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValues.property.attributeValue"></a>

```python
attribute_value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_data_table_record#attribute_value ConnectDataTableRecord#attribute_value}.

---

## Classes <a name="Classes" id="Classes"></a>

### ConnectDataTableRecordDataTableRecordOutputReference <a name="ConnectDataTableRecordDataTableRecordOutputReference" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import connect_data_table_record

connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.putPrimaryValues">put_primary_values</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.putValues">put_values</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.resetPrimaryValues">reset_primary_values</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_primary_values` <a name="put_primary_values" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.putPrimaryValues"></a>

```python
def put_primary_values(
  value: IResolvable | typing.List[ConnectDataTableRecordDataTableRecordPrimaryValues]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.putPrimaryValues.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValues">ConnectDataTableRecordDataTableRecordPrimaryValues</a>]

---

##### `put_values` <a name="put_values" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.putValues"></a>

```python
def put_values(
  value: IResolvable | typing.List[ConnectDataTableRecordDataTableRecordValues]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.putValues.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValues">ConnectDataTableRecordDataTableRecordValues</a>]

---

##### `reset_primary_values` <a name="reset_primary_values" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.resetPrimaryValues"></a>

```python
def reset_primary_values() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.property.primaryValues">primary_values</a></code> | <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesList">ConnectDataTableRecordDataTableRecordPrimaryValuesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.property.values">values</a></code> | <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesList">ConnectDataTableRecordDataTableRecordValuesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.property.primaryValuesInput">primary_values_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValues">ConnectDataTableRecordDataTableRecordPrimaryValues</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.property.valuesInput">values_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValues">ConnectDataTableRecordDataTableRecordValues</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecord">ConnectDataTableRecordDataTableRecord</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `primary_values`<sup>Required</sup> <a name="primary_values" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.property.primaryValues"></a>

```python
primary_values: ConnectDataTableRecordDataTableRecordPrimaryValuesList
```

- *Type:* <a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesList">ConnectDataTableRecordDataTableRecordPrimaryValuesList</a>

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.property.values"></a>

```python
values: ConnectDataTableRecordDataTableRecordValuesList
```

- *Type:* <a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesList">ConnectDataTableRecordDataTableRecordValuesList</a>

---

##### `primary_values_input`<sup>Optional</sup> <a name="primary_values_input" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.property.primaryValuesInput"></a>

```python
primary_values_input: IResolvable | typing.List[ConnectDataTableRecordDataTableRecordPrimaryValues]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValues">ConnectDataTableRecordDataTableRecordPrimaryValues</a>]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.property.valuesInput"></a>

```python
values_input: IResolvable | typing.List[ConnectDataTableRecordDataTableRecordValues]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValues">ConnectDataTableRecordDataTableRecordValues</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ConnectDataTableRecordDataTableRecord
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecord">ConnectDataTableRecordDataTableRecord</a>

---


### ConnectDataTableRecordDataTableRecordPrimaryValuesList <a name="ConnectDataTableRecordDataTableRecordPrimaryValuesList" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesList.Initializer"></a>

```python
from cdktn_provider_awscc import connect_data_table_record

connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValues">ConnectDataTableRecordDataTableRecordPrimaryValues</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ConnectDataTableRecordDataTableRecordPrimaryValues]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValues">ConnectDataTableRecordDataTableRecordPrimaryValues</a>]

---


### ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference <a name="ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import connect_data_table_record

connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.resetAttributeId">reset_attribute_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.resetAttributeValue">reset_attribute_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_attribute_id` <a name="reset_attribute_id" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.resetAttributeId"></a>

```python
def reset_attribute_id() -> None
```

##### `reset_attribute_value` <a name="reset_attribute_value" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.resetAttributeValue"></a>

```python
def reset_attribute_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.property.attributeIdInput">attribute_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.property.attributeValueInput">attribute_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.property.attributeId">attribute_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.property.attributeValue">attribute_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValues">ConnectDataTableRecordDataTableRecordPrimaryValues</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `attribute_id_input`<sup>Optional</sup> <a name="attribute_id_input" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.property.attributeIdInput"></a>

```python
attribute_id_input: str
```

- *Type:* str

---

##### `attribute_value_input`<sup>Optional</sup> <a name="attribute_value_input" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.property.attributeValueInput"></a>

```python
attribute_value_input: str
```

- *Type:* str

---

##### `attribute_id`<sup>Required</sup> <a name="attribute_id" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.property.attributeId"></a>

```python
attribute_id: str
```

- *Type:* str

---

##### `attribute_value`<sup>Required</sup> <a name="attribute_value" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.property.attributeValue"></a>

```python
attribute_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ConnectDataTableRecordDataTableRecordPrimaryValues
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValues">ConnectDataTableRecordDataTableRecordPrimaryValues</a>

---


### ConnectDataTableRecordDataTableRecordValuesList <a name="ConnectDataTableRecordDataTableRecordValuesList" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesList.Initializer"></a>

```python
from cdktn_provider_awscc import connect_data_table_record

connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ConnectDataTableRecordDataTableRecordValuesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValues">ConnectDataTableRecordDataTableRecordValues</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ConnectDataTableRecordDataTableRecordValues]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValues">ConnectDataTableRecordDataTableRecordValues</a>]

---


### ConnectDataTableRecordDataTableRecordValuesOutputReference <a name="ConnectDataTableRecordDataTableRecordValuesOutputReference" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import connect_data_table_record

connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.resetAttributeId">reset_attribute_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.resetAttributeValue">reset_attribute_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_attribute_id` <a name="reset_attribute_id" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.resetAttributeId"></a>

```python
def reset_attribute_id() -> None
```

##### `reset_attribute_value` <a name="reset_attribute_value" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.resetAttributeValue"></a>

```python
def reset_attribute_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.property.attributeIdInput">attribute_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.property.attributeValueInput">attribute_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.property.attributeId">attribute_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.property.attributeValue">attribute_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValues">ConnectDataTableRecordDataTableRecordValues</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `attribute_id_input`<sup>Optional</sup> <a name="attribute_id_input" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.property.attributeIdInput"></a>

```python
attribute_id_input: str
```

- *Type:* str

---

##### `attribute_value_input`<sup>Optional</sup> <a name="attribute_value_input" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.property.attributeValueInput"></a>

```python
attribute_value_input: str
```

- *Type:* str

---

##### `attribute_id`<sup>Required</sup> <a name="attribute_id" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.property.attributeId"></a>

```python
attribute_id: str
```

- *Type:* str

---

##### `attribute_value`<sup>Required</sup> <a name="attribute_value" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.property.attributeValue"></a>

```python
attribute_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ConnectDataTableRecordDataTableRecordValues
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValues">ConnectDataTableRecordDataTableRecordValues</a>

---



