# `appconfigExtension` Submodule <a name="`appconfigExtension` Submodule" id="@cdktn/provider-awscc.appconfigExtension"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppconfigExtension <a name="AppconfigExtension" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtension"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_extension awscc_appconfig_extension}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.Initializer"></a>

```python
from cdktn_provider_awscc import appconfig_extension

appconfigExtension.AppconfigExtension(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  actions: IResolvable | typing.Mapping[AppconfigExtensionActions],
  name: str,
  description: str = None,
  latest_version_number: typing.Union[int, float] = None,
  parameters: IResolvable | typing.Mapping[AppconfigExtensionParameters] = None,
  tags: IResolvable | typing.List[AppconfigExtensionTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.Initializer.parameter.actions">actions</a></code> | <code>cdktn.IResolvable \| typing.Mapping[<a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionActions">AppconfigExtensionActions</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_extension#actions AppconfigExtension#actions}. |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the extension. |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.Initializer.parameter.description">description</a></code> | <code>str</code> | Description of the extension. |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.Initializer.parameter.latestVersionNumber">latest_version_number</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_extension#latest_version_number AppconfigExtension#latest_version_number}. |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.Initializer.parameter.parameters">parameters</a></code> | <code>cdktn.IResolvable \| typing.Mapping[<a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionParameters">AppconfigExtensionParameters</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_extension#parameters AppconfigExtension#parameters}. |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionTags">AppconfigExtensionTags</a>]</code> | An array of key-value tags to apply to this resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.Initializer.parameter.actions"></a>

- *Type:* cdktn.IResolvable | typing.Mapping[<a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionActions">AppconfigExtensionActions</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_extension#actions AppconfigExtension#actions}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.Initializer.parameter.name"></a>

- *Type:* str

Name of the extension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_extension#name AppconfigExtension#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.Initializer.parameter.description"></a>

- *Type:* str

Description of the extension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_extension#description AppconfigExtension#description}

---

##### `latest_version_number`<sup>Optional</sup> <a name="latest_version_number" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.Initializer.parameter.latestVersionNumber"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_extension#latest_version_number AppconfigExtension#latest_version_number}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.Initializer.parameter.parameters"></a>

- *Type:* cdktn.IResolvable | typing.Mapping[<a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionParameters">AppconfigExtensionParameters</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_extension#parameters AppconfigExtension#parameters}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionTags">AppconfigExtensionTags</a>]

An array of key-value tags to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_extension#tags AppconfigExtension#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.putActions">put_actions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.putParameters">put_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.resetLatestVersionNumber">reset_latest_version_number</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.resetParameters">reset_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_actions` <a name="put_actions" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.putActions"></a>

```python
def put_actions(
  value: IResolvable | typing.Mapping[AppconfigExtensionActions]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.putActions.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.Mapping[<a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionActions">AppconfigExtensionActions</a>]

---

##### `put_parameters` <a name="put_parameters" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.putParameters"></a>

```python
def put_parameters(
  value: IResolvable | typing.Mapping[AppconfigExtensionParameters]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.putParameters.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.Mapping[<a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionParameters">AppconfigExtensionParameters</a>]

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[AppconfigExtensionTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionTags">AppconfigExtensionTags</a>]

---

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_latest_version_number` <a name="reset_latest_version_number" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.resetLatestVersionNumber"></a>

```python
def reset_latest_version_number() -> None
```

##### `reset_parameters` <a name="reset_parameters" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.resetParameters"></a>

```python
def reset_parameters() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a AppconfigExtension resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.isConstruct"></a>

```python
from cdktn_provider_awscc import appconfig_extension

appconfigExtension.AppconfigExtension.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.isTerraformElement"></a>

```python
from cdktn_provider_awscc import appconfig_extension

appconfigExtension.AppconfigExtension.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.isTerraformResource"></a>

```python
from cdktn_provider_awscc import appconfig_extension

appconfigExtension.AppconfigExtension.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import appconfig_extension

appconfigExtension.AppconfigExtension.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a AppconfigExtension resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the AppconfigExtension to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing AppconfigExtension that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_extension#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the AppconfigExtension to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.property.actions">actions</a></code> | <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionActionsMap">AppconfigExtensionActionsMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.property.extensionId">extension_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.property.parameters">parameters</a></code> | <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionParametersMap">AppconfigExtensionParametersMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionTagsList">AppconfigExtensionTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.property.versionNumber">version_number</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.property.actionsInput">actions_input</a></code> | <code>cdktn.IResolvable \| typing.Mapping[<a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionActions">AppconfigExtensionActions</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.property.latestVersionNumberInput">latest_version_number_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.property.parametersInput">parameters_input</a></code> | <code>cdktn.IResolvable \| typing.Mapping[<a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionParameters">AppconfigExtensionParameters</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionTags">AppconfigExtensionTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.property.latestVersionNumber">latest_version_number</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.property.actions"></a>

```python
actions: AppconfigExtensionActionsMap
```

- *Type:* <a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionActionsMap">AppconfigExtensionActionsMap</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `extension_id`<sup>Required</sup> <a name="extension_id" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.property.extensionId"></a>

```python
extension_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.property.parameters"></a>

```python
parameters: AppconfigExtensionParametersMap
```

- *Type:* <a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionParametersMap">AppconfigExtensionParametersMap</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.property.tags"></a>

```python
tags: AppconfigExtensionTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionTagsList">AppconfigExtensionTagsList</a>

---

##### `version_number`<sup>Required</sup> <a name="version_number" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.property.versionNumber"></a>

```python
version_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `actions_input`<sup>Optional</sup> <a name="actions_input" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.property.actionsInput"></a>

```python
actions_input: IResolvable | typing.Mapping[AppconfigExtensionActions]
```

- *Type:* cdktn.IResolvable | typing.Mapping[<a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionActions">AppconfigExtensionActions</a>]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `latest_version_number_input`<sup>Optional</sup> <a name="latest_version_number_input" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.property.latestVersionNumberInput"></a>

```python
latest_version_number_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `parameters_input`<sup>Optional</sup> <a name="parameters_input" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.property.parametersInput"></a>

```python
parameters_input: IResolvable | typing.Mapping[AppconfigExtensionParameters]
```

- *Type:* cdktn.IResolvable | typing.Mapping[<a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionParameters">AppconfigExtensionParameters</a>]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[AppconfigExtensionTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionTags">AppconfigExtensionTags</a>]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `latest_version_number`<sup>Required</sup> <a name="latest_version_number" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.property.latestVersionNumber"></a>

```python
latest_version_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtension.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AppconfigExtensionActions <a name="AppconfigExtensionActions" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionActions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionActions.Initializer"></a>

```python
from cdktn_provider_awscc import appconfig_extension

appconfigExtension.AppconfigExtensionActions(
  description: str = None,
  name: str = None,
  role_arn: str = None,
  uri: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionActions.property.description">description</a></code> | <code>str</code> | The description of the extension Action. |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionActions.property.name">name</a></code> | <code>str</code> | The name of the extension action. |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionActions.property.roleArn">role_arn</a></code> | <code>str</code> | The ARN of the role for invoking the extension action. |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionActions.property.uri">uri</a></code> | <code>str</code> | The URI of the extension action. |

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionActions.property.description"></a>

```python
description: str
```

- *Type:* str

The description of the extension Action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_extension#description AppconfigExtension#description}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionActions.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the extension action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_extension#name AppconfigExtension#name}

---

##### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionActions.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

The ARN of the role for invoking the extension action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_extension#role_arn AppconfigExtension#role_arn}

---

##### `uri`<sup>Optional</sup> <a name="uri" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionActions.property.uri"></a>

```python
uri: str
```

- *Type:* str

The URI of the extension action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_extension#uri AppconfigExtension#uri}

---

### AppconfigExtensionConfig <a name="AppconfigExtensionConfig" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionConfig.Initializer"></a>

```python
from cdktn_provider_awscc import appconfig_extension

appconfigExtension.AppconfigExtensionConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  actions: IResolvable | typing.Mapping[AppconfigExtensionActions],
  name: str,
  description: str = None,
  latest_version_number: typing.Union[int, float] = None,
  parameters: IResolvable | typing.Mapping[AppconfigExtensionParameters] = None,
  tags: IResolvable | typing.List[AppconfigExtensionTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionConfig.property.actions">actions</a></code> | <code>cdktn.IResolvable \| typing.Mapping[<a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionActions">AppconfigExtensionActions</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_extension#actions AppconfigExtension#actions}. |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionConfig.property.name">name</a></code> | <code>str</code> | Name of the extension. |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionConfig.property.description">description</a></code> | <code>str</code> | Description of the extension. |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionConfig.property.latestVersionNumber">latest_version_number</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_extension#latest_version_number AppconfigExtension#latest_version_number}. |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionConfig.property.parameters">parameters</a></code> | <code>cdktn.IResolvable \| typing.Mapping[<a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionParameters">AppconfigExtensionParameters</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_extension#parameters AppconfigExtension#parameters}. |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionTags">AppconfigExtensionTags</a>]</code> | An array of key-value tags to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionConfig.property.actions"></a>

```python
actions: IResolvable | typing.Mapping[AppconfigExtensionActions]
```

- *Type:* cdktn.IResolvable | typing.Mapping[<a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionActions">AppconfigExtensionActions</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_extension#actions AppconfigExtension#actions}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the extension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_extension#name AppconfigExtension#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Description of the extension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_extension#description AppconfigExtension#description}

---

##### `latest_version_number`<sup>Optional</sup> <a name="latest_version_number" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionConfig.property.latestVersionNumber"></a>

```python
latest_version_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_extension#latest_version_number AppconfigExtension#latest_version_number}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionConfig.property.parameters"></a>

```python
parameters: IResolvable | typing.Mapping[AppconfigExtensionParameters]
```

- *Type:* cdktn.IResolvable | typing.Mapping[<a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionParameters">AppconfigExtensionParameters</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_extension#parameters AppconfigExtension#parameters}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[AppconfigExtensionTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionTags">AppconfigExtensionTags</a>]

An array of key-value tags to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_extension#tags AppconfigExtension#tags}

---

### AppconfigExtensionParameters <a name="AppconfigExtensionParameters" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionParameters.Initializer"></a>

```python
from cdktn_provider_awscc import appconfig_extension

appconfigExtension.AppconfigExtensionParameters(
  description: str = None,
  dynamic: bool | IResolvable = None,
  required: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionParameters.property.description">description</a></code> | <code>str</code> | The description of the extension Parameter. |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionParameters.property.dynamic">dynamic</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_extension#dynamic AppconfigExtension#dynamic}. |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionParameters.property.required">required</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_extension#required AppconfigExtension#required}. |

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionParameters.property.description"></a>

```python
description: str
```

- *Type:* str

The description of the extension Parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_extension#description AppconfigExtension#description}

---

##### `dynamic`<sup>Optional</sup> <a name="dynamic" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionParameters.property.dynamic"></a>

```python
dynamic: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_extension#dynamic AppconfigExtension#dynamic}.

---

##### `required`<sup>Optional</sup> <a name="required" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionParameters.property.required"></a>

```python
required: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_extension#required AppconfigExtension#required}.

---

### AppconfigExtensionTags <a name="AppconfigExtensionTags" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionTags.Initializer"></a>

```python
from cdktn_provider_awscc import appconfig_extension

appconfigExtension.AppconfigExtensionTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_extension#key AppconfigExtension#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_extension#value AppconfigExtension#value}

---

## Classes <a name="Classes" id="Classes"></a>

### AppconfigExtensionActionsMap <a name="AppconfigExtensionActionsMap" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionActionsMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionActionsMap.Initializer"></a>

```python
from cdktn_provider_awscc import appconfig_extension

appconfigExtension.AppconfigExtensionActionsMap(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionActionsMap.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionActionsMap.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionActionsMap.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionActionsMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionActionsMap.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionActionsMap.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionActionsMap.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionActionsMap.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionActionsMap.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionActionsMap.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionActionsMap.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionActionsMap.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionActionsMap.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionActionsMap.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionActionsMap.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionActionsMap.get"></a>

```python
def get(
  key: str
) -> AppconfigExtensionActionsOutputReference
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionActionsMap.get.parameter.key"></a>

- *Type:* str

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionActionsMap.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionActionsMap.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionActionsMap.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.Mapping[<a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionActions">AppconfigExtensionActions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionActionsMap.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionActionsMap.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionActionsMap.property.internalValue"></a>

```python
internal_value: IResolvable | typing.Mapping[AppconfigExtensionActions]
```

- *Type:* cdktn.IResolvable | typing.Mapping[<a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionActions">AppconfigExtensionActions</a>]

---


### AppconfigExtensionActionsOutputReference <a name="AppconfigExtensionActionsOutputReference" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionActionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import appconfig_extension

appconfigExtension.AppconfigExtensionActionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_key: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionActionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionActionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionActionsOutputReference.Initializer.parameter.complexObjectKey">complex_object_key</a></code> | <code>str</code> | the key of this item in the map. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_key`<sup>Required</sup> <a name="complex_object_key" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionActionsOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* str

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionActionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionActionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionActionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionActionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionActionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionActionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionActionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionActionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionActionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionActionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionActionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionActionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionActionsOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionActionsOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionActionsOutputReference.resetRoleArn">reset_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionActionsOutputReference.resetUri">reset_uri</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionActionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionActionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionActionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionActionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionActionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionActionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionActionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionActionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionActionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionActionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionActionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionActionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionActionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionActionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionActionsOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionActionsOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_role_arn` <a name="reset_role_arn" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionActionsOutputReference.resetRoleArn"></a>

```python
def reset_role_arn() -> None
```

##### `reset_uri` <a name="reset_uri" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionActionsOutputReference.resetUri"></a>

```python
def reset_uri() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionActionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionActionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionActionsOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionActionsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionActionsOutputReference.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionActionsOutputReference.property.uriInput">uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionActionsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionActionsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionActionsOutputReference.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionActionsOutputReference.property.uri">uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionActionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionActions">AppconfigExtensionActions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionActionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionActionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionActionsOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionActionsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionActionsOutputReference.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `uri_input`<sup>Optional</sup> <a name="uri_input" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionActionsOutputReference.property.uriInput"></a>

```python
uri_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionActionsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionActionsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionActionsOutputReference.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionActionsOutputReference.property.uri"></a>

```python
uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionActionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AppconfigExtensionActions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionActions">AppconfigExtensionActions</a>

---


### AppconfigExtensionParametersMap <a name="AppconfigExtensionParametersMap" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionParametersMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionParametersMap.Initializer"></a>

```python
from cdktn_provider_awscc import appconfig_extension

appconfigExtension.AppconfigExtensionParametersMap(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionParametersMap.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionParametersMap.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionParametersMap.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionParametersMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionParametersMap.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionParametersMap.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionParametersMap.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionParametersMap.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionParametersMap.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionParametersMap.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionParametersMap.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionParametersMap.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionParametersMap.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionParametersMap.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionParametersMap.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionParametersMap.get"></a>

```python
def get(
  key: str
) -> AppconfigExtensionParametersOutputReference
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionParametersMap.get.parameter.key"></a>

- *Type:* str

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionParametersMap.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionParametersMap.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionParametersMap.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.Mapping[<a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionParameters">AppconfigExtensionParameters</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionParametersMap.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionParametersMap.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionParametersMap.property.internalValue"></a>

```python
internal_value: IResolvable | typing.Mapping[AppconfigExtensionParameters]
```

- *Type:* cdktn.IResolvable | typing.Mapping[<a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionParameters">AppconfigExtensionParameters</a>]

---


### AppconfigExtensionParametersOutputReference <a name="AppconfigExtensionParametersOutputReference" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import appconfig_extension

appconfigExtension.AppconfigExtensionParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_key: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionParametersOutputReference.Initializer.parameter.complexObjectKey">complex_object_key</a></code> | <code>str</code> | the key of this item in the map. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_key`<sup>Required</sup> <a name="complex_object_key" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionParametersOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* str

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionParametersOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionParametersOutputReference.resetDynamic">reset_dynamic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionParametersOutputReference.resetRequired">reset_required</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionParametersOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_dynamic` <a name="reset_dynamic" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionParametersOutputReference.resetDynamic"></a>

```python
def reset_dynamic() -> None
```

##### `reset_required` <a name="reset_required" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionParametersOutputReference.resetRequired"></a>

```python
def reset_required() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionParametersOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionParametersOutputReference.property.dynamicInput">dynamic_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionParametersOutputReference.property.requiredInput">required_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionParametersOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionParametersOutputReference.property.dynamic">dynamic</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionParametersOutputReference.property.required">required</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionParametersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionParameters">AppconfigExtensionParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionParametersOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `dynamic_input`<sup>Optional</sup> <a name="dynamic_input" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionParametersOutputReference.property.dynamicInput"></a>

```python
dynamic_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `required_input`<sup>Optional</sup> <a name="required_input" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionParametersOutputReference.property.requiredInput"></a>

```python
required_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionParametersOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `dynamic`<sup>Required</sup> <a name="dynamic" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionParametersOutputReference.property.dynamic"></a>

```python
dynamic: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `required`<sup>Required</sup> <a name="required" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionParametersOutputReference.property.required"></a>

```python
required: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionParametersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AppconfigExtensionParameters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionParameters">AppconfigExtensionParameters</a>

---


### AppconfigExtensionTagsList <a name="AppconfigExtensionTagsList" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import appconfig_extension

appconfigExtension.AppconfigExtensionTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AppconfigExtensionTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionTags">AppconfigExtensionTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[AppconfigExtensionTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionTags">AppconfigExtensionTags</a>]

---


### AppconfigExtensionTagsOutputReference <a name="AppconfigExtensionTagsOutputReference" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import appconfig_extension

appconfigExtension.AppconfigExtensionTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionTags">AppconfigExtensionTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AppconfigExtensionTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appconfigExtension.AppconfigExtensionTags">AppconfigExtensionTags</a>

---



