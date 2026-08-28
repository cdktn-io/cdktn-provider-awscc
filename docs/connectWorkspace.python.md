# `connectWorkspace` Submodule <a name="`connectWorkspace` Submodule" id="@cdktn/provider-awscc.connectWorkspace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConnectWorkspace <a name="ConnectWorkspace" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_workspace awscc_connect_workspace}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.Initializer"></a>

```python
from cdktn_provider_awscc import connect_workspace

connectWorkspace.ConnectWorkspace(
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
  name: str,
  associations: typing.List[str] = None,
  description: str = None,
  media: IResolvable | typing.List[ConnectWorkspaceMedia] = None,
  pages: IResolvable | typing.List[ConnectWorkspacePages] = None,
  tags: IResolvable | typing.List[ConnectWorkspaceTags] = None,
  theme: ConnectWorkspaceTheme = None,
  title: str = None,
  visibility: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.Initializer.parameter.instanceArn">instance_arn</a></code> | <code>str</code> | The identifier of the Amazon Connect instance. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the workspace. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.Initializer.parameter.associations">associations</a></code> | <code>typing.List[str]</code> | The resource ARNs associated with the workspace. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.Initializer.parameter.description">description</a></code> | <code>str</code> | The description of the workspace. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.Initializer.parameter.media">media</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMedia">ConnectWorkspaceMedia</a>]</code> | The media items for the workspace. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.Initializer.parameter.pages">pages</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePages">ConnectWorkspacePages</a>]</code> | The pages associated with the workspace. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTags">ConnectWorkspaceTags</a>]</code> | An array of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.Initializer.parameter.theme">theme</a></code> | <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTheme">ConnectWorkspaceTheme</a></code> | The theme configuration for the workspace. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.Initializer.parameter.title">title</a></code> | <code>str</code> | The title of the workspace. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.Initializer.parameter.visibility">visibility</a></code> | <code>str</code> | The visibility of the workspace. Will always be set to ASSIGNED oninitial creation. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `instance_arn`<sup>Required</sup> <a name="instance_arn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.Initializer.parameter.instanceArn"></a>

- *Type:* str

The identifier of the Amazon Connect instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_workspace#instance_arn ConnectWorkspace#instance_arn}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.Initializer.parameter.name"></a>

- *Type:* str

The name of the workspace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_workspace#name ConnectWorkspace#name}

---

##### `associations`<sup>Optional</sup> <a name="associations" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.Initializer.parameter.associations"></a>

- *Type:* typing.List[str]

The resource ARNs associated with the workspace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_workspace#associations ConnectWorkspace#associations}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.Initializer.parameter.description"></a>

- *Type:* str

The description of the workspace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_workspace#description ConnectWorkspace#description}

---

##### `media`<sup>Optional</sup> <a name="media" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.Initializer.parameter.media"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMedia">ConnectWorkspaceMedia</a>]

The media items for the workspace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_workspace#media ConnectWorkspace#media}

---

##### `pages`<sup>Optional</sup> <a name="pages" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.Initializer.parameter.pages"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePages">ConnectWorkspacePages</a>]

The pages associated with the workspace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_workspace#pages ConnectWorkspace#pages}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTags">ConnectWorkspaceTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_workspace#tags ConnectWorkspace#tags}

---

##### `theme`<sup>Optional</sup> <a name="theme" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.Initializer.parameter.theme"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTheme">ConnectWorkspaceTheme</a>

The theme configuration for the workspace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_workspace#theme ConnectWorkspace#theme}

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.Initializer.parameter.title"></a>

- *Type:* str

The title of the workspace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_workspace#title ConnectWorkspace#title}

---

##### `visibility`<sup>Optional</sup> <a name="visibility" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.Initializer.parameter.visibility"></a>

- *Type:* str

The visibility of the workspace. Will always be set to ASSIGNED oninitial creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_workspace#visibility ConnectWorkspace#visibility}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.putMedia">put_media</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.putPages">put_pages</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.putTheme">put_theme</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.resetAssociations">reset_associations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.resetMedia">reset_media</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.resetPages">reset_pages</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.resetTheme">reset_theme</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.resetTitle">reset_title</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.resetVisibility">reset_visibility</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_media` <a name="put_media" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.putMedia"></a>

```python
def put_media(
  value: IResolvable | typing.List[ConnectWorkspaceMedia]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.putMedia.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMedia">ConnectWorkspaceMedia</a>]

---

##### `put_pages` <a name="put_pages" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.putPages"></a>

```python
def put_pages(
  value: IResolvable | typing.List[ConnectWorkspacePages]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.putPages.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePages">ConnectWorkspacePages</a>]

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[ConnectWorkspaceTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTags">ConnectWorkspaceTags</a>]

---

##### `put_theme` <a name="put_theme" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.putTheme"></a>

```python
def put_theme(
  dark: ConnectWorkspaceThemeDark = None,
  light: ConnectWorkspaceThemeLight = None
) -> None
```

###### `dark`<sup>Optional</sup> <a name="dark" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.putTheme.parameter.dark"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDark">ConnectWorkspaceThemeDark</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_workspace#dark ConnectWorkspace#dark}.

---

###### `light`<sup>Optional</sup> <a name="light" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.putTheme.parameter.light"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLight">ConnectWorkspaceThemeLight</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_workspace#light ConnectWorkspace#light}.

---

##### `reset_associations` <a name="reset_associations" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.resetAssociations"></a>

```python
def reset_associations() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_media` <a name="reset_media" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.resetMedia"></a>

```python
def reset_media() -> None
```

##### `reset_pages` <a name="reset_pages" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.resetPages"></a>

```python
def reset_pages() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_theme` <a name="reset_theme" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.resetTheme"></a>

```python
def reset_theme() -> None
```

##### `reset_title` <a name="reset_title" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.resetTitle"></a>

```python
def reset_title() -> None
```

##### `reset_visibility` <a name="reset_visibility" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.resetVisibility"></a>

```python
def reset_visibility() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a ConnectWorkspace resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.isConstruct"></a>

```python
from cdktn_provider_awscc import connect_workspace

connectWorkspace.ConnectWorkspace.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.isTerraformElement"></a>

```python
from cdktn_provider_awscc import connect_workspace

connectWorkspace.ConnectWorkspace.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.isTerraformResource"></a>

```python
from cdktn_provider_awscc import connect_workspace

connectWorkspace.ConnectWorkspace.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import connect_workspace

connectWorkspace.ConnectWorkspace.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a ConnectWorkspace resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ConnectWorkspace to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ConnectWorkspace that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_workspace#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ConnectWorkspace to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.media">media</a></code> | <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaList">ConnectWorkspaceMediaList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.pages">pages</a></code> | <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesList">ConnectWorkspacePagesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsList">ConnectWorkspaceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.theme">theme</a></code> | <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference">ConnectWorkspaceThemeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.workspaceId">workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.associationsInput">associations_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.instanceArnInput">instance_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.mediaInput">media_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMedia">ConnectWorkspaceMedia</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.pagesInput">pages_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePages">ConnectWorkspacePages</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTags">ConnectWorkspaceTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.themeInput">theme_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTheme">ConnectWorkspaceTheme</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.titleInput">title_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.visibilityInput">visibility_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.associations">associations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.instanceArn">instance_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.visibility">visibility</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `media`<sup>Required</sup> <a name="media" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.media"></a>

```python
media: ConnectWorkspaceMediaList
```

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaList">ConnectWorkspaceMediaList</a>

---

##### `pages`<sup>Required</sup> <a name="pages" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.pages"></a>

```python
pages: ConnectWorkspacePagesList
```

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesList">ConnectWorkspacePagesList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.tags"></a>

```python
tags: ConnectWorkspaceTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsList">ConnectWorkspaceTagsList</a>

---

##### `theme`<sup>Required</sup> <a name="theme" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.theme"></a>

```python
theme: ConnectWorkspaceThemeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference">ConnectWorkspaceThemeOutputReference</a>

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

---

##### `associations_input`<sup>Optional</sup> <a name="associations_input" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.associationsInput"></a>

```python
associations_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `instance_arn_input`<sup>Optional</sup> <a name="instance_arn_input" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.instanceArnInput"></a>

```python
instance_arn_input: str
```

- *Type:* str

---

##### `media_input`<sup>Optional</sup> <a name="media_input" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.mediaInput"></a>

```python
media_input: IResolvable | typing.List[ConnectWorkspaceMedia]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMedia">ConnectWorkspaceMedia</a>]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `pages_input`<sup>Optional</sup> <a name="pages_input" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.pagesInput"></a>

```python
pages_input: IResolvable | typing.List[ConnectWorkspacePages]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePages">ConnectWorkspacePages</a>]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[ConnectWorkspaceTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTags">ConnectWorkspaceTags</a>]

---

##### `theme_input`<sup>Optional</sup> <a name="theme_input" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.themeInput"></a>

```python
theme_input: IResolvable | ConnectWorkspaceTheme
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTheme">ConnectWorkspaceTheme</a>

---

##### `title_input`<sup>Optional</sup> <a name="title_input" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.titleInput"></a>

```python
title_input: str
```

- *Type:* str

---

##### `visibility_input`<sup>Optional</sup> <a name="visibility_input" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.visibilityInput"></a>

```python
visibility_input: str
```

- *Type:* str

---

##### `associations`<sup>Required</sup> <a name="associations" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.associations"></a>

```python
associations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `instance_arn`<sup>Required</sup> <a name="instance_arn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.instanceArn"></a>

```python
instance_arn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `visibility`<sup>Required</sup> <a name="visibility" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.visibility"></a>

```python
visibility: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspace.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ConnectWorkspaceConfig <a name="ConnectWorkspaceConfig" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceConfig.Initializer"></a>

```python
from cdktn_provider_awscc import connect_workspace

connectWorkspace.ConnectWorkspaceConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  instance_arn: str,
  name: str,
  associations: typing.List[str] = None,
  description: str = None,
  media: IResolvable | typing.List[ConnectWorkspaceMedia] = None,
  pages: IResolvable | typing.List[ConnectWorkspacePages] = None,
  tags: IResolvable | typing.List[ConnectWorkspaceTags] = None,
  theme: ConnectWorkspaceTheme = None,
  title: str = None,
  visibility: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceConfig.property.instanceArn">instance_arn</a></code> | <code>str</code> | The identifier of the Amazon Connect instance. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceConfig.property.name">name</a></code> | <code>str</code> | The name of the workspace. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceConfig.property.associations">associations</a></code> | <code>typing.List[str]</code> | The resource ARNs associated with the workspace. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceConfig.property.description">description</a></code> | <code>str</code> | The description of the workspace. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceConfig.property.media">media</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMedia">ConnectWorkspaceMedia</a>]</code> | The media items for the workspace. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceConfig.property.pages">pages</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePages">ConnectWorkspacePages</a>]</code> | The pages associated with the workspace. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTags">ConnectWorkspaceTags</a>]</code> | An array of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceConfig.property.theme">theme</a></code> | <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTheme">ConnectWorkspaceTheme</a></code> | The theme configuration for the workspace. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceConfig.property.title">title</a></code> | <code>str</code> | The title of the workspace. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceConfig.property.visibility">visibility</a></code> | <code>str</code> | The visibility of the workspace. Will always be set to ASSIGNED oninitial creation. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `instance_arn`<sup>Required</sup> <a name="instance_arn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceConfig.property.instanceArn"></a>

```python
instance_arn: str
```

- *Type:* str

The identifier of the Amazon Connect instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_workspace#instance_arn ConnectWorkspace#instance_arn}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the workspace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_workspace#name ConnectWorkspace#name}

---

##### `associations`<sup>Optional</sup> <a name="associations" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceConfig.property.associations"></a>

```python
associations: typing.List[str]
```

- *Type:* typing.List[str]

The resource ARNs associated with the workspace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_workspace#associations ConnectWorkspace#associations}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The description of the workspace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_workspace#description ConnectWorkspace#description}

---

##### `media`<sup>Optional</sup> <a name="media" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceConfig.property.media"></a>

```python
media: IResolvable | typing.List[ConnectWorkspaceMedia]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMedia">ConnectWorkspaceMedia</a>]

The media items for the workspace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_workspace#media ConnectWorkspace#media}

---

##### `pages`<sup>Optional</sup> <a name="pages" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceConfig.property.pages"></a>

```python
pages: IResolvable | typing.List[ConnectWorkspacePages]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePages">ConnectWorkspacePages</a>]

The pages associated with the workspace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_workspace#pages ConnectWorkspace#pages}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[ConnectWorkspaceTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTags">ConnectWorkspaceTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_workspace#tags ConnectWorkspace#tags}

---

##### `theme`<sup>Optional</sup> <a name="theme" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceConfig.property.theme"></a>

```python
theme: ConnectWorkspaceTheme
```

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTheme">ConnectWorkspaceTheme</a>

The theme configuration for the workspace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_workspace#theme ConnectWorkspace#theme}

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceConfig.property.title"></a>

```python
title: str
```

- *Type:* str

The title of the workspace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_workspace#title ConnectWorkspace#title}

---

##### `visibility`<sup>Optional</sup> <a name="visibility" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceConfig.property.visibility"></a>

```python
visibility: str
```

- *Type:* str

The visibility of the workspace. Will always be set to ASSIGNED oninitial creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_workspace#visibility ConnectWorkspace#visibility}

---

### ConnectWorkspaceMedia <a name="ConnectWorkspaceMedia" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMedia"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMedia.Initializer"></a>

```python
from cdktn_provider_awscc import connect_workspace

connectWorkspace.ConnectWorkspaceMedia(
  source: str = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMedia.property.source">source</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_workspace#source ConnectWorkspace#source}. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMedia.property.type">type</a></code> | <code>str</code> | The type of media. |

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMedia.property.source"></a>

```python
source: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_workspace#source ConnectWorkspace#source}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMedia.property.type"></a>

```python
type: str
```

- *Type:* str

The type of media.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_workspace#type ConnectWorkspace#type}

---

### ConnectWorkspacePages <a name="ConnectWorkspacePages" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePages"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePages.Initializer"></a>

```python
from cdktn_provider_awscc import connect_workspace

connectWorkspace.ConnectWorkspacePages(
  input_data: str = None,
  page: str = None,
  resource_arn: str = None,
  slug: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePages.property.inputData">input_data</a></code> | <code>str</code> | The input data for the page. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePages.property.page">page</a></code> | <code>str</code> | The page identifier. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePages.property.resourceArn">resource_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the resource associated with the page. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePages.property.slug">slug</a></code> | <code>str</code> | The slug for the page. |

---

##### `input_data`<sup>Optional</sup> <a name="input_data" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePages.property.inputData"></a>

```python
input_data: str
```

- *Type:* str

The input data for the page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_workspace#input_data ConnectWorkspace#input_data}

---

##### `page`<sup>Optional</sup> <a name="page" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePages.property.page"></a>

```python
page: str
```

- *Type:* str

The page identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_workspace#page ConnectWorkspace#page}

---

##### `resource_arn`<sup>Optional</sup> <a name="resource_arn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePages.property.resourceArn"></a>

```python
resource_arn: str
```

- *Type:* str

The Amazon Resource Name (ARN) of the resource associated with the page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_workspace#resource_arn ConnectWorkspace#resource_arn}

---

##### `slug`<sup>Optional</sup> <a name="slug" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePages.property.slug"></a>

```python
slug: str
```

- *Type:* str

The slug for the page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_workspace#slug ConnectWorkspace#slug}

---

### ConnectWorkspaceTags <a name="ConnectWorkspaceTags" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTags.Initializer"></a>

```python
from cdktn_provider_awscc import connect_workspace

connectWorkspace.ConnectWorkspaceTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_workspace#key ConnectWorkspace#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_workspace#value ConnectWorkspace#value}

---

### ConnectWorkspaceTheme <a name="ConnectWorkspaceTheme" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTheme"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTheme.Initializer"></a>

```python
from cdktn_provider_awscc import connect_workspace

connectWorkspace.ConnectWorkspaceTheme(
  dark: ConnectWorkspaceThemeDark = None,
  light: ConnectWorkspaceThemeLight = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTheme.property.dark">dark</a></code> | <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDark">ConnectWorkspaceThemeDark</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_workspace#dark ConnectWorkspace#dark}. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTheme.property.light">light</a></code> | <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLight">ConnectWorkspaceThemeLight</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_workspace#light ConnectWorkspace#light}. |

---

##### `dark`<sup>Optional</sup> <a name="dark" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTheme.property.dark"></a>

```python
dark: ConnectWorkspaceThemeDark
```

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDark">ConnectWorkspaceThemeDark</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_workspace#dark ConnectWorkspace#dark}.

---

##### `light`<sup>Optional</sup> <a name="light" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTheme.property.light"></a>

```python
light: ConnectWorkspaceThemeLight
```

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLight">ConnectWorkspaceThemeLight</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_workspace#light ConnectWorkspace#light}.

---

### ConnectWorkspaceThemeDark <a name="ConnectWorkspaceThemeDark" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDark"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDark.Initializer"></a>

```python
from cdktn_provider_awscc import connect_workspace

connectWorkspace.ConnectWorkspaceThemeDark(
  palette: ConnectWorkspaceThemeDarkPalette = None,
  typography: ConnectWorkspaceThemeDarkTypography = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDark.property.palette">palette</a></code> | <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalette">ConnectWorkspaceThemeDarkPalette</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_workspace#palette ConnectWorkspace#palette}. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDark.property.typography">typography</a></code> | <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypography">ConnectWorkspaceThemeDarkTypography</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_workspace#typography ConnectWorkspace#typography}. |

---

##### `palette`<sup>Optional</sup> <a name="palette" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDark.property.palette"></a>

```python
palette: ConnectWorkspaceThemeDarkPalette
```

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalette">ConnectWorkspaceThemeDarkPalette</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_workspace#palette ConnectWorkspace#palette}.

---

##### `typography`<sup>Optional</sup> <a name="typography" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDark.property.typography"></a>

```python
typography: ConnectWorkspaceThemeDarkTypography
```

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypography">ConnectWorkspaceThemeDarkTypography</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_workspace#typography ConnectWorkspace#typography}.

---

### ConnectWorkspaceThemeDarkPalette <a name="ConnectWorkspaceThemeDarkPalette" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalette"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalette.Initializer"></a>

```python
from cdktn_provider_awscc import connect_workspace

connectWorkspace.ConnectWorkspaceThemeDarkPalette(
  canvas: ConnectWorkspaceThemeDarkPaletteCanvas = None,
  header: ConnectWorkspaceThemeDarkPaletteHeader = None,
  navigation: ConnectWorkspaceThemeDarkPaletteNavigation = None,
  primary: ConnectWorkspaceThemeDarkPalettePrimary = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalette.property.canvas">canvas</a></code> | <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvas">ConnectWorkspaceThemeDarkPaletteCanvas</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_workspace#canvas ConnectWorkspace#canvas}. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalette.property.header">header</a></code> | <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeader">ConnectWorkspaceThemeDarkPaletteHeader</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_workspace#header ConnectWorkspace#header}. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalette.property.navigation">navigation</a></code> | <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigation">ConnectWorkspaceThemeDarkPaletteNavigation</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_workspace#navigation ConnectWorkspace#navigation}. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalette.property.primary">primary</a></code> | <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimary">ConnectWorkspaceThemeDarkPalettePrimary</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_workspace#primary ConnectWorkspace#primary}. |

---

##### `canvas`<sup>Optional</sup> <a name="canvas" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalette.property.canvas"></a>

```python
canvas: ConnectWorkspaceThemeDarkPaletteCanvas
```

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvas">ConnectWorkspaceThemeDarkPaletteCanvas</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_workspace#canvas ConnectWorkspace#canvas}.

---

##### `header`<sup>Optional</sup> <a name="header" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalette.property.header"></a>

```python
header: ConnectWorkspaceThemeDarkPaletteHeader
```

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeader">ConnectWorkspaceThemeDarkPaletteHeader</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_workspace#header ConnectWorkspace#header}.

---

##### `navigation`<sup>Optional</sup> <a name="navigation" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalette.property.navigation"></a>

```python
navigation: ConnectWorkspaceThemeDarkPaletteNavigation
```

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigation">ConnectWorkspaceThemeDarkPaletteNavigation</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_workspace#navigation ConnectWorkspace#navigation}.

---

##### `primary`<sup>Optional</sup> <a name="primary" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalette.property.primary"></a>

```python
primary: ConnectWorkspaceThemeDarkPalettePrimary
```

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimary">ConnectWorkspaceThemeDarkPalettePrimary</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_workspace#primary ConnectWorkspace#primary}.

---

### ConnectWorkspaceThemeDarkPaletteCanvas <a name="ConnectWorkspaceThemeDarkPaletteCanvas" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvas"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvas.Initializer"></a>

```python
from cdktn_provider_awscc import connect_workspace

connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvas(
  active_background: str = None,
  container_background: str = None,
  page_background: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvas.property.activeBackground">active_background</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_workspace#active_background ConnectWorkspace#active_background}. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvas.property.containerBackground">container_background</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_workspace#container_background ConnectWorkspace#container_background}. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvas.property.pageBackground">page_background</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_workspace#page_background ConnectWorkspace#page_background}. |

---

##### `active_background`<sup>Optional</sup> <a name="active_background" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvas.property.activeBackground"></a>

```python
active_background: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_workspace#active_background ConnectWorkspace#active_background}.

---

##### `container_background`<sup>Optional</sup> <a name="container_background" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvas.property.containerBackground"></a>

```python
container_background: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_workspace#container_background ConnectWorkspace#container_background}.

---

##### `page_background`<sup>Optional</sup> <a name="page_background" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvas.property.pageBackground"></a>

```python
page_background: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_workspace#page_background ConnectWorkspace#page_background}.

---

### ConnectWorkspaceThemeDarkPaletteHeader <a name="ConnectWorkspaceThemeDarkPaletteHeader" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeader"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeader.Initializer"></a>

```python
from cdktn_provider_awscc import connect_workspace

connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeader(
  background: str = None,
  invert_actions_colors: bool | IResolvable = None,
  text: str = None,
  text_hover: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeader.property.background">background</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_workspace#background ConnectWorkspace#background}. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeader.property.invertActionsColors">invert_actions_colors</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_workspace#invert_actions_colors ConnectWorkspace#invert_actions_colors}. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeader.property.text">text</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_workspace#text ConnectWorkspace#text}. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeader.property.textHover">text_hover</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_workspace#text_hover ConnectWorkspace#text_hover}. |

---

##### `background`<sup>Optional</sup> <a name="background" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeader.property.background"></a>

```python
background: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_workspace#background ConnectWorkspace#background}.

---

##### `invert_actions_colors`<sup>Optional</sup> <a name="invert_actions_colors" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeader.property.invertActionsColors"></a>

```python
invert_actions_colors: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_workspace#invert_actions_colors ConnectWorkspace#invert_actions_colors}.

---

##### `text`<sup>Optional</sup> <a name="text" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeader.property.text"></a>

```python
text: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_workspace#text ConnectWorkspace#text}.

---

##### `text_hover`<sup>Optional</sup> <a name="text_hover" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeader.property.textHover"></a>

```python
text_hover: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_workspace#text_hover ConnectWorkspace#text_hover}.

---

### ConnectWorkspaceThemeDarkPaletteNavigation <a name="ConnectWorkspaceThemeDarkPaletteNavigation" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigation.Initializer"></a>

```python
from cdktn_provider_awscc import connect_workspace

connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigation(
  background: str = None,
  invert_actions_colors: bool | IResolvable = None,
  text: str = None,
  text_active: str = None,
  text_background_active: str = None,
  text_background_hover: str = None,
  text_hover: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigation.property.background">background</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_workspace#background ConnectWorkspace#background}. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigation.property.invertActionsColors">invert_actions_colors</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_workspace#invert_actions_colors ConnectWorkspace#invert_actions_colors}. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigation.property.text">text</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_workspace#text ConnectWorkspace#text}. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigation.property.textActive">text_active</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_workspace#text_active ConnectWorkspace#text_active}. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigation.property.textBackgroundActive">text_background_active</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_workspace#text_background_active ConnectWorkspace#text_background_active}. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigation.property.textBackgroundHover">text_background_hover</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_workspace#text_background_hover ConnectWorkspace#text_background_hover}. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigation.property.textHover">text_hover</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_workspace#text_hover ConnectWorkspace#text_hover}. |

---

##### `background`<sup>Optional</sup> <a name="background" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigation.property.background"></a>

```python
background: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_workspace#background ConnectWorkspace#background}.

---

##### `invert_actions_colors`<sup>Optional</sup> <a name="invert_actions_colors" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigation.property.invertActionsColors"></a>

```python
invert_actions_colors: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_workspace#invert_actions_colors ConnectWorkspace#invert_actions_colors}.

---

##### `text`<sup>Optional</sup> <a name="text" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigation.property.text"></a>

```python
text: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_workspace#text ConnectWorkspace#text}.

---

##### `text_active`<sup>Optional</sup> <a name="text_active" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigation.property.textActive"></a>

```python
text_active: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_workspace#text_active ConnectWorkspace#text_active}.

---

##### `text_background_active`<sup>Optional</sup> <a name="text_background_active" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigation.property.textBackgroundActive"></a>

```python
text_background_active: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_workspace#text_background_active ConnectWorkspace#text_background_active}.

---

##### `text_background_hover`<sup>Optional</sup> <a name="text_background_hover" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigation.property.textBackgroundHover"></a>

```python
text_background_hover: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_workspace#text_background_hover ConnectWorkspace#text_background_hover}.

---

##### `text_hover`<sup>Optional</sup> <a name="text_hover" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigation.property.textHover"></a>

```python
text_hover: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_workspace#text_hover ConnectWorkspace#text_hover}.

---

### ConnectWorkspaceThemeDarkPalettePrimary <a name="ConnectWorkspaceThemeDarkPalettePrimary" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimary"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimary.Initializer"></a>

```python
from cdktn_provider_awscc import connect_workspace

connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimary(
  active: str = None,
  contrast_text: str = None,
  default: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimary.property.active">active</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_workspace#active ConnectWorkspace#active}. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimary.property.contrastText">contrast_text</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_workspace#contrast_text ConnectWorkspace#contrast_text}. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimary.property.default">default</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_workspace#default ConnectWorkspace#default}. |

---

##### `active`<sup>Optional</sup> <a name="active" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimary.property.active"></a>

```python
active: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_workspace#active ConnectWorkspace#active}.

---

##### `contrast_text`<sup>Optional</sup> <a name="contrast_text" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimary.property.contrastText"></a>

```python
contrast_text: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_workspace#contrast_text ConnectWorkspace#contrast_text}.

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimary.property.default"></a>

```python
default: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_workspace#default ConnectWorkspace#default}.

---

### ConnectWorkspaceThemeDarkTypography <a name="ConnectWorkspaceThemeDarkTypography" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypography"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypography.Initializer"></a>

```python
from cdktn_provider_awscc import connect_workspace

connectWorkspace.ConnectWorkspaceThemeDarkTypography(
  font_family: ConnectWorkspaceThemeDarkTypographyFontFamily = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypography.property.fontFamily">font_family</a></code> | <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamily">ConnectWorkspaceThemeDarkTypographyFontFamily</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_workspace#font_family ConnectWorkspace#font_family}. |

---

##### `font_family`<sup>Optional</sup> <a name="font_family" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypography.property.fontFamily"></a>

```python
font_family: ConnectWorkspaceThemeDarkTypographyFontFamily
```

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamily">ConnectWorkspaceThemeDarkTypographyFontFamily</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_workspace#font_family ConnectWorkspace#font_family}.

---

### ConnectWorkspaceThemeDarkTypographyFontFamily <a name="ConnectWorkspaceThemeDarkTypographyFontFamily" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamily"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamily.Initializer"></a>

```python
from cdktn_provider_awscc import connect_workspace

connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamily(
  default: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamily.property.default">default</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_workspace#default ConnectWorkspace#default}. |

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamily.property.default"></a>

```python
default: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_workspace#default ConnectWorkspace#default}.

---

### ConnectWorkspaceThemeLight <a name="ConnectWorkspaceThemeLight" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLight"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLight.Initializer"></a>

```python
from cdktn_provider_awscc import connect_workspace

connectWorkspace.ConnectWorkspaceThemeLight(
  palette: ConnectWorkspaceThemeLightPalette = None,
  typography: ConnectWorkspaceThemeLightTypography = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLight.property.palette">palette</a></code> | <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalette">ConnectWorkspaceThemeLightPalette</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_workspace#palette ConnectWorkspace#palette}. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLight.property.typography">typography</a></code> | <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypography">ConnectWorkspaceThemeLightTypography</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_workspace#typography ConnectWorkspace#typography}. |

---

##### `palette`<sup>Optional</sup> <a name="palette" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLight.property.palette"></a>

```python
palette: ConnectWorkspaceThemeLightPalette
```

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalette">ConnectWorkspaceThemeLightPalette</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_workspace#palette ConnectWorkspace#palette}.

---

##### `typography`<sup>Optional</sup> <a name="typography" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLight.property.typography"></a>

```python
typography: ConnectWorkspaceThemeLightTypography
```

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypography">ConnectWorkspaceThemeLightTypography</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_workspace#typography ConnectWorkspace#typography}.

---

### ConnectWorkspaceThemeLightPalette <a name="ConnectWorkspaceThemeLightPalette" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalette"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalette.Initializer"></a>

```python
from cdktn_provider_awscc import connect_workspace

connectWorkspace.ConnectWorkspaceThemeLightPalette(
  canvas: ConnectWorkspaceThemeLightPaletteCanvas = None,
  header: ConnectWorkspaceThemeLightPaletteHeader = None,
  navigation: ConnectWorkspaceThemeLightPaletteNavigation = None,
  primary: ConnectWorkspaceThemeLightPalettePrimary = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalette.property.canvas">canvas</a></code> | <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvas">ConnectWorkspaceThemeLightPaletteCanvas</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_workspace#canvas ConnectWorkspace#canvas}. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalette.property.header">header</a></code> | <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeader">ConnectWorkspaceThemeLightPaletteHeader</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_workspace#header ConnectWorkspace#header}. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalette.property.navigation">navigation</a></code> | <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigation">ConnectWorkspaceThemeLightPaletteNavigation</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_workspace#navigation ConnectWorkspace#navigation}. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalette.property.primary">primary</a></code> | <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimary">ConnectWorkspaceThemeLightPalettePrimary</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_workspace#primary ConnectWorkspace#primary}. |

---

##### `canvas`<sup>Optional</sup> <a name="canvas" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalette.property.canvas"></a>

```python
canvas: ConnectWorkspaceThemeLightPaletteCanvas
```

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvas">ConnectWorkspaceThemeLightPaletteCanvas</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_workspace#canvas ConnectWorkspace#canvas}.

---

##### `header`<sup>Optional</sup> <a name="header" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalette.property.header"></a>

```python
header: ConnectWorkspaceThemeLightPaletteHeader
```

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeader">ConnectWorkspaceThemeLightPaletteHeader</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_workspace#header ConnectWorkspace#header}.

---

##### `navigation`<sup>Optional</sup> <a name="navigation" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalette.property.navigation"></a>

```python
navigation: ConnectWorkspaceThemeLightPaletteNavigation
```

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigation">ConnectWorkspaceThemeLightPaletteNavigation</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_workspace#navigation ConnectWorkspace#navigation}.

---

##### `primary`<sup>Optional</sup> <a name="primary" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalette.property.primary"></a>

```python
primary: ConnectWorkspaceThemeLightPalettePrimary
```

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimary">ConnectWorkspaceThemeLightPalettePrimary</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_workspace#primary ConnectWorkspace#primary}.

---

### ConnectWorkspaceThemeLightPaletteCanvas <a name="ConnectWorkspaceThemeLightPaletteCanvas" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvas"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvas.Initializer"></a>

```python
from cdktn_provider_awscc import connect_workspace

connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvas(
  active_background: str = None,
  container_background: str = None,
  page_background: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvas.property.activeBackground">active_background</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_workspace#active_background ConnectWorkspace#active_background}. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvas.property.containerBackground">container_background</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_workspace#container_background ConnectWorkspace#container_background}. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvas.property.pageBackground">page_background</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_workspace#page_background ConnectWorkspace#page_background}. |

---

##### `active_background`<sup>Optional</sup> <a name="active_background" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvas.property.activeBackground"></a>

```python
active_background: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_workspace#active_background ConnectWorkspace#active_background}.

---

##### `container_background`<sup>Optional</sup> <a name="container_background" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvas.property.containerBackground"></a>

```python
container_background: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_workspace#container_background ConnectWorkspace#container_background}.

---

##### `page_background`<sup>Optional</sup> <a name="page_background" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvas.property.pageBackground"></a>

```python
page_background: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_workspace#page_background ConnectWorkspace#page_background}.

---

### ConnectWorkspaceThemeLightPaletteHeader <a name="ConnectWorkspaceThemeLightPaletteHeader" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeader"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeader.Initializer"></a>

```python
from cdktn_provider_awscc import connect_workspace

connectWorkspace.ConnectWorkspaceThemeLightPaletteHeader(
  background: str = None,
  invert_actions_colors: bool | IResolvable = None,
  text: str = None,
  text_hover: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeader.property.background">background</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_workspace#background ConnectWorkspace#background}. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeader.property.invertActionsColors">invert_actions_colors</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_workspace#invert_actions_colors ConnectWorkspace#invert_actions_colors}. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeader.property.text">text</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_workspace#text ConnectWorkspace#text}. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeader.property.textHover">text_hover</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_workspace#text_hover ConnectWorkspace#text_hover}. |

---

##### `background`<sup>Optional</sup> <a name="background" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeader.property.background"></a>

```python
background: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_workspace#background ConnectWorkspace#background}.

---

##### `invert_actions_colors`<sup>Optional</sup> <a name="invert_actions_colors" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeader.property.invertActionsColors"></a>

```python
invert_actions_colors: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_workspace#invert_actions_colors ConnectWorkspace#invert_actions_colors}.

---

##### `text`<sup>Optional</sup> <a name="text" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeader.property.text"></a>

```python
text: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_workspace#text ConnectWorkspace#text}.

---

##### `text_hover`<sup>Optional</sup> <a name="text_hover" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeader.property.textHover"></a>

```python
text_hover: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_workspace#text_hover ConnectWorkspace#text_hover}.

---

### ConnectWorkspaceThemeLightPaletteNavigation <a name="ConnectWorkspaceThemeLightPaletteNavigation" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigation.Initializer"></a>

```python
from cdktn_provider_awscc import connect_workspace

connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigation(
  background: str = None,
  invert_actions_colors: bool | IResolvable = None,
  text: str = None,
  text_active: str = None,
  text_background_active: str = None,
  text_background_hover: str = None,
  text_hover: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigation.property.background">background</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_workspace#background ConnectWorkspace#background}. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigation.property.invertActionsColors">invert_actions_colors</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_workspace#invert_actions_colors ConnectWorkspace#invert_actions_colors}. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigation.property.text">text</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_workspace#text ConnectWorkspace#text}. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigation.property.textActive">text_active</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_workspace#text_active ConnectWorkspace#text_active}. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigation.property.textBackgroundActive">text_background_active</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_workspace#text_background_active ConnectWorkspace#text_background_active}. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigation.property.textBackgroundHover">text_background_hover</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_workspace#text_background_hover ConnectWorkspace#text_background_hover}. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigation.property.textHover">text_hover</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_workspace#text_hover ConnectWorkspace#text_hover}. |

---

##### `background`<sup>Optional</sup> <a name="background" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigation.property.background"></a>

```python
background: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_workspace#background ConnectWorkspace#background}.

---

##### `invert_actions_colors`<sup>Optional</sup> <a name="invert_actions_colors" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigation.property.invertActionsColors"></a>

```python
invert_actions_colors: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_workspace#invert_actions_colors ConnectWorkspace#invert_actions_colors}.

---

##### `text`<sup>Optional</sup> <a name="text" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigation.property.text"></a>

```python
text: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_workspace#text ConnectWorkspace#text}.

---

##### `text_active`<sup>Optional</sup> <a name="text_active" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigation.property.textActive"></a>

```python
text_active: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_workspace#text_active ConnectWorkspace#text_active}.

---

##### `text_background_active`<sup>Optional</sup> <a name="text_background_active" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigation.property.textBackgroundActive"></a>

```python
text_background_active: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_workspace#text_background_active ConnectWorkspace#text_background_active}.

---

##### `text_background_hover`<sup>Optional</sup> <a name="text_background_hover" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigation.property.textBackgroundHover"></a>

```python
text_background_hover: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_workspace#text_background_hover ConnectWorkspace#text_background_hover}.

---

##### `text_hover`<sup>Optional</sup> <a name="text_hover" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigation.property.textHover"></a>

```python
text_hover: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_workspace#text_hover ConnectWorkspace#text_hover}.

---

### ConnectWorkspaceThemeLightPalettePrimary <a name="ConnectWorkspaceThemeLightPalettePrimary" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimary"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimary.Initializer"></a>

```python
from cdktn_provider_awscc import connect_workspace

connectWorkspace.ConnectWorkspaceThemeLightPalettePrimary(
  active: str = None,
  contrast_text: str = None,
  default: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimary.property.active">active</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_workspace#active ConnectWorkspace#active}. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimary.property.contrastText">contrast_text</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_workspace#contrast_text ConnectWorkspace#contrast_text}. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimary.property.default">default</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_workspace#default ConnectWorkspace#default}. |

---

##### `active`<sup>Optional</sup> <a name="active" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimary.property.active"></a>

```python
active: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_workspace#active ConnectWorkspace#active}.

---

##### `contrast_text`<sup>Optional</sup> <a name="contrast_text" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimary.property.contrastText"></a>

```python
contrast_text: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_workspace#contrast_text ConnectWorkspace#contrast_text}.

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimary.property.default"></a>

```python
default: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_workspace#default ConnectWorkspace#default}.

---

### ConnectWorkspaceThemeLightTypography <a name="ConnectWorkspaceThemeLightTypography" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypography"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypography.Initializer"></a>

```python
from cdktn_provider_awscc import connect_workspace

connectWorkspace.ConnectWorkspaceThemeLightTypography(
  font_family: ConnectWorkspaceThemeLightTypographyFontFamily = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypography.property.fontFamily">font_family</a></code> | <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamily">ConnectWorkspaceThemeLightTypographyFontFamily</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_workspace#font_family ConnectWorkspace#font_family}. |

---

##### `font_family`<sup>Optional</sup> <a name="font_family" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypography.property.fontFamily"></a>

```python
font_family: ConnectWorkspaceThemeLightTypographyFontFamily
```

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamily">ConnectWorkspaceThemeLightTypographyFontFamily</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_workspace#font_family ConnectWorkspace#font_family}.

---

### ConnectWorkspaceThemeLightTypographyFontFamily <a name="ConnectWorkspaceThemeLightTypographyFontFamily" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamily"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamily.Initializer"></a>

```python
from cdktn_provider_awscc import connect_workspace

connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamily(
  default: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamily.property.default">default</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_workspace#default ConnectWorkspace#default}. |

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamily.property.default"></a>

```python
default: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_workspace#default ConnectWorkspace#default}.

---

## Classes <a name="Classes" id="Classes"></a>

### ConnectWorkspaceMediaList <a name="ConnectWorkspaceMediaList" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaList.Initializer"></a>

```python
from cdktn_provider_awscc import connect_workspace

connectWorkspace.ConnectWorkspaceMediaList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ConnectWorkspaceMediaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMedia">ConnectWorkspaceMedia</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ConnectWorkspaceMedia]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMedia">ConnectWorkspaceMedia</a>]

---


### ConnectWorkspaceMediaOutputReference <a name="ConnectWorkspaceMediaOutputReference" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import connect_workspace

connectWorkspace.ConnectWorkspaceMediaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.resetSource">reset_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_source` <a name="reset_source" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.resetSource"></a>

```python
def reset_source() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.property.sourceInput">source_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.property.source">source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMedia">ConnectWorkspaceMedia</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `source_input`<sup>Optional</sup> <a name="source_input" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.property.sourceInput"></a>

```python
source_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.property.source"></a>

```python
source: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMediaOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ConnectWorkspaceMedia
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceMedia">ConnectWorkspaceMedia</a>

---


### ConnectWorkspacePagesList <a name="ConnectWorkspacePagesList" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesList.Initializer"></a>

```python
from cdktn_provider_awscc import connect_workspace

connectWorkspace.ConnectWorkspacePagesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ConnectWorkspacePagesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePages">ConnectWorkspacePages</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ConnectWorkspacePages]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePages">ConnectWorkspacePages</a>]

---


### ConnectWorkspacePagesOutputReference <a name="ConnectWorkspacePagesOutputReference" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import connect_workspace

connectWorkspace.ConnectWorkspacePagesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.resetInputData">reset_input_data</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.resetPage">reset_page</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.resetResourceArn">reset_resource_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.resetSlug">reset_slug</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_input_data` <a name="reset_input_data" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.resetInputData"></a>

```python
def reset_input_data() -> None
```

##### `reset_page` <a name="reset_page" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.resetPage"></a>

```python
def reset_page() -> None
```

##### `reset_resource_arn` <a name="reset_resource_arn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.resetResourceArn"></a>

```python
def reset_resource_arn() -> None
```

##### `reset_slug` <a name="reset_slug" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.resetSlug"></a>

```python
def reset_slug() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.property.inputDataInput">input_data_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.property.pageInput">page_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.property.resourceArnInput">resource_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.property.slugInput">slug_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.property.inputData">input_data</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.property.page">page</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.property.resourceArn">resource_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.property.slug">slug</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePages">ConnectWorkspacePages</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `input_data_input`<sup>Optional</sup> <a name="input_data_input" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.property.inputDataInput"></a>

```python
input_data_input: str
```

- *Type:* str

---

##### `page_input`<sup>Optional</sup> <a name="page_input" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.property.pageInput"></a>

```python
page_input: str
```

- *Type:* str

---

##### `resource_arn_input`<sup>Optional</sup> <a name="resource_arn_input" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.property.resourceArnInput"></a>

```python
resource_arn_input: str
```

- *Type:* str

---

##### `slug_input`<sup>Optional</sup> <a name="slug_input" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.property.slugInput"></a>

```python
slug_input: str
```

- *Type:* str

---

##### `input_data`<sup>Required</sup> <a name="input_data" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.property.inputData"></a>

```python
input_data: str
```

- *Type:* str

---

##### `page`<sup>Required</sup> <a name="page" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.property.page"></a>

```python
page: str
```

- *Type:* str

---

##### `resource_arn`<sup>Required</sup> <a name="resource_arn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.property.resourceArn"></a>

```python
resource_arn: str
```

- *Type:* str

---

##### `slug`<sup>Required</sup> <a name="slug" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.property.slug"></a>

```python
slug: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePagesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ConnectWorkspacePages
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspacePages">ConnectWorkspacePages</a>

---


### ConnectWorkspaceTagsList <a name="ConnectWorkspaceTagsList" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import connect_workspace

connectWorkspace.ConnectWorkspaceTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ConnectWorkspaceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTags">ConnectWorkspaceTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ConnectWorkspaceTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTags">ConnectWorkspaceTags</a>]

---


### ConnectWorkspaceTagsOutputReference <a name="ConnectWorkspaceTagsOutputReference" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import connect_workspace

connectWorkspace.ConnectWorkspaceTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTags">ConnectWorkspaceTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ConnectWorkspaceTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTags">ConnectWorkspaceTags</a>

---


### ConnectWorkspaceThemeDarkOutputReference <a name="ConnectWorkspaceThemeDarkOutputReference" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import connect_workspace

connectWorkspace.ConnectWorkspaceThemeDarkOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.putPalette">put_palette</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.putTypography">put_typography</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.resetPalette">reset_palette</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.resetTypography">reset_typography</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_palette` <a name="put_palette" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.putPalette"></a>

```python
def put_palette(
  canvas: ConnectWorkspaceThemeDarkPaletteCanvas = None,
  header: ConnectWorkspaceThemeDarkPaletteHeader = None,
  navigation: ConnectWorkspaceThemeDarkPaletteNavigation = None,
  primary: ConnectWorkspaceThemeDarkPalettePrimary = None
) -> None
```

###### `canvas`<sup>Optional</sup> <a name="canvas" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.putPalette.parameter.canvas"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvas">ConnectWorkspaceThemeDarkPaletteCanvas</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_workspace#canvas ConnectWorkspace#canvas}.

---

###### `header`<sup>Optional</sup> <a name="header" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.putPalette.parameter.header"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeader">ConnectWorkspaceThemeDarkPaletteHeader</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_workspace#header ConnectWorkspace#header}.

---

###### `navigation`<sup>Optional</sup> <a name="navigation" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.putPalette.parameter.navigation"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigation">ConnectWorkspaceThemeDarkPaletteNavigation</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_workspace#navigation ConnectWorkspace#navigation}.

---

###### `primary`<sup>Optional</sup> <a name="primary" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.putPalette.parameter.primary"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimary">ConnectWorkspaceThemeDarkPalettePrimary</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_workspace#primary ConnectWorkspace#primary}.

---

##### `put_typography` <a name="put_typography" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.putTypography"></a>

```python
def put_typography(
  font_family: ConnectWorkspaceThemeDarkTypographyFontFamily = None
) -> None
```

###### `font_family`<sup>Optional</sup> <a name="font_family" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.putTypography.parameter.fontFamily"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamily">ConnectWorkspaceThemeDarkTypographyFontFamily</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_workspace#font_family ConnectWorkspace#font_family}.

---

##### `reset_palette` <a name="reset_palette" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.resetPalette"></a>

```python
def reset_palette() -> None
```

##### `reset_typography` <a name="reset_typography" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.resetTypography"></a>

```python
def reset_typography() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.property.palette">palette</a></code> | <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference">ConnectWorkspaceThemeDarkPaletteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.property.typography">typography</a></code> | <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference">ConnectWorkspaceThemeDarkTypographyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.property.paletteInput">palette_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalette">ConnectWorkspaceThemeDarkPalette</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.property.typographyInput">typography_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypography">ConnectWorkspaceThemeDarkTypography</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDark">ConnectWorkspaceThemeDark</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `palette`<sup>Required</sup> <a name="palette" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.property.palette"></a>

```python
palette: ConnectWorkspaceThemeDarkPaletteOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference">ConnectWorkspaceThemeDarkPaletteOutputReference</a>

---

##### `typography`<sup>Required</sup> <a name="typography" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.property.typography"></a>

```python
typography: ConnectWorkspaceThemeDarkTypographyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference">ConnectWorkspaceThemeDarkTypographyOutputReference</a>

---

##### `palette_input`<sup>Optional</sup> <a name="palette_input" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.property.paletteInput"></a>

```python
palette_input: IResolvable | ConnectWorkspaceThemeDarkPalette
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalette">ConnectWorkspaceThemeDarkPalette</a>

---

##### `typography_input`<sup>Optional</sup> <a name="typography_input" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.property.typographyInput"></a>

```python
typography_input: IResolvable | ConnectWorkspaceThemeDarkTypography
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypography">ConnectWorkspaceThemeDarkTypography</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ConnectWorkspaceThemeDark
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDark">ConnectWorkspaceThemeDark</a>

---


### ConnectWorkspaceThemeDarkPaletteCanvasOutputReference <a name="ConnectWorkspaceThemeDarkPaletteCanvasOutputReference" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import connect_workspace

connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.resetActiveBackground">reset_active_background</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.resetContainerBackground">reset_container_background</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.resetPageBackground">reset_page_background</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_active_background` <a name="reset_active_background" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.resetActiveBackground"></a>

```python
def reset_active_background() -> None
```

##### `reset_container_background` <a name="reset_container_background" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.resetContainerBackground"></a>

```python
def reset_container_background() -> None
```

##### `reset_page_background` <a name="reset_page_background" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.resetPageBackground"></a>

```python
def reset_page_background() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.property.activeBackgroundInput">active_background_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.property.containerBackgroundInput">container_background_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.property.pageBackgroundInput">page_background_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.property.activeBackground">active_background</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.property.containerBackground">container_background</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.property.pageBackground">page_background</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvas">ConnectWorkspaceThemeDarkPaletteCanvas</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `active_background_input`<sup>Optional</sup> <a name="active_background_input" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.property.activeBackgroundInput"></a>

```python
active_background_input: str
```

- *Type:* str

---

##### `container_background_input`<sup>Optional</sup> <a name="container_background_input" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.property.containerBackgroundInput"></a>

```python
container_background_input: str
```

- *Type:* str

---

##### `page_background_input`<sup>Optional</sup> <a name="page_background_input" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.property.pageBackgroundInput"></a>

```python
page_background_input: str
```

- *Type:* str

---

##### `active_background`<sup>Required</sup> <a name="active_background" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.property.activeBackground"></a>

```python
active_background: str
```

- *Type:* str

---

##### `container_background`<sup>Required</sup> <a name="container_background" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.property.containerBackground"></a>

```python
container_background: str
```

- *Type:* str

---

##### `page_background`<sup>Required</sup> <a name="page_background" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.property.pageBackground"></a>

```python
page_background: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ConnectWorkspaceThemeDarkPaletteCanvas
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvas">ConnectWorkspaceThemeDarkPaletteCanvas</a>

---


### ConnectWorkspaceThemeDarkPaletteHeaderOutputReference <a name="ConnectWorkspaceThemeDarkPaletteHeaderOutputReference" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import connect_workspace

connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.resetBackground">reset_background</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.resetInvertActionsColors">reset_invert_actions_colors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.resetText">reset_text</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.resetTextHover">reset_text_hover</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_background` <a name="reset_background" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.resetBackground"></a>

```python
def reset_background() -> None
```

##### `reset_invert_actions_colors` <a name="reset_invert_actions_colors" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.resetInvertActionsColors"></a>

```python
def reset_invert_actions_colors() -> None
```

##### `reset_text` <a name="reset_text" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.resetText"></a>

```python
def reset_text() -> None
```

##### `reset_text_hover` <a name="reset_text_hover" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.resetTextHover"></a>

```python
def reset_text_hover() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.property.backgroundInput">background_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.property.invertActionsColorsInput">invert_actions_colors_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.property.textHoverInput">text_hover_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.property.textInput">text_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.property.background">background</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.property.invertActionsColors">invert_actions_colors</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.property.text">text</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.property.textHover">text_hover</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeader">ConnectWorkspaceThemeDarkPaletteHeader</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `background_input`<sup>Optional</sup> <a name="background_input" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.property.backgroundInput"></a>

```python
background_input: str
```

- *Type:* str

---

##### `invert_actions_colors_input`<sup>Optional</sup> <a name="invert_actions_colors_input" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.property.invertActionsColorsInput"></a>

```python
invert_actions_colors_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `text_hover_input`<sup>Optional</sup> <a name="text_hover_input" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.property.textHoverInput"></a>

```python
text_hover_input: str
```

- *Type:* str

---

##### `text_input`<sup>Optional</sup> <a name="text_input" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.property.textInput"></a>

```python
text_input: str
```

- *Type:* str

---

##### `background`<sup>Required</sup> <a name="background" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.property.background"></a>

```python
background: str
```

- *Type:* str

---

##### `invert_actions_colors`<sup>Required</sup> <a name="invert_actions_colors" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.property.invertActionsColors"></a>

```python
invert_actions_colors: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.property.text"></a>

```python
text: str
```

- *Type:* str

---

##### `text_hover`<sup>Required</sup> <a name="text_hover" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.property.textHover"></a>

```python
text_hover: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ConnectWorkspaceThemeDarkPaletteHeader
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeader">ConnectWorkspaceThemeDarkPaletteHeader</a>

---


### ConnectWorkspaceThemeDarkPaletteNavigationOutputReference <a name="ConnectWorkspaceThemeDarkPaletteNavigationOutputReference" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import connect_workspace

connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.resetBackground">reset_background</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.resetInvertActionsColors">reset_invert_actions_colors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.resetText">reset_text</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.resetTextActive">reset_text_active</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.resetTextBackgroundActive">reset_text_background_active</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.resetTextBackgroundHover">reset_text_background_hover</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.resetTextHover">reset_text_hover</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_background` <a name="reset_background" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.resetBackground"></a>

```python
def reset_background() -> None
```

##### `reset_invert_actions_colors` <a name="reset_invert_actions_colors" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.resetInvertActionsColors"></a>

```python
def reset_invert_actions_colors() -> None
```

##### `reset_text` <a name="reset_text" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.resetText"></a>

```python
def reset_text() -> None
```

##### `reset_text_active` <a name="reset_text_active" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.resetTextActive"></a>

```python
def reset_text_active() -> None
```

##### `reset_text_background_active` <a name="reset_text_background_active" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.resetTextBackgroundActive"></a>

```python
def reset_text_background_active() -> None
```

##### `reset_text_background_hover` <a name="reset_text_background_hover" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.resetTextBackgroundHover"></a>

```python
def reset_text_background_hover() -> None
```

##### `reset_text_hover` <a name="reset_text_hover" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.resetTextHover"></a>

```python
def reset_text_hover() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.backgroundInput">background_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.invertActionsColorsInput">invert_actions_colors_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.textActiveInput">text_active_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.textBackgroundActiveInput">text_background_active_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.textBackgroundHoverInput">text_background_hover_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.textHoverInput">text_hover_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.textInput">text_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.background">background</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.invertActionsColors">invert_actions_colors</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.text">text</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.textActive">text_active</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.textBackgroundActive">text_background_active</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.textBackgroundHover">text_background_hover</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.textHover">text_hover</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigation">ConnectWorkspaceThemeDarkPaletteNavigation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `background_input`<sup>Optional</sup> <a name="background_input" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.backgroundInput"></a>

```python
background_input: str
```

- *Type:* str

---

##### `invert_actions_colors_input`<sup>Optional</sup> <a name="invert_actions_colors_input" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.invertActionsColorsInput"></a>

```python
invert_actions_colors_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `text_active_input`<sup>Optional</sup> <a name="text_active_input" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.textActiveInput"></a>

```python
text_active_input: str
```

- *Type:* str

---

##### `text_background_active_input`<sup>Optional</sup> <a name="text_background_active_input" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.textBackgroundActiveInput"></a>

```python
text_background_active_input: str
```

- *Type:* str

---

##### `text_background_hover_input`<sup>Optional</sup> <a name="text_background_hover_input" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.textBackgroundHoverInput"></a>

```python
text_background_hover_input: str
```

- *Type:* str

---

##### `text_hover_input`<sup>Optional</sup> <a name="text_hover_input" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.textHoverInput"></a>

```python
text_hover_input: str
```

- *Type:* str

---

##### `text_input`<sup>Optional</sup> <a name="text_input" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.textInput"></a>

```python
text_input: str
```

- *Type:* str

---

##### `background`<sup>Required</sup> <a name="background" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.background"></a>

```python
background: str
```

- *Type:* str

---

##### `invert_actions_colors`<sup>Required</sup> <a name="invert_actions_colors" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.invertActionsColors"></a>

```python
invert_actions_colors: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.text"></a>

```python
text: str
```

- *Type:* str

---

##### `text_active`<sup>Required</sup> <a name="text_active" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.textActive"></a>

```python
text_active: str
```

- *Type:* str

---

##### `text_background_active`<sup>Required</sup> <a name="text_background_active" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.textBackgroundActive"></a>

```python
text_background_active: str
```

- *Type:* str

---

##### `text_background_hover`<sup>Required</sup> <a name="text_background_hover" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.textBackgroundHover"></a>

```python
text_background_hover: str
```

- *Type:* str

---

##### `text_hover`<sup>Required</sup> <a name="text_hover" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.textHover"></a>

```python
text_hover: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ConnectWorkspaceThemeDarkPaletteNavigation
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigation">ConnectWorkspaceThemeDarkPaletteNavigation</a>

---


### ConnectWorkspaceThemeDarkPaletteOutputReference <a name="ConnectWorkspaceThemeDarkPaletteOutputReference" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import connect_workspace

connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.putCanvas">put_canvas</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.putHeader">put_header</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.putNavigation">put_navigation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.putPrimary">put_primary</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.resetCanvas">reset_canvas</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.resetHeader">reset_header</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.resetNavigation">reset_navigation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.resetPrimary">reset_primary</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_canvas` <a name="put_canvas" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.putCanvas"></a>

```python
def put_canvas(
  active_background: str = None,
  container_background: str = None,
  page_background: str = None
) -> None
```

###### `active_background`<sup>Optional</sup> <a name="active_background" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.putCanvas.parameter.activeBackground"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_workspace#active_background ConnectWorkspace#active_background}.

---

###### `container_background`<sup>Optional</sup> <a name="container_background" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.putCanvas.parameter.containerBackground"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_workspace#container_background ConnectWorkspace#container_background}.

---

###### `page_background`<sup>Optional</sup> <a name="page_background" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.putCanvas.parameter.pageBackground"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_workspace#page_background ConnectWorkspace#page_background}.

---

##### `put_header` <a name="put_header" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.putHeader"></a>

```python
def put_header(
  background: str = None,
  invert_actions_colors: bool | IResolvable = None,
  text: str = None,
  text_hover: str = None
) -> None
```

###### `background`<sup>Optional</sup> <a name="background" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.putHeader.parameter.background"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_workspace#background ConnectWorkspace#background}.

---

###### `invert_actions_colors`<sup>Optional</sup> <a name="invert_actions_colors" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.putHeader.parameter.invertActionsColors"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_workspace#invert_actions_colors ConnectWorkspace#invert_actions_colors}.

---

###### `text`<sup>Optional</sup> <a name="text" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.putHeader.parameter.text"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_workspace#text ConnectWorkspace#text}.

---

###### `text_hover`<sup>Optional</sup> <a name="text_hover" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.putHeader.parameter.textHover"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_workspace#text_hover ConnectWorkspace#text_hover}.

---

##### `put_navigation` <a name="put_navigation" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.putNavigation"></a>

```python
def put_navigation(
  background: str = None,
  invert_actions_colors: bool | IResolvable = None,
  text: str = None,
  text_active: str = None,
  text_background_active: str = None,
  text_background_hover: str = None,
  text_hover: str = None
) -> None
```

###### `background`<sup>Optional</sup> <a name="background" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.putNavigation.parameter.background"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_workspace#background ConnectWorkspace#background}.

---

###### `invert_actions_colors`<sup>Optional</sup> <a name="invert_actions_colors" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.putNavigation.parameter.invertActionsColors"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_workspace#invert_actions_colors ConnectWorkspace#invert_actions_colors}.

---

###### `text`<sup>Optional</sup> <a name="text" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.putNavigation.parameter.text"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_workspace#text ConnectWorkspace#text}.

---

###### `text_active`<sup>Optional</sup> <a name="text_active" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.putNavigation.parameter.textActive"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_workspace#text_active ConnectWorkspace#text_active}.

---

###### `text_background_active`<sup>Optional</sup> <a name="text_background_active" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.putNavigation.parameter.textBackgroundActive"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_workspace#text_background_active ConnectWorkspace#text_background_active}.

---

###### `text_background_hover`<sup>Optional</sup> <a name="text_background_hover" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.putNavigation.parameter.textBackgroundHover"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_workspace#text_background_hover ConnectWorkspace#text_background_hover}.

---

###### `text_hover`<sup>Optional</sup> <a name="text_hover" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.putNavigation.parameter.textHover"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_workspace#text_hover ConnectWorkspace#text_hover}.

---

##### `put_primary` <a name="put_primary" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.putPrimary"></a>

```python
def put_primary(
  active: str = None,
  contrast_text: str = None,
  default: str = None
) -> None
```

###### `active`<sup>Optional</sup> <a name="active" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.putPrimary.parameter.active"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_workspace#active ConnectWorkspace#active}.

---

###### `contrast_text`<sup>Optional</sup> <a name="contrast_text" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.putPrimary.parameter.contrastText"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_workspace#contrast_text ConnectWorkspace#contrast_text}.

---

###### `default`<sup>Optional</sup> <a name="default" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.putPrimary.parameter.default"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_workspace#default ConnectWorkspace#default}.

---

##### `reset_canvas` <a name="reset_canvas" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.resetCanvas"></a>

```python
def reset_canvas() -> None
```

##### `reset_header` <a name="reset_header" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.resetHeader"></a>

```python
def reset_header() -> None
```

##### `reset_navigation` <a name="reset_navigation" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.resetNavigation"></a>

```python
def reset_navigation() -> None
```

##### `reset_primary` <a name="reset_primary" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.resetPrimary"></a>

```python
def reset_primary() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.property.canvas">canvas</a></code> | <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference">ConnectWorkspaceThemeDarkPaletteCanvasOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.property.header">header</a></code> | <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference">ConnectWorkspaceThemeDarkPaletteHeaderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.property.navigation">navigation</a></code> | <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference">ConnectWorkspaceThemeDarkPaletteNavigationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.property.primary">primary</a></code> | <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference">ConnectWorkspaceThemeDarkPalettePrimaryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.property.canvasInput">canvas_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvas">ConnectWorkspaceThemeDarkPaletteCanvas</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.property.headerInput">header_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeader">ConnectWorkspaceThemeDarkPaletteHeader</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.property.navigationInput">navigation_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigation">ConnectWorkspaceThemeDarkPaletteNavigation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.property.primaryInput">primary_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimary">ConnectWorkspaceThemeDarkPalettePrimary</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalette">ConnectWorkspaceThemeDarkPalette</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `canvas`<sup>Required</sup> <a name="canvas" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.property.canvas"></a>

```python
canvas: ConnectWorkspaceThemeDarkPaletteCanvasOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvasOutputReference">ConnectWorkspaceThemeDarkPaletteCanvasOutputReference</a>

---

##### `header`<sup>Required</sup> <a name="header" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.property.header"></a>

```python
header: ConnectWorkspaceThemeDarkPaletteHeaderOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeaderOutputReference">ConnectWorkspaceThemeDarkPaletteHeaderOutputReference</a>

---

##### `navigation`<sup>Required</sup> <a name="navigation" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.property.navigation"></a>

```python
navigation: ConnectWorkspaceThemeDarkPaletteNavigationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigationOutputReference">ConnectWorkspaceThemeDarkPaletteNavigationOutputReference</a>

---

##### `primary`<sup>Required</sup> <a name="primary" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.property.primary"></a>

```python
primary: ConnectWorkspaceThemeDarkPalettePrimaryOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference">ConnectWorkspaceThemeDarkPalettePrimaryOutputReference</a>

---

##### `canvas_input`<sup>Optional</sup> <a name="canvas_input" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.property.canvasInput"></a>

```python
canvas_input: IResolvable | ConnectWorkspaceThemeDarkPaletteCanvas
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteCanvas">ConnectWorkspaceThemeDarkPaletteCanvas</a>

---

##### `header_input`<sup>Optional</sup> <a name="header_input" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.property.headerInput"></a>

```python
header_input: IResolvable | ConnectWorkspaceThemeDarkPaletteHeader
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteHeader">ConnectWorkspaceThemeDarkPaletteHeader</a>

---

##### `navigation_input`<sup>Optional</sup> <a name="navigation_input" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.property.navigationInput"></a>

```python
navigation_input: IResolvable | ConnectWorkspaceThemeDarkPaletteNavigation
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteNavigation">ConnectWorkspaceThemeDarkPaletteNavigation</a>

---

##### `primary_input`<sup>Optional</sup> <a name="primary_input" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.property.primaryInput"></a>

```python
primary_input: IResolvable | ConnectWorkspaceThemeDarkPalettePrimary
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimary">ConnectWorkspaceThemeDarkPalettePrimary</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPaletteOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ConnectWorkspaceThemeDarkPalette
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalette">ConnectWorkspaceThemeDarkPalette</a>

---


### ConnectWorkspaceThemeDarkPalettePrimaryOutputReference <a name="ConnectWorkspaceThemeDarkPalettePrimaryOutputReference" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import connect_workspace

connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.resetActive">reset_active</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.resetContrastText">reset_contrast_text</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.resetDefault">reset_default</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_active` <a name="reset_active" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.resetActive"></a>

```python
def reset_active() -> None
```

##### `reset_contrast_text` <a name="reset_contrast_text" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.resetContrastText"></a>

```python
def reset_contrast_text() -> None
```

##### `reset_default` <a name="reset_default" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.resetDefault"></a>

```python
def reset_default() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.property.activeInput">active_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.property.contrastTextInput">contrast_text_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.property.defaultInput">default_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.property.active">active</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.property.contrastText">contrast_text</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimary">ConnectWorkspaceThemeDarkPalettePrimary</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `active_input`<sup>Optional</sup> <a name="active_input" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.property.activeInput"></a>

```python
active_input: str
```

- *Type:* str

---

##### `contrast_text_input`<sup>Optional</sup> <a name="contrast_text_input" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.property.contrastTextInput"></a>

```python
contrast_text_input: str
```

- *Type:* str

---

##### `default_input`<sup>Optional</sup> <a name="default_input" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.property.defaultInput"></a>

```python
default_input: str
```

- *Type:* str

---

##### `active`<sup>Required</sup> <a name="active" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.property.active"></a>

```python
active: str
```

- *Type:* str

---

##### `contrast_text`<sup>Required</sup> <a name="contrast_text" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.property.contrastText"></a>

```python
contrast_text: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimaryOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ConnectWorkspaceThemeDarkPalettePrimary
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalettePrimary">ConnectWorkspaceThemeDarkPalettePrimary</a>

---


### ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference <a name="ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import connect_workspace

connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.resetDefault">reset_default</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_default` <a name="reset_default" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.resetDefault"></a>

```python
def reset_default() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.property.defaultInput">default_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamily">ConnectWorkspaceThemeDarkTypographyFontFamily</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default_input`<sup>Optional</sup> <a name="default_input" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.property.defaultInput"></a>

```python
default_input: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ConnectWorkspaceThemeDarkTypographyFontFamily
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamily">ConnectWorkspaceThemeDarkTypographyFontFamily</a>

---


### ConnectWorkspaceThemeDarkTypographyOutputReference <a name="ConnectWorkspaceThemeDarkTypographyOutputReference" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import connect_workspace

connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.putFontFamily">put_font_family</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.resetFontFamily">reset_font_family</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_font_family` <a name="put_font_family" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.putFontFamily"></a>

```python
def put_font_family(
  default: str = None
) -> None
```

###### `default`<sup>Optional</sup> <a name="default" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.putFontFamily.parameter.default"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_workspace#default ConnectWorkspace#default}.

---

##### `reset_font_family` <a name="reset_font_family" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.resetFontFamily"></a>

```python
def reset_font_family() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.property.fontFamily">font_family</a></code> | <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference">ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.property.fontFamilyInput">font_family_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamily">ConnectWorkspaceThemeDarkTypographyFontFamily</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypography">ConnectWorkspaceThemeDarkTypography</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `font_family`<sup>Required</sup> <a name="font_family" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.property.fontFamily"></a>

```python
font_family: ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference">ConnectWorkspaceThemeDarkTypographyFontFamilyOutputReference</a>

---

##### `font_family_input`<sup>Optional</sup> <a name="font_family_input" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.property.fontFamilyInput"></a>

```python
font_family_input: IResolvable | ConnectWorkspaceThemeDarkTypographyFontFamily
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyFontFamily">ConnectWorkspaceThemeDarkTypographyFontFamily</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypographyOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ConnectWorkspaceThemeDarkTypography
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypography">ConnectWorkspaceThemeDarkTypography</a>

---


### ConnectWorkspaceThemeLightOutputReference <a name="ConnectWorkspaceThemeLightOutputReference" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import connect_workspace

connectWorkspace.ConnectWorkspaceThemeLightOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.putPalette">put_palette</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.putTypography">put_typography</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.resetPalette">reset_palette</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.resetTypography">reset_typography</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_palette` <a name="put_palette" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.putPalette"></a>

```python
def put_palette(
  canvas: ConnectWorkspaceThemeLightPaletteCanvas = None,
  header: ConnectWorkspaceThemeLightPaletteHeader = None,
  navigation: ConnectWorkspaceThemeLightPaletteNavigation = None,
  primary: ConnectWorkspaceThemeLightPalettePrimary = None
) -> None
```

###### `canvas`<sup>Optional</sup> <a name="canvas" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.putPalette.parameter.canvas"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvas">ConnectWorkspaceThemeLightPaletteCanvas</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_workspace#canvas ConnectWorkspace#canvas}.

---

###### `header`<sup>Optional</sup> <a name="header" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.putPalette.parameter.header"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeader">ConnectWorkspaceThemeLightPaletteHeader</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_workspace#header ConnectWorkspace#header}.

---

###### `navigation`<sup>Optional</sup> <a name="navigation" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.putPalette.parameter.navigation"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigation">ConnectWorkspaceThemeLightPaletteNavigation</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_workspace#navigation ConnectWorkspace#navigation}.

---

###### `primary`<sup>Optional</sup> <a name="primary" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.putPalette.parameter.primary"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimary">ConnectWorkspaceThemeLightPalettePrimary</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_workspace#primary ConnectWorkspace#primary}.

---

##### `put_typography` <a name="put_typography" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.putTypography"></a>

```python
def put_typography(
  font_family: ConnectWorkspaceThemeLightTypographyFontFamily = None
) -> None
```

###### `font_family`<sup>Optional</sup> <a name="font_family" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.putTypography.parameter.fontFamily"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamily">ConnectWorkspaceThemeLightTypographyFontFamily</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_workspace#font_family ConnectWorkspace#font_family}.

---

##### `reset_palette` <a name="reset_palette" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.resetPalette"></a>

```python
def reset_palette() -> None
```

##### `reset_typography` <a name="reset_typography" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.resetTypography"></a>

```python
def reset_typography() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.property.palette">palette</a></code> | <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference">ConnectWorkspaceThemeLightPaletteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.property.typography">typography</a></code> | <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference">ConnectWorkspaceThemeLightTypographyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.property.paletteInput">palette_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalette">ConnectWorkspaceThemeLightPalette</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.property.typographyInput">typography_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypography">ConnectWorkspaceThemeLightTypography</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLight">ConnectWorkspaceThemeLight</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `palette`<sup>Required</sup> <a name="palette" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.property.palette"></a>

```python
palette: ConnectWorkspaceThemeLightPaletteOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference">ConnectWorkspaceThemeLightPaletteOutputReference</a>

---

##### `typography`<sup>Required</sup> <a name="typography" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.property.typography"></a>

```python
typography: ConnectWorkspaceThemeLightTypographyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference">ConnectWorkspaceThemeLightTypographyOutputReference</a>

---

##### `palette_input`<sup>Optional</sup> <a name="palette_input" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.property.paletteInput"></a>

```python
palette_input: IResolvable | ConnectWorkspaceThemeLightPalette
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalette">ConnectWorkspaceThemeLightPalette</a>

---

##### `typography_input`<sup>Optional</sup> <a name="typography_input" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.property.typographyInput"></a>

```python
typography_input: IResolvable | ConnectWorkspaceThemeLightTypography
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypography">ConnectWorkspaceThemeLightTypography</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ConnectWorkspaceThemeLight
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLight">ConnectWorkspaceThemeLight</a>

---


### ConnectWorkspaceThemeLightPaletteCanvasOutputReference <a name="ConnectWorkspaceThemeLightPaletteCanvasOutputReference" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import connect_workspace

connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.resetActiveBackground">reset_active_background</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.resetContainerBackground">reset_container_background</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.resetPageBackground">reset_page_background</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_active_background` <a name="reset_active_background" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.resetActiveBackground"></a>

```python
def reset_active_background() -> None
```

##### `reset_container_background` <a name="reset_container_background" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.resetContainerBackground"></a>

```python
def reset_container_background() -> None
```

##### `reset_page_background` <a name="reset_page_background" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.resetPageBackground"></a>

```python
def reset_page_background() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.property.activeBackgroundInput">active_background_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.property.containerBackgroundInput">container_background_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.property.pageBackgroundInput">page_background_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.property.activeBackground">active_background</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.property.containerBackground">container_background</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.property.pageBackground">page_background</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvas">ConnectWorkspaceThemeLightPaletteCanvas</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `active_background_input`<sup>Optional</sup> <a name="active_background_input" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.property.activeBackgroundInput"></a>

```python
active_background_input: str
```

- *Type:* str

---

##### `container_background_input`<sup>Optional</sup> <a name="container_background_input" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.property.containerBackgroundInput"></a>

```python
container_background_input: str
```

- *Type:* str

---

##### `page_background_input`<sup>Optional</sup> <a name="page_background_input" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.property.pageBackgroundInput"></a>

```python
page_background_input: str
```

- *Type:* str

---

##### `active_background`<sup>Required</sup> <a name="active_background" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.property.activeBackground"></a>

```python
active_background: str
```

- *Type:* str

---

##### `container_background`<sup>Required</sup> <a name="container_background" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.property.containerBackground"></a>

```python
container_background: str
```

- *Type:* str

---

##### `page_background`<sup>Required</sup> <a name="page_background" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.property.pageBackground"></a>

```python
page_background: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ConnectWorkspaceThemeLightPaletteCanvas
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvas">ConnectWorkspaceThemeLightPaletteCanvas</a>

---


### ConnectWorkspaceThemeLightPaletteHeaderOutputReference <a name="ConnectWorkspaceThemeLightPaletteHeaderOutputReference" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import connect_workspace

connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.resetBackground">reset_background</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.resetInvertActionsColors">reset_invert_actions_colors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.resetText">reset_text</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.resetTextHover">reset_text_hover</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_background` <a name="reset_background" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.resetBackground"></a>

```python
def reset_background() -> None
```

##### `reset_invert_actions_colors` <a name="reset_invert_actions_colors" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.resetInvertActionsColors"></a>

```python
def reset_invert_actions_colors() -> None
```

##### `reset_text` <a name="reset_text" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.resetText"></a>

```python
def reset_text() -> None
```

##### `reset_text_hover` <a name="reset_text_hover" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.resetTextHover"></a>

```python
def reset_text_hover() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.property.backgroundInput">background_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.property.invertActionsColorsInput">invert_actions_colors_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.property.textHoverInput">text_hover_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.property.textInput">text_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.property.background">background</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.property.invertActionsColors">invert_actions_colors</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.property.text">text</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.property.textHover">text_hover</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeader">ConnectWorkspaceThemeLightPaletteHeader</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `background_input`<sup>Optional</sup> <a name="background_input" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.property.backgroundInput"></a>

```python
background_input: str
```

- *Type:* str

---

##### `invert_actions_colors_input`<sup>Optional</sup> <a name="invert_actions_colors_input" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.property.invertActionsColorsInput"></a>

```python
invert_actions_colors_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `text_hover_input`<sup>Optional</sup> <a name="text_hover_input" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.property.textHoverInput"></a>

```python
text_hover_input: str
```

- *Type:* str

---

##### `text_input`<sup>Optional</sup> <a name="text_input" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.property.textInput"></a>

```python
text_input: str
```

- *Type:* str

---

##### `background`<sup>Required</sup> <a name="background" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.property.background"></a>

```python
background: str
```

- *Type:* str

---

##### `invert_actions_colors`<sup>Required</sup> <a name="invert_actions_colors" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.property.invertActionsColors"></a>

```python
invert_actions_colors: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.property.text"></a>

```python
text: str
```

- *Type:* str

---

##### `text_hover`<sup>Required</sup> <a name="text_hover" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.property.textHover"></a>

```python
text_hover: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ConnectWorkspaceThemeLightPaletteHeader
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeader">ConnectWorkspaceThemeLightPaletteHeader</a>

---


### ConnectWorkspaceThemeLightPaletteNavigationOutputReference <a name="ConnectWorkspaceThemeLightPaletteNavigationOutputReference" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import connect_workspace

connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.resetBackground">reset_background</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.resetInvertActionsColors">reset_invert_actions_colors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.resetText">reset_text</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.resetTextActive">reset_text_active</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.resetTextBackgroundActive">reset_text_background_active</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.resetTextBackgroundHover">reset_text_background_hover</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.resetTextHover">reset_text_hover</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_background` <a name="reset_background" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.resetBackground"></a>

```python
def reset_background() -> None
```

##### `reset_invert_actions_colors` <a name="reset_invert_actions_colors" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.resetInvertActionsColors"></a>

```python
def reset_invert_actions_colors() -> None
```

##### `reset_text` <a name="reset_text" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.resetText"></a>

```python
def reset_text() -> None
```

##### `reset_text_active` <a name="reset_text_active" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.resetTextActive"></a>

```python
def reset_text_active() -> None
```

##### `reset_text_background_active` <a name="reset_text_background_active" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.resetTextBackgroundActive"></a>

```python
def reset_text_background_active() -> None
```

##### `reset_text_background_hover` <a name="reset_text_background_hover" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.resetTextBackgroundHover"></a>

```python
def reset_text_background_hover() -> None
```

##### `reset_text_hover` <a name="reset_text_hover" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.resetTextHover"></a>

```python
def reset_text_hover() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.backgroundInput">background_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.invertActionsColorsInput">invert_actions_colors_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.textActiveInput">text_active_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.textBackgroundActiveInput">text_background_active_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.textBackgroundHoverInput">text_background_hover_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.textHoverInput">text_hover_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.textInput">text_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.background">background</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.invertActionsColors">invert_actions_colors</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.text">text</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.textActive">text_active</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.textBackgroundActive">text_background_active</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.textBackgroundHover">text_background_hover</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.textHover">text_hover</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigation">ConnectWorkspaceThemeLightPaletteNavigation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `background_input`<sup>Optional</sup> <a name="background_input" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.backgroundInput"></a>

```python
background_input: str
```

- *Type:* str

---

##### `invert_actions_colors_input`<sup>Optional</sup> <a name="invert_actions_colors_input" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.invertActionsColorsInput"></a>

```python
invert_actions_colors_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `text_active_input`<sup>Optional</sup> <a name="text_active_input" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.textActiveInput"></a>

```python
text_active_input: str
```

- *Type:* str

---

##### `text_background_active_input`<sup>Optional</sup> <a name="text_background_active_input" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.textBackgroundActiveInput"></a>

```python
text_background_active_input: str
```

- *Type:* str

---

##### `text_background_hover_input`<sup>Optional</sup> <a name="text_background_hover_input" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.textBackgroundHoverInput"></a>

```python
text_background_hover_input: str
```

- *Type:* str

---

##### `text_hover_input`<sup>Optional</sup> <a name="text_hover_input" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.textHoverInput"></a>

```python
text_hover_input: str
```

- *Type:* str

---

##### `text_input`<sup>Optional</sup> <a name="text_input" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.textInput"></a>

```python
text_input: str
```

- *Type:* str

---

##### `background`<sup>Required</sup> <a name="background" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.background"></a>

```python
background: str
```

- *Type:* str

---

##### `invert_actions_colors`<sup>Required</sup> <a name="invert_actions_colors" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.invertActionsColors"></a>

```python
invert_actions_colors: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.text"></a>

```python
text: str
```

- *Type:* str

---

##### `text_active`<sup>Required</sup> <a name="text_active" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.textActive"></a>

```python
text_active: str
```

- *Type:* str

---

##### `text_background_active`<sup>Required</sup> <a name="text_background_active" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.textBackgroundActive"></a>

```python
text_background_active: str
```

- *Type:* str

---

##### `text_background_hover`<sup>Required</sup> <a name="text_background_hover" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.textBackgroundHover"></a>

```python
text_background_hover: str
```

- *Type:* str

---

##### `text_hover`<sup>Required</sup> <a name="text_hover" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.textHover"></a>

```python
text_hover: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ConnectWorkspaceThemeLightPaletteNavigation
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigation">ConnectWorkspaceThemeLightPaletteNavigation</a>

---


### ConnectWorkspaceThemeLightPaletteOutputReference <a name="ConnectWorkspaceThemeLightPaletteOutputReference" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import connect_workspace

connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.putCanvas">put_canvas</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.putHeader">put_header</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.putNavigation">put_navigation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.putPrimary">put_primary</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.resetCanvas">reset_canvas</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.resetHeader">reset_header</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.resetNavigation">reset_navigation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.resetPrimary">reset_primary</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_canvas` <a name="put_canvas" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.putCanvas"></a>

```python
def put_canvas(
  active_background: str = None,
  container_background: str = None,
  page_background: str = None
) -> None
```

###### `active_background`<sup>Optional</sup> <a name="active_background" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.putCanvas.parameter.activeBackground"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_workspace#active_background ConnectWorkspace#active_background}.

---

###### `container_background`<sup>Optional</sup> <a name="container_background" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.putCanvas.parameter.containerBackground"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_workspace#container_background ConnectWorkspace#container_background}.

---

###### `page_background`<sup>Optional</sup> <a name="page_background" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.putCanvas.parameter.pageBackground"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_workspace#page_background ConnectWorkspace#page_background}.

---

##### `put_header` <a name="put_header" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.putHeader"></a>

```python
def put_header(
  background: str = None,
  invert_actions_colors: bool | IResolvable = None,
  text: str = None,
  text_hover: str = None
) -> None
```

###### `background`<sup>Optional</sup> <a name="background" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.putHeader.parameter.background"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_workspace#background ConnectWorkspace#background}.

---

###### `invert_actions_colors`<sup>Optional</sup> <a name="invert_actions_colors" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.putHeader.parameter.invertActionsColors"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_workspace#invert_actions_colors ConnectWorkspace#invert_actions_colors}.

---

###### `text`<sup>Optional</sup> <a name="text" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.putHeader.parameter.text"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_workspace#text ConnectWorkspace#text}.

---

###### `text_hover`<sup>Optional</sup> <a name="text_hover" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.putHeader.parameter.textHover"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_workspace#text_hover ConnectWorkspace#text_hover}.

---

##### `put_navigation` <a name="put_navigation" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.putNavigation"></a>

```python
def put_navigation(
  background: str = None,
  invert_actions_colors: bool | IResolvable = None,
  text: str = None,
  text_active: str = None,
  text_background_active: str = None,
  text_background_hover: str = None,
  text_hover: str = None
) -> None
```

###### `background`<sup>Optional</sup> <a name="background" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.putNavigation.parameter.background"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_workspace#background ConnectWorkspace#background}.

---

###### `invert_actions_colors`<sup>Optional</sup> <a name="invert_actions_colors" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.putNavigation.parameter.invertActionsColors"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_workspace#invert_actions_colors ConnectWorkspace#invert_actions_colors}.

---

###### `text`<sup>Optional</sup> <a name="text" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.putNavigation.parameter.text"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_workspace#text ConnectWorkspace#text}.

---

###### `text_active`<sup>Optional</sup> <a name="text_active" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.putNavigation.parameter.textActive"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_workspace#text_active ConnectWorkspace#text_active}.

---

###### `text_background_active`<sup>Optional</sup> <a name="text_background_active" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.putNavigation.parameter.textBackgroundActive"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_workspace#text_background_active ConnectWorkspace#text_background_active}.

---

###### `text_background_hover`<sup>Optional</sup> <a name="text_background_hover" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.putNavigation.parameter.textBackgroundHover"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_workspace#text_background_hover ConnectWorkspace#text_background_hover}.

---

###### `text_hover`<sup>Optional</sup> <a name="text_hover" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.putNavigation.parameter.textHover"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_workspace#text_hover ConnectWorkspace#text_hover}.

---

##### `put_primary` <a name="put_primary" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.putPrimary"></a>

```python
def put_primary(
  active: str = None,
  contrast_text: str = None,
  default: str = None
) -> None
```

###### `active`<sup>Optional</sup> <a name="active" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.putPrimary.parameter.active"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_workspace#active ConnectWorkspace#active}.

---

###### `contrast_text`<sup>Optional</sup> <a name="contrast_text" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.putPrimary.parameter.contrastText"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_workspace#contrast_text ConnectWorkspace#contrast_text}.

---

###### `default`<sup>Optional</sup> <a name="default" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.putPrimary.parameter.default"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_workspace#default ConnectWorkspace#default}.

---

##### `reset_canvas` <a name="reset_canvas" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.resetCanvas"></a>

```python
def reset_canvas() -> None
```

##### `reset_header` <a name="reset_header" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.resetHeader"></a>

```python
def reset_header() -> None
```

##### `reset_navigation` <a name="reset_navigation" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.resetNavigation"></a>

```python
def reset_navigation() -> None
```

##### `reset_primary` <a name="reset_primary" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.resetPrimary"></a>

```python
def reset_primary() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.property.canvas">canvas</a></code> | <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference">ConnectWorkspaceThemeLightPaletteCanvasOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.property.header">header</a></code> | <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference">ConnectWorkspaceThemeLightPaletteHeaderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.property.navigation">navigation</a></code> | <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference">ConnectWorkspaceThemeLightPaletteNavigationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.property.primary">primary</a></code> | <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference">ConnectWorkspaceThemeLightPalettePrimaryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.property.canvasInput">canvas_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvas">ConnectWorkspaceThemeLightPaletteCanvas</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.property.headerInput">header_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeader">ConnectWorkspaceThemeLightPaletteHeader</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.property.navigationInput">navigation_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigation">ConnectWorkspaceThemeLightPaletteNavigation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.property.primaryInput">primary_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimary">ConnectWorkspaceThemeLightPalettePrimary</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalette">ConnectWorkspaceThemeLightPalette</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `canvas`<sup>Required</sup> <a name="canvas" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.property.canvas"></a>

```python
canvas: ConnectWorkspaceThemeLightPaletteCanvasOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvasOutputReference">ConnectWorkspaceThemeLightPaletteCanvasOutputReference</a>

---

##### `header`<sup>Required</sup> <a name="header" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.property.header"></a>

```python
header: ConnectWorkspaceThemeLightPaletteHeaderOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeaderOutputReference">ConnectWorkspaceThemeLightPaletteHeaderOutputReference</a>

---

##### `navigation`<sup>Required</sup> <a name="navigation" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.property.navigation"></a>

```python
navigation: ConnectWorkspaceThemeLightPaletteNavigationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigationOutputReference">ConnectWorkspaceThemeLightPaletteNavigationOutputReference</a>

---

##### `primary`<sup>Required</sup> <a name="primary" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.property.primary"></a>

```python
primary: ConnectWorkspaceThemeLightPalettePrimaryOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference">ConnectWorkspaceThemeLightPalettePrimaryOutputReference</a>

---

##### `canvas_input`<sup>Optional</sup> <a name="canvas_input" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.property.canvasInput"></a>

```python
canvas_input: IResolvable | ConnectWorkspaceThemeLightPaletteCanvas
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteCanvas">ConnectWorkspaceThemeLightPaletteCanvas</a>

---

##### `header_input`<sup>Optional</sup> <a name="header_input" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.property.headerInput"></a>

```python
header_input: IResolvable | ConnectWorkspaceThemeLightPaletteHeader
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteHeader">ConnectWorkspaceThemeLightPaletteHeader</a>

---

##### `navigation_input`<sup>Optional</sup> <a name="navigation_input" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.property.navigationInput"></a>

```python
navigation_input: IResolvable | ConnectWorkspaceThemeLightPaletteNavigation
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteNavigation">ConnectWorkspaceThemeLightPaletteNavigation</a>

---

##### `primary_input`<sup>Optional</sup> <a name="primary_input" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.property.primaryInput"></a>

```python
primary_input: IResolvable | ConnectWorkspaceThemeLightPalettePrimary
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimary">ConnectWorkspaceThemeLightPalettePrimary</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPaletteOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ConnectWorkspaceThemeLightPalette
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalette">ConnectWorkspaceThemeLightPalette</a>

---


### ConnectWorkspaceThemeLightPalettePrimaryOutputReference <a name="ConnectWorkspaceThemeLightPalettePrimaryOutputReference" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import connect_workspace

connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.resetActive">reset_active</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.resetContrastText">reset_contrast_text</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.resetDefault">reset_default</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_active` <a name="reset_active" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.resetActive"></a>

```python
def reset_active() -> None
```

##### `reset_contrast_text` <a name="reset_contrast_text" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.resetContrastText"></a>

```python
def reset_contrast_text() -> None
```

##### `reset_default` <a name="reset_default" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.resetDefault"></a>

```python
def reset_default() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.property.activeInput">active_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.property.contrastTextInput">contrast_text_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.property.defaultInput">default_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.property.active">active</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.property.contrastText">contrast_text</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimary">ConnectWorkspaceThemeLightPalettePrimary</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `active_input`<sup>Optional</sup> <a name="active_input" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.property.activeInput"></a>

```python
active_input: str
```

- *Type:* str

---

##### `contrast_text_input`<sup>Optional</sup> <a name="contrast_text_input" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.property.contrastTextInput"></a>

```python
contrast_text_input: str
```

- *Type:* str

---

##### `default_input`<sup>Optional</sup> <a name="default_input" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.property.defaultInput"></a>

```python
default_input: str
```

- *Type:* str

---

##### `active`<sup>Required</sup> <a name="active" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.property.active"></a>

```python
active: str
```

- *Type:* str

---

##### `contrast_text`<sup>Required</sup> <a name="contrast_text" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.property.contrastText"></a>

```python
contrast_text: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimaryOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ConnectWorkspaceThemeLightPalettePrimary
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalettePrimary">ConnectWorkspaceThemeLightPalettePrimary</a>

---


### ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference <a name="ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import connect_workspace

connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.resetDefault">reset_default</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_default` <a name="reset_default" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.resetDefault"></a>

```python
def reset_default() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.property.defaultInput">default_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamily">ConnectWorkspaceThemeLightTypographyFontFamily</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default_input`<sup>Optional</sup> <a name="default_input" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.property.defaultInput"></a>

```python
default_input: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ConnectWorkspaceThemeLightTypographyFontFamily
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamily">ConnectWorkspaceThemeLightTypographyFontFamily</a>

---


### ConnectWorkspaceThemeLightTypographyOutputReference <a name="ConnectWorkspaceThemeLightTypographyOutputReference" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import connect_workspace

connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.putFontFamily">put_font_family</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.resetFontFamily">reset_font_family</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_font_family` <a name="put_font_family" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.putFontFamily"></a>

```python
def put_font_family(
  default: str = None
) -> None
```

###### `default`<sup>Optional</sup> <a name="default" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.putFontFamily.parameter.default"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_workspace#default ConnectWorkspace#default}.

---

##### `reset_font_family` <a name="reset_font_family" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.resetFontFamily"></a>

```python
def reset_font_family() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.property.fontFamily">font_family</a></code> | <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference">ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.property.fontFamilyInput">font_family_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamily">ConnectWorkspaceThemeLightTypographyFontFamily</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypography">ConnectWorkspaceThemeLightTypography</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `font_family`<sup>Required</sup> <a name="font_family" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.property.fontFamily"></a>

```python
font_family: ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference">ConnectWorkspaceThemeLightTypographyFontFamilyOutputReference</a>

---

##### `font_family_input`<sup>Optional</sup> <a name="font_family_input" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.property.fontFamilyInput"></a>

```python
font_family_input: IResolvable | ConnectWorkspaceThemeLightTypographyFontFamily
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyFontFamily">ConnectWorkspaceThemeLightTypographyFontFamily</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypographyOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ConnectWorkspaceThemeLightTypography
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypography">ConnectWorkspaceThemeLightTypography</a>

---


### ConnectWorkspaceThemeOutputReference <a name="ConnectWorkspaceThemeOutputReference" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import connect_workspace

connectWorkspace.ConnectWorkspaceThemeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.putDark">put_dark</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.putLight">put_light</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.resetDark">reset_dark</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.resetLight">reset_light</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_dark` <a name="put_dark" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.putDark"></a>

```python
def put_dark(
  palette: ConnectWorkspaceThemeDarkPalette = None,
  typography: ConnectWorkspaceThemeDarkTypography = None
) -> None
```

###### `palette`<sup>Optional</sup> <a name="palette" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.putDark.parameter.palette"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkPalette">ConnectWorkspaceThemeDarkPalette</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_workspace#palette ConnectWorkspace#palette}.

---

###### `typography`<sup>Optional</sup> <a name="typography" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.putDark.parameter.typography"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkTypography">ConnectWorkspaceThemeDarkTypography</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_workspace#typography ConnectWorkspace#typography}.

---

##### `put_light` <a name="put_light" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.putLight"></a>

```python
def put_light(
  palette: ConnectWorkspaceThemeLightPalette = None,
  typography: ConnectWorkspaceThemeLightTypography = None
) -> None
```

###### `palette`<sup>Optional</sup> <a name="palette" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.putLight.parameter.palette"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightPalette">ConnectWorkspaceThemeLightPalette</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_workspace#palette ConnectWorkspace#palette}.

---

###### `typography`<sup>Optional</sup> <a name="typography" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.putLight.parameter.typography"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightTypography">ConnectWorkspaceThemeLightTypography</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_workspace#typography ConnectWorkspace#typography}.

---

##### `reset_dark` <a name="reset_dark" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.resetDark"></a>

```python
def reset_dark() -> None
```

##### `reset_light` <a name="reset_light" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.resetLight"></a>

```python
def reset_light() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.property.dark">dark</a></code> | <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference">ConnectWorkspaceThemeDarkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.property.light">light</a></code> | <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference">ConnectWorkspaceThemeLightOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.property.darkInput">dark_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDark">ConnectWorkspaceThemeDark</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.property.lightInput">light_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLight">ConnectWorkspaceThemeLight</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTheme">ConnectWorkspaceTheme</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dark`<sup>Required</sup> <a name="dark" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.property.dark"></a>

```python
dark: ConnectWorkspaceThemeDarkOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDarkOutputReference">ConnectWorkspaceThemeDarkOutputReference</a>

---

##### `light`<sup>Required</sup> <a name="light" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.property.light"></a>

```python
light: ConnectWorkspaceThemeLightOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLightOutputReference">ConnectWorkspaceThemeLightOutputReference</a>

---

##### `dark_input`<sup>Optional</sup> <a name="dark_input" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.property.darkInput"></a>

```python
dark_input: IResolvable | ConnectWorkspaceThemeDark
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeDark">ConnectWorkspaceThemeDark</a>

---

##### `light_input`<sup>Optional</sup> <a name="light_input" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.property.lightInput"></a>

```python
light_input: IResolvable | ConnectWorkspaceThemeLight
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeLight">ConnectWorkspaceThemeLight</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceThemeOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ConnectWorkspaceTheme
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectWorkspace.ConnectWorkspaceTheme">ConnectWorkspaceTheme</a>

---



