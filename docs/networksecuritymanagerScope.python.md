# `networksecuritymanagerScope` Submodule <a name="`networksecuritymanagerScope` Submodule" id="@cdktn/provider-awscc.networksecuritymanagerScope"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworksecuritymanagerScope <a name="NetworksecuritymanagerScope" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_scope awscc_networksecuritymanager_scope}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.Initializer"></a>

```python
from cdktn_provider_awscc import networksecuritymanager_scope

networksecuritymanagerScope.NetworksecuritymanagerScope(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  scope_name: str,
  scope_configuration: str = None,
  scope_description: str = None,
  tags: IResolvable | typing.List[NetworksecuritymanagerScopeTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.Initializer.parameter.scopeName">scope_name</a></code> | <code>str</code> | The name of the scope. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.Initializer.parameter.scopeConfiguration">scope_configuration</a></code> | <code>str</code> | The scope configuration as a JSON string. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.Initializer.parameter.scopeDescription">scope_description</a></code> | <code>str</code> | A description of the scope. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTags">NetworksecuritymanagerScopeTags</a>]</code> | The tags associated with the scope. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `scope_name`<sup>Required</sup> <a name="scope_name" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.Initializer.parameter.scopeName"></a>

- *Type:* str

The name of the scope.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_scope#scope_name NetworksecuritymanagerScope#scope_name}

---

##### `scope_configuration`<sup>Optional</sup> <a name="scope_configuration" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.Initializer.parameter.scopeConfiguration"></a>

- *Type:* str

The scope configuration as a JSON string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_scope#scope_configuration NetworksecuritymanagerScope#scope_configuration}

---

##### `scope_description`<sup>Optional</sup> <a name="scope_description" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.Initializer.parameter.scopeDescription"></a>

- *Type:* str

A description of the scope.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_scope#scope_description NetworksecuritymanagerScope#scope_description}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTags">NetworksecuritymanagerScopeTags</a>]

The tags associated with the scope.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_scope#tags NetworksecuritymanagerScope#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.resetScopeConfiguration">reset_scope_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.resetScopeDescription">reset_scope_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[NetworksecuritymanagerScopeTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTags">NetworksecuritymanagerScopeTags</a>]

---

##### `reset_scope_configuration` <a name="reset_scope_configuration" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.resetScopeConfiguration"></a>

```python
def reset_scope_configuration() -> None
```

##### `reset_scope_description` <a name="reset_scope_description" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.resetScopeDescription"></a>

```python
def reset_scope_description() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a NetworksecuritymanagerScope resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.isConstruct"></a>

```python
from cdktn_provider_awscc import networksecuritymanager_scope

networksecuritymanagerScope.NetworksecuritymanagerScope.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.isTerraformElement"></a>

```python
from cdktn_provider_awscc import networksecuritymanager_scope

networksecuritymanagerScope.NetworksecuritymanagerScope.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.isTerraformResource"></a>

```python
from cdktn_provider_awscc import networksecuritymanager_scope

networksecuritymanagerScope.NetworksecuritymanagerScope.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import networksecuritymanager_scope

networksecuritymanagerScope.NetworksecuritymanagerScope.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a NetworksecuritymanagerScope resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the NetworksecuritymanagerScope to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing NetworksecuritymanagerScope that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_scope#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the NetworksecuritymanagerScope to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.property.scopeArn">scope_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.property.scopeId">scope_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTagsList">NetworksecuritymanagerScopeTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.property.scopeConfigurationInput">scope_configuration_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.property.scopeDescriptionInput">scope_description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.property.scopeNameInput">scope_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTags">NetworksecuritymanagerScopeTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.property.scopeConfiguration">scope_configuration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.property.scopeDescription">scope_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.property.scopeName">scope_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `scope_arn`<sup>Required</sup> <a name="scope_arn" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.property.scopeArn"></a>

```python
scope_arn: str
```

- *Type:* str

---

##### `scope_id`<sup>Required</sup> <a name="scope_id" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.property.scopeId"></a>

```python
scope_id: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.property.tags"></a>

```python
tags: NetworksecuritymanagerScopeTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTagsList">NetworksecuritymanagerScopeTagsList</a>

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `scope_configuration_input`<sup>Optional</sup> <a name="scope_configuration_input" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.property.scopeConfigurationInput"></a>

```python
scope_configuration_input: str
```

- *Type:* str

---

##### `scope_description_input`<sup>Optional</sup> <a name="scope_description_input" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.property.scopeDescriptionInput"></a>

```python
scope_description_input: str
```

- *Type:* str

---

##### `scope_name_input`<sup>Optional</sup> <a name="scope_name_input" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.property.scopeNameInput"></a>

```python
scope_name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[NetworksecuritymanagerScopeTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTags">NetworksecuritymanagerScopeTags</a>]

---

##### `scope_configuration`<sup>Required</sup> <a name="scope_configuration" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.property.scopeConfiguration"></a>

```python
scope_configuration: str
```

- *Type:* str

---

##### `scope_description`<sup>Required</sup> <a name="scope_description" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.property.scopeDescription"></a>

```python
scope_description: str
```

- *Type:* str

---

##### `scope_name`<sup>Required</sup> <a name="scope_name" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.property.scopeName"></a>

```python
scope_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScope.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### NetworksecuritymanagerScopeConfig <a name="NetworksecuritymanagerScopeConfig" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeConfig.Initializer"></a>

```python
from cdktn_provider_awscc import networksecuritymanager_scope

networksecuritymanagerScope.NetworksecuritymanagerScopeConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  scope_name: str,
  scope_configuration: str = None,
  scope_description: str = None,
  tags: IResolvable | typing.List[NetworksecuritymanagerScopeTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeConfig.property.scopeName">scope_name</a></code> | <code>str</code> | The name of the scope. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeConfig.property.scopeConfiguration">scope_configuration</a></code> | <code>str</code> | The scope configuration as a JSON string. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeConfig.property.scopeDescription">scope_description</a></code> | <code>str</code> | A description of the scope. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTags">NetworksecuritymanagerScopeTags</a>]</code> | The tags associated with the scope. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `scope_name`<sup>Required</sup> <a name="scope_name" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeConfig.property.scopeName"></a>

```python
scope_name: str
```

- *Type:* str

The name of the scope.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_scope#scope_name NetworksecuritymanagerScope#scope_name}

---

##### `scope_configuration`<sup>Optional</sup> <a name="scope_configuration" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeConfig.property.scopeConfiguration"></a>

```python
scope_configuration: str
```

- *Type:* str

The scope configuration as a JSON string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_scope#scope_configuration NetworksecuritymanagerScope#scope_configuration}

---

##### `scope_description`<sup>Optional</sup> <a name="scope_description" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeConfig.property.scopeDescription"></a>

```python
scope_description: str
```

- *Type:* str

A description of the scope.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_scope#scope_description NetworksecuritymanagerScope#scope_description}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[NetworksecuritymanagerScopeTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTags">NetworksecuritymanagerScopeTags</a>]

The tags associated with the scope.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_scope#tags NetworksecuritymanagerScope#tags}

---

### NetworksecuritymanagerScopeTags <a name="NetworksecuritymanagerScopeTags" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTags.Initializer"></a>

```python
from cdktn_provider_awscc import networksecuritymanager_scope

networksecuritymanagerScope.NetworksecuritymanagerScopeTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_scope#key NetworksecuritymanagerScope#key}. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_scope#value NetworksecuritymanagerScope#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_scope#key NetworksecuritymanagerScope#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_scope#value NetworksecuritymanagerScope#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworksecuritymanagerScopeTagsList <a name="NetworksecuritymanagerScopeTagsList" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import networksecuritymanager_scope

networksecuritymanagerScope.NetworksecuritymanagerScopeTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> NetworksecuritymanagerScopeTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTags">NetworksecuritymanagerScopeTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[NetworksecuritymanagerScopeTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTags">NetworksecuritymanagerScopeTags</a>]

---


### NetworksecuritymanagerScopeTagsOutputReference <a name="NetworksecuritymanagerScopeTagsOutputReference" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import networksecuritymanager_scope

networksecuritymanagerScope.NetworksecuritymanagerScopeTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTags">NetworksecuritymanagerScopeTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | NetworksecuritymanagerScopeTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networksecuritymanagerScope.NetworksecuritymanagerScopeTags">NetworksecuritymanagerScopeTags</a>

---



