# `workspaceswebNetworkSettings` Submodule <a name="`workspaceswebNetworkSettings` Submodule" id="@cdktn/provider-awscc.workspaceswebNetworkSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WorkspaceswebNetworkSettings <a name="WorkspaceswebNetworkSettings" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/workspacesweb_network_settings awscc_workspacesweb_network_settings}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.Initializer"></a>

```python
from cdktn_provider_awscc import workspacesweb_network_settings

workspaceswebNetworkSettings.WorkspaceswebNetworkSettings(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  security_group_ids: typing.List[str],
  subnet_ids: typing.List[str],
  vpc_id: str,
  tags: IResolvable | typing.List[WorkspaceswebNetworkSettingsTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.Initializer.parameter.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/workspacesweb_network_settings#security_group_ids WorkspaceswebNetworkSettings#security_group_ids}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.Initializer.parameter.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/workspacesweb_network_settings#subnet_ids WorkspaceswebNetworkSettings#subnet_ids}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.Initializer.parameter.vpcId">vpc_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/workspacesweb_network_settings#vpc_id WorkspaceswebNetworkSettings#vpc_id}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTags">WorkspaceswebNetworkSettingsTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/workspacesweb_network_settings#tags WorkspaceswebNetworkSettings#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `security_group_ids`<sup>Required</sup> <a name="security_group_ids" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.Initializer.parameter.securityGroupIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/workspacesweb_network_settings#security_group_ids WorkspaceswebNetworkSettings#security_group_ids}.

---

##### `subnet_ids`<sup>Required</sup> <a name="subnet_ids" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.Initializer.parameter.subnetIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/workspacesweb_network_settings#subnet_ids WorkspaceswebNetworkSettings#subnet_ids}.

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.Initializer.parameter.vpcId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/workspacesweb_network_settings#vpc_id WorkspaceswebNetworkSettings#vpc_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTags">WorkspaceswebNetworkSettingsTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/workspacesweb_network_settings#tags WorkspaceswebNetworkSettings#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[WorkspaceswebNetworkSettingsTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTags">WorkspaceswebNetworkSettingsTags</a>]

---

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a WorkspaceswebNetworkSettings resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.isConstruct"></a>

```python
from cdktn_provider_awscc import workspacesweb_network_settings

workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.isTerraformElement"></a>

```python
from cdktn_provider_awscc import workspacesweb_network_settings

workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.isTerraformResource"></a>

```python
from cdktn_provider_awscc import workspacesweb_network_settings

workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import workspacesweb_network_settings

workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a WorkspaceswebNetworkSettings resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the WorkspaceswebNetworkSettings to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing WorkspaceswebNetworkSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/workspacesweb_network_settings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the WorkspaceswebNetworkSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.property.associatedPortalArns">associated_portal_arns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.property.networkSettingsArn">network_settings_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsList">WorkspaceswebNetworkSettingsTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.property.securityGroupIdsInput">security_group_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.property.subnetIdsInput">subnet_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTags">WorkspaceswebNetworkSettingsTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.property.vpcIdInput">vpc_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.property.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.property.vpcId">vpc_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `associated_portal_arns`<sup>Required</sup> <a name="associated_portal_arns" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.property.associatedPortalArns"></a>

```python
associated_portal_arns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `network_settings_arn`<sup>Required</sup> <a name="network_settings_arn" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.property.networkSettingsArn"></a>

```python
network_settings_arn: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.property.tags"></a>

```python
tags: WorkspaceswebNetworkSettingsTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsList">WorkspaceswebNetworkSettingsTagsList</a>

---

##### `security_group_ids_input`<sup>Optional</sup> <a name="security_group_ids_input" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.property.securityGroupIdsInput"></a>

```python
security_group_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_ids_input`<sup>Optional</sup> <a name="subnet_ids_input" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.property.subnetIdsInput"></a>

```python
subnet_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[WorkspaceswebNetworkSettingsTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTags">WorkspaceswebNetworkSettingsTags</a>]

---

##### `vpc_id_input`<sup>Optional</sup> <a name="vpc_id_input" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.property.vpcIdInput"></a>

```python
vpc_id_input: str
```

- *Type:* str

---

##### `security_group_ids`<sup>Required</sup> <a name="security_group_ids" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_ids`<sup>Required</sup> <a name="subnet_ids" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.property.subnetIds"></a>

```python
subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### WorkspaceswebNetworkSettingsConfig <a name="WorkspaceswebNetworkSettingsConfig" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsConfig.Initializer"></a>

```python
from cdktn_provider_awscc import workspacesweb_network_settings

workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  security_group_ids: typing.List[str],
  subnet_ids: typing.List[str],
  vpc_id: str,
  tags: IResolvable | typing.List[WorkspaceswebNetworkSettingsTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsConfig.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/workspacesweb_network_settings#security_group_ids WorkspaceswebNetworkSettings#security_group_ids}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsConfig.property.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/workspacesweb_network_settings#subnet_ids WorkspaceswebNetworkSettings#subnet_ids}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsConfig.property.vpcId">vpc_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/workspacesweb_network_settings#vpc_id WorkspaceswebNetworkSettings#vpc_id}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTags">WorkspaceswebNetworkSettingsTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/workspacesweb_network_settings#tags WorkspaceswebNetworkSettings#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `security_group_ids`<sup>Required</sup> <a name="security_group_ids" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsConfig.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/workspacesweb_network_settings#security_group_ids WorkspaceswebNetworkSettings#security_group_ids}.

---

##### `subnet_ids`<sup>Required</sup> <a name="subnet_ids" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsConfig.property.subnetIds"></a>

```python
subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/workspacesweb_network_settings#subnet_ids WorkspaceswebNetworkSettings#subnet_ids}.

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsConfig.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/workspacesweb_network_settings#vpc_id WorkspaceswebNetworkSettings#vpc_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[WorkspaceswebNetworkSettingsTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTags">WorkspaceswebNetworkSettingsTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/workspacesweb_network_settings#tags WorkspaceswebNetworkSettings#tags}.

---

### WorkspaceswebNetworkSettingsTags <a name="WorkspaceswebNetworkSettingsTags" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTags.Initializer"></a>

```python
from cdktn_provider_awscc import workspacesweb_network_settings

workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/workspacesweb_network_settings#key WorkspaceswebNetworkSettings#key}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/workspacesweb_network_settings#value WorkspaceswebNetworkSettings#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/workspacesweb_network_settings#key WorkspaceswebNetworkSettings#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/workspacesweb_network_settings#value WorkspaceswebNetworkSettings#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### WorkspaceswebNetworkSettingsTagsList <a name="WorkspaceswebNetworkSettingsTagsList" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import workspacesweb_network_settings

workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> WorkspaceswebNetworkSettingsTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTags">WorkspaceswebNetworkSettingsTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[WorkspaceswebNetworkSettingsTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTags">WorkspaceswebNetworkSettingsTags</a>]

---


### WorkspaceswebNetworkSettingsTagsOutputReference <a name="WorkspaceswebNetworkSettingsTagsOutputReference" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import workspacesweb_network_settings

workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTags">WorkspaceswebNetworkSettingsTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | WorkspaceswebNetworkSettingsTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTags">WorkspaceswebNetworkSettingsTags</a>

---



