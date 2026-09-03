# `nimblestudioStudio` Submodule <a name="`nimblestudioStudio` Submodule" id="@cdktn/provider-awscc.nimblestudioStudio"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NimblestudioStudio <a name="NimblestudioStudio" id="@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudio"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/nimblestudio_studio awscc_nimblestudio_studio}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudio.Initializer"></a>

```python
from cdktn_provider_awscc import nimblestudio_studio

nimblestudioStudio.NimblestudioStudio(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  admin_role_arn: str,
  display_name: str,
  studio_name: str,
  user_role_arn: str,
  studio_encryption_configuration: NimblestudioStudioStudioEncryptionConfiguration = None,
  tags: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudio.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudio.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudio.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudio.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudio.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudio.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudio.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudio.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudio.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudio.Initializer.parameter.adminRoleArn">admin_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/nimblestudio_studio#admin_role_arn NimblestudioStudio#admin_role_arn}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudio.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/nimblestudio_studio#display_name NimblestudioStudio#display_name}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudio.Initializer.parameter.studioName">studio_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/nimblestudio_studio#studio_name NimblestudioStudio#studio_name}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudio.Initializer.parameter.userRoleArn">user_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/nimblestudio_studio#user_role_arn NimblestudioStudio#user_role_arn}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudio.Initializer.parameter.studioEncryptionConfiguration">studio_encryption_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudioStudioEncryptionConfiguration">NimblestudioStudioStudioEncryptionConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/nimblestudio_studio#studio_encryption_configuration NimblestudioStudio#studio_encryption_configuration}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudio.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/nimblestudio_studio#tags NimblestudioStudio#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudio.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudio.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudio.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudio.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudio.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudio.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudio.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudio.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudio.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `admin_role_arn`<sup>Required</sup> <a name="admin_role_arn" id="@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudio.Initializer.parameter.adminRoleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/nimblestudio_studio#admin_role_arn NimblestudioStudio#admin_role_arn}.

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudio.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/nimblestudio_studio#display_name NimblestudioStudio#display_name}.

---

##### `studio_name`<sup>Required</sup> <a name="studio_name" id="@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudio.Initializer.parameter.studioName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/nimblestudio_studio#studio_name NimblestudioStudio#studio_name}.

---

##### `user_role_arn`<sup>Required</sup> <a name="user_role_arn" id="@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudio.Initializer.parameter.userRoleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/nimblestudio_studio#user_role_arn NimblestudioStudio#user_role_arn}.

---

##### `studio_encryption_configuration`<sup>Optional</sup> <a name="studio_encryption_configuration" id="@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudio.Initializer.parameter.studioEncryptionConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudioStudioEncryptionConfiguration">NimblestudioStudioStudioEncryptionConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/nimblestudio_studio#studio_encryption_configuration NimblestudioStudio#studio_encryption_configuration}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudio.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/nimblestudio_studio#tags NimblestudioStudio#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudio.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudio.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudio.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudio.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudio.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudio.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudio.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudio.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudio.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudio.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudio.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudio.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudio.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudio.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudio.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudio.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudio.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudio.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudio.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudio.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudio.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudio.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudio.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudio.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudio.putStudioEncryptionConfiguration">put_studio_encryption_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudio.resetStudioEncryptionConfiguration">reset_studio_encryption_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudio.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudio.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudio.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudio.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudio.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudio.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudio.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudio.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudio.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudio.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudio.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudio.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudio.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudio.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudio.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudio.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudio.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudio.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudio.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudio.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudio.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudio.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudio.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudio.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudio.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudio.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudio.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudio.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudio.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudio.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudio.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudio.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudio.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudio.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudio.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudio.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudio.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudio.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudio.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudio.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudio.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudio.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudio.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudio.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudio.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudio.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_studio_encryption_configuration` <a name="put_studio_encryption_configuration" id="@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudio.putStudioEncryptionConfiguration"></a>

```python
def put_studio_encryption_configuration(
  key_arn: str = None,
  key_type: str = None
) -> None
```

###### `key_arn`<sup>Optional</sup> <a name="key_arn" id="@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudio.putStudioEncryptionConfiguration.parameter.keyArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/nimblestudio_studio#key_arn NimblestudioStudio#key_arn}.

---

###### `key_type`<sup>Optional</sup> <a name="key_type" id="@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudio.putStudioEncryptionConfiguration.parameter.keyType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/nimblestudio_studio#key_type NimblestudioStudio#key_type}.

---

##### `reset_studio_encryption_configuration` <a name="reset_studio_encryption_configuration" id="@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudio.resetStudioEncryptionConfiguration"></a>

```python
def reset_studio_encryption_configuration() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudio.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudio.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudio.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudio.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudio.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a NimblestudioStudio resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudio.isConstruct"></a>

```python
from cdktn_provider_awscc import nimblestudio_studio

nimblestudioStudio.NimblestudioStudio.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudio.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudio.isTerraformElement"></a>

```python
from cdktn_provider_awscc import nimblestudio_studio

nimblestudioStudio.NimblestudioStudio.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudio.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudio.isTerraformResource"></a>

```python
from cdktn_provider_awscc import nimblestudio_studio

nimblestudioStudio.NimblestudioStudio.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudio.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudio.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import nimblestudio_studio

nimblestudioStudio.NimblestudioStudio.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a NimblestudioStudio resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudio.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudio.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the NimblestudioStudio to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudio.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing NimblestudioStudio that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/nimblestudio_studio#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudio.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the NimblestudioStudio to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudio.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudio.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudio.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudio.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudio.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudio.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudio.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudio.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudio.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudio.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudio.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudio.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudio.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudio.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudio.property.homeRegion">home_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudio.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudio.property.ssoClientId">sso_client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudio.property.studioEncryptionConfiguration">studio_encryption_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudioStudioEncryptionConfigurationOutputReference">NimblestudioStudioStudioEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudio.property.studioId">studio_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudio.property.studioUrl">studio_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudio.property.adminRoleArnInput">admin_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudio.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudio.property.studioEncryptionConfigurationInput">studio_encryption_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudioStudioEncryptionConfiguration">NimblestudioStudioStudioEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudio.property.studioNameInput">studio_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudio.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudio.property.userRoleArnInput">user_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudio.property.adminRoleArn">admin_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudio.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudio.property.studioName">studio_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudio.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudio.property.userRoleArn">user_role_arn</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudio.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudio.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudio.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudio.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudio.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudio.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudio.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudio.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudio.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudio.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudio.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudio.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudio.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudio.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `home_region`<sup>Required</sup> <a name="home_region" id="@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudio.property.homeRegion"></a>

```python
home_region: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudio.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `sso_client_id`<sup>Required</sup> <a name="sso_client_id" id="@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudio.property.ssoClientId"></a>

```python
sso_client_id: str
```

- *Type:* str

---

##### `studio_encryption_configuration`<sup>Required</sup> <a name="studio_encryption_configuration" id="@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudio.property.studioEncryptionConfiguration"></a>

```python
studio_encryption_configuration: NimblestudioStudioStudioEncryptionConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudioStudioEncryptionConfigurationOutputReference">NimblestudioStudioStudioEncryptionConfigurationOutputReference</a>

---

##### `studio_id`<sup>Required</sup> <a name="studio_id" id="@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudio.property.studioId"></a>

```python
studio_id: str
```

- *Type:* str

---

##### `studio_url`<sup>Required</sup> <a name="studio_url" id="@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudio.property.studioUrl"></a>

```python
studio_url: str
```

- *Type:* str

---

##### `admin_role_arn_input`<sup>Optional</sup> <a name="admin_role_arn_input" id="@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudio.property.adminRoleArnInput"></a>

```python
admin_role_arn_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudio.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `studio_encryption_configuration_input`<sup>Optional</sup> <a name="studio_encryption_configuration_input" id="@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudio.property.studioEncryptionConfigurationInput"></a>

```python
studio_encryption_configuration_input: IResolvable | NimblestudioStudioStudioEncryptionConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudioStudioEncryptionConfiguration">NimblestudioStudioStudioEncryptionConfiguration</a>

---

##### `studio_name_input`<sup>Optional</sup> <a name="studio_name_input" id="@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudio.property.studioNameInput"></a>

```python
studio_name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudio.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `user_role_arn_input`<sup>Optional</sup> <a name="user_role_arn_input" id="@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudio.property.userRoleArnInput"></a>

```python
user_role_arn_input: str
```

- *Type:* str

---

##### `admin_role_arn`<sup>Required</sup> <a name="admin_role_arn" id="@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudio.property.adminRoleArn"></a>

```python
admin_role_arn: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudio.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `studio_name`<sup>Required</sup> <a name="studio_name" id="@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudio.property.studioName"></a>

```python
studio_name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudio.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `user_role_arn`<sup>Required</sup> <a name="user_role_arn" id="@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudio.property.userRoleArn"></a>

```python
user_role_arn: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudio.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudio.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### NimblestudioStudioConfig <a name="NimblestudioStudioConfig" id="@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudioConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudioConfig.Initializer"></a>

```python
from cdktn_provider_awscc import nimblestudio_studio

nimblestudioStudio.NimblestudioStudioConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  admin_role_arn: str,
  display_name: str,
  studio_name: str,
  user_role_arn: str,
  studio_encryption_configuration: NimblestudioStudioStudioEncryptionConfiguration = None,
  tags: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudioConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudioConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudioConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudioConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudioConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudioConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudioConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudioConfig.property.adminRoleArn">admin_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/nimblestudio_studio#admin_role_arn NimblestudioStudio#admin_role_arn}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudioConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/nimblestudio_studio#display_name NimblestudioStudio#display_name}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudioConfig.property.studioName">studio_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/nimblestudio_studio#studio_name NimblestudioStudio#studio_name}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudioConfig.property.userRoleArn">user_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/nimblestudio_studio#user_role_arn NimblestudioStudio#user_role_arn}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudioConfig.property.studioEncryptionConfiguration">studio_encryption_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudioStudioEncryptionConfiguration">NimblestudioStudioStudioEncryptionConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/nimblestudio_studio#studio_encryption_configuration NimblestudioStudio#studio_encryption_configuration}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudioConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/nimblestudio_studio#tags NimblestudioStudio#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudioConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudioConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudioConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudioConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudioConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudioConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudioConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `admin_role_arn`<sup>Required</sup> <a name="admin_role_arn" id="@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudioConfig.property.adminRoleArn"></a>

```python
admin_role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/nimblestudio_studio#admin_role_arn NimblestudioStudio#admin_role_arn}.

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudioConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/nimblestudio_studio#display_name NimblestudioStudio#display_name}.

---

##### `studio_name`<sup>Required</sup> <a name="studio_name" id="@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudioConfig.property.studioName"></a>

```python
studio_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/nimblestudio_studio#studio_name NimblestudioStudio#studio_name}.

---

##### `user_role_arn`<sup>Required</sup> <a name="user_role_arn" id="@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudioConfig.property.userRoleArn"></a>

```python
user_role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/nimblestudio_studio#user_role_arn NimblestudioStudio#user_role_arn}.

---

##### `studio_encryption_configuration`<sup>Optional</sup> <a name="studio_encryption_configuration" id="@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudioConfig.property.studioEncryptionConfiguration"></a>

```python
studio_encryption_configuration: NimblestudioStudioStudioEncryptionConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudioStudioEncryptionConfiguration">NimblestudioStudioStudioEncryptionConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/nimblestudio_studio#studio_encryption_configuration NimblestudioStudio#studio_encryption_configuration}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudioConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/nimblestudio_studio#tags NimblestudioStudio#tags}.

---

### NimblestudioStudioStudioEncryptionConfiguration <a name="NimblestudioStudioStudioEncryptionConfiguration" id="@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudioStudioEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudioStudioEncryptionConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import nimblestudio_studio

nimblestudioStudio.NimblestudioStudioStudioEncryptionConfiguration(
  key_arn: str = None,
  key_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudioStudioEncryptionConfiguration.property.keyArn">key_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/nimblestudio_studio#key_arn NimblestudioStudio#key_arn}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudioStudioEncryptionConfiguration.property.keyType">key_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/nimblestudio_studio#key_type NimblestudioStudio#key_type}. |

---

##### `key_arn`<sup>Optional</sup> <a name="key_arn" id="@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudioStudioEncryptionConfiguration.property.keyArn"></a>

```python
key_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/nimblestudio_studio#key_arn NimblestudioStudio#key_arn}.

---

##### `key_type`<sup>Optional</sup> <a name="key_type" id="@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudioStudioEncryptionConfiguration.property.keyType"></a>

```python
key_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/nimblestudio_studio#key_type NimblestudioStudio#key_type}.

---

## Classes <a name="Classes" id="Classes"></a>

### NimblestudioStudioStudioEncryptionConfigurationOutputReference <a name="NimblestudioStudioStudioEncryptionConfigurationOutputReference" id="@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudioStudioEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudioStudioEncryptionConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import nimblestudio_studio

nimblestudioStudio.NimblestudioStudioStudioEncryptionConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudioStudioEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudioStudioEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudioStudioEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudioStudioEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudioStudioEncryptionConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudioStudioEncryptionConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudioStudioEncryptionConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudioStudioEncryptionConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudioStudioEncryptionConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudioStudioEncryptionConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudioStudioEncryptionConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudioStudioEncryptionConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudioStudioEncryptionConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudioStudioEncryptionConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudioStudioEncryptionConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudioStudioEncryptionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudioStudioEncryptionConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudioStudioEncryptionConfigurationOutputReference.resetKeyArn">reset_key_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudioStudioEncryptionConfigurationOutputReference.resetKeyType">reset_key_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudioStudioEncryptionConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudioStudioEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudioStudioEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudioStudioEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudioStudioEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudioStudioEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudioStudioEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudioStudioEncryptionConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudioStudioEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudioStudioEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudioStudioEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudioStudioEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudioStudioEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudioStudioEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudioStudioEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudioStudioEncryptionConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudioStudioEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudioStudioEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudioStudioEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudioStudioEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudioStudioEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudioStudioEncryptionConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudioStudioEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudioStudioEncryptionConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key_arn` <a name="reset_key_arn" id="@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudioStudioEncryptionConfigurationOutputReference.resetKeyArn"></a>

```python
def reset_key_arn() -> None
```

##### `reset_key_type` <a name="reset_key_type" id="@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudioStudioEncryptionConfigurationOutputReference.resetKeyType"></a>

```python
def reset_key_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudioStudioEncryptionConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudioStudioEncryptionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudioStudioEncryptionConfigurationOutputReference.property.keyArnInput">key_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudioStudioEncryptionConfigurationOutputReference.property.keyTypeInput">key_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudioStudioEncryptionConfigurationOutputReference.property.keyArn">key_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudioStudioEncryptionConfigurationOutputReference.property.keyType">key_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudioStudioEncryptionConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudioStudioEncryptionConfiguration">NimblestudioStudioStudioEncryptionConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudioStudioEncryptionConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudioStudioEncryptionConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_arn_input`<sup>Optional</sup> <a name="key_arn_input" id="@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudioStudioEncryptionConfigurationOutputReference.property.keyArnInput"></a>

```python
key_arn_input: str
```

- *Type:* str

---

##### `key_type_input`<sup>Optional</sup> <a name="key_type_input" id="@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudioStudioEncryptionConfigurationOutputReference.property.keyTypeInput"></a>

```python
key_type_input: str
```

- *Type:* str

---

##### `key_arn`<sup>Required</sup> <a name="key_arn" id="@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudioStudioEncryptionConfigurationOutputReference.property.keyArn"></a>

```python
key_arn: str
```

- *Type:* str

---

##### `key_type`<sup>Required</sup> <a name="key_type" id="@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudioStudioEncryptionConfigurationOutputReference.property.keyType"></a>

```python
key_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudioStudioEncryptionConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | NimblestudioStudioStudioEncryptionConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.nimblestudioStudio.NimblestudioStudioStudioEncryptionConfiguration">NimblestudioStudioStudioEncryptionConfiguration</a>

---



