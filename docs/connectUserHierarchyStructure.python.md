# `connectUserHierarchyStructure` Submodule <a name="`connectUserHierarchyStructure` Submodule" id="@cdktn/provider-awscc.connectUserHierarchyStructure"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConnectUserHierarchyStructure <a name="ConnectUserHierarchyStructure" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_user_hierarchy_structure awscc_connect_user_hierarchy_structure}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.Initializer"></a>

```python
from cdktn_provider_awscc import connect_user_hierarchy_structure

connectUserHierarchyStructure.ConnectUserHierarchyStructure(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  instance_arn: str,
  user_hierarchy_structure: ConnectUserHierarchyStructureUserHierarchyStructure = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.Initializer.parameter.instanceArn">instance_arn</a></code> | <code>str</code> | The identifier of the Amazon Connect instance. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.Initializer.parameter.userHierarchyStructure">user_hierarchy_structure</a></code> | <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructure">ConnectUserHierarchyStructureUserHierarchyStructure</a></code> | Information about the hierarchy structure. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `instance_arn`<sup>Required</sup> <a name="instance_arn" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.Initializer.parameter.instanceArn"></a>

- *Type:* str

The identifier of the Amazon Connect instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_user_hierarchy_structure#instance_arn ConnectUserHierarchyStructure#instance_arn}

---

##### `user_hierarchy_structure`<sup>Optional</sup> <a name="user_hierarchy_structure" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.Initializer.parameter.userHierarchyStructure"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructure">ConnectUserHierarchyStructureUserHierarchyStructure</a>

Information about the hierarchy structure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_user_hierarchy_structure#user_hierarchy_structure ConnectUserHierarchyStructure#user_hierarchy_structure}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.putUserHierarchyStructure">put_user_hierarchy_structure</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.resetUserHierarchyStructure">reset_user_hierarchy_structure</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_user_hierarchy_structure` <a name="put_user_hierarchy_structure" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.putUserHierarchyStructure"></a>

```python
def put_user_hierarchy_structure(
  level_five: ConnectUserHierarchyStructureUserHierarchyStructureLevelFive = None,
  level_four: ConnectUserHierarchyStructureUserHierarchyStructureLevelFour = None,
  level_one: ConnectUserHierarchyStructureUserHierarchyStructureLevelOne = None,
  level_three: ConnectUserHierarchyStructureUserHierarchyStructureLevelThree = None,
  level_two: ConnectUserHierarchyStructureUserHierarchyStructureLevelTwo = None
) -> None
```

###### `level_five`<sup>Optional</sup> <a name="level_five" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.putUserHierarchyStructure.parameter.levelFive"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFive">ConnectUserHierarchyStructureUserHierarchyStructureLevelFive</a>

Information about level five.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_user_hierarchy_structure#level_five ConnectUserHierarchyStructure#level_five}

---

###### `level_four`<sup>Optional</sup> <a name="level_four" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.putUserHierarchyStructure.parameter.levelFour"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFour">ConnectUserHierarchyStructureUserHierarchyStructureLevelFour</a>

Information about level four.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_user_hierarchy_structure#level_four ConnectUserHierarchyStructure#level_four}

---

###### `level_one`<sup>Optional</sup> <a name="level_one" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.putUserHierarchyStructure.parameter.levelOne"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOne">ConnectUserHierarchyStructureUserHierarchyStructureLevelOne</a>

Information about level one.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_user_hierarchy_structure#level_one ConnectUserHierarchyStructure#level_one}

---

###### `level_three`<sup>Optional</sup> <a name="level_three" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.putUserHierarchyStructure.parameter.levelThree"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThree">ConnectUserHierarchyStructureUserHierarchyStructureLevelThree</a>

Information about level three.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_user_hierarchy_structure#level_three ConnectUserHierarchyStructure#level_three}

---

###### `level_two`<sup>Optional</sup> <a name="level_two" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.putUserHierarchyStructure.parameter.levelTwo"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwo">ConnectUserHierarchyStructureUserHierarchyStructureLevelTwo</a>

Information about level two.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_user_hierarchy_structure#level_two ConnectUserHierarchyStructure#level_two}

---

##### `reset_user_hierarchy_structure` <a name="reset_user_hierarchy_structure" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.resetUserHierarchyStructure"></a>

```python
def reset_user_hierarchy_structure() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a ConnectUserHierarchyStructure resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.isConstruct"></a>

```python
from cdktn_provider_awscc import connect_user_hierarchy_structure

connectUserHierarchyStructure.ConnectUserHierarchyStructure.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.isTerraformElement"></a>

```python
from cdktn_provider_awscc import connect_user_hierarchy_structure

connectUserHierarchyStructure.ConnectUserHierarchyStructure.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.isTerraformResource"></a>

```python
from cdktn_provider_awscc import connect_user_hierarchy_structure

connectUserHierarchyStructure.ConnectUserHierarchyStructure.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import connect_user_hierarchy_structure

connectUserHierarchyStructure.ConnectUserHierarchyStructure.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a ConnectUserHierarchyStructure resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ConnectUserHierarchyStructure to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ConnectUserHierarchyStructure that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_user_hierarchy_structure#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ConnectUserHierarchyStructure to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.userHierarchyStructure">user_hierarchy_structure</a></code> | <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference">ConnectUserHierarchyStructureUserHierarchyStructureOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.userHierarchyStructureArn">user_hierarchy_structure_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.instanceArnInput">instance_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.userHierarchyStructureInput">user_hierarchy_structure_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructure">ConnectUserHierarchyStructureUserHierarchyStructure</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.instanceArn">instance_arn</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `user_hierarchy_structure`<sup>Required</sup> <a name="user_hierarchy_structure" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.userHierarchyStructure"></a>

```python
user_hierarchy_structure: ConnectUserHierarchyStructureUserHierarchyStructureOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference">ConnectUserHierarchyStructureUserHierarchyStructureOutputReference</a>

---

##### `user_hierarchy_structure_arn`<sup>Required</sup> <a name="user_hierarchy_structure_arn" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.userHierarchyStructureArn"></a>

```python
user_hierarchy_structure_arn: str
```

- *Type:* str

---

##### `instance_arn_input`<sup>Optional</sup> <a name="instance_arn_input" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.instanceArnInput"></a>

```python
instance_arn_input: str
```

- *Type:* str

---

##### `user_hierarchy_structure_input`<sup>Optional</sup> <a name="user_hierarchy_structure_input" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.userHierarchyStructureInput"></a>

```python
user_hierarchy_structure_input: IResolvable | ConnectUserHierarchyStructureUserHierarchyStructure
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructure">ConnectUserHierarchyStructureUserHierarchyStructure</a>

---

##### `instance_arn`<sup>Required</sup> <a name="instance_arn" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.instanceArn"></a>

```python
instance_arn: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructure.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ConnectUserHierarchyStructureConfig <a name="ConnectUserHierarchyStructureConfig" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureConfig.Initializer"></a>

```python
from cdktn_provider_awscc import connect_user_hierarchy_structure

connectUserHierarchyStructure.ConnectUserHierarchyStructureConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  instance_arn: str,
  user_hierarchy_structure: ConnectUserHierarchyStructureUserHierarchyStructure = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureConfig.property.instanceArn">instance_arn</a></code> | <code>str</code> | The identifier of the Amazon Connect instance. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureConfig.property.userHierarchyStructure">user_hierarchy_structure</a></code> | <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructure">ConnectUserHierarchyStructureUserHierarchyStructure</a></code> | Information about the hierarchy structure. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `instance_arn`<sup>Required</sup> <a name="instance_arn" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureConfig.property.instanceArn"></a>

```python
instance_arn: str
```

- *Type:* str

The identifier of the Amazon Connect instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_user_hierarchy_structure#instance_arn ConnectUserHierarchyStructure#instance_arn}

---

##### `user_hierarchy_structure`<sup>Optional</sup> <a name="user_hierarchy_structure" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureConfig.property.userHierarchyStructure"></a>

```python
user_hierarchy_structure: ConnectUserHierarchyStructureUserHierarchyStructure
```

- *Type:* <a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructure">ConnectUserHierarchyStructureUserHierarchyStructure</a>

Information about the hierarchy structure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_user_hierarchy_structure#user_hierarchy_structure ConnectUserHierarchyStructure#user_hierarchy_structure}

---

### ConnectUserHierarchyStructureUserHierarchyStructure <a name="ConnectUserHierarchyStructureUserHierarchyStructure" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructure"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructure.Initializer"></a>

```python
from cdktn_provider_awscc import connect_user_hierarchy_structure

connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructure(
  level_five: ConnectUserHierarchyStructureUserHierarchyStructureLevelFive = None,
  level_four: ConnectUserHierarchyStructureUserHierarchyStructureLevelFour = None,
  level_one: ConnectUserHierarchyStructureUserHierarchyStructureLevelOne = None,
  level_three: ConnectUserHierarchyStructureUserHierarchyStructureLevelThree = None,
  level_two: ConnectUserHierarchyStructureUserHierarchyStructureLevelTwo = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructure.property.levelFive">level_five</a></code> | <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFive">ConnectUserHierarchyStructureUserHierarchyStructureLevelFive</a></code> | Information about level five. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructure.property.levelFour">level_four</a></code> | <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFour">ConnectUserHierarchyStructureUserHierarchyStructureLevelFour</a></code> | Information about level four. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructure.property.levelOne">level_one</a></code> | <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOne">ConnectUserHierarchyStructureUserHierarchyStructureLevelOne</a></code> | Information about level one. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructure.property.levelThree">level_three</a></code> | <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThree">ConnectUserHierarchyStructureUserHierarchyStructureLevelThree</a></code> | Information about level three. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructure.property.levelTwo">level_two</a></code> | <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwo">ConnectUserHierarchyStructureUserHierarchyStructureLevelTwo</a></code> | Information about level two. |

---

##### `level_five`<sup>Optional</sup> <a name="level_five" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructure.property.levelFive"></a>

```python
level_five: ConnectUserHierarchyStructureUserHierarchyStructureLevelFive
```

- *Type:* <a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFive">ConnectUserHierarchyStructureUserHierarchyStructureLevelFive</a>

Information about level five.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_user_hierarchy_structure#level_five ConnectUserHierarchyStructure#level_five}

---

##### `level_four`<sup>Optional</sup> <a name="level_four" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructure.property.levelFour"></a>

```python
level_four: ConnectUserHierarchyStructureUserHierarchyStructureLevelFour
```

- *Type:* <a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFour">ConnectUserHierarchyStructureUserHierarchyStructureLevelFour</a>

Information about level four.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_user_hierarchy_structure#level_four ConnectUserHierarchyStructure#level_four}

---

##### `level_one`<sup>Optional</sup> <a name="level_one" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructure.property.levelOne"></a>

```python
level_one: ConnectUserHierarchyStructureUserHierarchyStructureLevelOne
```

- *Type:* <a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOne">ConnectUserHierarchyStructureUserHierarchyStructureLevelOne</a>

Information about level one.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_user_hierarchy_structure#level_one ConnectUserHierarchyStructure#level_one}

---

##### `level_three`<sup>Optional</sup> <a name="level_three" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructure.property.levelThree"></a>

```python
level_three: ConnectUserHierarchyStructureUserHierarchyStructureLevelThree
```

- *Type:* <a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThree">ConnectUserHierarchyStructureUserHierarchyStructureLevelThree</a>

Information about level three.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_user_hierarchy_structure#level_three ConnectUserHierarchyStructure#level_three}

---

##### `level_two`<sup>Optional</sup> <a name="level_two" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructure.property.levelTwo"></a>

```python
level_two: ConnectUserHierarchyStructureUserHierarchyStructureLevelTwo
```

- *Type:* <a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwo">ConnectUserHierarchyStructureUserHierarchyStructureLevelTwo</a>

Information about level two.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_user_hierarchy_structure#level_two ConnectUserHierarchyStructure#level_two}

---

### ConnectUserHierarchyStructureUserHierarchyStructureLevelFive <a name="ConnectUserHierarchyStructureUserHierarchyStructureLevelFive" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFive"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFive.Initializer"></a>

```python
from cdktn_provider_awscc import connect_user_hierarchy_structure

connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFive(
  hierarchy_level_arn: str = None,
  hierarchy_level_id: str = None,
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFive.property.hierarchyLevelArn">hierarchy_level_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the hierarchy level. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFive.property.hierarchyLevelId">hierarchy_level_id</a></code> | <code>str</code> | The identifier of the hierarchy level. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFive.property.name">name</a></code> | <code>str</code> | The name of the hierarchy level. |

---

##### `hierarchy_level_arn`<sup>Optional</sup> <a name="hierarchy_level_arn" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFive.property.hierarchyLevelArn"></a>

```python
hierarchy_level_arn: str
```

- *Type:* str

The Amazon Resource Name (ARN) of the hierarchy level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_user_hierarchy_structure#hierarchy_level_arn ConnectUserHierarchyStructure#hierarchy_level_arn}

---

##### `hierarchy_level_id`<sup>Optional</sup> <a name="hierarchy_level_id" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFive.property.hierarchyLevelId"></a>

```python
hierarchy_level_id: str
```

- *Type:* str

The identifier of the hierarchy level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_user_hierarchy_structure#hierarchy_level_id ConnectUserHierarchyStructure#hierarchy_level_id}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFive.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the hierarchy level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_user_hierarchy_structure#name ConnectUserHierarchyStructure#name}

---

### ConnectUserHierarchyStructureUserHierarchyStructureLevelFour <a name="ConnectUserHierarchyStructureUserHierarchyStructureLevelFour" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFour"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFour.Initializer"></a>

```python
from cdktn_provider_awscc import connect_user_hierarchy_structure

connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFour(
  hierarchy_level_arn: str = None,
  hierarchy_level_id: str = None,
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFour.property.hierarchyLevelArn">hierarchy_level_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the hierarchy level. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFour.property.hierarchyLevelId">hierarchy_level_id</a></code> | <code>str</code> | The identifier of the hierarchy level. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFour.property.name">name</a></code> | <code>str</code> | The name of the hierarchy level. |

---

##### `hierarchy_level_arn`<sup>Optional</sup> <a name="hierarchy_level_arn" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFour.property.hierarchyLevelArn"></a>

```python
hierarchy_level_arn: str
```

- *Type:* str

The Amazon Resource Name (ARN) of the hierarchy level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_user_hierarchy_structure#hierarchy_level_arn ConnectUserHierarchyStructure#hierarchy_level_arn}

---

##### `hierarchy_level_id`<sup>Optional</sup> <a name="hierarchy_level_id" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFour.property.hierarchyLevelId"></a>

```python
hierarchy_level_id: str
```

- *Type:* str

The identifier of the hierarchy level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_user_hierarchy_structure#hierarchy_level_id ConnectUserHierarchyStructure#hierarchy_level_id}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFour.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the hierarchy level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_user_hierarchy_structure#name ConnectUserHierarchyStructure#name}

---

### ConnectUserHierarchyStructureUserHierarchyStructureLevelOne <a name="ConnectUserHierarchyStructureUserHierarchyStructureLevelOne" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOne"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOne.Initializer"></a>

```python
from cdktn_provider_awscc import connect_user_hierarchy_structure

connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOne(
  hierarchy_level_arn: str = None,
  hierarchy_level_id: str = None,
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOne.property.hierarchyLevelArn">hierarchy_level_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the hierarchy level. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOne.property.hierarchyLevelId">hierarchy_level_id</a></code> | <code>str</code> | The identifier of the hierarchy level. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOne.property.name">name</a></code> | <code>str</code> | The name of the hierarchy level. |

---

##### `hierarchy_level_arn`<sup>Optional</sup> <a name="hierarchy_level_arn" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOne.property.hierarchyLevelArn"></a>

```python
hierarchy_level_arn: str
```

- *Type:* str

The Amazon Resource Name (ARN) of the hierarchy level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_user_hierarchy_structure#hierarchy_level_arn ConnectUserHierarchyStructure#hierarchy_level_arn}

---

##### `hierarchy_level_id`<sup>Optional</sup> <a name="hierarchy_level_id" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOne.property.hierarchyLevelId"></a>

```python
hierarchy_level_id: str
```

- *Type:* str

The identifier of the hierarchy level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_user_hierarchy_structure#hierarchy_level_id ConnectUserHierarchyStructure#hierarchy_level_id}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOne.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the hierarchy level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_user_hierarchy_structure#name ConnectUserHierarchyStructure#name}

---

### ConnectUserHierarchyStructureUserHierarchyStructureLevelThree <a name="ConnectUserHierarchyStructureUserHierarchyStructureLevelThree" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThree"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThree.Initializer"></a>

```python
from cdktn_provider_awscc import connect_user_hierarchy_structure

connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThree(
  hierarchy_level_arn: str = None,
  hierarchy_level_id: str = None,
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThree.property.hierarchyLevelArn">hierarchy_level_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the hierarchy level. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThree.property.hierarchyLevelId">hierarchy_level_id</a></code> | <code>str</code> | The identifier of the hierarchy level. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThree.property.name">name</a></code> | <code>str</code> | The name of the hierarchy level. |

---

##### `hierarchy_level_arn`<sup>Optional</sup> <a name="hierarchy_level_arn" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThree.property.hierarchyLevelArn"></a>

```python
hierarchy_level_arn: str
```

- *Type:* str

The Amazon Resource Name (ARN) of the hierarchy level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_user_hierarchy_structure#hierarchy_level_arn ConnectUserHierarchyStructure#hierarchy_level_arn}

---

##### `hierarchy_level_id`<sup>Optional</sup> <a name="hierarchy_level_id" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThree.property.hierarchyLevelId"></a>

```python
hierarchy_level_id: str
```

- *Type:* str

The identifier of the hierarchy level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_user_hierarchy_structure#hierarchy_level_id ConnectUserHierarchyStructure#hierarchy_level_id}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThree.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the hierarchy level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_user_hierarchy_structure#name ConnectUserHierarchyStructure#name}

---

### ConnectUserHierarchyStructureUserHierarchyStructureLevelTwo <a name="ConnectUserHierarchyStructureUserHierarchyStructureLevelTwo" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwo.Initializer"></a>

```python
from cdktn_provider_awscc import connect_user_hierarchy_structure

connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwo(
  hierarchy_level_arn: str = None,
  hierarchy_level_id: str = None,
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwo.property.hierarchyLevelArn">hierarchy_level_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the hierarchy level. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwo.property.hierarchyLevelId">hierarchy_level_id</a></code> | <code>str</code> | The identifier of the hierarchy level. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwo.property.name">name</a></code> | <code>str</code> | The name of the hierarchy level. |

---

##### `hierarchy_level_arn`<sup>Optional</sup> <a name="hierarchy_level_arn" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwo.property.hierarchyLevelArn"></a>

```python
hierarchy_level_arn: str
```

- *Type:* str

The Amazon Resource Name (ARN) of the hierarchy level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_user_hierarchy_structure#hierarchy_level_arn ConnectUserHierarchyStructure#hierarchy_level_arn}

---

##### `hierarchy_level_id`<sup>Optional</sup> <a name="hierarchy_level_id" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwo.property.hierarchyLevelId"></a>

```python
hierarchy_level_id: str
```

- *Type:* str

The identifier of the hierarchy level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_user_hierarchy_structure#hierarchy_level_id ConnectUserHierarchyStructure#hierarchy_level_id}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwo.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the hierarchy level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_user_hierarchy_structure#name ConnectUserHierarchyStructure#name}

---

## Classes <a name="Classes" id="Classes"></a>

### ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference <a name="ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import connect_user_hierarchy_structure

connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.resetHierarchyLevelArn">reset_hierarchy_level_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.resetHierarchyLevelId">reset_hierarchy_level_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.resetName">reset_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_hierarchy_level_arn` <a name="reset_hierarchy_level_arn" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.resetHierarchyLevelArn"></a>

```python
def reset_hierarchy_level_arn() -> None
```

##### `reset_hierarchy_level_id` <a name="reset_hierarchy_level_id" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.resetHierarchyLevelId"></a>

```python
def reset_hierarchy_level_id() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.resetName"></a>

```python
def reset_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.property.hierarchyLevelArnInput">hierarchy_level_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.property.hierarchyLevelIdInput">hierarchy_level_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.property.hierarchyLevelArn">hierarchy_level_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.property.hierarchyLevelId">hierarchy_level_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFive">ConnectUserHierarchyStructureUserHierarchyStructureLevelFive</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `hierarchy_level_arn_input`<sup>Optional</sup> <a name="hierarchy_level_arn_input" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.property.hierarchyLevelArnInput"></a>

```python
hierarchy_level_arn_input: str
```

- *Type:* str

---

##### `hierarchy_level_id_input`<sup>Optional</sup> <a name="hierarchy_level_id_input" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.property.hierarchyLevelIdInput"></a>

```python
hierarchy_level_id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `hierarchy_level_arn`<sup>Required</sup> <a name="hierarchy_level_arn" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.property.hierarchyLevelArn"></a>

```python
hierarchy_level_arn: str
```

- *Type:* str

---

##### `hierarchy_level_id`<sup>Required</sup> <a name="hierarchy_level_id" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.property.hierarchyLevelId"></a>

```python
hierarchy_level_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ConnectUserHierarchyStructureUserHierarchyStructureLevelFive
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFive">ConnectUserHierarchyStructureUserHierarchyStructureLevelFive</a>

---


### ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference <a name="ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import connect_user_hierarchy_structure

connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.resetHierarchyLevelArn">reset_hierarchy_level_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.resetHierarchyLevelId">reset_hierarchy_level_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.resetName">reset_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_hierarchy_level_arn` <a name="reset_hierarchy_level_arn" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.resetHierarchyLevelArn"></a>

```python
def reset_hierarchy_level_arn() -> None
```

##### `reset_hierarchy_level_id` <a name="reset_hierarchy_level_id" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.resetHierarchyLevelId"></a>

```python
def reset_hierarchy_level_id() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.resetName"></a>

```python
def reset_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.property.hierarchyLevelArnInput">hierarchy_level_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.property.hierarchyLevelIdInput">hierarchy_level_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.property.hierarchyLevelArn">hierarchy_level_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.property.hierarchyLevelId">hierarchy_level_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFour">ConnectUserHierarchyStructureUserHierarchyStructureLevelFour</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `hierarchy_level_arn_input`<sup>Optional</sup> <a name="hierarchy_level_arn_input" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.property.hierarchyLevelArnInput"></a>

```python
hierarchy_level_arn_input: str
```

- *Type:* str

---

##### `hierarchy_level_id_input`<sup>Optional</sup> <a name="hierarchy_level_id_input" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.property.hierarchyLevelIdInput"></a>

```python
hierarchy_level_id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `hierarchy_level_arn`<sup>Required</sup> <a name="hierarchy_level_arn" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.property.hierarchyLevelArn"></a>

```python
hierarchy_level_arn: str
```

- *Type:* str

---

##### `hierarchy_level_id`<sup>Required</sup> <a name="hierarchy_level_id" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.property.hierarchyLevelId"></a>

```python
hierarchy_level_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ConnectUserHierarchyStructureUserHierarchyStructureLevelFour
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFour">ConnectUserHierarchyStructureUserHierarchyStructureLevelFour</a>

---


### ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference <a name="ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import connect_user_hierarchy_structure

connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.resetHierarchyLevelArn">reset_hierarchy_level_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.resetHierarchyLevelId">reset_hierarchy_level_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.resetName">reset_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_hierarchy_level_arn` <a name="reset_hierarchy_level_arn" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.resetHierarchyLevelArn"></a>

```python
def reset_hierarchy_level_arn() -> None
```

##### `reset_hierarchy_level_id` <a name="reset_hierarchy_level_id" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.resetHierarchyLevelId"></a>

```python
def reset_hierarchy_level_id() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.resetName"></a>

```python
def reset_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.property.hierarchyLevelArnInput">hierarchy_level_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.property.hierarchyLevelIdInput">hierarchy_level_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.property.hierarchyLevelArn">hierarchy_level_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.property.hierarchyLevelId">hierarchy_level_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOne">ConnectUserHierarchyStructureUserHierarchyStructureLevelOne</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `hierarchy_level_arn_input`<sup>Optional</sup> <a name="hierarchy_level_arn_input" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.property.hierarchyLevelArnInput"></a>

```python
hierarchy_level_arn_input: str
```

- *Type:* str

---

##### `hierarchy_level_id_input`<sup>Optional</sup> <a name="hierarchy_level_id_input" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.property.hierarchyLevelIdInput"></a>

```python
hierarchy_level_id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `hierarchy_level_arn`<sup>Required</sup> <a name="hierarchy_level_arn" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.property.hierarchyLevelArn"></a>

```python
hierarchy_level_arn: str
```

- *Type:* str

---

##### `hierarchy_level_id`<sup>Required</sup> <a name="hierarchy_level_id" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.property.hierarchyLevelId"></a>

```python
hierarchy_level_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ConnectUserHierarchyStructureUserHierarchyStructureLevelOne
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOne">ConnectUserHierarchyStructureUserHierarchyStructureLevelOne</a>

---


### ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference <a name="ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import connect_user_hierarchy_structure

connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.resetHierarchyLevelArn">reset_hierarchy_level_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.resetHierarchyLevelId">reset_hierarchy_level_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.resetName">reset_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_hierarchy_level_arn` <a name="reset_hierarchy_level_arn" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.resetHierarchyLevelArn"></a>

```python
def reset_hierarchy_level_arn() -> None
```

##### `reset_hierarchy_level_id` <a name="reset_hierarchy_level_id" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.resetHierarchyLevelId"></a>

```python
def reset_hierarchy_level_id() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.resetName"></a>

```python
def reset_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.property.hierarchyLevelArnInput">hierarchy_level_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.property.hierarchyLevelIdInput">hierarchy_level_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.property.hierarchyLevelArn">hierarchy_level_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.property.hierarchyLevelId">hierarchy_level_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThree">ConnectUserHierarchyStructureUserHierarchyStructureLevelThree</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `hierarchy_level_arn_input`<sup>Optional</sup> <a name="hierarchy_level_arn_input" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.property.hierarchyLevelArnInput"></a>

```python
hierarchy_level_arn_input: str
```

- *Type:* str

---

##### `hierarchy_level_id_input`<sup>Optional</sup> <a name="hierarchy_level_id_input" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.property.hierarchyLevelIdInput"></a>

```python
hierarchy_level_id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `hierarchy_level_arn`<sup>Required</sup> <a name="hierarchy_level_arn" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.property.hierarchyLevelArn"></a>

```python
hierarchy_level_arn: str
```

- *Type:* str

---

##### `hierarchy_level_id`<sup>Required</sup> <a name="hierarchy_level_id" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.property.hierarchyLevelId"></a>

```python
hierarchy_level_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ConnectUserHierarchyStructureUserHierarchyStructureLevelThree
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThree">ConnectUserHierarchyStructureUserHierarchyStructureLevelThree</a>

---


### ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference <a name="ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import connect_user_hierarchy_structure

connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.resetHierarchyLevelArn">reset_hierarchy_level_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.resetHierarchyLevelId">reset_hierarchy_level_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.resetName">reset_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_hierarchy_level_arn` <a name="reset_hierarchy_level_arn" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.resetHierarchyLevelArn"></a>

```python
def reset_hierarchy_level_arn() -> None
```

##### `reset_hierarchy_level_id` <a name="reset_hierarchy_level_id" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.resetHierarchyLevelId"></a>

```python
def reset_hierarchy_level_id() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.resetName"></a>

```python
def reset_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.property.hierarchyLevelArnInput">hierarchy_level_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.property.hierarchyLevelIdInput">hierarchy_level_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.property.hierarchyLevelArn">hierarchy_level_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.property.hierarchyLevelId">hierarchy_level_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwo">ConnectUserHierarchyStructureUserHierarchyStructureLevelTwo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `hierarchy_level_arn_input`<sup>Optional</sup> <a name="hierarchy_level_arn_input" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.property.hierarchyLevelArnInput"></a>

```python
hierarchy_level_arn_input: str
```

- *Type:* str

---

##### `hierarchy_level_id_input`<sup>Optional</sup> <a name="hierarchy_level_id_input" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.property.hierarchyLevelIdInput"></a>

```python
hierarchy_level_id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `hierarchy_level_arn`<sup>Required</sup> <a name="hierarchy_level_arn" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.property.hierarchyLevelArn"></a>

```python
hierarchy_level_arn: str
```

- *Type:* str

---

##### `hierarchy_level_id`<sup>Required</sup> <a name="hierarchy_level_id" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.property.hierarchyLevelId"></a>

```python
hierarchy_level_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ConnectUserHierarchyStructureUserHierarchyStructureLevelTwo
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwo">ConnectUserHierarchyStructureUserHierarchyStructureLevelTwo</a>

---


### ConnectUserHierarchyStructureUserHierarchyStructureOutputReference <a name="ConnectUserHierarchyStructureUserHierarchyStructureOutputReference" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import connect_user_hierarchy_structure

connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.putLevelFive">put_level_five</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.putLevelFour">put_level_four</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.putLevelOne">put_level_one</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.putLevelThree">put_level_three</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.putLevelTwo">put_level_two</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.resetLevelFive">reset_level_five</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.resetLevelFour">reset_level_four</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.resetLevelOne">reset_level_one</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.resetLevelThree">reset_level_three</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.resetLevelTwo">reset_level_two</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_level_five` <a name="put_level_five" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.putLevelFive"></a>

```python
def put_level_five(
  hierarchy_level_arn: str = None,
  hierarchy_level_id: str = None,
  name: str = None
) -> None
```

###### `hierarchy_level_arn`<sup>Optional</sup> <a name="hierarchy_level_arn" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.putLevelFive.parameter.hierarchyLevelArn"></a>

- *Type:* str

The Amazon Resource Name (ARN) of the hierarchy level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_user_hierarchy_structure#hierarchy_level_arn ConnectUserHierarchyStructure#hierarchy_level_arn}

---

###### `hierarchy_level_id`<sup>Optional</sup> <a name="hierarchy_level_id" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.putLevelFive.parameter.hierarchyLevelId"></a>

- *Type:* str

The identifier of the hierarchy level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_user_hierarchy_structure#hierarchy_level_id ConnectUserHierarchyStructure#hierarchy_level_id}

---

###### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.putLevelFive.parameter.name"></a>

- *Type:* str

The name of the hierarchy level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_user_hierarchy_structure#name ConnectUserHierarchyStructure#name}

---

##### `put_level_four` <a name="put_level_four" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.putLevelFour"></a>

```python
def put_level_four(
  hierarchy_level_arn: str = None,
  hierarchy_level_id: str = None,
  name: str = None
) -> None
```

###### `hierarchy_level_arn`<sup>Optional</sup> <a name="hierarchy_level_arn" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.putLevelFour.parameter.hierarchyLevelArn"></a>

- *Type:* str

The Amazon Resource Name (ARN) of the hierarchy level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_user_hierarchy_structure#hierarchy_level_arn ConnectUserHierarchyStructure#hierarchy_level_arn}

---

###### `hierarchy_level_id`<sup>Optional</sup> <a name="hierarchy_level_id" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.putLevelFour.parameter.hierarchyLevelId"></a>

- *Type:* str

The identifier of the hierarchy level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_user_hierarchy_structure#hierarchy_level_id ConnectUserHierarchyStructure#hierarchy_level_id}

---

###### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.putLevelFour.parameter.name"></a>

- *Type:* str

The name of the hierarchy level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_user_hierarchy_structure#name ConnectUserHierarchyStructure#name}

---

##### `put_level_one` <a name="put_level_one" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.putLevelOne"></a>

```python
def put_level_one(
  hierarchy_level_arn: str = None,
  hierarchy_level_id: str = None,
  name: str = None
) -> None
```

###### `hierarchy_level_arn`<sup>Optional</sup> <a name="hierarchy_level_arn" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.putLevelOne.parameter.hierarchyLevelArn"></a>

- *Type:* str

The Amazon Resource Name (ARN) of the hierarchy level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_user_hierarchy_structure#hierarchy_level_arn ConnectUserHierarchyStructure#hierarchy_level_arn}

---

###### `hierarchy_level_id`<sup>Optional</sup> <a name="hierarchy_level_id" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.putLevelOne.parameter.hierarchyLevelId"></a>

- *Type:* str

The identifier of the hierarchy level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_user_hierarchy_structure#hierarchy_level_id ConnectUserHierarchyStructure#hierarchy_level_id}

---

###### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.putLevelOne.parameter.name"></a>

- *Type:* str

The name of the hierarchy level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_user_hierarchy_structure#name ConnectUserHierarchyStructure#name}

---

##### `put_level_three` <a name="put_level_three" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.putLevelThree"></a>

```python
def put_level_three(
  hierarchy_level_arn: str = None,
  hierarchy_level_id: str = None,
  name: str = None
) -> None
```

###### `hierarchy_level_arn`<sup>Optional</sup> <a name="hierarchy_level_arn" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.putLevelThree.parameter.hierarchyLevelArn"></a>

- *Type:* str

The Amazon Resource Name (ARN) of the hierarchy level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_user_hierarchy_structure#hierarchy_level_arn ConnectUserHierarchyStructure#hierarchy_level_arn}

---

###### `hierarchy_level_id`<sup>Optional</sup> <a name="hierarchy_level_id" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.putLevelThree.parameter.hierarchyLevelId"></a>

- *Type:* str

The identifier of the hierarchy level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_user_hierarchy_structure#hierarchy_level_id ConnectUserHierarchyStructure#hierarchy_level_id}

---

###### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.putLevelThree.parameter.name"></a>

- *Type:* str

The name of the hierarchy level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_user_hierarchy_structure#name ConnectUserHierarchyStructure#name}

---

##### `put_level_two` <a name="put_level_two" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.putLevelTwo"></a>

```python
def put_level_two(
  hierarchy_level_arn: str = None,
  hierarchy_level_id: str = None,
  name: str = None
) -> None
```

###### `hierarchy_level_arn`<sup>Optional</sup> <a name="hierarchy_level_arn" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.putLevelTwo.parameter.hierarchyLevelArn"></a>

- *Type:* str

The Amazon Resource Name (ARN) of the hierarchy level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_user_hierarchy_structure#hierarchy_level_arn ConnectUserHierarchyStructure#hierarchy_level_arn}

---

###### `hierarchy_level_id`<sup>Optional</sup> <a name="hierarchy_level_id" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.putLevelTwo.parameter.hierarchyLevelId"></a>

- *Type:* str

The identifier of the hierarchy level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_user_hierarchy_structure#hierarchy_level_id ConnectUserHierarchyStructure#hierarchy_level_id}

---

###### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.putLevelTwo.parameter.name"></a>

- *Type:* str

The name of the hierarchy level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_user_hierarchy_structure#name ConnectUserHierarchyStructure#name}

---

##### `reset_level_five` <a name="reset_level_five" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.resetLevelFive"></a>

```python
def reset_level_five() -> None
```

##### `reset_level_four` <a name="reset_level_four" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.resetLevelFour"></a>

```python
def reset_level_four() -> None
```

##### `reset_level_one` <a name="reset_level_one" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.resetLevelOne"></a>

```python
def reset_level_one() -> None
```

##### `reset_level_three` <a name="reset_level_three" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.resetLevelThree"></a>

```python
def reset_level_three() -> None
```

##### `reset_level_two` <a name="reset_level_two" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.resetLevelTwo"></a>

```python
def reset_level_two() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.property.levelFive">level_five</a></code> | <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference">ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.property.levelFour">level_four</a></code> | <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference">ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.property.levelOne">level_one</a></code> | <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference">ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.property.levelThree">level_three</a></code> | <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference">ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.property.levelTwo">level_two</a></code> | <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference">ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.property.levelFiveInput">level_five_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFive">ConnectUserHierarchyStructureUserHierarchyStructureLevelFive</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.property.levelFourInput">level_four_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFour">ConnectUserHierarchyStructureUserHierarchyStructureLevelFour</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.property.levelOneInput">level_one_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOne">ConnectUserHierarchyStructureUserHierarchyStructureLevelOne</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.property.levelThreeInput">level_three_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThree">ConnectUserHierarchyStructureUserHierarchyStructureLevelThree</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.property.levelTwoInput">level_two_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwo">ConnectUserHierarchyStructureUserHierarchyStructureLevelTwo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructure">ConnectUserHierarchyStructureUserHierarchyStructure</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `level_five`<sup>Required</sup> <a name="level_five" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.property.levelFive"></a>

```python
level_five: ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference">ConnectUserHierarchyStructureUserHierarchyStructureLevelFiveOutputReference</a>

---

##### `level_four`<sup>Required</sup> <a name="level_four" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.property.levelFour"></a>

```python
level_four: ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference">ConnectUserHierarchyStructureUserHierarchyStructureLevelFourOutputReference</a>

---

##### `level_one`<sup>Required</sup> <a name="level_one" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.property.levelOne"></a>

```python
level_one: ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference">ConnectUserHierarchyStructureUserHierarchyStructureLevelOneOutputReference</a>

---

##### `level_three`<sup>Required</sup> <a name="level_three" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.property.levelThree"></a>

```python
level_three: ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference">ConnectUserHierarchyStructureUserHierarchyStructureLevelThreeOutputReference</a>

---

##### `level_two`<sup>Required</sup> <a name="level_two" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.property.levelTwo"></a>

```python
level_two: ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference">ConnectUserHierarchyStructureUserHierarchyStructureLevelTwoOutputReference</a>

---

##### `level_five_input`<sup>Optional</sup> <a name="level_five_input" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.property.levelFiveInput"></a>

```python
level_five_input: IResolvable | ConnectUserHierarchyStructureUserHierarchyStructureLevelFive
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFive">ConnectUserHierarchyStructureUserHierarchyStructureLevelFive</a>

---

##### `level_four_input`<sup>Optional</sup> <a name="level_four_input" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.property.levelFourInput"></a>

```python
level_four_input: IResolvable | ConnectUserHierarchyStructureUserHierarchyStructureLevelFour
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelFour">ConnectUserHierarchyStructureUserHierarchyStructureLevelFour</a>

---

##### `level_one_input`<sup>Optional</sup> <a name="level_one_input" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.property.levelOneInput"></a>

```python
level_one_input: IResolvable | ConnectUserHierarchyStructureUserHierarchyStructureLevelOne
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelOne">ConnectUserHierarchyStructureUserHierarchyStructureLevelOne</a>

---

##### `level_three_input`<sup>Optional</sup> <a name="level_three_input" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.property.levelThreeInput"></a>

```python
level_three_input: IResolvable | ConnectUserHierarchyStructureUserHierarchyStructureLevelThree
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelThree">ConnectUserHierarchyStructureUserHierarchyStructureLevelThree</a>

---

##### `level_two_input`<sup>Optional</sup> <a name="level_two_input" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.property.levelTwoInput"></a>

```python
level_two_input: IResolvable | ConnectUserHierarchyStructureUserHierarchyStructureLevelTwo
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureLevelTwo">ConnectUserHierarchyStructureUserHierarchyStructureLevelTwo</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructureOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ConnectUserHierarchyStructureUserHierarchyStructure
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectUserHierarchyStructure.ConnectUserHierarchyStructureUserHierarchyStructure">ConnectUserHierarchyStructureUserHierarchyStructure</a>

---



