# `organizationsOrganizationalUnit` Submodule <a name="`organizationsOrganizationalUnit` Submodule" id="@cdktn/provider-awscc.organizationsOrganizationalUnit"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OrganizationsOrganizationalUnit <a name="OrganizationsOrganizationalUnit" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/organizations_organizational_unit awscc_organizations_organizational_unit}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.Initializer"></a>

```python
from cdktn_provider_awscc import organizations_organizational_unit

organizationsOrganizationalUnit.OrganizationsOrganizationalUnit(
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
  parent_id: str,
  tags: IResolvable | typing.List[OrganizationsOrganizationalUnitTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.Initializer.parameter.name">name</a></code> | <code>str</code> | The friendly name of this OU. |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.Initializer.parameter.parentId">parent_id</a></code> | <code>str</code> | The unique identifier (ID) of the parent root or OU that you want to create the new OU in. |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTags">OrganizationsOrganizationalUnitTags</a>]</code> | A list of tags that you want to attach to the newly created OU. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.Initializer.parameter.name"></a>

- *Type:* str

The friendly name of this OU.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/organizations_organizational_unit#name OrganizationsOrganizationalUnit#name}

---

##### `parent_id`<sup>Required</sup> <a name="parent_id" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.Initializer.parameter.parentId"></a>

- *Type:* str

The unique identifier (ID) of the parent root or OU that you want to create the new OU in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/organizations_organizational_unit#parent_id OrganizationsOrganizationalUnit#parent_id}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTags">OrganizationsOrganizationalUnitTags</a>]

A list of tags that you want to attach to the newly created OU.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/organizations_organizational_unit#tags OrganizationsOrganizationalUnit#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[OrganizationsOrganizationalUnitTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTags">OrganizationsOrganizationalUnitTags</a>]

---

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a OrganizationsOrganizationalUnit resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.isConstruct"></a>

```python
from cdktn_provider_awscc import organizations_organizational_unit

organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.isTerraformElement"></a>

```python
from cdktn_provider_awscc import organizations_organizational_unit

organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.isTerraformResource"></a>

```python
from cdktn_provider_awscc import organizations_organizational_unit

organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import organizations_organizational_unit

organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a OrganizationsOrganizationalUnit resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the OrganizationsOrganizationalUnit to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing OrganizationsOrganizationalUnit that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/organizations_organizational_unit#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the OrganizationsOrganizationalUnit to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.organizationalUnitId">organizational_unit_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsList">OrganizationsOrganizationalUnitTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.parentIdInput">parent_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTags">OrganizationsOrganizationalUnitTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.parentId">parent_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `organizational_unit_id`<sup>Required</sup> <a name="organizational_unit_id" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.organizationalUnitId"></a>

```python
organizational_unit_id: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.tags"></a>

```python
tags: OrganizationsOrganizationalUnitTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsList">OrganizationsOrganizationalUnitTagsList</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `parent_id_input`<sup>Optional</sup> <a name="parent_id_input" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.parentIdInput"></a>

```python
parent_id_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[OrganizationsOrganizationalUnitTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTags">OrganizationsOrganizationalUnitTags</a>]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `parent_id`<sup>Required</sup> <a name="parent_id" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.parentId"></a>

```python
parent_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnit.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### OrganizationsOrganizationalUnitConfig <a name="OrganizationsOrganizationalUnitConfig" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitConfig.Initializer"></a>

```python
from cdktn_provider_awscc import organizations_organizational_unit

organizationsOrganizationalUnit.OrganizationsOrganizationalUnitConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  parent_id: str,
  tags: IResolvable | typing.List[OrganizationsOrganizationalUnitTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitConfig.property.name">name</a></code> | <code>str</code> | The friendly name of this OU. |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitConfig.property.parentId">parent_id</a></code> | <code>str</code> | The unique identifier (ID) of the parent root or OU that you want to create the new OU in. |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTags">OrganizationsOrganizationalUnitTags</a>]</code> | A list of tags that you want to attach to the newly created OU. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The friendly name of this OU.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/organizations_organizational_unit#name OrganizationsOrganizationalUnit#name}

---

##### `parent_id`<sup>Required</sup> <a name="parent_id" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitConfig.property.parentId"></a>

```python
parent_id: str
```

- *Type:* str

The unique identifier (ID) of the parent root or OU that you want to create the new OU in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/organizations_organizational_unit#parent_id OrganizationsOrganizationalUnit#parent_id}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[OrganizationsOrganizationalUnitTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTags">OrganizationsOrganizationalUnitTags</a>]

A list of tags that you want to attach to the newly created OU.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/organizations_organizational_unit#tags OrganizationsOrganizationalUnit#tags}

---

### OrganizationsOrganizationalUnitTags <a name="OrganizationsOrganizationalUnitTags" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTags.Initializer"></a>

```python
from cdktn_provider_awscc import organizations_organizational_unit

organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTags.property.key">key</a></code> | <code>str</code> | The key identifier, or name, of the tag. |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTags.property.value">value</a></code> | <code>str</code> | The string value that's associated with the key of the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key identifier, or name, of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/organizations_organizational_unit#key OrganizationsOrganizationalUnit#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTags.property.value"></a>

```python
value: str
```

- *Type:* str

The string value that's associated with the key of the tag.

You can set the value of a tag to an empty string, but you can't set the value of a tag to null.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/organizations_organizational_unit#value OrganizationsOrganizationalUnit#value}

---

## Classes <a name="Classes" id="Classes"></a>

### OrganizationsOrganizationalUnitTagsList <a name="OrganizationsOrganizationalUnitTagsList" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import organizations_organizational_unit

organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OrganizationsOrganizationalUnitTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTags">OrganizationsOrganizationalUnitTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[OrganizationsOrganizationalUnitTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTags">OrganizationsOrganizationalUnitTags</a>]

---


### OrganizationsOrganizationalUnitTagsOutputReference <a name="OrganizationsOrganizationalUnitTagsOutputReference" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import organizations_organizational_unit

organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTags">OrganizationsOrganizationalUnitTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | OrganizationsOrganizationalUnitTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.organizationsOrganizationalUnit.OrganizationsOrganizationalUnitTags">OrganizationsOrganizationalUnitTags</a>

---



