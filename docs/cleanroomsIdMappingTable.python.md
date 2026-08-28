# `cleanroomsIdMappingTable` Submodule <a name="`cleanroomsIdMappingTable` Submodule" id="@cdktn/provider-awscc.cleanroomsIdMappingTable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CleanroomsIdMappingTable <a name="CleanroomsIdMappingTable" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_id_mapping_table awscc_cleanrooms_id_mapping_table}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.Initializer"></a>

```python
from cdktn_provider_awscc import cleanrooms_id_mapping_table

cleanroomsIdMappingTable.CleanroomsIdMappingTable(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  input_reference_config: CleanroomsIdMappingTableInputReferenceConfig,
  membership_identifier: str,
  name: str,
  description: str = None,
  kms_key_arn: str = None,
  tags: IResolvable | typing.List[CleanroomsIdMappingTableTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.Initializer.parameter.inputReferenceConfig">input_reference_config</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferenceConfig">CleanroomsIdMappingTableInputReferenceConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_id_mapping_table#input_reference_config CleanroomsIdMappingTable#input_reference_config}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.Initializer.parameter.membershipIdentifier">membership_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_id_mapping_table#membership_identifier CleanroomsIdMappingTable#membership_identifier}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_id_mapping_table#name CleanroomsIdMappingTable#name}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_id_mapping_table#description CleanroomsIdMappingTable#description}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.Initializer.parameter.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_id_mapping_table#kms_key_arn CleanroomsIdMappingTable#kms_key_arn}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTags">CleanroomsIdMappingTableTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_id_mapping_table#tags CleanroomsIdMappingTable#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `input_reference_config`<sup>Required</sup> <a name="input_reference_config" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.Initializer.parameter.inputReferenceConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferenceConfig">CleanroomsIdMappingTableInputReferenceConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_id_mapping_table#input_reference_config CleanroomsIdMappingTable#input_reference_config}.

---

##### `membership_identifier`<sup>Required</sup> <a name="membership_identifier" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.Initializer.parameter.membershipIdentifier"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_id_mapping_table#membership_identifier CleanroomsIdMappingTable#membership_identifier}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_id_mapping_table#name CleanroomsIdMappingTable#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_id_mapping_table#description CleanroomsIdMappingTable#description}.

---

##### `kms_key_arn`<sup>Optional</sup> <a name="kms_key_arn" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.Initializer.parameter.kmsKeyArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_id_mapping_table#kms_key_arn CleanroomsIdMappingTable#kms_key_arn}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTags">CleanroomsIdMappingTableTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_id_mapping_table#tags CleanroomsIdMappingTable#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.putInputReferenceConfig">put_input_reference_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.resetKmsKeyArn">reset_kms_key_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_input_reference_config` <a name="put_input_reference_config" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.putInputReferenceConfig"></a>

```python
def put_input_reference_config(
  input_reference_arn: str,
  manage_resource_policies: bool | IResolvable
) -> None
```

###### `input_reference_arn`<sup>Required</sup> <a name="input_reference_arn" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.putInputReferenceConfig.parameter.inputReferenceArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_id_mapping_table#input_reference_arn CleanroomsIdMappingTable#input_reference_arn}.

---

###### `manage_resource_policies`<sup>Required</sup> <a name="manage_resource_policies" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.putInputReferenceConfig.parameter.manageResourcePolicies"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_id_mapping_table#manage_resource_policies CleanroomsIdMappingTable#manage_resource_policies}.

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[CleanroomsIdMappingTableTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTags">CleanroomsIdMappingTableTags</a>]

---

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_kms_key_arn` <a name="reset_kms_key_arn" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.resetKmsKeyArn"></a>

```python
def reset_kms_key_arn() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a CleanroomsIdMappingTable resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.isConstruct"></a>

```python
from cdktn_provider_awscc import cleanrooms_id_mapping_table

cleanroomsIdMappingTable.CleanroomsIdMappingTable.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.isTerraformElement"></a>

```python
from cdktn_provider_awscc import cleanrooms_id_mapping_table

cleanroomsIdMappingTable.CleanroomsIdMappingTable.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.isTerraformResource"></a>

```python
from cdktn_provider_awscc import cleanrooms_id_mapping_table

cleanroomsIdMappingTable.CleanroomsIdMappingTable.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import cleanrooms_id_mapping_table

cleanroomsIdMappingTable.CleanroomsIdMappingTable.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a CleanroomsIdMappingTable resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CleanroomsIdMappingTable to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CleanroomsIdMappingTable that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_id_mapping_table#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CleanroomsIdMappingTable to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.property.collaborationArn">collaboration_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.property.collaborationIdentifier">collaboration_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.property.idMappingTableIdentifier">id_mapping_table_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.property.inputReferenceConfig">input_reference_config</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferenceConfigOutputReference">CleanroomsIdMappingTableInputReferenceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.property.inputReferenceProperties">input_reference_properties</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesOutputReference">CleanroomsIdMappingTableInputReferencePropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.property.membershipArn">membership_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsList">CleanroomsIdMappingTableTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.property.inputReferenceConfigInput">input_reference_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferenceConfig">CleanroomsIdMappingTableInputReferenceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.property.kmsKeyArnInput">kms_key_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.property.membershipIdentifierInput">membership_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTags">CleanroomsIdMappingTableTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.property.membershipIdentifier">membership_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `collaboration_arn`<sup>Required</sup> <a name="collaboration_arn" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.property.collaborationArn"></a>

```python
collaboration_arn: str
```

- *Type:* str

---

##### `collaboration_identifier`<sup>Required</sup> <a name="collaboration_identifier" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.property.collaborationIdentifier"></a>

```python
collaboration_identifier: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `id_mapping_table_identifier`<sup>Required</sup> <a name="id_mapping_table_identifier" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.property.idMappingTableIdentifier"></a>

```python
id_mapping_table_identifier: str
```

- *Type:* str

---

##### `input_reference_config`<sup>Required</sup> <a name="input_reference_config" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.property.inputReferenceConfig"></a>

```python
input_reference_config: CleanroomsIdMappingTableInputReferenceConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferenceConfigOutputReference">CleanroomsIdMappingTableInputReferenceConfigOutputReference</a>

---

##### `input_reference_properties`<sup>Required</sup> <a name="input_reference_properties" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.property.inputReferenceProperties"></a>

```python
input_reference_properties: CleanroomsIdMappingTableInputReferencePropertiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesOutputReference">CleanroomsIdMappingTableInputReferencePropertiesOutputReference</a>

---

##### `membership_arn`<sup>Required</sup> <a name="membership_arn" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.property.membershipArn"></a>

```python
membership_arn: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.property.tags"></a>

```python
tags: CleanroomsIdMappingTableTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsList">CleanroomsIdMappingTableTagsList</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `input_reference_config_input`<sup>Optional</sup> <a name="input_reference_config_input" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.property.inputReferenceConfigInput"></a>

```python
input_reference_config_input: IResolvable | CleanroomsIdMappingTableInputReferenceConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferenceConfig">CleanroomsIdMappingTableInputReferenceConfig</a>

---

##### `kms_key_arn_input`<sup>Optional</sup> <a name="kms_key_arn_input" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.property.kmsKeyArnInput"></a>

```python
kms_key_arn_input: str
```

- *Type:* str

---

##### `membership_identifier_input`<sup>Optional</sup> <a name="membership_identifier_input" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.property.membershipIdentifierInput"></a>

```python
membership_identifier_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[CleanroomsIdMappingTableTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTags">CleanroomsIdMappingTableTags</a>]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `kms_key_arn`<sup>Required</sup> <a name="kms_key_arn" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

---

##### `membership_identifier`<sup>Required</sup> <a name="membership_identifier" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.property.membershipIdentifier"></a>

```python
membership_identifier: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTable.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CleanroomsIdMappingTableConfig <a name="CleanroomsIdMappingTableConfig" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableConfig.Initializer"></a>

```python
from cdktn_provider_awscc import cleanrooms_id_mapping_table

cleanroomsIdMappingTable.CleanroomsIdMappingTableConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  input_reference_config: CleanroomsIdMappingTableInputReferenceConfig,
  membership_identifier: str,
  name: str,
  description: str = None,
  kms_key_arn: str = None,
  tags: IResolvable | typing.List[CleanroomsIdMappingTableTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableConfig.property.inputReferenceConfig">input_reference_config</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferenceConfig">CleanroomsIdMappingTableInputReferenceConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_id_mapping_table#input_reference_config CleanroomsIdMappingTable#input_reference_config}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableConfig.property.membershipIdentifier">membership_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_id_mapping_table#membership_identifier CleanroomsIdMappingTable#membership_identifier}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_id_mapping_table#name CleanroomsIdMappingTable#name}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_id_mapping_table#description CleanroomsIdMappingTable#description}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableConfig.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_id_mapping_table#kms_key_arn CleanroomsIdMappingTable#kms_key_arn}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTags">CleanroomsIdMappingTableTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_id_mapping_table#tags CleanroomsIdMappingTable#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `input_reference_config`<sup>Required</sup> <a name="input_reference_config" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableConfig.property.inputReferenceConfig"></a>

```python
input_reference_config: CleanroomsIdMappingTableInputReferenceConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferenceConfig">CleanroomsIdMappingTableInputReferenceConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_id_mapping_table#input_reference_config CleanroomsIdMappingTable#input_reference_config}.

---

##### `membership_identifier`<sup>Required</sup> <a name="membership_identifier" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableConfig.property.membershipIdentifier"></a>

```python
membership_identifier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_id_mapping_table#membership_identifier CleanroomsIdMappingTable#membership_identifier}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_id_mapping_table#name CleanroomsIdMappingTable#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_id_mapping_table#description CleanroomsIdMappingTable#description}.

---

##### `kms_key_arn`<sup>Optional</sup> <a name="kms_key_arn" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableConfig.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_id_mapping_table#kms_key_arn CleanroomsIdMappingTable#kms_key_arn}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[CleanroomsIdMappingTableTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTags">CleanroomsIdMappingTableTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_id_mapping_table#tags CleanroomsIdMappingTable#tags}.

---

### CleanroomsIdMappingTableInputReferenceConfig <a name="CleanroomsIdMappingTableInputReferenceConfig" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferenceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferenceConfig.Initializer"></a>

```python
from cdktn_provider_awscc import cleanrooms_id_mapping_table

cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferenceConfig(
  input_reference_arn: str,
  manage_resource_policies: bool | IResolvable
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferenceConfig.property.inputReferenceArn">input_reference_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_id_mapping_table#input_reference_arn CleanroomsIdMappingTable#input_reference_arn}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferenceConfig.property.manageResourcePolicies">manage_resource_policies</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_id_mapping_table#manage_resource_policies CleanroomsIdMappingTable#manage_resource_policies}. |

---

##### `input_reference_arn`<sup>Required</sup> <a name="input_reference_arn" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferenceConfig.property.inputReferenceArn"></a>

```python
input_reference_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_id_mapping_table#input_reference_arn CleanroomsIdMappingTable#input_reference_arn}.

---

##### `manage_resource_policies`<sup>Required</sup> <a name="manage_resource_policies" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferenceConfig.property.manageResourcePolicies"></a>

```python
manage_resource_policies: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_id_mapping_table#manage_resource_policies CleanroomsIdMappingTable#manage_resource_policies}.

---

### CleanroomsIdMappingTableInputReferenceProperties <a name="CleanroomsIdMappingTableInputReferenceProperties" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferenceProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferenceProperties.Initializer"></a>

```python
from cdktn_provider_awscc import cleanrooms_id_mapping_table

cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferenceProperties()
```


### CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSource <a name="CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSource" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSource.Initializer"></a>

```python
from cdktn_provider_awscc import cleanrooms_id_mapping_table

cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSource()
```


### CleanroomsIdMappingTableTags <a name="CleanroomsIdMappingTableTags" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTags.Initializer"></a>

```python
from cdktn_provider_awscc import cleanrooms_id_mapping_table

cleanroomsIdMappingTable.CleanroomsIdMappingTableTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_id_mapping_table#key CleanroomsIdMappingTable#key}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_id_mapping_table#value CleanroomsIdMappingTable#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_id_mapping_table#key CleanroomsIdMappingTable#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_id_mapping_table#value CleanroomsIdMappingTable#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### CleanroomsIdMappingTableInputReferenceConfigOutputReference <a name="CleanroomsIdMappingTableInputReferenceConfigOutputReference" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferenceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferenceConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cleanrooms_id_mapping_table

cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferenceConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferenceConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferenceConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferenceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferenceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferenceConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferenceConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferenceConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferenceConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferenceConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferenceConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferenceConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferenceConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferenceConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferenceConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferenceConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferenceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferenceConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferenceConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferenceConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferenceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferenceConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferenceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferenceConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferenceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferenceConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferenceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferenceConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferenceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferenceConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferenceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferenceConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferenceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferenceConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferenceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferenceConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferenceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferenceConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferenceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferenceConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferenceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferenceConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferenceConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferenceConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferenceConfigOutputReference.property.inputReferenceArnInput">input_reference_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferenceConfigOutputReference.property.manageResourcePoliciesInput">manage_resource_policies_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferenceConfigOutputReference.property.inputReferenceArn">input_reference_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferenceConfigOutputReference.property.manageResourcePolicies">manage_resource_policies</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferenceConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferenceConfig">CleanroomsIdMappingTableInputReferenceConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferenceConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferenceConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `input_reference_arn_input`<sup>Optional</sup> <a name="input_reference_arn_input" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferenceConfigOutputReference.property.inputReferenceArnInput"></a>

```python
input_reference_arn_input: str
```

- *Type:* str

---

##### `manage_resource_policies_input`<sup>Optional</sup> <a name="manage_resource_policies_input" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferenceConfigOutputReference.property.manageResourcePoliciesInput"></a>

```python
manage_resource_policies_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `input_reference_arn`<sup>Required</sup> <a name="input_reference_arn" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferenceConfigOutputReference.property.inputReferenceArn"></a>

```python
input_reference_arn: str
```

- *Type:* str

---

##### `manage_resource_policies`<sup>Required</sup> <a name="manage_resource_policies" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferenceConfigOutputReference.property.manageResourcePolicies"></a>

```python
manage_resource_policies: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferenceConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CleanroomsIdMappingTableInputReferenceConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferenceConfig">CleanroomsIdMappingTableInputReferenceConfig</a>

---


### CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceList <a name="CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceList" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceList.Initializer"></a>

```python
from cdktn_provider_awscc import cleanrooms_id_mapping_table

cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference <a name="CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cleanrooms_id_mapping_table

cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.property.idNamespaceAssociationId">id_namespace_association_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSource">CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id_namespace_association_id`<sup>Required</sup> <a name="id_namespace_association_id" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.property.idNamespaceAssociationId"></a>

```python
id_namespace_association_id: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.property.internalValue"></a>

```python
internal_value: CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSource
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSource">CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSource</a>

---


### CleanroomsIdMappingTableInputReferencePropertiesOutputReference <a name="CleanroomsIdMappingTableInputReferencePropertiesOutputReference" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cleanrooms_id_mapping_table

cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesOutputReference.property.idMappingTableInputSource">id_mapping_table_input_source</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceList">CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferenceProperties">CleanroomsIdMappingTableInputReferenceProperties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id_mapping_table_input_source`<sup>Required</sup> <a name="id_mapping_table_input_source" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesOutputReference.property.idMappingTableInputSource"></a>

```python
id_mapping_table_input_source: CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceList
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceList">CleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferencePropertiesOutputReference.property.internalValue"></a>

```python
internal_value: CleanroomsIdMappingTableInputReferenceProperties
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableInputReferenceProperties">CleanroomsIdMappingTableInputReferenceProperties</a>

---


### CleanroomsIdMappingTableTagsList <a name="CleanroomsIdMappingTableTagsList" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import cleanrooms_id_mapping_table

cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CleanroomsIdMappingTableTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTags">CleanroomsIdMappingTableTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CleanroomsIdMappingTableTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTags">CleanroomsIdMappingTableTags</a>]

---


### CleanroomsIdMappingTableTagsOutputReference <a name="CleanroomsIdMappingTableTagsOutputReference" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cleanrooms_id_mapping_table

cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTags">CleanroomsIdMappingTableTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CleanroomsIdMappingTableTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsIdMappingTable.CleanroomsIdMappingTableTags">CleanroomsIdMappingTableTags</a>

---



