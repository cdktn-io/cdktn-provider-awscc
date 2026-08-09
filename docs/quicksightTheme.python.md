# `quicksightTheme` Submodule <a name="`quicksightTheme` Submodule" id="@cdktn/provider-awscc.quicksightTheme"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### QuicksightTheme <a name="QuicksightTheme" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_theme awscc_quicksight_theme}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_theme

quicksightTheme.QuicksightTheme(
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
  base_theme_id: str,
  configuration: QuicksightThemeConfiguration,
  name: str,
  theme_id: str,
  permissions: IResolvable | typing.List[QuicksightThemePermissions] = None,
  tags: IResolvable | typing.List[QuicksightThemeTags] = None,
  version_description: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.Initializer.parameter.awsAccountId">aws_account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_theme#aws_account_id QuicksightTheme#aws_account_id}. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.Initializer.parameter.baseThemeId">base_theme_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_theme#base_theme_id QuicksightTheme#base_theme_id}. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.Initializer.parameter.configuration">configuration</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfiguration">QuicksightThemeConfiguration</a></code> | <p>The theme configuration. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_theme#name QuicksightTheme#name}. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.Initializer.parameter.themeId">theme_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_theme#theme_id QuicksightTheme#theme_id}. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.Initializer.parameter.permissions">permissions</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissions">QuicksightThemePermissions</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_theme#permissions QuicksightTheme#permissions}. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTags">QuicksightThemeTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_theme#tags QuicksightTheme#tags}. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.Initializer.parameter.versionDescription">version_description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_theme#version_description QuicksightTheme#version_description}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `aws_account_id`<sup>Required</sup> <a name="aws_account_id" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.Initializer.parameter.awsAccountId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_theme#aws_account_id QuicksightTheme#aws_account_id}.

---

##### `base_theme_id`<sup>Required</sup> <a name="base_theme_id" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.Initializer.parameter.baseThemeId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_theme#base_theme_id QuicksightTheme#base_theme_id}.

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.Initializer.parameter.configuration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfiguration">QuicksightThemeConfiguration</a>

<p>The theme configuration.

This configuration contains all of the display properties for
a theme.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_theme#configuration QuicksightTheme#configuration}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_theme#name QuicksightTheme#name}.

---

##### `theme_id`<sup>Required</sup> <a name="theme_id" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.Initializer.parameter.themeId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_theme#theme_id QuicksightTheme#theme_id}.

---

##### `permissions`<sup>Optional</sup> <a name="permissions" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.Initializer.parameter.permissions"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissions">QuicksightThemePermissions</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_theme#permissions QuicksightTheme#permissions}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTags">QuicksightThemeTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_theme#tags QuicksightTheme#tags}.

---

##### `version_description`<sup>Optional</sup> <a name="version_description" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.Initializer.parameter.versionDescription"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_theme#version_description QuicksightTheme#version_description}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.putConfiguration">put_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.putPermissions">put_permissions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.resetPermissions">reset_permissions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.resetVersionDescription">reset_version_description</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_configuration` <a name="put_configuration" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.putConfiguration"></a>

```python
def put_configuration(
  data_color_palette: QuicksightThemeConfigurationDataColorPalette = None,
  sheet: QuicksightThemeConfigurationSheet = None,
  typography: QuicksightThemeConfigurationTypography = None,
  ui_color_palette: QuicksightThemeConfigurationUiColorPalette = None
) -> None
```

###### `data_color_palette`<sup>Optional</sup> <a name="data_color_palette" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.putConfiguration.parameter.dataColorPalette"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationDataColorPalette">QuicksightThemeConfigurationDataColorPalette</a>

<p>The theme colors that are used for data colors in charts.

The colors description is a
hexadecimal color code that consists of six alphanumerical characters, prefixed with
<code>#</code>, for example #37BFF5. </p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_theme#data_color_palette QuicksightTheme#data_color_palette}

---

###### `sheet`<sup>Optional</sup> <a name="sheet" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.putConfiguration.parameter.sheet"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheet">QuicksightThemeConfigurationSheet</a>

<p>The theme display options for sheets. </p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_theme#sheet QuicksightTheme#sheet}

---

###### `typography`<sup>Optional</sup> <a name="typography" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.putConfiguration.parameter.typography"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypography">QuicksightThemeConfigurationTypography</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_theme#typography QuicksightTheme#typography}.

---

###### `ui_color_palette`<sup>Optional</sup> <a name="ui_color_palette" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.putConfiguration.parameter.uiColorPalette"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPalette">QuicksightThemeConfigurationUiColorPalette</a>

<p>The theme colors that apply to UI and to charts, excluding data colors.

The colors
description is a hexadecimal color code that consists of six alphanumerical characters,
prefixed with <code>#</code>, for example #37BFF5. For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/themes-in-quicksight.html">Using Themes in Amazon QuickSight</a> in the <i>Amazon QuickSight User
Guide.</i>
</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_theme#ui_color_palette QuicksightTheme#ui_color_palette}

---

##### `put_permissions` <a name="put_permissions" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.putPermissions"></a>

```python
def put_permissions(
  value: IResolvable | typing.List[QuicksightThemePermissions]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.putPermissions.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissions">QuicksightThemePermissions</a>]

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[QuicksightThemeTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTags">QuicksightThemeTags</a>]

---

##### `reset_permissions` <a name="reset_permissions" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.resetPermissions"></a>

```python
def reset_permissions() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_version_description` <a name="reset_version_description" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.resetVersionDescription"></a>

```python
def reset_version_description() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a QuicksightTheme resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.isConstruct"></a>

```python
from cdktn_provider_awscc import quicksight_theme

quicksightTheme.QuicksightTheme.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.isTerraformElement"></a>

```python
from cdktn_provider_awscc import quicksight_theme

quicksightTheme.QuicksightTheme.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.isTerraformResource"></a>

```python
from cdktn_provider_awscc import quicksight_theme

quicksightTheme.QuicksightTheme.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import quicksight_theme

quicksightTheme.QuicksightTheme.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a QuicksightTheme resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the QuicksightTheme to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing QuicksightTheme that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_theme#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the QuicksightTheme to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.property.configuration">configuration</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference">QuicksightThemeConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.property.createdTime">created_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.property.lastUpdatedTime">last_updated_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.property.permissions">permissions</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissionsList">QuicksightThemePermissionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTagsList">QuicksightThemeTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.property.version">version</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionOutputReference">QuicksightThemeVersionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.property.awsAccountIdInput">aws_account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.property.baseThemeIdInput">base_theme_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.property.configurationInput">configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfiguration">QuicksightThemeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.property.permissionsInput">permissions_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissions">QuicksightThemePermissions</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTags">QuicksightThemeTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.property.themeIdInput">theme_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.property.versionDescriptionInput">version_description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.property.awsAccountId">aws_account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.property.baseThemeId">base_theme_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.property.themeId">theme_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.property.versionDescription">version_description</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.property.configuration"></a>

```python
configuration: QuicksightThemeConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference">QuicksightThemeConfigurationOutputReference</a>

---

##### `created_time`<sup>Required</sup> <a name="created_time" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.property.createdTime"></a>

```python
created_time: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `last_updated_time`<sup>Required</sup> <a name="last_updated_time" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.property.lastUpdatedTime"></a>

```python
last_updated_time: str
```

- *Type:* str

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.property.permissions"></a>

```python
permissions: QuicksightThemePermissionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissionsList">QuicksightThemePermissionsList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.property.tags"></a>

```python
tags: QuicksightThemeTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTagsList">QuicksightThemeTagsList</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.property.version"></a>

```python
version: QuicksightThemeVersionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionOutputReference">QuicksightThemeVersionOutputReference</a>

---

##### `aws_account_id_input`<sup>Optional</sup> <a name="aws_account_id_input" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.property.awsAccountIdInput"></a>

```python
aws_account_id_input: str
```

- *Type:* str

---

##### `base_theme_id_input`<sup>Optional</sup> <a name="base_theme_id_input" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.property.baseThemeIdInput"></a>

```python
base_theme_id_input: str
```

- *Type:* str

---

##### `configuration_input`<sup>Optional</sup> <a name="configuration_input" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.property.configurationInput"></a>

```python
configuration_input: IResolvable | QuicksightThemeConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfiguration">QuicksightThemeConfiguration</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `permissions_input`<sup>Optional</sup> <a name="permissions_input" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.property.permissionsInput"></a>

```python
permissions_input: IResolvable | typing.List[QuicksightThemePermissions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissions">QuicksightThemePermissions</a>]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[QuicksightThemeTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTags">QuicksightThemeTags</a>]

---

##### `theme_id_input`<sup>Optional</sup> <a name="theme_id_input" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.property.themeIdInput"></a>

```python
theme_id_input: str
```

- *Type:* str

---

##### `version_description_input`<sup>Optional</sup> <a name="version_description_input" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.property.versionDescriptionInput"></a>

```python
version_description_input: str
```

- *Type:* str

---

##### `aws_account_id`<sup>Required</sup> <a name="aws_account_id" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.property.awsAccountId"></a>

```python
aws_account_id: str
```

- *Type:* str

---

##### `base_theme_id`<sup>Required</sup> <a name="base_theme_id" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.property.baseThemeId"></a>

```python
base_theme_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `theme_id`<sup>Required</sup> <a name="theme_id" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.property.themeId"></a>

```python
theme_id: str
```

- *Type:* str

---

##### `version_description`<sup>Required</sup> <a name="version_description" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.property.versionDescription"></a>

```python
version_description: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.quicksightTheme.QuicksightTheme.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### QuicksightThemeConfig <a name="QuicksightThemeConfig" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfig.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_theme

quicksightTheme.QuicksightThemeConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  aws_account_id: str,
  base_theme_id: str,
  configuration: QuicksightThemeConfiguration,
  name: str,
  theme_id: str,
  permissions: IResolvable | typing.List[QuicksightThemePermissions] = None,
  tags: IResolvable | typing.List[QuicksightThemeTags] = None,
  version_description: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfig.property.awsAccountId">aws_account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_theme#aws_account_id QuicksightTheme#aws_account_id}. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfig.property.baseThemeId">base_theme_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_theme#base_theme_id QuicksightTheme#base_theme_id}. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfig.property.configuration">configuration</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfiguration">QuicksightThemeConfiguration</a></code> | <p>The theme configuration. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_theme#name QuicksightTheme#name}. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfig.property.themeId">theme_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_theme#theme_id QuicksightTheme#theme_id}. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfig.property.permissions">permissions</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissions">QuicksightThemePermissions</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_theme#permissions QuicksightTheme#permissions}. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTags">QuicksightThemeTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_theme#tags QuicksightTheme#tags}. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfig.property.versionDescription">version_description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_theme#version_description QuicksightTheme#version_description}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `aws_account_id`<sup>Required</sup> <a name="aws_account_id" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfig.property.awsAccountId"></a>

```python
aws_account_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_theme#aws_account_id QuicksightTheme#aws_account_id}.

---

##### `base_theme_id`<sup>Required</sup> <a name="base_theme_id" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfig.property.baseThemeId"></a>

```python
base_theme_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_theme#base_theme_id QuicksightTheme#base_theme_id}.

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfig.property.configuration"></a>

```python
configuration: QuicksightThemeConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfiguration">QuicksightThemeConfiguration</a>

<p>The theme configuration.

This configuration contains all of the display properties for
a theme.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_theme#configuration QuicksightTheme#configuration}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_theme#name QuicksightTheme#name}.

---

##### `theme_id`<sup>Required</sup> <a name="theme_id" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfig.property.themeId"></a>

```python
theme_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_theme#theme_id QuicksightTheme#theme_id}.

---

##### `permissions`<sup>Optional</sup> <a name="permissions" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfig.property.permissions"></a>

```python
permissions: IResolvable | typing.List[QuicksightThemePermissions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissions">QuicksightThemePermissions</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_theme#permissions QuicksightTheme#permissions}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[QuicksightThemeTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTags">QuicksightThemeTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_theme#tags QuicksightTheme#tags}.

---

##### `version_description`<sup>Optional</sup> <a name="version_description" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfig.property.versionDescription"></a>

```python
version_description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_theme#version_description QuicksightTheme#version_description}.

---

### QuicksightThemeConfiguration <a name="QuicksightThemeConfiguration" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_theme

quicksightTheme.QuicksightThemeConfiguration(
  data_color_palette: QuicksightThemeConfigurationDataColorPalette = None,
  sheet: QuicksightThemeConfigurationSheet = None,
  typography: QuicksightThemeConfigurationTypography = None,
  ui_color_palette: QuicksightThemeConfigurationUiColorPalette = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfiguration.property.dataColorPalette">data_color_palette</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationDataColorPalette">QuicksightThemeConfigurationDataColorPalette</a></code> | <p>The theme colors that are used for data colors in charts. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfiguration.property.sheet">sheet</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheet">QuicksightThemeConfigurationSheet</a></code> | <p>The theme display options for sheets. </p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfiguration.property.typography">typography</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypography">QuicksightThemeConfigurationTypography</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_theme#typography QuicksightTheme#typography}. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfiguration.property.uiColorPalette">ui_color_palette</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPalette">QuicksightThemeConfigurationUiColorPalette</a></code> | <p>The theme colors that apply to UI and to charts, excluding data colors. |

---

##### `data_color_palette`<sup>Optional</sup> <a name="data_color_palette" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfiguration.property.dataColorPalette"></a>

```python
data_color_palette: QuicksightThemeConfigurationDataColorPalette
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationDataColorPalette">QuicksightThemeConfigurationDataColorPalette</a>

<p>The theme colors that are used for data colors in charts.

The colors description is a
hexadecimal color code that consists of six alphanumerical characters, prefixed with
<code>#</code>, for example #37BFF5. </p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_theme#data_color_palette QuicksightTheme#data_color_palette}

---

##### `sheet`<sup>Optional</sup> <a name="sheet" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfiguration.property.sheet"></a>

```python
sheet: QuicksightThemeConfigurationSheet
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheet">QuicksightThemeConfigurationSheet</a>

<p>The theme display options for sheets. </p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_theme#sheet QuicksightTheme#sheet}

---

##### `typography`<sup>Optional</sup> <a name="typography" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfiguration.property.typography"></a>

```python
typography: QuicksightThemeConfigurationTypography
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypography">QuicksightThemeConfigurationTypography</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_theme#typography QuicksightTheme#typography}.

---

##### `ui_color_palette`<sup>Optional</sup> <a name="ui_color_palette" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfiguration.property.uiColorPalette"></a>

```python
ui_color_palette: QuicksightThemeConfigurationUiColorPalette
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPalette">QuicksightThemeConfigurationUiColorPalette</a>

<p>The theme colors that apply to UI and to charts, excluding data colors.

The colors
description is a hexadecimal color code that consists of six alphanumerical characters,
prefixed with <code>#</code>, for example #37BFF5. For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/themes-in-quicksight.html">Using Themes in Amazon QuickSight</a> in the <i>Amazon QuickSight User
Guide.</i>
</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_theme#ui_color_palette QuicksightTheme#ui_color_palette}

---

### QuicksightThemeConfigurationDataColorPalette <a name="QuicksightThemeConfigurationDataColorPalette" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationDataColorPalette"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationDataColorPalette.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_theme

quicksightTheme.QuicksightThemeConfigurationDataColorPalette(
  colors: typing.List[str] = None,
  empty_fill_color: str = None,
  min_max_gradient: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationDataColorPalette.property.colors">colors</a></code> | <code>typing.List[str]</code> | <p>The hexadecimal codes for the colors.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationDataColorPalette.property.emptyFillColor">empty_fill_color</a></code> | <code>str</code> | <p>The hexadecimal code of a color that applies to charts where a lack of data is             highlighted.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationDataColorPalette.property.minMaxGradient">min_max_gradient</a></code> | <code>typing.List[str]</code> | <p>The minimum and maximum hexadecimal codes that describe a color gradient. </p>. |

---

##### `colors`<sup>Optional</sup> <a name="colors" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationDataColorPalette.property.colors"></a>

```python
colors: typing.List[str]
```

- *Type:* typing.List[str]

<p>The hexadecimal codes for the colors.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_theme#colors QuicksightTheme#colors}

---

##### `empty_fill_color`<sup>Optional</sup> <a name="empty_fill_color" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationDataColorPalette.property.emptyFillColor"></a>

```python
empty_fill_color: str
```

- *Type:* str

<p>The hexadecimal code of a color that applies to charts where a lack of data is             highlighted.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_theme#empty_fill_color QuicksightTheme#empty_fill_color}

---

##### `min_max_gradient`<sup>Optional</sup> <a name="min_max_gradient" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationDataColorPalette.property.minMaxGradient"></a>

```python
min_max_gradient: typing.List[str]
```

- *Type:* typing.List[str]

<p>The minimum and maximum hexadecimal codes that describe a color gradient. </p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_theme#min_max_gradient QuicksightTheme#min_max_gradient}

---

### QuicksightThemeConfigurationSheet <a name="QuicksightThemeConfigurationSheet" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheet"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheet.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_theme

quicksightTheme.QuicksightThemeConfigurationSheet(
  tile: QuicksightThemeConfigurationSheetTile = None,
  tile_layout: QuicksightThemeConfigurationSheetTileLayout = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheet.property.tile">tile</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTile">QuicksightThemeConfigurationSheetTile</a></code> | <p>Display options related to tiles on a sheet.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheet.property.tileLayout">tile_layout</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayout">QuicksightThemeConfigurationSheetTileLayout</a></code> | <p>The display options for the layout of tiles on a sheet.</p>. |

---

##### `tile`<sup>Optional</sup> <a name="tile" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheet.property.tile"></a>

```python
tile: QuicksightThemeConfigurationSheetTile
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTile">QuicksightThemeConfigurationSheetTile</a>

<p>Display options related to tiles on a sheet.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_theme#tile QuicksightTheme#tile}

---

##### `tile_layout`<sup>Optional</sup> <a name="tile_layout" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheet.property.tileLayout"></a>

```python
tile_layout: QuicksightThemeConfigurationSheetTileLayout
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayout">QuicksightThemeConfigurationSheetTileLayout</a>

<p>The display options for the layout of tiles on a sheet.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_theme#tile_layout QuicksightTheme#tile_layout}

---

### QuicksightThemeConfigurationSheetTile <a name="QuicksightThemeConfigurationSheetTile" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTile"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTile.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_theme

quicksightTheme.QuicksightThemeConfigurationSheetTile(
  border: QuicksightThemeConfigurationSheetTileBorder = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTile.property.border">border</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileBorder">QuicksightThemeConfigurationSheetTileBorder</a></code> | <p>The display options for tile borders for visuals.</p>. |

---

##### `border`<sup>Optional</sup> <a name="border" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTile.property.border"></a>

```python
border: QuicksightThemeConfigurationSheetTileBorder
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileBorder">QuicksightThemeConfigurationSheetTileBorder</a>

<p>The display options for tile borders for visuals.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_theme#border QuicksightTheme#border}

---

### QuicksightThemeConfigurationSheetTileBorder <a name="QuicksightThemeConfigurationSheetTileBorder" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileBorder"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileBorder.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_theme

quicksightTheme.QuicksightThemeConfigurationSheetTileBorder(
  show: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileBorder.property.show">show</a></code> | <code>bool \| cdktn.IResolvable</code> | <p>The option to enable display of borders for visuals.</p>. |

---

##### `show`<sup>Optional</sup> <a name="show" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileBorder.property.show"></a>

```python
show: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

<p>The option to enable display of borders for visuals.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_theme#show QuicksightTheme#show}

---

### QuicksightThemeConfigurationSheetTileLayout <a name="QuicksightThemeConfigurationSheetTileLayout" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayout"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayout.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_theme

quicksightTheme.QuicksightThemeConfigurationSheetTileLayout(
  gutter: QuicksightThemeConfigurationSheetTileLayoutGutter = None,
  margin: QuicksightThemeConfigurationSheetTileLayoutMargin = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayout.property.gutter">gutter</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutter">QuicksightThemeConfigurationSheetTileLayoutGutter</a></code> | <p>The display options for gutter spacing between tiles on a sheet.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayout.property.margin">margin</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMargin">QuicksightThemeConfigurationSheetTileLayoutMargin</a></code> | <p>The display options for margins around the outside edge of sheets.</p>. |

---

##### `gutter`<sup>Optional</sup> <a name="gutter" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayout.property.gutter"></a>

```python
gutter: QuicksightThemeConfigurationSheetTileLayoutGutter
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutter">QuicksightThemeConfigurationSheetTileLayoutGutter</a>

<p>The display options for gutter spacing between tiles on a sheet.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_theme#gutter QuicksightTheme#gutter}

---

##### `margin`<sup>Optional</sup> <a name="margin" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayout.property.margin"></a>

```python
margin: QuicksightThemeConfigurationSheetTileLayoutMargin
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMargin">QuicksightThemeConfigurationSheetTileLayoutMargin</a>

<p>The display options for margins around the outside edge of sheets.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_theme#margin QuicksightTheme#margin}

---

### QuicksightThemeConfigurationSheetTileLayoutGutter <a name="QuicksightThemeConfigurationSheetTileLayoutGutter" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutter.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_theme

quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutter(
  show: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutter.property.show">show</a></code> | <code>bool \| cdktn.IResolvable</code> | <p>This Boolean value controls whether to display a gutter space between sheet tiles. |

---

##### `show`<sup>Optional</sup> <a name="show" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutter.property.show"></a>

```python
show: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

<p>This Boolean value controls whether to display a gutter space between sheet tiles.

</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_theme#show QuicksightTheme#show}

---

### QuicksightThemeConfigurationSheetTileLayoutMargin <a name="QuicksightThemeConfigurationSheetTileLayoutMargin" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMargin"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMargin.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_theme

quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMargin(
  show: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMargin.property.show">show</a></code> | <code>bool \| cdktn.IResolvable</code> | <p>This Boolean value controls whether to display sheet margins.</p>. |

---

##### `show`<sup>Optional</sup> <a name="show" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMargin.property.show"></a>

```python
show: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

<p>This Boolean value controls whether to display sheet margins.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_theme#show QuicksightTheme#show}

---

### QuicksightThemeConfigurationTypography <a name="QuicksightThemeConfigurationTypography" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypography"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypography.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_theme

quicksightTheme.QuicksightThemeConfigurationTypography(
  font_families: IResolvable | typing.List[QuicksightThemeConfigurationTypographyFontFamilies] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypography.property.fontFamilies">font_families</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamilies">QuicksightThemeConfigurationTypographyFontFamilies</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_theme#font_families QuicksightTheme#font_families}. |

---

##### `font_families`<sup>Optional</sup> <a name="font_families" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypography.property.fontFamilies"></a>

```python
font_families: IResolvable | typing.List[QuicksightThemeConfigurationTypographyFontFamilies]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamilies">QuicksightThemeConfigurationTypographyFontFamilies</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_theme#font_families QuicksightTheme#font_families}.

---

### QuicksightThemeConfigurationTypographyFontFamilies <a name="QuicksightThemeConfigurationTypographyFontFamilies" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamilies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamilies.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_theme

quicksightTheme.QuicksightThemeConfigurationTypographyFontFamilies(
  font_family: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamilies.property.fontFamily">font_family</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_theme#font_family QuicksightTheme#font_family}. |

---

##### `font_family`<sup>Optional</sup> <a name="font_family" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamilies.property.fontFamily"></a>

```python
font_family: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_theme#font_family QuicksightTheme#font_family}.

---

### QuicksightThemeConfigurationUiColorPalette <a name="QuicksightThemeConfigurationUiColorPalette" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPalette"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPalette.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_theme

quicksightTheme.QuicksightThemeConfigurationUiColorPalette(
  accent: str = None,
  accent_foreground: str = None,
  danger: str = None,
  danger_foreground: str = None,
  dimension: str = None,
  dimension_foreground: str = None,
  measure: str = None,
  measure_foreground: str = None,
  primary_background: str = None,
  primary_foreground: str = None,
  secondary_background: str = None,
  secondary_foreground: str = None,
  success: str = None,
  success_foreground: str = None,
  warning: str = None,
  warning_foreground: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPalette.property.accent">accent</a></code> | <code>str</code> | <p>This color is that applies to selected states and buttons.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPalette.property.accentForeground">accent_foreground</a></code> | <code>str</code> | <p>The foreground color that applies to any text or other elements that appear over the             accent color.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPalette.property.danger">danger</a></code> | <code>str</code> | <p>The color that applies to error messages.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPalette.property.dangerForeground">danger_foreground</a></code> | <code>str</code> | <p>The foreground color that applies to any text or other elements that appear over the             error color.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPalette.property.dimension">dimension</a></code> | <code>str</code> | <p>The color that applies to the names of fields that are identified as             dimensions.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPalette.property.dimensionForeground">dimension_foreground</a></code> | <code>str</code> | <p>The foreground color that applies to any text or other elements that appear over the             dimension color.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPalette.property.measure">measure</a></code> | <code>str</code> | <p>The color that applies to the names of fields that are identified as measures.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPalette.property.measureForeground">measure_foreground</a></code> | <code>str</code> | <p>The foreground color that applies to any text or other elements that appear over the             measure color.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPalette.property.primaryBackground">primary_background</a></code> | <code>str</code> | <p>The background color that applies to visuals and other high emphasis UI.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPalette.property.primaryForeground">primary_foreground</a></code> | <code>str</code> | <p>The color of text and other foreground elements that appear over the primary             background regions, such as grid lines, borders, table banding, icons, and so on.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPalette.property.secondaryBackground">secondary_background</a></code> | <code>str</code> | <p>The background color that applies to the sheet background and sheet controls.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPalette.property.secondaryForeground">secondary_foreground</a></code> | <code>str</code> | <p>The foreground color that applies to any sheet title, sheet control text, or UI that             appears over the secondary background.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPalette.property.success">success</a></code> | <code>str</code> | <p>The color that applies to success messages, for example the check mark for a             successful download.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPalette.property.successForeground">success_foreground</a></code> | <code>str</code> | <p>The foreground color that applies to any text or other elements that appear over the             success color.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPalette.property.warning">warning</a></code> | <code>str</code> | <p>This color that applies to warning and informational messages.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPalette.property.warningForeground">warning_foreground</a></code> | <code>str</code> | <p>The foreground color that applies to any text or other elements that appear over the             warning color.</p>. |

---

##### `accent`<sup>Optional</sup> <a name="accent" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPalette.property.accent"></a>

```python
accent: str
```

- *Type:* str

<p>This color is that applies to selected states and buttons.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_theme#accent QuicksightTheme#accent}

---

##### `accent_foreground`<sup>Optional</sup> <a name="accent_foreground" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPalette.property.accentForeground"></a>

```python
accent_foreground: str
```

- *Type:* str

<p>The foreground color that applies to any text or other elements that appear over the             accent color.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_theme#accent_foreground QuicksightTheme#accent_foreground}

---

##### `danger`<sup>Optional</sup> <a name="danger" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPalette.property.danger"></a>

```python
danger: str
```

- *Type:* str

<p>The color that applies to error messages.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_theme#danger QuicksightTheme#danger}

---

##### `danger_foreground`<sup>Optional</sup> <a name="danger_foreground" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPalette.property.dangerForeground"></a>

```python
danger_foreground: str
```

- *Type:* str

<p>The foreground color that applies to any text or other elements that appear over the             error color.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_theme#danger_foreground QuicksightTheme#danger_foreground}

---

##### `dimension`<sup>Optional</sup> <a name="dimension" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPalette.property.dimension"></a>

```python
dimension: str
```

- *Type:* str

<p>The color that applies to the names of fields that are identified as             dimensions.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_theme#dimension QuicksightTheme#dimension}

---

##### `dimension_foreground`<sup>Optional</sup> <a name="dimension_foreground" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPalette.property.dimensionForeground"></a>

```python
dimension_foreground: str
```

- *Type:* str

<p>The foreground color that applies to any text or other elements that appear over the             dimension color.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_theme#dimension_foreground QuicksightTheme#dimension_foreground}

---

##### `measure`<sup>Optional</sup> <a name="measure" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPalette.property.measure"></a>

```python
measure: str
```

- *Type:* str

<p>The color that applies to the names of fields that are identified as measures.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_theme#measure QuicksightTheme#measure}

---

##### `measure_foreground`<sup>Optional</sup> <a name="measure_foreground" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPalette.property.measureForeground"></a>

```python
measure_foreground: str
```

- *Type:* str

<p>The foreground color that applies to any text or other elements that appear over the             measure color.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_theme#measure_foreground QuicksightTheme#measure_foreground}

---

##### `primary_background`<sup>Optional</sup> <a name="primary_background" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPalette.property.primaryBackground"></a>

```python
primary_background: str
```

- *Type:* str

<p>The background color that applies to visuals and other high emphasis UI.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_theme#primary_background QuicksightTheme#primary_background}

---

##### `primary_foreground`<sup>Optional</sup> <a name="primary_foreground" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPalette.property.primaryForeground"></a>

```python
primary_foreground: str
```

- *Type:* str

<p>The color of text and other foreground elements that appear over the primary             background regions, such as grid lines, borders, table banding, icons, and so on.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_theme#primary_foreground QuicksightTheme#primary_foreground}

---

##### `secondary_background`<sup>Optional</sup> <a name="secondary_background" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPalette.property.secondaryBackground"></a>

```python
secondary_background: str
```

- *Type:* str

<p>The background color that applies to the sheet background and sheet controls.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_theme#secondary_background QuicksightTheme#secondary_background}

---

##### `secondary_foreground`<sup>Optional</sup> <a name="secondary_foreground" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPalette.property.secondaryForeground"></a>

```python
secondary_foreground: str
```

- *Type:* str

<p>The foreground color that applies to any sheet title, sheet control text, or UI that             appears over the secondary background.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_theme#secondary_foreground QuicksightTheme#secondary_foreground}

---

##### `success`<sup>Optional</sup> <a name="success" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPalette.property.success"></a>

```python
success: str
```

- *Type:* str

<p>The color that applies to success messages, for example the check mark for a             successful download.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_theme#success QuicksightTheme#success}

---

##### `success_foreground`<sup>Optional</sup> <a name="success_foreground" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPalette.property.successForeground"></a>

```python
success_foreground: str
```

- *Type:* str

<p>The foreground color that applies to any text or other elements that appear over the             success color.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_theme#success_foreground QuicksightTheme#success_foreground}

---

##### `warning`<sup>Optional</sup> <a name="warning" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPalette.property.warning"></a>

```python
warning: str
```

- *Type:* str

<p>This color that applies to warning and informational messages.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_theme#warning QuicksightTheme#warning}

---

##### `warning_foreground`<sup>Optional</sup> <a name="warning_foreground" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPalette.property.warningForeground"></a>

```python
warning_foreground: str
```

- *Type:* str

<p>The foreground color that applies to any text or other elements that appear over the             warning color.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_theme#warning_foreground QuicksightTheme#warning_foreground}

---

### QuicksightThemePermissions <a name="QuicksightThemePermissions" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissions.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_theme

quicksightTheme.QuicksightThemePermissions(
  actions: typing.List[str] = None,
  principal: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissions.property.actions">actions</a></code> | <code>typing.List[str]</code> | <p>The IAM action to grant or revoke permissions on.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissions.property.principal">principal</a></code> | <code>str</code> | <p>The Amazon Resource Name (ARN) of the principal. |

---

##### `actions`<sup>Optional</sup> <a name="actions" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissions.property.actions"></a>

```python
actions: typing.List[str]
```

- *Type:* typing.List[str]

<p>The IAM action to grant or revoke permissions on.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_theme#actions QuicksightTheme#actions}

---

##### `principal`<sup>Optional</sup> <a name="principal" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissions.property.principal"></a>

```python
principal: str
```

- *Type:* str

<p>The Amazon Resource Name (ARN) of the principal.

This can be one of the
following:</p>
<ul>
<li>
<p>The ARN of an Amazon QuickSight user or group associated with a data source or dataset. (This is common.)</p>
</li>
<li>
<p>The ARN of an Amazon QuickSight user, group, or namespace associated with an analysis, dashboard, template, or theme. (This is common.)</p>
</li>
<li>
<p>The ARN of an Amazon Web Services account root: This is an IAM ARN rather than a QuickSight
ARN. Use this option only to share resources (templates) across Amazon Web Services accounts.
(This is less common.) </p>
</li>
</ul>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_theme#principal QuicksightTheme#principal}

---

### QuicksightThemeTags <a name="QuicksightThemeTags" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTags.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_theme

quicksightTheme.QuicksightThemeTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTags.property.key">key</a></code> | <code>str</code> | <p>Tag key.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTags.property.value">value</a></code> | <code>str</code> | <p>Tag value.</p>. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTags.property.key"></a>

```python
key: str
```

- *Type:* str

<p>Tag key.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_theme#key QuicksightTheme#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTags.property.value"></a>

```python
value: str
```

- *Type:* str

<p>Tag value.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_theme#value QuicksightTheme#value}

---

### QuicksightThemeVersion <a name="QuicksightThemeVersion" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersion.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_theme

quicksightTheme.QuicksightThemeVersion()
```


### QuicksightThemeVersionConfiguration <a name="QuicksightThemeVersionConfiguration" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_theme

quicksightTheme.QuicksightThemeVersionConfiguration()
```


### QuicksightThemeVersionConfigurationDataColorPalette <a name="QuicksightThemeVersionConfigurationDataColorPalette" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationDataColorPalette"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationDataColorPalette.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_theme

quicksightTheme.QuicksightThemeVersionConfigurationDataColorPalette()
```


### QuicksightThemeVersionConfigurationSheet <a name="QuicksightThemeVersionConfigurationSheet" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheet"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheet.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_theme

quicksightTheme.QuicksightThemeVersionConfigurationSheet()
```


### QuicksightThemeVersionConfigurationSheetTile <a name="QuicksightThemeVersionConfigurationSheetTile" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTile"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTile.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_theme

quicksightTheme.QuicksightThemeVersionConfigurationSheetTile()
```


### QuicksightThemeVersionConfigurationSheetTileBorder <a name="QuicksightThemeVersionConfigurationSheetTileBorder" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileBorder"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileBorder.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_theme

quicksightTheme.QuicksightThemeVersionConfigurationSheetTileBorder()
```


### QuicksightThemeVersionConfigurationSheetTileLayout <a name="QuicksightThemeVersionConfigurationSheetTileLayout" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayout"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayout.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_theme

quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayout()
```


### QuicksightThemeVersionConfigurationSheetTileLayoutGutter <a name="QuicksightThemeVersionConfigurationSheetTileLayoutGutter" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutGutter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutGutter.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_theme

quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutGutter()
```


### QuicksightThemeVersionConfigurationSheetTileLayoutMargin <a name="QuicksightThemeVersionConfigurationSheetTileLayoutMargin" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutMargin"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutMargin.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_theme

quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutMargin()
```


### QuicksightThemeVersionConfigurationTypography <a name="QuicksightThemeVersionConfigurationTypography" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypography"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypography.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_theme

quicksightTheme.QuicksightThemeVersionConfigurationTypography()
```


### QuicksightThemeVersionConfigurationTypographyFontFamilies <a name="QuicksightThemeVersionConfigurationTypographyFontFamilies" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyFontFamilies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyFontFamilies.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_theme

quicksightTheme.QuicksightThemeVersionConfigurationTypographyFontFamilies()
```


### QuicksightThemeVersionConfigurationUiColorPalette <a name="QuicksightThemeVersionConfigurationUiColorPalette" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationUiColorPalette"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationUiColorPalette.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_theme

quicksightTheme.QuicksightThemeVersionConfigurationUiColorPalette()
```


### QuicksightThemeVersionErrors <a name="QuicksightThemeVersionErrors" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionErrors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionErrors.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_theme

quicksightTheme.QuicksightThemeVersionErrors()
```


## Classes <a name="Classes" id="Classes"></a>

### QuicksightThemeConfigurationDataColorPaletteOutputReference <a name="QuicksightThemeConfigurationDataColorPaletteOutputReference" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_theme

quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.resetColors">reset_colors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.resetEmptyFillColor">reset_empty_fill_color</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.resetMinMaxGradient">reset_min_max_gradient</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_colors` <a name="reset_colors" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.resetColors"></a>

```python
def reset_colors() -> None
```

##### `reset_empty_fill_color` <a name="reset_empty_fill_color" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.resetEmptyFillColor"></a>

```python
def reset_empty_fill_color() -> None
```

##### `reset_min_max_gradient` <a name="reset_min_max_gradient" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.resetMinMaxGradient"></a>

```python
def reset_min_max_gradient() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.property.colorsInput">colors_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.property.emptyFillColorInput">empty_fill_color_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.property.minMaxGradientInput">min_max_gradient_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.property.colors">colors</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.property.emptyFillColor">empty_fill_color</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.property.minMaxGradient">min_max_gradient</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationDataColorPalette">QuicksightThemeConfigurationDataColorPalette</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `colors_input`<sup>Optional</sup> <a name="colors_input" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.property.colorsInput"></a>

```python
colors_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `empty_fill_color_input`<sup>Optional</sup> <a name="empty_fill_color_input" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.property.emptyFillColorInput"></a>

```python
empty_fill_color_input: str
```

- *Type:* str

---

##### `min_max_gradient_input`<sup>Optional</sup> <a name="min_max_gradient_input" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.property.minMaxGradientInput"></a>

```python
min_max_gradient_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `colors`<sup>Required</sup> <a name="colors" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.property.colors"></a>

```python
colors: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `empty_fill_color`<sup>Required</sup> <a name="empty_fill_color" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.property.emptyFillColor"></a>

```python
empty_fill_color: str
```

- *Type:* str

---

##### `min_max_gradient`<sup>Required</sup> <a name="min_max_gradient" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.property.minMaxGradient"></a>

```python
min_max_gradient: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | QuicksightThemeConfigurationDataColorPalette
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationDataColorPalette">QuicksightThemeConfigurationDataColorPalette</a>

---


### QuicksightThemeConfigurationOutputReference <a name="QuicksightThemeConfigurationOutputReference" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_theme

quicksightTheme.QuicksightThemeConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference.putDataColorPalette">put_data_color_palette</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference.putSheet">put_sheet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference.putTypography">put_typography</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference.putUiColorPalette">put_ui_color_palette</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference.resetDataColorPalette">reset_data_color_palette</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference.resetSheet">reset_sheet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference.resetTypography">reset_typography</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference.resetUiColorPalette">reset_ui_color_palette</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_data_color_palette` <a name="put_data_color_palette" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference.putDataColorPalette"></a>

```python
def put_data_color_palette(
  colors: typing.List[str] = None,
  empty_fill_color: str = None,
  min_max_gradient: typing.List[str] = None
) -> None
```

###### `colors`<sup>Optional</sup> <a name="colors" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference.putDataColorPalette.parameter.colors"></a>

- *Type:* typing.List[str]

<p>The hexadecimal codes for the colors.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_theme#colors QuicksightTheme#colors}

---

###### `empty_fill_color`<sup>Optional</sup> <a name="empty_fill_color" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference.putDataColorPalette.parameter.emptyFillColor"></a>

- *Type:* str

<p>The hexadecimal code of a color that applies to charts where a lack of data is             highlighted.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_theme#empty_fill_color QuicksightTheme#empty_fill_color}

---

###### `min_max_gradient`<sup>Optional</sup> <a name="min_max_gradient" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference.putDataColorPalette.parameter.minMaxGradient"></a>

- *Type:* typing.List[str]

<p>The minimum and maximum hexadecimal codes that describe a color gradient. </p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_theme#min_max_gradient QuicksightTheme#min_max_gradient}

---

##### `put_sheet` <a name="put_sheet" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference.putSheet"></a>

```python
def put_sheet(
  tile: QuicksightThemeConfigurationSheetTile = None,
  tile_layout: QuicksightThemeConfigurationSheetTileLayout = None
) -> None
```

###### `tile`<sup>Optional</sup> <a name="tile" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference.putSheet.parameter.tile"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTile">QuicksightThemeConfigurationSheetTile</a>

<p>Display options related to tiles on a sheet.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_theme#tile QuicksightTheme#tile}

---

###### `tile_layout`<sup>Optional</sup> <a name="tile_layout" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference.putSheet.parameter.tileLayout"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayout">QuicksightThemeConfigurationSheetTileLayout</a>

<p>The display options for the layout of tiles on a sheet.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_theme#tile_layout QuicksightTheme#tile_layout}

---

##### `put_typography` <a name="put_typography" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference.putTypography"></a>

```python
def put_typography(
  font_families: IResolvable | typing.List[QuicksightThemeConfigurationTypographyFontFamilies] = None
) -> None
```

###### `font_families`<sup>Optional</sup> <a name="font_families" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference.putTypography.parameter.fontFamilies"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamilies">QuicksightThemeConfigurationTypographyFontFamilies</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_theme#font_families QuicksightTheme#font_families}.

---

##### `put_ui_color_palette` <a name="put_ui_color_palette" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference.putUiColorPalette"></a>

```python
def put_ui_color_palette(
  accent: str = None,
  accent_foreground: str = None,
  danger: str = None,
  danger_foreground: str = None,
  dimension: str = None,
  dimension_foreground: str = None,
  measure: str = None,
  measure_foreground: str = None,
  primary_background: str = None,
  primary_foreground: str = None,
  secondary_background: str = None,
  secondary_foreground: str = None,
  success: str = None,
  success_foreground: str = None,
  warning: str = None,
  warning_foreground: str = None
) -> None
```

###### `accent`<sup>Optional</sup> <a name="accent" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference.putUiColorPalette.parameter.accent"></a>

- *Type:* str

<p>This color is that applies to selected states and buttons.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_theme#accent QuicksightTheme#accent}

---

###### `accent_foreground`<sup>Optional</sup> <a name="accent_foreground" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference.putUiColorPalette.parameter.accentForeground"></a>

- *Type:* str

<p>The foreground color that applies to any text or other elements that appear over the             accent color.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_theme#accent_foreground QuicksightTheme#accent_foreground}

---

###### `danger`<sup>Optional</sup> <a name="danger" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference.putUiColorPalette.parameter.danger"></a>

- *Type:* str

<p>The color that applies to error messages.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_theme#danger QuicksightTheme#danger}

---

###### `danger_foreground`<sup>Optional</sup> <a name="danger_foreground" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference.putUiColorPalette.parameter.dangerForeground"></a>

- *Type:* str

<p>The foreground color that applies to any text or other elements that appear over the             error color.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_theme#danger_foreground QuicksightTheme#danger_foreground}

---

###### `dimension`<sup>Optional</sup> <a name="dimension" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference.putUiColorPalette.parameter.dimension"></a>

- *Type:* str

<p>The color that applies to the names of fields that are identified as             dimensions.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_theme#dimension QuicksightTheme#dimension}

---

###### `dimension_foreground`<sup>Optional</sup> <a name="dimension_foreground" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference.putUiColorPalette.parameter.dimensionForeground"></a>

- *Type:* str

<p>The foreground color that applies to any text or other elements that appear over the             dimension color.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_theme#dimension_foreground QuicksightTheme#dimension_foreground}

---

###### `measure`<sup>Optional</sup> <a name="measure" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference.putUiColorPalette.parameter.measure"></a>

- *Type:* str

<p>The color that applies to the names of fields that are identified as measures.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_theme#measure QuicksightTheme#measure}

---

###### `measure_foreground`<sup>Optional</sup> <a name="measure_foreground" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference.putUiColorPalette.parameter.measureForeground"></a>

- *Type:* str

<p>The foreground color that applies to any text or other elements that appear over the             measure color.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_theme#measure_foreground QuicksightTheme#measure_foreground}

---

###### `primary_background`<sup>Optional</sup> <a name="primary_background" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference.putUiColorPalette.parameter.primaryBackground"></a>

- *Type:* str

<p>The background color that applies to visuals and other high emphasis UI.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_theme#primary_background QuicksightTheme#primary_background}

---

###### `primary_foreground`<sup>Optional</sup> <a name="primary_foreground" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference.putUiColorPalette.parameter.primaryForeground"></a>

- *Type:* str

<p>The color of text and other foreground elements that appear over the primary             background regions, such as grid lines, borders, table banding, icons, and so on.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_theme#primary_foreground QuicksightTheme#primary_foreground}

---

###### `secondary_background`<sup>Optional</sup> <a name="secondary_background" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference.putUiColorPalette.parameter.secondaryBackground"></a>

- *Type:* str

<p>The background color that applies to the sheet background and sheet controls.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_theme#secondary_background QuicksightTheme#secondary_background}

---

###### `secondary_foreground`<sup>Optional</sup> <a name="secondary_foreground" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference.putUiColorPalette.parameter.secondaryForeground"></a>

- *Type:* str

<p>The foreground color that applies to any sheet title, sheet control text, or UI that             appears over the secondary background.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_theme#secondary_foreground QuicksightTheme#secondary_foreground}

---

###### `success`<sup>Optional</sup> <a name="success" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference.putUiColorPalette.parameter.success"></a>

- *Type:* str

<p>The color that applies to success messages, for example the check mark for a             successful download.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_theme#success QuicksightTheme#success}

---

###### `success_foreground`<sup>Optional</sup> <a name="success_foreground" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference.putUiColorPalette.parameter.successForeground"></a>

- *Type:* str

<p>The foreground color that applies to any text or other elements that appear over the             success color.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_theme#success_foreground QuicksightTheme#success_foreground}

---

###### `warning`<sup>Optional</sup> <a name="warning" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference.putUiColorPalette.parameter.warning"></a>

- *Type:* str

<p>This color that applies to warning and informational messages.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_theme#warning QuicksightTheme#warning}

---

###### `warning_foreground`<sup>Optional</sup> <a name="warning_foreground" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference.putUiColorPalette.parameter.warningForeground"></a>

- *Type:* str

<p>The foreground color that applies to any text or other elements that appear over the             warning color.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_theme#warning_foreground QuicksightTheme#warning_foreground}

---

##### `reset_data_color_palette` <a name="reset_data_color_palette" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference.resetDataColorPalette"></a>

```python
def reset_data_color_palette() -> None
```

##### `reset_sheet` <a name="reset_sheet" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference.resetSheet"></a>

```python
def reset_sheet() -> None
```

##### `reset_typography` <a name="reset_typography" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference.resetTypography"></a>

```python
def reset_typography() -> None
```

##### `reset_ui_color_palette` <a name="reset_ui_color_palette" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference.resetUiColorPalette"></a>

```python
def reset_ui_color_palette() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference.property.dataColorPalette">data_color_palette</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference">QuicksightThemeConfigurationDataColorPaletteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference.property.sheet">sheet</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference">QuicksightThemeConfigurationSheetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference.property.typography">typography</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference">QuicksightThemeConfigurationTypographyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference.property.uiColorPalette">ui_color_palette</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference">QuicksightThemeConfigurationUiColorPaletteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference.property.dataColorPaletteInput">data_color_palette_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationDataColorPalette">QuicksightThemeConfigurationDataColorPalette</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference.property.sheetInput">sheet_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheet">QuicksightThemeConfigurationSheet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference.property.typographyInput">typography_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypography">QuicksightThemeConfigurationTypography</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference.property.uiColorPaletteInput">ui_color_palette_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPalette">QuicksightThemeConfigurationUiColorPalette</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfiguration">QuicksightThemeConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `data_color_palette`<sup>Required</sup> <a name="data_color_palette" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference.property.dataColorPalette"></a>

```python
data_color_palette: QuicksightThemeConfigurationDataColorPaletteOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference">QuicksightThemeConfigurationDataColorPaletteOutputReference</a>

---

##### `sheet`<sup>Required</sup> <a name="sheet" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference.property.sheet"></a>

```python
sheet: QuicksightThemeConfigurationSheetOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference">QuicksightThemeConfigurationSheetOutputReference</a>

---

##### `typography`<sup>Required</sup> <a name="typography" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference.property.typography"></a>

```python
typography: QuicksightThemeConfigurationTypographyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference">QuicksightThemeConfigurationTypographyOutputReference</a>

---

##### `ui_color_palette`<sup>Required</sup> <a name="ui_color_palette" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference.property.uiColorPalette"></a>

```python
ui_color_palette: QuicksightThemeConfigurationUiColorPaletteOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference">QuicksightThemeConfigurationUiColorPaletteOutputReference</a>

---

##### `data_color_palette_input`<sup>Optional</sup> <a name="data_color_palette_input" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference.property.dataColorPaletteInput"></a>

```python
data_color_palette_input: IResolvable | QuicksightThemeConfigurationDataColorPalette
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationDataColorPalette">QuicksightThemeConfigurationDataColorPalette</a>

---

##### `sheet_input`<sup>Optional</sup> <a name="sheet_input" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference.property.sheetInput"></a>

```python
sheet_input: IResolvable | QuicksightThemeConfigurationSheet
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheet">QuicksightThemeConfigurationSheet</a>

---

##### `typography_input`<sup>Optional</sup> <a name="typography_input" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference.property.typographyInput"></a>

```python
typography_input: IResolvable | QuicksightThemeConfigurationTypography
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypography">QuicksightThemeConfigurationTypography</a>

---

##### `ui_color_palette_input`<sup>Optional</sup> <a name="ui_color_palette_input" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference.property.uiColorPaletteInput"></a>

```python
ui_color_palette_input: IResolvable | QuicksightThemeConfigurationUiColorPalette
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPalette">QuicksightThemeConfigurationUiColorPalette</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | QuicksightThemeConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfiguration">QuicksightThemeConfiguration</a>

---


### QuicksightThemeConfigurationSheetOutputReference <a name="QuicksightThemeConfigurationSheetOutputReference" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_theme

quicksightTheme.QuicksightThemeConfigurationSheetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.putTile">put_tile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.putTileLayout">put_tile_layout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.resetTile">reset_tile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.resetTileLayout">reset_tile_layout</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_tile` <a name="put_tile" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.putTile"></a>

```python
def put_tile(
  border: QuicksightThemeConfigurationSheetTileBorder = None
) -> None
```

###### `border`<sup>Optional</sup> <a name="border" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.putTile.parameter.border"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileBorder">QuicksightThemeConfigurationSheetTileBorder</a>

<p>The display options for tile borders for visuals.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_theme#border QuicksightTheme#border}

---

##### `put_tile_layout` <a name="put_tile_layout" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.putTileLayout"></a>

```python
def put_tile_layout(
  gutter: QuicksightThemeConfigurationSheetTileLayoutGutter = None,
  margin: QuicksightThemeConfigurationSheetTileLayoutMargin = None
) -> None
```

###### `gutter`<sup>Optional</sup> <a name="gutter" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.putTileLayout.parameter.gutter"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutter">QuicksightThemeConfigurationSheetTileLayoutGutter</a>

<p>The display options for gutter spacing between tiles on a sheet.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_theme#gutter QuicksightTheme#gutter}

---

###### `margin`<sup>Optional</sup> <a name="margin" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.putTileLayout.parameter.margin"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMargin">QuicksightThemeConfigurationSheetTileLayoutMargin</a>

<p>The display options for margins around the outside edge of sheets.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_theme#margin QuicksightTheme#margin}

---

##### `reset_tile` <a name="reset_tile" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.resetTile"></a>

```python
def reset_tile() -> None
```

##### `reset_tile_layout` <a name="reset_tile_layout" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.resetTileLayout"></a>

```python
def reset_tile_layout() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.property.tile">tile</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference">QuicksightThemeConfigurationSheetTileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.property.tileLayout">tile_layout</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference">QuicksightThemeConfigurationSheetTileLayoutOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.property.tileInput">tile_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTile">QuicksightThemeConfigurationSheetTile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.property.tileLayoutInput">tile_layout_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayout">QuicksightThemeConfigurationSheetTileLayout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheet">QuicksightThemeConfigurationSheet</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `tile`<sup>Required</sup> <a name="tile" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.property.tile"></a>

```python
tile: QuicksightThemeConfigurationSheetTileOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference">QuicksightThemeConfigurationSheetTileOutputReference</a>

---

##### `tile_layout`<sup>Required</sup> <a name="tile_layout" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.property.tileLayout"></a>

```python
tile_layout: QuicksightThemeConfigurationSheetTileLayoutOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference">QuicksightThemeConfigurationSheetTileLayoutOutputReference</a>

---

##### `tile_input`<sup>Optional</sup> <a name="tile_input" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.property.tileInput"></a>

```python
tile_input: IResolvable | QuicksightThemeConfigurationSheetTile
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTile">QuicksightThemeConfigurationSheetTile</a>

---

##### `tile_layout_input`<sup>Optional</sup> <a name="tile_layout_input" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.property.tileLayoutInput"></a>

```python
tile_layout_input: IResolvable | QuicksightThemeConfigurationSheetTileLayout
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayout">QuicksightThemeConfigurationSheetTileLayout</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | QuicksightThemeConfigurationSheet
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheet">QuicksightThemeConfigurationSheet</a>

---


### QuicksightThemeConfigurationSheetTileBorderOutputReference <a name="QuicksightThemeConfigurationSheetTileBorderOutputReference" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_theme

quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.resetShow">reset_show</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_show` <a name="reset_show" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.resetShow"></a>

```python
def reset_show() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.property.showInput">show_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.property.show">show</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileBorder">QuicksightThemeConfigurationSheetTileBorder</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `show_input`<sup>Optional</sup> <a name="show_input" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.property.showInput"></a>

```python
show_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `show`<sup>Required</sup> <a name="show" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.property.show"></a>

```python
show: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | QuicksightThemeConfigurationSheetTileBorder
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileBorder">QuicksightThemeConfigurationSheetTileBorder</a>

---


### QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference <a name="QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_theme

quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.resetShow">reset_show</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_show` <a name="reset_show" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.resetShow"></a>

```python
def reset_show() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.property.showInput">show_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.property.show">show</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutter">QuicksightThemeConfigurationSheetTileLayoutGutter</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `show_input`<sup>Optional</sup> <a name="show_input" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.property.showInput"></a>

```python
show_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `show`<sup>Required</sup> <a name="show" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.property.show"></a>

```python
show: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | QuicksightThemeConfigurationSheetTileLayoutGutter
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutter">QuicksightThemeConfigurationSheetTileLayoutGutter</a>

---


### QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference <a name="QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_theme

quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.resetShow">reset_show</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_show` <a name="reset_show" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.resetShow"></a>

```python
def reset_show() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.property.showInput">show_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.property.show">show</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMargin">QuicksightThemeConfigurationSheetTileLayoutMargin</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `show_input`<sup>Optional</sup> <a name="show_input" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.property.showInput"></a>

```python
show_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `show`<sup>Required</sup> <a name="show" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.property.show"></a>

```python
show: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | QuicksightThemeConfigurationSheetTileLayoutMargin
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMargin">QuicksightThemeConfigurationSheetTileLayoutMargin</a>

---


### QuicksightThemeConfigurationSheetTileLayoutOutputReference <a name="QuicksightThemeConfigurationSheetTileLayoutOutputReference" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_theme

quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.putGutter">put_gutter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.putMargin">put_margin</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.resetGutter">reset_gutter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.resetMargin">reset_margin</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_gutter` <a name="put_gutter" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.putGutter"></a>

```python
def put_gutter(
  show: bool | IResolvable = None
) -> None
```

###### `show`<sup>Optional</sup> <a name="show" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.putGutter.parameter.show"></a>

- *Type:* bool | cdktn.IResolvable

<p>This Boolean value controls whether to display a gutter space between sheet tiles.

</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_theme#show QuicksightTheme#show}

---

##### `put_margin` <a name="put_margin" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.putMargin"></a>

```python
def put_margin(
  show: bool | IResolvable = None
) -> None
```

###### `show`<sup>Optional</sup> <a name="show" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.putMargin.parameter.show"></a>

- *Type:* bool | cdktn.IResolvable

<p>This Boolean value controls whether to display sheet margins.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_theme#show QuicksightTheme#show}

---

##### `reset_gutter` <a name="reset_gutter" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.resetGutter"></a>

```python
def reset_gutter() -> None
```

##### `reset_margin` <a name="reset_margin" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.resetMargin"></a>

```python
def reset_margin() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.property.gutter">gutter</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference">QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.property.margin">margin</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference">QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.property.gutterInput">gutter_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutter">QuicksightThemeConfigurationSheetTileLayoutGutter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.property.marginInput">margin_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMargin">QuicksightThemeConfigurationSheetTileLayoutMargin</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayout">QuicksightThemeConfigurationSheetTileLayout</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `gutter`<sup>Required</sup> <a name="gutter" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.property.gutter"></a>

```python
gutter: QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference">QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference</a>

---

##### `margin`<sup>Required</sup> <a name="margin" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.property.margin"></a>

```python
margin: QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference">QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference</a>

---

##### `gutter_input`<sup>Optional</sup> <a name="gutter_input" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.property.gutterInput"></a>

```python
gutter_input: IResolvable | QuicksightThemeConfigurationSheetTileLayoutGutter
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutter">QuicksightThemeConfigurationSheetTileLayoutGutter</a>

---

##### `margin_input`<sup>Optional</sup> <a name="margin_input" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.property.marginInput"></a>

```python
margin_input: IResolvable | QuicksightThemeConfigurationSheetTileLayoutMargin
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMargin">QuicksightThemeConfigurationSheetTileLayoutMargin</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | QuicksightThemeConfigurationSheetTileLayout
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileLayout">QuicksightThemeConfigurationSheetTileLayout</a>

---


### QuicksightThemeConfigurationSheetTileOutputReference <a name="QuicksightThemeConfigurationSheetTileOutputReference" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_theme

quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.putBorder">put_border</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.resetBorder">reset_border</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_border` <a name="put_border" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.putBorder"></a>

```python
def put_border(
  show: bool | IResolvable = None
) -> None
```

###### `show`<sup>Optional</sup> <a name="show" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.putBorder.parameter.show"></a>

- *Type:* bool | cdktn.IResolvable

<p>The option to enable display of borders for visuals.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_theme#show QuicksightTheme#show}

---

##### `reset_border` <a name="reset_border" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.resetBorder"></a>

```python
def reset_border() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.property.border">border</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference">QuicksightThemeConfigurationSheetTileBorderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.property.borderInput">border_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileBorder">QuicksightThemeConfigurationSheetTileBorder</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTile">QuicksightThemeConfigurationSheetTile</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `border`<sup>Required</sup> <a name="border" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.property.border"></a>

```python
border: QuicksightThemeConfigurationSheetTileBorderOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference">QuicksightThemeConfigurationSheetTileBorderOutputReference</a>

---

##### `border_input`<sup>Optional</sup> <a name="border_input" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.property.borderInput"></a>

```python
border_input: IResolvable | QuicksightThemeConfigurationSheetTileBorder
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileBorder">QuicksightThemeConfigurationSheetTileBorder</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | QuicksightThemeConfigurationSheetTile
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationSheetTile">QuicksightThemeConfigurationSheetTile</a>

---


### QuicksightThemeConfigurationTypographyFontFamiliesList <a name="QuicksightThemeConfigurationTypographyFontFamiliesList" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesList.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_theme

quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> QuicksightThemeConfigurationTypographyFontFamiliesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamilies">QuicksightThemeConfigurationTypographyFontFamilies</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[QuicksightThemeConfigurationTypographyFontFamilies]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamilies">QuicksightThemeConfigurationTypographyFontFamilies</a>]

---


### QuicksightThemeConfigurationTypographyFontFamiliesOutputReference <a name="QuicksightThemeConfigurationTypographyFontFamiliesOutputReference" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_theme

quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.resetFontFamily">reset_font_family</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_font_family` <a name="reset_font_family" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.resetFontFamily"></a>

```python
def reset_font_family() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.property.fontFamilyInput">font_family_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.property.fontFamily">font_family</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamilies">QuicksightThemeConfigurationTypographyFontFamilies</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `font_family_input`<sup>Optional</sup> <a name="font_family_input" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.property.fontFamilyInput"></a>

```python
font_family_input: str
```

- *Type:* str

---

##### `font_family`<sup>Required</sup> <a name="font_family" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.property.fontFamily"></a>

```python
font_family: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | QuicksightThemeConfigurationTypographyFontFamilies
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamilies">QuicksightThemeConfigurationTypographyFontFamilies</a>

---


### QuicksightThemeConfigurationTypographyOutputReference <a name="QuicksightThemeConfigurationTypographyOutputReference" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_theme

quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.putFontFamilies">put_font_families</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.resetFontFamilies">reset_font_families</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_font_families` <a name="put_font_families" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.putFontFamilies"></a>

```python
def put_font_families(
  value: IResolvable | typing.List[QuicksightThemeConfigurationTypographyFontFamilies]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.putFontFamilies.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamilies">QuicksightThemeConfigurationTypographyFontFamilies</a>]

---

##### `reset_font_families` <a name="reset_font_families" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.resetFontFamilies"></a>

```python
def reset_font_families() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.property.fontFamilies">font_families</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesList">QuicksightThemeConfigurationTypographyFontFamiliesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.property.fontFamiliesInput">font_families_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamilies">QuicksightThemeConfigurationTypographyFontFamilies</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypography">QuicksightThemeConfigurationTypography</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `font_families`<sup>Required</sup> <a name="font_families" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.property.fontFamilies"></a>

```python
font_families: QuicksightThemeConfigurationTypographyFontFamiliesList
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesList">QuicksightThemeConfigurationTypographyFontFamiliesList</a>

---

##### `font_families_input`<sup>Optional</sup> <a name="font_families_input" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.property.fontFamiliesInput"></a>

```python
font_families_input: IResolvable | typing.List[QuicksightThemeConfigurationTypographyFontFamilies]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamilies">QuicksightThemeConfigurationTypographyFontFamilies</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | QuicksightThemeConfigurationTypography
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationTypography">QuicksightThemeConfigurationTypography</a>

---


### QuicksightThemeConfigurationUiColorPaletteOutputReference <a name="QuicksightThemeConfigurationUiColorPaletteOutputReference" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_theme

quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.resetAccent">reset_accent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.resetAccentForeground">reset_accent_foreground</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.resetDanger">reset_danger</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.resetDangerForeground">reset_danger_foreground</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.resetDimension">reset_dimension</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.resetDimensionForeground">reset_dimension_foreground</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.resetMeasure">reset_measure</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.resetMeasureForeground">reset_measure_foreground</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.resetPrimaryBackground">reset_primary_background</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.resetPrimaryForeground">reset_primary_foreground</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.resetSecondaryBackground">reset_secondary_background</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.resetSecondaryForeground">reset_secondary_foreground</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.resetSuccess">reset_success</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.resetSuccessForeground">reset_success_foreground</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.resetWarning">reset_warning</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.resetWarningForeground">reset_warning_foreground</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_accent` <a name="reset_accent" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.resetAccent"></a>

```python
def reset_accent() -> None
```

##### `reset_accent_foreground` <a name="reset_accent_foreground" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.resetAccentForeground"></a>

```python
def reset_accent_foreground() -> None
```

##### `reset_danger` <a name="reset_danger" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.resetDanger"></a>

```python
def reset_danger() -> None
```

##### `reset_danger_foreground` <a name="reset_danger_foreground" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.resetDangerForeground"></a>

```python
def reset_danger_foreground() -> None
```

##### `reset_dimension` <a name="reset_dimension" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.resetDimension"></a>

```python
def reset_dimension() -> None
```

##### `reset_dimension_foreground` <a name="reset_dimension_foreground" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.resetDimensionForeground"></a>

```python
def reset_dimension_foreground() -> None
```

##### `reset_measure` <a name="reset_measure" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.resetMeasure"></a>

```python
def reset_measure() -> None
```

##### `reset_measure_foreground` <a name="reset_measure_foreground" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.resetMeasureForeground"></a>

```python
def reset_measure_foreground() -> None
```

##### `reset_primary_background` <a name="reset_primary_background" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.resetPrimaryBackground"></a>

```python
def reset_primary_background() -> None
```

##### `reset_primary_foreground` <a name="reset_primary_foreground" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.resetPrimaryForeground"></a>

```python
def reset_primary_foreground() -> None
```

##### `reset_secondary_background` <a name="reset_secondary_background" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.resetSecondaryBackground"></a>

```python
def reset_secondary_background() -> None
```

##### `reset_secondary_foreground` <a name="reset_secondary_foreground" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.resetSecondaryForeground"></a>

```python
def reset_secondary_foreground() -> None
```

##### `reset_success` <a name="reset_success" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.resetSuccess"></a>

```python
def reset_success() -> None
```

##### `reset_success_foreground` <a name="reset_success_foreground" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.resetSuccessForeground"></a>

```python
def reset_success_foreground() -> None
```

##### `reset_warning` <a name="reset_warning" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.resetWarning"></a>

```python
def reset_warning() -> None
```

##### `reset_warning_foreground` <a name="reset_warning_foreground" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.resetWarningForeground"></a>

```python
def reset_warning_foreground() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.accentForegroundInput">accent_foreground_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.accentInput">accent_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.dangerForegroundInput">danger_foreground_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.dangerInput">danger_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.dimensionForegroundInput">dimension_foreground_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.dimensionInput">dimension_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.measureForegroundInput">measure_foreground_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.measureInput">measure_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.primaryBackgroundInput">primary_background_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.primaryForegroundInput">primary_foreground_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.secondaryBackgroundInput">secondary_background_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.secondaryForegroundInput">secondary_foreground_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.successForegroundInput">success_foreground_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.successInput">success_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.warningForegroundInput">warning_foreground_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.warningInput">warning_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.accent">accent</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.accentForeground">accent_foreground</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.danger">danger</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.dangerForeground">danger_foreground</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.dimension">dimension</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.dimensionForeground">dimension_foreground</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.measure">measure</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.measureForeground">measure_foreground</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.primaryBackground">primary_background</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.primaryForeground">primary_foreground</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.secondaryBackground">secondary_background</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.secondaryForeground">secondary_foreground</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.success">success</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.successForeground">success_foreground</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.warning">warning</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.warningForeground">warning_foreground</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPalette">QuicksightThemeConfigurationUiColorPalette</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `accent_foreground_input`<sup>Optional</sup> <a name="accent_foreground_input" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.accentForegroundInput"></a>

```python
accent_foreground_input: str
```

- *Type:* str

---

##### `accent_input`<sup>Optional</sup> <a name="accent_input" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.accentInput"></a>

```python
accent_input: str
```

- *Type:* str

---

##### `danger_foreground_input`<sup>Optional</sup> <a name="danger_foreground_input" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.dangerForegroundInput"></a>

```python
danger_foreground_input: str
```

- *Type:* str

---

##### `danger_input`<sup>Optional</sup> <a name="danger_input" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.dangerInput"></a>

```python
danger_input: str
```

- *Type:* str

---

##### `dimension_foreground_input`<sup>Optional</sup> <a name="dimension_foreground_input" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.dimensionForegroundInput"></a>

```python
dimension_foreground_input: str
```

- *Type:* str

---

##### `dimension_input`<sup>Optional</sup> <a name="dimension_input" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.dimensionInput"></a>

```python
dimension_input: str
```

- *Type:* str

---

##### `measure_foreground_input`<sup>Optional</sup> <a name="measure_foreground_input" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.measureForegroundInput"></a>

```python
measure_foreground_input: str
```

- *Type:* str

---

##### `measure_input`<sup>Optional</sup> <a name="measure_input" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.measureInput"></a>

```python
measure_input: str
```

- *Type:* str

---

##### `primary_background_input`<sup>Optional</sup> <a name="primary_background_input" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.primaryBackgroundInput"></a>

```python
primary_background_input: str
```

- *Type:* str

---

##### `primary_foreground_input`<sup>Optional</sup> <a name="primary_foreground_input" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.primaryForegroundInput"></a>

```python
primary_foreground_input: str
```

- *Type:* str

---

##### `secondary_background_input`<sup>Optional</sup> <a name="secondary_background_input" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.secondaryBackgroundInput"></a>

```python
secondary_background_input: str
```

- *Type:* str

---

##### `secondary_foreground_input`<sup>Optional</sup> <a name="secondary_foreground_input" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.secondaryForegroundInput"></a>

```python
secondary_foreground_input: str
```

- *Type:* str

---

##### `success_foreground_input`<sup>Optional</sup> <a name="success_foreground_input" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.successForegroundInput"></a>

```python
success_foreground_input: str
```

- *Type:* str

---

##### `success_input`<sup>Optional</sup> <a name="success_input" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.successInput"></a>

```python
success_input: str
```

- *Type:* str

---

##### `warning_foreground_input`<sup>Optional</sup> <a name="warning_foreground_input" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.warningForegroundInput"></a>

```python
warning_foreground_input: str
```

- *Type:* str

---

##### `warning_input`<sup>Optional</sup> <a name="warning_input" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.warningInput"></a>

```python
warning_input: str
```

- *Type:* str

---

##### `accent`<sup>Required</sup> <a name="accent" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.accent"></a>

```python
accent: str
```

- *Type:* str

---

##### `accent_foreground`<sup>Required</sup> <a name="accent_foreground" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.accentForeground"></a>

```python
accent_foreground: str
```

- *Type:* str

---

##### `danger`<sup>Required</sup> <a name="danger" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.danger"></a>

```python
danger: str
```

- *Type:* str

---

##### `danger_foreground`<sup>Required</sup> <a name="danger_foreground" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.dangerForeground"></a>

```python
danger_foreground: str
```

- *Type:* str

---

##### `dimension`<sup>Required</sup> <a name="dimension" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.dimension"></a>

```python
dimension: str
```

- *Type:* str

---

##### `dimension_foreground`<sup>Required</sup> <a name="dimension_foreground" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.dimensionForeground"></a>

```python
dimension_foreground: str
```

- *Type:* str

---

##### `measure`<sup>Required</sup> <a name="measure" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.measure"></a>

```python
measure: str
```

- *Type:* str

---

##### `measure_foreground`<sup>Required</sup> <a name="measure_foreground" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.measureForeground"></a>

```python
measure_foreground: str
```

- *Type:* str

---

##### `primary_background`<sup>Required</sup> <a name="primary_background" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.primaryBackground"></a>

```python
primary_background: str
```

- *Type:* str

---

##### `primary_foreground`<sup>Required</sup> <a name="primary_foreground" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.primaryForeground"></a>

```python
primary_foreground: str
```

- *Type:* str

---

##### `secondary_background`<sup>Required</sup> <a name="secondary_background" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.secondaryBackground"></a>

```python
secondary_background: str
```

- *Type:* str

---

##### `secondary_foreground`<sup>Required</sup> <a name="secondary_foreground" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.secondaryForeground"></a>

```python
secondary_foreground: str
```

- *Type:* str

---

##### `success`<sup>Required</sup> <a name="success" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.success"></a>

```python
success: str
```

- *Type:* str

---

##### `success_foreground`<sup>Required</sup> <a name="success_foreground" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.successForeground"></a>

```python
success_foreground: str
```

- *Type:* str

---

##### `warning`<sup>Required</sup> <a name="warning" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.warning"></a>

```python
warning: str
```

- *Type:* str

---

##### `warning_foreground`<sup>Required</sup> <a name="warning_foreground" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.warningForeground"></a>

```python
warning_foreground: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | QuicksightThemeConfigurationUiColorPalette
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeConfigurationUiColorPalette">QuicksightThemeConfigurationUiColorPalette</a>

---


### QuicksightThemePermissionsList <a name="QuicksightThemePermissionsList" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissionsList.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_theme

quicksightTheme.QuicksightThemePermissionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> QuicksightThemePermissionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissionsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissions">QuicksightThemePermissions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissionsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[QuicksightThemePermissions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissions">QuicksightThemePermissions</a>]

---


### QuicksightThemePermissionsOutputReference <a name="QuicksightThemePermissionsOutputReference" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_theme

quicksightTheme.QuicksightThemePermissionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissionsOutputReference.resetActions">reset_actions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissionsOutputReference.resetPrincipal">reset_principal</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_actions` <a name="reset_actions" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissionsOutputReference.resetActions"></a>

```python
def reset_actions() -> None
```

##### `reset_principal` <a name="reset_principal" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissionsOutputReference.resetPrincipal"></a>

```python
def reset_principal() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissionsOutputReference.property.actionsInput">actions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissionsOutputReference.property.principalInput">principal_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissionsOutputReference.property.actions">actions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissionsOutputReference.property.principal">principal</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissions">QuicksightThemePermissions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `actions_input`<sup>Optional</sup> <a name="actions_input" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissionsOutputReference.property.actionsInput"></a>

```python
actions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `principal_input`<sup>Optional</sup> <a name="principal_input" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissionsOutputReference.property.principalInput"></a>

```python
principal_input: str
```

- *Type:* str

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissionsOutputReference.property.actions"></a>

```python
actions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissionsOutputReference.property.principal"></a>

```python
principal: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | QuicksightThemePermissions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemePermissions">QuicksightThemePermissions</a>

---


### QuicksightThemeTagsList <a name="QuicksightThemeTagsList" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_theme

quicksightTheme.QuicksightThemeTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> QuicksightThemeTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTags">QuicksightThemeTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[QuicksightThemeTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTags">QuicksightThemeTags</a>]

---


### QuicksightThemeTagsOutputReference <a name="QuicksightThemeTagsOutputReference" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_theme

quicksightTheme.QuicksightThemeTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTags">QuicksightThemeTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | QuicksightThemeTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeTags">QuicksightThemeTags</a>

---


### QuicksightThemeVersionConfigurationDataColorPaletteOutputReference <a name="QuicksightThemeVersionConfigurationDataColorPaletteOutputReference" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationDataColorPaletteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationDataColorPaletteOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_theme

quicksightTheme.QuicksightThemeVersionConfigurationDataColorPaletteOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationDataColorPaletteOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationDataColorPaletteOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationDataColorPaletteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationDataColorPaletteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationDataColorPaletteOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationDataColorPaletteOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationDataColorPaletteOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationDataColorPaletteOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationDataColorPaletteOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationDataColorPaletteOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationDataColorPaletteOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationDataColorPaletteOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationDataColorPaletteOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationDataColorPaletteOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationDataColorPaletteOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationDataColorPaletteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationDataColorPaletteOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationDataColorPaletteOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationDataColorPaletteOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationDataColorPaletteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationDataColorPaletteOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationDataColorPaletteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationDataColorPaletteOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationDataColorPaletteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationDataColorPaletteOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationDataColorPaletteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationDataColorPaletteOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationDataColorPaletteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationDataColorPaletteOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationDataColorPaletteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationDataColorPaletteOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationDataColorPaletteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationDataColorPaletteOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationDataColorPaletteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationDataColorPaletteOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationDataColorPaletteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationDataColorPaletteOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationDataColorPaletteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationDataColorPaletteOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationDataColorPaletteOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationDataColorPaletteOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationDataColorPaletteOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationDataColorPaletteOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationDataColorPaletteOutputReference.property.colors">colors</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationDataColorPaletteOutputReference.property.emptyFillColor">empty_fill_color</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationDataColorPaletteOutputReference.property.minMaxGradient">min_max_gradient</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationDataColorPaletteOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationDataColorPalette">QuicksightThemeVersionConfigurationDataColorPalette</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationDataColorPaletteOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationDataColorPaletteOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `colors`<sup>Required</sup> <a name="colors" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationDataColorPaletteOutputReference.property.colors"></a>

```python
colors: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `empty_fill_color`<sup>Required</sup> <a name="empty_fill_color" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationDataColorPaletteOutputReference.property.emptyFillColor"></a>

```python
empty_fill_color: str
```

- *Type:* str

---

##### `min_max_gradient`<sup>Required</sup> <a name="min_max_gradient" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationDataColorPaletteOutputReference.property.minMaxGradient"></a>

```python
min_max_gradient: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationDataColorPaletteOutputReference.property.internalValue"></a>

```python
internal_value: QuicksightThemeVersionConfigurationDataColorPalette
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationDataColorPalette">QuicksightThemeVersionConfigurationDataColorPalette</a>

---


### QuicksightThemeVersionConfigurationOutputReference <a name="QuicksightThemeVersionConfigurationOutputReference" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_theme

quicksightTheme.QuicksightThemeVersionConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationOutputReference.property.dataColorPalette">data_color_palette</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationDataColorPaletteOutputReference">QuicksightThemeVersionConfigurationDataColorPaletteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationOutputReference.property.sheet">sheet</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetOutputReference">QuicksightThemeVersionConfigurationSheetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationOutputReference.property.typography">typography</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyOutputReference">QuicksightThemeVersionConfigurationTypographyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationOutputReference.property.uiColorPalette">ui_color_palette</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationUiColorPaletteOutputReference">QuicksightThemeVersionConfigurationUiColorPaletteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfiguration">QuicksightThemeVersionConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `data_color_palette`<sup>Required</sup> <a name="data_color_palette" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationOutputReference.property.dataColorPalette"></a>

```python
data_color_palette: QuicksightThemeVersionConfigurationDataColorPaletteOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationDataColorPaletteOutputReference">QuicksightThemeVersionConfigurationDataColorPaletteOutputReference</a>

---

##### `sheet`<sup>Required</sup> <a name="sheet" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationOutputReference.property.sheet"></a>

```python
sheet: QuicksightThemeVersionConfigurationSheetOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetOutputReference">QuicksightThemeVersionConfigurationSheetOutputReference</a>

---

##### `typography`<sup>Required</sup> <a name="typography" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationOutputReference.property.typography"></a>

```python
typography: QuicksightThemeVersionConfigurationTypographyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyOutputReference">QuicksightThemeVersionConfigurationTypographyOutputReference</a>

---

##### `ui_color_palette`<sup>Required</sup> <a name="ui_color_palette" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationOutputReference.property.uiColorPalette"></a>

```python
ui_color_palette: QuicksightThemeVersionConfigurationUiColorPaletteOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationUiColorPaletteOutputReference">QuicksightThemeVersionConfigurationUiColorPaletteOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: QuicksightThemeVersionConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfiguration">QuicksightThemeVersionConfiguration</a>

---


### QuicksightThemeVersionConfigurationSheetOutputReference <a name="QuicksightThemeVersionConfigurationSheetOutputReference" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_theme

quicksightTheme.QuicksightThemeVersionConfigurationSheetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetOutputReference.property.tile">tile</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileOutputReference">QuicksightThemeVersionConfigurationSheetTileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetOutputReference.property.tileLayout">tile_layout</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutOutputReference">QuicksightThemeVersionConfigurationSheetTileLayoutOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheet">QuicksightThemeVersionConfigurationSheet</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `tile`<sup>Required</sup> <a name="tile" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetOutputReference.property.tile"></a>

```python
tile: QuicksightThemeVersionConfigurationSheetTileOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileOutputReference">QuicksightThemeVersionConfigurationSheetTileOutputReference</a>

---

##### `tile_layout`<sup>Required</sup> <a name="tile_layout" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetOutputReference.property.tileLayout"></a>

```python
tile_layout: QuicksightThemeVersionConfigurationSheetTileLayoutOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutOutputReference">QuicksightThemeVersionConfigurationSheetTileLayoutOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetOutputReference.property.internalValue"></a>

```python
internal_value: QuicksightThemeVersionConfigurationSheet
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheet">QuicksightThemeVersionConfigurationSheet</a>

---


### QuicksightThemeVersionConfigurationSheetTileBorderOutputReference <a name="QuicksightThemeVersionConfigurationSheetTileBorderOutputReference" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileBorderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileBorderOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_theme

quicksightTheme.QuicksightThemeVersionConfigurationSheetTileBorderOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileBorderOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileBorderOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileBorderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileBorderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileBorderOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileBorderOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileBorderOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileBorderOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileBorderOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileBorderOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileBorderOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileBorderOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileBorderOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileBorderOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileBorderOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileBorderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileBorderOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileBorderOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileBorderOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileBorderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileBorderOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileBorderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileBorderOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileBorderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileBorderOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileBorderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileBorderOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileBorderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileBorderOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileBorderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileBorderOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileBorderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileBorderOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileBorderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileBorderOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileBorderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileBorderOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileBorderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileBorderOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileBorderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileBorderOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileBorderOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileBorderOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileBorderOutputReference.property.show">show</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileBorderOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileBorder">QuicksightThemeVersionConfigurationSheetTileBorder</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileBorderOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileBorderOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `show`<sup>Required</sup> <a name="show" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileBorderOutputReference.property.show"></a>

```python
show: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileBorderOutputReference.property.internalValue"></a>

```python
internal_value: QuicksightThemeVersionConfigurationSheetTileBorder
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileBorder">QuicksightThemeVersionConfigurationSheetTileBorder</a>

---


### QuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference <a name="QuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_theme

quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.property.show">show</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutGutter">QuicksightThemeVersionConfigurationSheetTileLayoutGutter</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `show`<sup>Required</sup> <a name="show" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.property.show"></a>

```python
show: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.property.internalValue"></a>

```python
internal_value: QuicksightThemeVersionConfigurationSheetTileLayoutGutter
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutGutter">QuicksightThemeVersionConfigurationSheetTileLayoutGutter</a>

---


### QuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference <a name="QuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_theme

quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.property.show">show</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutMargin">QuicksightThemeVersionConfigurationSheetTileLayoutMargin</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `show`<sup>Required</sup> <a name="show" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.property.show"></a>

```python
show: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.property.internalValue"></a>

```python
internal_value: QuicksightThemeVersionConfigurationSheetTileLayoutMargin
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutMargin">QuicksightThemeVersionConfigurationSheetTileLayoutMargin</a>

---


### QuicksightThemeVersionConfigurationSheetTileLayoutOutputReference <a name="QuicksightThemeVersionConfigurationSheetTileLayoutOutputReference" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_theme

quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.property.gutter">gutter</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference">QuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.property.margin">margin</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference">QuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayout">QuicksightThemeVersionConfigurationSheetTileLayout</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `gutter`<sup>Required</sup> <a name="gutter" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.property.gutter"></a>

```python
gutter: QuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference">QuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference</a>

---

##### `margin`<sup>Required</sup> <a name="margin" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.property.margin"></a>

```python
margin: QuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference">QuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.property.internalValue"></a>

```python
internal_value: QuicksightThemeVersionConfigurationSheetTileLayout
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileLayout">QuicksightThemeVersionConfigurationSheetTileLayout</a>

---


### QuicksightThemeVersionConfigurationSheetTileOutputReference <a name="QuicksightThemeVersionConfigurationSheetTileOutputReference" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_theme

quicksightTheme.QuicksightThemeVersionConfigurationSheetTileOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileOutputReference.property.border">border</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileBorderOutputReference">QuicksightThemeVersionConfigurationSheetTileBorderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTile">QuicksightThemeVersionConfigurationSheetTile</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `border`<sup>Required</sup> <a name="border" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileOutputReference.property.border"></a>

```python
border: QuicksightThemeVersionConfigurationSheetTileBorderOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileBorderOutputReference">QuicksightThemeVersionConfigurationSheetTileBorderOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTileOutputReference.property.internalValue"></a>

```python
internal_value: QuicksightThemeVersionConfigurationSheetTile
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationSheetTile">QuicksightThemeVersionConfigurationSheetTile</a>

---


### QuicksightThemeVersionConfigurationTypographyFontFamiliesList <a name="QuicksightThemeVersionConfigurationTypographyFontFamiliesList" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyFontFamiliesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyFontFamiliesList.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_theme

quicksightTheme.QuicksightThemeVersionConfigurationTypographyFontFamiliesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyFontFamiliesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyFontFamiliesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyFontFamiliesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyFontFamiliesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyFontFamiliesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyFontFamiliesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyFontFamiliesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyFontFamiliesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyFontFamiliesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyFontFamiliesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyFontFamiliesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyFontFamiliesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyFontFamiliesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyFontFamiliesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyFontFamiliesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyFontFamiliesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyFontFamiliesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyFontFamiliesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> QuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyFontFamiliesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyFontFamiliesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyFontFamiliesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyFontFamiliesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyFontFamiliesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### QuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference <a name="QuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_theme

quicksightTheme.QuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.property.fontFamily">font_family</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyFontFamilies">QuicksightThemeVersionConfigurationTypographyFontFamilies</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `font_family`<sup>Required</sup> <a name="font_family" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.property.fontFamily"></a>

```python
font_family: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.property.internalValue"></a>

```python
internal_value: QuicksightThemeVersionConfigurationTypographyFontFamilies
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyFontFamilies">QuicksightThemeVersionConfigurationTypographyFontFamilies</a>

---


### QuicksightThemeVersionConfigurationTypographyOutputReference <a name="QuicksightThemeVersionConfigurationTypographyOutputReference" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_theme

quicksightTheme.QuicksightThemeVersionConfigurationTypographyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyOutputReference.property.fontFamilies">font_families</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyFontFamiliesList">QuicksightThemeVersionConfigurationTypographyFontFamiliesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypography">QuicksightThemeVersionConfigurationTypography</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `font_families`<sup>Required</sup> <a name="font_families" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyOutputReference.property.fontFamilies"></a>

```python
font_families: QuicksightThemeVersionConfigurationTypographyFontFamiliesList
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyFontFamiliesList">QuicksightThemeVersionConfigurationTypographyFontFamiliesList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypographyOutputReference.property.internalValue"></a>

```python
internal_value: QuicksightThemeVersionConfigurationTypography
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationTypography">QuicksightThemeVersionConfigurationTypography</a>

---


### QuicksightThemeVersionConfigurationUiColorPaletteOutputReference <a name="QuicksightThemeVersionConfigurationUiColorPaletteOutputReference" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationUiColorPaletteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationUiColorPaletteOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_theme

quicksightTheme.QuicksightThemeVersionConfigurationUiColorPaletteOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationUiColorPaletteOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationUiColorPaletteOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationUiColorPaletteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationUiColorPaletteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationUiColorPaletteOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationUiColorPaletteOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationUiColorPaletteOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationUiColorPaletteOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationUiColorPaletteOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationUiColorPaletteOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationUiColorPaletteOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationUiColorPaletteOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationUiColorPaletteOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationUiColorPaletteOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationUiColorPaletteOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationUiColorPaletteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationUiColorPaletteOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationUiColorPaletteOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationUiColorPaletteOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationUiColorPaletteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationUiColorPaletteOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationUiColorPaletteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationUiColorPaletteOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationUiColorPaletteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationUiColorPaletteOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationUiColorPaletteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationUiColorPaletteOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationUiColorPaletteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationUiColorPaletteOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationUiColorPaletteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationUiColorPaletteOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationUiColorPaletteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationUiColorPaletteOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationUiColorPaletteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationUiColorPaletteOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationUiColorPaletteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationUiColorPaletteOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationUiColorPaletteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationUiColorPaletteOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationUiColorPaletteOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationUiColorPaletteOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationUiColorPaletteOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationUiColorPaletteOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationUiColorPaletteOutputReference.property.accent">accent</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationUiColorPaletteOutputReference.property.accentForeground">accent_foreground</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationUiColorPaletteOutputReference.property.danger">danger</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationUiColorPaletteOutputReference.property.dangerForeground">danger_foreground</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationUiColorPaletteOutputReference.property.dimension">dimension</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationUiColorPaletteOutputReference.property.dimensionForeground">dimension_foreground</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationUiColorPaletteOutputReference.property.measure">measure</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationUiColorPaletteOutputReference.property.measureForeground">measure_foreground</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationUiColorPaletteOutputReference.property.primaryBackground">primary_background</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationUiColorPaletteOutputReference.property.primaryForeground">primary_foreground</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationUiColorPaletteOutputReference.property.secondaryBackground">secondary_background</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationUiColorPaletteOutputReference.property.secondaryForeground">secondary_foreground</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationUiColorPaletteOutputReference.property.success">success</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationUiColorPaletteOutputReference.property.successForeground">success_foreground</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationUiColorPaletteOutputReference.property.warning">warning</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationUiColorPaletteOutputReference.property.warningForeground">warning_foreground</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationUiColorPaletteOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationUiColorPalette">QuicksightThemeVersionConfigurationUiColorPalette</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationUiColorPaletteOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationUiColorPaletteOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `accent`<sup>Required</sup> <a name="accent" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationUiColorPaletteOutputReference.property.accent"></a>

```python
accent: str
```

- *Type:* str

---

##### `accent_foreground`<sup>Required</sup> <a name="accent_foreground" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationUiColorPaletteOutputReference.property.accentForeground"></a>

```python
accent_foreground: str
```

- *Type:* str

---

##### `danger`<sup>Required</sup> <a name="danger" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationUiColorPaletteOutputReference.property.danger"></a>

```python
danger: str
```

- *Type:* str

---

##### `danger_foreground`<sup>Required</sup> <a name="danger_foreground" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationUiColorPaletteOutputReference.property.dangerForeground"></a>

```python
danger_foreground: str
```

- *Type:* str

---

##### `dimension`<sup>Required</sup> <a name="dimension" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationUiColorPaletteOutputReference.property.dimension"></a>

```python
dimension: str
```

- *Type:* str

---

##### `dimension_foreground`<sup>Required</sup> <a name="dimension_foreground" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationUiColorPaletteOutputReference.property.dimensionForeground"></a>

```python
dimension_foreground: str
```

- *Type:* str

---

##### `measure`<sup>Required</sup> <a name="measure" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationUiColorPaletteOutputReference.property.measure"></a>

```python
measure: str
```

- *Type:* str

---

##### `measure_foreground`<sup>Required</sup> <a name="measure_foreground" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationUiColorPaletteOutputReference.property.measureForeground"></a>

```python
measure_foreground: str
```

- *Type:* str

---

##### `primary_background`<sup>Required</sup> <a name="primary_background" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationUiColorPaletteOutputReference.property.primaryBackground"></a>

```python
primary_background: str
```

- *Type:* str

---

##### `primary_foreground`<sup>Required</sup> <a name="primary_foreground" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationUiColorPaletteOutputReference.property.primaryForeground"></a>

```python
primary_foreground: str
```

- *Type:* str

---

##### `secondary_background`<sup>Required</sup> <a name="secondary_background" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationUiColorPaletteOutputReference.property.secondaryBackground"></a>

```python
secondary_background: str
```

- *Type:* str

---

##### `secondary_foreground`<sup>Required</sup> <a name="secondary_foreground" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationUiColorPaletteOutputReference.property.secondaryForeground"></a>

```python
secondary_foreground: str
```

- *Type:* str

---

##### `success`<sup>Required</sup> <a name="success" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationUiColorPaletteOutputReference.property.success"></a>

```python
success: str
```

- *Type:* str

---

##### `success_foreground`<sup>Required</sup> <a name="success_foreground" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationUiColorPaletteOutputReference.property.successForeground"></a>

```python
success_foreground: str
```

- *Type:* str

---

##### `warning`<sup>Required</sup> <a name="warning" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationUiColorPaletteOutputReference.property.warning"></a>

```python
warning: str
```

- *Type:* str

---

##### `warning_foreground`<sup>Required</sup> <a name="warning_foreground" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationUiColorPaletteOutputReference.property.warningForeground"></a>

```python
warning_foreground: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationUiColorPaletteOutputReference.property.internalValue"></a>

```python
internal_value: QuicksightThemeVersionConfigurationUiColorPalette
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationUiColorPalette">QuicksightThemeVersionConfigurationUiColorPalette</a>

---


### QuicksightThemeVersionErrorsList <a name="QuicksightThemeVersionErrorsList" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionErrorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionErrorsList.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_theme

quicksightTheme.QuicksightThemeVersionErrorsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionErrorsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionErrorsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionErrorsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionErrorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionErrorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionErrorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionErrorsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionErrorsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionErrorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionErrorsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionErrorsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionErrorsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionErrorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionErrorsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionErrorsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionErrorsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionErrorsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionErrorsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> QuicksightThemeVersionErrorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionErrorsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionErrorsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionErrorsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionErrorsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionErrorsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### QuicksightThemeVersionErrorsOutputReference <a name="QuicksightThemeVersionErrorsOutputReference" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionErrorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionErrorsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_theme

quicksightTheme.QuicksightThemeVersionErrorsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionErrorsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionErrorsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionErrorsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionErrorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionErrorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionErrorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionErrorsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionErrorsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionErrorsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionErrorsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionErrorsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionErrorsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionErrorsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionErrorsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionErrorsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionErrorsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionErrorsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionErrorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionErrorsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionErrorsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionErrorsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionErrorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionErrorsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionErrorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionErrorsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionErrorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionErrorsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionErrorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionErrorsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionErrorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionErrorsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionErrorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionErrorsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionErrorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionErrorsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionErrorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionErrorsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionErrorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionErrorsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionErrorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionErrorsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionErrorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionErrorsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionErrorsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionErrorsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionErrorsOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionErrorsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionErrorsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionErrors">QuicksightThemeVersionErrors</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionErrorsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionErrorsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionErrorsOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionErrorsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionErrorsOutputReference.property.internalValue"></a>

```python
internal_value: QuicksightThemeVersionErrors
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionErrors">QuicksightThemeVersionErrors</a>

---


### QuicksightThemeVersionOutputReference <a name="QuicksightThemeVersionOutputReference" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_theme

quicksightTheme.QuicksightThemeVersionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionOutputReference.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionOutputReference.property.baseThemeId">base_theme_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionOutputReference.property.configuration">configuration</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationOutputReference">QuicksightThemeVersionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionOutputReference.property.createdTime">created_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionOutputReference.property.errors">errors</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionErrorsList">QuicksightThemeVersionErrorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionOutputReference.property.versionNumber">version_number</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersion">QuicksightThemeVersion</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionOutputReference.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `base_theme_id`<sup>Required</sup> <a name="base_theme_id" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionOutputReference.property.baseThemeId"></a>

```python
base_theme_id: str
```

- *Type:* str

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionOutputReference.property.configuration"></a>

```python
configuration: QuicksightThemeVersionConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionConfigurationOutputReference">QuicksightThemeVersionConfigurationOutputReference</a>

---

##### `created_time`<sup>Required</sup> <a name="created_time" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionOutputReference.property.createdTime"></a>

```python
created_time: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `errors`<sup>Required</sup> <a name="errors" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionOutputReference.property.errors"></a>

```python
errors: QuicksightThemeVersionErrorsList
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionErrorsList">QuicksightThemeVersionErrorsList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `version_number`<sup>Required</sup> <a name="version_number" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionOutputReference.property.versionNumber"></a>

```python
version_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersionOutputReference.property.internalValue"></a>

```python
internal_value: QuicksightThemeVersion
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTheme.QuicksightThemeVersion">QuicksightThemeVersion</a>

---



