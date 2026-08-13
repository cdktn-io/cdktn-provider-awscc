# `pinpointInAppTemplate` Submodule <a name="`pinpointInAppTemplate` Submodule" id="@cdktn/provider-awscc.pinpointInAppTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PinpointInAppTemplate <a name="PinpointInAppTemplate" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/pinpoint_in_app_template awscc_pinpoint_in_app_template}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.Initializer"></a>

```python
from cdktn_provider_awscc import pinpoint_in_app_template

pinpointInAppTemplate.PinpointInAppTemplate(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  template_name: str,
  content: IResolvable | typing.List[PinpointInAppTemplateContent] = None,
  custom_config: str = None,
  layout: str = None,
  tags: str = None,
  template_description: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.Initializer.parameter.templateName">template_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/pinpoint_in_app_template#template_name PinpointInAppTemplate#template_name}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.Initializer.parameter.content">content</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContent">PinpointInAppTemplateContent</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/pinpoint_in_app_template#content PinpointInAppTemplate#content}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.Initializer.parameter.customConfig">custom_config</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/pinpoint_in_app_template#custom_config PinpointInAppTemplate#custom_config}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.Initializer.parameter.layout">layout</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/pinpoint_in_app_template#layout PinpointInAppTemplate#layout}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.Initializer.parameter.tags">tags</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/pinpoint_in_app_template#tags PinpointInAppTemplate#tags}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.Initializer.parameter.templateDescription">template_description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/pinpoint_in_app_template#template_description PinpointInAppTemplate#template_description}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `template_name`<sup>Required</sup> <a name="template_name" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.Initializer.parameter.templateName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/pinpoint_in_app_template#template_name PinpointInAppTemplate#template_name}.

---

##### `content`<sup>Optional</sup> <a name="content" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.Initializer.parameter.content"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContent">PinpointInAppTemplateContent</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/pinpoint_in_app_template#content PinpointInAppTemplate#content}.

---

##### `custom_config`<sup>Optional</sup> <a name="custom_config" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.Initializer.parameter.customConfig"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/pinpoint_in_app_template#custom_config PinpointInAppTemplate#custom_config}.

---

##### `layout`<sup>Optional</sup> <a name="layout" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.Initializer.parameter.layout"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/pinpoint_in_app_template#layout PinpointInAppTemplate#layout}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.Initializer.parameter.tags"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/pinpoint_in_app_template#tags PinpointInAppTemplate#tags}.

---

##### `template_description`<sup>Optional</sup> <a name="template_description" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.Initializer.parameter.templateDescription"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/pinpoint_in_app_template#template_description PinpointInAppTemplate#template_description}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.putContent">put_content</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.resetContent">reset_content</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.resetCustomConfig">reset_custom_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.resetLayout">reset_layout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.resetTemplateDescription">reset_template_description</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_content` <a name="put_content" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.putContent"></a>

```python
def put_content(
  value: IResolvable | typing.List[PinpointInAppTemplateContent]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.putContent.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContent">PinpointInAppTemplateContent</a>]

---

##### `reset_content` <a name="reset_content" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.resetContent"></a>

```python
def reset_content() -> None
```

##### `reset_custom_config` <a name="reset_custom_config" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.resetCustomConfig"></a>

```python
def reset_custom_config() -> None
```

##### `reset_layout` <a name="reset_layout" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.resetLayout"></a>

```python
def reset_layout() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_template_description` <a name="reset_template_description" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.resetTemplateDescription"></a>

```python
def reset_template_description() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a PinpointInAppTemplate resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.isConstruct"></a>

```python
from cdktn_provider_awscc import pinpoint_in_app_template

pinpointInAppTemplate.PinpointInAppTemplate.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.isTerraformElement"></a>

```python
from cdktn_provider_awscc import pinpoint_in_app_template

pinpointInAppTemplate.PinpointInAppTemplate.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.isTerraformResource"></a>

```python
from cdktn_provider_awscc import pinpoint_in_app_template

pinpointInAppTemplate.PinpointInAppTemplate.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import pinpoint_in_app_template

pinpointInAppTemplate.PinpointInAppTemplate.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a PinpointInAppTemplate resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the PinpointInAppTemplate to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing PinpointInAppTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/pinpoint_in_app_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the PinpointInAppTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.content">content</a></code> | <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentList">PinpointInAppTemplateContentList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.contentInput">content_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContent">PinpointInAppTemplateContent</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.customConfigInput">custom_config_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.layoutInput">layout_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.tagsInput">tags_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.templateDescriptionInput">template_description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.templateNameInput">template_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.customConfig">custom_config</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.layout">layout</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.tags">tags</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.templateDescription">template_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.templateName">template_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.content"></a>

```python
content: PinpointInAppTemplateContentList
```

- *Type:* <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentList">PinpointInAppTemplateContentList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `content_input`<sup>Optional</sup> <a name="content_input" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.contentInput"></a>

```python
content_input: IResolvable | typing.List[PinpointInAppTemplateContent]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContent">PinpointInAppTemplateContent</a>]

---

##### `custom_config_input`<sup>Optional</sup> <a name="custom_config_input" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.customConfigInput"></a>

```python
custom_config_input: str
```

- *Type:* str

---

##### `layout_input`<sup>Optional</sup> <a name="layout_input" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.layoutInput"></a>

```python
layout_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.tagsInput"></a>

```python
tags_input: str
```

- *Type:* str

---

##### `template_description_input`<sup>Optional</sup> <a name="template_description_input" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.templateDescriptionInput"></a>

```python
template_description_input: str
```

- *Type:* str

---

##### `template_name_input`<sup>Optional</sup> <a name="template_name_input" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.templateNameInput"></a>

```python
template_name_input: str
```

- *Type:* str

---

##### `custom_config`<sup>Required</sup> <a name="custom_config" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.customConfig"></a>

```python
custom_config: str
```

- *Type:* str

---

##### `layout`<sup>Required</sup> <a name="layout" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.layout"></a>

```python
layout: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.tags"></a>

```python
tags: str
```

- *Type:* str

---

##### `template_description`<sup>Required</sup> <a name="template_description" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.templateDescription"></a>

```python
template_description: str
```

- *Type:* str

---

##### `template_name`<sup>Required</sup> <a name="template_name" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.templateName"></a>

```python
template_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### PinpointInAppTemplateConfig <a name="PinpointInAppTemplateConfig" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateConfig.Initializer"></a>

```python
from cdktn_provider_awscc import pinpoint_in_app_template

pinpointInAppTemplate.PinpointInAppTemplateConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  template_name: str,
  content: IResolvable | typing.List[PinpointInAppTemplateContent] = None,
  custom_config: str = None,
  layout: str = None,
  tags: str = None,
  template_description: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateConfig.property.templateName">template_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/pinpoint_in_app_template#template_name PinpointInAppTemplate#template_name}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateConfig.property.content">content</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContent">PinpointInAppTemplateContent</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/pinpoint_in_app_template#content PinpointInAppTemplate#content}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateConfig.property.customConfig">custom_config</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/pinpoint_in_app_template#custom_config PinpointInAppTemplate#custom_config}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateConfig.property.layout">layout</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/pinpoint_in_app_template#layout PinpointInAppTemplate#layout}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateConfig.property.tags">tags</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/pinpoint_in_app_template#tags PinpointInAppTemplate#tags}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateConfig.property.templateDescription">template_description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/pinpoint_in_app_template#template_description PinpointInAppTemplate#template_description}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `template_name`<sup>Required</sup> <a name="template_name" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateConfig.property.templateName"></a>

```python
template_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/pinpoint_in_app_template#template_name PinpointInAppTemplate#template_name}.

---

##### `content`<sup>Optional</sup> <a name="content" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateConfig.property.content"></a>

```python
content: IResolvable | typing.List[PinpointInAppTemplateContent]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContent">PinpointInAppTemplateContent</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/pinpoint_in_app_template#content PinpointInAppTemplate#content}.

---

##### `custom_config`<sup>Optional</sup> <a name="custom_config" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateConfig.property.customConfig"></a>

```python
custom_config: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/pinpoint_in_app_template#custom_config PinpointInAppTemplate#custom_config}.

---

##### `layout`<sup>Optional</sup> <a name="layout" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateConfig.property.layout"></a>

```python
layout: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/pinpoint_in_app_template#layout PinpointInAppTemplate#layout}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateConfig.property.tags"></a>

```python
tags: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/pinpoint_in_app_template#tags PinpointInAppTemplate#tags}.

---

##### `template_description`<sup>Optional</sup> <a name="template_description" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateConfig.property.templateDescription"></a>

```python
template_description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/pinpoint_in_app_template#template_description PinpointInAppTemplate#template_description}.

---

### PinpointInAppTemplateContent <a name="PinpointInAppTemplateContent" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContent.Initializer"></a>

```python
from cdktn_provider_awscc import pinpoint_in_app_template

pinpointInAppTemplate.PinpointInAppTemplateContent(
  background_color: str = None,
  body_config: PinpointInAppTemplateContentBodyConfig = None,
  header_config: PinpointInAppTemplateContentHeaderConfig = None,
  image_url: str = None,
  primary_btn: PinpointInAppTemplateContentPrimaryBtn = None,
  secondary_btn: PinpointInAppTemplateContentSecondaryBtn = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContent.property.backgroundColor">background_color</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/pinpoint_in_app_template#background_color PinpointInAppTemplate#background_color}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContent.property.bodyConfig">body_config</a></code> | <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfig">PinpointInAppTemplateContentBodyConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/pinpoint_in_app_template#body_config PinpointInAppTemplate#body_config}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContent.property.headerConfig">header_config</a></code> | <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfig">PinpointInAppTemplateContentHeaderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/pinpoint_in_app_template#header_config PinpointInAppTemplate#header_config}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContent.property.imageUrl">image_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/pinpoint_in_app_template#image_url PinpointInAppTemplate#image_url}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContent.property.primaryBtn">primary_btn</a></code> | <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtn">PinpointInAppTemplateContentPrimaryBtn</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/pinpoint_in_app_template#primary_btn PinpointInAppTemplate#primary_btn}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContent.property.secondaryBtn">secondary_btn</a></code> | <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtn">PinpointInAppTemplateContentSecondaryBtn</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/pinpoint_in_app_template#secondary_btn PinpointInAppTemplate#secondary_btn}. |

---

##### `background_color`<sup>Optional</sup> <a name="background_color" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContent.property.backgroundColor"></a>

```python
background_color: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/pinpoint_in_app_template#background_color PinpointInAppTemplate#background_color}.

---

##### `body_config`<sup>Optional</sup> <a name="body_config" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContent.property.bodyConfig"></a>

```python
body_config: PinpointInAppTemplateContentBodyConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfig">PinpointInAppTemplateContentBodyConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/pinpoint_in_app_template#body_config PinpointInAppTemplate#body_config}.

---

##### `header_config`<sup>Optional</sup> <a name="header_config" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContent.property.headerConfig"></a>

```python
header_config: PinpointInAppTemplateContentHeaderConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfig">PinpointInAppTemplateContentHeaderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/pinpoint_in_app_template#header_config PinpointInAppTemplate#header_config}.

---

##### `image_url`<sup>Optional</sup> <a name="image_url" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContent.property.imageUrl"></a>

```python
image_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/pinpoint_in_app_template#image_url PinpointInAppTemplate#image_url}.

---

##### `primary_btn`<sup>Optional</sup> <a name="primary_btn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContent.property.primaryBtn"></a>

```python
primary_btn: PinpointInAppTemplateContentPrimaryBtn
```

- *Type:* <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtn">PinpointInAppTemplateContentPrimaryBtn</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/pinpoint_in_app_template#primary_btn PinpointInAppTemplate#primary_btn}.

---

##### `secondary_btn`<sup>Optional</sup> <a name="secondary_btn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContent.property.secondaryBtn"></a>

```python
secondary_btn: PinpointInAppTemplateContentSecondaryBtn
```

- *Type:* <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtn">PinpointInAppTemplateContentSecondaryBtn</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/pinpoint_in_app_template#secondary_btn PinpointInAppTemplate#secondary_btn}.

---

### PinpointInAppTemplateContentBodyConfig <a name="PinpointInAppTemplateContentBodyConfig" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfig.Initializer"></a>

```python
from cdktn_provider_awscc import pinpoint_in_app_template

pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfig(
  alignment: str = None,
  body: str = None,
  text_color: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfig.property.alignment">alignment</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/pinpoint_in_app_template#alignment PinpointInAppTemplate#alignment}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfig.property.body">body</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/pinpoint_in_app_template#body PinpointInAppTemplate#body}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfig.property.textColor">text_color</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/pinpoint_in_app_template#text_color PinpointInAppTemplate#text_color}. |

---

##### `alignment`<sup>Optional</sup> <a name="alignment" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfig.property.alignment"></a>

```python
alignment: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/pinpoint_in_app_template#alignment PinpointInAppTemplate#alignment}.

---

##### `body`<sup>Optional</sup> <a name="body" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfig.property.body"></a>

```python
body: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/pinpoint_in_app_template#body PinpointInAppTemplate#body}.

---

##### `text_color`<sup>Optional</sup> <a name="text_color" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfig.property.textColor"></a>

```python
text_color: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/pinpoint_in_app_template#text_color PinpointInAppTemplate#text_color}.

---

### PinpointInAppTemplateContentHeaderConfig <a name="PinpointInAppTemplateContentHeaderConfig" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfig.Initializer"></a>

```python
from cdktn_provider_awscc import pinpoint_in_app_template

pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfig(
  alignment: str = None,
  header: str = None,
  text_color: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfig.property.alignment">alignment</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/pinpoint_in_app_template#alignment PinpointInAppTemplate#alignment}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfig.property.header">header</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/pinpoint_in_app_template#header PinpointInAppTemplate#header}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfig.property.textColor">text_color</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/pinpoint_in_app_template#text_color PinpointInAppTemplate#text_color}. |

---

##### `alignment`<sup>Optional</sup> <a name="alignment" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfig.property.alignment"></a>

```python
alignment: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/pinpoint_in_app_template#alignment PinpointInAppTemplate#alignment}.

---

##### `header`<sup>Optional</sup> <a name="header" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfig.property.header"></a>

```python
header: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/pinpoint_in_app_template#header PinpointInAppTemplate#header}.

---

##### `text_color`<sup>Optional</sup> <a name="text_color" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfig.property.textColor"></a>

```python
text_color: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/pinpoint_in_app_template#text_color PinpointInAppTemplate#text_color}.

---

### PinpointInAppTemplateContentPrimaryBtn <a name="PinpointInAppTemplateContentPrimaryBtn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtn"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtn.Initializer"></a>

```python
from cdktn_provider_awscc import pinpoint_in_app_template

pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtn(
  android: PinpointInAppTemplateContentPrimaryBtnAndroid = None,
  default_config: PinpointInAppTemplateContentPrimaryBtnDefaultConfig = None,
  ios: PinpointInAppTemplateContentPrimaryBtnIos = None,
  web: PinpointInAppTemplateContentPrimaryBtnWeb = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtn.property.android">android</a></code> | <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroid">PinpointInAppTemplateContentPrimaryBtnAndroid</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/pinpoint_in_app_template#android PinpointInAppTemplate#android}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtn.property.defaultConfig">default_config</a></code> | <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfig">PinpointInAppTemplateContentPrimaryBtnDefaultConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/pinpoint_in_app_template#default_config PinpointInAppTemplate#default_config}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtn.property.ios">ios</a></code> | <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIos">PinpointInAppTemplateContentPrimaryBtnIos</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/pinpoint_in_app_template#ios PinpointInAppTemplate#ios}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtn.property.web">web</a></code> | <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWeb">PinpointInAppTemplateContentPrimaryBtnWeb</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/pinpoint_in_app_template#web PinpointInAppTemplate#web}. |

---

##### `android`<sup>Optional</sup> <a name="android" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtn.property.android"></a>

```python
android: PinpointInAppTemplateContentPrimaryBtnAndroid
```

- *Type:* <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroid">PinpointInAppTemplateContentPrimaryBtnAndroid</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/pinpoint_in_app_template#android PinpointInAppTemplate#android}.

---

##### `default_config`<sup>Optional</sup> <a name="default_config" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtn.property.defaultConfig"></a>

```python
default_config: PinpointInAppTemplateContentPrimaryBtnDefaultConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfig">PinpointInAppTemplateContentPrimaryBtnDefaultConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/pinpoint_in_app_template#default_config PinpointInAppTemplate#default_config}.

---

##### `ios`<sup>Optional</sup> <a name="ios" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtn.property.ios"></a>

```python
ios: PinpointInAppTemplateContentPrimaryBtnIos
```

- *Type:* <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIos">PinpointInAppTemplateContentPrimaryBtnIos</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/pinpoint_in_app_template#ios PinpointInAppTemplate#ios}.

---

##### `web`<sup>Optional</sup> <a name="web" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtn.property.web"></a>

```python
web: PinpointInAppTemplateContentPrimaryBtnWeb
```

- *Type:* <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWeb">PinpointInAppTemplateContentPrimaryBtnWeb</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/pinpoint_in_app_template#web PinpointInAppTemplate#web}.

---

### PinpointInAppTemplateContentPrimaryBtnAndroid <a name="PinpointInAppTemplateContentPrimaryBtnAndroid" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroid"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroid.Initializer"></a>

```python
from cdktn_provider_awscc import pinpoint_in_app_template

pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroid(
  button_action: str = None,
  link: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroid.property.buttonAction">button_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/pinpoint_in_app_template#button_action PinpointInAppTemplate#button_action}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroid.property.link">link</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/pinpoint_in_app_template#link PinpointInAppTemplate#link}. |

---

##### `button_action`<sup>Optional</sup> <a name="button_action" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroid.property.buttonAction"></a>

```python
button_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/pinpoint_in_app_template#button_action PinpointInAppTemplate#button_action}.

---

##### `link`<sup>Optional</sup> <a name="link" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroid.property.link"></a>

```python
link: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/pinpoint_in_app_template#link PinpointInAppTemplate#link}.

---

### PinpointInAppTemplateContentPrimaryBtnDefaultConfig <a name="PinpointInAppTemplateContentPrimaryBtnDefaultConfig" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfig.Initializer"></a>

```python
from cdktn_provider_awscc import pinpoint_in_app_template

pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfig(
  background_color: str = None,
  border_radius: typing.Union[int, float] = None,
  button_action: str = None,
  link: str = None,
  text: str = None,
  text_color: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfig.property.backgroundColor">background_color</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/pinpoint_in_app_template#background_color PinpointInAppTemplate#background_color}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfig.property.borderRadius">border_radius</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/pinpoint_in_app_template#border_radius PinpointInAppTemplate#border_radius}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfig.property.buttonAction">button_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/pinpoint_in_app_template#button_action PinpointInAppTemplate#button_action}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfig.property.link">link</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/pinpoint_in_app_template#link PinpointInAppTemplate#link}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfig.property.text">text</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/pinpoint_in_app_template#text PinpointInAppTemplate#text}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfig.property.textColor">text_color</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/pinpoint_in_app_template#text_color PinpointInAppTemplate#text_color}. |

---

##### `background_color`<sup>Optional</sup> <a name="background_color" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfig.property.backgroundColor"></a>

```python
background_color: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/pinpoint_in_app_template#background_color PinpointInAppTemplate#background_color}.

---

##### `border_radius`<sup>Optional</sup> <a name="border_radius" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfig.property.borderRadius"></a>

```python
border_radius: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/pinpoint_in_app_template#border_radius PinpointInAppTemplate#border_radius}.

---

##### `button_action`<sup>Optional</sup> <a name="button_action" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfig.property.buttonAction"></a>

```python
button_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/pinpoint_in_app_template#button_action PinpointInAppTemplate#button_action}.

---

##### `link`<sup>Optional</sup> <a name="link" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfig.property.link"></a>

```python
link: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/pinpoint_in_app_template#link PinpointInAppTemplate#link}.

---

##### `text`<sup>Optional</sup> <a name="text" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfig.property.text"></a>

```python
text: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/pinpoint_in_app_template#text PinpointInAppTemplate#text}.

---

##### `text_color`<sup>Optional</sup> <a name="text_color" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfig.property.textColor"></a>

```python
text_color: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/pinpoint_in_app_template#text_color PinpointInAppTemplate#text_color}.

---

### PinpointInAppTemplateContentPrimaryBtnIos <a name="PinpointInAppTemplateContentPrimaryBtnIos" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIos"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIos.Initializer"></a>

```python
from cdktn_provider_awscc import pinpoint_in_app_template

pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIos(
  button_action: str = None,
  link: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIos.property.buttonAction">button_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/pinpoint_in_app_template#button_action PinpointInAppTemplate#button_action}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIos.property.link">link</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/pinpoint_in_app_template#link PinpointInAppTemplate#link}. |

---

##### `button_action`<sup>Optional</sup> <a name="button_action" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIos.property.buttonAction"></a>

```python
button_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/pinpoint_in_app_template#button_action PinpointInAppTemplate#button_action}.

---

##### `link`<sup>Optional</sup> <a name="link" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIos.property.link"></a>

```python
link: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/pinpoint_in_app_template#link PinpointInAppTemplate#link}.

---

### PinpointInAppTemplateContentPrimaryBtnWeb <a name="PinpointInAppTemplateContentPrimaryBtnWeb" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWeb"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWeb.Initializer"></a>

```python
from cdktn_provider_awscc import pinpoint_in_app_template

pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWeb(
  button_action: str = None,
  link: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWeb.property.buttonAction">button_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/pinpoint_in_app_template#button_action PinpointInAppTemplate#button_action}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWeb.property.link">link</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/pinpoint_in_app_template#link PinpointInAppTemplate#link}. |

---

##### `button_action`<sup>Optional</sup> <a name="button_action" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWeb.property.buttonAction"></a>

```python
button_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/pinpoint_in_app_template#button_action PinpointInAppTemplate#button_action}.

---

##### `link`<sup>Optional</sup> <a name="link" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWeb.property.link"></a>

```python
link: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/pinpoint_in_app_template#link PinpointInAppTemplate#link}.

---

### PinpointInAppTemplateContentSecondaryBtn <a name="PinpointInAppTemplateContentSecondaryBtn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtn"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtn.Initializer"></a>

```python
from cdktn_provider_awscc import pinpoint_in_app_template

pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtn(
  android: PinpointInAppTemplateContentSecondaryBtnAndroid = None,
  default_config: PinpointInAppTemplateContentSecondaryBtnDefaultConfig = None,
  ios: PinpointInAppTemplateContentSecondaryBtnIos = None,
  web: PinpointInAppTemplateContentSecondaryBtnWeb = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtn.property.android">android</a></code> | <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroid">PinpointInAppTemplateContentSecondaryBtnAndroid</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/pinpoint_in_app_template#android PinpointInAppTemplate#android}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtn.property.defaultConfig">default_config</a></code> | <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfig">PinpointInAppTemplateContentSecondaryBtnDefaultConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/pinpoint_in_app_template#default_config PinpointInAppTemplate#default_config}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtn.property.ios">ios</a></code> | <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIos">PinpointInAppTemplateContentSecondaryBtnIos</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/pinpoint_in_app_template#ios PinpointInAppTemplate#ios}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtn.property.web">web</a></code> | <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWeb">PinpointInAppTemplateContentSecondaryBtnWeb</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/pinpoint_in_app_template#web PinpointInAppTemplate#web}. |

---

##### `android`<sup>Optional</sup> <a name="android" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtn.property.android"></a>

```python
android: PinpointInAppTemplateContentSecondaryBtnAndroid
```

- *Type:* <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroid">PinpointInAppTemplateContentSecondaryBtnAndroid</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/pinpoint_in_app_template#android PinpointInAppTemplate#android}.

---

##### `default_config`<sup>Optional</sup> <a name="default_config" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtn.property.defaultConfig"></a>

```python
default_config: PinpointInAppTemplateContentSecondaryBtnDefaultConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfig">PinpointInAppTemplateContentSecondaryBtnDefaultConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/pinpoint_in_app_template#default_config PinpointInAppTemplate#default_config}.

---

##### `ios`<sup>Optional</sup> <a name="ios" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtn.property.ios"></a>

```python
ios: PinpointInAppTemplateContentSecondaryBtnIos
```

- *Type:* <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIos">PinpointInAppTemplateContentSecondaryBtnIos</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/pinpoint_in_app_template#ios PinpointInAppTemplate#ios}.

---

##### `web`<sup>Optional</sup> <a name="web" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtn.property.web"></a>

```python
web: PinpointInAppTemplateContentSecondaryBtnWeb
```

- *Type:* <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWeb">PinpointInAppTemplateContentSecondaryBtnWeb</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/pinpoint_in_app_template#web PinpointInAppTemplate#web}.

---

### PinpointInAppTemplateContentSecondaryBtnAndroid <a name="PinpointInAppTemplateContentSecondaryBtnAndroid" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroid"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroid.Initializer"></a>

```python
from cdktn_provider_awscc import pinpoint_in_app_template

pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroid(
  button_action: str = None,
  link: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroid.property.buttonAction">button_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/pinpoint_in_app_template#button_action PinpointInAppTemplate#button_action}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroid.property.link">link</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/pinpoint_in_app_template#link PinpointInAppTemplate#link}. |

---

##### `button_action`<sup>Optional</sup> <a name="button_action" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroid.property.buttonAction"></a>

```python
button_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/pinpoint_in_app_template#button_action PinpointInAppTemplate#button_action}.

---

##### `link`<sup>Optional</sup> <a name="link" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroid.property.link"></a>

```python
link: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/pinpoint_in_app_template#link PinpointInAppTemplate#link}.

---

### PinpointInAppTemplateContentSecondaryBtnDefaultConfig <a name="PinpointInAppTemplateContentSecondaryBtnDefaultConfig" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfig.Initializer"></a>

```python
from cdktn_provider_awscc import pinpoint_in_app_template

pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfig(
  background_color: str = None,
  border_radius: typing.Union[int, float] = None,
  button_action: str = None,
  link: str = None,
  text: str = None,
  text_color: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfig.property.backgroundColor">background_color</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/pinpoint_in_app_template#background_color PinpointInAppTemplate#background_color}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfig.property.borderRadius">border_radius</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/pinpoint_in_app_template#border_radius PinpointInAppTemplate#border_radius}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfig.property.buttonAction">button_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/pinpoint_in_app_template#button_action PinpointInAppTemplate#button_action}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfig.property.link">link</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/pinpoint_in_app_template#link PinpointInAppTemplate#link}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfig.property.text">text</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/pinpoint_in_app_template#text PinpointInAppTemplate#text}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfig.property.textColor">text_color</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/pinpoint_in_app_template#text_color PinpointInAppTemplate#text_color}. |

---

##### `background_color`<sup>Optional</sup> <a name="background_color" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfig.property.backgroundColor"></a>

```python
background_color: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/pinpoint_in_app_template#background_color PinpointInAppTemplate#background_color}.

---

##### `border_radius`<sup>Optional</sup> <a name="border_radius" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfig.property.borderRadius"></a>

```python
border_radius: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/pinpoint_in_app_template#border_radius PinpointInAppTemplate#border_radius}.

---

##### `button_action`<sup>Optional</sup> <a name="button_action" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfig.property.buttonAction"></a>

```python
button_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/pinpoint_in_app_template#button_action PinpointInAppTemplate#button_action}.

---

##### `link`<sup>Optional</sup> <a name="link" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfig.property.link"></a>

```python
link: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/pinpoint_in_app_template#link PinpointInAppTemplate#link}.

---

##### `text`<sup>Optional</sup> <a name="text" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfig.property.text"></a>

```python
text: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/pinpoint_in_app_template#text PinpointInAppTemplate#text}.

---

##### `text_color`<sup>Optional</sup> <a name="text_color" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfig.property.textColor"></a>

```python
text_color: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/pinpoint_in_app_template#text_color PinpointInAppTemplate#text_color}.

---

### PinpointInAppTemplateContentSecondaryBtnIos <a name="PinpointInAppTemplateContentSecondaryBtnIos" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIos"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIos.Initializer"></a>

```python
from cdktn_provider_awscc import pinpoint_in_app_template

pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIos(
  button_action: str = None,
  link: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIos.property.buttonAction">button_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/pinpoint_in_app_template#button_action PinpointInAppTemplate#button_action}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIos.property.link">link</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/pinpoint_in_app_template#link PinpointInAppTemplate#link}. |

---

##### `button_action`<sup>Optional</sup> <a name="button_action" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIos.property.buttonAction"></a>

```python
button_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/pinpoint_in_app_template#button_action PinpointInAppTemplate#button_action}.

---

##### `link`<sup>Optional</sup> <a name="link" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIos.property.link"></a>

```python
link: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/pinpoint_in_app_template#link PinpointInAppTemplate#link}.

---

### PinpointInAppTemplateContentSecondaryBtnWeb <a name="PinpointInAppTemplateContentSecondaryBtnWeb" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWeb"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWeb.Initializer"></a>

```python
from cdktn_provider_awscc import pinpoint_in_app_template

pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWeb(
  button_action: str = None,
  link: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWeb.property.buttonAction">button_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/pinpoint_in_app_template#button_action PinpointInAppTemplate#button_action}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWeb.property.link">link</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/pinpoint_in_app_template#link PinpointInAppTemplate#link}. |

---

##### `button_action`<sup>Optional</sup> <a name="button_action" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWeb.property.buttonAction"></a>

```python
button_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/pinpoint_in_app_template#button_action PinpointInAppTemplate#button_action}.

---

##### `link`<sup>Optional</sup> <a name="link" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWeb.property.link"></a>

```python
link: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/pinpoint_in_app_template#link PinpointInAppTemplate#link}.

---

## Classes <a name="Classes" id="Classes"></a>

### PinpointInAppTemplateContentBodyConfigOutputReference <a name="PinpointInAppTemplateContentBodyConfigOutputReference" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import pinpoint_in_app_template

pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.resetAlignment">reset_alignment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.resetBody">reset_body</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.resetTextColor">reset_text_color</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_alignment` <a name="reset_alignment" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.resetAlignment"></a>

```python
def reset_alignment() -> None
```

##### `reset_body` <a name="reset_body" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.resetBody"></a>

```python
def reset_body() -> None
```

##### `reset_text_color` <a name="reset_text_color" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.resetTextColor"></a>

```python
def reset_text_color() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.property.alignmentInput">alignment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.property.bodyInput">body_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.property.textColorInput">text_color_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.property.alignment">alignment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.property.body">body</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.property.textColor">text_color</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfig">PinpointInAppTemplateContentBodyConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `alignment_input`<sup>Optional</sup> <a name="alignment_input" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.property.alignmentInput"></a>

```python
alignment_input: str
```

- *Type:* str

---

##### `body_input`<sup>Optional</sup> <a name="body_input" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.property.bodyInput"></a>

```python
body_input: str
```

- *Type:* str

---

##### `text_color_input`<sup>Optional</sup> <a name="text_color_input" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.property.textColorInput"></a>

```python
text_color_input: str
```

- *Type:* str

---

##### `alignment`<sup>Required</sup> <a name="alignment" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.property.alignment"></a>

```python
alignment: str
```

- *Type:* str

---

##### `body`<sup>Required</sup> <a name="body" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.property.body"></a>

```python
body: str
```

- *Type:* str

---

##### `text_color`<sup>Required</sup> <a name="text_color" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.property.textColor"></a>

```python
text_color: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | PinpointInAppTemplateContentBodyConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfig">PinpointInAppTemplateContentBodyConfig</a>

---


### PinpointInAppTemplateContentHeaderConfigOutputReference <a name="PinpointInAppTemplateContentHeaderConfigOutputReference" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import pinpoint_in_app_template

pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.resetAlignment">reset_alignment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.resetHeader">reset_header</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.resetTextColor">reset_text_color</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_alignment` <a name="reset_alignment" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.resetAlignment"></a>

```python
def reset_alignment() -> None
```

##### `reset_header` <a name="reset_header" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.resetHeader"></a>

```python
def reset_header() -> None
```

##### `reset_text_color` <a name="reset_text_color" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.resetTextColor"></a>

```python
def reset_text_color() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.property.alignmentInput">alignment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.property.headerInput">header_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.property.textColorInput">text_color_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.property.alignment">alignment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.property.header">header</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.property.textColor">text_color</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfig">PinpointInAppTemplateContentHeaderConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `alignment_input`<sup>Optional</sup> <a name="alignment_input" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.property.alignmentInput"></a>

```python
alignment_input: str
```

- *Type:* str

---

##### `header_input`<sup>Optional</sup> <a name="header_input" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.property.headerInput"></a>

```python
header_input: str
```

- *Type:* str

---

##### `text_color_input`<sup>Optional</sup> <a name="text_color_input" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.property.textColorInput"></a>

```python
text_color_input: str
```

- *Type:* str

---

##### `alignment`<sup>Required</sup> <a name="alignment" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.property.alignment"></a>

```python
alignment: str
```

- *Type:* str

---

##### `header`<sup>Required</sup> <a name="header" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.property.header"></a>

```python
header: str
```

- *Type:* str

---

##### `text_color`<sup>Required</sup> <a name="text_color" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.property.textColor"></a>

```python
text_color: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | PinpointInAppTemplateContentHeaderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfig">PinpointInAppTemplateContentHeaderConfig</a>

---


### PinpointInAppTemplateContentList <a name="PinpointInAppTemplateContentList" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentList.Initializer"></a>

```python
from cdktn_provider_awscc import pinpoint_in_app_template

pinpointInAppTemplate.PinpointInAppTemplateContentList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> PinpointInAppTemplateContentOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContent">PinpointInAppTemplateContent</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[PinpointInAppTemplateContent]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContent">PinpointInAppTemplateContent</a>]

---


### PinpointInAppTemplateContentOutputReference <a name="PinpointInAppTemplateContentOutputReference" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import pinpoint_in_app_template

pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.putBodyConfig">put_body_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.putHeaderConfig">put_header_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.putPrimaryBtn">put_primary_btn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.putSecondaryBtn">put_secondary_btn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.resetBackgroundColor">reset_background_color</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.resetBodyConfig">reset_body_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.resetHeaderConfig">reset_header_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.resetImageUrl">reset_image_url</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.resetPrimaryBtn">reset_primary_btn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.resetSecondaryBtn">reset_secondary_btn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_body_config` <a name="put_body_config" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.putBodyConfig"></a>

```python
def put_body_config(
  alignment: str = None,
  body: str = None,
  text_color: str = None
) -> None
```

###### `alignment`<sup>Optional</sup> <a name="alignment" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.putBodyConfig.parameter.alignment"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/pinpoint_in_app_template#alignment PinpointInAppTemplate#alignment}.

---

###### `body`<sup>Optional</sup> <a name="body" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.putBodyConfig.parameter.body"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/pinpoint_in_app_template#body PinpointInAppTemplate#body}.

---

###### `text_color`<sup>Optional</sup> <a name="text_color" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.putBodyConfig.parameter.textColor"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/pinpoint_in_app_template#text_color PinpointInAppTemplate#text_color}.

---

##### `put_header_config` <a name="put_header_config" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.putHeaderConfig"></a>

```python
def put_header_config(
  alignment: str = None,
  header: str = None,
  text_color: str = None
) -> None
```

###### `alignment`<sup>Optional</sup> <a name="alignment" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.putHeaderConfig.parameter.alignment"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/pinpoint_in_app_template#alignment PinpointInAppTemplate#alignment}.

---

###### `header`<sup>Optional</sup> <a name="header" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.putHeaderConfig.parameter.header"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/pinpoint_in_app_template#header PinpointInAppTemplate#header}.

---

###### `text_color`<sup>Optional</sup> <a name="text_color" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.putHeaderConfig.parameter.textColor"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/pinpoint_in_app_template#text_color PinpointInAppTemplate#text_color}.

---

##### `put_primary_btn` <a name="put_primary_btn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.putPrimaryBtn"></a>

```python
def put_primary_btn(
  android: PinpointInAppTemplateContentPrimaryBtnAndroid = None,
  default_config: PinpointInAppTemplateContentPrimaryBtnDefaultConfig = None,
  ios: PinpointInAppTemplateContentPrimaryBtnIos = None,
  web: PinpointInAppTemplateContentPrimaryBtnWeb = None
) -> None
```

###### `android`<sup>Optional</sup> <a name="android" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.putPrimaryBtn.parameter.android"></a>

- *Type:* <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroid">PinpointInAppTemplateContentPrimaryBtnAndroid</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/pinpoint_in_app_template#android PinpointInAppTemplate#android}.

---

###### `default_config`<sup>Optional</sup> <a name="default_config" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.putPrimaryBtn.parameter.defaultConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfig">PinpointInAppTemplateContentPrimaryBtnDefaultConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/pinpoint_in_app_template#default_config PinpointInAppTemplate#default_config}.

---

###### `ios`<sup>Optional</sup> <a name="ios" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.putPrimaryBtn.parameter.ios"></a>

- *Type:* <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIos">PinpointInAppTemplateContentPrimaryBtnIos</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/pinpoint_in_app_template#ios PinpointInAppTemplate#ios}.

---

###### `web`<sup>Optional</sup> <a name="web" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.putPrimaryBtn.parameter.web"></a>

- *Type:* <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWeb">PinpointInAppTemplateContentPrimaryBtnWeb</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/pinpoint_in_app_template#web PinpointInAppTemplate#web}.

---

##### `put_secondary_btn` <a name="put_secondary_btn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.putSecondaryBtn"></a>

```python
def put_secondary_btn(
  android: PinpointInAppTemplateContentSecondaryBtnAndroid = None,
  default_config: PinpointInAppTemplateContentSecondaryBtnDefaultConfig = None,
  ios: PinpointInAppTemplateContentSecondaryBtnIos = None,
  web: PinpointInAppTemplateContentSecondaryBtnWeb = None
) -> None
```

###### `android`<sup>Optional</sup> <a name="android" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.putSecondaryBtn.parameter.android"></a>

- *Type:* <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroid">PinpointInAppTemplateContentSecondaryBtnAndroid</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/pinpoint_in_app_template#android PinpointInAppTemplate#android}.

---

###### `default_config`<sup>Optional</sup> <a name="default_config" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.putSecondaryBtn.parameter.defaultConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfig">PinpointInAppTemplateContentSecondaryBtnDefaultConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/pinpoint_in_app_template#default_config PinpointInAppTemplate#default_config}.

---

###### `ios`<sup>Optional</sup> <a name="ios" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.putSecondaryBtn.parameter.ios"></a>

- *Type:* <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIos">PinpointInAppTemplateContentSecondaryBtnIos</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/pinpoint_in_app_template#ios PinpointInAppTemplate#ios}.

---

###### `web`<sup>Optional</sup> <a name="web" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.putSecondaryBtn.parameter.web"></a>

- *Type:* <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWeb">PinpointInAppTemplateContentSecondaryBtnWeb</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/pinpoint_in_app_template#web PinpointInAppTemplate#web}.

---

##### `reset_background_color` <a name="reset_background_color" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.resetBackgroundColor"></a>

```python
def reset_background_color() -> None
```

##### `reset_body_config` <a name="reset_body_config" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.resetBodyConfig"></a>

```python
def reset_body_config() -> None
```

##### `reset_header_config` <a name="reset_header_config" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.resetHeaderConfig"></a>

```python
def reset_header_config() -> None
```

##### `reset_image_url` <a name="reset_image_url" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.resetImageUrl"></a>

```python
def reset_image_url() -> None
```

##### `reset_primary_btn` <a name="reset_primary_btn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.resetPrimaryBtn"></a>

```python
def reset_primary_btn() -> None
```

##### `reset_secondary_btn` <a name="reset_secondary_btn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.resetSecondaryBtn"></a>

```python
def reset_secondary_btn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.property.bodyConfig">body_config</a></code> | <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference">PinpointInAppTemplateContentBodyConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.property.headerConfig">header_config</a></code> | <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference">PinpointInAppTemplateContentHeaderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.property.primaryBtn">primary_btn</a></code> | <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference">PinpointInAppTemplateContentPrimaryBtnOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.property.secondaryBtn">secondary_btn</a></code> | <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference">PinpointInAppTemplateContentSecondaryBtnOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.property.backgroundColorInput">background_color_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.property.bodyConfigInput">body_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfig">PinpointInAppTemplateContentBodyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.property.headerConfigInput">header_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfig">PinpointInAppTemplateContentHeaderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.property.imageUrlInput">image_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.property.primaryBtnInput">primary_btn_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtn">PinpointInAppTemplateContentPrimaryBtn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.property.secondaryBtnInput">secondary_btn_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtn">PinpointInAppTemplateContentSecondaryBtn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.property.backgroundColor">background_color</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.property.imageUrl">image_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContent">PinpointInAppTemplateContent</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `body_config`<sup>Required</sup> <a name="body_config" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.property.bodyConfig"></a>

```python
body_config: PinpointInAppTemplateContentBodyConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference">PinpointInAppTemplateContentBodyConfigOutputReference</a>

---

##### `header_config`<sup>Required</sup> <a name="header_config" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.property.headerConfig"></a>

```python
header_config: PinpointInAppTemplateContentHeaderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference">PinpointInAppTemplateContentHeaderConfigOutputReference</a>

---

##### `primary_btn`<sup>Required</sup> <a name="primary_btn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.property.primaryBtn"></a>

```python
primary_btn: PinpointInAppTemplateContentPrimaryBtnOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference">PinpointInAppTemplateContentPrimaryBtnOutputReference</a>

---

##### `secondary_btn`<sup>Required</sup> <a name="secondary_btn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.property.secondaryBtn"></a>

```python
secondary_btn: PinpointInAppTemplateContentSecondaryBtnOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference">PinpointInAppTemplateContentSecondaryBtnOutputReference</a>

---

##### `background_color_input`<sup>Optional</sup> <a name="background_color_input" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.property.backgroundColorInput"></a>

```python
background_color_input: str
```

- *Type:* str

---

##### `body_config_input`<sup>Optional</sup> <a name="body_config_input" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.property.bodyConfigInput"></a>

```python
body_config_input: IResolvable | PinpointInAppTemplateContentBodyConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfig">PinpointInAppTemplateContentBodyConfig</a>

---

##### `header_config_input`<sup>Optional</sup> <a name="header_config_input" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.property.headerConfigInput"></a>

```python
header_config_input: IResolvable | PinpointInAppTemplateContentHeaderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfig">PinpointInAppTemplateContentHeaderConfig</a>

---

##### `image_url_input`<sup>Optional</sup> <a name="image_url_input" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.property.imageUrlInput"></a>

```python
image_url_input: str
```

- *Type:* str

---

##### `primary_btn_input`<sup>Optional</sup> <a name="primary_btn_input" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.property.primaryBtnInput"></a>

```python
primary_btn_input: IResolvable | PinpointInAppTemplateContentPrimaryBtn
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtn">PinpointInAppTemplateContentPrimaryBtn</a>

---

##### `secondary_btn_input`<sup>Optional</sup> <a name="secondary_btn_input" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.property.secondaryBtnInput"></a>

```python
secondary_btn_input: IResolvable | PinpointInAppTemplateContentSecondaryBtn
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtn">PinpointInAppTemplateContentSecondaryBtn</a>

---

##### `background_color`<sup>Required</sup> <a name="background_color" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.property.backgroundColor"></a>

```python
background_color: str
```

- *Type:* str

---

##### `image_url`<sup>Required</sup> <a name="image_url" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.property.imageUrl"></a>

```python
image_url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | PinpointInAppTemplateContent
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContent">PinpointInAppTemplateContent</a>

---


### PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference <a name="PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import pinpoint_in_app_template

pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.resetButtonAction">reset_button_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.resetLink">reset_link</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_button_action` <a name="reset_button_action" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.resetButtonAction"></a>

```python
def reset_button_action() -> None
```

##### `reset_link` <a name="reset_link" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.resetLink"></a>

```python
def reset_link() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.property.buttonActionInput">button_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.property.linkInput">link_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.property.buttonAction">button_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.property.link">link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroid">PinpointInAppTemplateContentPrimaryBtnAndroid</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `button_action_input`<sup>Optional</sup> <a name="button_action_input" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.property.buttonActionInput"></a>

```python
button_action_input: str
```

- *Type:* str

---

##### `link_input`<sup>Optional</sup> <a name="link_input" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.property.linkInput"></a>

```python
link_input: str
```

- *Type:* str

---

##### `button_action`<sup>Required</sup> <a name="button_action" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.property.buttonAction"></a>

```python
button_action: str
```

- *Type:* str

---

##### `link`<sup>Required</sup> <a name="link" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.property.link"></a>

```python
link: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | PinpointInAppTemplateContentPrimaryBtnAndroid
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroid">PinpointInAppTemplateContentPrimaryBtnAndroid</a>

---


### PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference <a name="PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import pinpoint_in_app_template

pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.resetBackgroundColor">reset_background_color</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.resetBorderRadius">reset_border_radius</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.resetButtonAction">reset_button_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.resetLink">reset_link</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.resetText">reset_text</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.resetTextColor">reset_text_color</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_background_color` <a name="reset_background_color" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.resetBackgroundColor"></a>

```python
def reset_background_color() -> None
```

##### `reset_border_radius` <a name="reset_border_radius" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.resetBorderRadius"></a>

```python
def reset_border_radius() -> None
```

##### `reset_button_action` <a name="reset_button_action" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.resetButtonAction"></a>

```python
def reset_button_action() -> None
```

##### `reset_link` <a name="reset_link" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.resetLink"></a>

```python
def reset_link() -> None
```

##### `reset_text` <a name="reset_text" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.resetText"></a>

```python
def reset_text() -> None
```

##### `reset_text_color` <a name="reset_text_color" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.resetTextColor"></a>

```python
def reset_text_color() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.backgroundColorInput">background_color_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.borderRadiusInput">border_radius_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.buttonActionInput">button_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.linkInput">link_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.textColorInput">text_color_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.textInput">text_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.backgroundColor">background_color</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.borderRadius">border_radius</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.buttonAction">button_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.link">link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.text">text</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.textColor">text_color</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfig">PinpointInAppTemplateContentPrimaryBtnDefaultConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `background_color_input`<sup>Optional</sup> <a name="background_color_input" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.backgroundColorInput"></a>

```python
background_color_input: str
```

- *Type:* str

---

##### `border_radius_input`<sup>Optional</sup> <a name="border_radius_input" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.borderRadiusInput"></a>

```python
border_radius_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `button_action_input`<sup>Optional</sup> <a name="button_action_input" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.buttonActionInput"></a>

```python
button_action_input: str
```

- *Type:* str

---

##### `link_input`<sup>Optional</sup> <a name="link_input" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.linkInput"></a>

```python
link_input: str
```

- *Type:* str

---

##### `text_color_input`<sup>Optional</sup> <a name="text_color_input" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.textColorInput"></a>

```python
text_color_input: str
```

- *Type:* str

---

##### `text_input`<sup>Optional</sup> <a name="text_input" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.textInput"></a>

```python
text_input: str
```

- *Type:* str

---

##### `background_color`<sup>Required</sup> <a name="background_color" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.backgroundColor"></a>

```python
background_color: str
```

- *Type:* str

---

##### `border_radius`<sup>Required</sup> <a name="border_radius" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.borderRadius"></a>

```python
border_radius: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `button_action`<sup>Required</sup> <a name="button_action" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.buttonAction"></a>

```python
button_action: str
```

- *Type:* str

---

##### `link`<sup>Required</sup> <a name="link" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.link"></a>

```python
link: str
```

- *Type:* str

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.text"></a>

```python
text: str
```

- *Type:* str

---

##### `text_color`<sup>Required</sup> <a name="text_color" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.textColor"></a>

```python
text_color: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | PinpointInAppTemplateContentPrimaryBtnDefaultConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfig">PinpointInAppTemplateContentPrimaryBtnDefaultConfig</a>

---


### PinpointInAppTemplateContentPrimaryBtnIosOutputReference <a name="PinpointInAppTemplateContentPrimaryBtnIosOutputReference" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import pinpoint_in_app_template

pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.resetButtonAction">reset_button_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.resetLink">reset_link</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_button_action` <a name="reset_button_action" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.resetButtonAction"></a>

```python
def reset_button_action() -> None
```

##### `reset_link` <a name="reset_link" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.resetLink"></a>

```python
def reset_link() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.property.buttonActionInput">button_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.property.linkInput">link_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.property.buttonAction">button_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.property.link">link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIos">PinpointInAppTemplateContentPrimaryBtnIos</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `button_action_input`<sup>Optional</sup> <a name="button_action_input" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.property.buttonActionInput"></a>

```python
button_action_input: str
```

- *Type:* str

---

##### `link_input`<sup>Optional</sup> <a name="link_input" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.property.linkInput"></a>

```python
link_input: str
```

- *Type:* str

---

##### `button_action`<sup>Required</sup> <a name="button_action" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.property.buttonAction"></a>

```python
button_action: str
```

- *Type:* str

---

##### `link`<sup>Required</sup> <a name="link" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.property.link"></a>

```python
link: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | PinpointInAppTemplateContentPrimaryBtnIos
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIos">PinpointInAppTemplateContentPrimaryBtnIos</a>

---


### PinpointInAppTemplateContentPrimaryBtnOutputReference <a name="PinpointInAppTemplateContentPrimaryBtnOutputReference" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import pinpoint_in_app_template

pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.putAndroid">put_android</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.putDefaultConfig">put_default_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.putIos">put_ios</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.putWeb">put_web</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.resetAndroid">reset_android</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.resetDefaultConfig">reset_default_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.resetIos">reset_ios</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.resetWeb">reset_web</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_android` <a name="put_android" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.putAndroid"></a>

```python
def put_android(
  button_action: str = None,
  link: str = None
) -> None
```

###### `button_action`<sup>Optional</sup> <a name="button_action" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.putAndroid.parameter.buttonAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/pinpoint_in_app_template#button_action PinpointInAppTemplate#button_action}.

---

###### `link`<sup>Optional</sup> <a name="link" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.putAndroid.parameter.link"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/pinpoint_in_app_template#link PinpointInAppTemplate#link}.

---

##### `put_default_config` <a name="put_default_config" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.putDefaultConfig"></a>

```python
def put_default_config(
  background_color: str = None,
  border_radius: typing.Union[int, float] = None,
  button_action: str = None,
  link: str = None,
  text: str = None,
  text_color: str = None
) -> None
```

###### `background_color`<sup>Optional</sup> <a name="background_color" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.putDefaultConfig.parameter.backgroundColor"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/pinpoint_in_app_template#background_color PinpointInAppTemplate#background_color}.

---

###### `border_radius`<sup>Optional</sup> <a name="border_radius" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.putDefaultConfig.parameter.borderRadius"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/pinpoint_in_app_template#border_radius PinpointInAppTemplate#border_radius}.

---

###### `button_action`<sup>Optional</sup> <a name="button_action" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.putDefaultConfig.parameter.buttonAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/pinpoint_in_app_template#button_action PinpointInAppTemplate#button_action}.

---

###### `link`<sup>Optional</sup> <a name="link" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.putDefaultConfig.parameter.link"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/pinpoint_in_app_template#link PinpointInAppTemplate#link}.

---

###### `text`<sup>Optional</sup> <a name="text" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.putDefaultConfig.parameter.text"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/pinpoint_in_app_template#text PinpointInAppTemplate#text}.

---

###### `text_color`<sup>Optional</sup> <a name="text_color" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.putDefaultConfig.parameter.textColor"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/pinpoint_in_app_template#text_color PinpointInAppTemplate#text_color}.

---

##### `put_ios` <a name="put_ios" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.putIos"></a>

```python
def put_ios(
  button_action: str = None,
  link: str = None
) -> None
```

###### `button_action`<sup>Optional</sup> <a name="button_action" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.putIos.parameter.buttonAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/pinpoint_in_app_template#button_action PinpointInAppTemplate#button_action}.

---

###### `link`<sup>Optional</sup> <a name="link" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.putIos.parameter.link"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/pinpoint_in_app_template#link PinpointInAppTemplate#link}.

---

##### `put_web` <a name="put_web" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.putWeb"></a>

```python
def put_web(
  button_action: str = None,
  link: str = None
) -> None
```

###### `button_action`<sup>Optional</sup> <a name="button_action" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.putWeb.parameter.buttonAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/pinpoint_in_app_template#button_action PinpointInAppTemplate#button_action}.

---

###### `link`<sup>Optional</sup> <a name="link" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.putWeb.parameter.link"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/pinpoint_in_app_template#link PinpointInAppTemplate#link}.

---

##### `reset_android` <a name="reset_android" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.resetAndroid"></a>

```python
def reset_android() -> None
```

##### `reset_default_config` <a name="reset_default_config" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.resetDefaultConfig"></a>

```python
def reset_default_config() -> None
```

##### `reset_ios` <a name="reset_ios" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.resetIos"></a>

```python
def reset_ios() -> None
```

##### `reset_web` <a name="reset_web" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.resetWeb"></a>

```python
def reset_web() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.property.android">android</a></code> | <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference">PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.property.defaultConfig">default_config</a></code> | <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference">PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.property.ios">ios</a></code> | <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference">PinpointInAppTemplateContentPrimaryBtnIosOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.property.web">web</a></code> | <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference">PinpointInAppTemplateContentPrimaryBtnWebOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.property.androidInput">android_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroid">PinpointInAppTemplateContentPrimaryBtnAndroid</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.property.defaultConfigInput">default_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfig">PinpointInAppTemplateContentPrimaryBtnDefaultConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.property.iosInput">ios_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIos">PinpointInAppTemplateContentPrimaryBtnIos</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.property.webInput">web_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWeb">PinpointInAppTemplateContentPrimaryBtnWeb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtn">PinpointInAppTemplateContentPrimaryBtn</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `android`<sup>Required</sup> <a name="android" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.property.android"></a>

```python
android: PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference">PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference</a>

---

##### `default_config`<sup>Required</sup> <a name="default_config" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.property.defaultConfig"></a>

```python
default_config: PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference">PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference</a>

---

##### `ios`<sup>Required</sup> <a name="ios" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.property.ios"></a>

```python
ios: PinpointInAppTemplateContentPrimaryBtnIosOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference">PinpointInAppTemplateContentPrimaryBtnIosOutputReference</a>

---

##### `web`<sup>Required</sup> <a name="web" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.property.web"></a>

```python
web: PinpointInAppTemplateContentPrimaryBtnWebOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference">PinpointInAppTemplateContentPrimaryBtnWebOutputReference</a>

---

##### `android_input`<sup>Optional</sup> <a name="android_input" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.property.androidInput"></a>

```python
android_input: IResolvable | PinpointInAppTemplateContentPrimaryBtnAndroid
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroid">PinpointInAppTemplateContentPrimaryBtnAndroid</a>

---

##### `default_config_input`<sup>Optional</sup> <a name="default_config_input" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.property.defaultConfigInput"></a>

```python
default_config_input: IResolvable | PinpointInAppTemplateContentPrimaryBtnDefaultConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfig">PinpointInAppTemplateContentPrimaryBtnDefaultConfig</a>

---

##### `ios_input`<sup>Optional</sup> <a name="ios_input" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.property.iosInput"></a>

```python
ios_input: IResolvable | PinpointInAppTemplateContentPrimaryBtnIos
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIos">PinpointInAppTemplateContentPrimaryBtnIos</a>

---

##### `web_input`<sup>Optional</sup> <a name="web_input" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.property.webInput"></a>

```python
web_input: IResolvable | PinpointInAppTemplateContentPrimaryBtnWeb
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWeb">PinpointInAppTemplateContentPrimaryBtnWeb</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | PinpointInAppTemplateContentPrimaryBtn
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtn">PinpointInAppTemplateContentPrimaryBtn</a>

---


### PinpointInAppTemplateContentPrimaryBtnWebOutputReference <a name="PinpointInAppTemplateContentPrimaryBtnWebOutputReference" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import pinpoint_in_app_template

pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.resetButtonAction">reset_button_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.resetLink">reset_link</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_button_action` <a name="reset_button_action" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.resetButtonAction"></a>

```python
def reset_button_action() -> None
```

##### `reset_link` <a name="reset_link" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.resetLink"></a>

```python
def reset_link() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.property.buttonActionInput">button_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.property.linkInput">link_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.property.buttonAction">button_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.property.link">link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWeb">PinpointInAppTemplateContentPrimaryBtnWeb</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `button_action_input`<sup>Optional</sup> <a name="button_action_input" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.property.buttonActionInput"></a>

```python
button_action_input: str
```

- *Type:* str

---

##### `link_input`<sup>Optional</sup> <a name="link_input" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.property.linkInput"></a>

```python
link_input: str
```

- *Type:* str

---

##### `button_action`<sup>Required</sup> <a name="button_action" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.property.buttonAction"></a>

```python
button_action: str
```

- *Type:* str

---

##### `link`<sup>Required</sup> <a name="link" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.property.link"></a>

```python
link: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | PinpointInAppTemplateContentPrimaryBtnWeb
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWeb">PinpointInAppTemplateContentPrimaryBtnWeb</a>

---


### PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference <a name="PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import pinpoint_in_app_template

pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.resetButtonAction">reset_button_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.resetLink">reset_link</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_button_action` <a name="reset_button_action" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.resetButtonAction"></a>

```python
def reset_button_action() -> None
```

##### `reset_link` <a name="reset_link" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.resetLink"></a>

```python
def reset_link() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.property.buttonActionInput">button_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.property.linkInput">link_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.property.buttonAction">button_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.property.link">link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroid">PinpointInAppTemplateContentSecondaryBtnAndroid</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `button_action_input`<sup>Optional</sup> <a name="button_action_input" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.property.buttonActionInput"></a>

```python
button_action_input: str
```

- *Type:* str

---

##### `link_input`<sup>Optional</sup> <a name="link_input" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.property.linkInput"></a>

```python
link_input: str
```

- *Type:* str

---

##### `button_action`<sup>Required</sup> <a name="button_action" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.property.buttonAction"></a>

```python
button_action: str
```

- *Type:* str

---

##### `link`<sup>Required</sup> <a name="link" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.property.link"></a>

```python
link: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | PinpointInAppTemplateContentSecondaryBtnAndroid
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroid">PinpointInAppTemplateContentSecondaryBtnAndroid</a>

---


### PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference <a name="PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import pinpoint_in_app_template

pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.resetBackgroundColor">reset_background_color</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.resetBorderRadius">reset_border_radius</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.resetButtonAction">reset_button_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.resetLink">reset_link</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.resetText">reset_text</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.resetTextColor">reset_text_color</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_background_color` <a name="reset_background_color" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.resetBackgroundColor"></a>

```python
def reset_background_color() -> None
```

##### `reset_border_radius` <a name="reset_border_radius" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.resetBorderRadius"></a>

```python
def reset_border_radius() -> None
```

##### `reset_button_action` <a name="reset_button_action" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.resetButtonAction"></a>

```python
def reset_button_action() -> None
```

##### `reset_link` <a name="reset_link" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.resetLink"></a>

```python
def reset_link() -> None
```

##### `reset_text` <a name="reset_text" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.resetText"></a>

```python
def reset_text() -> None
```

##### `reset_text_color` <a name="reset_text_color" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.resetTextColor"></a>

```python
def reset_text_color() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.backgroundColorInput">background_color_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.borderRadiusInput">border_radius_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.buttonActionInput">button_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.linkInput">link_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.textColorInput">text_color_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.textInput">text_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.backgroundColor">background_color</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.borderRadius">border_radius</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.buttonAction">button_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.link">link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.text">text</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.textColor">text_color</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfig">PinpointInAppTemplateContentSecondaryBtnDefaultConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `background_color_input`<sup>Optional</sup> <a name="background_color_input" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.backgroundColorInput"></a>

```python
background_color_input: str
```

- *Type:* str

---

##### `border_radius_input`<sup>Optional</sup> <a name="border_radius_input" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.borderRadiusInput"></a>

```python
border_radius_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `button_action_input`<sup>Optional</sup> <a name="button_action_input" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.buttonActionInput"></a>

```python
button_action_input: str
```

- *Type:* str

---

##### `link_input`<sup>Optional</sup> <a name="link_input" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.linkInput"></a>

```python
link_input: str
```

- *Type:* str

---

##### `text_color_input`<sup>Optional</sup> <a name="text_color_input" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.textColorInput"></a>

```python
text_color_input: str
```

- *Type:* str

---

##### `text_input`<sup>Optional</sup> <a name="text_input" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.textInput"></a>

```python
text_input: str
```

- *Type:* str

---

##### `background_color`<sup>Required</sup> <a name="background_color" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.backgroundColor"></a>

```python
background_color: str
```

- *Type:* str

---

##### `border_radius`<sup>Required</sup> <a name="border_radius" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.borderRadius"></a>

```python
border_radius: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `button_action`<sup>Required</sup> <a name="button_action" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.buttonAction"></a>

```python
button_action: str
```

- *Type:* str

---

##### `link`<sup>Required</sup> <a name="link" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.link"></a>

```python
link: str
```

- *Type:* str

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.text"></a>

```python
text: str
```

- *Type:* str

---

##### `text_color`<sup>Required</sup> <a name="text_color" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.textColor"></a>

```python
text_color: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | PinpointInAppTemplateContentSecondaryBtnDefaultConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfig">PinpointInAppTemplateContentSecondaryBtnDefaultConfig</a>

---


### PinpointInAppTemplateContentSecondaryBtnIosOutputReference <a name="PinpointInAppTemplateContentSecondaryBtnIosOutputReference" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import pinpoint_in_app_template

pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.resetButtonAction">reset_button_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.resetLink">reset_link</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_button_action` <a name="reset_button_action" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.resetButtonAction"></a>

```python
def reset_button_action() -> None
```

##### `reset_link` <a name="reset_link" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.resetLink"></a>

```python
def reset_link() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.property.buttonActionInput">button_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.property.linkInput">link_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.property.buttonAction">button_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.property.link">link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIos">PinpointInAppTemplateContentSecondaryBtnIos</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `button_action_input`<sup>Optional</sup> <a name="button_action_input" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.property.buttonActionInput"></a>

```python
button_action_input: str
```

- *Type:* str

---

##### `link_input`<sup>Optional</sup> <a name="link_input" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.property.linkInput"></a>

```python
link_input: str
```

- *Type:* str

---

##### `button_action`<sup>Required</sup> <a name="button_action" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.property.buttonAction"></a>

```python
button_action: str
```

- *Type:* str

---

##### `link`<sup>Required</sup> <a name="link" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.property.link"></a>

```python
link: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | PinpointInAppTemplateContentSecondaryBtnIos
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIos">PinpointInAppTemplateContentSecondaryBtnIos</a>

---


### PinpointInAppTemplateContentSecondaryBtnOutputReference <a name="PinpointInAppTemplateContentSecondaryBtnOutputReference" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import pinpoint_in_app_template

pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.putAndroid">put_android</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.putDefaultConfig">put_default_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.putIos">put_ios</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.putWeb">put_web</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.resetAndroid">reset_android</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.resetDefaultConfig">reset_default_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.resetIos">reset_ios</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.resetWeb">reset_web</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_android` <a name="put_android" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.putAndroid"></a>

```python
def put_android(
  button_action: str = None,
  link: str = None
) -> None
```

###### `button_action`<sup>Optional</sup> <a name="button_action" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.putAndroid.parameter.buttonAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/pinpoint_in_app_template#button_action PinpointInAppTemplate#button_action}.

---

###### `link`<sup>Optional</sup> <a name="link" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.putAndroid.parameter.link"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/pinpoint_in_app_template#link PinpointInAppTemplate#link}.

---

##### `put_default_config` <a name="put_default_config" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.putDefaultConfig"></a>

```python
def put_default_config(
  background_color: str = None,
  border_radius: typing.Union[int, float] = None,
  button_action: str = None,
  link: str = None,
  text: str = None,
  text_color: str = None
) -> None
```

###### `background_color`<sup>Optional</sup> <a name="background_color" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.putDefaultConfig.parameter.backgroundColor"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/pinpoint_in_app_template#background_color PinpointInAppTemplate#background_color}.

---

###### `border_radius`<sup>Optional</sup> <a name="border_radius" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.putDefaultConfig.parameter.borderRadius"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/pinpoint_in_app_template#border_radius PinpointInAppTemplate#border_radius}.

---

###### `button_action`<sup>Optional</sup> <a name="button_action" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.putDefaultConfig.parameter.buttonAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/pinpoint_in_app_template#button_action PinpointInAppTemplate#button_action}.

---

###### `link`<sup>Optional</sup> <a name="link" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.putDefaultConfig.parameter.link"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/pinpoint_in_app_template#link PinpointInAppTemplate#link}.

---

###### `text`<sup>Optional</sup> <a name="text" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.putDefaultConfig.parameter.text"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/pinpoint_in_app_template#text PinpointInAppTemplate#text}.

---

###### `text_color`<sup>Optional</sup> <a name="text_color" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.putDefaultConfig.parameter.textColor"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/pinpoint_in_app_template#text_color PinpointInAppTemplate#text_color}.

---

##### `put_ios` <a name="put_ios" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.putIos"></a>

```python
def put_ios(
  button_action: str = None,
  link: str = None
) -> None
```

###### `button_action`<sup>Optional</sup> <a name="button_action" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.putIos.parameter.buttonAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/pinpoint_in_app_template#button_action PinpointInAppTemplate#button_action}.

---

###### `link`<sup>Optional</sup> <a name="link" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.putIos.parameter.link"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/pinpoint_in_app_template#link PinpointInAppTemplate#link}.

---

##### `put_web` <a name="put_web" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.putWeb"></a>

```python
def put_web(
  button_action: str = None,
  link: str = None
) -> None
```

###### `button_action`<sup>Optional</sup> <a name="button_action" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.putWeb.parameter.buttonAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/pinpoint_in_app_template#button_action PinpointInAppTemplate#button_action}.

---

###### `link`<sup>Optional</sup> <a name="link" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.putWeb.parameter.link"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/pinpoint_in_app_template#link PinpointInAppTemplate#link}.

---

##### `reset_android` <a name="reset_android" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.resetAndroid"></a>

```python
def reset_android() -> None
```

##### `reset_default_config` <a name="reset_default_config" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.resetDefaultConfig"></a>

```python
def reset_default_config() -> None
```

##### `reset_ios` <a name="reset_ios" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.resetIos"></a>

```python
def reset_ios() -> None
```

##### `reset_web` <a name="reset_web" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.resetWeb"></a>

```python
def reset_web() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.property.android">android</a></code> | <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference">PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.property.defaultConfig">default_config</a></code> | <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference">PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.property.ios">ios</a></code> | <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference">PinpointInAppTemplateContentSecondaryBtnIosOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.property.web">web</a></code> | <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference">PinpointInAppTemplateContentSecondaryBtnWebOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.property.androidInput">android_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroid">PinpointInAppTemplateContentSecondaryBtnAndroid</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.property.defaultConfigInput">default_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfig">PinpointInAppTemplateContentSecondaryBtnDefaultConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.property.iosInput">ios_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIos">PinpointInAppTemplateContentSecondaryBtnIos</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.property.webInput">web_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWeb">PinpointInAppTemplateContentSecondaryBtnWeb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtn">PinpointInAppTemplateContentSecondaryBtn</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `android`<sup>Required</sup> <a name="android" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.property.android"></a>

```python
android: PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference">PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference</a>

---

##### `default_config`<sup>Required</sup> <a name="default_config" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.property.defaultConfig"></a>

```python
default_config: PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference">PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference</a>

---

##### `ios`<sup>Required</sup> <a name="ios" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.property.ios"></a>

```python
ios: PinpointInAppTemplateContentSecondaryBtnIosOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference">PinpointInAppTemplateContentSecondaryBtnIosOutputReference</a>

---

##### `web`<sup>Required</sup> <a name="web" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.property.web"></a>

```python
web: PinpointInAppTemplateContentSecondaryBtnWebOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference">PinpointInAppTemplateContentSecondaryBtnWebOutputReference</a>

---

##### `android_input`<sup>Optional</sup> <a name="android_input" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.property.androidInput"></a>

```python
android_input: IResolvable | PinpointInAppTemplateContentSecondaryBtnAndroid
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroid">PinpointInAppTemplateContentSecondaryBtnAndroid</a>

---

##### `default_config_input`<sup>Optional</sup> <a name="default_config_input" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.property.defaultConfigInput"></a>

```python
default_config_input: IResolvable | PinpointInAppTemplateContentSecondaryBtnDefaultConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfig">PinpointInAppTemplateContentSecondaryBtnDefaultConfig</a>

---

##### `ios_input`<sup>Optional</sup> <a name="ios_input" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.property.iosInput"></a>

```python
ios_input: IResolvable | PinpointInAppTemplateContentSecondaryBtnIos
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIos">PinpointInAppTemplateContentSecondaryBtnIos</a>

---

##### `web_input`<sup>Optional</sup> <a name="web_input" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.property.webInput"></a>

```python
web_input: IResolvable | PinpointInAppTemplateContentSecondaryBtnWeb
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWeb">PinpointInAppTemplateContentSecondaryBtnWeb</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | PinpointInAppTemplateContentSecondaryBtn
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtn">PinpointInAppTemplateContentSecondaryBtn</a>

---


### PinpointInAppTemplateContentSecondaryBtnWebOutputReference <a name="PinpointInAppTemplateContentSecondaryBtnWebOutputReference" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import pinpoint_in_app_template

pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.resetButtonAction">reset_button_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.resetLink">reset_link</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_button_action` <a name="reset_button_action" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.resetButtonAction"></a>

```python
def reset_button_action() -> None
```

##### `reset_link` <a name="reset_link" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.resetLink"></a>

```python
def reset_link() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.property.buttonActionInput">button_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.property.linkInput">link_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.property.buttonAction">button_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.property.link">link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWeb">PinpointInAppTemplateContentSecondaryBtnWeb</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `button_action_input`<sup>Optional</sup> <a name="button_action_input" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.property.buttonActionInput"></a>

```python
button_action_input: str
```

- *Type:* str

---

##### `link_input`<sup>Optional</sup> <a name="link_input" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.property.linkInput"></a>

```python
link_input: str
```

- *Type:* str

---

##### `button_action`<sup>Required</sup> <a name="button_action" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.property.buttonAction"></a>

```python
button_action: str
```

- *Type:* str

---

##### `link`<sup>Required</sup> <a name="link" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.property.link"></a>

```python
link: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | PinpointInAppTemplateContentSecondaryBtnWeb
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWeb">PinpointInAppTemplateContentSecondaryBtnWeb</a>

---



