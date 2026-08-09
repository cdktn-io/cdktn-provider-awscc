# `entityresolutionSchemaMapping` Submodule <a name="`entityresolutionSchemaMapping` Submodule" id="@cdktn/provider-awscc.entityresolutionSchemaMapping"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EntityresolutionSchemaMapping <a name="EntityresolutionSchemaMapping" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/entityresolution_schema_mapping awscc_entityresolution_schema_mapping}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.Initializer"></a>

```python
from cdktn_provider_awscc import entityresolution_schema_mapping

entityresolutionSchemaMapping.EntityresolutionSchemaMapping(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  mapped_input_fields: IResolvable | typing.List[EntityresolutionSchemaMappingMappedInputFields],
  schema_name: str,
  description: str = None,
  tags: IResolvable | typing.List[EntityresolutionSchemaMappingTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.Initializer.parameter.mappedInputFields">mapped_input_fields</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFields">EntityresolutionSchemaMappingMappedInputFields</a>]</code> | The SchemaMapping attributes input. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.Initializer.parameter.schemaName">schema_name</a></code> | <code>str</code> | The name of the SchemaMapping. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.Initializer.parameter.description">description</a></code> | <code>str</code> | The description of the SchemaMapping. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTags">EntityresolutionSchemaMappingTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/entityresolution_schema_mapping#tags EntityresolutionSchemaMapping#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `mapped_input_fields`<sup>Required</sup> <a name="mapped_input_fields" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.Initializer.parameter.mappedInputFields"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFields">EntityresolutionSchemaMappingMappedInputFields</a>]

The SchemaMapping attributes input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/entityresolution_schema_mapping#mapped_input_fields EntityresolutionSchemaMapping#mapped_input_fields}

---

##### `schema_name`<sup>Required</sup> <a name="schema_name" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.Initializer.parameter.schemaName"></a>

- *Type:* str

The name of the SchemaMapping.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/entityresolution_schema_mapping#schema_name EntityresolutionSchemaMapping#schema_name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.Initializer.parameter.description"></a>

- *Type:* str

The description of the SchemaMapping.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/entityresolution_schema_mapping#description EntityresolutionSchemaMapping#description}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTags">EntityresolutionSchemaMappingTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/entityresolution_schema_mapping#tags EntityresolutionSchemaMapping#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.putMappedInputFields">put_mapped_input_fields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_mapped_input_fields` <a name="put_mapped_input_fields" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.putMappedInputFields"></a>

```python
def put_mapped_input_fields(
  value: IResolvable | typing.List[EntityresolutionSchemaMappingMappedInputFields]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.putMappedInputFields.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFields">EntityresolutionSchemaMappingMappedInputFields</a>]

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[EntityresolutionSchemaMappingTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTags">EntityresolutionSchemaMappingTags</a>]

---

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a EntityresolutionSchemaMapping resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.isConstruct"></a>

```python
from cdktn_provider_awscc import entityresolution_schema_mapping

entityresolutionSchemaMapping.EntityresolutionSchemaMapping.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.isTerraformElement"></a>

```python
from cdktn_provider_awscc import entityresolution_schema_mapping

entityresolutionSchemaMapping.EntityresolutionSchemaMapping.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.isTerraformResource"></a>

```python
from cdktn_provider_awscc import entityresolution_schema_mapping

entityresolutionSchemaMapping.EntityresolutionSchemaMapping.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import entityresolution_schema_mapping

entityresolutionSchemaMapping.EntityresolutionSchemaMapping.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a EntityresolutionSchemaMapping resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the EntityresolutionSchemaMapping to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing EntityresolutionSchemaMapping that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/entityresolution_schema_mapping#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the EntityresolutionSchemaMapping to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.hasWorkflows">has_workflows</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.mappedInputFields">mapped_input_fields</a></code> | <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsList">EntityresolutionSchemaMappingMappedInputFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.schemaArn">schema_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsList">EntityresolutionSchemaMappingTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.mappedInputFieldsInput">mapped_input_fields_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFields">EntityresolutionSchemaMappingMappedInputFields</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.schemaNameInput">schema_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTags">EntityresolutionSchemaMappingTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.schemaName">schema_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `has_workflows`<sup>Required</sup> <a name="has_workflows" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.hasWorkflows"></a>

```python
has_workflows: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `mapped_input_fields`<sup>Required</sup> <a name="mapped_input_fields" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.mappedInputFields"></a>

```python
mapped_input_fields: EntityresolutionSchemaMappingMappedInputFieldsList
```

- *Type:* <a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsList">EntityresolutionSchemaMappingMappedInputFieldsList</a>

---

##### `schema_arn`<sup>Required</sup> <a name="schema_arn" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.schemaArn"></a>

```python
schema_arn: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.tags"></a>

```python
tags: EntityresolutionSchemaMappingTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsList">EntityresolutionSchemaMappingTagsList</a>

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `mapped_input_fields_input`<sup>Optional</sup> <a name="mapped_input_fields_input" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.mappedInputFieldsInput"></a>

```python
mapped_input_fields_input: IResolvable | typing.List[EntityresolutionSchemaMappingMappedInputFields]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFields">EntityresolutionSchemaMappingMappedInputFields</a>]

---

##### `schema_name_input`<sup>Optional</sup> <a name="schema_name_input" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.schemaNameInput"></a>

```python
schema_name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[EntityresolutionSchemaMappingTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTags">EntityresolutionSchemaMappingTags</a>]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `schema_name`<sup>Required</sup> <a name="schema_name" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.schemaName"></a>

```python
schema_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### EntityresolutionSchemaMappingConfig <a name="EntityresolutionSchemaMappingConfig" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingConfig.Initializer"></a>

```python
from cdktn_provider_awscc import entityresolution_schema_mapping

entityresolutionSchemaMapping.EntityresolutionSchemaMappingConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  mapped_input_fields: IResolvable | typing.List[EntityresolutionSchemaMappingMappedInputFields],
  schema_name: str,
  description: str = None,
  tags: IResolvable | typing.List[EntityresolutionSchemaMappingTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingConfig.property.mappedInputFields">mapped_input_fields</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFields">EntityresolutionSchemaMappingMappedInputFields</a>]</code> | The SchemaMapping attributes input. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingConfig.property.schemaName">schema_name</a></code> | <code>str</code> | The name of the SchemaMapping. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingConfig.property.description">description</a></code> | <code>str</code> | The description of the SchemaMapping. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTags">EntityresolutionSchemaMappingTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/entityresolution_schema_mapping#tags EntityresolutionSchemaMapping#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `mapped_input_fields`<sup>Required</sup> <a name="mapped_input_fields" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingConfig.property.mappedInputFields"></a>

```python
mapped_input_fields: IResolvable | typing.List[EntityresolutionSchemaMappingMappedInputFields]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFields">EntityresolutionSchemaMappingMappedInputFields</a>]

The SchemaMapping attributes input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/entityresolution_schema_mapping#mapped_input_fields EntityresolutionSchemaMapping#mapped_input_fields}

---

##### `schema_name`<sup>Required</sup> <a name="schema_name" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingConfig.property.schemaName"></a>

```python
schema_name: str
```

- *Type:* str

The name of the SchemaMapping.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/entityresolution_schema_mapping#schema_name EntityresolutionSchemaMapping#schema_name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The description of the SchemaMapping.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/entityresolution_schema_mapping#description EntityresolutionSchemaMapping#description}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[EntityresolutionSchemaMappingTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTags">EntityresolutionSchemaMappingTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/entityresolution_schema_mapping#tags EntityresolutionSchemaMapping#tags}.

---

### EntityresolutionSchemaMappingMappedInputFields <a name="EntityresolutionSchemaMappingMappedInputFields" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFields"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFields.Initializer"></a>

```python
from cdktn_provider_awscc import entityresolution_schema_mapping

entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFields(
  field_name: str,
  type: str,
  group_name: str = None,
  hashed: bool | IResolvable = None,
  match_key: str = None,
  sub_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFields.property.fieldName">field_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/entityresolution_schema_mapping#field_name EntityresolutionSchemaMapping#field_name}. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFields.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/entityresolution_schema_mapping#type EntityresolutionSchemaMapping#type}. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFields.property.groupName">group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/entityresolution_schema_mapping#group_name EntityresolutionSchemaMapping#group_name}. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFields.property.hashed">hashed</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/entityresolution_schema_mapping#hashed EntityresolutionSchemaMapping#hashed}. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFields.property.matchKey">match_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/entityresolution_schema_mapping#match_key EntityresolutionSchemaMapping#match_key}. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFields.property.subType">sub_type</a></code> | <code>str</code> | The subtype of the Attribute. Would be required only when type is PROVIDER_ID. |

---

##### `field_name`<sup>Required</sup> <a name="field_name" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFields.property.fieldName"></a>

```python
field_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/entityresolution_schema_mapping#field_name EntityresolutionSchemaMapping#field_name}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFields.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/entityresolution_schema_mapping#type EntityresolutionSchemaMapping#type}.

---

##### `group_name`<sup>Optional</sup> <a name="group_name" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFields.property.groupName"></a>

```python
group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/entityresolution_schema_mapping#group_name EntityresolutionSchemaMapping#group_name}.

---

##### `hashed`<sup>Optional</sup> <a name="hashed" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFields.property.hashed"></a>

```python
hashed: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/entityresolution_schema_mapping#hashed EntityresolutionSchemaMapping#hashed}.

---

##### `match_key`<sup>Optional</sup> <a name="match_key" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFields.property.matchKey"></a>

```python
match_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/entityresolution_schema_mapping#match_key EntityresolutionSchemaMapping#match_key}.

---

##### `sub_type`<sup>Optional</sup> <a name="sub_type" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFields.property.subType"></a>

```python
sub_type: str
```

- *Type:* str

The subtype of the Attribute. Would be required only when type is PROVIDER_ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/entityresolution_schema_mapping#sub_type EntityresolutionSchemaMapping#sub_type}

---

### EntityresolutionSchemaMappingTags <a name="EntityresolutionSchemaMappingTags" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTags.Initializer"></a>

```python
from cdktn_provider_awscc import entityresolution_schema_mapping

entityresolutionSchemaMapping.EntityresolutionSchemaMappingTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/entityresolution_schema_mapping#key EntityresolutionSchemaMapping#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/entityresolution_schema_mapping#value EntityresolutionSchemaMapping#value}

---

## Classes <a name="Classes" id="Classes"></a>

### EntityresolutionSchemaMappingMappedInputFieldsList <a name="EntityresolutionSchemaMappingMappedInputFieldsList" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsList.Initializer"></a>

```python
from cdktn_provider_awscc import entityresolution_schema_mapping

entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> EntityresolutionSchemaMappingMappedInputFieldsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFields">EntityresolutionSchemaMappingMappedInputFields</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[EntityresolutionSchemaMappingMappedInputFields]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFields">EntityresolutionSchemaMappingMappedInputFields</a>]

---


### EntityresolutionSchemaMappingMappedInputFieldsOutputReference <a name="EntityresolutionSchemaMappingMappedInputFieldsOutputReference" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import entityresolution_schema_mapping

entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.resetGroupName">reset_group_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.resetHashed">reset_hashed</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.resetMatchKey">reset_match_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.resetSubType">reset_sub_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_group_name` <a name="reset_group_name" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.resetGroupName"></a>

```python
def reset_group_name() -> None
```

##### `reset_hashed` <a name="reset_hashed" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.resetHashed"></a>

```python
def reset_hashed() -> None
```

##### `reset_match_key` <a name="reset_match_key" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.resetMatchKey"></a>

```python
def reset_match_key() -> None
```

##### `reset_sub_type` <a name="reset_sub_type" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.resetSubType"></a>

```python
def reset_sub_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.property.fieldNameInput">field_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.property.groupNameInput">group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.property.hashedInput">hashed_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.property.matchKeyInput">match_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.property.subTypeInput">sub_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.property.fieldName">field_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.property.groupName">group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.property.hashed">hashed</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.property.matchKey">match_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.property.subType">sub_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFields">EntityresolutionSchemaMappingMappedInputFields</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `field_name_input`<sup>Optional</sup> <a name="field_name_input" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.property.fieldNameInput"></a>

```python
field_name_input: str
```

- *Type:* str

---

##### `group_name_input`<sup>Optional</sup> <a name="group_name_input" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.property.groupNameInput"></a>

```python
group_name_input: str
```

- *Type:* str

---

##### `hashed_input`<sup>Optional</sup> <a name="hashed_input" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.property.hashedInput"></a>

```python
hashed_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `match_key_input`<sup>Optional</sup> <a name="match_key_input" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.property.matchKeyInput"></a>

```python
match_key_input: str
```

- *Type:* str

---

##### `sub_type_input`<sup>Optional</sup> <a name="sub_type_input" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.property.subTypeInput"></a>

```python
sub_type_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `field_name`<sup>Required</sup> <a name="field_name" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.property.fieldName"></a>

```python
field_name: str
```

- *Type:* str

---

##### `group_name`<sup>Required</sup> <a name="group_name" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.property.groupName"></a>

```python
group_name: str
```

- *Type:* str

---

##### `hashed`<sup>Required</sup> <a name="hashed" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.property.hashed"></a>

```python
hashed: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `match_key`<sup>Required</sup> <a name="match_key" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.property.matchKey"></a>

```python
match_key: str
```

- *Type:* str

---

##### `sub_type`<sup>Required</sup> <a name="sub_type" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.property.subType"></a>

```python
sub_type: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EntityresolutionSchemaMappingMappedInputFields
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFields">EntityresolutionSchemaMappingMappedInputFields</a>

---


### EntityresolutionSchemaMappingTagsList <a name="EntityresolutionSchemaMappingTagsList" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import entityresolution_schema_mapping

entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> EntityresolutionSchemaMappingTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTags">EntityresolutionSchemaMappingTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[EntityresolutionSchemaMappingTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTags">EntityresolutionSchemaMappingTags</a>]

---


### EntityresolutionSchemaMappingTagsOutputReference <a name="EntityresolutionSchemaMappingTagsOutputReference" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import entityresolution_schema_mapping

entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTags">EntityresolutionSchemaMappingTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EntityresolutionSchemaMappingTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTags">EntityresolutionSchemaMappingTags</a>

---



