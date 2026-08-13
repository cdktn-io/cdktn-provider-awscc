# `quicksightCustomPermissions` Submodule <a name="`quicksightCustomPermissions` Submodule" id="@cdktn/provider-awscc.quicksightCustomPermissions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### QuicksightCustomPermissions <a name="QuicksightCustomPermissions" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions awscc_quicksight_custom_permissions}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_custom_permissions

quicksightCustomPermissions.QuicksightCustomPermissions(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  aws_account_id: str,
  custom_permissions_name: str,
  capabilities: QuicksightCustomPermissionsCapabilities = None,
  tags: IResolvable | typing.List[QuicksightCustomPermissionsTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.Initializer.parameter.awsAccountId">aws_account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#aws_account_id QuicksightCustomPermissions#aws_account_id}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.Initializer.parameter.customPermissionsName">custom_permissions_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#custom_permissions_name QuicksightCustomPermissions#custom_permissions_name}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.Initializer.parameter.capabilities">capabilities</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities">QuicksightCustomPermissionsCapabilities</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#capabilities QuicksightCustomPermissions#capabilities}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTags">QuicksightCustomPermissionsTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#tags QuicksightCustomPermissions#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `aws_account_id`<sup>Required</sup> <a name="aws_account_id" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.Initializer.parameter.awsAccountId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#aws_account_id QuicksightCustomPermissions#aws_account_id}.

---

##### `custom_permissions_name`<sup>Required</sup> <a name="custom_permissions_name" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.Initializer.parameter.customPermissionsName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#custom_permissions_name QuicksightCustomPermissions#custom_permissions_name}.

---

##### `capabilities`<sup>Optional</sup> <a name="capabilities" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.Initializer.parameter.capabilities"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities">QuicksightCustomPermissionsCapabilities</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#capabilities QuicksightCustomPermissions#capabilities}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTags">QuicksightCustomPermissionsTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#tags QuicksightCustomPermissions#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities">put_capabilities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.resetCapabilities">reset_capabilities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_capabilities` <a name="put_capabilities" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities"></a>

```python
def put_capabilities(
  access_apps_native_data_store: str = None,
  action: str = None,
  add_or_run_anomaly_detection_for_analyses: str = None,
  amazon_bedrock_ars_action: str = None,
  amazon_bedrock_fs_action: str = None,
  amazon_bedrock_krs_action: str = None,
  amazon_s_three_action: str = None,
  analysis: str = None,
  approve_flow_share_requests: str = None,
  apps: str = None,
  asana_action: str = None,
  automate: str = None,
  bamboo_hr_action: str = None,
  box_agent_action: str = None,
  build_calculated_field_with_q: str = None,
  canva_agent_action: str = None,
  chat_agent: str = None,
  comprehend_action: str = None,
  comprehend_medical_action: str = None,
  confluence_action: str = None,
  create_and_update_amazon_bedrock_ars_action: str = None,
  create_and_update_amazon_bedrock_fs_action: str = None,
  create_and_update_amazon_bedrock_krs_action: str = None,
  create_and_update_amazon_s_three_action: str = None,
  create_and_update_apps: str = None,
  create_and_update_asana_action: str = None,
  create_and_update_bamboo_hr_action: str = None,
  create_and_update_box_agent_action: str = None,
  create_and_update_canva_agent_action: str = None,
  create_and_update_comprehend_action: str = None,
  create_and_update_comprehend_medical_action: str = None,
  create_and_update_confluence_action: str = None,
  create_and_update_dashboard_email_reports: str = None,
  create_and_update_datasets: str = None,
  create_and_update_data_sources: str = None,
  create_and_update_fact_set_action: str = None,
  create_and_update_generic_http_action: str = None,
  create_and_update_github_action: str = None,
  create_and_update_google_calendar_action: str = None,
  create_and_update_hubspot_action: str = None,
  create_and_update_hugging_face_action: str = None,
  create_and_update_intercom_action: str = None,
  create_and_update_jira_action: str = None,
  create_and_update_knowledge_bases: str = None,
  create_and_update_linear_action: str = None,
  create_and_update_mcp_action: str = None,
  create_and_update_monday_action: str = None,
  create_and_update_ms_exchange_action: str = None,
  create_and_update_ms_teams_action: str = None,
  create_and_update_new_relic_action: str = None,
  create_and_update_notion_action: str = None,
  create_and_update_one_drive_action: str = None,
  create_and_update_open_api_action: str = None,
  create_and_update_pager_duty_action: str = None,
  create_and_update_salesforce_action: str = None,
  create_and_update_sand_p_global_energy_action: str = None,
  create_and_update_sand_pgmi_action: str = None,
  create_and_update_sap_bill_of_material_action: str = None,
  create_and_update_sap_business_partner_action: str = None,
  create_and_update_sap_material_stock_action: str = None,
  create_and_update_sap_physical_inventory_action: str = None,
  create_and_update_sap_product_master_data_action: str = None,
  create_and_update_service_now_action: str = None,
  create_and_update_share_point_action: str = None,
  create_and_update_slack_action: str = None,
  create_and_update_smartsheet_action: str = None,
  create_and_update_textract_action: str = None,
  create_and_update_themes: str = None,
  create_and_update_threshold_alerts: str = None,
  create_and_update_zendesk_action: str = None,
  create_chat_agents: str = None,
  create_dashboard_executive_summary_with_q: str = None,
  create_shared_folders: str = None,
  create_spaces: str = None,
  create_spice_dataset: str = None,
  dashboard: str = None,
  edit_visual_with_q: str = None,
  export_to_csv: str = None,
  export_to_csv_in_scheduled_reports: str = None,
  export_to_excel: str = None,
  export_to_excel_in_scheduled_reports: str = None,
  export_to_pdf: str = None,
  export_to_pdf_in_scheduled_reports: str = None,
  extension: str = None,
  fact_set_action: str = None,
  flow: str = None,
  generic_http_action: str = None,
  github_action: str = None,
  google_calendar_action: str = None,
  hubspot_action: str = None,
  hugging_face_action: str = None,
  include_content_in_scheduled_reports_email: str = None,
  intercom_action: str = None,
  invoke_apps_ai_inference: str = None,
  jira_action: str = None,
  knowledge_base: str = None,
  linear_action: str = None,
  manage_shared_folders: str = None,
  mcp_action: str = None,
  monday_action: str = None,
  ms_exchange_action: str = None,
  ms_teams_action: str = None,
  new_relic_action: str = None,
  notion_action: str = None,
  one_drive_action: str = None,
  open_api_action: str = None,
  pager_duty_action: str = None,
  perform_flow_ui_task: str = None,
  print_reports: str = None,
  publish_without_approval: str = None,
  rename_shared_folders: str = None,
  research: str = None,
  salesforce_action: str = None,
  sand_p_global_energy_action: str = None,
  sand_pgmi_action: str = None,
  sap_bill_of_material_action: str = None,
  sap_business_partner_action: str = None,
  sap_material_stock_action: str = None,
  sap_physical_inventory_action: str = None,
  sap_product_master_data_action: str = None,
  service_now_action: str = None,
  share_amazon_bedrock_ars_action: str = None,
  share_amazon_bedrock_fs_action: str = None,
  share_amazon_bedrock_krs_action: str = None,
  share_amazon_s_three_action: str = None,
  share_analyses: str = None,
  share_apps: str = None,
  share_asana_action: str = None,
  share_bamboo_hr_action: str = None,
  share_box_agent_action: str = None,
  share_canva_agent_action: str = None,
  share_chat_agents: str = None,
  share_comprehend_action: str = None,
  share_comprehend_medical_action: str = None,
  share_confluence_action: str = None,
  share_dashboards: str = None,
  share_datasets: str = None,
  share_data_sources: str = None,
  share_fact_set_action: str = None,
  share_generic_http_action: str = None,
  share_github_action: str = None,
  share_google_calendar_action: str = None,
  share_hubspot_action: str = None,
  share_hugging_face_action: str = None,
  share_intercom_action: str = None,
  share_jira_action: str = None,
  share_knowledge_bases: str = None,
  share_linear_action: str = None,
  share_mcp_action: str = None,
  share_monday_action: str = None,
  share_ms_exchange_action: str = None,
  share_ms_teams_action: str = None,
  share_new_relic_action: str = None,
  share_notion_action: str = None,
  share_one_drive_action: str = None,
  share_open_api_action: str = None,
  share_pager_duty_action: str = None,
  share_point_action: str = None,
  share_salesforce_action: str = None,
  share_sand_p_global_energy_action: str = None,
  share_sand_pgmi_action: str = None,
  share_sap_bill_of_material_action: str = None,
  share_sap_business_partner_action: str = None,
  share_sap_material_stock_action: str = None,
  share_sap_physical_inventory_action: str = None,
  share_sap_product_master_data_action: str = None,
  share_service_now_action: str = None,
  share_share_point_action: str = None,
  share_slack_action: str = None,
  share_smartsheet_action: str = None,
  share_spaces: str = None,
  share_textract_action: str = None,
  share_zendesk_action: str = None,
  slack_action: str = None,
  smartsheet_action: str = None,
  space: str = None,
  subscribe_dashboard_email_reports: str = None,
  textract_action: str = None,
  topic: str = None,
  use_agent_web_search: str = None,
  use_amazon_bedrock_ars_action: str = None,
  use_amazon_bedrock_fs_action: str = None,
  use_amazon_bedrock_krs_action: str = None,
  use_amazon_s_three_action: str = None,
  use_asana_action: str = None,
  use_bamboo_hr_action: str = None,
  use_bedrock_models: str = None,
  use_box_agent_action: str = None,
  use_canva_agent_action: str = None,
  use_comprehend_action: str = None,
  use_comprehend_medical_action: str = None,
  use_confluence_action: str = None,
  use_fact_set_action: str = None,
  use_generic_http_action: str = None,
  use_github_action: str = None,
  use_google_calendar_action: str = None,
  use_hubspot_action: str = None,
  use_hugging_face_action: str = None,
  use_intercom_action: str = None,
  use_jira_action: str = None,
  use_linear_action: str = None,
  use_mcp_action: str = None,
  use_monday_action: str = None,
  use_ms_exchange_action: str = None,
  use_ms_teams_action: str = None,
  use_new_relic_action: str = None,
  use_notion_action: str = None,
  use_one_drive_action: str = None,
  use_open_api_action: str = None,
  use_pager_duty_action: str = None,
  use_salesforce_action: str = None,
  use_sand_p_global_energy_action: str = None,
  use_sand_pgmi_action: str = None,
  use_sap_bill_of_material_action: str = None,
  use_sap_business_partner_action: str = None,
  use_sap_material_stock_action: str = None,
  use_sap_physical_inventory_action: str = None,
  use_sap_product_master_data_action: str = None,
  use_service_now_action: str = None,
  use_share_point_action: str = None,
  use_slack_action: str = None,
  use_smartsheet_action: str = None,
  use_textract_action: str = None,
  use_zendesk_action: str = None,
  view_account_spice_capacity: str = None,
  zendesk_action: str = None
) -> None
```

###### `access_apps_native_data_store`<sup>Optional</sup> <a name="access_apps_native_data_store" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.accessAppsNativeDataStore"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#access_apps_native_data_store QuicksightCustomPermissions#access_apps_native_data_store}.

---

###### `action`<sup>Optional</sup> <a name="action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.action"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#action QuicksightCustomPermissions#action}.

---

###### `add_or_run_anomaly_detection_for_analyses`<sup>Optional</sup> <a name="add_or_run_anomaly_detection_for_analyses" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.addOrRunAnomalyDetectionForAnalyses"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#add_or_run_anomaly_detection_for_analyses QuicksightCustomPermissions#add_or_run_anomaly_detection_for_analyses}.

---

###### `amazon_bedrock_ars_action`<sup>Optional</sup> <a name="amazon_bedrock_ars_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.amazonBedrockArsAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#amazon_bedrock_ars_action QuicksightCustomPermissions#amazon_bedrock_ars_action}.

---

###### `amazon_bedrock_fs_action`<sup>Optional</sup> <a name="amazon_bedrock_fs_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.amazonBedrockFsAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#amazon_bedrock_fs_action QuicksightCustomPermissions#amazon_bedrock_fs_action}.

---

###### `amazon_bedrock_krs_action`<sup>Optional</sup> <a name="amazon_bedrock_krs_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.amazonBedrockKrsAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#amazon_bedrock_krs_action QuicksightCustomPermissions#amazon_bedrock_krs_action}.

---

###### `amazon_s_three_action`<sup>Optional</sup> <a name="amazon_s_three_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.amazonSThreeAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#amazon_s_three_action QuicksightCustomPermissions#amazon_s_three_action}.

---

###### `analysis`<sup>Optional</sup> <a name="analysis" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.analysis"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#analysis QuicksightCustomPermissions#analysis}.

---

###### `approve_flow_share_requests`<sup>Optional</sup> <a name="approve_flow_share_requests" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.approveFlowShareRequests"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#approve_flow_share_requests QuicksightCustomPermissions#approve_flow_share_requests}.

---

###### `apps`<sup>Optional</sup> <a name="apps" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.apps"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#apps QuicksightCustomPermissions#apps}.

---

###### `asana_action`<sup>Optional</sup> <a name="asana_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.asanaAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#asana_action QuicksightCustomPermissions#asana_action}.

---

###### `automate`<sup>Optional</sup> <a name="automate" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.automate"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#automate QuicksightCustomPermissions#automate}.

---

###### `bamboo_hr_action`<sup>Optional</sup> <a name="bamboo_hr_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.bambooHrAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#bamboo_hr_action QuicksightCustomPermissions#bamboo_hr_action}.

---

###### `box_agent_action`<sup>Optional</sup> <a name="box_agent_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.boxAgentAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#box_agent_action QuicksightCustomPermissions#box_agent_action}.

---

###### `build_calculated_field_with_q`<sup>Optional</sup> <a name="build_calculated_field_with_q" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.buildCalculatedFieldWithQ"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#build_calculated_field_with_q QuicksightCustomPermissions#build_calculated_field_with_q}.

---

###### `canva_agent_action`<sup>Optional</sup> <a name="canva_agent_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.canvaAgentAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#canva_agent_action QuicksightCustomPermissions#canva_agent_action}.

---

###### `chat_agent`<sup>Optional</sup> <a name="chat_agent" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.chatAgent"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#chat_agent QuicksightCustomPermissions#chat_agent}.

---

###### `comprehend_action`<sup>Optional</sup> <a name="comprehend_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.comprehendAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#comprehend_action QuicksightCustomPermissions#comprehend_action}.

---

###### `comprehend_medical_action`<sup>Optional</sup> <a name="comprehend_medical_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.comprehendMedicalAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#comprehend_medical_action QuicksightCustomPermissions#comprehend_medical_action}.

---

###### `confluence_action`<sup>Optional</sup> <a name="confluence_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.confluenceAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#confluence_action QuicksightCustomPermissions#confluence_action}.

---

###### `create_and_update_amazon_bedrock_ars_action`<sup>Optional</sup> <a name="create_and_update_amazon_bedrock_ars_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.createAndUpdateAmazonBedrockArsAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#create_and_update_amazon_bedrock_ars_action QuicksightCustomPermissions#create_and_update_amazon_bedrock_ars_action}.

---

###### `create_and_update_amazon_bedrock_fs_action`<sup>Optional</sup> <a name="create_and_update_amazon_bedrock_fs_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.createAndUpdateAmazonBedrockFsAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#create_and_update_amazon_bedrock_fs_action QuicksightCustomPermissions#create_and_update_amazon_bedrock_fs_action}.

---

###### `create_and_update_amazon_bedrock_krs_action`<sup>Optional</sup> <a name="create_and_update_amazon_bedrock_krs_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.createAndUpdateAmazonBedrockKrsAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#create_and_update_amazon_bedrock_krs_action QuicksightCustomPermissions#create_and_update_amazon_bedrock_krs_action}.

---

###### `create_and_update_amazon_s_three_action`<sup>Optional</sup> <a name="create_and_update_amazon_s_three_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.createAndUpdateAmazonSThreeAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#create_and_update_amazon_s_three_action QuicksightCustomPermissions#create_and_update_amazon_s_three_action}.

---

###### `create_and_update_apps`<sup>Optional</sup> <a name="create_and_update_apps" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.createAndUpdateApps"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#create_and_update_apps QuicksightCustomPermissions#create_and_update_apps}.

---

###### `create_and_update_asana_action`<sup>Optional</sup> <a name="create_and_update_asana_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.createAndUpdateAsanaAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#create_and_update_asana_action QuicksightCustomPermissions#create_and_update_asana_action}.

---

###### `create_and_update_bamboo_hr_action`<sup>Optional</sup> <a name="create_and_update_bamboo_hr_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.createAndUpdateBambooHrAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#create_and_update_bamboo_hr_action QuicksightCustomPermissions#create_and_update_bamboo_hr_action}.

---

###### `create_and_update_box_agent_action`<sup>Optional</sup> <a name="create_and_update_box_agent_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.createAndUpdateBoxAgentAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#create_and_update_box_agent_action QuicksightCustomPermissions#create_and_update_box_agent_action}.

---

###### `create_and_update_canva_agent_action`<sup>Optional</sup> <a name="create_and_update_canva_agent_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.createAndUpdateCanvaAgentAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#create_and_update_canva_agent_action QuicksightCustomPermissions#create_and_update_canva_agent_action}.

---

###### `create_and_update_comprehend_action`<sup>Optional</sup> <a name="create_and_update_comprehend_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.createAndUpdateComprehendAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#create_and_update_comprehend_action QuicksightCustomPermissions#create_and_update_comprehend_action}.

---

###### `create_and_update_comprehend_medical_action`<sup>Optional</sup> <a name="create_and_update_comprehend_medical_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.createAndUpdateComprehendMedicalAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#create_and_update_comprehend_medical_action QuicksightCustomPermissions#create_and_update_comprehend_medical_action}.

---

###### `create_and_update_confluence_action`<sup>Optional</sup> <a name="create_and_update_confluence_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.createAndUpdateConfluenceAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#create_and_update_confluence_action QuicksightCustomPermissions#create_and_update_confluence_action}.

---

###### `create_and_update_dashboard_email_reports`<sup>Optional</sup> <a name="create_and_update_dashboard_email_reports" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.createAndUpdateDashboardEmailReports"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#create_and_update_dashboard_email_reports QuicksightCustomPermissions#create_and_update_dashboard_email_reports}.

---

###### `create_and_update_datasets`<sup>Optional</sup> <a name="create_and_update_datasets" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.createAndUpdateDatasets"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#create_and_update_datasets QuicksightCustomPermissions#create_and_update_datasets}.

---

###### `create_and_update_data_sources`<sup>Optional</sup> <a name="create_and_update_data_sources" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.createAndUpdateDataSources"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#create_and_update_data_sources QuicksightCustomPermissions#create_and_update_data_sources}.

---

###### `create_and_update_fact_set_action`<sup>Optional</sup> <a name="create_and_update_fact_set_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.createAndUpdateFactSetAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#create_and_update_fact_set_action QuicksightCustomPermissions#create_and_update_fact_set_action}.

---

###### `create_and_update_generic_http_action`<sup>Optional</sup> <a name="create_and_update_generic_http_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.createAndUpdateGenericHttpAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#create_and_update_generic_http_action QuicksightCustomPermissions#create_and_update_generic_http_action}.

---

###### `create_and_update_github_action`<sup>Optional</sup> <a name="create_and_update_github_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.createAndUpdateGithubAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#create_and_update_github_action QuicksightCustomPermissions#create_and_update_github_action}.

---

###### `create_and_update_google_calendar_action`<sup>Optional</sup> <a name="create_and_update_google_calendar_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.createAndUpdateGoogleCalendarAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#create_and_update_google_calendar_action QuicksightCustomPermissions#create_and_update_google_calendar_action}.

---

###### `create_and_update_hubspot_action`<sup>Optional</sup> <a name="create_and_update_hubspot_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.createAndUpdateHubspotAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#create_and_update_hubspot_action QuicksightCustomPermissions#create_and_update_hubspot_action}.

---

###### `create_and_update_hugging_face_action`<sup>Optional</sup> <a name="create_and_update_hugging_face_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.createAndUpdateHuggingFaceAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#create_and_update_hugging_face_action QuicksightCustomPermissions#create_and_update_hugging_face_action}.

---

###### `create_and_update_intercom_action`<sup>Optional</sup> <a name="create_and_update_intercom_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.createAndUpdateIntercomAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#create_and_update_intercom_action QuicksightCustomPermissions#create_and_update_intercom_action}.

---

###### `create_and_update_jira_action`<sup>Optional</sup> <a name="create_and_update_jira_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.createAndUpdateJiraAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#create_and_update_jira_action QuicksightCustomPermissions#create_and_update_jira_action}.

---

###### `create_and_update_knowledge_bases`<sup>Optional</sup> <a name="create_and_update_knowledge_bases" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.createAndUpdateKnowledgeBases"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#create_and_update_knowledge_bases QuicksightCustomPermissions#create_and_update_knowledge_bases}.

---

###### `create_and_update_linear_action`<sup>Optional</sup> <a name="create_and_update_linear_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.createAndUpdateLinearAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#create_and_update_linear_action QuicksightCustomPermissions#create_and_update_linear_action}.

---

###### `create_and_update_mcp_action`<sup>Optional</sup> <a name="create_and_update_mcp_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.createAndUpdateMcpAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#create_and_update_mcp_action QuicksightCustomPermissions#create_and_update_mcp_action}.

---

###### `create_and_update_monday_action`<sup>Optional</sup> <a name="create_and_update_monday_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.createAndUpdateMondayAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#create_and_update_monday_action QuicksightCustomPermissions#create_and_update_monday_action}.

---

###### `create_and_update_ms_exchange_action`<sup>Optional</sup> <a name="create_and_update_ms_exchange_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.createAndUpdateMsExchangeAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#create_and_update_ms_exchange_action QuicksightCustomPermissions#create_and_update_ms_exchange_action}.

---

###### `create_and_update_ms_teams_action`<sup>Optional</sup> <a name="create_and_update_ms_teams_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.createAndUpdateMsTeamsAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#create_and_update_ms_teams_action QuicksightCustomPermissions#create_and_update_ms_teams_action}.

---

###### `create_and_update_new_relic_action`<sup>Optional</sup> <a name="create_and_update_new_relic_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.createAndUpdateNewRelicAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#create_and_update_new_relic_action QuicksightCustomPermissions#create_and_update_new_relic_action}.

---

###### `create_and_update_notion_action`<sup>Optional</sup> <a name="create_and_update_notion_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.createAndUpdateNotionAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#create_and_update_notion_action QuicksightCustomPermissions#create_and_update_notion_action}.

---

###### `create_and_update_one_drive_action`<sup>Optional</sup> <a name="create_and_update_one_drive_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.createAndUpdateOneDriveAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#create_and_update_one_drive_action QuicksightCustomPermissions#create_and_update_one_drive_action}.

---

###### `create_and_update_open_api_action`<sup>Optional</sup> <a name="create_and_update_open_api_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.createAndUpdateOpenApiAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#create_and_update_open_api_action QuicksightCustomPermissions#create_and_update_open_api_action}.

---

###### `create_and_update_pager_duty_action`<sup>Optional</sup> <a name="create_and_update_pager_duty_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.createAndUpdatePagerDutyAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#create_and_update_pager_duty_action QuicksightCustomPermissions#create_and_update_pager_duty_action}.

---

###### `create_and_update_salesforce_action`<sup>Optional</sup> <a name="create_and_update_salesforce_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.createAndUpdateSalesforceAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#create_and_update_salesforce_action QuicksightCustomPermissions#create_and_update_salesforce_action}.

---

###### `create_and_update_sand_p_global_energy_action`<sup>Optional</sup> <a name="create_and_update_sand_p_global_energy_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.createAndUpdateSandPGlobalEnergyAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#create_and_update_sand_p_global_energy_action QuicksightCustomPermissions#create_and_update_sand_p_global_energy_action}.

---

###### `create_and_update_sand_pgmi_action`<sup>Optional</sup> <a name="create_and_update_sand_pgmi_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.createAndUpdateSandPgmiAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#create_and_update_sand_pgmi_action QuicksightCustomPermissions#create_and_update_sand_pgmi_action}.

---

###### `create_and_update_sap_bill_of_material_action`<sup>Optional</sup> <a name="create_and_update_sap_bill_of_material_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.createAndUpdateSapBillOfMaterialAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#create_and_update_sap_bill_of_material_action QuicksightCustomPermissions#create_and_update_sap_bill_of_material_action}.

---

###### `create_and_update_sap_business_partner_action`<sup>Optional</sup> <a name="create_and_update_sap_business_partner_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.createAndUpdateSapBusinessPartnerAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#create_and_update_sap_business_partner_action QuicksightCustomPermissions#create_and_update_sap_business_partner_action}.

---

###### `create_and_update_sap_material_stock_action`<sup>Optional</sup> <a name="create_and_update_sap_material_stock_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.createAndUpdateSapMaterialStockAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#create_and_update_sap_material_stock_action QuicksightCustomPermissions#create_and_update_sap_material_stock_action}.

---

###### `create_and_update_sap_physical_inventory_action`<sup>Optional</sup> <a name="create_and_update_sap_physical_inventory_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.createAndUpdateSapPhysicalInventoryAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#create_and_update_sap_physical_inventory_action QuicksightCustomPermissions#create_and_update_sap_physical_inventory_action}.

---

###### `create_and_update_sap_product_master_data_action`<sup>Optional</sup> <a name="create_and_update_sap_product_master_data_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.createAndUpdateSapProductMasterDataAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#create_and_update_sap_product_master_data_action QuicksightCustomPermissions#create_and_update_sap_product_master_data_action}.

---

###### `create_and_update_service_now_action`<sup>Optional</sup> <a name="create_and_update_service_now_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.createAndUpdateServiceNowAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#create_and_update_service_now_action QuicksightCustomPermissions#create_and_update_service_now_action}.

---

###### `create_and_update_share_point_action`<sup>Optional</sup> <a name="create_and_update_share_point_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.createAndUpdateSharePointAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#create_and_update_share_point_action QuicksightCustomPermissions#create_and_update_share_point_action}.

---

###### `create_and_update_slack_action`<sup>Optional</sup> <a name="create_and_update_slack_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.createAndUpdateSlackAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#create_and_update_slack_action QuicksightCustomPermissions#create_and_update_slack_action}.

---

###### `create_and_update_smartsheet_action`<sup>Optional</sup> <a name="create_and_update_smartsheet_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.createAndUpdateSmartsheetAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#create_and_update_smartsheet_action QuicksightCustomPermissions#create_and_update_smartsheet_action}.

---

###### `create_and_update_textract_action`<sup>Optional</sup> <a name="create_and_update_textract_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.createAndUpdateTextractAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#create_and_update_textract_action QuicksightCustomPermissions#create_and_update_textract_action}.

---

###### `create_and_update_themes`<sup>Optional</sup> <a name="create_and_update_themes" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.createAndUpdateThemes"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#create_and_update_themes QuicksightCustomPermissions#create_and_update_themes}.

---

###### `create_and_update_threshold_alerts`<sup>Optional</sup> <a name="create_and_update_threshold_alerts" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.createAndUpdateThresholdAlerts"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#create_and_update_threshold_alerts QuicksightCustomPermissions#create_and_update_threshold_alerts}.

---

###### `create_and_update_zendesk_action`<sup>Optional</sup> <a name="create_and_update_zendesk_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.createAndUpdateZendeskAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#create_and_update_zendesk_action QuicksightCustomPermissions#create_and_update_zendesk_action}.

---

###### `create_chat_agents`<sup>Optional</sup> <a name="create_chat_agents" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.createChatAgents"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#create_chat_agents QuicksightCustomPermissions#create_chat_agents}.

---

###### `create_dashboard_executive_summary_with_q`<sup>Optional</sup> <a name="create_dashboard_executive_summary_with_q" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.createDashboardExecutiveSummaryWithQ"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#create_dashboard_executive_summary_with_q QuicksightCustomPermissions#create_dashboard_executive_summary_with_q}.

---

###### `create_shared_folders`<sup>Optional</sup> <a name="create_shared_folders" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.createSharedFolders"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#create_shared_folders QuicksightCustomPermissions#create_shared_folders}.

---

###### `create_spaces`<sup>Optional</sup> <a name="create_spaces" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.createSpaces"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#create_spaces QuicksightCustomPermissions#create_spaces}.

---

###### `create_spice_dataset`<sup>Optional</sup> <a name="create_spice_dataset" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.createSpiceDataset"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#create_spice_dataset QuicksightCustomPermissions#create_spice_dataset}.

---

###### `dashboard`<sup>Optional</sup> <a name="dashboard" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.dashboard"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#dashboard QuicksightCustomPermissions#dashboard}.

---

###### `edit_visual_with_q`<sup>Optional</sup> <a name="edit_visual_with_q" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.editVisualWithQ"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#edit_visual_with_q QuicksightCustomPermissions#edit_visual_with_q}.

---

###### `export_to_csv`<sup>Optional</sup> <a name="export_to_csv" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.exportToCsv"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#export_to_csv QuicksightCustomPermissions#export_to_csv}.

---

###### `export_to_csv_in_scheduled_reports`<sup>Optional</sup> <a name="export_to_csv_in_scheduled_reports" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.exportToCsvInScheduledReports"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#export_to_csv_in_scheduled_reports QuicksightCustomPermissions#export_to_csv_in_scheduled_reports}.

---

###### `export_to_excel`<sup>Optional</sup> <a name="export_to_excel" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.exportToExcel"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#export_to_excel QuicksightCustomPermissions#export_to_excel}.

---

###### `export_to_excel_in_scheduled_reports`<sup>Optional</sup> <a name="export_to_excel_in_scheduled_reports" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.exportToExcelInScheduledReports"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#export_to_excel_in_scheduled_reports QuicksightCustomPermissions#export_to_excel_in_scheduled_reports}.

---

###### `export_to_pdf`<sup>Optional</sup> <a name="export_to_pdf" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.exportToPdf"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#export_to_pdf QuicksightCustomPermissions#export_to_pdf}.

---

###### `export_to_pdf_in_scheduled_reports`<sup>Optional</sup> <a name="export_to_pdf_in_scheduled_reports" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.exportToPdfInScheduledReports"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#export_to_pdf_in_scheduled_reports QuicksightCustomPermissions#export_to_pdf_in_scheduled_reports}.

---

###### `extension`<sup>Optional</sup> <a name="extension" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.extension"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#extension QuicksightCustomPermissions#extension}.

---

###### `fact_set_action`<sup>Optional</sup> <a name="fact_set_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.factSetAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#fact_set_action QuicksightCustomPermissions#fact_set_action}.

---

###### `flow`<sup>Optional</sup> <a name="flow" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.flow"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#flow QuicksightCustomPermissions#flow}.

---

###### `generic_http_action`<sup>Optional</sup> <a name="generic_http_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.genericHttpAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#generic_http_action QuicksightCustomPermissions#generic_http_action}.

---

###### `github_action`<sup>Optional</sup> <a name="github_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.githubAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#github_action QuicksightCustomPermissions#github_action}.

---

###### `google_calendar_action`<sup>Optional</sup> <a name="google_calendar_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.googleCalendarAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#google_calendar_action QuicksightCustomPermissions#google_calendar_action}.

---

###### `hubspot_action`<sup>Optional</sup> <a name="hubspot_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.hubspotAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#hubspot_action QuicksightCustomPermissions#hubspot_action}.

---

###### `hugging_face_action`<sup>Optional</sup> <a name="hugging_face_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.huggingFaceAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#hugging_face_action QuicksightCustomPermissions#hugging_face_action}.

---

###### `include_content_in_scheduled_reports_email`<sup>Optional</sup> <a name="include_content_in_scheduled_reports_email" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.includeContentInScheduledReportsEmail"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#include_content_in_scheduled_reports_email QuicksightCustomPermissions#include_content_in_scheduled_reports_email}.

---

###### `intercom_action`<sup>Optional</sup> <a name="intercom_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.intercomAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#intercom_action QuicksightCustomPermissions#intercom_action}.

---

###### `invoke_apps_ai_inference`<sup>Optional</sup> <a name="invoke_apps_ai_inference" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.invokeAppsAiInference"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#invoke_apps_ai_inference QuicksightCustomPermissions#invoke_apps_ai_inference}.

---

###### `jira_action`<sup>Optional</sup> <a name="jira_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.jiraAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#jira_action QuicksightCustomPermissions#jira_action}.

---

###### `knowledge_base`<sup>Optional</sup> <a name="knowledge_base" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.knowledgeBase"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#knowledge_base QuicksightCustomPermissions#knowledge_base}.

---

###### `linear_action`<sup>Optional</sup> <a name="linear_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.linearAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#linear_action QuicksightCustomPermissions#linear_action}.

---

###### `manage_shared_folders`<sup>Optional</sup> <a name="manage_shared_folders" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.manageSharedFolders"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#manage_shared_folders QuicksightCustomPermissions#manage_shared_folders}.

---

###### `mcp_action`<sup>Optional</sup> <a name="mcp_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.mcpAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#mcp_action QuicksightCustomPermissions#mcp_action}.

---

###### `monday_action`<sup>Optional</sup> <a name="monday_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.mondayAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#monday_action QuicksightCustomPermissions#monday_action}.

---

###### `ms_exchange_action`<sup>Optional</sup> <a name="ms_exchange_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.msExchangeAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#ms_exchange_action QuicksightCustomPermissions#ms_exchange_action}.

---

###### `ms_teams_action`<sup>Optional</sup> <a name="ms_teams_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.msTeamsAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#ms_teams_action QuicksightCustomPermissions#ms_teams_action}.

---

###### `new_relic_action`<sup>Optional</sup> <a name="new_relic_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.newRelicAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#new_relic_action QuicksightCustomPermissions#new_relic_action}.

---

###### `notion_action`<sup>Optional</sup> <a name="notion_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.notionAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#notion_action QuicksightCustomPermissions#notion_action}.

---

###### `one_drive_action`<sup>Optional</sup> <a name="one_drive_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.oneDriveAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#one_drive_action QuicksightCustomPermissions#one_drive_action}.

---

###### `open_api_action`<sup>Optional</sup> <a name="open_api_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.openApiAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#open_api_action QuicksightCustomPermissions#open_api_action}.

---

###### `pager_duty_action`<sup>Optional</sup> <a name="pager_duty_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.pagerDutyAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#pager_duty_action QuicksightCustomPermissions#pager_duty_action}.

---

###### `perform_flow_ui_task`<sup>Optional</sup> <a name="perform_flow_ui_task" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.performFlowUiTask"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#perform_flow_ui_task QuicksightCustomPermissions#perform_flow_ui_task}.

---

###### `print_reports`<sup>Optional</sup> <a name="print_reports" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.printReports"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#print_reports QuicksightCustomPermissions#print_reports}.

---

###### `publish_without_approval`<sup>Optional</sup> <a name="publish_without_approval" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.publishWithoutApproval"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#publish_without_approval QuicksightCustomPermissions#publish_without_approval}.

---

###### `rename_shared_folders`<sup>Optional</sup> <a name="rename_shared_folders" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.renameSharedFolders"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#rename_shared_folders QuicksightCustomPermissions#rename_shared_folders}.

---

###### `research`<sup>Optional</sup> <a name="research" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.research"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#research QuicksightCustomPermissions#research}.

---

###### `salesforce_action`<sup>Optional</sup> <a name="salesforce_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.salesforceAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#salesforce_action QuicksightCustomPermissions#salesforce_action}.

---

###### `sand_p_global_energy_action`<sup>Optional</sup> <a name="sand_p_global_energy_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.sandPGlobalEnergyAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#sand_p_global_energy_action QuicksightCustomPermissions#sand_p_global_energy_action}.

---

###### `sand_pgmi_action`<sup>Optional</sup> <a name="sand_pgmi_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.sandPgmiAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#sand_pgmi_action QuicksightCustomPermissions#sand_pgmi_action}.

---

###### `sap_bill_of_material_action`<sup>Optional</sup> <a name="sap_bill_of_material_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.sapBillOfMaterialAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#sap_bill_of_material_action QuicksightCustomPermissions#sap_bill_of_material_action}.

---

###### `sap_business_partner_action`<sup>Optional</sup> <a name="sap_business_partner_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.sapBusinessPartnerAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#sap_business_partner_action QuicksightCustomPermissions#sap_business_partner_action}.

---

###### `sap_material_stock_action`<sup>Optional</sup> <a name="sap_material_stock_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.sapMaterialStockAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#sap_material_stock_action QuicksightCustomPermissions#sap_material_stock_action}.

---

###### `sap_physical_inventory_action`<sup>Optional</sup> <a name="sap_physical_inventory_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.sapPhysicalInventoryAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#sap_physical_inventory_action QuicksightCustomPermissions#sap_physical_inventory_action}.

---

###### `sap_product_master_data_action`<sup>Optional</sup> <a name="sap_product_master_data_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.sapProductMasterDataAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#sap_product_master_data_action QuicksightCustomPermissions#sap_product_master_data_action}.

---

###### `service_now_action`<sup>Optional</sup> <a name="service_now_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.serviceNowAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#service_now_action QuicksightCustomPermissions#service_now_action}.

---

###### `share_amazon_bedrock_ars_action`<sup>Optional</sup> <a name="share_amazon_bedrock_ars_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.shareAmazonBedrockArsAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#share_amazon_bedrock_ars_action QuicksightCustomPermissions#share_amazon_bedrock_ars_action}.

---

###### `share_amazon_bedrock_fs_action`<sup>Optional</sup> <a name="share_amazon_bedrock_fs_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.shareAmazonBedrockFsAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#share_amazon_bedrock_fs_action QuicksightCustomPermissions#share_amazon_bedrock_fs_action}.

---

###### `share_amazon_bedrock_krs_action`<sup>Optional</sup> <a name="share_amazon_bedrock_krs_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.shareAmazonBedrockKrsAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#share_amazon_bedrock_krs_action QuicksightCustomPermissions#share_amazon_bedrock_krs_action}.

---

###### `share_amazon_s_three_action`<sup>Optional</sup> <a name="share_amazon_s_three_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.shareAmazonSThreeAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#share_amazon_s_three_action QuicksightCustomPermissions#share_amazon_s_three_action}.

---

###### `share_analyses`<sup>Optional</sup> <a name="share_analyses" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.shareAnalyses"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#share_analyses QuicksightCustomPermissions#share_analyses}.

---

###### `share_apps`<sup>Optional</sup> <a name="share_apps" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.shareApps"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#share_apps QuicksightCustomPermissions#share_apps}.

---

###### `share_asana_action`<sup>Optional</sup> <a name="share_asana_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.shareAsanaAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#share_asana_action QuicksightCustomPermissions#share_asana_action}.

---

###### `share_bamboo_hr_action`<sup>Optional</sup> <a name="share_bamboo_hr_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.shareBambooHrAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#share_bamboo_hr_action QuicksightCustomPermissions#share_bamboo_hr_action}.

---

###### `share_box_agent_action`<sup>Optional</sup> <a name="share_box_agent_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.shareBoxAgentAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#share_box_agent_action QuicksightCustomPermissions#share_box_agent_action}.

---

###### `share_canva_agent_action`<sup>Optional</sup> <a name="share_canva_agent_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.shareCanvaAgentAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#share_canva_agent_action QuicksightCustomPermissions#share_canva_agent_action}.

---

###### `share_chat_agents`<sup>Optional</sup> <a name="share_chat_agents" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.shareChatAgents"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#share_chat_agents QuicksightCustomPermissions#share_chat_agents}.

---

###### `share_comprehend_action`<sup>Optional</sup> <a name="share_comprehend_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.shareComprehendAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#share_comprehend_action QuicksightCustomPermissions#share_comprehend_action}.

---

###### `share_comprehend_medical_action`<sup>Optional</sup> <a name="share_comprehend_medical_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.shareComprehendMedicalAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#share_comprehend_medical_action QuicksightCustomPermissions#share_comprehend_medical_action}.

---

###### `share_confluence_action`<sup>Optional</sup> <a name="share_confluence_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.shareConfluenceAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#share_confluence_action QuicksightCustomPermissions#share_confluence_action}.

---

###### `share_dashboards`<sup>Optional</sup> <a name="share_dashboards" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.shareDashboards"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#share_dashboards QuicksightCustomPermissions#share_dashboards}.

---

###### `share_datasets`<sup>Optional</sup> <a name="share_datasets" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.shareDatasets"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#share_datasets QuicksightCustomPermissions#share_datasets}.

---

###### `share_data_sources`<sup>Optional</sup> <a name="share_data_sources" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.shareDataSources"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#share_data_sources QuicksightCustomPermissions#share_data_sources}.

---

###### `share_fact_set_action`<sup>Optional</sup> <a name="share_fact_set_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.shareFactSetAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#share_fact_set_action QuicksightCustomPermissions#share_fact_set_action}.

---

###### `share_generic_http_action`<sup>Optional</sup> <a name="share_generic_http_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.shareGenericHttpAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#share_generic_http_action QuicksightCustomPermissions#share_generic_http_action}.

---

###### `share_github_action`<sup>Optional</sup> <a name="share_github_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.shareGithubAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#share_github_action QuicksightCustomPermissions#share_github_action}.

---

###### `share_google_calendar_action`<sup>Optional</sup> <a name="share_google_calendar_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.shareGoogleCalendarAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#share_google_calendar_action QuicksightCustomPermissions#share_google_calendar_action}.

---

###### `share_hubspot_action`<sup>Optional</sup> <a name="share_hubspot_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.shareHubspotAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#share_hubspot_action QuicksightCustomPermissions#share_hubspot_action}.

---

###### `share_hugging_face_action`<sup>Optional</sup> <a name="share_hugging_face_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.shareHuggingFaceAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#share_hugging_face_action QuicksightCustomPermissions#share_hugging_face_action}.

---

###### `share_intercom_action`<sup>Optional</sup> <a name="share_intercom_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.shareIntercomAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#share_intercom_action QuicksightCustomPermissions#share_intercom_action}.

---

###### `share_jira_action`<sup>Optional</sup> <a name="share_jira_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.shareJiraAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#share_jira_action QuicksightCustomPermissions#share_jira_action}.

---

###### `share_knowledge_bases`<sup>Optional</sup> <a name="share_knowledge_bases" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.shareKnowledgeBases"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#share_knowledge_bases QuicksightCustomPermissions#share_knowledge_bases}.

---

###### `share_linear_action`<sup>Optional</sup> <a name="share_linear_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.shareLinearAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#share_linear_action QuicksightCustomPermissions#share_linear_action}.

---

###### `share_mcp_action`<sup>Optional</sup> <a name="share_mcp_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.shareMcpAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#share_mcp_action QuicksightCustomPermissions#share_mcp_action}.

---

###### `share_monday_action`<sup>Optional</sup> <a name="share_monday_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.shareMondayAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#share_monday_action QuicksightCustomPermissions#share_monday_action}.

---

###### `share_ms_exchange_action`<sup>Optional</sup> <a name="share_ms_exchange_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.shareMsExchangeAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#share_ms_exchange_action QuicksightCustomPermissions#share_ms_exchange_action}.

---

###### `share_ms_teams_action`<sup>Optional</sup> <a name="share_ms_teams_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.shareMsTeamsAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#share_ms_teams_action QuicksightCustomPermissions#share_ms_teams_action}.

---

###### `share_new_relic_action`<sup>Optional</sup> <a name="share_new_relic_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.shareNewRelicAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#share_new_relic_action QuicksightCustomPermissions#share_new_relic_action}.

---

###### `share_notion_action`<sup>Optional</sup> <a name="share_notion_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.shareNotionAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#share_notion_action QuicksightCustomPermissions#share_notion_action}.

---

###### `share_one_drive_action`<sup>Optional</sup> <a name="share_one_drive_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.shareOneDriveAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#share_one_drive_action QuicksightCustomPermissions#share_one_drive_action}.

---

###### `share_open_api_action`<sup>Optional</sup> <a name="share_open_api_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.shareOpenApiAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#share_open_api_action QuicksightCustomPermissions#share_open_api_action}.

---

###### `share_pager_duty_action`<sup>Optional</sup> <a name="share_pager_duty_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.sharePagerDutyAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#share_pager_duty_action QuicksightCustomPermissions#share_pager_duty_action}.

---

###### `share_point_action`<sup>Optional</sup> <a name="share_point_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.sharePointAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#share_point_action QuicksightCustomPermissions#share_point_action}.

---

###### `share_salesforce_action`<sup>Optional</sup> <a name="share_salesforce_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.shareSalesforceAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#share_salesforce_action QuicksightCustomPermissions#share_salesforce_action}.

---

###### `share_sand_p_global_energy_action`<sup>Optional</sup> <a name="share_sand_p_global_energy_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.shareSandPGlobalEnergyAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#share_sand_p_global_energy_action QuicksightCustomPermissions#share_sand_p_global_energy_action}.

---

###### `share_sand_pgmi_action`<sup>Optional</sup> <a name="share_sand_pgmi_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.shareSandPgmiAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#share_sand_pgmi_action QuicksightCustomPermissions#share_sand_pgmi_action}.

---

###### `share_sap_bill_of_material_action`<sup>Optional</sup> <a name="share_sap_bill_of_material_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.shareSapBillOfMaterialAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#share_sap_bill_of_material_action QuicksightCustomPermissions#share_sap_bill_of_material_action}.

---

###### `share_sap_business_partner_action`<sup>Optional</sup> <a name="share_sap_business_partner_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.shareSapBusinessPartnerAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#share_sap_business_partner_action QuicksightCustomPermissions#share_sap_business_partner_action}.

---

###### `share_sap_material_stock_action`<sup>Optional</sup> <a name="share_sap_material_stock_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.shareSapMaterialStockAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#share_sap_material_stock_action QuicksightCustomPermissions#share_sap_material_stock_action}.

---

###### `share_sap_physical_inventory_action`<sup>Optional</sup> <a name="share_sap_physical_inventory_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.shareSapPhysicalInventoryAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#share_sap_physical_inventory_action QuicksightCustomPermissions#share_sap_physical_inventory_action}.

---

###### `share_sap_product_master_data_action`<sup>Optional</sup> <a name="share_sap_product_master_data_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.shareSapProductMasterDataAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#share_sap_product_master_data_action QuicksightCustomPermissions#share_sap_product_master_data_action}.

---

###### `share_service_now_action`<sup>Optional</sup> <a name="share_service_now_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.shareServiceNowAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#share_service_now_action QuicksightCustomPermissions#share_service_now_action}.

---

###### `share_share_point_action`<sup>Optional</sup> <a name="share_share_point_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.shareSharePointAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#share_share_point_action QuicksightCustomPermissions#share_share_point_action}.

---

###### `share_slack_action`<sup>Optional</sup> <a name="share_slack_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.shareSlackAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#share_slack_action QuicksightCustomPermissions#share_slack_action}.

---

###### `share_smartsheet_action`<sup>Optional</sup> <a name="share_smartsheet_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.shareSmartsheetAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#share_smartsheet_action QuicksightCustomPermissions#share_smartsheet_action}.

---

###### `share_spaces`<sup>Optional</sup> <a name="share_spaces" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.shareSpaces"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#share_spaces QuicksightCustomPermissions#share_spaces}.

---

###### `share_textract_action`<sup>Optional</sup> <a name="share_textract_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.shareTextractAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#share_textract_action QuicksightCustomPermissions#share_textract_action}.

---

###### `share_zendesk_action`<sup>Optional</sup> <a name="share_zendesk_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.shareZendeskAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#share_zendesk_action QuicksightCustomPermissions#share_zendesk_action}.

---

###### `slack_action`<sup>Optional</sup> <a name="slack_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.slackAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#slack_action QuicksightCustomPermissions#slack_action}.

---

###### `smartsheet_action`<sup>Optional</sup> <a name="smartsheet_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.smartsheetAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#smartsheet_action QuicksightCustomPermissions#smartsheet_action}.

---

###### `space`<sup>Optional</sup> <a name="space" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.space"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#space QuicksightCustomPermissions#space}.

---

###### `subscribe_dashboard_email_reports`<sup>Optional</sup> <a name="subscribe_dashboard_email_reports" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.subscribeDashboardEmailReports"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#subscribe_dashboard_email_reports QuicksightCustomPermissions#subscribe_dashboard_email_reports}.

---

###### `textract_action`<sup>Optional</sup> <a name="textract_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.textractAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#textract_action QuicksightCustomPermissions#textract_action}.

---

###### `topic`<sup>Optional</sup> <a name="topic" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.topic"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#topic QuicksightCustomPermissions#topic}.

---

###### `use_agent_web_search`<sup>Optional</sup> <a name="use_agent_web_search" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.useAgentWebSearch"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#use_agent_web_search QuicksightCustomPermissions#use_agent_web_search}.

---

###### `use_amazon_bedrock_ars_action`<sup>Optional</sup> <a name="use_amazon_bedrock_ars_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.useAmazonBedrockArsAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#use_amazon_bedrock_ars_action QuicksightCustomPermissions#use_amazon_bedrock_ars_action}.

---

###### `use_amazon_bedrock_fs_action`<sup>Optional</sup> <a name="use_amazon_bedrock_fs_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.useAmazonBedrockFsAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#use_amazon_bedrock_fs_action QuicksightCustomPermissions#use_amazon_bedrock_fs_action}.

---

###### `use_amazon_bedrock_krs_action`<sup>Optional</sup> <a name="use_amazon_bedrock_krs_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.useAmazonBedrockKrsAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#use_amazon_bedrock_krs_action QuicksightCustomPermissions#use_amazon_bedrock_krs_action}.

---

###### `use_amazon_s_three_action`<sup>Optional</sup> <a name="use_amazon_s_three_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.useAmazonSThreeAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#use_amazon_s_three_action QuicksightCustomPermissions#use_amazon_s_three_action}.

---

###### `use_asana_action`<sup>Optional</sup> <a name="use_asana_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.useAsanaAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#use_asana_action QuicksightCustomPermissions#use_asana_action}.

---

###### `use_bamboo_hr_action`<sup>Optional</sup> <a name="use_bamboo_hr_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.useBambooHrAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#use_bamboo_hr_action QuicksightCustomPermissions#use_bamboo_hr_action}.

---

###### `use_bedrock_models`<sup>Optional</sup> <a name="use_bedrock_models" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.useBedrockModels"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#use_bedrock_models QuicksightCustomPermissions#use_bedrock_models}.

---

###### `use_box_agent_action`<sup>Optional</sup> <a name="use_box_agent_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.useBoxAgentAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#use_box_agent_action QuicksightCustomPermissions#use_box_agent_action}.

---

###### `use_canva_agent_action`<sup>Optional</sup> <a name="use_canva_agent_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.useCanvaAgentAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#use_canva_agent_action QuicksightCustomPermissions#use_canva_agent_action}.

---

###### `use_comprehend_action`<sup>Optional</sup> <a name="use_comprehend_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.useComprehendAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#use_comprehend_action QuicksightCustomPermissions#use_comprehend_action}.

---

###### `use_comprehend_medical_action`<sup>Optional</sup> <a name="use_comprehend_medical_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.useComprehendMedicalAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#use_comprehend_medical_action QuicksightCustomPermissions#use_comprehend_medical_action}.

---

###### `use_confluence_action`<sup>Optional</sup> <a name="use_confluence_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.useConfluenceAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#use_confluence_action QuicksightCustomPermissions#use_confluence_action}.

---

###### `use_fact_set_action`<sup>Optional</sup> <a name="use_fact_set_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.useFactSetAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#use_fact_set_action QuicksightCustomPermissions#use_fact_set_action}.

---

###### `use_generic_http_action`<sup>Optional</sup> <a name="use_generic_http_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.useGenericHttpAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#use_generic_http_action QuicksightCustomPermissions#use_generic_http_action}.

---

###### `use_github_action`<sup>Optional</sup> <a name="use_github_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.useGithubAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#use_github_action QuicksightCustomPermissions#use_github_action}.

---

###### `use_google_calendar_action`<sup>Optional</sup> <a name="use_google_calendar_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.useGoogleCalendarAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#use_google_calendar_action QuicksightCustomPermissions#use_google_calendar_action}.

---

###### `use_hubspot_action`<sup>Optional</sup> <a name="use_hubspot_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.useHubspotAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#use_hubspot_action QuicksightCustomPermissions#use_hubspot_action}.

---

###### `use_hugging_face_action`<sup>Optional</sup> <a name="use_hugging_face_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.useHuggingFaceAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#use_hugging_face_action QuicksightCustomPermissions#use_hugging_face_action}.

---

###### `use_intercom_action`<sup>Optional</sup> <a name="use_intercom_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.useIntercomAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#use_intercom_action QuicksightCustomPermissions#use_intercom_action}.

---

###### `use_jira_action`<sup>Optional</sup> <a name="use_jira_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.useJiraAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#use_jira_action QuicksightCustomPermissions#use_jira_action}.

---

###### `use_linear_action`<sup>Optional</sup> <a name="use_linear_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.useLinearAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#use_linear_action QuicksightCustomPermissions#use_linear_action}.

---

###### `use_mcp_action`<sup>Optional</sup> <a name="use_mcp_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.useMcpAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#use_mcp_action QuicksightCustomPermissions#use_mcp_action}.

---

###### `use_monday_action`<sup>Optional</sup> <a name="use_monday_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.useMondayAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#use_monday_action QuicksightCustomPermissions#use_monday_action}.

---

###### `use_ms_exchange_action`<sup>Optional</sup> <a name="use_ms_exchange_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.useMsExchangeAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#use_ms_exchange_action QuicksightCustomPermissions#use_ms_exchange_action}.

---

###### `use_ms_teams_action`<sup>Optional</sup> <a name="use_ms_teams_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.useMsTeamsAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#use_ms_teams_action QuicksightCustomPermissions#use_ms_teams_action}.

---

###### `use_new_relic_action`<sup>Optional</sup> <a name="use_new_relic_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.useNewRelicAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#use_new_relic_action QuicksightCustomPermissions#use_new_relic_action}.

---

###### `use_notion_action`<sup>Optional</sup> <a name="use_notion_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.useNotionAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#use_notion_action QuicksightCustomPermissions#use_notion_action}.

---

###### `use_one_drive_action`<sup>Optional</sup> <a name="use_one_drive_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.useOneDriveAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#use_one_drive_action QuicksightCustomPermissions#use_one_drive_action}.

---

###### `use_open_api_action`<sup>Optional</sup> <a name="use_open_api_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.useOpenApiAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#use_open_api_action QuicksightCustomPermissions#use_open_api_action}.

---

###### `use_pager_duty_action`<sup>Optional</sup> <a name="use_pager_duty_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.usePagerDutyAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#use_pager_duty_action QuicksightCustomPermissions#use_pager_duty_action}.

---

###### `use_salesforce_action`<sup>Optional</sup> <a name="use_salesforce_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.useSalesforceAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#use_salesforce_action QuicksightCustomPermissions#use_salesforce_action}.

---

###### `use_sand_p_global_energy_action`<sup>Optional</sup> <a name="use_sand_p_global_energy_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.useSandPGlobalEnergyAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#use_sand_p_global_energy_action QuicksightCustomPermissions#use_sand_p_global_energy_action}.

---

###### `use_sand_pgmi_action`<sup>Optional</sup> <a name="use_sand_pgmi_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.useSandPgmiAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#use_sand_pgmi_action QuicksightCustomPermissions#use_sand_pgmi_action}.

---

###### `use_sap_bill_of_material_action`<sup>Optional</sup> <a name="use_sap_bill_of_material_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.useSapBillOfMaterialAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#use_sap_bill_of_material_action QuicksightCustomPermissions#use_sap_bill_of_material_action}.

---

###### `use_sap_business_partner_action`<sup>Optional</sup> <a name="use_sap_business_partner_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.useSapBusinessPartnerAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#use_sap_business_partner_action QuicksightCustomPermissions#use_sap_business_partner_action}.

---

###### `use_sap_material_stock_action`<sup>Optional</sup> <a name="use_sap_material_stock_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.useSapMaterialStockAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#use_sap_material_stock_action QuicksightCustomPermissions#use_sap_material_stock_action}.

---

###### `use_sap_physical_inventory_action`<sup>Optional</sup> <a name="use_sap_physical_inventory_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.useSapPhysicalInventoryAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#use_sap_physical_inventory_action QuicksightCustomPermissions#use_sap_physical_inventory_action}.

---

###### `use_sap_product_master_data_action`<sup>Optional</sup> <a name="use_sap_product_master_data_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.useSapProductMasterDataAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#use_sap_product_master_data_action QuicksightCustomPermissions#use_sap_product_master_data_action}.

---

###### `use_service_now_action`<sup>Optional</sup> <a name="use_service_now_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.useServiceNowAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#use_service_now_action QuicksightCustomPermissions#use_service_now_action}.

---

###### `use_share_point_action`<sup>Optional</sup> <a name="use_share_point_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.useSharePointAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#use_share_point_action QuicksightCustomPermissions#use_share_point_action}.

---

###### `use_slack_action`<sup>Optional</sup> <a name="use_slack_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.useSlackAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#use_slack_action QuicksightCustomPermissions#use_slack_action}.

---

###### `use_smartsheet_action`<sup>Optional</sup> <a name="use_smartsheet_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.useSmartsheetAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#use_smartsheet_action QuicksightCustomPermissions#use_smartsheet_action}.

---

###### `use_textract_action`<sup>Optional</sup> <a name="use_textract_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.useTextractAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#use_textract_action QuicksightCustomPermissions#use_textract_action}.

---

###### `use_zendesk_action`<sup>Optional</sup> <a name="use_zendesk_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.useZendeskAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#use_zendesk_action QuicksightCustomPermissions#use_zendesk_action}.

---

###### `view_account_spice_capacity`<sup>Optional</sup> <a name="view_account_spice_capacity" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.viewAccountSpiceCapacity"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#view_account_spice_capacity QuicksightCustomPermissions#view_account_spice_capacity}.

---

###### `zendesk_action`<sup>Optional</sup> <a name="zendesk_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putCapabilities.parameter.zendeskAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#zendesk_action QuicksightCustomPermissions#zendesk_action}.

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[QuicksightCustomPermissionsTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTags">QuicksightCustomPermissionsTags</a>]

---

##### `reset_capabilities` <a name="reset_capabilities" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.resetCapabilities"></a>

```python
def reset_capabilities() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a QuicksightCustomPermissions resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.isConstruct"></a>

```python
from cdktn_provider_awscc import quicksight_custom_permissions

quicksightCustomPermissions.QuicksightCustomPermissions.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.isTerraformElement"></a>

```python
from cdktn_provider_awscc import quicksight_custom_permissions

quicksightCustomPermissions.QuicksightCustomPermissions.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.isTerraformResource"></a>

```python
from cdktn_provider_awscc import quicksight_custom_permissions

quicksightCustomPermissions.QuicksightCustomPermissions.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import quicksight_custom_permissions

quicksightCustomPermissions.QuicksightCustomPermissions.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a QuicksightCustomPermissions resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the QuicksightCustomPermissions to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing QuicksightCustomPermissions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the QuicksightCustomPermissions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.capabilities">capabilities</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference">QuicksightCustomPermissionsCapabilitiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsList">QuicksightCustomPermissionsTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.awsAccountIdInput">aws_account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.capabilitiesInput">capabilities_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities">QuicksightCustomPermissionsCapabilities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.customPermissionsNameInput">custom_permissions_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTags">QuicksightCustomPermissionsTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.awsAccountId">aws_account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.customPermissionsName">custom_permissions_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `capabilities`<sup>Required</sup> <a name="capabilities" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.capabilities"></a>

```python
capabilities: QuicksightCustomPermissionsCapabilitiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference">QuicksightCustomPermissionsCapabilitiesOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.tags"></a>

```python
tags: QuicksightCustomPermissionsTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsList">QuicksightCustomPermissionsTagsList</a>

---

##### `aws_account_id_input`<sup>Optional</sup> <a name="aws_account_id_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.awsAccountIdInput"></a>

```python
aws_account_id_input: str
```

- *Type:* str

---

##### `capabilities_input`<sup>Optional</sup> <a name="capabilities_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.capabilitiesInput"></a>

```python
capabilities_input: IResolvable | QuicksightCustomPermissionsCapabilities
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities">QuicksightCustomPermissionsCapabilities</a>

---

##### `custom_permissions_name_input`<sup>Optional</sup> <a name="custom_permissions_name_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.customPermissionsNameInput"></a>

```python
custom_permissions_name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[QuicksightCustomPermissionsTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTags">QuicksightCustomPermissionsTags</a>]

---

##### `aws_account_id`<sup>Required</sup> <a name="aws_account_id" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.awsAccountId"></a>

```python
aws_account_id: str
```

- *Type:* str

---

##### `custom_permissions_name`<sup>Required</sup> <a name="custom_permissions_name" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.customPermissionsName"></a>

```python
custom_permissions_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissions.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### QuicksightCustomPermissionsCapabilities <a name="QuicksightCustomPermissionsCapabilities" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_custom_permissions

quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities(
  access_apps_native_data_store: str = None,
  action: str = None,
  add_or_run_anomaly_detection_for_analyses: str = None,
  amazon_bedrock_ars_action: str = None,
  amazon_bedrock_fs_action: str = None,
  amazon_bedrock_krs_action: str = None,
  amazon_s_three_action: str = None,
  analysis: str = None,
  approve_flow_share_requests: str = None,
  apps: str = None,
  asana_action: str = None,
  automate: str = None,
  bamboo_hr_action: str = None,
  box_agent_action: str = None,
  build_calculated_field_with_q: str = None,
  canva_agent_action: str = None,
  chat_agent: str = None,
  comprehend_action: str = None,
  comprehend_medical_action: str = None,
  confluence_action: str = None,
  create_and_update_amazon_bedrock_ars_action: str = None,
  create_and_update_amazon_bedrock_fs_action: str = None,
  create_and_update_amazon_bedrock_krs_action: str = None,
  create_and_update_amazon_s_three_action: str = None,
  create_and_update_apps: str = None,
  create_and_update_asana_action: str = None,
  create_and_update_bamboo_hr_action: str = None,
  create_and_update_box_agent_action: str = None,
  create_and_update_canva_agent_action: str = None,
  create_and_update_comprehend_action: str = None,
  create_and_update_comprehend_medical_action: str = None,
  create_and_update_confluence_action: str = None,
  create_and_update_dashboard_email_reports: str = None,
  create_and_update_datasets: str = None,
  create_and_update_data_sources: str = None,
  create_and_update_fact_set_action: str = None,
  create_and_update_generic_http_action: str = None,
  create_and_update_github_action: str = None,
  create_and_update_google_calendar_action: str = None,
  create_and_update_hubspot_action: str = None,
  create_and_update_hugging_face_action: str = None,
  create_and_update_intercom_action: str = None,
  create_and_update_jira_action: str = None,
  create_and_update_knowledge_bases: str = None,
  create_and_update_linear_action: str = None,
  create_and_update_mcp_action: str = None,
  create_and_update_monday_action: str = None,
  create_and_update_ms_exchange_action: str = None,
  create_and_update_ms_teams_action: str = None,
  create_and_update_new_relic_action: str = None,
  create_and_update_notion_action: str = None,
  create_and_update_one_drive_action: str = None,
  create_and_update_open_api_action: str = None,
  create_and_update_pager_duty_action: str = None,
  create_and_update_salesforce_action: str = None,
  create_and_update_sand_p_global_energy_action: str = None,
  create_and_update_sand_pgmi_action: str = None,
  create_and_update_sap_bill_of_material_action: str = None,
  create_and_update_sap_business_partner_action: str = None,
  create_and_update_sap_material_stock_action: str = None,
  create_and_update_sap_physical_inventory_action: str = None,
  create_and_update_sap_product_master_data_action: str = None,
  create_and_update_service_now_action: str = None,
  create_and_update_share_point_action: str = None,
  create_and_update_slack_action: str = None,
  create_and_update_smartsheet_action: str = None,
  create_and_update_textract_action: str = None,
  create_and_update_themes: str = None,
  create_and_update_threshold_alerts: str = None,
  create_and_update_zendesk_action: str = None,
  create_chat_agents: str = None,
  create_dashboard_executive_summary_with_q: str = None,
  create_shared_folders: str = None,
  create_spaces: str = None,
  create_spice_dataset: str = None,
  dashboard: str = None,
  edit_visual_with_q: str = None,
  export_to_csv: str = None,
  export_to_csv_in_scheduled_reports: str = None,
  export_to_excel: str = None,
  export_to_excel_in_scheduled_reports: str = None,
  export_to_pdf: str = None,
  export_to_pdf_in_scheduled_reports: str = None,
  extension: str = None,
  fact_set_action: str = None,
  flow: str = None,
  generic_http_action: str = None,
  github_action: str = None,
  google_calendar_action: str = None,
  hubspot_action: str = None,
  hugging_face_action: str = None,
  include_content_in_scheduled_reports_email: str = None,
  intercom_action: str = None,
  invoke_apps_ai_inference: str = None,
  jira_action: str = None,
  knowledge_base: str = None,
  linear_action: str = None,
  manage_shared_folders: str = None,
  mcp_action: str = None,
  monday_action: str = None,
  ms_exchange_action: str = None,
  ms_teams_action: str = None,
  new_relic_action: str = None,
  notion_action: str = None,
  one_drive_action: str = None,
  open_api_action: str = None,
  pager_duty_action: str = None,
  perform_flow_ui_task: str = None,
  print_reports: str = None,
  publish_without_approval: str = None,
  rename_shared_folders: str = None,
  research: str = None,
  salesforce_action: str = None,
  sand_p_global_energy_action: str = None,
  sand_pgmi_action: str = None,
  sap_bill_of_material_action: str = None,
  sap_business_partner_action: str = None,
  sap_material_stock_action: str = None,
  sap_physical_inventory_action: str = None,
  sap_product_master_data_action: str = None,
  service_now_action: str = None,
  share_amazon_bedrock_ars_action: str = None,
  share_amazon_bedrock_fs_action: str = None,
  share_amazon_bedrock_krs_action: str = None,
  share_amazon_s_three_action: str = None,
  share_analyses: str = None,
  share_apps: str = None,
  share_asana_action: str = None,
  share_bamboo_hr_action: str = None,
  share_box_agent_action: str = None,
  share_canva_agent_action: str = None,
  share_chat_agents: str = None,
  share_comprehend_action: str = None,
  share_comprehend_medical_action: str = None,
  share_confluence_action: str = None,
  share_dashboards: str = None,
  share_datasets: str = None,
  share_data_sources: str = None,
  share_fact_set_action: str = None,
  share_generic_http_action: str = None,
  share_github_action: str = None,
  share_google_calendar_action: str = None,
  share_hubspot_action: str = None,
  share_hugging_face_action: str = None,
  share_intercom_action: str = None,
  share_jira_action: str = None,
  share_knowledge_bases: str = None,
  share_linear_action: str = None,
  share_mcp_action: str = None,
  share_monday_action: str = None,
  share_ms_exchange_action: str = None,
  share_ms_teams_action: str = None,
  share_new_relic_action: str = None,
  share_notion_action: str = None,
  share_one_drive_action: str = None,
  share_open_api_action: str = None,
  share_pager_duty_action: str = None,
  share_point_action: str = None,
  share_salesforce_action: str = None,
  share_sand_p_global_energy_action: str = None,
  share_sand_pgmi_action: str = None,
  share_sap_bill_of_material_action: str = None,
  share_sap_business_partner_action: str = None,
  share_sap_material_stock_action: str = None,
  share_sap_physical_inventory_action: str = None,
  share_sap_product_master_data_action: str = None,
  share_service_now_action: str = None,
  share_share_point_action: str = None,
  share_slack_action: str = None,
  share_smartsheet_action: str = None,
  share_spaces: str = None,
  share_textract_action: str = None,
  share_zendesk_action: str = None,
  slack_action: str = None,
  smartsheet_action: str = None,
  space: str = None,
  subscribe_dashboard_email_reports: str = None,
  textract_action: str = None,
  topic: str = None,
  use_agent_web_search: str = None,
  use_amazon_bedrock_ars_action: str = None,
  use_amazon_bedrock_fs_action: str = None,
  use_amazon_bedrock_krs_action: str = None,
  use_amazon_s_three_action: str = None,
  use_asana_action: str = None,
  use_bamboo_hr_action: str = None,
  use_bedrock_models: str = None,
  use_box_agent_action: str = None,
  use_canva_agent_action: str = None,
  use_comprehend_action: str = None,
  use_comprehend_medical_action: str = None,
  use_confluence_action: str = None,
  use_fact_set_action: str = None,
  use_generic_http_action: str = None,
  use_github_action: str = None,
  use_google_calendar_action: str = None,
  use_hubspot_action: str = None,
  use_hugging_face_action: str = None,
  use_intercom_action: str = None,
  use_jira_action: str = None,
  use_linear_action: str = None,
  use_mcp_action: str = None,
  use_monday_action: str = None,
  use_ms_exchange_action: str = None,
  use_ms_teams_action: str = None,
  use_new_relic_action: str = None,
  use_notion_action: str = None,
  use_one_drive_action: str = None,
  use_open_api_action: str = None,
  use_pager_duty_action: str = None,
  use_salesforce_action: str = None,
  use_sand_p_global_energy_action: str = None,
  use_sand_pgmi_action: str = None,
  use_sap_bill_of_material_action: str = None,
  use_sap_business_partner_action: str = None,
  use_sap_material_stock_action: str = None,
  use_sap_physical_inventory_action: str = None,
  use_sap_product_master_data_action: str = None,
  use_service_now_action: str = None,
  use_share_point_action: str = None,
  use_slack_action: str = None,
  use_smartsheet_action: str = None,
  use_textract_action: str = None,
  use_zendesk_action: str = None,
  view_account_spice_capacity: str = None,
  zendesk_action: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.accessAppsNativeDataStore">access_apps_native_data_store</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#access_apps_native_data_store QuicksightCustomPermissions#access_apps_native_data_store}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.action">action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#action QuicksightCustomPermissions#action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.addOrRunAnomalyDetectionForAnalyses">add_or_run_anomaly_detection_for_analyses</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#add_or_run_anomaly_detection_for_analyses QuicksightCustomPermissions#add_or_run_anomaly_detection_for_analyses}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.amazonBedrockArsAction">amazon_bedrock_ars_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#amazon_bedrock_ars_action QuicksightCustomPermissions#amazon_bedrock_ars_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.amazonBedrockFsAction">amazon_bedrock_fs_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#amazon_bedrock_fs_action QuicksightCustomPermissions#amazon_bedrock_fs_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.amazonBedrockKrsAction">amazon_bedrock_krs_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#amazon_bedrock_krs_action QuicksightCustomPermissions#amazon_bedrock_krs_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.amazonSThreeAction">amazon_s_three_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#amazon_s_three_action QuicksightCustomPermissions#amazon_s_three_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.analysis">analysis</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#analysis QuicksightCustomPermissions#analysis}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.approveFlowShareRequests">approve_flow_share_requests</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#approve_flow_share_requests QuicksightCustomPermissions#approve_flow_share_requests}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.apps">apps</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#apps QuicksightCustomPermissions#apps}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.asanaAction">asana_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#asana_action QuicksightCustomPermissions#asana_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.automate">automate</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#automate QuicksightCustomPermissions#automate}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.bambooHrAction">bamboo_hr_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#bamboo_hr_action QuicksightCustomPermissions#bamboo_hr_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.boxAgentAction">box_agent_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#box_agent_action QuicksightCustomPermissions#box_agent_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.buildCalculatedFieldWithQ">build_calculated_field_with_q</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#build_calculated_field_with_q QuicksightCustomPermissions#build_calculated_field_with_q}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.canvaAgentAction">canva_agent_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#canva_agent_action QuicksightCustomPermissions#canva_agent_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.chatAgent">chat_agent</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#chat_agent QuicksightCustomPermissions#chat_agent}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.comprehendAction">comprehend_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#comprehend_action QuicksightCustomPermissions#comprehend_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.comprehendMedicalAction">comprehend_medical_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#comprehend_medical_action QuicksightCustomPermissions#comprehend_medical_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.confluenceAction">confluence_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#confluence_action QuicksightCustomPermissions#confluence_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateAmazonBedrockArsAction">create_and_update_amazon_bedrock_ars_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#create_and_update_amazon_bedrock_ars_action QuicksightCustomPermissions#create_and_update_amazon_bedrock_ars_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateAmazonBedrockFsAction">create_and_update_amazon_bedrock_fs_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#create_and_update_amazon_bedrock_fs_action QuicksightCustomPermissions#create_and_update_amazon_bedrock_fs_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateAmazonBedrockKrsAction">create_and_update_amazon_bedrock_krs_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#create_and_update_amazon_bedrock_krs_action QuicksightCustomPermissions#create_and_update_amazon_bedrock_krs_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateAmazonSThreeAction">create_and_update_amazon_s_three_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#create_and_update_amazon_s_three_action QuicksightCustomPermissions#create_and_update_amazon_s_three_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateApps">create_and_update_apps</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#create_and_update_apps QuicksightCustomPermissions#create_and_update_apps}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateAsanaAction">create_and_update_asana_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#create_and_update_asana_action QuicksightCustomPermissions#create_and_update_asana_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateBambooHrAction">create_and_update_bamboo_hr_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#create_and_update_bamboo_hr_action QuicksightCustomPermissions#create_and_update_bamboo_hr_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateBoxAgentAction">create_and_update_box_agent_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#create_and_update_box_agent_action QuicksightCustomPermissions#create_and_update_box_agent_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateCanvaAgentAction">create_and_update_canva_agent_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#create_and_update_canva_agent_action QuicksightCustomPermissions#create_and_update_canva_agent_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateComprehendAction">create_and_update_comprehend_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#create_and_update_comprehend_action QuicksightCustomPermissions#create_and_update_comprehend_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateComprehendMedicalAction">create_and_update_comprehend_medical_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#create_and_update_comprehend_medical_action QuicksightCustomPermissions#create_and_update_comprehend_medical_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateConfluenceAction">create_and_update_confluence_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#create_and_update_confluence_action QuicksightCustomPermissions#create_and_update_confluence_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateDashboardEmailReports">create_and_update_dashboard_email_reports</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#create_and_update_dashboard_email_reports QuicksightCustomPermissions#create_and_update_dashboard_email_reports}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateDatasets">create_and_update_datasets</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#create_and_update_datasets QuicksightCustomPermissions#create_and_update_datasets}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateDataSources">create_and_update_data_sources</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#create_and_update_data_sources QuicksightCustomPermissions#create_and_update_data_sources}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateFactSetAction">create_and_update_fact_set_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#create_and_update_fact_set_action QuicksightCustomPermissions#create_and_update_fact_set_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateGenericHttpAction">create_and_update_generic_http_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#create_and_update_generic_http_action QuicksightCustomPermissions#create_and_update_generic_http_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateGithubAction">create_and_update_github_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#create_and_update_github_action QuicksightCustomPermissions#create_and_update_github_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateGoogleCalendarAction">create_and_update_google_calendar_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#create_and_update_google_calendar_action QuicksightCustomPermissions#create_and_update_google_calendar_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateHubspotAction">create_and_update_hubspot_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#create_and_update_hubspot_action QuicksightCustomPermissions#create_and_update_hubspot_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateHuggingFaceAction">create_and_update_hugging_face_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#create_and_update_hugging_face_action QuicksightCustomPermissions#create_and_update_hugging_face_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateIntercomAction">create_and_update_intercom_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#create_and_update_intercom_action QuicksightCustomPermissions#create_and_update_intercom_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateJiraAction">create_and_update_jira_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#create_and_update_jira_action QuicksightCustomPermissions#create_and_update_jira_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateKnowledgeBases">create_and_update_knowledge_bases</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#create_and_update_knowledge_bases QuicksightCustomPermissions#create_and_update_knowledge_bases}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateLinearAction">create_and_update_linear_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#create_and_update_linear_action QuicksightCustomPermissions#create_and_update_linear_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateMcpAction">create_and_update_mcp_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#create_and_update_mcp_action QuicksightCustomPermissions#create_and_update_mcp_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateMondayAction">create_and_update_monday_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#create_and_update_monday_action QuicksightCustomPermissions#create_and_update_monday_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateMsExchangeAction">create_and_update_ms_exchange_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#create_and_update_ms_exchange_action QuicksightCustomPermissions#create_and_update_ms_exchange_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateMsTeamsAction">create_and_update_ms_teams_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#create_and_update_ms_teams_action QuicksightCustomPermissions#create_and_update_ms_teams_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateNewRelicAction">create_and_update_new_relic_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#create_and_update_new_relic_action QuicksightCustomPermissions#create_and_update_new_relic_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateNotionAction">create_and_update_notion_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#create_and_update_notion_action QuicksightCustomPermissions#create_and_update_notion_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateOneDriveAction">create_and_update_one_drive_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#create_and_update_one_drive_action QuicksightCustomPermissions#create_and_update_one_drive_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateOpenApiAction">create_and_update_open_api_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#create_and_update_open_api_action QuicksightCustomPermissions#create_and_update_open_api_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdatePagerDutyAction">create_and_update_pager_duty_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#create_and_update_pager_duty_action QuicksightCustomPermissions#create_and_update_pager_duty_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateSalesforceAction">create_and_update_salesforce_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#create_and_update_salesforce_action QuicksightCustomPermissions#create_and_update_salesforce_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateSandPGlobalEnergyAction">create_and_update_sand_p_global_energy_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#create_and_update_sand_p_global_energy_action QuicksightCustomPermissions#create_and_update_sand_p_global_energy_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateSandPgmiAction">create_and_update_sand_pgmi_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#create_and_update_sand_pgmi_action QuicksightCustomPermissions#create_and_update_sand_pgmi_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateSapBillOfMaterialAction">create_and_update_sap_bill_of_material_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#create_and_update_sap_bill_of_material_action QuicksightCustomPermissions#create_and_update_sap_bill_of_material_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateSapBusinessPartnerAction">create_and_update_sap_business_partner_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#create_and_update_sap_business_partner_action QuicksightCustomPermissions#create_and_update_sap_business_partner_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateSapMaterialStockAction">create_and_update_sap_material_stock_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#create_and_update_sap_material_stock_action QuicksightCustomPermissions#create_and_update_sap_material_stock_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateSapPhysicalInventoryAction">create_and_update_sap_physical_inventory_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#create_and_update_sap_physical_inventory_action QuicksightCustomPermissions#create_and_update_sap_physical_inventory_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateSapProductMasterDataAction">create_and_update_sap_product_master_data_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#create_and_update_sap_product_master_data_action QuicksightCustomPermissions#create_and_update_sap_product_master_data_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateServiceNowAction">create_and_update_service_now_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#create_and_update_service_now_action QuicksightCustomPermissions#create_and_update_service_now_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateSharePointAction">create_and_update_share_point_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#create_and_update_share_point_action QuicksightCustomPermissions#create_and_update_share_point_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateSlackAction">create_and_update_slack_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#create_and_update_slack_action QuicksightCustomPermissions#create_and_update_slack_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateSmartsheetAction">create_and_update_smartsheet_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#create_and_update_smartsheet_action QuicksightCustomPermissions#create_and_update_smartsheet_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateTextractAction">create_and_update_textract_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#create_and_update_textract_action QuicksightCustomPermissions#create_and_update_textract_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateThemes">create_and_update_themes</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#create_and_update_themes QuicksightCustomPermissions#create_and_update_themes}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateThresholdAlerts">create_and_update_threshold_alerts</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#create_and_update_threshold_alerts QuicksightCustomPermissions#create_and_update_threshold_alerts}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateZendeskAction">create_and_update_zendesk_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#create_and_update_zendesk_action QuicksightCustomPermissions#create_and_update_zendesk_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createChatAgents">create_chat_agents</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#create_chat_agents QuicksightCustomPermissions#create_chat_agents}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createDashboardExecutiveSummaryWithQ">create_dashboard_executive_summary_with_q</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#create_dashboard_executive_summary_with_q QuicksightCustomPermissions#create_dashboard_executive_summary_with_q}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createSharedFolders">create_shared_folders</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#create_shared_folders QuicksightCustomPermissions#create_shared_folders}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createSpaces">create_spaces</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#create_spaces QuicksightCustomPermissions#create_spaces}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createSpiceDataset">create_spice_dataset</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#create_spice_dataset QuicksightCustomPermissions#create_spice_dataset}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.dashboard">dashboard</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#dashboard QuicksightCustomPermissions#dashboard}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.editVisualWithQ">edit_visual_with_q</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#edit_visual_with_q QuicksightCustomPermissions#edit_visual_with_q}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.exportToCsv">export_to_csv</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#export_to_csv QuicksightCustomPermissions#export_to_csv}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.exportToCsvInScheduledReports">export_to_csv_in_scheduled_reports</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#export_to_csv_in_scheduled_reports QuicksightCustomPermissions#export_to_csv_in_scheduled_reports}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.exportToExcel">export_to_excel</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#export_to_excel QuicksightCustomPermissions#export_to_excel}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.exportToExcelInScheduledReports">export_to_excel_in_scheduled_reports</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#export_to_excel_in_scheduled_reports QuicksightCustomPermissions#export_to_excel_in_scheduled_reports}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.exportToPdf">export_to_pdf</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#export_to_pdf QuicksightCustomPermissions#export_to_pdf}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.exportToPdfInScheduledReports">export_to_pdf_in_scheduled_reports</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#export_to_pdf_in_scheduled_reports QuicksightCustomPermissions#export_to_pdf_in_scheduled_reports}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.extension">extension</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#extension QuicksightCustomPermissions#extension}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.factSetAction">fact_set_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#fact_set_action QuicksightCustomPermissions#fact_set_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.flow">flow</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#flow QuicksightCustomPermissions#flow}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.genericHttpAction">generic_http_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#generic_http_action QuicksightCustomPermissions#generic_http_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.githubAction">github_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#github_action QuicksightCustomPermissions#github_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.googleCalendarAction">google_calendar_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#google_calendar_action QuicksightCustomPermissions#google_calendar_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.hubspotAction">hubspot_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#hubspot_action QuicksightCustomPermissions#hubspot_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.huggingFaceAction">hugging_face_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#hugging_face_action QuicksightCustomPermissions#hugging_face_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.includeContentInScheduledReportsEmail">include_content_in_scheduled_reports_email</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#include_content_in_scheduled_reports_email QuicksightCustomPermissions#include_content_in_scheduled_reports_email}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.intercomAction">intercom_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#intercom_action QuicksightCustomPermissions#intercom_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.invokeAppsAiInference">invoke_apps_ai_inference</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#invoke_apps_ai_inference QuicksightCustomPermissions#invoke_apps_ai_inference}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.jiraAction">jira_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#jira_action QuicksightCustomPermissions#jira_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.knowledgeBase">knowledge_base</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#knowledge_base QuicksightCustomPermissions#knowledge_base}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.linearAction">linear_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#linear_action QuicksightCustomPermissions#linear_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.manageSharedFolders">manage_shared_folders</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#manage_shared_folders QuicksightCustomPermissions#manage_shared_folders}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.mcpAction">mcp_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#mcp_action QuicksightCustomPermissions#mcp_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.mondayAction">monday_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#monday_action QuicksightCustomPermissions#monday_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.msExchangeAction">ms_exchange_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#ms_exchange_action QuicksightCustomPermissions#ms_exchange_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.msTeamsAction">ms_teams_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#ms_teams_action QuicksightCustomPermissions#ms_teams_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.newRelicAction">new_relic_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#new_relic_action QuicksightCustomPermissions#new_relic_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.notionAction">notion_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#notion_action QuicksightCustomPermissions#notion_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.oneDriveAction">one_drive_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#one_drive_action QuicksightCustomPermissions#one_drive_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.openApiAction">open_api_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#open_api_action QuicksightCustomPermissions#open_api_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.pagerDutyAction">pager_duty_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#pager_duty_action QuicksightCustomPermissions#pager_duty_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.performFlowUiTask">perform_flow_ui_task</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#perform_flow_ui_task QuicksightCustomPermissions#perform_flow_ui_task}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.printReports">print_reports</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#print_reports QuicksightCustomPermissions#print_reports}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.publishWithoutApproval">publish_without_approval</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#publish_without_approval QuicksightCustomPermissions#publish_without_approval}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.renameSharedFolders">rename_shared_folders</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#rename_shared_folders QuicksightCustomPermissions#rename_shared_folders}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.research">research</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#research QuicksightCustomPermissions#research}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.salesforceAction">salesforce_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#salesforce_action QuicksightCustomPermissions#salesforce_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.sandPGlobalEnergyAction">sand_p_global_energy_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#sand_p_global_energy_action QuicksightCustomPermissions#sand_p_global_energy_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.sandPgmiAction">sand_pgmi_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#sand_pgmi_action QuicksightCustomPermissions#sand_pgmi_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.sapBillOfMaterialAction">sap_bill_of_material_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#sap_bill_of_material_action QuicksightCustomPermissions#sap_bill_of_material_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.sapBusinessPartnerAction">sap_business_partner_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#sap_business_partner_action QuicksightCustomPermissions#sap_business_partner_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.sapMaterialStockAction">sap_material_stock_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#sap_material_stock_action QuicksightCustomPermissions#sap_material_stock_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.sapPhysicalInventoryAction">sap_physical_inventory_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#sap_physical_inventory_action QuicksightCustomPermissions#sap_physical_inventory_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.sapProductMasterDataAction">sap_product_master_data_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#sap_product_master_data_action QuicksightCustomPermissions#sap_product_master_data_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.serviceNowAction">service_now_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#service_now_action QuicksightCustomPermissions#service_now_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareAmazonBedrockArsAction">share_amazon_bedrock_ars_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#share_amazon_bedrock_ars_action QuicksightCustomPermissions#share_amazon_bedrock_ars_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareAmazonBedrockFsAction">share_amazon_bedrock_fs_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#share_amazon_bedrock_fs_action QuicksightCustomPermissions#share_amazon_bedrock_fs_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareAmazonBedrockKrsAction">share_amazon_bedrock_krs_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#share_amazon_bedrock_krs_action QuicksightCustomPermissions#share_amazon_bedrock_krs_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareAmazonSThreeAction">share_amazon_s_three_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#share_amazon_s_three_action QuicksightCustomPermissions#share_amazon_s_three_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareAnalyses">share_analyses</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#share_analyses QuicksightCustomPermissions#share_analyses}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareApps">share_apps</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#share_apps QuicksightCustomPermissions#share_apps}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareAsanaAction">share_asana_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#share_asana_action QuicksightCustomPermissions#share_asana_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareBambooHrAction">share_bamboo_hr_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#share_bamboo_hr_action QuicksightCustomPermissions#share_bamboo_hr_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareBoxAgentAction">share_box_agent_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#share_box_agent_action QuicksightCustomPermissions#share_box_agent_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareCanvaAgentAction">share_canva_agent_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#share_canva_agent_action QuicksightCustomPermissions#share_canva_agent_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareChatAgents">share_chat_agents</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#share_chat_agents QuicksightCustomPermissions#share_chat_agents}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareComprehendAction">share_comprehend_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#share_comprehend_action QuicksightCustomPermissions#share_comprehend_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareComprehendMedicalAction">share_comprehend_medical_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#share_comprehend_medical_action QuicksightCustomPermissions#share_comprehend_medical_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareConfluenceAction">share_confluence_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#share_confluence_action QuicksightCustomPermissions#share_confluence_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareDashboards">share_dashboards</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#share_dashboards QuicksightCustomPermissions#share_dashboards}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareDatasets">share_datasets</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#share_datasets QuicksightCustomPermissions#share_datasets}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareDataSources">share_data_sources</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#share_data_sources QuicksightCustomPermissions#share_data_sources}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareFactSetAction">share_fact_set_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#share_fact_set_action QuicksightCustomPermissions#share_fact_set_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareGenericHttpAction">share_generic_http_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#share_generic_http_action QuicksightCustomPermissions#share_generic_http_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareGithubAction">share_github_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#share_github_action QuicksightCustomPermissions#share_github_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareGoogleCalendarAction">share_google_calendar_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#share_google_calendar_action QuicksightCustomPermissions#share_google_calendar_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareHubspotAction">share_hubspot_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#share_hubspot_action QuicksightCustomPermissions#share_hubspot_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareHuggingFaceAction">share_hugging_face_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#share_hugging_face_action QuicksightCustomPermissions#share_hugging_face_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareIntercomAction">share_intercom_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#share_intercom_action QuicksightCustomPermissions#share_intercom_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareJiraAction">share_jira_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#share_jira_action QuicksightCustomPermissions#share_jira_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareKnowledgeBases">share_knowledge_bases</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#share_knowledge_bases QuicksightCustomPermissions#share_knowledge_bases}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareLinearAction">share_linear_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#share_linear_action QuicksightCustomPermissions#share_linear_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareMcpAction">share_mcp_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#share_mcp_action QuicksightCustomPermissions#share_mcp_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareMondayAction">share_monday_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#share_monday_action QuicksightCustomPermissions#share_monday_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareMsExchangeAction">share_ms_exchange_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#share_ms_exchange_action QuicksightCustomPermissions#share_ms_exchange_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareMsTeamsAction">share_ms_teams_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#share_ms_teams_action QuicksightCustomPermissions#share_ms_teams_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareNewRelicAction">share_new_relic_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#share_new_relic_action QuicksightCustomPermissions#share_new_relic_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareNotionAction">share_notion_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#share_notion_action QuicksightCustomPermissions#share_notion_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareOneDriveAction">share_one_drive_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#share_one_drive_action QuicksightCustomPermissions#share_one_drive_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareOpenApiAction">share_open_api_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#share_open_api_action QuicksightCustomPermissions#share_open_api_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.sharePagerDutyAction">share_pager_duty_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#share_pager_duty_action QuicksightCustomPermissions#share_pager_duty_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.sharePointAction">share_point_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#share_point_action QuicksightCustomPermissions#share_point_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareSalesforceAction">share_salesforce_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#share_salesforce_action QuicksightCustomPermissions#share_salesforce_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareSandPGlobalEnergyAction">share_sand_p_global_energy_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#share_sand_p_global_energy_action QuicksightCustomPermissions#share_sand_p_global_energy_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareSandPgmiAction">share_sand_pgmi_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#share_sand_pgmi_action QuicksightCustomPermissions#share_sand_pgmi_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareSapBillOfMaterialAction">share_sap_bill_of_material_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#share_sap_bill_of_material_action QuicksightCustomPermissions#share_sap_bill_of_material_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareSapBusinessPartnerAction">share_sap_business_partner_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#share_sap_business_partner_action QuicksightCustomPermissions#share_sap_business_partner_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareSapMaterialStockAction">share_sap_material_stock_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#share_sap_material_stock_action QuicksightCustomPermissions#share_sap_material_stock_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareSapPhysicalInventoryAction">share_sap_physical_inventory_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#share_sap_physical_inventory_action QuicksightCustomPermissions#share_sap_physical_inventory_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareSapProductMasterDataAction">share_sap_product_master_data_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#share_sap_product_master_data_action QuicksightCustomPermissions#share_sap_product_master_data_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareServiceNowAction">share_service_now_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#share_service_now_action QuicksightCustomPermissions#share_service_now_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareSharePointAction">share_share_point_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#share_share_point_action QuicksightCustomPermissions#share_share_point_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareSlackAction">share_slack_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#share_slack_action QuicksightCustomPermissions#share_slack_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareSmartsheetAction">share_smartsheet_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#share_smartsheet_action QuicksightCustomPermissions#share_smartsheet_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareSpaces">share_spaces</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#share_spaces QuicksightCustomPermissions#share_spaces}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareTextractAction">share_textract_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#share_textract_action QuicksightCustomPermissions#share_textract_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareZendeskAction">share_zendesk_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#share_zendesk_action QuicksightCustomPermissions#share_zendesk_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.slackAction">slack_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#slack_action QuicksightCustomPermissions#slack_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.smartsheetAction">smartsheet_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#smartsheet_action QuicksightCustomPermissions#smartsheet_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.space">space</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#space QuicksightCustomPermissions#space}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.subscribeDashboardEmailReports">subscribe_dashboard_email_reports</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#subscribe_dashboard_email_reports QuicksightCustomPermissions#subscribe_dashboard_email_reports}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.textractAction">textract_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#textract_action QuicksightCustomPermissions#textract_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.topic">topic</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#topic QuicksightCustomPermissions#topic}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useAgentWebSearch">use_agent_web_search</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#use_agent_web_search QuicksightCustomPermissions#use_agent_web_search}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useAmazonBedrockArsAction">use_amazon_bedrock_ars_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#use_amazon_bedrock_ars_action QuicksightCustomPermissions#use_amazon_bedrock_ars_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useAmazonBedrockFsAction">use_amazon_bedrock_fs_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#use_amazon_bedrock_fs_action QuicksightCustomPermissions#use_amazon_bedrock_fs_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useAmazonBedrockKrsAction">use_amazon_bedrock_krs_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#use_amazon_bedrock_krs_action QuicksightCustomPermissions#use_amazon_bedrock_krs_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useAmazonSThreeAction">use_amazon_s_three_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#use_amazon_s_three_action QuicksightCustomPermissions#use_amazon_s_three_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useAsanaAction">use_asana_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#use_asana_action QuicksightCustomPermissions#use_asana_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useBambooHrAction">use_bamboo_hr_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#use_bamboo_hr_action QuicksightCustomPermissions#use_bamboo_hr_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useBedrockModels">use_bedrock_models</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#use_bedrock_models QuicksightCustomPermissions#use_bedrock_models}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useBoxAgentAction">use_box_agent_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#use_box_agent_action QuicksightCustomPermissions#use_box_agent_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useCanvaAgentAction">use_canva_agent_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#use_canva_agent_action QuicksightCustomPermissions#use_canva_agent_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useComprehendAction">use_comprehend_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#use_comprehend_action QuicksightCustomPermissions#use_comprehend_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useComprehendMedicalAction">use_comprehend_medical_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#use_comprehend_medical_action QuicksightCustomPermissions#use_comprehend_medical_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useConfluenceAction">use_confluence_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#use_confluence_action QuicksightCustomPermissions#use_confluence_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useFactSetAction">use_fact_set_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#use_fact_set_action QuicksightCustomPermissions#use_fact_set_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useGenericHttpAction">use_generic_http_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#use_generic_http_action QuicksightCustomPermissions#use_generic_http_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useGithubAction">use_github_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#use_github_action QuicksightCustomPermissions#use_github_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useGoogleCalendarAction">use_google_calendar_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#use_google_calendar_action QuicksightCustomPermissions#use_google_calendar_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useHubspotAction">use_hubspot_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#use_hubspot_action QuicksightCustomPermissions#use_hubspot_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useHuggingFaceAction">use_hugging_face_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#use_hugging_face_action QuicksightCustomPermissions#use_hugging_face_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useIntercomAction">use_intercom_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#use_intercom_action QuicksightCustomPermissions#use_intercom_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useJiraAction">use_jira_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#use_jira_action QuicksightCustomPermissions#use_jira_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useLinearAction">use_linear_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#use_linear_action QuicksightCustomPermissions#use_linear_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useMcpAction">use_mcp_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#use_mcp_action QuicksightCustomPermissions#use_mcp_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useMondayAction">use_monday_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#use_monday_action QuicksightCustomPermissions#use_monday_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useMsExchangeAction">use_ms_exchange_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#use_ms_exchange_action QuicksightCustomPermissions#use_ms_exchange_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useMsTeamsAction">use_ms_teams_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#use_ms_teams_action QuicksightCustomPermissions#use_ms_teams_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useNewRelicAction">use_new_relic_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#use_new_relic_action QuicksightCustomPermissions#use_new_relic_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useNotionAction">use_notion_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#use_notion_action QuicksightCustomPermissions#use_notion_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useOneDriveAction">use_one_drive_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#use_one_drive_action QuicksightCustomPermissions#use_one_drive_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useOpenApiAction">use_open_api_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#use_open_api_action QuicksightCustomPermissions#use_open_api_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.usePagerDutyAction">use_pager_duty_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#use_pager_duty_action QuicksightCustomPermissions#use_pager_duty_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useSalesforceAction">use_salesforce_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#use_salesforce_action QuicksightCustomPermissions#use_salesforce_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useSandPGlobalEnergyAction">use_sand_p_global_energy_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#use_sand_p_global_energy_action QuicksightCustomPermissions#use_sand_p_global_energy_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useSandPgmiAction">use_sand_pgmi_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#use_sand_pgmi_action QuicksightCustomPermissions#use_sand_pgmi_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useSapBillOfMaterialAction">use_sap_bill_of_material_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#use_sap_bill_of_material_action QuicksightCustomPermissions#use_sap_bill_of_material_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useSapBusinessPartnerAction">use_sap_business_partner_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#use_sap_business_partner_action QuicksightCustomPermissions#use_sap_business_partner_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useSapMaterialStockAction">use_sap_material_stock_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#use_sap_material_stock_action QuicksightCustomPermissions#use_sap_material_stock_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useSapPhysicalInventoryAction">use_sap_physical_inventory_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#use_sap_physical_inventory_action QuicksightCustomPermissions#use_sap_physical_inventory_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useSapProductMasterDataAction">use_sap_product_master_data_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#use_sap_product_master_data_action QuicksightCustomPermissions#use_sap_product_master_data_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useServiceNowAction">use_service_now_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#use_service_now_action QuicksightCustomPermissions#use_service_now_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useSharePointAction">use_share_point_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#use_share_point_action QuicksightCustomPermissions#use_share_point_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useSlackAction">use_slack_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#use_slack_action QuicksightCustomPermissions#use_slack_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useSmartsheetAction">use_smartsheet_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#use_smartsheet_action QuicksightCustomPermissions#use_smartsheet_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useTextractAction">use_textract_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#use_textract_action QuicksightCustomPermissions#use_textract_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useZendeskAction">use_zendesk_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#use_zendesk_action QuicksightCustomPermissions#use_zendesk_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.viewAccountSpiceCapacity">view_account_spice_capacity</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#view_account_spice_capacity QuicksightCustomPermissions#view_account_spice_capacity}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.zendeskAction">zendesk_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#zendesk_action QuicksightCustomPermissions#zendesk_action}. |

---

##### `access_apps_native_data_store`<sup>Optional</sup> <a name="access_apps_native_data_store" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.accessAppsNativeDataStore"></a>

```python
access_apps_native_data_store: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#access_apps_native_data_store QuicksightCustomPermissions#access_apps_native_data_store}.

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.action"></a>

```python
action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#action QuicksightCustomPermissions#action}.

---

##### `add_or_run_anomaly_detection_for_analyses`<sup>Optional</sup> <a name="add_or_run_anomaly_detection_for_analyses" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.addOrRunAnomalyDetectionForAnalyses"></a>

```python
add_or_run_anomaly_detection_for_analyses: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#add_or_run_anomaly_detection_for_analyses QuicksightCustomPermissions#add_or_run_anomaly_detection_for_analyses}.

---

##### `amazon_bedrock_ars_action`<sup>Optional</sup> <a name="amazon_bedrock_ars_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.amazonBedrockArsAction"></a>

```python
amazon_bedrock_ars_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#amazon_bedrock_ars_action QuicksightCustomPermissions#amazon_bedrock_ars_action}.

---

##### `amazon_bedrock_fs_action`<sup>Optional</sup> <a name="amazon_bedrock_fs_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.amazonBedrockFsAction"></a>

```python
amazon_bedrock_fs_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#amazon_bedrock_fs_action QuicksightCustomPermissions#amazon_bedrock_fs_action}.

---

##### `amazon_bedrock_krs_action`<sup>Optional</sup> <a name="amazon_bedrock_krs_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.amazonBedrockKrsAction"></a>

```python
amazon_bedrock_krs_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#amazon_bedrock_krs_action QuicksightCustomPermissions#amazon_bedrock_krs_action}.

---

##### `amazon_s_three_action`<sup>Optional</sup> <a name="amazon_s_three_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.amazonSThreeAction"></a>

```python
amazon_s_three_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#amazon_s_three_action QuicksightCustomPermissions#amazon_s_three_action}.

---

##### `analysis`<sup>Optional</sup> <a name="analysis" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.analysis"></a>

```python
analysis: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#analysis QuicksightCustomPermissions#analysis}.

---

##### `approve_flow_share_requests`<sup>Optional</sup> <a name="approve_flow_share_requests" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.approveFlowShareRequests"></a>

```python
approve_flow_share_requests: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#approve_flow_share_requests QuicksightCustomPermissions#approve_flow_share_requests}.

---

##### `apps`<sup>Optional</sup> <a name="apps" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.apps"></a>

```python
apps: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#apps QuicksightCustomPermissions#apps}.

---

##### `asana_action`<sup>Optional</sup> <a name="asana_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.asanaAction"></a>

```python
asana_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#asana_action QuicksightCustomPermissions#asana_action}.

---

##### `automate`<sup>Optional</sup> <a name="automate" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.automate"></a>

```python
automate: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#automate QuicksightCustomPermissions#automate}.

---

##### `bamboo_hr_action`<sup>Optional</sup> <a name="bamboo_hr_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.bambooHrAction"></a>

```python
bamboo_hr_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#bamboo_hr_action QuicksightCustomPermissions#bamboo_hr_action}.

---

##### `box_agent_action`<sup>Optional</sup> <a name="box_agent_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.boxAgentAction"></a>

```python
box_agent_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#box_agent_action QuicksightCustomPermissions#box_agent_action}.

---

##### `build_calculated_field_with_q`<sup>Optional</sup> <a name="build_calculated_field_with_q" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.buildCalculatedFieldWithQ"></a>

```python
build_calculated_field_with_q: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#build_calculated_field_with_q QuicksightCustomPermissions#build_calculated_field_with_q}.

---

##### `canva_agent_action`<sup>Optional</sup> <a name="canva_agent_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.canvaAgentAction"></a>

```python
canva_agent_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#canva_agent_action QuicksightCustomPermissions#canva_agent_action}.

---

##### `chat_agent`<sup>Optional</sup> <a name="chat_agent" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.chatAgent"></a>

```python
chat_agent: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#chat_agent QuicksightCustomPermissions#chat_agent}.

---

##### `comprehend_action`<sup>Optional</sup> <a name="comprehend_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.comprehendAction"></a>

```python
comprehend_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#comprehend_action QuicksightCustomPermissions#comprehend_action}.

---

##### `comprehend_medical_action`<sup>Optional</sup> <a name="comprehend_medical_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.comprehendMedicalAction"></a>

```python
comprehend_medical_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#comprehend_medical_action QuicksightCustomPermissions#comprehend_medical_action}.

---

##### `confluence_action`<sup>Optional</sup> <a name="confluence_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.confluenceAction"></a>

```python
confluence_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#confluence_action QuicksightCustomPermissions#confluence_action}.

---

##### `create_and_update_amazon_bedrock_ars_action`<sup>Optional</sup> <a name="create_and_update_amazon_bedrock_ars_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateAmazonBedrockArsAction"></a>

```python
create_and_update_amazon_bedrock_ars_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#create_and_update_amazon_bedrock_ars_action QuicksightCustomPermissions#create_and_update_amazon_bedrock_ars_action}.

---

##### `create_and_update_amazon_bedrock_fs_action`<sup>Optional</sup> <a name="create_and_update_amazon_bedrock_fs_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateAmazonBedrockFsAction"></a>

```python
create_and_update_amazon_bedrock_fs_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#create_and_update_amazon_bedrock_fs_action QuicksightCustomPermissions#create_and_update_amazon_bedrock_fs_action}.

---

##### `create_and_update_amazon_bedrock_krs_action`<sup>Optional</sup> <a name="create_and_update_amazon_bedrock_krs_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateAmazonBedrockKrsAction"></a>

```python
create_and_update_amazon_bedrock_krs_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#create_and_update_amazon_bedrock_krs_action QuicksightCustomPermissions#create_and_update_amazon_bedrock_krs_action}.

---

##### `create_and_update_amazon_s_three_action`<sup>Optional</sup> <a name="create_and_update_amazon_s_three_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateAmazonSThreeAction"></a>

```python
create_and_update_amazon_s_three_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#create_and_update_amazon_s_three_action QuicksightCustomPermissions#create_and_update_amazon_s_three_action}.

---

##### `create_and_update_apps`<sup>Optional</sup> <a name="create_and_update_apps" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateApps"></a>

```python
create_and_update_apps: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#create_and_update_apps QuicksightCustomPermissions#create_and_update_apps}.

---

##### `create_and_update_asana_action`<sup>Optional</sup> <a name="create_and_update_asana_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateAsanaAction"></a>

```python
create_and_update_asana_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#create_and_update_asana_action QuicksightCustomPermissions#create_and_update_asana_action}.

---

##### `create_and_update_bamboo_hr_action`<sup>Optional</sup> <a name="create_and_update_bamboo_hr_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateBambooHrAction"></a>

```python
create_and_update_bamboo_hr_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#create_and_update_bamboo_hr_action QuicksightCustomPermissions#create_and_update_bamboo_hr_action}.

---

##### `create_and_update_box_agent_action`<sup>Optional</sup> <a name="create_and_update_box_agent_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateBoxAgentAction"></a>

```python
create_and_update_box_agent_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#create_and_update_box_agent_action QuicksightCustomPermissions#create_and_update_box_agent_action}.

---

##### `create_and_update_canva_agent_action`<sup>Optional</sup> <a name="create_and_update_canva_agent_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateCanvaAgentAction"></a>

```python
create_and_update_canva_agent_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#create_and_update_canva_agent_action QuicksightCustomPermissions#create_and_update_canva_agent_action}.

---

##### `create_and_update_comprehend_action`<sup>Optional</sup> <a name="create_and_update_comprehend_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateComprehendAction"></a>

```python
create_and_update_comprehend_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#create_and_update_comprehend_action QuicksightCustomPermissions#create_and_update_comprehend_action}.

---

##### `create_and_update_comprehend_medical_action`<sup>Optional</sup> <a name="create_and_update_comprehend_medical_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateComprehendMedicalAction"></a>

```python
create_and_update_comprehend_medical_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#create_and_update_comprehend_medical_action QuicksightCustomPermissions#create_and_update_comprehend_medical_action}.

---

##### `create_and_update_confluence_action`<sup>Optional</sup> <a name="create_and_update_confluence_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateConfluenceAction"></a>

```python
create_and_update_confluence_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#create_and_update_confluence_action QuicksightCustomPermissions#create_and_update_confluence_action}.

---

##### `create_and_update_dashboard_email_reports`<sup>Optional</sup> <a name="create_and_update_dashboard_email_reports" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateDashboardEmailReports"></a>

```python
create_and_update_dashboard_email_reports: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#create_and_update_dashboard_email_reports QuicksightCustomPermissions#create_and_update_dashboard_email_reports}.

---

##### `create_and_update_datasets`<sup>Optional</sup> <a name="create_and_update_datasets" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateDatasets"></a>

```python
create_and_update_datasets: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#create_and_update_datasets QuicksightCustomPermissions#create_and_update_datasets}.

---

##### `create_and_update_data_sources`<sup>Optional</sup> <a name="create_and_update_data_sources" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateDataSources"></a>

```python
create_and_update_data_sources: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#create_and_update_data_sources QuicksightCustomPermissions#create_and_update_data_sources}.

---

##### `create_and_update_fact_set_action`<sup>Optional</sup> <a name="create_and_update_fact_set_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateFactSetAction"></a>

```python
create_and_update_fact_set_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#create_and_update_fact_set_action QuicksightCustomPermissions#create_and_update_fact_set_action}.

---

##### `create_and_update_generic_http_action`<sup>Optional</sup> <a name="create_and_update_generic_http_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateGenericHttpAction"></a>

```python
create_and_update_generic_http_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#create_and_update_generic_http_action QuicksightCustomPermissions#create_and_update_generic_http_action}.

---

##### `create_and_update_github_action`<sup>Optional</sup> <a name="create_and_update_github_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateGithubAction"></a>

```python
create_and_update_github_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#create_and_update_github_action QuicksightCustomPermissions#create_and_update_github_action}.

---

##### `create_and_update_google_calendar_action`<sup>Optional</sup> <a name="create_and_update_google_calendar_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateGoogleCalendarAction"></a>

```python
create_and_update_google_calendar_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#create_and_update_google_calendar_action QuicksightCustomPermissions#create_and_update_google_calendar_action}.

---

##### `create_and_update_hubspot_action`<sup>Optional</sup> <a name="create_and_update_hubspot_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateHubspotAction"></a>

```python
create_and_update_hubspot_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#create_and_update_hubspot_action QuicksightCustomPermissions#create_and_update_hubspot_action}.

---

##### `create_and_update_hugging_face_action`<sup>Optional</sup> <a name="create_and_update_hugging_face_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateHuggingFaceAction"></a>

```python
create_and_update_hugging_face_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#create_and_update_hugging_face_action QuicksightCustomPermissions#create_and_update_hugging_face_action}.

---

##### `create_and_update_intercom_action`<sup>Optional</sup> <a name="create_and_update_intercom_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateIntercomAction"></a>

```python
create_and_update_intercom_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#create_and_update_intercom_action QuicksightCustomPermissions#create_and_update_intercom_action}.

---

##### `create_and_update_jira_action`<sup>Optional</sup> <a name="create_and_update_jira_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateJiraAction"></a>

```python
create_and_update_jira_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#create_and_update_jira_action QuicksightCustomPermissions#create_and_update_jira_action}.

---

##### `create_and_update_knowledge_bases`<sup>Optional</sup> <a name="create_and_update_knowledge_bases" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateKnowledgeBases"></a>

```python
create_and_update_knowledge_bases: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#create_and_update_knowledge_bases QuicksightCustomPermissions#create_and_update_knowledge_bases}.

---

##### `create_and_update_linear_action`<sup>Optional</sup> <a name="create_and_update_linear_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateLinearAction"></a>

```python
create_and_update_linear_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#create_and_update_linear_action QuicksightCustomPermissions#create_and_update_linear_action}.

---

##### `create_and_update_mcp_action`<sup>Optional</sup> <a name="create_and_update_mcp_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateMcpAction"></a>

```python
create_and_update_mcp_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#create_and_update_mcp_action QuicksightCustomPermissions#create_and_update_mcp_action}.

---

##### `create_and_update_monday_action`<sup>Optional</sup> <a name="create_and_update_monday_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateMondayAction"></a>

```python
create_and_update_monday_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#create_and_update_monday_action QuicksightCustomPermissions#create_and_update_monday_action}.

---

##### `create_and_update_ms_exchange_action`<sup>Optional</sup> <a name="create_and_update_ms_exchange_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateMsExchangeAction"></a>

```python
create_and_update_ms_exchange_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#create_and_update_ms_exchange_action QuicksightCustomPermissions#create_and_update_ms_exchange_action}.

---

##### `create_and_update_ms_teams_action`<sup>Optional</sup> <a name="create_and_update_ms_teams_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateMsTeamsAction"></a>

```python
create_and_update_ms_teams_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#create_and_update_ms_teams_action QuicksightCustomPermissions#create_and_update_ms_teams_action}.

---

##### `create_and_update_new_relic_action`<sup>Optional</sup> <a name="create_and_update_new_relic_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateNewRelicAction"></a>

```python
create_and_update_new_relic_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#create_and_update_new_relic_action QuicksightCustomPermissions#create_and_update_new_relic_action}.

---

##### `create_and_update_notion_action`<sup>Optional</sup> <a name="create_and_update_notion_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateNotionAction"></a>

```python
create_and_update_notion_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#create_and_update_notion_action QuicksightCustomPermissions#create_and_update_notion_action}.

---

##### `create_and_update_one_drive_action`<sup>Optional</sup> <a name="create_and_update_one_drive_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateOneDriveAction"></a>

```python
create_and_update_one_drive_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#create_and_update_one_drive_action QuicksightCustomPermissions#create_and_update_one_drive_action}.

---

##### `create_and_update_open_api_action`<sup>Optional</sup> <a name="create_and_update_open_api_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateOpenApiAction"></a>

```python
create_and_update_open_api_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#create_and_update_open_api_action QuicksightCustomPermissions#create_and_update_open_api_action}.

---

##### `create_and_update_pager_duty_action`<sup>Optional</sup> <a name="create_and_update_pager_duty_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdatePagerDutyAction"></a>

```python
create_and_update_pager_duty_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#create_and_update_pager_duty_action QuicksightCustomPermissions#create_and_update_pager_duty_action}.

---

##### `create_and_update_salesforce_action`<sup>Optional</sup> <a name="create_and_update_salesforce_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateSalesforceAction"></a>

```python
create_and_update_salesforce_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#create_and_update_salesforce_action QuicksightCustomPermissions#create_and_update_salesforce_action}.

---

##### `create_and_update_sand_p_global_energy_action`<sup>Optional</sup> <a name="create_and_update_sand_p_global_energy_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateSandPGlobalEnergyAction"></a>

```python
create_and_update_sand_p_global_energy_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#create_and_update_sand_p_global_energy_action QuicksightCustomPermissions#create_and_update_sand_p_global_energy_action}.

---

##### `create_and_update_sand_pgmi_action`<sup>Optional</sup> <a name="create_and_update_sand_pgmi_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateSandPgmiAction"></a>

```python
create_and_update_sand_pgmi_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#create_and_update_sand_pgmi_action QuicksightCustomPermissions#create_and_update_sand_pgmi_action}.

---

##### `create_and_update_sap_bill_of_material_action`<sup>Optional</sup> <a name="create_and_update_sap_bill_of_material_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateSapBillOfMaterialAction"></a>

```python
create_and_update_sap_bill_of_material_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#create_and_update_sap_bill_of_material_action QuicksightCustomPermissions#create_and_update_sap_bill_of_material_action}.

---

##### `create_and_update_sap_business_partner_action`<sup>Optional</sup> <a name="create_and_update_sap_business_partner_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateSapBusinessPartnerAction"></a>

```python
create_and_update_sap_business_partner_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#create_and_update_sap_business_partner_action QuicksightCustomPermissions#create_and_update_sap_business_partner_action}.

---

##### `create_and_update_sap_material_stock_action`<sup>Optional</sup> <a name="create_and_update_sap_material_stock_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateSapMaterialStockAction"></a>

```python
create_and_update_sap_material_stock_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#create_and_update_sap_material_stock_action QuicksightCustomPermissions#create_and_update_sap_material_stock_action}.

---

##### `create_and_update_sap_physical_inventory_action`<sup>Optional</sup> <a name="create_and_update_sap_physical_inventory_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateSapPhysicalInventoryAction"></a>

```python
create_and_update_sap_physical_inventory_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#create_and_update_sap_physical_inventory_action QuicksightCustomPermissions#create_and_update_sap_physical_inventory_action}.

---

##### `create_and_update_sap_product_master_data_action`<sup>Optional</sup> <a name="create_and_update_sap_product_master_data_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateSapProductMasterDataAction"></a>

```python
create_and_update_sap_product_master_data_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#create_and_update_sap_product_master_data_action QuicksightCustomPermissions#create_and_update_sap_product_master_data_action}.

---

##### `create_and_update_service_now_action`<sup>Optional</sup> <a name="create_and_update_service_now_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateServiceNowAction"></a>

```python
create_and_update_service_now_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#create_and_update_service_now_action QuicksightCustomPermissions#create_and_update_service_now_action}.

---

##### `create_and_update_share_point_action`<sup>Optional</sup> <a name="create_and_update_share_point_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateSharePointAction"></a>

```python
create_and_update_share_point_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#create_and_update_share_point_action QuicksightCustomPermissions#create_and_update_share_point_action}.

---

##### `create_and_update_slack_action`<sup>Optional</sup> <a name="create_and_update_slack_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateSlackAction"></a>

```python
create_and_update_slack_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#create_and_update_slack_action QuicksightCustomPermissions#create_and_update_slack_action}.

---

##### `create_and_update_smartsheet_action`<sup>Optional</sup> <a name="create_and_update_smartsheet_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateSmartsheetAction"></a>

```python
create_and_update_smartsheet_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#create_and_update_smartsheet_action QuicksightCustomPermissions#create_and_update_smartsheet_action}.

---

##### `create_and_update_textract_action`<sup>Optional</sup> <a name="create_and_update_textract_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateTextractAction"></a>

```python
create_and_update_textract_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#create_and_update_textract_action QuicksightCustomPermissions#create_and_update_textract_action}.

---

##### `create_and_update_themes`<sup>Optional</sup> <a name="create_and_update_themes" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateThemes"></a>

```python
create_and_update_themes: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#create_and_update_themes QuicksightCustomPermissions#create_and_update_themes}.

---

##### `create_and_update_threshold_alerts`<sup>Optional</sup> <a name="create_and_update_threshold_alerts" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateThresholdAlerts"></a>

```python
create_and_update_threshold_alerts: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#create_and_update_threshold_alerts QuicksightCustomPermissions#create_and_update_threshold_alerts}.

---

##### `create_and_update_zendesk_action`<sup>Optional</sup> <a name="create_and_update_zendesk_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createAndUpdateZendeskAction"></a>

```python
create_and_update_zendesk_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#create_and_update_zendesk_action QuicksightCustomPermissions#create_and_update_zendesk_action}.

---

##### `create_chat_agents`<sup>Optional</sup> <a name="create_chat_agents" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createChatAgents"></a>

```python
create_chat_agents: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#create_chat_agents QuicksightCustomPermissions#create_chat_agents}.

---

##### `create_dashboard_executive_summary_with_q`<sup>Optional</sup> <a name="create_dashboard_executive_summary_with_q" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createDashboardExecutiveSummaryWithQ"></a>

```python
create_dashboard_executive_summary_with_q: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#create_dashboard_executive_summary_with_q QuicksightCustomPermissions#create_dashboard_executive_summary_with_q}.

---

##### `create_shared_folders`<sup>Optional</sup> <a name="create_shared_folders" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createSharedFolders"></a>

```python
create_shared_folders: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#create_shared_folders QuicksightCustomPermissions#create_shared_folders}.

---

##### `create_spaces`<sup>Optional</sup> <a name="create_spaces" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createSpaces"></a>

```python
create_spaces: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#create_spaces QuicksightCustomPermissions#create_spaces}.

---

##### `create_spice_dataset`<sup>Optional</sup> <a name="create_spice_dataset" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.createSpiceDataset"></a>

```python
create_spice_dataset: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#create_spice_dataset QuicksightCustomPermissions#create_spice_dataset}.

---

##### `dashboard`<sup>Optional</sup> <a name="dashboard" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.dashboard"></a>

```python
dashboard: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#dashboard QuicksightCustomPermissions#dashboard}.

---

##### `edit_visual_with_q`<sup>Optional</sup> <a name="edit_visual_with_q" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.editVisualWithQ"></a>

```python
edit_visual_with_q: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#edit_visual_with_q QuicksightCustomPermissions#edit_visual_with_q}.

---

##### `export_to_csv`<sup>Optional</sup> <a name="export_to_csv" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.exportToCsv"></a>

```python
export_to_csv: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#export_to_csv QuicksightCustomPermissions#export_to_csv}.

---

##### `export_to_csv_in_scheduled_reports`<sup>Optional</sup> <a name="export_to_csv_in_scheduled_reports" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.exportToCsvInScheduledReports"></a>

```python
export_to_csv_in_scheduled_reports: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#export_to_csv_in_scheduled_reports QuicksightCustomPermissions#export_to_csv_in_scheduled_reports}.

---

##### `export_to_excel`<sup>Optional</sup> <a name="export_to_excel" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.exportToExcel"></a>

```python
export_to_excel: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#export_to_excel QuicksightCustomPermissions#export_to_excel}.

---

##### `export_to_excel_in_scheduled_reports`<sup>Optional</sup> <a name="export_to_excel_in_scheduled_reports" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.exportToExcelInScheduledReports"></a>

```python
export_to_excel_in_scheduled_reports: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#export_to_excel_in_scheduled_reports QuicksightCustomPermissions#export_to_excel_in_scheduled_reports}.

---

##### `export_to_pdf`<sup>Optional</sup> <a name="export_to_pdf" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.exportToPdf"></a>

```python
export_to_pdf: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#export_to_pdf QuicksightCustomPermissions#export_to_pdf}.

---

##### `export_to_pdf_in_scheduled_reports`<sup>Optional</sup> <a name="export_to_pdf_in_scheduled_reports" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.exportToPdfInScheduledReports"></a>

```python
export_to_pdf_in_scheduled_reports: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#export_to_pdf_in_scheduled_reports QuicksightCustomPermissions#export_to_pdf_in_scheduled_reports}.

---

##### `extension`<sup>Optional</sup> <a name="extension" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.extension"></a>

```python
extension: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#extension QuicksightCustomPermissions#extension}.

---

##### `fact_set_action`<sup>Optional</sup> <a name="fact_set_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.factSetAction"></a>

```python
fact_set_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#fact_set_action QuicksightCustomPermissions#fact_set_action}.

---

##### `flow`<sup>Optional</sup> <a name="flow" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.flow"></a>

```python
flow: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#flow QuicksightCustomPermissions#flow}.

---

##### `generic_http_action`<sup>Optional</sup> <a name="generic_http_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.genericHttpAction"></a>

```python
generic_http_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#generic_http_action QuicksightCustomPermissions#generic_http_action}.

---

##### `github_action`<sup>Optional</sup> <a name="github_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.githubAction"></a>

```python
github_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#github_action QuicksightCustomPermissions#github_action}.

---

##### `google_calendar_action`<sup>Optional</sup> <a name="google_calendar_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.googleCalendarAction"></a>

```python
google_calendar_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#google_calendar_action QuicksightCustomPermissions#google_calendar_action}.

---

##### `hubspot_action`<sup>Optional</sup> <a name="hubspot_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.hubspotAction"></a>

```python
hubspot_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#hubspot_action QuicksightCustomPermissions#hubspot_action}.

---

##### `hugging_face_action`<sup>Optional</sup> <a name="hugging_face_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.huggingFaceAction"></a>

```python
hugging_face_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#hugging_face_action QuicksightCustomPermissions#hugging_face_action}.

---

##### `include_content_in_scheduled_reports_email`<sup>Optional</sup> <a name="include_content_in_scheduled_reports_email" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.includeContentInScheduledReportsEmail"></a>

```python
include_content_in_scheduled_reports_email: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#include_content_in_scheduled_reports_email QuicksightCustomPermissions#include_content_in_scheduled_reports_email}.

---

##### `intercom_action`<sup>Optional</sup> <a name="intercom_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.intercomAction"></a>

```python
intercom_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#intercom_action QuicksightCustomPermissions#intercom_action}.

---

##### `invoke_apps_ai_inference`<sup>Optional</sup> <a name="invoke_apps_ai_inference" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.invokeAppsAiInference"></a>

```python
invoke_apps_ai_inference: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#invoke_apps_ai_inference QuicksightCustomPermissions#invoke_apps_ai_inference}.

---

##### `jira_action`<sup>Optional</sup> <a name="jira_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.jiraAction"></a>

```python
jira_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#jira_action QuicksightCustomPermissions#jira_action}.

---

##### `knowledge_base`<sup>Optional</sup> <a name="knowledge_base" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.knowledgeBase"></a>

```python
knowledge_base: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#knowledge_base QuicksightCustomPermissions#knowledge_base}.

---

##### `linear_action`<sup>Optional</sup> <a name="linear_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.linearAction"></a>

```python
linear_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#linear_action QuicksightCustomPermissions#linear_action}.

---

##### `manage_shared_folders`<sup>Optional</sup> <a name="manage_shared_folders" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.manageSharedFolders"></a>

```python
manage_shared_folders: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#manage_shared_folders QuicksightCustomPermissions#manage_shared_folders}.

---

##### `mcp_action`<sup>Optional</sup> <a name="mcp_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.mcpAction"></a>

```python
mcp_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#mcp_action QuicksightCustomPermissions#mcp_action}.

---

##### `monday_action`<sup>Optional</sup> <a name="monday_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.mondayAction"></a>

```python
monday_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#monday_action QuicksightCustomPermissions#monday_action}.

---

##### `ms_exchange_action`<sup>Optional</sup> <a name="ms_exchange_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.msExchangeAction"></a>

```python
ms_exchange_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#ms_exchange_action QuicksightCustomPermissions#ms_exchange_action}.

---

##### `ms_teams_action`<sup>Optional</sup> <a name="ms_teams_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.msTeamsAction"></a>

```python
ms_teams_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#ms_teams_action QuicksightCustomPermissions#ms_teams_action}.

---

##### `new_relic_action`<sup>Optional</sup> <a name="new_relic_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.newRelicAction"></a>

```python
new_relic_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#new_relic_action QuicksightCustomPermissions#new_relic_action}.

---

##### `notion_action`<sup>Optional</sup> <a name="notion_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.notionAction"></a>

```python
notion_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#notion_action QuicksightCustomPermissions#notion_action}.

---

##### `one_drive_action`<sup>Optional</sup> <a name="one_drive_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.oneDriveAction"></a>

```python
one_drive_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#one_drive_action QuicksightCustomPermissions#one_drive_action}.

---

##### `open_api_action`<sup>Optional</sup> <a name="open_api_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.openApiAction"></a>

```python
open_api_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#open_api_action QuicksightCustomPermissions#open_api_action}.

---

##### `pager_duty_action`<sup>Optional</sup> <a name="pager_duty_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.pagerDutyAction"></a>

```python
pager_duty_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#pager_duty_action QuicksightCustomPermissions#pager_duty_action}.

---

##### `perform_flow_ui_task`<sup>Optional</sup> <a name="perform_flow_ui_task" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.performFlowUiTask"></a>

```python
perform_flow_ui_task: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#perform_flow_ui_task QuicksightCustomPermissions#perform_flow_ui_task}.

---

##### `print_reports`<sup>Optional</sup> <a name="print_reports" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.printReports"></a>

```python
print_reports: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#print_reports QuicksightCustomPermissions#print_reports}.

---

##### `publish_without_approval`<sup>Optional</sup> <a name="publish_without_approval" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.publishWithoutApproval"></a>

```python
publish_without_approval: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#publish_without_approval QuicksightCustomPermissions#publish_without_approval}.

---

##### `rename_shared_folders`<sup>Optional</sup> <a name="rename_shared_folders" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.renameSharedFolders"></a>

```python
rename_shared_folders: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#rename_shared_folders QuicksightCustomPermissions#rename_shared_folders}.

---

##### `research`<sup>Optional</sup> <a name="research" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.research"></a>

```python
research: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#research QuicksightCustomPermissions#research}.

---

##### `salesforce_action`<sup>Optional</sup> <a name="salesforce_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.salesforceAction"></a>

```python
salesforce_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#salesforce_action QuicksightCustomPermissions#salesforce_action}.

---

##### `sand_p_global_energy_action`<sup>Optional</sup> <a name="sand_p_global_energy_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.sandPGlobalEnergyAction"></a>

```python
sand_p_global_energy_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#sand_p_global_energy_action QuicksightCustomPermissions#sand_p_global_energy_action}.

---

##### `sand_pgmi_action`<sup>Optional</sup> <a name="sand_pgmi_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.sandPgmiAction"></a>

```python
sand_pgmi_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#sand_pgmi_action QuicksightCustomPermissions#sand_pgmi_action}.

---

##### `sap_bill_of_material_action`<sup>Optional</sup> <a name="sap_bill_of_material_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.sapBillOfMaterialAction"></a>

```python
sap_bill_of_material_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#sap_bill_of_material_action QuicksightCustomPermissions#sap_bill_of_material_action}.

---

##### `sap_business_partner_action`<sup>Optional</sup> <a name="sap_business_partner_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.sapBusinessPartnerAction"></a>

```python
sap_business_partner_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#sap_business_partner_action QuicksightCustomPermissions#sap_business_partner_action}.

---

##### `sap_material_stock_action`<sup>Optional</sup> <a name="sap_material_stock_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.sapMaterialStockAction"></a>

```python
sap_material_stock_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#sap_material_stock_action QuicksightCustomPermissions#sap_material_stock_action}.

---

##### `sap_physical_inventory_action`<sup>Optional</sup> <a name="sap_physical_inventory_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.sapPhysicalInventoryAction"></a>

```python
sap_physical_inventory_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#sap_physical_inventory_action QuicksightCustomPermissions#sap_physical_inventory_action}.

---

##### `sap_product_master_data_action`<sup>Optional</sup> <a name="sap_product_master_data_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.sapProductMasterDataAction"></a>

```python
sap_product_master_data_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#sap_product_master_data_action QuicksightCustomPermissions#sap_product_master_data_action}.

---

##### `service_now_action`<sup>Optional</sup> <a name="service_now_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.serviceNowAction"></a>

```python
service_now_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#service_now_action QuicksightCustomPermissions#service_now_action}.

---

##### `share_amazon_bedrock_ars_action`<sup>Optional</sup> <a name="share_amazon_bedrock_ars_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareAmazonBedrockArsAction"></a>

```python
share_amazon_bedrock_ars_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#share_amazon_bedrock_ars_action QuicksightCustomPermissions#share_amazon_bedrock_ars_action}.

---

##### `share_amazon_bedrock_fs_action`<sup>Optional</sup> <a name="share_amazon_bedrock_fs_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareAmazonBedrockFsAction"></a>

```python
share_amazon_bedrock_fs_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#share_amazon_bedrock_fs_action QuicksightCustomPermissions#share_amazon_bedrock_fs_action}.

---

##### `share_amazon_bedrock_krs_action`<sup>Optional</sup> <a name="share_amazon_bedrock_krs_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareAmazonBedrockKrsAction"></a>

```python
share_amazon_bedrock_krs_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#share_amazon_bedrock_krs_action QuicksightCustomPermissions#share_amazon_bedrock_krs_action}.

---

##### `share_amazon_s_three_action`<sup>Optional</sup> <a name="share_amazon_s_three_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareAmazonSThreeAction"></a>

```python
share_amazon_s_three_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#share_amazon_s_three_action QuicksightCustomPermissions#share_amazon_s_three_action}.

---

##### `share_analyses`<sup>Optional</sup> <a name="share_analyses" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareAnalyses"></a>

```python
share_analyses: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#share_analyses QuicksightCustomPermissions#share_analyses}.

---

##### `share_apps`<sup>Optional</sup> <a name="share_apps" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareApps"></a>

```python
share_apps: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#share_apps QuicksightCustomPermissions#share_apps}.

---

##### `share_asana_action`<sup>Optional</sup> <a name="share_asana_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareAsanaAction"></a>

```python
share_asana_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#share_asana_action QuicksightCustomPermissions#share_asana_action}.

---

##### `share_bamboo_hr_action`<sup>Optional</sup> <a name="share_bamboo_hr_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareBambooHrAction"></a>

```python
share_bamboo_hr_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#share_bamboo_hr_action QuicksightCustomPermissions#share_bamboo_hr_action}.

---

##### `share_box_agent_action`<sup>Optional</sup> <a name="share_box_agent_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareBoxAgentAction"></a>

```python
share_box_agent_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#share_box_agent_action QuicksightCustomPermissions#share_box_agent_action}.

---

##### `share_canva_agent_action`<sup>Optional</sup> <a name="share_canva_agent_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareCanvaAgentAction"></a>

```python
share_canva_agent_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#share_canva_agent_action QuicksightCustomPermissions#share_canva_agent_action}.

---

##### `share_chat_agents`<sup>Optional</sup> <a name="share_chat_agents" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareChatAgents"></a>

```python
share_chat_agents: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#share_chat_agents QuicksightCustomPermissions#share_chat_agents}.

---

##### `share_comprehend_action`<sup>Optional</sup> <a name="share_comprehend_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareComprehendAction"></a>

```python
share_comprehend_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#share_comprehend_action QuicksightCustomPermissions#share_comprehend_action}.

---

##### `share_comprehend_medical_action`<sup>Optional</sup> <a name="share_comprehend_medical_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareComprehendMedicalAction"></a>

```python
share_comprehend_medical_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#share_comprehend_medical_action QuicksightCustomPermissions#share_comprehend_medical_action}.

---

##### `share_confluence_action`<sup>Optional</sup> <a name="share_confluence_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareConfluenceAction"></a>

```python
share_confluence_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#share_confluence_action QuicksightCustomPermissions#share_confluence_action}.

---

##### `share_dashboards`<sup>Optional</sup> <a name="share_dashboards" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareDashboards"></a>

```python
share_dashboards: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#share_dashboards QuicksightCustomPermissions#share_dashboards}.

---

##### `share_datasets`<sup>Optional</sup> <a name="share_datasets" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareDatasets"></a>

```python
share_datasets: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#share_datasets QuicksightCustomPermissions#share_datasets}.

---

##### `share_data_sources`<sup>Optional</sup> <a name="share_data_sources" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareDataSources"></a>

```python
share_data_sources: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#share_data_sources QuicksightCustomPermissions#share_data_sources}.

---

##### `share_fact_set_action`<sup>Optional</sup> <a name="share_fact_set_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareFactSetAction"></a>

```python
share_fact_set_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#share_fact_set_action QuicksightCustomPermissions#share_fact_set_action}.

---

##### `share_generic_http_action`<sup>Optional</sup> <a name="share_generic_http_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareGenericHttpAction"></a>

```python
share_generic_http_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#share_generic_http_action QuicksightCustomPermissions#share_generic_http_action}.

---

##### `share_github_action`<sup>Optional</sup> <a name="share_github_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareGithubAction"></a>

```python
share_github_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#share_github_action QuicksightCustomPermissions#share_github_action}.

---

##### `share_google_calendar_action`<sup>Optional</sup> <a name="share_google_calendar_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareGoogleCalendarAction"></a>

```python
share_google_calendar_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#share_google_calendar_action QuicksightCustomPermissions#share_google_calendar_action}.

---

##### `share_hubspot_action`<sup>Optional</sup> <a name="share_hubspot_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareHubspotAction"></a>

```python
share_hubspot_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#share_hubspot_action QuicksightCustomPermissions#share_hubspot_action}.

---

##### `share_hugging_face_action`<sup>Optional</sup> <a name="share_hugging_face_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareHuggingFaceAction"></a>

```python
share_hugging_face_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#share_hugging_face_action QuicksightCustomPermissions#share_hugging_face_action}.

---

##### `share_intercom_action`<sup>Optional</sup> <a name="share_intercom_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareIntercomAction"></a>

```python
share_intercom_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#share_intercom_action QuicksightCustomPermissions#share_intercom_action}.

---

##### `share_jira_action`<sup>Optional</sup> <a name="share_jira_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareJiraAction"></a>

```python
share_jira_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#share_jira_action QuicksightCustomPermissions#share_jira_action}.

---

##### `share_knowledge_bases`<sup>Optional</sup> <a name="share_knowledge_bases" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareKnowledgeBases"></a>

```python
share_knowledge_bases: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#share_knowledge_bases QuicksightCustomPermissions#share_knowledge_bases}.

---

##### `share_linear_action`<sup>Optional</sup> <a name="share_linear_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareLinearAction"></a>

```python
share_linear_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#share_linear_action QuicksightCustomPermissions#share_linear_action}.

---

##### `share_mcp_action`<sup>Optional</sup> <a name="share_mcp_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareMcpAction"></a>

```python
share_mcp_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#share_mcp_action QuicksightCustomPermissions#share_mcp_action}.

---

##### `share_monday_action`<sup>Optional</sup> <a name="share_monday_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareMondayAction"></a>

```python
share_monday_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#share_monday_action QuicksightCustomPermissions#share_monday_action}.

---

##### `share_ms_exchange_action`<sup>Optional</sup> <a name="share_ms_exchange_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareMsExchangeAction"></a>

```python
share_ms_exchange_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#share_ms_exchange_action QuicksightCustomPermissions#share_ms_exchange_action}.

---

##### `share_ms_teams_action`<sup>Optional</sup> <a name="share_ms_teams_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareMsTeamsAction"></a>

```python
share_ms_teams_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#share_ms_teams_action QuicksightCustomPermissions#share_ms_teams_action}.

---

##### `share_new_relic_action`<sup>Optional</sup> <a name="share_new_relic_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareNewRelicAction"></a>

```python
share_new_relic_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#share_new_relic_action QuicksightCustomPermissions#share_new_relic_action}.

---

##### `share_notion_action`<sup>Optional</sup> <a name="share_notion_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareNotionAction"></a>

```python
share_notion_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#share_notion_action QuicksightCustomPermissions#share_notion_action}.

---

##### `share_one_drive_action`<sup>Optional</sup> <a name="share_one_drive_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareOneDriveAction"></a>

```python
share_one_drive_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#share_one_drive_action QuicksightCustomPermissions#share_one_drive_action}.

---

##### `share_open_api_action`<sup>Optional</sup> <a name="share_open_api_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareOpenApiAction"></a>

```python
share_open_api_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#share_open_api_action QuicksightCustomPermissions#share_open_api_action}.

---

##### `share_pager_duty_action`<sup>Optional</sup> <a name="share_pager_duty_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.sharePagerDutyAction"></a>

```python
share_pager_duty_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#share_pager_duty_action QuicksightCustomPermissions#share_pager_duty_action}.

---

##### `share_point_action`<sup>Optional</sup> <a name="share_point_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.sharePointAction"></a>

```python
share_point_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#share_point_action QuicksightCustomPermissions#share_point_action}.

---

##### `share_salesforce_action`<sup>Optional</sup> <a name="share_salesforce_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareSalesforceAction"></a>

```python
share_salesforce_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#share_salesforce_action QuicksightCustomPermissions#share_salesforce_action}.

---

##### `share_sand_p_global_energy_action`<sup>Optional</sup> <a name="share_sand_p_global_energy_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareSandPGlobalEnergyAction"></a>

```python
share_sand_p_global_energy_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#share_sand_p_global_energy_action QuicksightCustomPermissions#share_sand_p_global_energy_action}.

---

##### `share_sand_pgmi_action`<sup>Optional</sup> <a name="share_sand_pgmi_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareSandPgmiAction"></a>

```python
share_sand_pgmi_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#share_sand_pgmi_action QuicksightCustomPermissions#share_sand_pgmi_action}.

---

##### `share_sap_bill_of_material_action`<sup>Optional</sup> <a name="share_sap_bill_of_material_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareSapBillOfMaterialAction"></a>

```python
share_sap_bill_of_material_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#share_sap_bill_of_material_action QuicksightCustomPermissions#share_sap_bill_of_material_action}.

---

##### `share_sap_business_partner_action`<sup>Optional</sup> <a name="share_sap_business_partner_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareSapBusinessPartnerAction"></a>

```python
share_sap_business_partner_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#share_sap_business_partner_action QuicksightCustomPermissions#share_sap_business_partner_action}.

---

##### `share_sap_material_stock_action`<sup>Optional</sup> <a name="share_sap_material_stock_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareSapMaterialStockAction"></a>

```python
share_sap_material_stock_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#share_sap_material_stock_action QuicksightCustomPermissions#share_sap_material_stock_action}.

---

##### `share_sap_physical_inventory_action`<sup>Optional</sup> <a name="share_sap_physical_inventory_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareSapPhysicalInventoryAction"></a>

```python
share_sap_physical_inventory_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#share_sap_physical_inventory_action QuicksightCustomPermissions#share_sap_physical_inventory_action}.

---

##### `share_sap_product_master_data_action`<sup>Optional</sup> <a name="share_sap_product_master_data_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareSapProductMasterDataAction"></a>

```python
share_sap_product_master_data_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#share_sap_product_master_data_action QuicksightCustomPermissions#share_sap_product_master_data_action}.

---

##### `share_service_now_action`<sup>Optional</sup> <a name="share_service_now_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareServiceNowAction"></a>

```python
share_service_now_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#share_service_now_action QuicksightCustomPermissions#share_service_now_action}.

---

##### `share_share_point_action`<sup>Optional</sup> <a name="share_share_point_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareSharePointAction"></a>

```python
share_share_point_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#share_share_point_action QuicksightCustomPermissions#share_share_point_action}.

---

##### `share_slack_action`<sup>Optional</sup> <a name="share_slack_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareSlackAction"></a>

```python
share_slack_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#share_slack_action QuicksightCustomPermissions#share_slack_action}.

---

##### `share_smartsheet_action`<sup>Optional</sup> <a name="share_smartsheet_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareSmartsheetAction"></a>

```python
share_smartsheet_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#share_smartsheet_action QuicksightCustomPermissions#share_smartsheet_action}.

---

##### `share_spaces`<sup>Optional</sup> <a name="share_spaces" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareSpaces"></a>

```python
share_spaces: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#share_spaces QuicksightCustomPermissions#share_spaces}.

---

##### `share_textract_action`<sup>Optional</sup> <a name="share_textract_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareTextractAction"></a>

```python
share_textract_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#share_textract_action QuicksightCustomPermissions#share_textract_action}.

---

##### `share_zendesk_action`<sup>Optional</sup> <a name="share_zendesk_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.shareZendeskAction"></a>

```python
share_zendesk_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#share_zendesk_action QuicksightCustomPermissions#share_zendesk_action}.

---

##### `slack_action`<sup>Optional</sup> <a name="slack_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.slackAction"></a>

```python
slack_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#slack_action QuicksightCustomPermissions#slack_action}.

---

##### `smartsheet_action`<sup>Optional</sup> <a name="smartsheet_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.smartsheetAction"></a>

```python
smartsheet_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#smartsheet_action QuicksightCustomPermissions#smartsheet_action}.

---

##### `space`<sup>Optional</sup> <a name="space" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.space"></a>

```python
space: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#space QuicksightCustomPermissions#space}.

---

##### `subscribe_dashboard_email_reports`<sup>Optional</sup> <a name="subscribe_dashboard_email_reports" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.subscribeDashboardEmailReports"></a>

```python
subscribe_dashboard_email_reports: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#subscribe_dashboard_email_reports QuicksightCustomPermissions#subscribe_dashboard_email_reports}.

---

##### `textract_action`<sup>Optional</sup> <a name="textract_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.textractAction"></a>

```python
textract_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#textract_action QuicksightCustomPermissions#textract_action}.

---

##### `topic`<sup>Optional</sup> <a name="topic" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.topic"></a>

```python
topic: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#topic QuicksightCustomPermissions#topic}.

---

##### `use_agent_web_search`<sup>Optional</sup> <a name="use_agent_web_search" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useAgentWebSearch"></a>

```python
use_agent_web_search: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#use_agent_web_search QuicksightCustomPermissions#use_agent_web_search}.

---

##### `use_amazon_bedrock_ars_action`<sup>Optional</sup> <a name="use_amazon_bedrock_ars_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useAmazonBedrockArsAction"></a>

```python
use_amazon_bedrock_ars_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#use_amazon_bedrock_ars_action QuicksightCustomPermissions#use_amazon_bedrock_ars_action}.

---

##### `use_amazon_bedrock_fs_action`<sup>Optional</sup> <a name="use_amazon_bedrock_fs_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useAmazonBedrockFsAction"></a>

```python
use_amazon_bedrock_fs_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#use_amazon_bedrock_fs_action QuicksightCustomPermissions#use_amazon_bedrock_fs_action}.

---

##### `use_amazon_bedrock_krs_action`<sup>Optional</sup> <a name="use_amazon_bedrock_krs_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useAmazonBedrockKrsAction"></a>

```python
use_amazon_bedrock_krs_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#use_amazon_bedrock_krs_action QuicksightCustomPermissions#use_amazon_bedrock_krs_action}.

---

##### `use_amazon_s_three_action`<sup>Optional</sup> <a name="use_amazon_s_three_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useAmazonSThreeAction"></a>

```python
use_amazon_s_three_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#use_amazon_s_three_action QuicksightCustomPermissions#use_amazon_s_three_action}.

---

##### `use_asana_action`<sup>Optional</sup> <a name="use_asana_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useAsanaAction"></a>

```python
use_asana_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#use_asana_action QuicksightCustomPermissions#use_asana_action}.

---

##### `use_bamboo_hr_action`<sup>Optional</sup> <a name="use_bamboo_hr_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useBambooHrAction"></a>

```python
use_bamboo_hr_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#use_bamboo_hr_action QuicksightCustomPermissions#use_bamboo_hr_action}.

---

##### `use_bedrock_models`<sup>Optional</sup> <a name="use_bedrock_models" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useBedrockModels"></a>

```python
use_bedrock_models: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#use_bedrock_models QuicksightCustomPermissions#use_bedrock_models}.

---

##### `use_box_agent_action`<sup>Optional</sup> <a name="use_box_agent_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useBoxAgentAction"></a>

```python
use_box_agent_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#use_box_agent_action QuicksightCustomPermissions#use_box_agent_action}.

---

##### `use_canva_agent_action`<sup>Optional</sup> <a name="use_canva_agent_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useCanvaAgentAction"></a>

```python
use_canva_agent_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#use_canva_agent_action QuicksightCustomPermissions#use_canva_agent_action}.

---

##### `use_comprehend_action`<sup>Optional</sup> <a name="use_comprehend_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useComprehendAction"></a>

```python
use_comprehend_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#use_comprehend_action QuicksightCustomPermissions#use_comprehend_action}.

---

##### `use_comprehend_medical_action`<sup>Optional</sup> <a name="use_comprehend_medical_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useComprehendMedicalAction"></a>

```python
use_comprehend_medical_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#use_comprehend_medical_action QuicksightCustomPermissions#use_comprehend_medical_action}.

---

##### `use_confluence_action`<sup>Optional</sup> <a name="use_confluence_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useConfluenceAction"></a>

```python
use_confluence_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#use_confluence_action QuicksightCustomPermissions#use_confluence_action}.

---

##### `use_fact_set_action`<sup>Optional</sup> <a name="use_fact_set_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useFactSetAction"></a>

```python
use_fact_set_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#use_fact_set_action QuicksightCustomPermissions#use_fact_set_action}.

---

##### `use_generic_http_action`<sup>Optional</sup> <a name="use_generic_http_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useGenericHttpAction"></a>

```python
use_generic_http_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#use_generic_http_action QuicksightCustomPermissions#use_generic_http_action}.

---

##### `use_github_action`<sup>Optional</sup> <a name="use_github_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useGithubAction"></a>

```python
use_github_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#use_github_action QuicksightCustomPermissions#use_github_action}.

---

##### `use_google_calendar_action`<sup>Optional</sup> <a name="use_google_calendar_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useGoogleCalendarAction"></a>

```python
use_google_calendar_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#use_google_calendar_action QuicksightCustomPermissions#use_google_calendar_action}.

---

##### `use_hubspot_action`<sup>Optional</sup> <a name="use_hubspot_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useHubspotAction"></a>

```python
use_hubspot_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#use_hubspot_action QuicksightCustomPermissions#use_hubspot_action}.

---

##### `use_hugging_face_action`<sup>Optional</sup> <a name="use_hugging_face_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useHuggingFaceAction"></a>

```python
use_hugging_face_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#use_hugging_face_action QuicksightCustomPermissions#use_hugging_face_action}.

---

##### `use_intercom_action`<sup>Optional</sup> <a name="use_intercom_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useIntercomAction"></a>

```python
use_intercom_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#use_intercom_action QuicksightCustomPermissions#use_intercom_action}.

---

##### `use_jira_action`<sup>Optional</sup> <a name="use_jira_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useJiraAction"></a>

```python
use_jira_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#use_jira_action QuicksightCustomPermissions#use_jira_action}.

---

##### `use_linear_action`<sup>Optional</sup> <a name="use_linear_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useLinearAction"></a>

```python
use_linear_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#use_linear_action QuicksightCustomPermissions#use_linear_action}.

---

##### `use_mcp_action`<sup>Optional</sup> <a name="use_mcp_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useMcpAction"></a>

```python
use_mcp_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#use_mcp_action QuicksightCustomPermissions#use_mcp_action}.

---

##### `use_monday_action`<sup>Optional</sup> <a name="use_monday_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useMondayAction"></a>

```python
use_monday_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#use_monday_action QuicksightCustomPermissions#use_monday_action}.

---

##### `use_ms_exchange_action`<sup>Optional</sup> <a name="use_ms_exchange_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useMsExchangeAction"></a>

```python
use_ms_exchange_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#use_ms_exchange_action QuicksightCustomPermissions#use_ms_exchange_action}.

---

##### `use_ms_teams_action`<sup>Optional</sup> <a name="use_ms_teams_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useMsTeamsAction"></a>

```python
use_ms_teams_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#use_ms_teams_action QuicksightCustomPermissions#use_ms_teams_action}.

---

##### `use_new_relic_action`<sup>Optional</sup> <a name="use_new_relic_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useNewRelicAction"></a>

```python
use_new_relic_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#use_new_relic_action QuicksightCustomPermissions#use_new_relic_action}.

---

##### `use_notion_action`<sup>Optional</sup> <a name="use_notion_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useNotionAction"></a>

```python
use_notion_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#use_notion_action QuicksightCustomPermissions#use_notion_action}.

---

##### `use_one_drive_action`<sup>Optional</sup> <a name="use_one_drive_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useOneDriveAction"></a>

```python
use_one_drive_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#use_one_drive_action QuicksightCustomPermissions#use_one_drive_action}.

---

##### `use_open_api_action`<sup>Optional</sup> <a name="use_open_api_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useOpenApiAction"></a>

```python
use_open_api_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#use_open_api_action QuicksightCustomPermissions#use_open_api_action}.

---

##### `use_pager_duty_action`<sup>Optional</sup> <a name="use_pager_duty_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.usePagerDutyAction"></a>

```python
use_pager_duty_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#use_pager_duty_action QuicksightCustomPermissions#use_pager_duty_action}.

---

##### `use_salesforce_action`<sup>Optional</sup> <a name="use_salesforce_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useSalesforceAction"></a>

```python
use_salesforce_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#use_salesforce_action QuicksightCustomPermissions#use_salesforce_action}.

---

##### `use_sand_p_global_energy_action`<sup>Optional</sup> <a name="use_sand_p_global_energy_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useSandPGlobalEnergyAction"></a>

```python
use_sand_p_global_energy_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#use_sand_p_global_energy_action QuicksightCustomPermissions#use_sand_p_global_energy_action}.

---

##### `use_sand_pgmi_action`<sup>Optional</sup> <a name="use_sand_pgmi_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useSandPgmiAction"></a>

```python
use_sand_pgmi_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#use_sand_pgmi_action QuicksightCustomPermissions#use_sand_pgmi_action}.

---

##### `use_sap_bill_of_material_action`<sup>Optional</sup> <a name="use_sap_bill_of_material_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useSapBillOfMaterialAction"></a>

```python
use_sap_bill_of_material_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#use_sap_bill_of_material_action QuicksightCustomPermissions#use_sap_bill_of_material_action}.

---

##### `use_sap_business_partner_action`<sup>Optional</sup> <a name="use_sap_business_partner_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useSapBusinessPartnerAction"></a>

```python
use_sap_business_partner_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#use_sap_business_partner_action QuicksightCustomPermissions#use_sap_business_partner_action}.

---

##### `use_sap_material_stock_action`<sup>Optional</sup> <a name="use_sap_material_stock_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useSapMaterialStockAction"></a>

```python
use_sap_material_stock_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#use_sap_material_stock_action QuicksightCustomPermissions#use_sap_material_stock_action}.

---

##### `use_sap_physical_inventory_action`<sup>Optional</sup> <a name="use_sap_physical_inventory_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useSapPhysicalInventoryAction"></a>

```python
use_sap_physical_inventory_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#use_sap_physical_inventory_action QuicksightCustomPermissions#use_sap_physical_inventory_action}.

---

##### `use_sap_product_master_data_action`<sup>Optional</sup> <a name="use_sap_product_master_data_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useSapProductMasterDataAction"></a>

```python
use_sap_product_master_data_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#use_sap_product_master_data_action QuicksightCustomPermissions#use_sap_product_master_data_action}.

---

##### `use_service_now_action`<sup>Optional</sup> <a name="use_service_now_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useServiceNowAction"></a>

```python
use_service_now_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#use_service_now_action QuicksightCustomPermissions#use_service_now_action}.

---

##### `use_share_point_action`<sup>Optional</sup> <a name="use_share_point_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useSharePointAction"></a>

```python
use_share_point_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#use_share_point_action QuicksightCustomPermissions#use_share_point_action}.

---

##### `use_slack_action`<sup>Optional</sup> <a name="use_slack_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useSlackAction"></a>

```python
use_slack_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#use_slack_action QuicksightCustomPermissions#use_slack_action}.

---

##### `use_smartsheet_action`<sup>Optional</sup> <a name="use_smartsheet_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useSmartsheetAction"></a>

```python
use_smartsheet_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#use_smartsheet_action QuicksightCustomPermissions#use_smartsheet_action}.

---

##### `use_textract_action`<sup>Optional</sup> <a name="use_textract_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useTextractAction"></a>

```python
use_textract_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#use_textract_action QuicksightCustomPermissions#use_textract_action}.

---

##### `use_zendesk_action`<sup>Optional</sup> <a name="use_zendesk_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.useZendeskAction"></a>

```python
use_zendesk_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#use_zendesk_action QuicksightCustomPermissions#use_zendesk_action}.

---

##### `view_account_spice_capacity`<sup>Optional</sup> <a name="view_account_spice_capacity" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.viewAccountSpiceCapacity"></a>

```python
view_account_spice_capacity: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#view_account_spice_capacity QuicksightCustomPermissions#view_account_spice_capacity}.

---

##### `zendesk_action`<sup>Optional</sup> <a name="zendesk_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities.property.zendeskAction"></a>

```python
zendesk_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#zendesk_action QuicksightCustomPermissions#zendesk_action}.

---

### QuicksightCustomPermissionsConfig <a name="QuicksightCustomPermissionsConfig" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsConfig.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_custom_permissions

quicksightCustomPermissions.QuicksightCustomPermissionsConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  aws_account_id: str,
  custom_permissions_name: str,
  capabilities: QuicksightCustomPermissionsCapabilities = None,
  tags: IResolvable | typing.List[QuicksightCustomPermissionsTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsConfig.property.awsAccountId">aws_account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#aws_account_id QuicksightCustomPermissions#aws_account_id}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsConfig.property.customPermissionsName">custom_permissions_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#custom_permissions_name QuicksightCustomPermissions#custom_permissions_name}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsConfig.property.capabilities">capabilities</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities">QuicksightCustomPermissionsCapabilities</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#capabilities QuicksightCustomPermissions#capabilities}. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTags">QuicksightCustomPermissionsTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#tags QuicksightCustomPermissions#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `aws_account_id`<sup>Required</sup> <a name="aws_account_id" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsConfig.property.awsAccountId"></a>

```python
aws_account_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#aws_account_id QuicksightCustomPermissions#aws_account_id}.

---

##### `custom_permissions_name`<sup>Required</sup> <a name="custom_permissions_name" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsConfig.property.customPermissionsName"></a>

```python
custom_permissions_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#custom_permissions_name QuicksightCustomPermissions#custom_permissions_name}.

---

##### `capabilities`<sup>Optional</sup> <a name="capabilities" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsConfig.property.capabilities"></a>

```python
capabilities: QuicksightCustomPermissionsCapabilities
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities">QuicksightCustomPermissionsCapabilities</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#capabilities QuicksightCustomPermissions#capabilities}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[QuicksightCustomPermissionsTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTags">QuicksightCustomPermissionsTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#tags QuicksightCustomPermissions#tags}.

---

### QuicksightCustomPermissionsTags <a name="QuicksightCustomPermissionsTags" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTags.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_custom_permissions

quicksightCustomPermissions.QuicksightCustomPermissionsTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTags.property.key">key</a></code> | <code>str</code> | <p>Tag key.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTags.property.value">value</a></code> | <code>str</code> | <p>Tag value.</p>. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTags.property.key"></a>

```python
key: str
```

- *Type:* str

<p>Tag key.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#key QuicksightCustomPermissions#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTags.property.value"></a>

```python
value: str
```

- *Type:* str

<p>Tag value.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/quicksight_custom_permissions#value QuicksightCustomPermissions#value}

---

## Classes <a name="Classes" id="Classes"></a>

### QuicksightCustomPermissionsCapabilitiesOutputReference <a name="QuicksightCustomPermissionsCapabilitiesOutputReference" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_custom_permissions

quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetAccessAppsNativeDataStore">reset_access_apps_native_data_store</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetAction">reset_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetAddOrRunAnomalyDetectionForAnalyses">reset_add_or_run_anomaly_detection_for_analyses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetAmazonBedrockArsAction">reset_amazon_bedrock_ars_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetAmazonBedrockFsAction">reset_amazon_bedrock_fs_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetAmazonBedrockKrsAction">reset_amazon_bedrock_krs_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetAmazonSThreeAction">reset_amazon_s_three_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetAnalysis">reset_analysis</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetApproveFlowShareRequests">reset_approve_flow_share_requests</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetApps">reset_apps</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetAsanaAction">reset_asana_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetAutomate">reset_automate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetBambooHrAction">reset_bamboo_hr_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetBoxAgentAction">reset_box_agent_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetBuildCalculatedFieldWithQ">reset_build_calculated_field_with_q</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCanvaAgentAction">reset_canva_agent_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetChatAgent">reset_chat_agent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetComprehendAction">reset_comprehend_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetComprehendMedicalAction">reset_comprehend_medical_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetConfluenceAction">reset_confluence_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateAmazonBedrockArsAction">reset_create_and_update_amazon_bedrock_ars_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateAmazonBedrockFsAction">reset_create_and_update_amazon_bedrock_fs_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateAmazonBedrockKrsAction">reset_create_and_update_amazon_bedrock_krs_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateAmazonSThreeAction">reset_create_and_update_amazon_s_three_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateApps">reset_create_and_update_apps</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateAsanaAction">reset_create_and_update_asana_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateBambooHrAction">reset_create_and_update_bamboo_hr_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateBoxAgentAction">reset_create_and_update_box_agent_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateCanvaAgentAction">reset_create_and_update_canva_agent_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateComprehendAction">reset_create_and_update_comprehend_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateComprehendMedicalAction">reset_create_and_update_comprehend_medical_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateConfluenceAction">reset_create_and_update_confluence_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateDashboardEmailReports">reset_create_and_update_dashboard_email_reports</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateDatasets">reset_create_and_update_datasets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateDataSources">reset_create_and_update_data_sources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateFactSetAction">reset_create_and_update_fact_set_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateGenericHttpAction">reset_create_and_update_generic_http_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateGithubAction">reset_create_and_update_github_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateGoogleCalendarAction">reset_create_and_update_google_calendar_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateHubspotAction">reset_create_and_update_hubspot_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateHuggingFaceAction">reset_create_and_update_hugging_face_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateIntercomAction">reset_create_and_update_intercom_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateJiraAction">reset_create_and_update_jira_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateKnowledgeBases">reset_create_and_update_knowledge_bases</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateLinearAction">reset_create_and_update_linear_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateMcpAction">reset_create_and_update_mcp_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateMondayAction">reset_create_and_update_monday_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateMsExchangeAction">reset_create_and_update_ms_exchange_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateMsTeamsAction">reset_create_and_update_ms_teams_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateNewRelicAction">reset_create_and_update_new_relic_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateNotionAction">reset_create_and_update_notion_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateOneDriveAction">reset_create_and_update_one_drive_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateOpenApiAction">reset_create_and_update_open_api_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdatePagerDutyAction">reset_create_and_update_pager_duty_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateSalesforceAction">reset_create_and_update_salesforce_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateSandPGlobalEnergyAction">reset_create_and_update_sand_p_global_energy_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateSandPgmiAction">reset_create_and_update_sand_pgmi_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateSapBillOfMaterialAction">reset_create_and_update_sap_bill_of_material_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateSapBusinessPartnerAction">reset_create_and_update_sap_business_partner_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateSapMaterialStockAction">reset_create_and_update_sap_material_stock_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateSapPhysicalInventoryAction">reset_create_and_update_sap_physical_inventory_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateSapProductMasterDataAction">reset_create_and_update_sap_product_master_data_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateServiceNowAction">reset_create_and_update_service_now_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateSharePointAction">reset_create_and_update_share_point_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateSlackAction">reset_create_and_update_slack_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateSmartsheetAction">reset_create_and_update_smartsheet_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateTextractAction">reset_create_and_update_textract_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateThemes">reset_create_and_update_themes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateThresholdAlerts">reset_create_and_update_threshold_alerts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateZendeskAction">reset_create_and_update_zendesk_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateChatAgents">reset_create_chat_agents</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateDashboardExecutiveSummaryWithQ">reset_create_dashboard_executive_summary_with_q</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateSharedFolders">reset_create_shared_folders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateSpaces">reset_create_spaces</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateSpiceDataset">reset_create_spice_dataset</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetDashboard">reset_dashboard</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetEditVisualWithQ">reset_edit_visual_with_q</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetExportToCsv">reset_export_to_csv</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetExportToCsvInScheduledReports">reset_export_to_csv_in_scheduled_reports</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetExportToExcel">reset_export_to_excel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetExportToExcelInScheduledReports">reset_export_to_excel_in_scheduled_reports</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetExportToPdf">reset_export_to_pdf</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetExportToPdfInScheduledReports">reset_export_to_pdf_in_scheduled_reports</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetExtension">reset_extension</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetFactSetAction">reset_fact_set_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetFlow">reset_flow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetGenericHttpAction">reset_generic_http_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetGithubAction">reset_github_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetGoogleCalendarAction">reset_google_calendar_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetHubspotAction">reset_hubspot_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetHuggingFaceAction">reset_hugging_face_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetIncludeContentInScheduledReportsEmail">reset_include_content_in_scheduled_reports_email</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetIntercomAction">reset_intercom_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetInvokeAppsAiInference">reset_invoke_apps_ai_inference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetJiraAction">reset_jira_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetKnowledgeBase">reset_knowledge_base</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetLinearAction">reset_linear_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetManageSharedFolders">reset_manage_shared_folders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetMcpAction">reset_mcp_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetMondayAction">reset_monday_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetMsExchangeAction">reset_ms_exchange_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetMsTeamsAction">reset_ms_teams_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetNewRelicAction">reset_new_relic_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetNotionAction">reset_notion_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetOneDriveAction">reset_one_drive_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetOpenApiAction">reset_open_api_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetPagerDutyAction">reset_pager_duty_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetPerformFlowUiTask">reset_perform_flow_ui_task</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetPrintReports">reset_print_reports</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetPublishWithoutApproval">reset_publish_without_approval</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetRenameSharedFolders">reset_rename_shared_folders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetResearch">reset_research</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetSalesforceAction">reset_salesforce_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetSandPGlobalEnergyAction">reset_sand_p_global_energy_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetSandPgmiAction">reset_sand_pgmi_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetSapBillOfMaterialAction">reset_sap_bill_of_material_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetSapBusinessPartnerAction">reset_sap_business_partner_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetSapMaterialStockAction">reset_sap_material_stock_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetSapPhysicalInventoryAction">reset_sap_physical_inventory_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetSapProductMasterDataAction">reset_sap_product_master_data_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetServiceNowAction">reset_service_now_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareAmazonBedrockArsAction">reset_share_amazon_bedrock_ars_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareAmazonBedrockFsAction">reset_share_amazon_bedrock_fs_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareAmazonBedrockKrsAction">reset_share_amazon_bedrock_krs_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareAmazonSThreeAction">reset_share_amazon_s_three_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareAnalyses">reset_share_analyses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareApps">reset_share_apps</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareAsanaAction">reset_share_asana_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareBambooHrAction">reset_share_bamboo_hr_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareBoxAgentAction">reset_share_box_agent_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareCanvaAgentAction">reset_share_canva_agent_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareChatAgents">reset_share_chat_agents</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareComprehendAction">reset_share_comprehend_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareComprehendMedicalAction">reset_share_comprehend_medical_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareConfluenceAction">reset_share_confluence_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareDashboards">reset_share_dashboards</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareDatasets">reset_share_datasets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareDataSources">reset_share_data_sources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareFactSetAction">reset_share_fact_set_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareGenericHttpAction">reset_share_generic_http_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareGithubAction">reset_share_github_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareGoogleCalendarAction">reset_share_google_calendar_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareHubspotAction">reset_share_hubspot_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareHuggingFaceAction">reset_share_hugging_face_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareIntercomAction">reset_share_intercom_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareJiraAction">reset_share_jira_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareKnowledgeBases">reset_share_knowledge_bases</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareLinearAction">reset_share_linear_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareMcpAction">reset_share_mcp_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareMondayAction">reset_share_monday_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareMsExchangeAction">reset_share_ms_exchange_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareMsTeamsAction">reset_share_ms_teams_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareNewRelicAction">reset_share_new_relic_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareNotionAction">reset_share_notion_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareOneDriveAction">reset_share_one_drive_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareOpenApiAction">reset_share_open_api_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetSharePagerDutyAction">reset_share_pager_duty_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetSharePointAction">reset_share_point_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareSalesforceAction">reset_share_salesforce_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareSandPGlobalEnergyAction">reset_share_sand_p_global_energy_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareSandPgmiAction">reset_share_sand_pgmi_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareSapBillOfMaterialAction">reset_share_sap_bill_of_material_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareSapBusinessPartnerAction">reset_share_sap_business_partner_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareSapMaterialStockAction">reset_share_sap_material_stock_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareSapPhysicalInventoryAction">reset_share_sap_physical_inventory_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareSapProductMasterDataAction">reset_share_sap_product_master_data_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareServiceNowAction">reset_share_service_now_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareSharePointAction">reset_share_share_point_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareSlackAction">reset_share_slack_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareSmartsheetAction">reset_share_smartsheet_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareSpaces">reset_share_spaces</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareTextractAction">reset_share_textract_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareZendeskAction">reset_share_zendesk_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetSlackAction">reset_slack_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetSmartsheetAction">reset_smartsheet_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetSpace">reset_space</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetSubscribeDashboardEmailReports">reset_subscribe_dashboard_email_reports</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetTextractAction">reset_textract_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetTopic">reset_topic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseAgentWebSearch">reset_use_agent_web_search</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseAmazonBedrockArsAction">reset_use_amazon_bedrock_ars_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseAmazonBedrockFsAction">reset_use_amazon_bedrock_fs_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseAmazonBedrockKrsAction">reset_use_amazon_bedrock_krs_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseAmazonSThreeAction">reset_use_amazon_s_three_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseAsanaAction">reset_use_asana_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseBambooHrAction">reset_use_bamboo_hr_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseBedrockModels">reset_use_bedrock_models</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseBoxAgentAction">reset_use_box_agent_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseCanvaAgentAction">reset_use_canva_agent_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseComprehendAction">reset_use_comprehend_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseComprehendMedicalAction">reset_use_comprehend_medical_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseConfluenceAction">reset_use_confluence_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseFactSetAction">reset_use_fact_set_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseGenericHttpAction">reset_use_generic_http_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseGithubAction">reset_use_github_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseGoogleCalendarAction">reset_use_google_calendar_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseHubspotAction">reset_use_hubspot_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseHuggingFaceAction">reset_use_hugging_face_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseIntercomAction">reset_use_intercom_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseJiraAction">reset_use_jira_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseLinearAction">reset_use_linear_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseMcpAction">reset_use_mcp_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseMondayAction">reset_use_monday_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseMsExchangeAction">reset_use_ms_exchange_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseMsTeamsAction">reset_use_ms_teams_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseNewRelicAction">reset_use_new_relic_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseNotionAction">reset_use_notion_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseOneDriveAction">reset_use_one_drive_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseOpenApiAction">reset_use_open_api_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUsePagerDutyAction">reset_use_pager_duty_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseSalesforceAction">reset_use_salesforce_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseSandPGlobalEnergyAction">reset_use_sand_p_global_energy_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseSandPgmiAction">reset_use_sand_pgmi_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseSapBillOfMaterialAction">reset_use_sap_bill_of_material_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseSapBusinessPartnerAction">reset_use_sap_business_partner_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseSapMaterialStockAction">reset_use_sap_material_stock_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseSapPhysicalInventoryAction">reset_use_sap_physical_inventory_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseSapProductMasterDataAction">reset_use_sap_product_master_data_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseServiceNowAction">reset_use_service_now_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseSharePointAction">reset_use_share_point_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseSlackAction">reset_use_slack_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseSmartsheetAction">reset_use_smartsheet_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseTextractAction">reset_use_textract_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseZendeskAction">reset_use_zendesk_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetViewAccountSpiceCapacity">reset_view_account_spice_capacity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetZendeskAction">reset_zendesk_action</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_access_apps_native_data_store` <a name="reset_access_apps_native_data_store" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetAccessAppsNativeDataStore"></a>

```python
def reset_access_apps_native_data_store() -> None
```

##### `reset_action` <a name="reset_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetAction"></a>

```python
def reset_action() -> None
```

##### `reset_add_or_run_anomaly_detection_for_analyses` <a name="reset_add_or_run_anomaly_detection_for_analyses" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetAddOrRunAnomalyDetectionForAnalyses"></a>

```python
def reset_add_or_run_anomaly_detection_for_analyses() -> None
```

##### `reset_amazon_bedrock_ars_action` <a name="reset_amazon_bedrock_ars_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetAmazonBedrockArsAction"></a>

```python
def reset_amazon_bedrock_ars_action() -> None
```

##### `reset_amazon_bedrock_fs_action` <a name="reset_amazon_bedrock_fs_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetAmazonBedrockFsAction"></a>

```python
def reset_amazon_bedrock_fs_action() -> None
```

##### `reset_amazon_bedrock_krs_action` <a name="reset_amazon_bedrock_krs_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetAmazonBedrockKrsAction"></a>

```python
def reset_amazon_bedrock_krs_action() -> None
```

##### `reset_amazon_s_three_action` <a name="reset_amazon_s_three_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetAmazonSThreeAction"></a>

```python
def reset_amazon_s_three_action() -> None
```

##### `reset_analysis` <a name="reset_analysis" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetAnalysis"></a>

```python
def reset_analysis() -> None
```

##### `reset_approve_flow_share_requests` <a name="reset_approve_flow_share_requests" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetApproveFlowShareRequests"></a>

```python
def reset_approve_flow_share_requests() -> None
```

##### `reset_apps` <a name="reset_apps" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetApps"></a>

```python
def reset_apps() -> None
```

##### `reset_asana_action` <a name="reset_asana_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetAsanaAction"></a>

```python
def reset_asana_action() -> None
```

##### `reset_automate` <a name="reset_automate" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetAutomate"></a>

```python
def reset_automate() -> None
```

##### `reset_bamboo_hr_action` <a name="reset_bamboo_hr_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetBambooHrAction"></a>

```python
def reset_bamboo_hr_action() -> None
```

##### `reset_box_agent_action` <a name="reset_box_agent_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetBoxAgentAction"></a>

```python
def reset_box_agent_action() -> None
```

##### `reset_build_calculated_field_with_q` <a name="reset_build_calculated_field_with_q" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetBuildCalculatedFieldWithQ"></a>

```python
def reset_build_calculated_field_with_q() -> None
```

##### `reset_canva_agent_action` <a name="reset_canva_agent_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCanvaAgentAction"></a>

```python
def reset_canva_agent_action() -> None
```

##### `reset_chat_agent` <a name="reset_chat_agent" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetChatAgent"></a>

```python
def reset_chat_agent() -> None
```

##### `reset_comprehend_action` <a name="reset_comprehend_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetComprehendAction"></a>

```python
def reset_comprehend_action() -> None
```

##### `reset_comprehend_medical_action` <a name="reset_comprehend_medical_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetComprehendMedicalAction"></a>

```python
def reset_comprehend_medical_action() -> None
```

##### `reset_confluence_action` <a name="reset_confluence_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetConfluenceAction"></a>

```python
def reset_confluence_action() -> None
```

##### `reset_create_and_update_amazon_bedrock_ars_action` <a name="reset_create_and_update_amazon_bedrock_ars_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateAmazonBedrockArsAction"></a>

```python
def reset_create_and_update_amazon_bedrock_ars_action() -> None
```

##### `reset_create_and_update_amazon_bedrock_fs_action` <a name="reset_create_and_update_amazon_bedrock_fs_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateAmazonBedrockFsAction"></a>

```python
def reset_create_and_update_amazon_bedrock_fs_action() -> None
```

##### `reset_create_and_update_amazon_bedrock_krs_action` <a name="reset_create_and_update_amazon_bedrock_krs_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateAmazonBedrockKrsAction"></a>

```python
def reset_create_and_update_amazon_bedrock_krs_action() -> None
```

##### `reset_create_and_update_amazon_s_three_action` <a name="reset_create_and_update_amazon_s_three_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateAmazonSThreeAction"></a>

```python
def reset_create_and_update_amazon_s_three_action() -> None
```

##### `reset_create_and_update_apps` <a name="reset_create_and_update_apps" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateApps"></a>

```python
def reset_create_and_update_apps() -> None
```

##### `reset_create_and_update_asana_action` <a name="reset_create_and_update_asana_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateAsanaAction"></a>

```python
def reset_create_and_update_asana_action() -> None
```

##### `reset_create_and_update_bamboo_hr_action` <a name="reset_create_and_update_bamboo_hr_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateBambooHrAction"></a>

```python
def reset_create_and_update_bamboo_hr_action() -> None
```

##### `reset_create_and_update_box_agent_action` <a name="reset_create_and_update_box_agent_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateBoxAgentAction"></a>

```python
def reset_create_and_update_box_agent_action() -> None
```

##### `reset_create_and_update_canva_agent_action` <a name="reset_create_and_update_canva_agent_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateCanvaAgentAction"></a>

```python
def reset_create_and_update_canva_agent_action() -> None
```

##### `reset_create_and_update_comprehend_action` <a name="reset_create_and_update_comprehend_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateComprehendAction"></a>

```python
def reset_create_and_update_comprehend_action() -> None
```

##### `reset_create_and_update_comprehend_medical_action` <a name="reset_create_and_update_comprehend_medical_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateComprehendMedicalAction"></a>

```python
def reset_create_and_update_comprehend_medical_action() -> None
```

##### `reset_create_and_update_confluence_action` <a name="reset_create_and_update_confluence_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateConfluenceAction"></a>

```python
def reset_create_and_update_confluence_action() -> None
```

##### `reset_create_and_update_dashboard_email_reports` <a name="reset_create_and_update_dashboard_email_reports" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateDashboardEmailReports"></a>

```python
def reset_create_and_update_dashboard_email_reports() -> None
```

##### `reset_create_and_update_datasets` <a name="reset_create_and_update_datasets" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateDatasets"></a>

```python
def reset_create_and_update_datasets() -> None
```

##### `reset_create_and_update_data_sources` <a name="reset_create_and_update_data_sources" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateDataSources"></a>

```python
def reset_create_and_update_data_sources() -> None
```

##### `reset_create_and_update_fact_set_action` <a name="reset_create_and_update_fact_set_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateFactSetAction"></a>

```python
def reset_create_and_update_fact_set_action() -> None
```

##### `reset_create_and_update_generic_http_action` <a name="reset_create_and_update_generic_http_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateGenericHttpAction"></a>

```python
def reset_create_and_update_generic_http_action() -> None
```

##### `reset_create_and_update_github_action` <a name="reset_create_and_update_github_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateGithubAction"></a>

```python
def reset_create_and_update_github_action() -> None
```

##### `reset_create_and_update_google_calendar_action` <a name="reset_create_and_update_google_calendar_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateGoogleCalendarAction"></a>

```python
def reset_create_and_update_google_calendar_action() -> None
```

##### `reset_create_and_update_hubspot_action` <a name="reset_create_and_update_hubspot_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateHubspotAction"></a>

```python
def reset_create_and_update_hubspot_action() -> None
```

##### `reset_create_and_update_hugging_face_action` <a name="reset_create_and_update_hugging_face_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateHuggingFaceAction"></a>

```python
def reset_create_and_update_hugging_face_action() -> None
```

##### `reset_create_and_update_intercom_action` <a name="reset_create_and_update_intercom_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateIntercomAction"></a>

```python
def reset_create_and_update_intercom_action() -> None
```

##### `reset_create_and_update_jira_action` <a name="reset_create_and_update_jira_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateJiraAction"></a>

```python
def reset_create_and_update_jira_action() -> None
```

##### `reset_create_and_update_knowledge_bases` <a name="reset_create_and_update_knowledge_bases" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateKnowledgeBases"></a>

```python
def reset_create_and_update_knowledge_bases() -> None
```

##### `reset_create_and_update_linear_action` <a name="reset_create_and_update_linear_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateLinearAction"></a>

```python
def reset_create_and_update_linear_action() -> None
```

##### `reset_create_and_update_mcp_action` <a name="reset_create_and_update_mcp_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateMcpAction"></a>

```python
def reset_create_and_update_mcp_action() -> None
```

##### `reset_create_and_update_monday_action` <a name="reset_create_and_update_monday_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateMondayAction"></a>

```python
def reset_create_and_update_monday_action() -> None
```

##### `reset_create_and_update_ms_exchange_action` <a name="reset_create_and_update_ms_exchange_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateMsExchangeAction"></a>

```python
def reset_create_and_update_ms_exchange_action() -> None
```

##### `reset_create_and_update_ms_teams_action` <a name="reset_create_and_update_ms_teams_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateMsTeamsAction"></a>

```python
def reset_create_and_update_ms_teams_action() -> None
```

##### `reset_create_and_update_new_relic_action` <a name="reset_create_and_update_new_relic_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateNewRelicAction"></a>

```python
def reset_create_and_update_new_relic_action() -> None
```

##### `reset_create_and_update_notion_action` <a name="reset_create_and_update_notion_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateNotionAction"></a>

```python
def reset_create_and_update_notion_action() -> None
```

##### `reset_create_and_update_one_drive_action` <a name="reset_create_and_update_one_drive_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateOneDriveAction"></a>

```python
def reset_create_and_update_one_drive_action() -> None
```

##### `reset_create_and_update_open_api_action` <a name="reset_create_and_update_open_api_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateOpenApiAction"></a>

```python
def reset_create_and_update_open_api_action() -> None
```

##### `reset_create_and_update_pager_duty_action` <a name="reset_create_and_update_pager_duty_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdatePagerDutyAction"></a>

```python
def reset_create_and_update_pager_duty_action() -> None
```

##### `reset_create_and_update_salesforce_action` <a name="reset_create_and_update_salesforce_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateSalesforceAction"></a>

```python
def reset_create_and_update_salesforce_action() -> None
```

##### `reset_create_and_update_sand_p_global_energy_action` <a name="reset_create_and_update_sand_p_global_energy_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateSandPGlobalEnergyAction"></a>

```python
def reset_create_and_update_sand_p_global_energy_action() -> None
```

##### `reset_create_and_update_sand_pgmi_action` <a name="reset_create_and_update_sand_pgmi_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateSandPgmiAction"></a>

```python
def reset_create_and_update_sand_pgmi_action() -> None
```

##### `reset_create_and_update_sap_bill_of_material_action` <a name="reset_create_and_update_sap_bill_of_material_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateSapBillOfMaterialAction"></a>

```python
def reset_create_and_update_sap_bill_of_material_action() -> None
```

##### `reset_create_and_update_sap_business_partner_action` <a name="reset_create_and_update_sap_business_partner_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateSapBusinessPartnerAction"></a>

```python
def reset_create_and_update_sap_business_partner_action() -> None
```

##### `reset_create_and_update_sap_material_stock_action` <a name="reset_create_and_update_sap_material_stock_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateSapMaterialStockAction"></a>

```python
def reset_create_and_update_sap_material_stock_action() -> None
```

##### `reset_create_and_update_sap_physical_inventory_action` <a name="reset_create_and_update_sap_physical_inventory_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateSapPhysicalInventoryAction"></a>

```python
def reset_create_and_update_sap_physical_inventory_action() -> None
```

##### `reset_create_and_update_sap_product_master_data_action` <a name="reset_create_and_update_sap_product_master_data_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateSapProductMasterDataAction"></a>

```python
def reset_create_and_update_sap_product_master_data_action() -> None
```

##### `reset_create_and_update_service_now_action` <a name="reset_create_and_update_service_now_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateServiceNowAction"></a>

```python
def reset_create_and_update_service_now_action() -> None
```

##### `reset_create_and_update_share_point_action` <a name="reset_create_and_update_share_point_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateSharePointAction"></a>

```python
def reset_create_and_update_share_point_action() -> None
```

##### `reset_create_and_update_slack_action` <a name="reset_create_and_update_slack_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateSlackAction"></a>

```python
def reset_create_and_update_slack_action() -> None
```

##### `reset_create_and_update_smartsheet_action` <a name="reset_create_and_update_smartsheet_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateSmartsheetAction"></a>

```python
def reset_create_and_update_smartsheet_action() -> None
```

##### `reset_create_and_update_textract_action` <a name="reset_create_and_update_textract_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateTextractAction"></a>

```python
def reset_create_and_update_textract_action() -> None
```

##### `reset_create_and_update_themes` <a name="reset_create_and_update_themes" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateThemes"></a>

```python
def reset_create_and_update_themes() -> None
```

##### `reset_create_and_update_threshold_alerts` <a name="reset_create_and_update_threshold_alerts" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateThresholdAlerts"></a>

```python
def reset_create_and_update_threshold_alerts() -> None
```

##### `reset_create_and_update_zendesk_action` <a name="reset_create_and_update_zendesk_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateAndUpdateZendeskAction"></a>

```python
def reset_create_and_update_zendesk_action() -> None
```

##### `reset_create_chat_agents` <a name="reset_create_chat_agents" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateChatAgents"></a>

```python
def reset_create_chat_agents() -> None
```

##### `reset_create_dashboard_executive_summary_with_q` <a name="reset_create_dashboard_executive_summary_with_q" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateDashboardExecutiveSummaryWithQ"></a>

```python
def reset_create_dashboard_executive_summary_with_q() -> None
```

##### `reset_create_shared_folders` <a name="reset_create_shared_folders" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateSharedFolders"></a>

```python
def reset_create_shared_folders() -> None
```

##### `reset_create_spaces` <a name="reset_create_spaces" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateSpaces"></a>

```python
def reset_create_spaces() -> None
```

##### `reset_create_spice_dataset` <a name="reset_create_spice_dataset" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetCreateSpiceDataset"></a>

```python
def reset_create_spice_dataset() -> None
```

##### `reset_dashboard` <a name="reset_dashboard" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetDashboard"></a>

```python
def reset_dashboard() -> None
```

##### `reset_edit_visual_with_q` <a name="reset_edit_visual_with_q" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetEditVisualWithQ"></a>

```python
def reset_edit_visual_with_q() -> None
```

##### `reset_export_to_csv` <a name="reset_export_to_csv" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetExportToCsv"></a>

```python
def reset_export_to_csv() -> None
```

##### `reset_export_to_csv_in_scheduled_reports` <a name="reset_export_to_csv_in_scheduled_reports" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetExportToCsvInScheduledReports"></a>

```python
def reset_export_to_csv_in_scheduled_reports() -> None
```

##### `reset_export_to_excel` <a name="reset_export_to_excel" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetExportToExcel"></a>

```python
def reset_export_to_excel() -> None
```

##### `reset_export_to_excel_in_scheduled_reports` <a name="reset_export_to_excel_in_scheduled_reports" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetExportToExcelInScheduledReports"></a>

```python
def reset_export_to_excel_in_scheduled_reports() -> None
```

##### `reset_export_to_pdf` <a name="reset_export_to_pdf" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetExportToPdf"></a>

```python
def reset_export_to_pdf() -> None
```

##### `reset_export_to_pdf_in_scheduled_reports` <a name="reset_export_to_pdf_in_scheduled_reports" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetExportToPdfInScheduledReports"></a>

```python
def reset_export_to_pdf_in_scheduled_reports() -> None
```

##### `reset_extension` <a name="reset_extension" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetExtension"></a>

```python
def reset_extension() -> None
```

##### `reset_fact_set_action` <a name="reset_fact_set_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetFactSetAction"></a>

```python
def reset_fact_set_action() -> None
```

##### `reset_flow` <a name="reset_flow" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetFlow"></a>

```python
def reset_flow() -> None
```

##### `reset_generic_http_action` <a name="reset_generic_http_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetGenericHttpAction"></a>

```python
def reset_generic_http_action() -> None
```

##### `reset_github_action` <a name="reset_github_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetGithubAction"></a>

```python
def reset_github_action() -> None
```

##### `reset_google_calendar_action` <a name="reset_google_calendar_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetGoogleCalendarAction"></a>

```python
def reset_google_calendar_action() -> None
```

##### `reset_hubspot_action` <a name="reset_hubspot_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetHubspotAction"></a>

```python
def reset_hubspot_action() -> None
```

##### `reset_hugging_face_action` <a name="reset_hugging_face_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetHuggingFaceAction"></a>

```python
def reset_hugging_face_action() -> None
```

##### `reset_include_content_in_scheduled_reports_email` <a name="reset_include_content_in_scheduled_reports_email" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetIncludeContentInScheduledReportsEmail"></a>

```python
def reset_include_content_in_scheduled_reports_email() -> None
```

##### `reset_intercom_action` <a name="reset_intercom_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetIntercomAction"></a>

```python
def reset_intercom_action() -> None
```

##### `reset_invoke_apps_ai_inference` <a name="reset_invoke_apps_ai_inference" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetInvokeAppsAiInference"></a>

```python
def reset_invoke_apps_ai_inference() -> None
```

##### `reset_jira_action` <a name="reset_jira_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetJiraAction"></a>

```python
def reset_jira_action() -> None
```

##### `reset_knowledge_base` <a name="reset_knowledge_base" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetKnowledgeBase"></a>

```python
def reset_knowledge_base() -> None
```

##### `reset_linear_action` <a name="reset_linear_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetLinearAction"></a>

```python
def reset_linear_action() -> None
```

##### `reset_manage_shared_folders` <a name="reset_manage_shared_folders" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetManageSharedFolders"></a>

```python
def reset_manage_shared_folders() -> None
```

##### `reset_mcp_action` <a name="reset_mcp_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetMcpAction"></a>

```python
def reset_mcp_action() -> None
```

##### `reset_monday_action` <a name="reset_monday_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetMondayAction"></a>

```python
def reset_monday_action() -> None
```

##### `reset_ms_exchange_action` <a name="reset_ms_exchange_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetMsExchangeAction"></a>

```python
def reset_ms_exchange_action() -> None
```

##### `reset_ms_teams_action` <a name="reset_ms_teams_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetMsTeamsAction"></a>

```python
def reset_ms_teams_action() -> None
```

##### `reset_new_relic_action` <a name="reset_new_relic_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetNewRelicAction"></a>

```python
def reset_new_relic_action() -> None
```

##### `reset_notion_action` <a name="reset_notion_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetNotionAction"></a>

```python
def reset_notion_action() -> None
```

##### `reset_one_drive_action` <a name="reset_one_drive_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetOneDriveAction"></a>

```python
def reset_one_drive_action() -> None
```

##### `reset_open_api_action` <a name="reset_open_api_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetOpenApiAction"></a>

```python
def reset_open_api_action() -> None
```

##### `reset_pager_duty_action` <a name="reset_pager_duty_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetPagerDutyAction"></a>

```python
def reset_pager_duty_action() -> None
```

##### `reset_perform_flow_ui_task` <a name="reset_perform_flow_ui_task" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetPerformFlowUiTask"></a>

```python
def reset_perform_flow_ui_task() -> None
```

##### `reset_print_reports` <a name="reset_print_reports" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetPrintReports"></a>

```python
def reset_print_reports() -> None
```

##### `reset_publish_without_approval` <a name="reset_publish_without_approval" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetPublishWithoutApproval"></a>

```python
def reset_publish_without_approval() -> None
```

##### `reset_rename_shared_folders` <a name="reset_rename_shared_folders" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetRenameSharedFolders"></a>

```python
def reset_rename_shared_folders() -> None
```

##### `reset_research` <a name="reset_research" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetResearch"></a>

```python
def reset_research() -> None
```

##### `reset_salesforce_action` <a name="reset_salesforce_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetSalesforceAction"></a>

```python
def reset_salesforce_action() -> None
```

##### `reset_sand_p_global_energy_action` <a name="reset_sand_p_global_energy_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetSandPGlobalEnergyAction"></a>

```python
def reset_sand_p_global_energy_action() -> None
```

##### `reset_sand_pgmi_action` <a name="reset_sand_pgmi_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetSandPgmiAction"></a>

```python
def reset_sand_pgmi_action() -> None
```

##### `reset_sap_bill_of_material_action` <a name="reset_sap_bill_of_material_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetSapBillOfMaterialAction"></a>

```python
def reset_sap_bill_of_material_action() -> None
```

##### `reset_sap_business_partner_action` <a name="reset_sap_business_partner_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetSapBusinessPartnerAction"></a>

```python
def reset_sap_business_partner_action() -> None
```

##### `reset_sap_material_stock_action` <a name="reset_sap_material_stock_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetSapMaterialStockAction"></a>

```python
def reset_sap_material_stock_action() -> None
```

##### `reset_sap_physical_inventory_action` <a name="reset_sap_physical_inventory_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetSapPhysicalInventoryAction"></a>

```python
def reset_sap_physical_inventory_action() -> None
```

##### `reset_sap_product_master_data_action` <a name="reset_sap_product_master_data_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetSapProductMasterDataAction"></a>

```python
def reset_sap_product_master_data_action() -> None
```

##### `reset_service_now_action` <a name="reset_service_now_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetServiceNowAction"></a>

```python
def reset_service_now_action() -> None
```

##### `reset_share_amazon_bedrock_ars_action` <a name="reset_share_amazon_bedrock_ars_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareAmazonBedrockArsAction"></a>

```python
def reset_share_amazon_bedrock_ars_action() -> None
```

##### `reset_share_amazon_bedrock_fs_action` <a name="reset_share_amazon_bedrock_fs_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareAmazonBedrockFsAction"></a>

```python
def reset_share_amazon_bedrock_fs_action() -> None
```

##### `reset_share_amazon_bedrock_krs_action` <a name="reset_share_amazon_bedrock_krs_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareAmazonBedrockKrsAction"></a>

```python
def reset_share_amazon_bedrock_krs_action() -> None
```

##### `reset_share_amazon_s_three_action` <a name="reset_share_amazon_s_three_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareAmazonSThreeAction"></a>

```python
def reset_share_amazon_s_three_action() -> None
```

##### `reset_share_analyses` <a name="reset_share_analyses" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareAnalyses"></a>

```python
def reset_share_analyses() -> None
```

##### `reset_share_apps` <a name="reset_share_apps" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareApps"></a>

```python
def reset_share_apps() -> None
```

##### `reset_share_asana_action` <a name="reset_share_asana_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareAsanaAction"></a>

```python
def reset_share_asana_action() -> None
```

##### `reset_share_bamboo_hr_action` <a name="reset_share_bamboo_hr_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareBambooHrAction"></a>

```python
def reset_share_bamboo_hr_action() -> None
```

##### `reset_share_box_agent_action` <a name="reset_share_box_agent_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareBoxAgentAction"></a>

```python
def reset_share_box_agent_action() -> None
```

##### `reset_share_canva_agent_action` <a name="reset_share_canva_agent_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareCanvaAgentAction"></a>

```python
def reset_share_canva_agent_action() -> None
```

##### `reset_share_chat_agents` <a name="reset_share_chat_agents" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareChatAgents"></a>

```python
def reset_share_chat_agents() -> None
```

##### `reset_share_comprehend_action` <a name="reset_share_comprehend_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareComprehendAction"></a>

```python
def reset_share_comprehend_action() -> None
```

##### `reset_share_comprehend_medical_action` <a name="reset_share_comprehend_medical_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareComprehendMedicalAction"></a>

```python
def reset_share_comprehend_medical_action() -> None
```

##### `reset_share_confluence_action` <a name="reset_share_confluence_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareConfluenceAction"></a>

```python
def reset_share_confluence_action() -> None
```

##### `reset_share_dashboards` <a name="reset_share_dashboards" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareDashboards"></a>

```python
def reset_share_dashboards() -> None
```

##### `reset_share_datasets` <a name="reset_share_datasets" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareDatasets"></a>

```python
def reset_share_datasets() -> None
```

##### `reset_share_data_sources` <a name="reset_share_data_sources" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareDataSources"></a>

```python
def reset_share_data_sources() -> None
```

##### `reset_share_fact_set_action` <a name="reset_share_fact_set_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareFactSetAction"></a>

```python
def reset_share_fact_set_action() -> None
```

##### `reset_share_generic_http_action` <a name="reset_share_generic_http_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareGenericHttpAction"></a>

```python
def reset_share_generic_http_action() -> None
```

##### `reset_share_github_action` <a name="reset_share_github_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareGithubAction"></a>

```python
def reset_share_github_action() -> None
```

##### `reset_share_google_calendar_action` <a name="reset_share_google_calendar_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareGoogleCalendarAction"></a>

```python
def reset_share_google_calendar_action() -> None
```

##### `reset_share_hubspot_action` <a name="reset_share_hubspot_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareHubspotAction"></a>

```python
def reset_share_hubspot_action() -> None
```

##### `reset_share_hugging_face_action` <a name="reset_share_hugging_face_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareHuggingFaceAction"></a>

```python
def reset_share_hugging_face_action() -> None
```

##### `reset_share_intercom_action` <a name="reset_share_intercom_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareIntercomAction"></a>

```python
def reset_share_intercom_action() -> None
```

##### `reset_share_jira_action` <a name="reset_share_jira_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareJiraAction"></a>

```python
def reset_share_jira_action() -> None
```

##### `reset_share_knowledge_bases` <a name="reset_share_knowledge_bases" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareKnowledgeBases"></a>

```python
def reset_share_knowledge_bases() -> None
```

##### `reset_share_linear_action` <a name="reset_share_linear_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareLinearAction"></a>

```python
def reset_share_linear_action() -> None
```

##### `reset_share_mcp_action` <a name="reset_share_mcp_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareMcpAction"></a>

```python
def reset_share_mcp_action() -> None
```

##### `reset_share_monday_action` <a name="reset_share_monday_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareMondayAction"></a>

```python
def reset_share_monday_action() -> None
```

##### `reset_share_ms_exchange_action` <a name="reset_share_ms_exchange_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareMsExchangeAction"></a>

```python
def reset_share_ms_exchange_action() -> None
```

##### `reset_share_ms_teams_action` <a name="reset_share_ms_teams_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareMsTeamsAction"></a>

```python
def reset_share_ms_teams_action() -> None
```

##### `reset_share_new_relic_action` <a name="reset_share_new_relic_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareNewRelicAction"></a>

```python
def reset_share_new_relic_action() -> None
```

##### `reset_share_notion_action` <a name="reset_share_notion_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareNotionAction"></a>

```python
def reset_share_notion_action() -> None
```

##### `reset_share_one_drive_action` <a name="reset_share_one_drive_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareOneDriveAction"></a>

```python
def reset_share_one_drive_action() -> None
```

##### `reset_share_open_api_action` <a name="reset_share_open_api_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareOpenApiAction"></a>

```python
def reset_share_open_api_action() -> None
```

##### `reset_share_pager_duty_action` <a name="reset_share_pager_duty_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetSharePagerDutyAction"></a>

```python
def reset_share_pager_duty_action() -> None
```

##### `reset_share_point_action` <a name="reset_share_point_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetSharePointAction"></a>

```python
def reset_share_point_action() -> None
```

##### `reset_share_salesforce_action` <a name="reset_share_salesforce_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareSalesforceAction"></a>

```python
def reset_share_salesforce_action() -> None
```

##### `reset_share_sand_p_global_energy_action` <a name="reset_share_sand_p_global_energy_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareSandPGlobalEnergyAction"></a>

```python
def reset_share_sand_p_global_energy_action() -> None
```

##### `reset_share_sand_pgmi_action` <a name="reset_share_sand_pgmi_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareSandPgmiAction"></a>

```python
def reset_share_sand_pgmi_action() -> None
```

##### `reset_share_sap_bill_of_material_action` <a name="reset_share_sap_bill_of_material_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareSapBillOfMaterialAction"></a>

```python
def reset_share_sap_bill_of_material_action() -> None
```

##### `reset_share_sap_business_partner_action` <a name="reset_share_sap_business_partner_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareSapBusinessPartnerAction"></a>

```python
def reset_share_sap_business_partner_action() -> None
```

##### `reset_share_sap_material_stock_action` <a name="reset_share_sap_material_stock_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareSapMaterialStockAction"></a>

```python
def reset_share_sap_material_stock_action() -> None
```

##### `reset_share_sap_physical_inventory_action` <a name="reset_share_sap_physical_inventory_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareSapPhysicalInventoryAction"></a>

```python
def reset_share_sap_physical_inventory_action() -> None
```

##### `reset_share_sap_product_master_data_action` <a name="reset_share_sap_product_master_data_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareSapProductMasterDataAction"></a>

```python
def reset_share_sap_product_master_data_action() -> None
```

##### `reset_share_service_now_action` <a name="reset_share_service_now_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareServiceNowAction"></a>

```python
def reset_share_service_now_action() -> None
```

##### `reset_share_share_point_action` <a name="reset_share_share_point_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareSharePointAction"></a>

```python
def reset_share_share_point_action() -> None
```

##### `reset_share_slack_action` <a name="reset_share_slack_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareSlackAction"></a>

```python
def reset_share_slack_action() -> None
```

##### `reset_share_smartsheet_action` <a name="reset_share_smartsheet_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareSmartsheetAction"></a>

```python
def reset_share_smartsheet_action() -> None
```

##### `reset_share_spaces` <a name="reset_share_spaces" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareSpaces"></a>

```python
def reset_share_spaces() -> None
```

##### `reset_share_textract_action` <a name="reset_share_textract_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareTextractAction"></a>

```python
def reset_share_textract_action() -> None
```

##### `reset_share_zendesk_action` <a name="reset_share_zendesk_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetShareZendeskAction"></a>

```python
def reset_share_zendesk_action() -> None
```

##### `reset_slack_action` <a name="reset_slack_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetSlackAction"></a>

```python
def reset_slack_action() -> None
```

##### `reset_smartsheet_action` <a name="reset_smartsheet_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetSmartsheetAction"></a>

```python
def reset_smartsheet_action() -> None
```

##### `reset_space` <a name="reset_space" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetSpace"></a>

```python
def reset_space() -> None
```

##### `reset_subscribe_dashboard_email_reports` <a name="reset_subscribe_dashboard_email_reports" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetSubscribeDashboardEmailReports"></a>

```python
def reset_subscribe_dashboard_email_reports() -> None
```

##### `reset_textract_action` <a name="reset_textract_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetTextractAction"></a>

```python
def reset_textract_action() -> None
```

##### `reset_topic` <a name="reset_topic" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetTopic"></a>

```python
def reset_topic() -> None
```

##### `reset_use_agent_web_search` <a name="reset_use_agent_web_search" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseAgentWebSearch"></a>

```python
def reset_use_agent_web_search() -> None
```

##### `reset_use_amazon_bedrock_ars_action` <a name="reset_use_amazon_bedrock_ars_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseAmazonBedrockArsAction"></a>

```python
def reset_use_amazon_bedrock_ars_action() -> None
```

##### `reset_use_amazon_bedrock_fs_action` <a name="reset_use_amazon_bedrock_fs_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseAmazonBedrockFsAction"></a>

```python
def reset_use_amazon_bedrock_fs_action() -> None
```

##### `reset_use_amazon_bedrock_krs_action` <a name="reset_use_amazon_bedrock_krs_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseAmazonBedrockKrsAction"></a>

```python
def reset_use_amazon_bedrock_krs_action() -> None
```

##### `reset_use_amazon_s_three_action` <a name="reset_use_amazon_s_three_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseAmazonSThreeAction"></a>

```python
def reset_use_amazon_s_three_action() -> None
```

##### `reset_use_asana_action` <a name="reset_use_asana_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseAsanaAction"></a>

```python
def reset_use_asana_action() -> None
```

##### `reset_use_bamboo_hr_action` <a name="reset_use_bamboo_hr_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseBambooHrAction"></a>

```python
def reset_use_bamboo_hr_action() -> None
```

##### `reset_use_bedrock_models` <a name="reset_use_bedrock_models" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseBedrockModels"></a>

```python
def reset_use_bedrock_models() -> None
```

##### `reset_use_box_agent_action` <a name="reset_use_box_agent_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseBoxAgentAction"></a>

```python
def reset_use_box_agent_action() -> None
```

##### `reset_use_canva_agent_action` <a name="reset_use_canva_agent_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseCanvaAgentAction"></a>

```python
def reset_use_canva_agent_action() -> None
```

##### `reset_use_comprehend_action` <a name="reset_use_comprehend_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseComprehendAction"></a>

```python
def reset_use_comprehend_action() -> None
```

##### `reset_use_comprehend_medical_action` <a name="reset_use_comprehend_medical_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseComprehendMedicalAction"></a>

```python
def reset_use_comprehend_medical_action() -> None
```

##### `reset_use_confluence_action` <a name="reset_use_confluence_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseConfluenceAction"></a>

```python
def reset_use_confluence_action() -> None
```

##### `reset_use_fact_set_action` <a name="reset_use_fact_set_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseFactSetAction"></a>

```python
def reset_use_fact_set_action() -> None
```

##### `reset_use_generic_http_action` <a name="reset_use_generic_http_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseGenericHttpAction"></a>

```python
def reset_use_generic_http_action() -> None
```

##### `reset_use_github_action` <a name="reset_use_github_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseGithubAction"></a>

```python
def reset_use_github_action() -> None
```

##### `reset_use_google_calendar_action` <a name="reset_use_google_calendar_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseGoogleCalendarAction"></a>

```python
def reset_use_google_calendar_action() -> None
```

##### `reset_use_hubspot_action` <a name="reset_use_hubspot_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseHubspotAction"></a>

```python
def reset_use_hubspot_action() -> None
```

##### `reset_use_hugging_face_action` <a name="reset_use_hugging_face_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseHuggingFaceAction"></a>

```python
def reset_use_hugging_face_action() -> None
```

##### `reset_use_intercom_action` <a name="reset_use_intercom_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseIntercomAction"></a>

```python
def reset_use_intercom_action() -> None
```

##### `reset_use_jira_action` <a name="reset_use_jira_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseJiraAction"></a>

```python
def reset_use_jira_action() -> None
```

##### `reset_use_linear_action` <a name="reset_use_linear_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseLinearAction"></a>

```python
def reset_use_linear_action() -> None
```

##### `reset_use_mcp_action` <a name="reset_use_mcp_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseMcpAction"></a>

```python
def reset_use_mcp_action() -> None
```

##### `reset_use_monday_action` <a name="reset_use_monday_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseMondayAction"></a>

```python
def reset_use_monday_action() -> None
```

##### `reset_use_ms_exchange_action` <a name="reset_use_ms_exchange_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseMsExchangeAction"></a>

```python
def reset_use_ms_exchange_action() -> None
```

##### `reset_use_ms_teams_action` <a name="reset_use_ms_teams_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseMsTeamsAction"></a>

```python
def reset_use_ms_teams_action() -> None
```

##### `reset_use_new_relic_action` <a name="reset_use_new_relic_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseNewRelicAction"></a>

```python
def reset_use_new_relic_action() -> None
```

##### `reset_use_notion_action` <a name="reset_use_notion_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseNotionAction"></a>

```python
def reset_use_notion_action() -> None
```

##### `reset_use_one_drive_action` <a name="reset_use_one_drive_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseOneDriveAction"></a>

```python
def reset_use_one_drive_action() -> None
```

##### `reset_use_open_api_action` <a name="reset_use_open_api_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseOpenApiAction"></a>

```python
def reset_use_open_api_action() -> None
```

##### `reset_use_pager_duty_action` <a name="reset_use_pager_duty_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUsePagerDutyAction"></a>

```python
def reset_use_pager_duty_action() -> None
```

##### `reset_use_salesforce_action` <a name="reset_use_salesforce_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseSalesforceAction"></a>

```python
def reset_use_salesforce_action() -> None
```

##### `reset_use_sand_p_global_energy_action` <a name="reset_use_sand_p_global_energy_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseSandPGlobalEnergyAction"></a>

```python
def reset_use_sand_p_global_energy_action() -> None
```

##### `reset_use_sand_pgmi_action` <a name="reset_use_sand_pgmi_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseSandPgmiAction"></a>

```python
def reset_use_sand_pgmi_action() -> None
```

##### `reset_use_sap_bill_of_material_action` <a name="reset_use_sap_bill_of_material_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseSapBillOfMaterialAction"></a>

```python
def reset_use_sap_bill_of_material_action() -> None
```

##### `reset_use_sap_business_partner_action` <a name="reset_use_sap_business_partner_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseSapBusinessPartnerAction"></a>

```python
def reset_use_sap_business_partner_action() -> None
```

##### `reset_use_sap_material_stock_action` <a name="reset_use_sap_material_stock_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseSapMaterialStockAction"></a>

```python
def reset_use_sap_material_stock_action() -> None
```

##### `reset_use_sap_physical_inventory_action` <a name="reset_use_sap_physical_inventory_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseSapPhysicalInventoryAction"></a>

```python
def reset_use_sap_physical_inventory_action() -> None
```

##### `reset_use_sap_product_master_data_action` <a name="reset_use_sap_product_master_data_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseSapProductMasterDataAction"></a>

```python
def reset_use_sap_product_master_data_action() -> None
```

##### `reset_use_service_now_action` <a name="reset_use_service_now_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseServiceNowAction"></a>

```python
def reset_use_service_now_action() -> None
```

##### `reset_use_share_point_action` <a name="reset_use_share_point_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseSharePointAction"></a>

```python
def reset_use_share_point_action() -> None
```

##### `reset_use_slack_action` <a name="reset_use_slack_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseSlackAction"></a>

```python
def reset_use_slack_action() -> None
```

##### `reset_use_smartsheet_action` <a name="reset_use_smartsheet_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseSmartsheetAction"></a>

```python
def reset_use_smartsheet_action() -> None
```

##### `reset_use_textract_action` <a name="reset_use_textract_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseTextractAction"></a>

```python
def reset_use_textract_action() -> None
```

##### `reset_use_zendesk_action` <a name="reset_use_zendesk_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetUseZendeskAction"></a>

```python
def reset_use_zendesk_action() -> None
```

##### `reset_view_account_spice_capacity` <a name="reset_view_account_spice_capacity" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetViewAccountSpiceCapacity"></a>

```python
def reset_view_account_spice_capacity() -> None
```

##### `reset_zendesk_action` <a name="reset_zendesk_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.resetZendeskAction"></a>

```python
def reset_zendesk_action() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.accessAppsNativeDataStoreInput">access_apps_native_data_store_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.actionInput">action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.addOrRunAnomalyDetectionForAnalysesInput">add_or_run_anomaly_detection_for_analyses_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.amazonBedrockArsActionInput">amazon_bedrock_ars_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.amazonBedrockFsActionInput">amazon_bedrock_fs_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.amazonBedrockKrsActionInput">amazon_bedrock_krs_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.amazonSThreeActionInput">amazon_s_three_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.analysisInput">analysis_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.approveFlowShareRequestsInput">approve_flow_share_requests_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.appsInput">apps_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.asanaActionInput">asana_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.automateInput">automate_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.bambooHrActionInput">bamboo_hr_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.boxAgentActionInput">box_agent_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.buildCalculatedFieldWithQInput">build_calculated_field_with_q_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.canvaAgentActionInput">canva_agent_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.chatAgentInput">chat_agent_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.comprehendActionInput">comprehend_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.comprehendMedicalActionInput">comprehend_medical_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.confluenceActionInput">confluence_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateAmazonBedrockArsActionInput">create_and_update_amazon_bedrock_ars_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateAmazonBedrockFsActionInput">create_and_update_amazon_bedrock_fs_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateAmazonBedrockKrsActionInput">create_and_update_amazon_bedrock_krs_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateAmazonSThreeActionInput">create_and_update_amazon_s_three_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateAppsInput">create_and_update_apps_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateAsanaActionInput">create_and_update_asana_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateBambooHrActionInput">create_and_update_bamboo_hr_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateBoxAgentActionInput">create_and_update_box_agent_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateCanvaAgentActionInput">create_and_update_canva_agent_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateComprehendActionInput">create_and_update_comprehend_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateComprehendMedicalActionInput">create_and_update_comprehend_medical_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateConfluenceActionInput">create_and_update_confluence_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateDashboardEmailReportsInput">create_and_update_dashboard_email_reports_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateDatasetsInput">create_and_update_datasets_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateDataSourcesInput">create_and_update_data_sources_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateFactSetActionInput">create_and_update_fact_set_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateGenericHttpActionInput">create_and_update_generic_http_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateGithubActionInput">create_and_update_github_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateGoogleCalendarActionInput">create_and_update_google_calendar_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateHubspotActionInput">create_and_update_hubspot_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateHuggingFaceActionInput">create_and_update_hugging_face_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateIntercomActionInput">create_and_update_intercom_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateJiraActionInput">create_and_update_jira_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateKnowledgeBasesInput">create_and_update_knowledge_bases_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateLinearActionInput">create_and_update_linear_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateMcpActionInput">create_and_update_mcp_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateMondayActionInput">create_and_update_monday_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateMsExchangeActionInput">create_and_update_ms_exchange_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateMsTeamsActionInput">create_and_update_ms_teams_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateNewRelicActionInput">create_and_update_new_relic_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateNotionActionInput">create_and_update_notion_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateOneDriveActionInput">create_and_update_one_drive_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateOpenApiActionInput">create_and_update_open_api_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdatePagerDutyActionInput">create_and_update_pager_duty_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSalesforceActionInput">create_and_update_salesforce_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSandPGlobalEnergyActionInput">create_and_update_sand_p_global_energy_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSandPgmiActionInput">create_and_update_sand_pgmi_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSapBillOfMaterialActionInput">create_and_update_sap_bill_of_material_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSapBusinessPartnerActionInput">create_and_update_sap_business_partner_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSapMaterialStockActionInput">create_and_update_sap_material_stock_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSapPhysicalInventoryActionInput">create_and_update_sap_physical_inventory_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSapProductMasterDataActionInput">create_and_update_sap_product_master_data_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateServiceNowActionInput">create_and_update_service_now_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSharePointActionInput">create_and_update_share_point_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSlackActionInput">create_and_update_slack_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSmartsheetActionInput">create_and_update_smartsheet_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateTextractActionInput">create_and_update_textract_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateThemesInput">create_and_update_themes_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateThresholdAlertsInput">create_and_update_threshold_alerts_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateZendeskActionInput">create_and_update_zendesk_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createChatAgentsInput">create_chat_agents_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createDashboardExecutiveSummaryWithQInput">create_dashboard_executive_summary_with_q_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createSharedFoldersInput">create_shared_folders_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createSpacesInput">create_spaces_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createSpiceDatasetInput">create_spice_dataset_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.dashboardInput">dashboard_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.editVisualWithQInput">edit_visual_with_q_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToCsvInput">export_to_csv_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToCsvInScheduledReportsInput">export_to_csv_in_scheduled_reports_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToExcelInput">export_to_excel_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToExcelInScheduledReportsInput">export_to_excel_in_scheduled_reports_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToPdfInput">export_to_pdf_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToPdfInScheduledReportsInput">export_to_pdf_in_scheduled_reports_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.extensionInput">extension_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.factSetActionInput">fact_set_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.flowInput">flow_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.genericHttpActionInput">generic_http_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.githubActionInput">github_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.googleCalendarActionInput">google_calendar_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.hubspotActionInput">hubspot_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.huggingFaceActionInput">hugging_face_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.includeContentInScheduledReportsEmailInput">include_content_in_scheduled_reports_email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.intercomActionInput">intercom_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.invokeAppsAiInferenceInput">invoke_apps_ai_inference_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.jiraActionInput">jira_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.knowledgeBaseInput">knowledge_base_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.linearActionInput">linear_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.manageSharedFoldersInput">manage_shared_folders_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.mcpActionInput">mcp_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.mondayActionInput">monday_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.msExchangeActionInput">ms_exchange_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.msTeamsActionInput">ms_teams_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.newRelicActionInput">new_relic_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.notionActionInput">notion_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.oneDriveActionInput">one_drive_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.openApiActionInput">open_api_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.pagerDutyActionInput">pager_duty_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.performFlowUiTaskInput">perform_flow_ui_task_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.printReportsInput">print_reports_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.publishWithoutApprovalInput">publish_without_approval_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.renameSharedFoldersInput">rename_shared_folders_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.researchInput">research_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.salesforceActionInput">salesforce_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.sandPGlobalEnergyActionInput">sand_p_global_energy_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.sandPgmiActionInput">sand_pgmi_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.sapBillOfMaterialActionInput">sap_bill_of_material_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.sapBusinessPartnerActionInput">sap_business_partner_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.sapMaterialStockActionInput">sap_material_stock_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.sapPhysicalInventoryActionInput">sap_physical_inventory_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.sapProductMasterDataActionInput">sap_product_master_data_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.serviceNowActionInput">service_now_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAmazonBedrockArsActionInput">share_amazon_bedrock_ars_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAmazonBedrockFsActionInput">share_amazon_bedrock_fs_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAmazonBedrockKrsActionInput">share_amazon_bedrock_krs_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAmazonSThreeActionInput">share_amazon_s_three_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAnalysesInput">share_analyses_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAppsInput">share_apps_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAsanaActionInput">share_asana_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareBambooHrActionInput">share_bamboo_hr_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareBoxAgentActionInput">share_box_agent_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareCanvaAgentActionInput">share_canva_agent_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareChatAgentsInput">share_chat_agents_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareComprehendActionInput">share_comprehend_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareComprehendMedicalActionInput">share_comprehend_medical_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareConfluenceActionInput">share_confluence_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareDashboardsInput">share_dashboards_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareDatasetsInput">share_datasets_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareDataSourcesInput">share_data_sources_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareFactSetActionInput">share_fact_set_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareGenericHttpActionInput">share_generic_http_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareGithubActionInput">share_github_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareGoogleCalendarActionInput">share_google_calendar_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareHubspotActionInput">share_hubspot_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareHuggingFaceActionInput">share_hugging_face_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareIntercomActionInput">share_intercom_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareJiraActionInput">share_jira_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareKnowledgeBasesInput">share_knowledge_bases_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareLinearActionInput">share_linear_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareMcpActionInput">share_mcp_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareMondayActionInput">share_monday_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareMsExchangeActionInput">share_ms_exchange_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareMsTeamsActionInput">share_ms_teams_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareNewRelicActionInput">share_new_relic_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareNotionActionInput">share_notion_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareOneDriveActionInput">share_one_drive_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareOpenApiActionInput">share_open_api_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.sharePagerDutyActionInput">share_pager_duty_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.sharePointActionInput">share_point_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSalesforceActionInput">share_salesforce_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSandPGlobalEnergyActionInput">share_sand_p_global_energy_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSandPgmiActionInput">share_sand_pgmi_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSapBillOfMaterialActionInput">share_sap_bill_of_material_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSapBusinessPartnerActionInput">share_sap_business_partner_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSapMaterialStockActionInput">share_sap_material_stock_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSapPhysicalInventoryActionInput">share_sap_physical_inventory_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSapProductMasterDataActionInput">share_sap_product_master_data_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareServiceNowActionInput">share_service_now_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSharePointActionInput">share_share_point_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSlackActionInput">share_slack_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSmartsheetActionInput">share_smartsheet_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSpacesInput">share_spaces_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareTextractActionInput">share_textract_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareZendeskActionInput">share_zendesk_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.slackActionInput">slack_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.smartsheetActionInput">smartsheet_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.spaceInput">space_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.subscribeDashboardEmailReportsInput">subscribe_dashboard_email_reports_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.textractActionInput">textract_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.topicInput">topic_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useAgentWebSearchInput">use_agent_web_search_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useAmazonBedrockArsActionInput">use_amazon_bedrock_ars_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useAmazonBedrockFsActionInput">use_amazon_bedrock_fs_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useAmazonBedrockKrsActionInput">use_amazon_bedrock_krs_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useAmazonSThreeActionInput">use_amazon_s_three_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useAsanaActionInput">use_asana_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useBambooHrActionInput">use_bamboo_hr_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useBedrockModelsInput">use_bedrock_models_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useBoxAgentActionInput">use_box_agent_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useCanvaAgentActionInput">use_canva_agent_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useComprehendActionInput">use_comprehend_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useComprehendMedicalActionInput">use_comprehend_medical_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useConfluenceActionInput">use_confluence_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useFactSetActionInput">use_fact_set_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useGenericHttpActionInput">use_generic_http_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useGithubActionInput">use_github_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useGoogleCalendarActionInput">use_google_calendar_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useHubspotActionInput">use_hubspot_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useHuggingFaceActionInput">use_hugging_face_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useIntercomActionInput">use_intercom_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useJiraActionInput">use_jira_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useLinearActionInput">use_linear_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useMcpActionInput">use_mcp_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useMondayActionInput">use_monday_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useMsExchangeActionInput">use_ms_exchange_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useMsTeamsActionInput">use_ms_teams_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useNewRelicActionInput">use_new_relic_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useNotionActionInput">use_notion_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useOneDriveActionInput">use_one_drive_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useOpenApiActionInput">use_open_api_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.usePagerDutyActionInput">use_pager_duty_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSalesforceActionInput">use_salesforce_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSandPGlobalEnergyActionInput">use_sand_p_global_energy_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSandPgmiActionInput">use_sand_pgmi_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSapBillOfMaterialActionInput">use_sap_bill_of_material_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSapBusinessPartnerActionInput">use_sap_business_partner_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSapMaterialStockActionInput">use_sap_material_stock_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSapPhysicalInventoryActionInput">use_sap_physical_inventory_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSapProductMasterDataActionInput">use_sap_product_master_data_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useServiceNowActionInput">use_service_now_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSharePointActionInput">use_share_point_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSlackActionInput">use_slack_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSmartsheetActionInput">use_smartsheet_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useTextractActionInput">use_textract_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useZendeskActionInput">use_zendesk_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.viewAccountSpiceCapacityInput">view_account_spice_capacity_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.zendeskActionInput">zendesk_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.accessAppsNativeDataStore">access_apps_native_data_store</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.addOrRunAnomalyDetectionForAnalyses">add_or_run_anomaly_detection_for_analyses</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.amazonBedrockArsAction">amazon_bedrock_ars_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.amazonBedrockFsAction">amazon_bedrock_fs_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.amazonBedrockKrsAction">amazon_bedrock_krs_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.amazonSThreeAction">amazon_s_three_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.analysis">analysis</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.approveFlowShareRequests">approve_flow_share_requests</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.apps">apps</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.asanaAction">asana_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.automate">automate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.bambooHrAction">bamboo_hr_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.boxAgentAction">box_agent_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.buildCalculatedFieldWithQ">build_calculated_field_with_q</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.canvaAgentAction">canva_agent_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.chatAgent">chat_agent</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.comprehendAction">comprehend_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.comprehendMedicalAction">comprehend_medical_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.confluenceAction">confluence_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateAmazonBedrockArsAction">create_and_update_amazon_bedrock_ars_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateAmazonBedrockFsAction">create_and_update_amazon_bedrock_fs_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateAmazonBedrockKrsAction">create_and_update_amazon_bedrock_krs_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateAmazonSThreeAction">create_and_update_amazon_s_three_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateApps">create_and_update_apps</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateAsanaAction">create_and_update_asana_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateBambooHrAction">create_and_update_bamboo_hr_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateBoxAgentAction">create_and_update_box_agent_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateCanvaAgentAction">create_and_update_canva_agent_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateComprehendAction">create_and_update_comprehend_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateComprehendMedicalAction">create_and_update_comprehend_medical_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateConfluenceAction">create_and_update_confluence_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateDashboardEmailReports">create_and_update_dashboard_email_reports</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateDatasets">create_and_update_datasets</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateDataSources">create_and_update_data_sources</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateFactSetAction">create_and_update_fact_set_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateGenericHttpAction">create_and_update_generic_http_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateGithubAction">create_and_update_github_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateGoogleCalendarAction">create_and_update_google_calendar_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateHubspotAction">create_and_update_hubspot_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateHuggingFaceAction">create_and_update_hugging_face_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateIntercomAction">create_and_update_intercom_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateJiraAction">create_and_update_jira_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateKnowledgeBases">create_and_update_knowledge_bases</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateLinearAction">create_and_update_linear_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateMcpAction">create_and_update_mcp_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateMondayAction">create_and_update_monday_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateMsExchangeAction">create_and_update_ms_exchange_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateMsTeamsAction">create_and_update_ms_teams_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateNewRelicAction">create_and_update_new_relic_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateNotionAction">create_and_update_notion_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateOneDriveAction">create_and_update_one_drive_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateOpenApiAction">create_and_update_open_api_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdatePagerDutyAction">create_and_update_pager_duty_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSalesforceAction">create_and_update_salesforce_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSandPGlobalEnergyAction">create_and_update_sand_p_global_energy_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSandPgmiAction">create_and_update_sand_pgmi_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSapBillOfMaterialAction">create_and_update_sap_bill_of_material_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSapBusinessPartnerAction">create_and_update_sap_business_partner_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSapMaterialStockAction">create_and_update_sap_material_stock_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSapPhysicalInventoryAction">create_and_update_sap_physical_inventory_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSapProductMasterDataAction">create_and_update_sap_product_master_data_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateServiceNowAction">create_and_update_service_now_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSharePointAction">create_and_update_share_point_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSlackAction">create_and_update_slack_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSmartsheetAction">create_and_update_smartsheet_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateTextractAction">create_and_update_textract_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateThemes">create_and_update_themes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateThresholdAlerts">create_and_update_threshold_alerts</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateZendeskAction">create_and_update_zendesk_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createChatAgents">create_chat_agents</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createDashboardExecutiveSummaryWithQ">create_dashboard_executive_summary_with_q</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createSharedFolders">create_shared_folders</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createSpaces">create_spaces</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createSpiceDataset">create_spice_dataset</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.dashboard">dashboard</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.editVisualWithQ">edit_visual_with_q</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToCsv">export_to_csv</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToCsvInScheduledReports">export_to_csv_in_scheduled_reports</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToExcel">export_to_excel</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToExcelInScheduledReports">export_to_excel_in_scheduled_reports</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToPdf">export_to_pdf</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToPdfInScheduledReports">export_to_pdf_in_scheduled_reports</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.extension">extension</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.factSetAction">fact_set_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.flow">flow</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.genericHttpAction">generic_http_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.githubAction">github_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.googleCalendarAction">google_calendar_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.hubspotAction">hubspot_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.huggingFaceAction">hugging_face_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.includeContentInScheduledReportsEmail">include_content_in_scheduled_reports_email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.intercomAction">intercom_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.invokeAppsAiInference">invoke_apps_ai_inference</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.jiraAction">jira_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.knowledgeBase">knowledge_base</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.linearAction">linear_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.manageSharedFolders">manage_shared_folders</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.mcpAction">mcp_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.mondayAction">monday_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.msExchangeAction">ms_exchange_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.msTeamsAction">ms_teams_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.newRelicAction">new_relic_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.notionAction">notion_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.oneDriveAction">one_drive_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.openApiAction">open_api_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.pagerDutyAction">pager_duty_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.performFlowUiTask">perform_flow_ui_task</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.printReports">print_reports</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.publishWithoutApproval">publish_without_approval</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.renameSharedFolders">rename_shared_folders</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.research">research</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.salesforceAction">salesforce_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.sandPGlobalEnergyAction">sand_p_global_energy_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.sandPgmiAction">sand_pgmi_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.sapBillOfMaterialAction">sap_bill_of_material_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.sapBusinessPartnerAction">sap_business_partner_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.sapMaterialStockAction">sap_material_stock_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.sapPhysicalInventoryAction">sap_physical_inventory_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.sapProductMasterDataAction">sap_product_master_data_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.serviceNowAction">service_now_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAmazonBedrockArsAction">share_amazon_bedrock_ars_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAmazonBedrockFsAction">share_amazon_bedrock_fs_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAmazonBedrockKrsAction">share_amazon_bedrock_krs_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAmazonSThreeAction">share_amazon_s_three_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAnalyses">share_analyses</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareApps">share_apps</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAsanaAction">share_asana_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareBambooHrAction">share_bamboo_hr_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareBoxAgentAction">share_box_agent_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareCanvaAgentAction">share_canva_agent_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareChatAgents">share_chat_agents</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareComprehendAction">share_comprehend_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareComprehendMedicalAction">share_comprehend_medical_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareConfluenceAction">share_confluence_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareDashboards">share_dashboards</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareDatasets">share_datasets</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareDataSources">share_data_sources</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareFactSetAction">share_fact_set_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareGenericHttpAction">share_generic_http_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareGithubAction">share_github_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareGoogleCalendarAction">share_google_calendar_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareHubspotAction">share_hubspot_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareHuggingFaceAction">share_hugging_face_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareIntercomAction">share_intercom_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareJiraAction">share_jira_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareKnowledgeBases">share_knowledge_bases</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareLinearAction">share_linear_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareMcpAction">share_mcp_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareMondayAction">share_monday_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareMsExchangeAction">share_ms_exchange_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareMsTeamsAction">share_ms_teams_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareNewRelicAction">share_new_relic_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareNotionAction">share_notion_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareOneDriveAction">share_one_drive_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareOpenApiAction">share_open_api_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.sharePagerDutyAction">share_pager_duty_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.sharePointAction">share_point_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSalesforceAction">share_salesforce_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSandPGlobalEnergyAction">share_sand_p_global_energy_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSandPgmiAction">share_sand_pgmi_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSapBillOfMaterialAction">share_sap_bill_of_material_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSapBusinessPartnerAction">share_sap_business_partner_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSapMaterialStockAction">share_sap_material_stock_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSapPhysicalInventoryAction">share_sap_physical_inventory_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSapProductMasterDataAction">share_sap_product_master_data_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareServiceNowAction">share_service_now_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSharePointAction">share_share_point_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSlackAction">share_slack_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSmartsheetAction">share_smartsheet_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSpaces">share_spaces</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareTextractAction">share_textract_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareZendeskAction">share_zendesk_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.slackAction">slack_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.smartsheetAction">smartsheet_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.space">space</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.subscribeDashboardEmailReports">subscribe_dashboard_email_reports</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.textractAction">textract_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.topic">topic</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useAgentWebSearch">use_agent_web_search</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useAmazonBedrockArsAction">use_amazon_bedrock_ars_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useAmazonBedrockFsAction">use_amazon_bedrock_fs_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useAmazonBedrockKrsAction">use_amazon_bedrock_krs_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useAmazonSThreeAction">use_amazon_s_three_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useAsanaAction">use_asana_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useBambooHrAction">use_bamboo_hr_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useBedrockModels">use_bedrock_models</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useBoxAgentAction">use_box_agent_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useCanvaAgentAction">use_canva_agent_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useComprehendAction">use_comprehend_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useComprehendMedicalAction">use_comprehend_medical_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useConfluenceAction">use_confluence_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useFactSetAction">use_fact_set_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useGenericHttpAction">use_generic_http_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useGithubAction">use_github_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useGoogleCalendarAction">use_google_calendar_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useHubspotAction">use_hubspot_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useHuggingFaceAction">use_hugging_face_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useIntercomAction">use_intercom_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useJiraAction">use_jira_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useLinearAction">use_linear_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useMcpAction">use_mcp_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useMondayAction">use_monday_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useMsExchangeAction">use_ms_exchange_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useMsTeamsAction">use_ms_teams_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useNewRelicAction">use_new_relic_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useNotionAction">use_notion_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useOneDriveAction">use_one_drive_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useOpenApiAction">use_open_api_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.usePagerDutyAction">use_pager_duty_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSalesforceAction">use_salesforce_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSandPGlobalEnergyAction">use_sand_p_global_energy_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSandPgmiAction">use_sand_pgmi_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSapBillOfMaterialAction">use_sap_bill_of_material_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSapBusinessPartnerAction">use_sap_business_partner_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSapMaterialStockAction">use_sap_material_stock_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSapPhysicalInventoryAction">use_sap_physical_inventory_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSapProductMasterDataAction">use_sap_product_master_data_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useServiceNowAction">use_service_now_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSharePointAction">use_share_point_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSlackAction">use_slack_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSmartsheetAction">use_smartsheet_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useTextractAction">use_textract_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useZendeskAction">use_zendesk_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.viewAccountSpiceCapacity">view_account_spice_capacity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.zendeskAction">zendesk_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities">QuicksightCustomPermissionsCapabilities</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `access_apps_native_data_store_input`<sup>Optional</sup> <a name="access_apps_native_data_store_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.accessAppsNativeDataStoreInput"></a>

```python
access_apps_native_data_store_input: str
```

- *Type:* str

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.actionInput"></a>

```python
action_input: str
```

- *Type:* str

---

##### `add_or_run_anomaly_detection_for_analyses_input`<sup>Optional</sup> <a name="add_or_run_anomaly_detection_for_analyses_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.addOrRunAnomalyDetectionForAnalysesInput"></a>

```python
add_or_run_anomaly_detection_for_analyses_input: str
```

- *Type:* str

---

##### `amazon_bedrock_ars_action_input`<sup>Optional</sup> <a name="amazon_bedrock_ars_action_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.amazonBedrockArsActionInput"></a>

```python
amazon_bedrock_ars_action_input: str
```

- *Type:* str

---

##### `amazon_bedrock_fs_action_input`<sup>Optional</sup> <a name="amazon_bedrock_fs_action_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.amazonBedrockFsActionInput"></a>

```python
amazon_bedrock_fs_action_input: str
```

- *Type:* str

---

##### `amazon_bedrock_krs_action_input`<sup>Optional</sup> <a name="amazon_bedrock_krs_action_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.amazonBedrockKrsActionInput"></a>

```python
amazon_bedrock_krs_action_input: str
```

- *Type:* str

---

##### `amazon_s_three_action_input`<sup>Optional</sup> <a name="amazon_s_three_action_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.amazonSThreeActionInput"></a>

```python
amazon_s_three_action_input: str
```

- *Type:* str

---

##### `analysis_input`<sup>Optional</sup> <a name="analysis_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.analysisInput"></a>

```python
analysis_input: str
```

- *Type:* str

---

##### `approve_flow_share_requests_input`<sup>Optional</sup> <a name="approve_flow_share_requests_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.approveFlowShareRequestsInput"></a>

```python
approve_flow_share_requests_input: str
```

- *Type:* str

---

##### `apps_input`<sup>Optional</sup> <a name="apps_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.appsInput"></a>

```python
apps_input: str
```

- *Type:* str

---

##### `asana_action_input`<sup>Optional</sup> <a name="asana_action_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.asanaActionInput"></a>

```python
asana_action_input: str
```

- *Type:* str

---

##### `automate_input`<sup>Optional</sup> <a name="automate_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.automateInput"></a>

```python
automate_input: str
```

- *Type:* str

---

##### `bamboo_hr_action_input`<sup>Optional</sup> <a name="bamboo_hr_action_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.bambooHrActionInput"></a>

```python
bamboo_hr_action_input: str
```

- *Type:* str

---

##### `box_agent_action_input`<sup>Optional</sup> <a name="box_agent_action_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.boxAgentActionInput"></a>

```python
box_agent_action_input: str
```

- *Type:* str

---

##### `build_calculated_field_with_q_input`<sup>Optional</sup> <a name="build_calculated_field_with_q_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.buildCalculatedFieldWithQInput"></a>

```python
build_calculated_field_with_q_input: str
```

- *Type:* str

---

##### `canva_agent_action_input`<sup>Optional</sup> <a name="canva_agent_action_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.canvaAgentActionInput"></a>

```python
canva_agent_action_input: str
```

- *Type:* str

---

##### `chat_agent_input`<sup>Optional</sup> <a name="chat_agent_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.chatAgentInput"></a>

```python
chat_agent_input: str
```

- *Type:* str

---

##### `comprehend_action_input`<sup>Optional</sup> <a name="comprehend_action_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.comprehendActionInput"></a>

```python
comprehend_action_input: str
```

- *Type:* str

---

##### `comprehend_medical_action_input`<sup>Optional</sup> <a name="comprehend_medical_action_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.comprehendMedicalActionInput"></a>

```python
comprehend_medical_action_input: str
```

- *Type:* str

---

##### `confluence_action_input`<sup>Optional</sup> <a name="confluence_action_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.confluenceActionInput"></a>

```python
confluence_action_input: str
```

- *Type:* str

---

##### `create_and_update_amazon_bedrock_ars_action_input`<sup>Optional</sup> <a name="create_and_update_amazon_bedrock_ars_action_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateAmazonBedrockArsActionInput"></a>

```python
create_and_update_amazon_bedrock_ars_action_input: str
```

- *Type:* str

---

##### `create_and_update_amazon_bedrock_fs_action_input`<sup>Optional</sup> <a name="create_and_update_amazon_bedrock_fs_action_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateAmazonBedrockFsActionInput"></a>

```python
create_and_update_amazon_bedrock_fs_action_input: str
```

- *Type:* str

---

##### `create_and_update_amazon_bedrock_krs_action_input`<sup>Optional</sup> <a name="create_and_update_amazon_bedrock_krs_action_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateAmazonBedrockKrsActionInput"></a>

```python
create_and_update_amazon_bedrock_krs_action_input: str
```

- *Type:* str

---

##### `create_and_update_amazon_s_three_action_input`<sup>Optional</sup> <a name="create_and_update_amazon_s_three_action_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateAmazonSThreeActionInput"></a>

```python
create_and_update_amazon_s_three_action_input: str
```

- *Type:* str

---

##### `create_and_update_apps_input`<sup>Optional</sup> <a name="create_and_update_apps_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateAppsInput"></a>

```python
create_and_update_apps_input: str
```

- *Type:* str

---

##### `create_and_update_asana_action_input`<sup>Optional</sup> <a name="create_and_update_asana_action_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateAsanaActionInput"></a>

```python
create_and_update_asana_action_input: str
```

- *Type:* str

---

##### `create_and_update_bamboo_hr_action_input`<sup>Optional</sup> <a name="create_and_update_bamboo_hr_action_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateBambooHrActionInput"></a>

```python
create_and_update_bamboo_hr_action_input: str
```

- *Type:* str

---

##### `create_and_update_box_agent_action_input`<sup>Optional</sup> <a name="create_and_update_box_agent_action_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateBoxAgentActionInput"></a>

```python
create_and_update_box_agent_action_input: str
```

- *Type:* str

---

##### `create_and_update_canva_agent_action_input`<sup>Optional</sup> <a name="create_and_update_canva_agent_action_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateCanvaAgentActionInput"></a>

```python
create_and_update_canva_agent_action_input: str
```

- *Type:* str

---

##### `create_and_update_comprehend_action_input`<sup>Optional</sup> <a name="create_and_update_comprehend_action_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateComprehendActionInput"></a>

```python
create_and_update_comprehend_action_input: str
```

- *Type:* str

---

##### `create_and_update_comprehend_medical_action_input`<sup>Optional</sup> <a name="create_and_update_comprehend_medical_action_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateComprehendMedicalActionInput"></a>

```python
create_and_update_comprehend_medical_action_input: str
```

- *Type:* str

---

##### `create_and_update_confluence_action_input`<sup>Optional</sup> <a name="create_and_update_confluence_action_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateConfluenceActionInput"></a>

```python
create_and_update_confluence_action_input: str
```

- *Type:* str

---

##### `create_and_update_dashboard_email_reports_input`<sup>Optional</sup> <a name="create_and_update_dashboard_email_reports_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateDashboardEmailReportsInput"></a>

```python
create_and_update_dashboard_email_reports_input: str
```

- *Type:* str

---

##### `create_and_update_datasets_input`<sup>Optional</sup> <a name="create_and_update_datasets_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateDatasetsInput"></a>

```python
create_and_update_datasets_input: str
```

- *Type:* str

---

##### `create_and_update_data_sources_input`<sup>Optional</sup> <a name="create_and_update_data_sources_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateDataSourcesInput"></a>

```python
create_and_update_data_sources_input: str
```

- *Type:* str

---

##### `create_and_update_fact_set_action_input`<sup>Optional</sup> <a name="create_and_update_fact_set_action_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateFactSetActionInput"></a>

```python
create_and_update_fact_set_action_input: str
```

- *Type:* str

---

##### `create_and_update_generic_http_action_input`<sup>Optional</sup> <a name="create_and_update_generic_http_action_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateGenericHttpActionInput"></a>

```python
create_and_update_generic_http_action_input: str
```

- *Type:* str

---

##### `create_and_update_github_action_input`<sup>Optional</sup> <a name="create_and_update_github_action_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateGithubActionInput"></a>

```python
create_and_update_github_action_input: str
```

- *Type:* str

---

##### `create_and_update_google_calendar_action_input`<sup>Optional</sup> <a name="create_and_update_google_calendar_action_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateGoogleCalendarActionInput"></a>

```python
create_and_update_google_calendar_action_input: str
```

- *Type:* str

---

##### `create_and_update_hubspot_action_input`<sup>Optional</sup> <a name="create_and_update_hubspot_action_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateHubspotActionInput"></a>

```python
create_and_update_hubspot_action_input: str
```

- *Type:* str

---

##### `create_and_update_hugging_face_action_input`<sup>Optional</sup> <a name="create_and_update_hugging_face_action_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateHuggingFaceActionInput"></a>

```python
create_and_update_hugging_face_action_input: str
```

- *Type:* str

---

##### `create_and_update_intercom_action_input`<sup>Optional</sup> <a name="create_and_update_intercom_action_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateIntercomActionInput"></a>

```python
create_and_update_intercom_action_input: str
```

- *Type:* str

---

##### `create_and_update_jira_action_input`<sup>Optional</sup> <a name="create_and_update_jira_action_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateJiraActionInput"></a>

```python
create_and_update_jira_action_input: str
```

- *Type:* str

---

##### `create_and_update_knowledge_bases_input`<sup>Optional</sup> <a name="create_and_update_knowledge_bases_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateKnowledgeBasesInput"></a>

```python
create_and_update_knowledge_bases_input: str
```

- *Type:* str

---

##### `create_and_update_linear_action_input`<sup>Optional</sup> <a name="create_and_update_linear_action_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateLinearActionInput"></a>

```python
create_and_update_linear_action_input: str
```

- *Type:* str

---

##### `create_and_update_mcp_action_input`<sup>Optional</sup> <a name="create_and_update_mcp_action_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateMcpActionInput"></a>

```python
create_and_update_mcp_action_input: str
```

- *Type:* str

---

##### `create_and_update_monday_action_input`<sup>Optional</sup> <a name="create_and_update_monday_action_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateMondayActionInput"></a>

```python
create_and_update_monday_action_input: str
```

- *Type:* str

---

##### `create_and_update_ms_exchange_action_input`<sup>Optional</sup> <a name="create_and_update_ms_exchange_action_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateMsExchangeActionInput"></a>

```python
create_and_update_ms_exchange_action_input: str
```

- *Type:* str

---

##### `create_and_update_ms_teams_action_input`<sup>Optional</sup> <a name="create_and_update_ms_teams_action_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateMsTeamsActionInput"></a>

```python
create_and_update_ms_teams_action_input: str
```

- *Type:* str

---

##### `create_and_update_new_relic_action_input`<sup>Optional</sup> <a name="create_and_update_new_relic_action_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateNewRelicActionInput"></a>

```python
create_and_update_new_relic_action_input: str
```

- *Type:* str

---

##### `create_and_update_notion_action_input`<sup>Optional</sup> <a name="create_and_update_notion_action_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateNotionActionInput"></a>

```python
create_and_update_notion_action_input: str
```

- *Type:* str

---

##### `create_and_update_one_drive_action_input`<sup>Optional</sup> <a name="create_and_update_one_drive_action_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateOneDriveActionInput"></a>

```python
create_and_update_one_drive_action_input: str
```

- *Type:* str

---

##### `create_and_update_open_api_action_input`<sup>Optional</sup> <a name="create_and_update_open_api_action_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateOpenApiActionInput"></a>

```python
create_and_update_open_api_action_input: str
```

- *Type:* str

---

##### `create_and_update_pager_duty_action_input`<sup>Optional</sup> <a name="create_and_update_pager_duty_action_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdatePagerDutyActionInput"></a>

```python
create_and_update_pager_duty_action_input: str
```

- *Type:* str

---

##### `create_and_update_salesforce_action_input`<sup>Optional</sup> <a name="create_and_update_salesforce_action_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSalesforceActionInput"></a>

```python
create_and_update_salesforce_action_input: str
```

- *Type:* str

---

##### `create_and_update_sand_p_global_energy_action_input`<sup>Optional</sup> <a name="create_and_update_sand_p_global_energy_action_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSandPGlobalEnergyActionInput"></a>

```python
create_and_update_sand_p_global_energy_action_input: str
```

- *Type:* str

---

##### `create_and_update_sand_pgmi_action_input`<sup>Optional</sup> <a name="create_and_update_sand_pgmi_action_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSandPgmiActionInput"></a>

```python
create_and_update_sand_pgmi_action_input: str
```

- *Type:* str

---

##### `create_and_update_sap_bill_of_material_action_input`<sup>Optional</sup> <a name="create_and_update_sap_bill_of_material_action_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSapBillOfMaterialActionInput"></a>

```python
create_and_update_sap_bill_of_material_action_input: str
```

- *Type:* str

---

##### `create_and_update_sap_business_partner_action_input`<sup>Optional</sup> <a name="create_and_update_sap_business_partner_action_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSapBusinessPartnerActionInput"></a>

```python
create_and_update_sap_business_partner_action_input: str
```

- *Type:* str

---

##### `create_and_update_sap_material_stock_action_input`<sup>Optional</sup> <a name="create_and_update_sap_material_stock_action_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSapMaterialStockActionInput"></a>

```python
create_and_update_sap_material_stock_action_input: str
```

- *Type:* str

---

##### `create_and_update_sap_physical_inventory_action_input`<sup>Optional</sup> <a name="create_and_update_sap_physical_inventory_action_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSapPhysicalInventoryActionInput"></a>

```python
create_and_update_sap_physical_inventory_action_input: str
```

- *Type:* str

---

##### `create_and_update_sap_product_master_data_action_input`<sup>Optional</sup> <a name="create_and_update_sap_product_master_data_action_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSapProductMasterDataActionInput"></a>

```python
create_and_update_sap_product_master_data_action_input: str
```

- *Type:* str

---

##### `create_and_update_service_now_action_input`<sup>Optional</sup> <a name="create_and_update_service_now_action_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateServiceNowActionInput"></a>

```python
create_and_update_service_now_action_input: str
```

- *Type:* str

---

##### `create_and_update_share_point_action_input`<sup>Optional</sup> <a name="create_and_update_share_point_action_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSharePointActionInput"></a>

```python
create_and_update_share_point_action_input: str
```

- *Type:* str

---

##### `create_and_update_slack_action_input`<sup>Optional</sup> <a name="create_and_update_slack_action_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSlackActionInput"></a>

```python
create_and_update_slack_action_input: str
```

- *Type:* str

---

##### `create_and_update_smartsheet_action_input`<sup>Optional</sup> <a name="create_and_update_smartsheet_action_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSmartsheetActionInput"></a>

```python
create_and_update_smartsheet_action_input: str
```

- *Type:* str

---

##### `create_and_update_textract_action_input`<sup>Optional</sup> <a name="create_and_update_textract_action_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateTextractActionInput"></a>

```python
create_and_update_textract_action_input: str
```

- *Type:* str

---

##### `create_and_update_themes_input`<sup>Optional</sup> <a name="create_and_update_themes_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateThemesInput"></a>

```python
create_and_update_themes_input: str
```

- *Type:* str

---

##### `create_and_update_threshold_alerts_input`<sup>Optional</sup> <a name="create_and_update_threshold_alerts_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateThresholdAlertsInput"></a>

```python
create_and_update_threshold_alerts_input: str
```

- *Type:* str

---

##### `create_and_update_zendesk_action_input`<sup>Optional</sup> <a name="create_and_update_zendesk_action_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateZendeskActionInput"></a>

```python
create_and_update_zendesk_action_input: str
```

- *Type:* str

---

##### `create_chat_agents_input`<sup>Optional</sup> <a name="create_chat_agents_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createChatAgentsInput"></a>

```python
create_chat_agents_input: str
```

- *Type:* str

---

##### `create_dashboard_executive_summary_with_q_input`<sup>Optional</sup> <a name="create_dashboard_executive_summary_with_q_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createDashboardExecutiveSummaryWithQInput"></a>

```python
create_dashboard_executive_summary_with_q_input: str
```

- *Type:* str

---

##### `create_shared_folders_input`<sup>Optional</sup> <a name="create_shared_folders_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createSharedFoldersInput"></a>

```python
create_shared_folders_input: str
```

- *Type:* str

---

##### `create_spaces_input`<sup>Optional</sup> <a name="create_spaces_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createSpacesInput"></a>

```python
create_spaces_input: str
```

- *Type:* str

---

##### `create_spice_dataset_input`<sup>Optional</sup> <a name="create_spice_dataset_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createSpiceDatasetInput"></a>

```python
create_spice_dataset_input: str
```

- *Type:* str

---

##### `dashboard_input`<sup>Optional</sup> <a name="dashboard_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.dashboardInput"></a>

```python
dashboard_input: str
```

- *Type:* str

---

##### `edit_visual_with_q_input`<sup>Optional</sup> <a name="edit_visual_with_q_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.editVisualWithQInput"></a>

```python
edit_visual_with_q_input: str
```

- *Type:* str

---

##### `export_to_csv_input`<sup>Optional</sup> <a name="export_to_csv_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToCsvInput"></a>

```python
export_to_csv_input: str
```

- *Type:* str

---

##### `export_to_csv_in_scheduled_reports_input`<sup>Optional</sup> <a name="export_to_csv_in_scheduled_reports_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToCsvInScheduledReportsInput"></a>

```python
export_to_csv_in_scheduled_reports_input: str
```

- *Type:* str

---

##### `export_to_excel_input`<sup>Optional</sup> <a name="export_to_excel_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToExcelInput"></a>

```python
export_to_excel_input: str
```

- *Type:* str

---

##### `export_to_excel_in_scheduled_reports_input`<sup>Optional</sup> <a name="export_to_excel_in_scheduled_reports_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToExcelInScheduledReportsInput"></a>

```python
export_to_excel_in_scheduled_reports_input: str
```

- *Type:* str

---

##### `export_to_pdf_input`<sup>Optional</sup> <a name="export_to_pdf_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToPdfInput"></a>

```python
export_to_pdf_input: str
```

- *Type:* str

---

##### `export_to_pdf_in_scheduled_reports_input`<sup>Optional</sup> <a name="export_to_pdf_in_scheduled_reports_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToPdfInScheduledReportsInput"></a>

```python
export_to_pdf_in_scheduled_reports_input: str
```

- *Type:* str

---

##### `extension_input`<sup>Optional</sup> <a name="extension_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.extensionInput"></a>

```python
extension_input: str
```

- *Type:* str

---

##### `fact_set_action_input`<sup>Optional</sup> <a name="fact_set_action_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.factSetActionInput"></a>

```python
fact_set_action_input: str
```

- *Type:* str

---

##### `flow_input`<sup>Optional</sup> <a name="flow_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.flowInput"></a>

```python
flow_input: str
```

- *Type:* str

---

##### `generic_http_action_input`<sup>Optional</sup> <a name="generic_http_action_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.genericHttpActionInput"></a>

```python
generic_http_action_input: str
```

- *Type:* str

---

##### `github_action_input`<sup>Optional</sup> <a name="github_action_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.githubActionInput"></a>

```python
github_action_input: str
```

- *Type:* str

---

##### `google_calendar_action_input`<sup>Optional</sup> <a name="google_calendar_action_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.googleCalendarActionInput"></a>

```python
google_calendar_action_input: str
```

- *Type:* str

---

##### `hubspot_action_input`<sup>Optional</sup> <a name="hubspot_action_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.hubspotActionInput"></a>

```python
hubspot_action_input: str
```

- *Type:* str

---

##### `hugging_face_action_input`<sup>Optional</sup> <a name="hugging_face_action_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.huggingFaceActionInput"></a>

```python
hugging_face_action_input: str
```

- *Type:* str

---

##### `include_content_in_scheduled_reports_email_input`<sup>Optional</sup> <a name="include_content_in_scheduled_reports_email_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.includeContentInScheduledReportsEmailInput"></a>

```python
include_content_in_scheduled_reports_email_input: str
```

- *Type:* str

---

##### `intercom_action_input`<sup>Optional</sup> <a name="intercom_action_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.intercomActionInput"></a>

```python
intercom_action_input: str
```

- *Type:* str

---

##### `invoke_apps_ai_inference_input`<sup>Optional</sup> <a name="invoke_apps_ai_inference_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.invokeAppsAiInferenceInput"></a>

```python
invoke_apps_ai_inference_input: str
```

- *Type:* str

---

##### `jira_action_input`<sup>Optional</sup> <a name="jira_action_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.jiraActionInput"></a>

```python
jira_action_input: str
```

- *Type:* str

---

##### `knowledge_base_input`<sup>Optional</sup> <a name="knowledge_base_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.knowledgeBaseInput"></a>

```python
knowledge_base_input: str
```

- *Type:* str

---

##### `linear_action_input`<sup>Optional</sup> <a name="linear_action_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.linearActionInput"></a>

```python
linear_action_input: str
```

- *Type:* str

---

##### `manage_shared_folders_input`<sup>Optional</sup> <a name="manage_shared_folders_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.manageSharedFoldersInput"></a>

```python
manage_shared_folders_input: str
```

- *Type:* str

---

##### `mcp_action_input`<sup>Optional</sup> <a name="mcp_action_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.mcpActionInput"></a>

```python
mcp_action_input: str
```

- *Type:* str

---

##### `monday_action_input`<sup>Optional</sup> <a name="monday_action_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.mondayActionInput"></a>

```python
monday_action_input: str
```

- *Type:* str

---

##### `ms_exchange_action_input`<sup>Optional</sup> <a name="ms_exchange_action_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.msExchangeActionInput"></a>

```python
ms_exchange_action_input: str
```

- *Type:* str

---

##### `ms_teams_action_input`<sup>Optional</sup> <a name="ms_teams_action_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.msTeamsActionInput"></a>

```python
ms_teams_action_input: str
```

- *Type:* str

---

##### `new_relic_action_input`<sup>Optional</sup> <a name="new_relic_action_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.newRelicActionInput"></a>

```python
new_relic_action_input: str
```

- *Type:* str

---

##### `notion_action_input`<sup>Optional</sup> <a name="notion_action_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.notionActionInput"></a>

```python
notion_action_input: str
```

- *Type:* str

---

##### `one_drive_action_input`<sup>Optional</sup> <a name="one_drive_action_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.oneDriveActionInput"></a>

```python
one_drive_action_input: str
```

- *Type:* str

---

##### `open_api_action_input`<sup>Optional</sup> <a name="open_api_action_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.openApiActionInput"></a>

```python
open_api_action_input: str
```

- *Type:* str

---

##### `pager_duty_action_input`<sup>Optional</sup> <a name="pager_duty_action_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.pagerDutyActionInput"></a>

```python
pager_duty_action_input: str
```

- *Type:* str

---

##### `perform_flow_ui_task_input`<sup>Optional</sup> <a name="perform_flow_ui_task_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.performFlowUiTaskInput"></a>

```python
perform_flow_ui_task_input: str
```

- *Type:* str

---

##### `print_reports_input`<sup>Optional</sup> <a name="print_reports_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.printReportsInput"></a>

```python
print_reports_input: str
```

- *Type:* str

---

##### `publish_without_approval_input`<sup>Optional</sup> <a name="publish_without_approval_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.publishWithoutApprovalInput"></a>

```python
publish_without_approval_input: str
```

- *Type:* str

---

##### `rename_shared_folders_input`<sup>Optional</sup> <a name="rename_shared_folders_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.renameSharedFoldersInput"></a>

```python
rename_shared_folders_input: str
```

- *Type:* str

---

##### `research_input`<sup>Optional</sup> <a name="research_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.researchInput"></a>

```python
research_input: str
```

- *Type:* str

---

##### `salesforce_action_input`<sup>Optional</sup> <a name="salesforce_action_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.salesforceActionInput"></a>

```python
salesforce_action_input: str
```

- *Type:* str

---

##### `sand_p_global_energy_action_input`<sup>Optional</sup> <a name="sand_p_global_energy_action_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.sandPGlobalEnergyActionInput"></a>

```python
sand_p_global_energy_action_input: str
```

- *Type:* str

---

##### `sand_pgmi_action_input`<sup>Optional</sup> <a name="sand_pgmi_action_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.sandPgmiActionInput"></a>

```python
sand_pgmi_action_input: str
```

- *Type:* str

---

##### `sap_bill_of_material_action_input`<sup>Optional</sup> <a name="sap_bill_of_material_action_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.sapBillOfMaterialActionInput"></a>

```python
sap_bill_of_material_action_input: str
```

- *Type:* str

---

##### `sap_business_partner_action_input`<sup>Optional</sup> <a name="sap_business_partner_action_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.sapBusinessPartnerActionInput"></a>

```python
sap_business_partner_action_input: str
```

- *Type:* str

---

##### `sap_material_stock_action_input`<sup>Optional</sup> <a name="sap_material_stock_action_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.sapMaterialStockActionInput"></a>

```python
sap_material_stock_action_input: str
```

- *Type:* str

---

##### `sap_physical_inventory_action_input`<sup>Optional</sup> <a name="sap_physical_inventory_action_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.sapPhysicalInventoryActionInput"></a>

```python
sap_physical_inventory_action_input: str
```

- *Type:* str

---

##### `sap_product_master_data_action_input`<sup>Optional</sup> <a name="sap_product_master_data_action_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.sapProductMasterDataActionInput"></a>

```python
sap_product_master_data_action_input: str
```

- *Type:* str

---

##### `service_now_action_input`<sup>Optional</sup> <a name="service_now_action_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.serviceNowActionInput"></a>

```python
service_now_action_input: str
```

- *Type:* str

---

##### `share_amazon_bedrock_ars_action_input`<sup>Optional</sup> <a name="share_amazon_bedrock_ars_action_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAmazonBedrockArsActionInput"></a>

```python
share_amazon_bedrock_ars_action_input: str
```

- *Type:* str

---

##### `share_amazon_bedrock_fs_action_input`<sup>Optional</sup> <a name="share_amazon_bedrock_fs_action_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAmazonBedrockFsActionInput"></a>

```python
share_amazon_bedrock_fs_action_input: str
```

- *Type:* str

---

##### `share_amazon_bedrock_krs_action_input`<sup>Optional</sup> <a name="share_amazon_bedrock_krs_action_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAmazonBedrockKrsActionInput"></a>

```python
share_amazon_bedrock_krs_action_input: str
```

- *Type:* str

---

##### `share_amazon_s_three_action_input`<sup>Optional</sup> <a name="share_amazon_s_three_action_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAmazonSThreeActionInput"></a>

```python
share_amazon_s_three_action_input: str
```

- *Type:* str

---

##### `share_analyses_input`<sup>Optional</sup> <a name="share_analyses_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAnalysesInput"></a>

```python
share_analyses_input: str
```

- *Type:* str

---

##### `share_apps_input`<sup>Optional</sup> <a name="share_apps_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAppsInput"></a>

```python
share_apps_input: str
```

- *Type:* str

---

##### `share_asana_action_input`<sup>Optional</sup> <a name="share_asana_action_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAsanaActionInput"></a>

```python
share_asana_action_input: str
```

- *Type:* str

---

##### `share_bamboo_hr_action_input`<sup>Optional</sup> <a name="share_bamboo_hr_action_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareBambooHrActionInput"></a>

```python
share_bamboo_hr_action_input: str
```

- *Type:* str

---

##### `share_box_agent_action_input`<sup>Optional</sup> <a name="share_box_agent_action_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareBoxAgentActionInput"></a>

```python
share_box_agent_action_input: str
```

- *Type:* str

---

##### `share_canva_agent_action_input`<sup>Optional</sup> <a name="share_canva_agent_action_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareCanvaAgentActionInput"></a>

```python
share_canva_agent_action_input: str
```

- *Type:* str

---

##### `share_chat_agents_input`<sup>Optional</sup> <a name="share_chat_agents_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareChatAgentsInput"></a>

```python
share_chat_agents_input: str
```

- *Type:* str

---

##### `share_comprehend_action_input`<sup>Optional</sup> <a name="share_comprehend_action_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareComprehendActionInput"></a>

```python
share_comprehend_action_input: str
```

- *Type:* str

---

##### `share_comprehend_medical_action_input`<sup>Optional</sup> <a name="share_comprehend_medical_action_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareComprehendMedicalActionInput"></a>

```python
share_comprehend_medical_action_input: str
```

- *Type:* str

---

##### `share_confluence_action_input`<sup>Optional</sup> <a name="share_confluence_action_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareConfluenceActionInput"></a>

```python
share_confluence_action_input: str
```

- *Type:* str

---

##### `share_dashboards_input`<sup>Optional</sup> <a name="share_dashboards_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareDashboardsInput"></a>

```python
share_dashboards_input: str
```

- *Type:* str

---

##### `share_datasets_input`<sup>Optional</sup> <a name="share_datasets_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareDatasetsInput"></a>

```python
share_datasets_input: str
```

- *Type:* str

---

##### `share_data_sources_input`<sup>Optional</sup> <a name="share_data_sources_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareDataSourcesInput"></a>

```python
share_data_sources_input: str
```

- *Type:* str

---

##### `share_fact_set_action_input`<sup>Optional</sup> <a name="share_fact_set_action_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareFactSetActionInput"></a>

```python
share_fact_set_action_input: str
```

- *Type:* str

---

##### `share_generic_http_action_input`<sup>Optional</sup> <a name="share_generic_http_action_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareGenericHttpActionInput"></a>

```python
share_generic_http_action_input: str
```

- *Type:* str

---

##### `share_github_action_input`<sup>Optional</sup> <a name="share_github_action_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareGithubActionInput"></a>

```python
share_github_action_input: str
```

- *Type:* str

---

##### `share_google_calendar_action_input`<sup>Optional</sup> <a name="share_google_calendar_action_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareGoogleCalendarActionInput"></a>

```python
share_google_calendar_action_input: str
```

- *Type:* str

---

##### `share_hubspot_action_input`<sup>Optional</sup> <a name="share_hubspot_action_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareHubspotActionInput"></a>

```python
share_hubspot_action_input: str
```

- *Type:* str

---

##### `share_hugging_face_action_input`<sup>Optional</sup> <a name="share_hugging_face_action_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareHuggingFaceActionInput"></a>

```python
share_hugging_face_action_input: str
```

- *Type:* str

---

##### `share_intercom_action_input`<sup>Optional</sup> <a name="share_intercom_action_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareIntercomActionInput"></a>

```python
share_intercom_action_input: str
```

- *Type:* str

---

##### `share_jira_action_input`<sup>Optional</sup> <a name="share_jira_action_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareJiraActionInput"></a>

```python
share_jira_action_input: str
```

- *Type:* str

---

##### `share_knowledge_bases_input`<sup>Optional</sup> <a name="share_knowledge_bases_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareKnowledgeBasesInput"></a>

```python
share_knowledge_bases_input: str
```

- *Type:* str

---

##### `share_linear_action_input`<sup>Optional</sup> <a name="share_linear_action_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareLinearActionInput"></a>

```python
share_linear_action_input: str
```

- *Type:* str

---

##### `share_mcp_action_input`<sup>Optional</sup> <a name="share_mcp_action_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareMcpActionInput"></a>

```python
share_mcp_action_input: str
```

- *Type:* str

---

##### `share_monday_action_input`<sup>Optional</sup> <a name="share_monday_action_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareMondayActionInput"></a>

```python
share_monday_action_input: str
```

- *Type:* str

---

##### `share_ms_exchange_action_input`<sup>Optional</sup> <a name="share_ms_exchange_action_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareMsExchangeActionInput"></a>

```python
share_ms_exchange_action_input: str
```

- *Type:* str

---

##### `share_ms_teams_action_input`<sup>Optional</sup> <a name="share_ms_teams_action_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareMsTeamsActionInput"></a>

```python
share_ms_teams_action_input: str
```

- *Type:* str

---

##### `share_new_relic_action_input`<sup>Optional</sup> <a name="share_new_relic_action_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareNewRelicActionInput"></a>

```python
share_new_relic_action_input: str
```

- *Type:* str

---

##### `share_notion_action_input`<sup>Optional</sup> <a name="share_notion_action_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareNotionActionInput"></a>

```python
share_notion_action_input: str
```

- *Type:* str

---

##### `share_one_drive_action_input`<sup>Optional</sup> <a name="share_one_drive_action_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareOneDriveActionInput"></a>

```python
share_one_drive_action_input: str
```

- *Type:* str

---

##### `share_open_api_action_input`<sup>Optional</sup> <a name="share_open_api_action_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareOpenApiActionInput"></a>

```python
share_open_api_action_input: str
```

- *Type:* str

---

##### `share_pager_duty_action_input`<sup>Optional</sup> <a name="share_pager_duty_action_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.sharePagerDutyActionInput"></a>

```python
share_pager_duty_action_input: str
```

- *Type:* str

---

##### `share_point_action_input`<sup>Optional</sup> <a name="share_point_action_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.sharePointActionInput"></a>

```python
share_point_action_input: str
```

- *Type:* str

---

##### `share_salesforce_action_input`<sup>Optional</sup> <a name="share_salesforce_action_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSalesforceActionInput"></a>

```python
share_salesforce_action_input: str
```

- *Type:* str

---

##### `share_sand_p_global_energy_action_input`<sup>Optional</sup> <a name="share_sand_p_global_energy_action_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSandPGlobalEnergyActionInput"></a>

```python
share_sand_p_global_energy_action_input: str
```

- *Type:* str

---

##### `share_sand_pgmi_action_input`<sup>Optional</sup> <a name="share_sand_pgmi_action_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSandPgmiActionInput"></a>

```python
share_sand_pgmi_action_input: str
```

- *Type:* str

---

##### `share_sap_bill_of_material_action_input`<sup>Optional</sup> <a name="share_sap_bill_of_material_action_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSapBillOfMaterialActionInput"></a>

```python
share_sap_bill_of_material_action_input: str
```

- *Type:* str

---

##### `share_sap_business_partner_action_input`<sup>Optional</sup> <a name="share_sap_business_partner_action_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSapBusinessPartnerActionInput"></a>

```python
share_sap_business_partner_action_input: str
```

- *Type:* str

---

##### `share_sap_material_stock_action_input`<sup>Optional</sup> <a name="share_sap_material_stock_action_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSapMaterialStockActionInput"></a>

```python
share_sap_material_stock_action_input: str
```

- *Type:* str

---

##### `share_sap_physical_inventory_action_input`<sup>Optional</sup> <a name="share_sap_physical_inventory_action_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSapPhysicalInventoryActionInput"></a>

```python
share_sap_physical_inventory_action_input: str
```

- *Type:* str

---

##### `share_sap_product_master_data_action_input`<sup>Optional</sup> <a name="share_sap_product_master_data_action_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSapProductMasterDataActionInput"></a>

```python
share_sap_product_master_data_action_input: str
```

- *Type:* str

---

##### `share_service_now_action_input`<sup>Optional</sup> <a name="share_service_now_action_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareServiceNowActionInput"></a>

```python
share_service_now_action_input: str
```

- *Type:* str

---

##### `share_share_point_action_input`<sup>Optional</sup> <a name="share_share_point_action_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSharePointActionInput"></a>

```python
share_share_point_action_input: str
```

- *Type:* str

---

##### `share_slack_action_input`<sup>Optional</sup> <a name="share_slack_action_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSlackActionInput"></a>

```python
share_slack_action_input: str
```

- *Type:* str

---

##### `share_smartsheet_action_input`<sup>Optional</sup> <a name="share_smartsheet_action_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSmartsheetActionInput"></a>

```python
share_smartsheet_action_input: str
```

- *Type:* str

---

##### `share_spaces_input`<sup>Optional</sup> <a name="share_spaces_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSpacesInput"></a>

```python
share_spaces_input: str
```

- *Type:* str

---

##### `share_textract_action_input`<sup>Optional</sup> <a name="share_textract_action_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareTextractActionInput"></a>

```python
share_textract_action_input: str
```

- *Type:* str

---

##### `share_zendesk_action_input`<sup>Optional</sup> <a name="share_zendesk_action_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareZendeskActionInput"></a>

```python
share_zendesk_action_input: str
```

- *Type:* str

---

##### `slack_action_input`<sup>Optional</sup> <a name="slack_action_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.slackActionInput"></a>

```python
slack_action_input: str
```

- *Type:* str

---

##### `smartsheet_action_input`<sup>Optional</sup> <a name="smartsheet_action_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.smartsheetActionInput"></a>

```python
smartsheet_action_input: str
```

- *Type:* str

---

##### `space_input`<sup>Optional</sup> <a name="space_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.spaceInput"></a>

```python
space_input: str
```

- *Type:* str

---

##### `subscribe_dashboard_email_reports_input`<sup>Optional</sup> <a name="subscribe_dashboard_email_reports_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.subscribeDashboardEmailReportsInput"></a>

```python
subscribe_dashboard_email_reports_input: str
```

- *Type:* str

---

##### `textract_action_input`<sup>Optional</sup> <a name="textract_action_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.textractActionInput"></a>

```python
textract_action_input: str
```

- *Type:* str

---

##### `topic_input`<sup>Optional</sup> <a name="topic_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.topicInput"></a>

```python
topic_input: str
```

- *Type:* str

---

##### `use_agent_web_search_input`<sup>Optional</sup> <a name="use_agent_web_search_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useAgentWebSearchInput"></a>

```python
use_agent_web_search_input: str
```

- *Type:* str

---

##### `use_amazon_bedrock_ars_action_input`<sup>Optional</sup> <a name="use_amazon_bedrock_ars_action_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useAmazonBedrockArsActionInput"></a>

```python
use_amazon_bedrock_ars_action_input: str
```

- *Type:* str

---

##### `use_amazon_bedrock_fs_action_input`<sup>Optional</sup> <a name="use_amazon_bedrock_fs_action_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useAmazonBedrockFsActionInput"></a>

```python
use_amazon_bedrock_fs_action_input: str
```

- *Type:* str

---

##### `use_amazon_bedrock_krs_action_input`<sup>Optional</sup> <a name="use_amazon_bedrock_krs_action_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useAmazonBedrockKrsActionInput"></a>

```python
use_amazon_bedrock_krs_action_input: str
```

- *Type:* str

---

##### `use_amazon_s_three_action_input`<sup>Optional</sup> <a name="use_amazon_s_three_action_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useAmazonSThreeActionInput"></a>

```python
use_amazon_s_three_action_input: str
```

- *Type:* str

---

##### `use_asana_action_input`<sup>Optional</sup> <a name="use_asana_action_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useAsanaActionInput"></a>

```python
use_asana_action_input: str
```

- *Type:* str

---

##### `use_bamboo_hr_action_input`<sup>Optional</sup> <a name="use_bamboo_hr_action_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useBambooHrActionInput"></a>

```python
use_bamboo_hr_action_input: str
```

- *Type:* str

---

##### `use_bedrock_models_input`<sup>Optional</sup> <a name="use_bedrock_models_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useBedrockModelsInput"></a>

```python
use_bedrock_models_input: str
```

- *Type:* str

---

##### `use_box_agent_action_input`<sup>Optional</sup> <a name="use_box_agent_action_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useBoxAgentActionInput"></a>

```python
use_box_agent_action_input: str
```

- *Type:* str

---

##### `use_canva_agent_action_input`<sup>Optional</sup> <a name="use_canva_agent_action_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useCanvaAgentActionInput"></a>

```python
use_canva_agent_action_input: str
```

- *Type:* str

---

##### `use_comprehend_action_input`<sup>Optional</sup> <a name="use_comprehend_action_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useComprehendActionInput"></a>

```python
use_comprehend_action_input: str
```

- *Type:* str

---

##### `use_comprehend_medical_action_input`<sup>Optional</sup> <a name="use_comprehend_medical_action_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useComprehendMedicalActionInput"></a>

```python
use_comprehend_medical_action_input: str
```

- *Type:* str

---

##### `use_confluence_action_input`<sup>Optional</sup> <a name="use_confluence_action_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useConfluenceActionInput"></a>

```python
use_confluence_action_input: str
```

- *Type:* str

---

##### `use_fact_set_action_input`<sup>Optional</sup> <a name="use_fact_set_action_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useFactSetActionInput"></a>

```python
use_fact_set_action_input: str
```

- *Type:* str

---

##### `use_generic_http_action_input`<sup>Optional</sup> <a name="use_generic_http_action_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useGenericHttpActionInput"></a>

```python
use_generic_http_action_input: str
```

- *Type:* str

---

##### `use_github_action_input`<sup>Optional</sup> <a name="use_github_action_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useGithubActionInput"></a>

```python
use_github_action_input: str
```

- *Type:* str

---

##### `use_google_calendar_action_input`<sup>Optional</sup> <a name="use_google_calendar_action_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useGoogleCalendarActionInput"></a>

```python
use_google_calendar_action_input: str
```

- *Type:* str

---

##### `use_hubspot_action_input`<sup>Optional</sup> <a name="use_hubspot_action_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useHubspotActionInput"></a>

```python
use_hubspot_action_input: str
```

- *Type:* str

---

##### `use_hugging_face_action_input`<sup>Optional</sup> <a name="use_hugging_face_action_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useHuggingFaceActionInput"></a>

```python
use_hugging_face_action_input: str
```

- *Type:* str

---

##### `use_intercom_action_input`<sup>Optional</sup> <a name="use_intercom_action_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useIntercomActionInput"></a>

```python
use_intercom_action_input: str
```

- *Type:* str

---

##### `use_jira_action_input`<sup>Optional</sup> <a name="use_jira_action_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useJiraActionInput"></a>

```python
use_jira_action_input: str
```

- *Type:* str

---

##### `use_linear_action_input`<sup>Optional</sup> <a name="use_linear_action_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useLinearActionInput"></a>

```python
use_linear_action_input: str
```

- *Type:* str

---

##### `use_mcp_action_input`<sup>Optional</sup> <a name="use_mcp_action_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useMcpActionInput"></a>

```python
use_mcp_action_input: str
```

- *Type:* str

---

##### `use_monday_action_input`<sup>Optional</sup> <a name="use_monday_action_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useMondayActionInput"></a>

```python
use_monday_action_input: str
```

- *Type:* str

---

##### `use_ms_exchange_action_input`<sup>Optional</sup> <a name="use_ms_exchange_action_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useMsExchangeActionInput"></a>

```python
use_ms_exchange_action_input: str
```

- *Type:* str

---

##### `use_ms_teams_action_input`<sup>Optional</sup> <a name="use_ms_teams_action_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useMsTeamsActionInput"></a>

```python
use_ms_teams_action_input: str
```

- *Type:* str

---

##### `use_new_relic_action_input`<sup>Optional</sup> <a name="use_new_relic_action_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useNewRelicActionInput"></a>

```python
use_new_relic_action_input: str
```

- *Type:* str

---

##### `use_notion_action_input`<sup>Optional</sup> <a name="use_notion_action_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useNotionActionInput"></a>

```python
use_notion_action_input: str
```

- *Type:* str

---

##### `use_one_drive_action_input`<sup>Optional</sup> <a name="use_one_drive_action_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useOneDriveActionInput"></a>

```python
use_one_drive_action_input: str
```

- *Type:* str

---

##### `use_open_api_action_input`<sup>Optional</sup> <a name="use_open_api_action_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useOpenApiActionInput"></a>

```python
use_open_api_action_input: str
```

- *Type:* str

---

##### `use_pager_duty_action_input`<sup>Optional</sup> <a name="use_pager_duty_action_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.usePagerDutyActionInput"></a>

```python
use_pager_duty_action_input: str
```

- *Type:* str

---

##### `use_salesforce_action_input`<sup>Optional</sup> <a name="use_salesforce_action_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSalesforceActionInput"></a>

```python
use_salesforce_action_input: str
```

- *Type:* str

---

##### `use_sand_p_global_energy_action_input`<sup>Optional</sup> <a name="use_sand_p_global_energy_action_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSandPGlobalEnergyActionInput"></a>

```python
use_sand_p_global_energy_action_input: str
```

- *Type:* str

---

##### `use_sand_pgmi_action_input`<sup>Optional</sup> <a name="use_sand_pgmi_action_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSandPgmiActionInput"></a>

```python
use_sand_pgmi_action_input: str
```

- *Type:* str

---

##### `use_sap_bill_of_material_action_input`<sup>Optional</sup> <a name="use_sap_bill_of_material_action_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSapBillOfMaterialActionInput"></a>

```python
use_sap_bill_of_material_action_input: str
```

- *Type:* str

---

##### `use_sap_business_partner_action_input`<sup>Optional</sup> <a name="use_sap_business_partner_action_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSapBusinessPartnerActionInput"></a>

```python
use_sap_business_partner_action_input: str
```

- *Type:* str

---

##### `use_sap_material_stock_action_input`<sup>Optional</sup> <a name="use_sap_material_stock_action_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSapMaterialStockActionInput"></a>

```python
use_sap_material_stock_action_input: str
```

- *Type:* str

---

##### `use_sap_physical_inventory_action_input`<sup>Optional</sup> <a name="use_sap_physical_inventory_action_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSapPhysicalInventoryActionInput"></a>

```python
use_sap_physical_inventory_action_input: str
```

- *Type:* str

---

##### `use_sap_product_master_data_action_input`<sup>Optional</sup> <a name="use_sap_product_master_data_action_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSapProductMasterDataActionInput"></a>

```python
use_sap_product_master_data_action_input: str
```

- *Type:* str

---

##### `use_service_now_action_input`<sup>Optional</sup> <a name="use_service_now_action_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useServiceNowActionInput"></a>

```python
use_service_now_action_input: str
```

- *Type:* str

---

##### `use_share_point_action_input`<sup>Optional</sup> <a name="use_share_point_action_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSharePointActionInput"></a>

```python
use_share_point_action_input: str
```

- *Type:* str

---

##### `use_slack_action_input`<sup>Optional</sup> <a name="use_slack_action_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSlackActionInput"></a>

```python
use_slack_action_input: str
```

- *Type:* str

---

##### `use_smartsheet_action_input`<sup>Optional</sup> <a name="use_smartsheet_action_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSmartsheetActionInput"></a>

```python
use_smartsheet_action_input: str
```

- *Type:* str

---

##### `use_textract_action_input`<sup>Optional</sup> <a name="use_textract_action_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useTextractActionInput"></a>

```python
use_textract_action_input: str
```

- *Type:* str

---

##### `use_zendesk_action_input`<sup>Optional</sup> <a name="use_zendesk_action_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useZendeskActionInput"></a>

```python
use_zendesk_action_input: str
```

- *Type:* str

---

##### `view_account_spice_capacity_input`<sup>Optional</sup> <a name="view_account_spice_capacity_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.viewAccountSpiceCapacityInput"></a>

```python
view_account_spice_capacity_input: str
```

- *Type:* str

---

##### `zendesk_action_input`<sup>Optional</sup> <a name="zendesk_action_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.zendeskActionInput"></a>

```python
zendesk_action_input: str
```

- *Type:* str

---

##### `access_apps_native_data_store`<sup>Required</sup> <a name="access_apps_native_data_store" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.accessAppsNativeDataStore"></a>

```python
access_apps_native_data_store: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `add_or_run_anomaly_detection_for_analyses`<sup>Required</sup> <a name="add_or_run_anomaly_detection_for_analyses" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.addOrRunAnomalyDetectionForAnalyses"></a>

```python
add_or_run_anomaly_detection_for_analyses: str
```

- *Type:* str

---

##### `amazon_bedrock_ars_action`<sup>Required</sup> <a name="amazon_bedrock_ars_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.amazonBedrockArsAction"></a>

```python
amazon_bedrock_ars_action: str
```

- *Type:* str

---

##### `amazon_bedrock_fs_action`<sup>Required</sup> <a name="amazon_bedrock_fs_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.amazonBedrockFsAction"></a>

```python
amazon_bedrock_fs_action: str
```

- *Type:* str

---

##### `amazon_bedrock_krs_action`<sup>Required</sup> <a name="amazon_bedrock_krs_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.amazonBedrockKrsAction"></a>

```python
amazon_bedrock_krs_action: str
```

- *Type:* str

---

##### `amazon_s_three_action`<sup>Required</sup> <a name="amazon_s_three_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.amazonSThreeAction"></a>

```python
amazon_s_three_action: str
```

- *Type:* str

---

##### `analysis`<sup>Required</sup> <a name="analysis" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.analysis"></a>

```python
analysis: str
```

- *Type:* str

---

##### `approve_flow_share_requests`<sup>Required</sup> <a name="approve_flow_share_requests" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.approveFlowShareRequests"></a>

```python
approve_flow_share_requests: str
```

- *Type:* str

---

##### `apps`<sup>Required</sup> <a name="apps" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.apps"></a>

```python
apps: str
```

- *Type:* str

---

##### `asana_action`<sup>Required</sup> <a name="asana_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.asanaAction"></a>

```python
asana_action: str
```

- *Type:* str

---

##### `automate`<sup>Required</sup> <a name="automate" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.automate"></a>

```python
automate: str
```

- *Type:* str

---

##### `bamboo_hr_action`<sup>Required</sup> <a name="bamboo_hr_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.bambooHrAction"></a>

```python
bamboo_hr_action: str
```

- *Type:* str

---

##### `box_agent_action`<sup>Required</sup> <a name="box_agent_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.boxAgentAction"></a>

```python
box_agent_action: str
```

- *Type:* str

---

##### `build_calculated_field_with_q`<sup>Required</sup> <a name="build_calculated_field_with_q" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.buildCalculatedFieldWithQ"></a>

```python
build_calculated_field_with_q: str
```

- *Type:* str

---

##### `canva_agent_action`<sup>Required</sup> <a name="canva_agent_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.canvaAgentAction"></a>

```python
canva_agent_action: str
```

- *Type:* str

---

##### `chat_agent`<sup>Required</sup> <a name="chat_agent" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.chatAgent"></a>

```python
chat_agent: str
```

- *Type:* str

---

##### `comprehend_action`<sup>Required</sup> <a name="comprehend_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.comprehendAction"></a>

```python
comprehend_action: str
```

- *Type:* str

---

##### `comprehend_medical_action`<sup>Required</sup> <a name="comprehend_medical_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.comprehendMedicalAction"></a>

```python
comprehend_medical_action: str
```

- *Type:* str

---

##### `confluence_action`<sup>Required</sup> <a name="confluence_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.confluenceAction"></a>

```python
confluence_action: str
```

- *Type:* str

---

##### `create_and_update_amazon_bedrock_ars_action`<sup>Required</sup> <a name="create_and_update_amazon_bedrock_ars_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateAmazonBedrockArsAction"></a>

```python
create_and_update_amazon_bedrock_ars_action: str
```

- *Type:* str

---

##### `create_and_update_amazon_bedrock_fs_action`<sup>Required</sup> <a name="create_and_update_amazon_bedrock_fs_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateAmazonBedrockFsAction"></a>

```python
create_and_update_amazon_bedrock_fs_action: str
```

- *Type:* str

---

##### `create_and_update_amazon_bedrock_krs_action`<sup>Required</sup> <a name="create_and_update_amazon_bedrock_krs_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateAmazonBedrockKrsAction"></a>

```python
create_and_update_amazon_bedrock_krs_action: str
```

- *Type:* str

---

##### `create_and_update_amazon_s_three_action`<sup>Required</sup> <a name="create_and_update_amazon_s_three_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateAmazonSThreeAction"></a>

```python
create_and_update_amazon_s_three_action: str
```

- *Type:* str

---

##### `create_and_update_apps`<sup>Required</sup> <a name="create_and_update_apps" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateApps"></a>

```python
create_and_update_apps: str
```

- *Type:* str

---

##### `create_and_update_asana_action`<sup>Required</sup> <a name="create_and_update_asana_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateAsanaAction"></a>

```python
create_and_update_asana_action: str
```

- *Type:* str

---

##### `create_and_update_bamboo_hr_action`<sup>Required</sup> <a name="create_and_update_bamboo_hr_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateBambooHrAction"></a>

```python
create_and_update_bamboo_hr_action: str
```

- *Type:* str

---

##### `create_and_update_box_agent_action`<sup>Required</sup> <a name="create_and_update_box_agent_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateBoxAgentAction"></a>

```python
create_and_update_box_agent_action: str
```

- *Type:* str

---

##### `create_and_update_canva_agent_action`<sup>Required</sup> <a name="create_and_update_canva_agent_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateCanvaAgentAction"></a>

```python
create_and_update_canva_agent_action: str
```

- *Type:* str

---

##### `create_and_update_comprehend_action`<sup>Required</sup> <a name="create_and_update_comprehend_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateComprehendAction"></a>

```python
create_and_update_comprehend_action: str
```

- *Type:* str

---

##### `create_and_update_comprehend_medical_action`<sup>Required</sup> <a name="create_and_update_comprehend_medical_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateComprehendMedicalAction"></a>

```python
create_and_update_comprehend_medical_action: str
```

- *Type:* str

---

##### `create_and_update_confluence_action`<sup>Required</sup> <a name="create_and_update_confluence_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateConfluenceAction"></a>

```python
create_and_update_confluence_action: str
```

- *Type:* str

---

##### `create_and_update_dashboard_email_reports`<sup>Required</sup> <a name="create_and_update_dashboard_email_reports" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateDashboardEmailReports"></a>

```python
create_and_update_dashboard_email_reports: str
```

- *Type:* str

---

##### `create_and_update_datasets`<sup>Required</sup> <a name="create_and_update_datasets" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateDatasets"></a>

```python
create_and_update_datasets: str
```

- *Type:* str

---

##### `create_and_update_data_sources`<sup>Required</sup> <a name="create_and_update_data_sources" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateDataSources"></a>

```python
create_and_update_data_sources: str
```

- *Type:* str

---

##### `create_and_update_fact_set_action`<sup>Required</sup> <a name="create_and_update_fact_set_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateFactSetAction"></a>

```python
create_and_update_fact_set_action: str
```

- *Type:* str

---

##### `create_and_update_generic_http_action`<sup>Required</sup> <a name="create_and_update_generic_http_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateGenericHttpAction"></a>

```python
create_and_update_generic_http_action: str
```

- *Type:* str

---

##### `create_and_update_github_action`<sup>Required</sup> <a name="create_and_update_github_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateGithubAction"></a>

```python
create_and_update_github_action: str
```

- *Type:* str

---

##### `create_and_update_google_calendar_action`<sup>Required</sup> <a name="create_and_update_google_calendar_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateGoogleCalendarAction"></a>

```python
create_and_update_google_calendar_action: str
```

- *Type:* str

---

##### `create_and_update_hubspot_action`<sup>Required</sup> <a name="create_and_update_hubspot_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateHubspotAction"></a>

```python
create_and_update_hubspot_action: str
```

- *Type:* str

---

##### `create_and_update_hugging_face_action`<sup>Required</sup> <a name="create_and_update_hugging_face_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateHuggingFaceAction"></a>

```python
create_and_update_hugging_face_action: str
```

- *Type:* str

---

##### `create_and_update_intercom_action`<sup>Required</sup> <a name="create_and_update_intercom_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateIntercomAction"></a>

```python
create_and_update_intercom_action: str
```

- *Type:* str

---

##### `create_and_update_jira_action`<sup>Required</sup> <a name="create_and_update_jira_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateJiraAction"></a>

```python
create_and_update_jira_action: str
```

- *Type:* str

---

##### `create_and_update_knowledge_bases`<sup>Required</sup> <a name="create_and_update_knowledge_bases" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateKnowledgeBases"></a>

```python
create_and_update_knowledge_bases: str
```

- *Type:* str

---

##### `create_and_update_linear_action`<sup>Required</sup> <a name="create_and_update_linear_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateLinearAction"></a>

```python
create_and_update_linear_action: str
```

- *Type:* str

---

##### `create_and_update_mcp_action`<sup>Required</sup> <a name="create_and_update_mcp_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateMcpAction"></a>

```python
create_and_update_mcp_action: str
```

- *Type:* str

---

##### `create_and_update_monday_action`<sup>Required</sup> <a name="create_and_update_monday_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateMondayAction"></a>

```python
create_and_update_monday_action: str
```

- *Type:* str

---

##### `create_and_update_ms_exchange_action`<sup>Required</sup> <a name="create_and_update_ms_exchange_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateMsExchangeAction"></a>

```python
create_and_update_ms_exchange_action: str
```

- *Type:* str

---

##### `create_and_update_ms_teams_action`<sup>Required</sup> <a name="create_and_update_ms_teams_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateMsTeamsAction"></a>

```python
create_and_update_ms_teams_action: str
```

- *Type:* str

---

##### `create_and_update_new_relic_action`<sup>Required</sup> <a name="create_and_update_new_relic_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateNewRelicAction"></a>

```python
create_and_update_new_relic_action: str
```

- *Type:* str

---

##### `create_and_update_notion_action`<sup>Required</sup> <a name="create_and_update_notion_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateNotionAction"></a>

```python
create_and_update_notion_action: str
```

- *Type:* str

---

##### `create_and_update_one_drive_action`<sup>Required</sup> <a name="create_and_update_one_drive_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateOneDriveAction"></a>

```python
create_and_update_one_drive_action: str
```

- *Type:* str

---

##### `create_and_update_open_api_action`<sup>Required</sup> <a name="create_and_update_open_api_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateOpenApiAction"></a>

```python
create_and_update_open_api_action: str
```

- *Type:* str

---

##### `create_and_update_pager_duty_action`<sup>Required</sup> <a name="create_and_update_pager_duty_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdatePagerDutyAction"></a>

```python
create_and_update_pager_duty_action: str
```

- *Type:* str

---

##### `create_and_update_salesforce_action`<sup>Required</sup> <a name="create_and_update_salesforce_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSalesforceAction"></a>

```python
create_and_update_salesforce_action: str
```

- *Type:* str

---

##### `create_and_update_sand_p_global_energy_action`<sup>Required</sup> <a name="create_and_update_sand_p_global_energy_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSandPGlobalEnergyAction"></a>

```python
create_and_update_sand_p_global_energy_action: str
```

- *Type:* str

---

##### `create_and_update_sand_pgmi_action`<sup>Required</sup> <a name="create_and_update_sand_pgmi_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSandPgmiAction"></a>

```python
create_and_update_sand_pgmi_action: str
```

- *Type:* str

---

##### `create_and_update_sap_bill_of_material_action`<sup>Required</sup> <a name="create_and_update_sap_bill_of_material_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSapBillOfMaterialAction"></a>

```python
create_and_update_sap_bill_of_material_action: str
```

- *Type:* str

---

##### `create_and_update_sap_business_partner_action`<sup>Required</sup> <a name="create_and_update_sap_business_partner_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSapBusinessPartnerAction"></a>

```python
create_and_update_sap_business_partner_action: str
```

- *Type:* str

---

##### `create_and_update_sap_material_stock_action`<sup>Required</sup> <a name="create_and_update_sap_material_stock_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSapMaterialStockAction"></a>

```python
create_and_update_sap_material_stock_action: str
```

- *Type:* str

---

##### `create_and_update_sap_physical_inventory_action`<sup>Required</sup> <a name="create_and_update_sap_physical_inventory_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSapPhysicalInventoryAction"></a>

```python
create_and_update_sap_physical_inventory_action: str
```

- *Type:* str

---

##### `create_and_update_sap_product_master_data_action`<sup>Required</sup> <a name="create_and_update_sap_product_master_data_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSapProductMasterDataAction"></a>

```python
create_and_update_sap_product_master_data_action: str
```

- *Type:* str

---

##### `create_and_update_service_now_action`<sup>Required</sup> <a name="create_and_update_service_now_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateServiceNowAction"></a>

```python
create_and_update_service_now_action: str
```

- *Type:* str

---

##### `create_and_update_share_point_action`<sup>Required</sup> <a name="create_and_update_share_point_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSharePointAction"></a>

```python
create_and_update_share_point_action: str
```

- *Type:* str

---

##### `create_and_update_slack_action`<sup>Required</sup> <a name="create_and_update_slack_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSlackAction"></a>

```python
create_and_update_slack_action: str
```

- *Type:* str

---

##### `create_and_update_smartsheet_action`<sup>Required</sup> <a name="create_and_update_smartsheet_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSmartsheetAction"></a>

```python
create_and_update_smartsheet_action: str
```

- *Type:* str

---

##### `create_and_update_textract_action`<sup>Required</sup> <a name="create_and_update_textract_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateTextractAction"></a>

```python
create_and_update_textract_action: str
```

- *Type:* str

---

##### `create_and_update_themes`<sup>Required</sup> <a name="create_and_update_themes" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateThemes"></a>

```python
create_and_update_themes: str
```

- *Type:* str

---

##### `create_and_update_threshold_alerts`<sup>Required</sup> <a name="create_and_update_threshold_alerts" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateThresholdAlerts"></a>

```python
create_and_update_threshold_alerts: str
```

- *Type:* str

---

##### `create_and_update_zendesk_action`<sup>Required</sup> <a name="create_and_update_zendesk_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateZendeskAction"></a>

```python
create_and_update_zendesk_action: str
```

- *Type:* str

---

##### `create_chat_agents`<sup>Required</sup> <a name="create_chat_agents" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createChatAgents"></a>

```python
create_chat_agents: str
```

- *Type:* str

---

##### `create_dashboard_executive_summary_with_q`<sup>Required</sup> <a name="create_dashboard_executive_summary_with_q" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createDashboardExecutiveSummaryWithQ"></a>

```python
create_dashboard_executive_summary_with_q: str
```

- *Type:* str

---

##### `create_shared_folders`<sup>Required</sup> <a name="create_shared_folders" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createSharedFolders"></a>

```python
create_shared_folders: str
```

- *Type:* str

---

##### `create_spaces`<sup>Required</sup> <a name="create_spaces" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createSpaces"></a>

```python
create_spaces: str
```

- *Type:* str

---

##### `create_spice_dataset`<sup>Required</sup> <a name="create_spice_dataset" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.createSpiceDataset"></a>

```python
create_spice_dataset: str
```

- *Type:* str

---

##### `dashboard`<sup>Required</sup> <a name="dashboard" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.dashboard"></a>

```python
dashboard: str
```

- *Type:* str

---

##### `edit_visual_with_q`<sup>Required</sup> <a name="edit_visual_with_q" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.editVisualWithQ"></a>

```python
edit_visual_with_q: str
```

- *Type:* str

---

##### `export_to_csv`<sup>Required</sup> <a name="export_to_csv" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToCsv"></a>

```python
export_to_csv: str
```

- *Type:* str

---

##### `export_to_csv_in_scheduled_reports`<sup>Required</sup> <a name="export_to_csv_in_scheduled_reports" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToCsvInScheduledReports"></a>

```python
export_to_csv_in_scheduled_reports: str
```

- *Type:* str

---

##### `export_to_excel`<sup>Required</sup> <a name="export_to_excel" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToExcel"></a>

```python
export_to_excel: str
```

- *Type:* str

---

##### `export_to_excel_in_scheduled_reports`<sup>Required</sup> <a name="export_to_excel_in_scheduled_reports" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToExcelInScheduledReports"></a>

```python
export_to_excel_in_scheduled_reports: str
```

- *Type:* str

---

##### `export_to_pdf`<sup>Required</sup> <a name="export_to_pdf" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToPdf"></a>

```python
export_to_pdf: str
```

- *Type:* str

---

##### `export_to_pdf_in_scheduled_reports`<sup>Required</sup> <a name="export_to_pdf_in_scheduled_reports" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToPdfInScheduledReports"></a>

```python
export_to_pdf_in_scheduled_reports: str
```

- *Type:* str

---

##### `extension`<sup>Required</sup> <a name="extension" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.extension"></a>

```python
extension: str
```

- *Type:* str

---

##### `fact_set_action`<sup>Required</sup> <a name="fact_set_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.factSetAction"></a>

```python
fact_set_action: str
```

- *Type:* str

---

##### `flow`<sup>Required</sup> <a name="flow" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.flow"></a>

```python
flow: str
```

- *Type:* str

---

##### `generic_http_action`<sup>Required</sup> <a name="generic_http_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.genericHttpAction"></a>

```python
generic_http_action: str
```

- *Type:* str

---

##### `github_action`<sup>Required</sup> <a name="github_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.githubAction"></a>

```python
github_action: str
```

- *Type:* str

---

##### `google_calendar_action`<sup>Required</sup> <a name="google_calendar_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.googleCalendarAction"></a>

```python
google_calendar_action: str
```

- *Type:* str

---

##### `hubspot_action`<sup>Required</sup> <a name="hubspot_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.hubspotAction"></a>

```python
hubspot_action: str
```

- *Type:* str

---

##### `hugging_face_action`<sup>Required</sup> <a name="hugging_face_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.huggingFaceAction"></a>

```python
hugging_face_action: str
```

- *Type:* str

---

##### `include_content_in_scheduled_reports_email`<sup>Required</sup> <a name="include_content_in_scheduled_reports_email" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.includeContentInScheduledReportsEmail"></a>

```python
include_content_in_scheduled_reports_email: str
```

- *Type:* str

---

##### `intercom_action`<sup>Required</sup> <a name="intercom_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.intercomAction"></a>

```python
intercom_action: str
```

- *Type:* str

---

##### `invoke_apps_ai_inference`<sup>Required</sup> <a name="invoke_apps_ai_inference" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.invokeAppsAiInference"></a>

```python
invoke_apps_ai_inference: str
```

- *Type:* str

---

##### `jira_action`<sup>Required</sup> <a name="jira_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.jiraAction"></a>

```python
jira_action: str
```

- *Type:* str

---

##### `knowledge_base`<sup>Required</sup> <a name="knowledge_base" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.knowledgeBase"></a>

```python
knowledge_base: str
```

- *Type:* str

---

##### `linear_action`<sup>Required</sup> <a name="linear_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.linearAction"></a>

```python
linear_action: str
```

- *Type:* str

---

##### `manage_shared_folders`<sup>Required</sup> <a name="manage_shared_folders" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.manageSharedFolders"></a>

```python
manage_shared_folders: str
```

- *Type:* str

---

##### `mcp_action`<sup>Required</sup> <a name="mcp_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.mcpAction"></a>

```python
mcp_action: str
```

- *Type:* str

---

##### `monday_action`<sup>Required</sup> <a name="monday_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.mondayAction"></a>

```python
monday_action: str
```

- *Type:* str

---

##### `ms_exchange_action`<sup>Required</sup> <a name="ms_exchange_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.msExchangeAction"></a>

```python
ms_exchange_action: str
```

- *Type:* str

---

##### `ms_teams_action`<sup>Required</sup> <a name="ms_teams_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.msTeamsAction"></a>

```python
ms_teams_action: str
```

- *Type:* str

---

##### `new_relic_action`<sup>Required</sup> <a name="new_relic_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.newRelicAction"></a>

```python
new_relic_action: str
```

- *Type:* str

---

##### `notion_action`<sup>Required</sup> <a name="notion_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.notionAction"></a>

```python
notion_action: str
```

- *Type:* str

---

##### `one_drive_action`<sup>Required</sup> <a name="one_drive_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.oneDriveAction"></a>

```python
one_drive_action: str
```

- *Type:* str

---

##### `open_api_action`<sup>Required</sup> <a name="open_api_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.openApiAction"></a>

```python
open_api_action: str
```

- *Type:* str

---

##### `pager_duty_action`<sup>Required</sup> <a name="pager_duty_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.pagerDutyAction"></a>

```python
pager_duty_action: str
```

- *Type:* str

---

##### `perform_flow_ui_task`<sup>Required</sup> <a name="perform_flow_ui_task" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.performFlowUiTask"></a>

```python
perform_flow_ui_task: str
```

- *Type:* str

---

##### `print_reports`<sup>Required</sup> <a name="print_reports" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.printReports"></a>

```python
print_reports: str
```

- *Type:* str

---

##### `publish_without_approval`<sup>Required</sup> <a name="publish_without_approval" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.publishWithoutApproval"></a>

```python
publish_without_approval: str
```

- *Type:* str

---

##### `rename_shared_folders`<sup>Required</sup> <a name="rename_shared_folders" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.renameSharedFolders"></a>

```python
rename_shared_folders: str
```

- *Type:* str

---

##### `research`<sup>Required</sup> <a name="research" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.research"></a>

```python
research: str
```

- *Type:* str

---

##### `salesforce_action`<sup>Required</sup> <a name="salesforce_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.salesforceAction"></a>

```python
salesforce_action: str
```

- *Type:* str

---

##### `sand_p_global_energy_action`<sup>Required</sup> <a name="sand_p_global_energy_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.sandPGlobalEnergyAction"></a>

```python
sand_p_global_energy_action: str
```

- *Type:* str

---

##### `sand_pgmi_action`<sup>Required</sup> <a name="sand_pgmi_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.sandPgmiAction"></a>

```python
sand_pgmi_action: str
```

- *Type:* str

---

##### `sap_bill_of_material_action`<sup>Required</sup> <a name="sap_bill_of_material_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.sapBillOfMaterialAction"></a>

```python
sap_bill_of_material_action: str
```

- *Type:* str

---

##### `sap_business_partner_action`<sup>Required</sup> <a name="sap_business_partner_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.sapBusinessPartnerAction"></a>

```python
sap_business_partner_action: str
```

- *Type:* str

---

##### `sap_material_stock_action`<sup>Required</sup> <a name="sap_material_stock_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.sapMaterialStockAction"></a>

```python
sap_material_stock_action: str
```

- *Type:* str

---

##### `sap_physical_inventory_action`<sup>Required</sup> <a name="sap_physical_inventory_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.sapPhysicalInventoryAction"></a>

```python
sap_physical_inventory_action: str
```

- *Type:* str

---

##### `sap_product_master_data_action`<sup>Required</sup> <a name="sap_product_master_data_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.sapProductMasterDataAction"></a>

```python
sap_product_master_data_action: str
```

- *Type:* str

---

##### `service_now_action`<sup>Required</sup> <a name="service_now_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.serviceNowAction"></a>

```python
service_now_action: str
```

- *Type:* str

---

##### `share_amazon_bedrock_ars_action`<sup>Required</sup> <a name="share_amazon_bedrock_ars_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAmazonBedrockArsAction"></a>

```python
share_amazon_bedrock_ars_action: str
```

- *Type:* str

---

##### `share_amazon_bedrock_fs_action`<sup>Required</sup> <a name="share_amazon_bedrock_fs_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAmazonBedrockFsAction"></a>

```python
share_amazon_bedrock_fs_action: str
```

- *Type:* str

---

##### `share_amazon_bedrock_krs_action`<sup>Required</sup> <a name="share_amazon_bedrock_krs_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAmazonBedrockKrsAction"></a>

```python
share_amazon_bedrock_krs_action: str
```

- *Type:* str

---

##### `share_amazon_s_three_action`<sup>Required</sup> <a name="share_amazon_s_three_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAmazonSThreeAction"></a>

```python
share_amazon_s_three_action: str
```

- *Type:* str

---

##### `share_analyses`<sup>Required</sup> <a name="share_analyses" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAnalyses"></a>

```python
share_analyses: str
```

- *Type:* str

---

##### `share_apps`<sup>Required</sup> <a name="share_apps" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareApps"></a>

```python
share_apps: str
```

- *Type:* str

---

##### `share_asana_action`<sup>Required</sup> <a name="share_asana_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAsanaAction"></a>

```python
share_asana_action: str
```

- *Type:* str

---

##### `share_bamboo_hr_action`<sup>Required</sup> <a name="share_bamboo_hr_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareBambooHrAction"></a>

```python
share_bamboo_hr_action: str
```

- *Type:* str

---

##### `share_box_agent_action`<sup>Required</sup> <a name="share_box_agent_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareBoxAgentAction"></a>

```python
share_box_agent_action: str
```

- *Type:* str

---

##### `share_canva_agent_action`<sup>Required</sup> <a name="share_canva_agent_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareCanvaAgentAction"></a>

```python
share_canva_agent_action: str
```

- *Type:* str

---

##### `share_chat_agents`<sup>Required</sup> <a name="share_chat_agents" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareChatAgents"></a>

```python
share_chat_agents: str
```

- *Type:* str

---

##### `share_comprehend_action`<sup>Required</sup> <a name="share_comprehend_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareComprehendAction"></a>

```python
share_comprehend_action: str
```

- *Type:* str

---

##### `share_comprehend_medical_action`<sup>Required</sup> <a name="share_comprehend_medical_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareComprehendMedicalAction"></a>

```python
share_comprehend_medical_action: str
```

- *Type:* str

---

##### `share_confluence_action`<sup>Required</sup> <a name="share_confluence_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareConfluenceAction"></a>

```python
share_confluence_action: str
```

- *Type:* str

---

##### `share_dashboards`<sup>Required</sup> <a name="share_dashboards" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareDashboards"></a>

```python
share_dashboards: str
```

- *Type:* str

---

##### `share_datasets`<sup>Required</sup> <a name="share_datasets" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareDatasets"></a>

```python
share_datasets: str
```

- *Type:* str

---

##### `share_data_sources`<sup>Required</sup> <a name="share_data_sources" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareDataSources"></a>

```python
share_data_sources: str
```

- *Type:* str

---

##### `share_fact_set_action`<sup>Required</sup> <a name="share_fact_set_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareFactSetAction"></a>

```python
share_fact_set_action: str
```

- *Type:* str

---

##### `share_generic_http_action`<sup>Required</sup> <a name="share_generic_http_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareGenericHttpAction"></a>

```python
share_generic_http_action: str
```

- *Type:* str

---

##### `share_github_action`<sup>Required</sup> <a name="share_github_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareGithubAction"></a>

```python
share_github_action: str
```

- *Type:* str

---

##### `share_google_calendar_action`<sup>Required</sup> <a name="share_google_calendar_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareGoogleCalendarAction"></a>

```python
share_google_calendar_action: str
```

- *Type:* str

---

##### `share_hubspot_action`<sup>Required</sup> <a name="share_hubspot_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareHubspotAction"></a>

```python
share_hubspot_action: str
```

- *Type:* str

---

##### `share_hugging_face_action`<sup>Required</sup> <a name="share_hugging_face_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareHuggingFaceAction"></a>

```python
share_hugging_face_action: str
```

- *Type:* str

---

##### `share_intercom_action`<sup>Required</sup> <a name="share_intercom_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareIntercomAction"></a>

```python
share_intercom_action: str
```

- *Type:* str

---

##### `share_jira_action`<sup>Required</sup> <a name="share_jira_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareJiraAction"></a>

```python
share_jira_action: str
```

- *Type:* str

---

##### `share_knowledge_bases`<sup>Required</sup> <a name="share_knowledge_bases" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareKnowledgeBases"></a>

```python
share_knowledge_bases: str
```

- *Type:* str

---

##### `share_linear_action`<sup>Required</sup> <a name="share_linear_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareLinearAction"></a>

```python
share_linear_action: str
```

- *Type:* str

---

##### `share_mcp_action`<sup>Required</sup> <a name="share_mcp_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareMcpAction"></a>

```python
share_mcp_action: str
```

- *Type:* str

---

##### `share_monday_action`<sup>Required</sup> <a name="share_monday_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareMondayAction"></a>

```python
share_monday_action: str
```

- *Type:* str

---

##### `share_ms_exchange_action`<sup>Required</sup> <a name="share_ms_exchange_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareMsExchangeAction"></a>

```python
share_ms_exchange_action: str
```

- *Type:* str

---

##### `share_ms_teams_action`<sup>Required</sup> <a name="share_ms_teams_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareMsTeamsAction"></a>

```python
share_ms_teams_action: str
```

- *Type:* str

---

##### `share_new_relic_action`<sup>Required</sup> <a name="share_new_relic_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareNewRelicAction"></a>

```python
share_new_relic_action: str
```

- *Type:* str

---

##### `share_notion_action`<sup>Required</sup> <a name="share_notion_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareNotionAction"></a>

```python
share_notion_action: str
```

- *Type:* str

---

##### `share_one_drive_action`<sup>Required</sup> <a name="share_one_drive_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareOneDriveAction"></a>

```python
share_one_drive_action: str
```

- *Type:* str

---

##### `share_open_api_action`<sup>Required</sup> <a name="share_open_api_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareOpenApiAction"></a>

```python
share_open_api_action: str
```

- *Type:* str

---

##### `share_pager_duty_action`<sup>Required</sup> <a name="share_pager_duty_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.sharePagerDutyAction"></a>

```python
share_pager_duty_action: str
```

- *Type:* str

---

##### `share_point_action`<sup>Required</sup> <a name="share_point_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.sharePointAction"></a>

```python
share_point_action: str
```

- *Type:* str

---

##### `share_salesforce_action`<sup>Required</sup> <a name="share_salesforce_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSalesforceAction"></a>

```python
share_salesforce_action: str
```

- *Type:* str

---

##### `share_sand_p_global_energy_action`<sup>Required</sup> <a name="share_sand_p_global_energy_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSandPGlobalEnergyAction"></a>

```python
share_sand_p_global_energy_action: str
```

- *Type:* str

---

##### `share_sand_pgmi_action`<sup>Required</sup> <a name="share_sand_pgmi_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSandPgmiAction"></a>

```python
share_sand_pgmi_action: str
```

- *Type:* str

---

##### `share_sap_bill_of_material_action`<sup>Required</sup> <a name="share_sap_bill_of_material_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSapBillOfMaterialAction"></a>

```python
share_sap_bill_of_material_action: str
```

- *Type:* str

---

##### `share_sap_business_partner_action`<sup>Required</sup> <a name="share_sap_business_partner_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSapBusinessPartnerAction"></a>

```python
share_sap_business_partner_action: str
```

- *Type:* str

---

##### `share_sap_material_stock_action`<sup>Required</sup> <a name="share_sap_material_stock_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSapMaterialStockAction"></a>

```python
share_sap_material_stock_action: str
```

- *Type:* str

---

##### `share_sap_physical_inventory_action`<sup>Required</sup> <a name="share_sap_physical_inventory_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSapPhysicalInventoryAction"></a>

```python
share_sap_physical_inventory_action: str
```

- *Type:* str

---

##### `share_sap_product_master_data_action`<sup>Required</sup> <a name="share_sap_product_master_data_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSapProductMasterDataAction"></a>

```python
share_sap_product_master_data_action: str
```

- *Type:* str

---

##### `share_service_now_action`<sup>Required</sup> <a name="share_service_now_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareServiceNowAction"></a>

```python
share_service_now_action: str
```

- *Type:* str

---

##### `share_share_point_action`<sup>Required</sup> <a name="share_share_point_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSharePointAction"></a>

```python
share_share_point_action: str
```

- *Type:* str

---

##### `share_slack_action`<sup>Required</sup> <a name="share_slack_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSlackAction"></a>

```python
share_slack_action: str
```

- *Type:* str

---

##### `share_smartsheet_action`<sup>Required</sup> <a name="share_smartsheet_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSmartsheetAction"></a>

```python
share_smartsheet_action: str
```

- *Type:* str

---

##### `share_spaces`<sup>Required</sup> <a name="share_spaces" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSpaces"></a>

```python
share_spaces: str
```

- *Type:* str

---

##### `share_textract_action`<sup>Required</sup> <a name="share_textract_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareTextractAction"></a>

```python
share_textract_action: str
```

- *Type:* str

---

##### `share_zendesk_action`<sup>Required</sup> <a name="share_zendesk_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.shareZendeskAction"></a>

```python
share_zendesk_action: str
```

- *Type:* str

---

##### `slack_action`<sup>Required</sup> <a name="slack_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.slackAction"></a>

```python
slack_action: str
```

- *Type:* str

---

##### `smartsheet_action`<sup>Required</sup> <a name="smartsheet_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.smartsheetAction"></a>

```python
smartsheet_action: str
```

- *Type:* str

---

##### `space`<sup>Required</sup> <a name="space" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.space"></a>

```python
space: str
```

- *Type:* str

---

##### `subscribe_dashboard_email_reports`<sup>Required</sup> <a name="subscribe_dashboard_email_reports" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.subscribeDashboardEmailReports"></a>

```python
subscribe_dashboard_email_reports: str
```

- *Type:* str

---

##### `textract_action`<sup>Required</sup> <a name="textract_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.textractAction"></a>

```python
textract_action: str
```

- *Type:* str

---

##### `topic`<sup>Required</sup> <a name="topic" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.topic"></a>

```python
topic: str
```

- *Type:* str

---

##### `use_agent_web_search`<sup>Required</sup> <a name="use_agent_web_search" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useAgentWebSearch"></a>

```python
use_agent_web_search: str
```

- *Type:* str

---

##### `use_amazon_bedrock_ars_action`<sup>Required</sup> <a name="use_amazon_bedrock_ars_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useAmazonBedrockArsAction"></a>

```python
use_amazon_bedrock_ars_action: str
```

- *Type:* str

---

##### `use_amazon_bedrock_fs_action`<sup>Required</sup> <a name="use_amazon_bedrock_fs_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useAmazonBedrockFsAction"></a>

```python
use_amazon_bedrock_fs_action: str
```

- *Type:* str

---

##### `use_amazon_bedrock_krs_action`<sup>Required</sup> <a name="use_amazon_bedrock_krs_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useAmazonBedrockKrsAction"></a>

```python
use_amazon_bedrock_krs_action: str
```

- *Type:* str

---

##### `use_amazon_s_three_action`<sup>Required</sup> <a name="use_amazon_s_three_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useAmazonSThreeAction"></a>

```python
use_amazon_s_three_action: str
```

- *Type:* str

---

##### `use_asana_action`<sup>Required</sup> <a name="use_asana_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useAsanaAction"></a>

```python
use_asana_action: str
```

- *Type:* str

---

##### `use_bamboo_hr_action`<sup>Required</sup> <a name="use_bamboo_hr_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useBambooHrAction"></a>

```python
use_bamboo_hr_action: str
```

- *Type:* str

---

##### `use_bedrock_models`<sup>Required</sup> <a name="use_bedrock_models" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useBedrockModels"></a>

```python
use_bedrock_models: str
```

- *Type:* str

---

##### `use_box_agent_action`<sup>Required</sup> <a name="use_box_agent_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useBoxAgentAction"></a>

```python
use_box_agent_action: str
```

- *Type:* str

---

##### `use_canva_agent_action`<sup>Required</sup> <a name="use_canva_agent_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useCanvaAgentAction"></a>

```python
use_canva_agent_action: str
```

- *Type:* str

---

##### `use_comprehend_action`<sup>Required</sup> <a name="use_comprehend_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useComprehendAction"></a>

```python
use_comprehend_action: str
```

- *Type:* str

---

##### `use_comprehend_medical_action`<sup>Required</sup> <a name="use_comprehend_medical_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useComprehendMedicalAction"></a>

```python
use_comprehend_medical_action: str
```

- *Type:* str

---

##### `use_confluence_action`<sup>Required</sup> <a name="use_confluence_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useConfluenceAction"></a>

```python
use_confluence_action: str
```

- *Type:* str

---

##### `use_fact_set_action`<sup>Required</sup> <a name="use_fact_set_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useFactSetAction"></a>

```python
use_fact_set_action: str
```

- *Type:* str

---

##### `use_generic_http_action`<sup>Required</sup> <a name="use_generic_http_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useGenericHttpAction"></a>

```python
use_generic_http_action: str
```

- *Type:* str

---

##### `use_github_action`<sup>Required</sup> <a name="use_github_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useGithubAction"></a>

```python
use_github_action: str
```

- *Type:* str

---

##### `use_google_calendar_action`<sup>Required</sup> <a name="use_google_calendar_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useGoogleCalendarAction"></a>

```python
use_google_calendar_action: str
```

- *Type:* str

---

##### `use_hubspot_action`<sup>Required</sup> <a name="use_hubspot_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useHubspotAction"></a>

```python
use_hubspot_action: str
```

- *Type:* str

---

##### `use_hugging_face_action`<sup>Required</sup> <a name="use_hugging_face_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useHuggingFaceAction"></a>

```python
use_hugging_face_action: str
```

- *Type:* str

---

##### `use_intercom_action`<sup>Required</sup> <a name="use_intercom_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useIntercomAction"></a>

```python
use_intercom_action: str
```

- *Type:* str

---

##### `use_jira_action`<sup>Required</sup> <a name="use_jira_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useJiraAction"></a>

```python
use_jira_action: str
```

- *Type:* str

---

##### `use_linear_action`<sup>Required</sup> <a name="use_linear_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useLinearAction"></a>

```python
use_linear_action: str
```

- *Type:* str

---

##### `use_mcp_action`<sup>Required</sup> <a name="use_mcp_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useMcpAction"></a>

```python
use_mcp_action: str
```

- *Type:* str

---

##### `use_monday_action`<sup>Required</sup> <a name="use_monday_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useMondayAction"></a>

```python
use_monday_action: str
```

- *Type:* str

---

##### `use_ms_exchange_action`<sup>Required</sup> <a name="use_ms_exchange_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useMsExchangeAction"></a>

```python
use_ms_exchange_action: str
```

- *Type:* str

---

##### `use_ms_teams_action`<sup>Required</sup> <a name="use_ms_teams_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useMsTeamsAction"></a>

```python
use_ms_teams_action: str
```

- *Type:* str

---

##### `use_new_relic_action`<sup>Required</sup> <a name="use_new_relic_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useNewRelicAction"></a>

```python
use_new_relic_action: str
```

- *Type:* str

---

##### `use_notion_action`<sup>Required</sup> <a name="use_notion_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useNotionAction"></a>

```python
use_notion_action: str
```

- *Type:* str

---

##### `use_one_drive_action`<sup>Required</sup> <a name="use_one_drive_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useOneDriveAction"></a>

```python
use_one_drive_action: str
```

- *Type:* str

---

##### `use_open_api_action`<sup>Required</sup> <a name="use_open_api_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useOpenApiAction"></a>

```python
use_open_api_action: str
```

- *Type:* str

---

##### `use_pager_duty_action`<sup>Required</sup> <a name="use_pager_duty_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.usePagerDutyAction"></a>

```python
use_pager_duty_action: str
```

- *Type:* str

---

##### `use_salesforce_action`<sup>Required</sup> <a name="use_salesforce_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSalesforceAction"></a>

```python
use_salesforce_action: str
```

- *Type:* str

---

##### `use_sand_p_global_energy_action`<sup>Required</sup> <a name="use_sand_p_global_energy_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSandPGlobalEnergyAction"></a>

```python
use_sand_p_global_energy_action: str
```

- *Type:* str

---

##### `use_sand_pgmi_action`<sup>Required</sup> <a name="use_sand_pgmi_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSandPgmiAction"></a>

```python
use_sand_pgmi_action: str
```

- *Type:* str

---

##### `use_sap_bill_of_material_action`<sup>Required</sup> <a name="use_sap_bill_of_material_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSapBillOfMaterialAction"></a>

```python
use_sap_bill_of_material_action: str
```

- *Type:* str

---

##### `use_sap_business_partner_action`<sup>Required</sup> <a name="use_sap_business_partner_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSapBusinessPartnerAction"></a>

```python
use_sap_business_partner_action: str
```

- *Type:* str

---

##### `use_sap_material_stock_action`<sup>Required</sup> <a name="use_sap_material_stock_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSapMaterialStockAction"></a>

```python
use_sap_material_stock_action: str
```

- *Type:* str

---

##### `use_sap_physical_inventory_action`<sup>Required</sup> <a name="use_sap_physical_inventory_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSapPhysicalInventoryAction"></a>

```python
use_sap_physical_inventory_action: str
```

- *Type:* str

---

##### `use_sap_product_master_data_action`<sup>Required</sup> <a name="use_sap_product_master_data_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSapProductMasterDataAction"></a>

```python
use_sap_product_master_data_action: str
```

- *Type:* str

---

##### `use_service_now_action`<sup>Required</sup> <a name="use_service_now_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useServiceNowAction"></a>

```python
use_service_now_action: str
```

- *Type:* str

---

##### `use_share_point_action`<sup>Required</sup> <a name="use_share_point_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSharePointAction"></a>

```python
use_share_point_action: str
```

- *Type:* str

---

##### `use_slack_action`<sup>Required</sup> <a name="use_slack_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSlackAction"></a>

```python
use_slack_action: str
```

- *Type:* str

---

##### `use_smartsheet_action`<sup>Required</sup> <a name="use_smartsheet_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useSmartsheetAction"></a>

```python
use_smartsheet_action: str
```

- *Type:* str

---

##### `use_textract_action`<sup>Required</sup> <a name="use_textract_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useTextractAction"></a>

```python
use_textract_action: str
```

- *Type:* str

---

##### `use_zendesk_action`<sup>Required</sup> <a name="use_zendesk_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.useZendeskAction"></a>

```python
use_zendesk_action: str
```

- *Type:* str

---

##### `view_account_spice_capacity`<sup>Required</sup> <a name="view_account_spice_capacity" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.viewAccountSpiceCapacity"></a>

```python
view_account_spice_capacity: str
```

- *Type:* str

---

##### `zendesk_action`<sup>Required</sup> <a name="zendesk_action" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.zendeskAction"></a>

```python
zendesk_action: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilitiesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | QuicksightCustomPermissionsCapabilities
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsCapabilities">QuicksightCustomPermissionsCapabilities</a>

---


### QuicksightCustomPermissionsTagsList <a name="QuicksightCustomPermissionsTagsList" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_custom_permissions

quicksightCustomPermissions.QuicksightCustomPermissionsTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> QuicksightCustomPermissionsTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTags">QuicksightCustomPermissionsTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[QuicksightCustomPermissionsTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTags">QuicksightCustomPermissionsTags</a>]

---


### QuicksightCustomPermissionsTagsOutputReference <a name="QuicksightCustomPermissionsTagsOutputReference" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_custom_permissions

quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTags">QuicksightCustomPermissionsTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | QuicksightCustomPermissionsTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightCustomPermissions.QuicksightCustomPermissionsTags">QuicksightCustomPermissionsTags</a>

---



