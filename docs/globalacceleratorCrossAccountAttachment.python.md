# `globalacceleratorCrossAccountAttachment` Submodule <a name="`globalacceleratorCrossAccountAttachment` Submodule" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GlobalacceleratorCrossAccountAttachment <a name="GlobalacceleratorCrossAccountAttachment" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/globalaccelerator_cross_account_attachment awscc_globalaccelerator_cross_account_attachment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.Initializer"></a>

```python
from cdktn_provider_awscc import globalaccelerator_cross_account_attachment

globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment(
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
  principals: typing.List[str] = None,
  resources: IResolvable | typing.List[GlobalacceleratorCrossAccountAttachmentResources] = None,
  tags: IResolvable | typing.List[GlobalacceleratorCrossAccountAttachmentTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.Initializer.parameter.name">name</a></code> | <code>str</code> | The Friendly identifier of the attachment. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.Initializer.parameter.principals">principals</a></code> | <code>typing.List[str]</code> | Principals to share the resources with. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.Initializer.parameter.resources">resources</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResources">GlobalacceleratorCrossAccountAttachmentResources</a>]</code> | Resources shared using the attachment. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTags">GlobalacceleratorCrossAccountAttachmentTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/globalaccelerator_cross_account_attachment#tags GlobalacceleratorCrossAccountAttachment#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.Initializer.parameter.name"></a>

- *Type:* str

The Friendly identifier of the attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/globalaccelerator_cross_account_attachment#name GlobalacceleratorCrossAccountAttachment#name}

---

##### `principals`<sup>Optional</sup> <a name="principals" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.Initializer.parameter.principals"></a>

- *Type:* typing.List[str]

Principals to share the resources with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/globalaccelerator_cross_account_attachment#principals GlobalacceleratorCrossAccountAttachment#principals}

---

##### `resources`<sup>Optional</sup> <a name="resources" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.Initializer.parameter.resources"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResources">GlobalacceleratorCrossAccountAttachmentResources</a>]

Resources shared using the attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/globalaccelerator_cross_account_attachment#resources GlobalacceleratorCrossAccountAttachment#resources}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTags">GlobalacceleratorCrossAccountAttachmentTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/globalaccelerator_cross_account_attachment#tags GlobalacceleratorCrossAccountAttachment#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.putResources">put_resources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.resetPrincipals">reset_principals</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.resetResources">reset_resources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_resources` <a name="put_resources" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.putResources"></a>

```python
def put_resources(
  value: IResolvable | typing.List[GlobalacceleratorCrossAccountAttachmentResources]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.putResources.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResources">GlobalacceleratorCrossAccountAttachmentResources</a>]

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[GlobalacceleratorCrossAccountAttachmentTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTags">GlobalacceleratorCrossAccountAttachmentTags</a>]

---

##### `reset_principals` <a name="reset_principals" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.resetPrincipals"></a>

```python
def reset_principals() -> None
```

##### `reset_resources` <a name="reset_resources" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.resetResources"></a>

```python
def reset_resources() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GlobalacceleratorCrossAccountAttachment resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.isConstruct"></a>

```python
from cdktn_provider_awscc import globalaccelerator_cross_account_attachment

globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.isTerraformElement"></a>

```python
from cdktn_provider_awscc import globalaccelerator_cross_account_attachment

globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.isTerraformResource"></a>

```python
from cdktn_provider_awscc import globalaccelerator_cross_account_attachment

globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import globalaccelerator_cross_account_attachment

globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GlobalacceleratorCrossAccountAttachment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GlobalacceleratorCrossAccountAttachment to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GlobalacceleratorCrossAccountAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/globalaccelerator_cross_account_attachment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GlobalacceleratorCrossAccountAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.attachmentArn">attachment_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.resources">resources</a></code> | <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesList">GlobalacceleratorCrossAccountAttachmentResourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsList">GlobalacceleratorCrossAccountAttachmentTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.principalsInput">principals_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.resourcesInput">resources_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResources">GlobalacceleratorCrossAccountAttachmentResources</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTags">GlobalacceleratorCrossAccountAttachmentTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.principals">principals</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `attachment_arn`<sup>Required</sup> <a name="attachment_arn" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.attachmentArn"></a>

```python
attachment_arn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.resources"></a>

```python
resources: GlobalacceleratorCrossAccountAttachmentResourcesList
```

- *Type:* <a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesList">GlobalacceleratorCrossAccountAttachmentResourcesList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.tags"></a>

```python
tags: GlobalacceleratorCrossAccountAttachmentTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsList">GlobalacceleratorCrossAccountAttachmentTagsList</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `principals_input`<sup>Optional</sup> <a name="principals_input" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.principalsInput"></a>

```python
principals_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `resources_input`<sup>Optional</sup> <a name="resources_input" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.resourcesInput"></a>

```python
resources_input: IResolvable | typing.List[GlobalacceleratorCrossAccountAttachmentResources]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResources">GlobalacceleratorCrossAccountAttachmentResources</a>]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[GlobalacceleratorCrossAccountAttachmentTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTags">GlobalacceleratorCrossAccountAttachmentTags</a>]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `principals`<sup>Required</sup> <a name="principals" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.principals"></a>

```python
principals: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GlobalacceleratorCrossAccountAttachmentConfig <a name="GlobalacceleratorCrossAccountAttachmentConfig" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentConfig.Initializer"></a>

```python
from cdktn_provider_awscc import globalaccelerator_cross_account_attachment

globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  principals: typing.List[str] = None,
  resources: IResolvable | typing.List[GlobalacceleratorCrossAccountAttachmentResources] = None,
  tags: IResolvable | typing.List[GlobalacceleratorCrossAccountAttachmentTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentConfig.property.name">name</a></code> | <code>str</code> | The Friendly identifier of the attachment. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentConfig.property.principals">principals</a></code> | <code>typing.List[str]</code> | Principals to share the resources with. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentConfig.property.resources">resources</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResources">GlobalacceleratorCrossAccountAttachmentResources</a>]</code> | Resources shared using the attachment. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTags">GlobalacceleratorCrossAccountAttachmentTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/globalaccelerator_cross_account_attachment#tags GlobalacceleratorCrossAccountAttachment#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The Friendly identifier of the attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/globalaccelerator_cross_account_attachment#name GlobalacceleratorCrossAccountAttachment#name}

---

##### `principals`<sup>Optional</sup> <a name="principals" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentConfig.property.principals"></a>

```python
principals: typing.List[str]
```

- *Type:* typing.List[str]

Principals to share the resources with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/globalaccelerator_cross_account_attachment#principals GlobalacceleratorCrossAccountAttachment#principals}

---

##### `resources`<sup>Optional</sup> <a name="resources" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentConfig.property.resources"></a>

```python
resources: IResolvable | typing.List[GlobalacceleratorCrossAccountAttachmentResources]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResources">GlobalacceleratorCrossAccountAttachmentResources</a>]

Resources shared using the attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/globalaccelerator_cross_account_attachment#resources GlobalacceleratorCrossAccountAttachment#resources}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[GlobalacceleratorCrossAccountAttachmentTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTags">GlobalacceleratorCrossAccountAttachmentTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/globalaccelerator_cross_account_attachment#tags GlobalacceleratorCrossAccountAttachment#tags}.

---

### GlobalacceleratorCrossAccountAttachmentResources <a name="GlobalacceleratorCrossAccountAttachmentResources" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResources.Initializer"></a>

```python
from cdktn_provider_awscc import globalaccelerator_cross_account_attachment

globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResources(
  cidr: str = None,
  endpoint_id: str = None,
  region: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResources.property.cidr">cidr</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/globalaccelerator_cross_account_attachment#cidr GlobalacceleratorCrossAccountAttachment#cidr}. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResources.property.endpointId">endpoint_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/globalaccelerator_cross_account_attachment#endpoint_id GlobalacceleratorCrossAccountAttachment#endpoint_id}. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResources.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/globalaccelerator_cross_account_attachment#region GlobalacceleratorCrossAccountAttachment#region}. |

---

##### `cidr`<sup>Optional</sup> <a name="cidr" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResources.property.cidr"></a>

```python
cidr: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/globalaccelerator_cross_account_attachment#cidr GlobalacceleratorCrossAccountAttachment#cidr}.

---

##### `endpoint_id`<sup>Optional</sup> <a name="endpoint_id" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResources.property.endpointId"></a>

```python
endpoint_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/globalaccelerator_cross_account_attachment#endpoint_id GlobalacceleratorCrossAccountAttachment#endpoint_id}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResources.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/globalaccelerator_cross_account_attachment#region GlobalacceleratorCrossAccountAttachment#region}.

---

### GlobalacceleratorCrossAccountAttachmentTags <a name="GlobalacceleratorCrossAccountAttachmentTags" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTags.Initializer"></a>

```python
from cdktn_provider_awscc import globalaccelerator_cross_account_attachment

globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTags.property.key">key</a></code> | <code>str</code> | Key of the tag. Value can be 1 to 127 characters. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTags.property.value">value</a></code> | <code>str</code> | Value for the tag. Value can be 1 to 255 characters. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTags.property.key"></a>

```python
key: str
```

- *Type:* str

Key of the tag. Value can be 1 to 127 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/globalaccelerator_cross_account_attachment#key GlobalacceleratorCrossAccountAttachment#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTags.property.value"></a>

```python
value: str
```

- *Type:* str

Value for the tag. Value can be 1 to 255 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/globalaccelerator_cross_account_attachment#value GlobalacceleratorCrossAccountAttachment#value}

---

## Classes <a name="Classes" id="Classes"></a>

### GlobalacceleratorCrossAccountAttachmentResourcesList <a name="GlobalacceleratorCrossAccountAttachmentResourcesList" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesList.Initializer"></a>

```python
from cdktn_provider_awscc import globalaccelerator_cross_account_attachment

globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GlobalacceleratorCrossAccountAttachmentResourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResources">GlobalacceleratorCrossAccountAttachmentResources</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GlobalacceleratorCrossAccountAttachmentResources]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResources">GlobalacceleratorCrossAccountAttachmentResources</a>]

---


### GlobalacceleratorCrossAccountAttachmentResourcesOutputReference <a name="GlobalacceleratorCrossAccountAttachmentResourcesOutputReference" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import globalaccelerator_cross_account_attachment

globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.resetCidr">reset_cidr</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.resetEndpointId">reset_endpoint_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.resetRegion">reset_region</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cidr` <a name="reset_cidr" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.resetCidr"></a>

```python
def reset_cidr() -> None
```

##### `reset_endpoint_id` <a name="reset_endpoint_id" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.resetEndpointId"></a>

```python
def reset_endpoint_id() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.resetRegion"></a>

```python
def reset_region() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.property.cidrInput">cidr_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.property.endpointIdInput">endpoint_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.property.cidr">cidr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.property.endpointId">endpoint_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResources">GlobalacceleratorCrossAccountAttachmentResources</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cidr_input`<sup>Optional</sup> <a name="cidr_input" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.property.cidrInput"></a>

```python
cidr_input: str
```

- *Type:* str

---

##### `endpoint_id_input`<sup>Optional</sup> <a name="endpoint_id_input" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.property.endpointIdInput"></a>

```python
endpoint_id_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.property.cidr"></a>

```python
cidr: str
```

- *Type:* str

---

##### `endpoint_id`<sup>Required</sup> <a name="endpoint_id" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.property.endpointId"></a>

```python
endpoint_id: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourcesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GlobalacceleratorCrossAccountAttachmentResources
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResources">GlobalacceleratorCrossAccountAttachmentResources</a>

---


### GlobalacceleratorCrossAccountAttachmentTagsList <a name="GlobalacceleratorCrossAccountAttachmentTagsList" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import globalaccelerator_cross_account_attachment

globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GlobalacceleratorCrossAccountAttachmentTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTags">GlobalacceleratorCrossAccountAttachmentTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GlobalacceleratorCrossAccountAttachmentTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTags">GlobalacceleratorCrossAccountAttachmentTags</a>]

---


### GlobalacceleratorCrossAccountAttachmentTagsOutputReference <a name="GlobalacceleratorCrossAccountAttachmentTagsOutputReference" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import globalaccelerator_cross_account_attachment

globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTags">GlobalacceleratorCrossAccountAttachmentTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GlobalacceleratorCrossAccountAttachmentTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentTags">GlobalacceleratorCrossAccountAttachmentTags</a>

---



