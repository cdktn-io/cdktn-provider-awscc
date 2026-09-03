# `inspectorv2CodeSecurityIntegration` Submodule <a name="`inspectorv2CodeSecurityIntegration` Submodule" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Inspectorv2CodeSecurityIntegration <a name="Inspectorv2CodeSecurityIntegration" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_code_security_integration awscc_inspectorv2_code_security_integration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.Initializer"></a>

```python
from cdktn_provider_awscc import inspectorv2_code_security_integration

inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  create_integration_details: Inspectorv2CodeSecurityIntegrationCreateIntegrationDetails = None,
  name: str = None,
  tags: typing.Mapping[str] = None,
  type: str = None,
  update_integration_details: Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetails = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.Initializer.parameter.createIntegrationDetails">create_integration_details</a></code> | <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetails">Inspectorv2CodeSecurityIntegrationCreateIntegrationDetails</a></code> | Create Integration Details. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.Initializer.parameter.name">name</a></code> | <code>str</code> | Code Security Integration name. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_code_security_integration#tags Inspectorv2CodeSecurityIntegration#tags}. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.Initializer.parameter.type">type</a></code> | <code>str</code> | Integration Type. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.Initializer.parameter.updateIntegrationDetails">update_integration_details</a></code> | <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetails">Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetails</a></code> | Update Integration Details. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `create_integration_details`<sup>Optional</sup> <a name="create_integration_details" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.Initializer.parameter.createIntegrationDetails"></a>

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetails">Inspectorv2CodeSecurityIntegrationCreateIntegrationDetails</a>

Create Integration Details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_code_security_integration#create_integration_details Inspectorv2CodeSecurityIntegration#create_integration_details}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.Initializer.parameter.name"></a>

- *Type:* str

Code Security Integration name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_code_security_integration#name Inspectorv2CodeSecurityIntegration#name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_code_security_integration#tags Inspectorv2CodeSecurityIntegration#tags}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.Initializer.parameter.type"></a>

- *Type:* str

Integration Type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_code_security_integration#type Inspectorv2CodeSecurityIntegration#type}

---

##### `update_integration_details`<sup>Optional</sup> <a name="update_integration_details" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.Initializer.parameter.updateIntegrationDetails"></a>

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetails">Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetails</a>

Update Integration Details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_code_security_integration#update_integration_details Inspectorv2CodeSecurityIntegration#update_integration_details}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.putCreateIntegrationDetails">put_create_integration_details</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.putUpdateIntegrationDetails">put_update_integration_details</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.resetCreateIntegrationDetails">reset_create_integration_details</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.resetType">reset_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.resetUpdateIntegrationDetails">reset_update_integration_details</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_create_integration_details` <a name="put_create_integration_details" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.putCreateIntegrationDetails"></a>

```python
def put_create_integration_details(
  gitlab_self_managed: Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManaged = None
) -> None
```

###### `gitlab_self_managed`<sup>Optional</sup> <a name="gitlab_self_managed" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.putCreateIntegrationDetails.parameter.gitlabSelfManaged"></a>

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManaged">Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManaged</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_code_security_integration#gitlab_self_managed Inspectorv2CodeSecurityIntegration#gitlab_self_managed}.

---

##### `put_update_integration_details` <a name="put_update_integration_details" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.putUpdateIntegrationDetails"></a>

```python
def put_update_integration_details(
  github: Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithub = None,
  gitlab_self_managed: Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManaged = None
) -> None
```

###### `github`<sup>Optional</sup> <a name="github" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.putUpdateIntegrationDetails.parameter.github"></a>

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithub">Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithub</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_code_security_integration#github Inspectorv2CodeSecurityIntegration#github}.

---

###### `gitlab_self_managed`<sup>Optional</sup> <a name="gitlab_self_managed" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.putUpdateIntegrationDetails.parameter.gitlabSelfManaged"></a>

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManaged">Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManaged</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_code_security_integration#gitlab_self_managed Inspectorv2CodeSecurityIntegration#gitlab_self_managed}.

---

##### `reset_create_integration_details` <a name="reset_create_integration_details" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.resetCreateIntegrationDetails"></a>

```python
def reset_create_integration_details() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.resetType"></a>

```python
def reset_type() -> None
```

##### `reset_update_integration_details` <a name="reset_update_integration_details" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.resetUpdateIntegrationDetails"></a>

```python
def reset_update_integration_details() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a Inspectorv2CodeSecurityIntegration resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.isConstruct"></a>

```python
from cdktn_provider_awscc import inspectorv2_code_security_integration

inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.isTerraformElement"></a>

```python
from cdktn_provider_awscc import inspectorv2_code_security_integration

inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.isTerraformResource"></a>

```python
from cdktn_provider_awscc import inspectorv2_code_security_integration

inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import inspectorv2_code_security_integration

inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a Inspectorv2CodeSecurityIntegration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Inspectorv2CodeSecurityIntegration to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Inspectorv2CodeSecurityIntegration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_code_security_integration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Inspectorv2CodeSecurityIntegration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.authorizationUrl">authorization_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.createIntegrationDetails">create_integration_details</a></code> | <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference">Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.lastUpdatedAt">last_updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.statusReason">status_reason</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.updateIntegrationDetails">update_integration_details</a></code> | <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference">Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.createIntegrationDetailsInput">create_integration_details_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetails">Inspectorv2CodeSecurityIntegrationCreateIntegrationDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.updateIntegrationDetailsInput">update_integration_details_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetails">Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `authorization_url`<sup>Required</sup> <a name="authorization_url" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.authorizationUrl"></a>

```python
authorization_url: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `create_integration_details`<sup>Required</sup> <a name="create_integration_details" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.createIntegrationDetails"></a>

```python
create_integration_details: Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference">Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `last_updated_at`<sup>Required</sup> <a name="last_updated_at" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.lastUpdatedAt"></a>

```python
last_updated_at: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `status_reason`<sup>Required</sup> <a name="status_reason" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.statusReason"></a>

```python
status_reason: str
```

- *Type:* str

---

##### `update_integration_details`<sup>Required</sup> <a name="update_integration_details" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.updateIntegrationDetails"></a>

```python
update_integration_details: Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference">Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference</a>

---

##### `create_integration_details_input`<sup>Optional</sup> <a name="create_integration_details_input" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.createIntegrationDetailsInput"></a>

```python
create_integration_details_input: IResolvable | Inspectorv2CodeSecurityIntegrationCreateIntegrationDetails
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetails">Inspectorv2CodeSecurityIntegrationCreateIntegrationDetails</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `update_integration_details_input`<sup>Optional</sup> <a name="update_integration_details_input" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.updateIntegrationDetailsInput"></a>

```python
update_integration_details_input: IResolvable | Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetails
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetails">Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetails</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### Inspectorv2CodeSecurityIntegrationConfig <a name="Inspectorv2CodeSecurityIntegrationConfig" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationConfig.Initializer"></a>

```python
from cdktn_provider_awscc import inspectorv2_code_security_integration

inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  create_integration_details: Inspectorv2CodeSecurityIntegrationCreateIntegrationDetails = None,
  name: str = None,
  tags: typing.Mapping[str] = None,
  type: str = None,
  update_integration_details: Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetails = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationConfig.property.createIntegrationDetails">create_integration_details</a></code> | <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetails">Inspectorv2CodeSecurityIntegrationCreateIntegrationDetails</a></code> | Create Integration Details. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationConfig.property.name">name</a></code> | <code>str</code> | Code Security Integration name. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_code_security_integration#tags Inspectorv2CodeSecurityIntegration#tags}. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationConfig.property.type">type</a></code> | <code>str</code> | Integration Type. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationConfig.property.updateIntegrationDetails">update_integration_details</a></code> | <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetails">Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetails</a></code> | Update Integration Details. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `create_integration_details`<sup>Optional</sup> <a name="create_integration_details" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationConfig.property.createIntegrationDetails"></a>

```python
create_integration_details: Inspectorv2CodeSecurityIntegrationCreateIntegrationDetails
```

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetails">Inspectorv2CodeSecurityIntegrationCreateIntegrationDetails</a>

Create Integration Details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_code_security_integration#create_integration_details Inspectorv2CodeSecurityIntegration#create_integration_details}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Code Security Integration name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_code_security_integration#name Inspectorv2CodeSecurityIntegration#name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_code_security_integration#tags Inspectorv2CodeSecurityIntegration#tags}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Integration Type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_code_security_integration#type Inspectorv2CodeSecurityIntegration#type}

---

##### `update_integration_details`<sup>Optional</sup> <a name="update_integration_details" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationConfig.property.updateIntegrationDetails"></a>

```python
update_integration_details: Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetails
```

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetails">Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetails</a>

Update Integration Details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_code_security_integration#update_integration_details Inspectorv2CodeSecurityIntegration#update_integration_details}

---

### Inspectorv2CodeSecurityIntegrationCreateIntegrationDetails <a name="Inspectorv2CodeSecurityIntegrationCreateIntegrationDetails" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetails.Initializer"></a>

```python
from cdktn_provider_awscc import inspectorv2_code_security_integration

inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetails(
  gitlab_self_managed: Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManaged = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetails.property.gitlabSelfManaged">gitlab_self_managed</a></code> | <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManaged">Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManaged</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_code_security_integration#gitlab_self_managed Inspectorv2CodeSecurityIntegration#gitlab_self_managed}. |

---

##### `gitlab_self_managed`<sup>Optional</sup> <a name="gitlab_self_managed" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetails.property.gitlabSelfManaged"></a>

```python
gitlab_self_managed: Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManaged
```

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManaged">Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManaged</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_code_security_integration#gitlab_self_managed Inspectorv2CodeSecurityIntegration#gitlab_self_managed}.

---

### Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManaged <a name="Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManaged" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManaged"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManaged.Initializer"></a>

```python
from cdktn_provider_awscc import inspectorv2_code_security_integration

inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManaged(
  access_token: str = None,
  instance_url: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManaged.property.accessToken">access_token</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_code_security_integration#access_token Inspectorv2CodeSecurityIntegration#access_token}. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManaged.property.instanceUrl">instance_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_code_security_integration#instance_url Inspectorv2CodeSecurityIntegration#instance_url}. |

---

##### `access_token`<sup>Optional</sup> <a name="access_token" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManaged.property.accessToken"></a>

```python
access_token: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_code_security_integration#access_token Inspectorv2CodeSecurityIntegration#access_token}.

---

##### `instance_url`<sup>Optional</sup> <a name="instance_url" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManaged.property.instanceUrl"></a>

```python
instance_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_code_security_integration#instance_url Inspectorv2CodeSecurityIntegration#instance_url}.

---

### Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetails <a name="Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetails" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetails.Initializer"></a>

```python
from cdktn_provider_awscc import inspectorv2_code_security_integration

inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetails(
  github: Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithub = None,
  gitlab_self_managed: Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManaged = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetails.property.github">github</a></code> | <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithub">Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithub</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_code_security_integration#github Inspectorv2CodeSecurityIntegration#github}. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetails.property.gitlabSelfManaged">gitlab_self_managed</a></code> | <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManaged">Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManaged</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_code_security_integration#gitlab_self_managed Inspectorv2CodeSecurityIntegration#gitlab_self_managed}. |

---

##### `github`<sup>Optional</sup> <a name="github" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetails.property.github"></a>

```python
github: Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithub
```

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithub">Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithub</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_code_security_integration#github Inspectorv2CodeSecurityIntegration#github}.

---

##### `gitlab_self_managed`<sup>Optional</sup> <a name="gitlab_self_managed" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetails.property.gitlabSelfManaged"></a>

```python
gitlab_self_managed: Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManaged
```

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManaged">Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManaged</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_code_security_integration#gitlab_self_managed Inspectorv2CodeSecurityIntegration#gitlab_self_managed}.

---

### Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithub <a name="Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithub" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithub"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithub.Initializer"></a>

```python
from cdktn_provider_awscc import inspectorv2_code_security_integration

inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithub(
  code: str = None,
  installation_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithub.property.code">code</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_code_security_integration#code Inspectorv2CodeSecurityIntegration#code}. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithub.property.installationId">installation_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_code_security_integration#installation_id Inspectorv2CodeSecurityIntegration#installation_id}. |

---

##### `code`<sup>Optional</sup> <a name="code" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithub.property.code"></a>

```python
code: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_code_security_integration#code Inspectorv2CodeSecurityIntegration#code}.

---

##### `installation_id`<sup>Optional</sup> <a name="installation_id" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithub.property.installationId"></a>

```python
installation_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_code_security_integration#installation_id Inspectorv2CodeSecurityIntegration#installation_id}.

---

### Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManaged <a name="Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManaged" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManaged"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManaged.Initializer"></a>

```python
from cdktn_provider_awscc import inspectorv2_code_security_integration

inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManaged(
  auth_code: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManaged.property.authCode">auth_code</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_code_security_integration#auth_code Inspectorv2CodeSecurityIntegration#auth_code}. |

---

##### `auth_code`<sup>Optional</sup> <a name="auth_code" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManaged.property.authCode"></a>

```python
auth_code: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_code_security_integration#auth_code Inspectorv2CodeSecurityIntegration#auth_code}.

---

## Classes <a name="Classes" id="Classes"></a>

### Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference <a name="Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import inspectorv2_code_security_integration

inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.resetAccessToken">reset_access_token</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.resetInstanceUrl">reset_instance_url</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_access_token` <a name="reset_access_token" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.resetAccessToken"></a>

```python
def reset_access_token() -> None
```

##### `reset_instance_url` <a name="reset_instance_url" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.resetInstanceUrl"></a>

```python
def reset_instance_url() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.property.accessTokenInput">access_token_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.property.instanceUrlInput">instance_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.property.accessToken">access_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.property.instanceUrl">instance_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManaged">Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManaged</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `access_token_input`<sup>Optional</sup> <a name="access_token_input" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.property.accessTokenInput"></a>

```python
access_token_input: str
```

- *Type:* str

---

##### `instance_url_input`<sup>Optional</sup> <a name="instance_url_input" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.property.instanceUrlInput"></a>

```python
instance_url_input: str
```

- *Type:* str

---

##### `access_token`<sup>Required</sup> <a name="access_token" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.property.accessToken"></a>

```python
access_token: str
```

- *Type:* str

---

##### `instance_url`<sup>Required</sup> <a name="instance_url" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.property.instanceUrl"></a>

```python
instance_url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManaged
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManaged">Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManaged</a>

---


### Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference <a name="Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import inspectorv2_code_security_integration

inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.putGitlabSelfManaged">put_gitlab_self_managed</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.resetGitlabSelfManaged">reset_gitlab_self_managed</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_gitlab_self_managed` <a name="put_gitlab_self_managed" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.putGitlabSelfManaged"></a>

```python
def put_gitlab_self_managed(
  access_token: str = None,
  instance_url: str = None
) -> None
```

###### `access_token`<sup>Optional</sup> <a name="access_token" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.putGitlabSelfManaged.parameter.accessToken"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_code_security_integration#access_token Inspectorv2CodeSecurityIntegration#access_token}.

---

###### `instance_url`<sup>Optional</sup> <a name="instance_url" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.putGitlabSelfManaged.parameter.instanceUrl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_code_security_integration#instance_url Inspectorv2CodeSecurityIntegration#instance_url}.

---

##### `reset_gitlab_self_managed` <a name="reset_gitlab_self_managed" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.resetGitlabSelfManaged"></a>

```python
def reset_gitlab_self_managed() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.property.gitlabSelfManaged">gitlab_self_managed</a></code> | <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference">Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.property.gitlabSelfManagedInput">gitlab_self_managed_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManaged">Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManaged</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetails">Inspectorv2CodeSecurityIntegrationCreateIntegrationDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `gitlab_self_managed`<sup>Required</sup> <a name="gitlab_self_managed" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.property.gitlabSelfManaged"></a>

```python
gitlab_self_managed: Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference">Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference</a>

---

##### `gitlab_self_managed_input`<sup>Optional</sup> <a name="gitlab_self_managed_input" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.property.gitlabSelfManagedInput"></a>

```python
gitlab_self_managed_input: IResolvable | Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManaged
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManaged">Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManaged</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Inspectorv2CodeSecurityIntegrationCreateIntegrationDetails
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetails">Inspectorv2CodeSecurityIntegrationCreateIntegrationDetails</a>

---


### Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference <a name="Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import inspectorv2_code_security_integration

inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.resetCode">reset_code</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.resetInstallationId">reset_installation_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_code` <a name="reset_code" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.resetCode"></a>

```python
def reset_code() -> None
```

##### `reset_installation_id` <a name="reset_installation_id" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.resetInstallationId"></a>

```python
def reset_installation_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.property.codeInput">code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.property.installationIdInput">installation_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.property.code">code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.property.installationId">installation_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithub">Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithub</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `code_input`<sup>Optional</sup> <a name="code_input" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.property.codeInput"></a>

```python
code_input: str
```

- *Type:* str

---

##### `installation_id_input`<sup>Optional</sup> <a name="installation_id_input" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.property.installationIdInput"></a>

```python
installation_id_input: str
```

- *Type:* str

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.property.code"></a>

```python
code: str
```

- *Type:* str

---

##### `installation_id`<sup>Required</sup> <a name="installation_id" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.property.installationId"></a>

```python
installation_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithub
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithub">Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithub</a>

---


### Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference <a name="Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import inspectorv2_code_security_integration

inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.resetAuthCode">reset_auth_code</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_auth_code` <a name="reset_auth_code" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.resetAuthCode"></a>

```python
def reset_auth_code() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.property.authCodeInput">auth_code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.property.authCode">auth_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManaged">Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManaged</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auth_code_input`<sup>Optional</sup> <a name="auth_code_input" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.property.authCodeInput"></a>

```python
auth_code_input: str
```

- *Type:* str

---

##### `auth_code`<sup>Required</sup> <a name="auth_code" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.property.authCode"></a>

```python
auth_code: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManaged
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManaged">Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManaged</a>

---


### Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference <a name="Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import inspectorv2_code_security_integration

inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.putGithub">put_github</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.putGitlabSelfManaged">put_gitlab_self_managed</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.resetGithub">reset_github</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.resetGitlabSelfManaged">reset_gitlab_self_managed</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_github` <a name="put_github" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.putGithub"></a>

```python
def put_github(
  code: str = None,
  installation_id: str = None
) -> None
```

###### `code`<sup>Optional</sup> <a name="code" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.putGithub.parameter.code"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_code_security_integration#code Inspectorv2CodeSecurityIntegration#code}.

---

###### `installation_id`<sup>Optional</sup> <a name="installation_id" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.putGithub.parameter.installationId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_code_security_integration#installation_id Inspectorv2CodeSecurityIntegration#installation_id}.

---

##### `put_gitlab_self_managed` <a name="put_gitlab_self_managed" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.putGitlabSelfManaged"></a>

```python
def put_gitlab_self_managed(
  auth_code: str = None
) -> None
```

###### `auth_code`<sup>Optional</sup> <a name="auth_code" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.putGitlabSelfManaged.parameter.authCode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_code_security_integration#auth_code Inspectorv2CodeSecurityIntegration#auth_code}.

---

##### `reset_github` <a name="reset_github" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.resetGithub"></a>

```python
def reset_github() -> None
```

##### `reset_gitlab_self_managed` <a name="reset_gitlab_self_managed" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.resetGitlabSelfManaged"></a>

```python
def reset_gitlab_self_managed() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.property.github">github</a></code> | <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference">Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.property.gitlabSelfManaged">gitlab_self_managed</a></code> | <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference">Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.property.githubInput">github_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithub">Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithub</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.property.gitlabSelfManagedInput">gitlab_self_managed_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManaged">Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManaged</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetails">Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `github`<sup>Required</sup> <a name="github" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.property.github"></a>

```python
github: Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference">Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference</a>

---

##### `gitlab_self_managed`<sup>Required</sup> <a name="gitlab_self_managed" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.property.gitlabSelfManaged"></a>

```python
gitlab_self_managed: Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference">Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference</a>

---

##### `github_input`<sup>Optional</sup> <a name="github_input" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.property.githubInput"></a>

```python
github_input: IResolvable | Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithub
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithub">Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithub</a>

---

##### `gitlab_self_managed_input`<sup>Optional</sup> <a name="gitlab_self_managed_input" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.property.gitlabSelfManagedInput"></a>

```python
gitlab_self_managed_input: IResolvable | Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManaged
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManaged">Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManaged</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetails
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetails">Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetails</a>

---



