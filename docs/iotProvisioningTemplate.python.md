# `iotProvisioningTemplate` Submodule <a name="`iotProvisioningTemplate` Submodule" id="@cdktn/provider-awscc.iotProvisioningTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IotProvisioningTemplate <a name="IotProvisioningTemplate" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_provisioning_template awscc_iot_provisioning_template}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.Initializer"></a>

```python
from cdktn_provider_awscc import iot_provisioning_template

iotProvisioningTemplate.IotProvisioningTemplate(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  provisioning_role_arn: str,
  template_body: str,
  description: str = None,
  enabled: bool | IResolvable = None,
  pre_provisioning_hook: IotProvisioningTemplatePreProvisioningHook = None,
  tags: IResolvable | typing.List[IotProvisioningTemplateTags] = None,
  template_name: str = None,
  template_type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.Initializer.parameter.provisioningRoleArn">provisioning_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_provisioning_template#provisioning_role_arn IotProvisioningTemplate#provisioning_role_arn}. |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.Initializer.parameter.templateBody">template_body</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_provisioning_template#template_body IotProvisioningTemplate#template_body}. |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_provisioning_template#description IotProvisioningTemplate#description}. |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.Initializer.parameter.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_provisioning_template#enabled IotProvisioningTemplate#enabled}. |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.Initializer.parameter.preProvisioningHook">pre_provisioning_hook</a></code> | <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHook">IotProvisioningTemplatePreProvisioningHook</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_provisioning_template#pre_provisioning_hook IotProvisioningTemplate#pre_provisioning_hook}. |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTags">IotProvisioningTemplateTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_provisioning_template#tags IotProvisioningTemplate#tags}. |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.Initializer.parameter.templateName">template_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_provisioning_template#template_name IotProvisioningTemplate#template_name}. |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.Initializer.parameter.templateType">template_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_provisioning_template#template_type IotProvisioningTemplate#template_type}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `provisioning_role_arn`<sup>Required</sup> <a name="provisioning_role_arn" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.Initializer.parameter.provisioningRoleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_provisioning_template#provisioning_role_arn IotProvisioningTemplate#provisioning_role_arn}.

---

##### `template_body`<sup>Required</sup> <a name="template_body" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.Initializer.parameter.templateBody"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_provisioning_template#template_body IotProvisioningTemplate#template_body}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_provisioning_template#description IotProvisioningTemplate#description}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.Initializer.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_provisioning_template#enabled IotProvisioningTemplate#enabled}.

---

##### `pre_provisioning_hook`<sup>Optional</sup> <a name="pre_provisioning_hook" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.Initializer.parameter.preProvisioningHook"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHook">IotProvisioningTemplatePreProvisioningHook</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_provisioning_template#pre_provisioning_hook IotProvisioningTemplate#pre_provisioning_hook}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTags">IotProvisioningTemplateTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_provisioning_template#tags IotProvisioningTemplate#tags}.

---

##### `template_name`<sup>Optional</sup> <a name="template_name" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.Initializer.parameter.templateName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_provisioning_template#template_name IotProvisioningTemplate#template_name}.

---

##### `template_type`<sup>Optional</sup> <a name="template_type" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.Initializer.parameter.templateType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_provisioning_template#template_type IotProvisioningTemplate#template_type}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.putPreProvisioningHook">put_pre_provisioning_hook</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.resetPreProvisioningHook">reset_pre_provisioning_hook</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.resetTemplateName">reset_template_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.resetTemplateType">reset_template_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_pre_provisioning_hook` <a name="put_pre_provisioning_hook" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.putPreProvisioningHook"></a>

```python
def put_pre_provisioning_hook(
  payload_version: str = None,
  target_arn: str = None
) -> None
```

###### `payload_version`<sup>Optional</sup> <a name="payload_version" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.putPreProvisioningHook.parameter.payloadVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_provisioning_template#payload_version IotProvisioningTemplate#payload_version}.

---

###### `target_arn`<sup>Optional</sup> <a name="target_arn" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.putPreProvisioningHook.parameter.targetArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_provisioning_template#target_arn IotProvisioningTemplate#target_arn}.

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[IotProvisioningTemplateTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTags">IotProvisioningTemplateTags</a>]

---

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_pre_provisioning_hook` <a name="reset_pre_provisioning_hook" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.resetPreProvisioningHook"></a>

```python
def reset_pre_provisioning_hook() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_template_name` <a name="reset_template_name" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.resetTemplateName"></a>

```python
def reset_template_name() -> None
```

##### `reset_template_type` <a name="reset_template_type" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.resetTemplateType"></a>

```python
def reset_template_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a IotProvisioningTemplate resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.isConstruct"></a>

```python
from cdktn_provider_awscc import iot_provisioning_template

iotProvisioningTemplate.IotProvisioningTemplate.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.isTerraformElement"></a>

```python
from cdktn_provider_awscc import iot_provisioning_template

iotProvisioningTemplate.IotProvisioningTemplate.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.isTerraformResource"></a>

```python
from cdktn_provider_awscc import iot_provisioning_template

iotProvisioningTemplate.IotProvisioningTemplate.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import iot_provisioning_template

iotProvisioningTemplate.IotProvisioningTemplate.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a IotProvisioningTemplate resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the IotProvisioningTemplate to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing IotProvisioningTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_provisioning_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the IotProvisioningTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.property.preProvisioningHook">pre_provisioning_hook</a></code> | <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference">IotProvisioningTemplatePreProvisioningHookOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTagsList">IotProvisioningTemplateTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.property.templateArn">template_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.property.preProvisioningHookInput">pre_provisioning_hook_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHook">IotProvisioningTemplatePreProvisioningHook</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.property.provisioningRoleArnInput">provisioning_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTags">IotProvisioningTemplateTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.property.templateBodyInput">template_body_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.property.templateNameInput">template_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.property.templateTypeInput">template_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.property.provisioningRoleArn">provisioning_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.property.templateBody">template_body</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.property.templateName">template_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.property.templateType">template_type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `pre_provisioning_hook`<sup>Required</sup> <a name="pre_provisioning_hook" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.property.preProvisioningHook"></a>

```python
pre_provisioning_hook: IotProvisioningTemplatePreProvisioningHookOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference">IotProvisioningTemplatePreProvisioningHookOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.property.tags"></a>

```python
tags: IotProvisioningTemplateTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTagsList">IotProvisioningTemplateTagsList</a>

---

##### `template_arn`<sup>Required</sup> <a name="template_arn" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.property.templateArn"></a>

```python
template_arn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `pre_provisioning_hook_input`<sup>Optional</sup> <a name="pre_provisioning_hook_input" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.property.preProvisioningHookInput"></a>

```python
pre_provisioning_hook_input: IResolvable | IotProvisioningTemplatePreProvisioningHook
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHook">IotProvisioningTemplatePreProvisioningHook</a>

---

##### `provisioning_role_arn_input`<sup>Optional</sup> <a name="provisioning_role_arn_input" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.property.provisioningRoleArnInput"></a>

```python
provisioning_role_arn_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[IotProvisioningTemplateTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTags">IotProvisioningTemplateTags</a>]

---

##### `template_body_input`<sup>Optional</sup> <a name="template_body_input" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.property.templateBodyInput"></a>

```python
template_body_input: str
```

- *Type:* str

---

##### `template_name_input`<sup>Optional</sup> <a name="template_name_input" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.property.templateNameInput"></a>

```python
template_name_input: str
```

- *Type:* str

---

##### `template_type_input`<sup>Optional</sup> <a name="template_type_input" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.property.templateTypeInput"></a>

```python
template_type_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `provisioning_role_arn`<sup>Required</sup> <a name="provisioning_role_arn" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.property.provisioningRoleArn"></a>

```python
provisioning_role_arn: str
```

- *Type:* str

---

##### `template_body`<sup>Required</sup> <a name="template_body" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.property.templateBody"></a>

```python
template_body: str
```

- *Type:* str

---

##### `template_name`<sup>Required</sup> <a name="template_name" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.property.templateName"></a>

```python
template_name: str
```

- *Type:* str

---

##### `template_type`<sup>Required</sup> <a name="template_type" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.property.templateType"></a>

```python
template_type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplate.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### IotProvisioningTemplateConfig <a name="IotProvisioningTemplateConfig" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateConfig.Initializer"></a>

```python
from cdktn_provider_awscc import iot_provisioning_template

iotProvisioningTemplate.IotProvisioningTemplateConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  provisioning_role_arn: str,
  template_body: str,
  description: str = None,
  enabled: bool | IResolvable = None,
  pre_provisioning_hook: IotProvisioningTemplatePreProvisioningHook = None,
  tags: IResolvable | typing.List[IotProvisioningTemplateTags] = None,
  template_name: str = None,
  template_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateConfig.property.provisioningRoleArn">provisioning_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_provisioning_template#provisioning_role_arn IotProvisioningTemplate#provisioning_role_arn}. |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateConfig.property.templateBody">template_body</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_provisioning_template#template_body IotProvisioningTemplate#template_body}. |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_provisioning_template#description IotProvisioningTemplate#description}. |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateConfig.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_provisioning_template#enabled IotProvisioningTemplate#enabled}. |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateConfig.property.preProvisioningHook">pre_provisioning_hook</a></code> | <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHook">IotProvisioningTemplatePreProvisioningHook</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_provisioning_template#pre_provisioning_hook IotProvisioningTemplate#pre_provisioning_hook}. |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTags">IotProvisioningTemplateTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_provisioning_template#tags IotProvisioningTemplate#tags}. |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateConfig.property.templateName">template_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_provisioning_template#template_name IotProvisioningTemplate#template_name}. |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateConfig.property.templateType">template_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_provisioning_template#template_type IotProvisioningTemplate#template_type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `provisioning_role_arn`<sup>Required</sup> <a name="provisioning_role_arn" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateConfig.property.provisioningRoleArn"></a>

```python
provisioning_role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_provisioning_template#provisioning_role_arn IotProvisioningTemplate#provisioning_role_arn}.

---

##### `template_body`<sup>Required</sup> <a name="template_body" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateConfig.property.templateBody"></a>

```python
template_body: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_provisioning_template#template_body IotProvisioningTemplate#template_body}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_provisioning_template#description IotProvisioningTemplate#description}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateConfig.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_provisioning_template#enabled IotProvisioningTemplate#enabled}.

---

##### `pre_provisioning_hook`<sup>Optional</sup> <a name="pre_provisioning_hook" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateConfig.property.preProvisioningHook"></a>

```python
pre_provisioning_hook: IotProvisioningTemplatePreProvisioningHook
```

- *Type:* <a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHook">IotProvisioningTemplatePreProvisioningHook</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_provisioning_template#pre_provisioning_hook IotProvisioningTemplate#pre_provisioning_hook}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[IotProvisioningTemplateTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTags">IotProvisioningTemplateTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_provisioning_template#tags IotProvisioningTemplate#tags}.

---

##### `template_name`<sup>Optional</sup> <a name="template_name" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateConfig.property.templateName"></a>

```python
template_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_provisioning_template#template_name IotProvisioningTemplate#template_name}.

---

##### `template_type`<sup>Optional</sup> <a name="template_type" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateConfig.property.templateType"></a>

```python
template_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_provisioning_template#template_type IotProvisioningTemplate#template_type}.

---

### IotProvisioningTemplatePreProvisioningHook <a name="IotProvisioningTemplatePreProvisioningHook" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHook"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHook.Initializer"></a>

```python
from cdktn_provider_awscc import iot_provisioning_template

iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHook(
  payload_version: str = None,
  target_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHook.property.payloadVersion">payload_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_provisioning_template#payload_version IotProvisioningTemplate#payload_version}. |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHook.property.targetArn">target_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_provisioning_template#target_arn IotProvisioningTemplate#target_arn}. |

---

##### `payload_version`<sup>Optional</sup> <a name="payload_version" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHook.property.payloadVersion"></a>

```python
payload_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_provisioning_template#payload_version IotProvisioningTemplate#payload_version}.

---

##### `target_arn`<sup>Optional</sup> <a name="target_arn" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHook.property.targetArn"></a>

```python
target_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_provisioning_template#target_arn IotProvisioningTemplate#target_arn}.

---

### IotProvisioningTemplateTags <a name="IotProvisioningTemplateTags" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTags.Initializer"></a>

```python
from cdktn_provider_awscc import iot_provisioning_template

iotProvisioningTemplate.IotProvisioningTemplateTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_provisioning_template#key IotProvisioningTemplate#key}. |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_provisioning_template#value IotProvisioningTemplate#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_provisioning_template#key IotProvisioningTemplate#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_provisioning_template#value IotProvisioningTemplate#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### IotProvisioningTemplatePreProvisioningHookOutputReference <a name="IotProvisioningTemplatePreProvisioningHookOutputReference" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iot_provisioning_template

iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.resetPayloadVersion">reset_payload_version</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.resetTargetArn">reset_target_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_payload_version` <a name="reset_payload_version" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.resetPayloadVersion"></a>

```python
def reset_payload_version() -> None
```

##### `reset_target_arn` <a name="reset_target_arn" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.resetTargetArn"></a>

```python
def reset_target_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.property.payloadVersionInput">payload_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.property.targetArnInput">target_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.property.payloadVersion">payload_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.property.targetArn">target_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHook">IotProvisioningTemplatePreProvisioningHook</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `payload_version_input`<sup>Optional</sup> <a name="payload_version_input" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.property.payloadVersionInput"></a>

```python
payload_version_input: str
```

- *Type:* str

---

##### `target_arn_input`<sup>Optional</sup> <a name="target_arn_input" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.property.targetArnInput"></a>

```python
target_arn_input: str
```

- *Type:* str

---

##### `payload_version`<sup>Required</sup> <a name="payload_version" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.property.payloadVersion"></a>

```python
payload_version: str
```

- *Type:* str

---

##### `target_arn`<sup>Required</sup> <a name="target_arn" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.property.targetArn"></a>

```python
target_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotProvisioningTemplatePreProvisioningHook
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHook">IotProvisioningTemplatePreProvisioningHook</a>

---


### IotProvisioningTemplateTagsList <a name="IotProvisioningTemplateTagsList" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import iot_provisioning_template

iotProvisioningTemplate.IotProvisioningTemplateTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IotProvisioningTemplateTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTags">IotProvisioningTemplateTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[IotProvisioningTemplateTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTags">IotProvisioningTemplateTags</a>]

---


### IotProvisioningTemplateTagsOutputReference <a name="IotProvisioningTemplateTagsOutputReference" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iot_provisioning_template

iotProvisioningTemplate.IotProvisioningTemplateTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTags">IotProvisioningTemplateTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotProvisioningTemplateTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotProvisioningTemplate.IotProvisioningTemplateTags">IotProvisioningTemplateTags</a>

---



