# `ssmquicksetupLifecycleAutomation` Submodule <a name="`ssmquicksetupLifecycleAutomation` Submodule" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SsmquicksetupLifecycleAutomation <a name="SsmquicksetupLifecycleAutomation" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmquicksetup_lifecycle_automation awscc_ssmquicksetup_lifecycle_automation}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.Initializer"></a>

```python
from cdktn_provider_awscc import ssmquicksetup_lifecycle_automation

ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  automation_document: str,
  automation_parameters: IResolvable | typing.Mapping[typing.List[str]],
  resource_key: str,
  tags: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.Initializer.parameter.automationDocument">automation_document</a></code> | <code>str</code> | The name of the Automation document to execute. |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.Initializer.parameter.automationParameters">automation_parameters</a></code> | <code>cdktn.IResolvable \| typing.Mapping[typing.List[str]]</code> | Parameters to be passed to the Automation Document. |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.Initializer.parameter.resourceKey">resource_key</a></code> | <code>str</code> | A unique identifier used for generating a unique logical ID for the custom resource. |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmquicksetup_lifecycle_automation#tags SsmquicksetupLifecycleAutomation#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `automation_document`<sup>Required</sup> <a name="automation_document" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.Initializer.parameter.automationDocument"></a>

- *Type:* str

The name of the Automation document to execute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmquicksetup_lifecycle_automation#automation_document SsmquicksetupLifecycleAutomation#automation_document}

---

##### `automation_parameters`<sup>Required</sup> <a name="automation_parameters" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.Initializer.parameter.automationParameters"></a>

- *Type:* cdktn.IResolvable | typing.Mapping[typing.List[str]]

Parameters to be passed to the Automation Document.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmquicksetup_lifecycle_automation#automation_parameters SsmquicksetupLifecycleAutomation#automation_parameters}

---

##### `resource_key`<sup>Required</sup> <a name="resource_key" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.Initializer.parameter.resourceKey"></a>

- *Type:* str

A unique identifier used for generating a unique logical ID for the custom resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmquicksetup_lifecycle_automation#resource_key SsmquicksetupLifecycleAutomation#resource_key}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmquicksetup_lifecycle_automation#tags SsmquicksetupLifecycleAutomation#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a SsmquicksetupLifecycleAutomation resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.isConstruct"></a>

```python
from cdktn_provider_awscc import ssmquicksetup_lifecycle_automation

ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.isTerraformElement"></a>

```python
from cdktn_provider_awscc import ssmquicksetup_lifecycle_automation

ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.isTerraformResource"></a>

```python
from cdktn_provider_awscc import ssmquicksetup_lifecycle_automation

ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import ssmquicksetup_lifecycle_automation

ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a SsmquicksetupLifecycleAutomation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SsmquicksetupLifecycleAutomation to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SsmquicksetupLifecycleAutomation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmquicksetup_lifecycle_automation#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SsmquicksetupLifecycleAutomation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.associationId">association_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.automationDocumentInput">automation_document_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.automationParametersInput">automation_parameters_input</a></code> | <code>cdktn.IResolvable \| typing.Mapping[typing.List[str]]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.resourceKeyInput">resource_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.automationDocument">automation_document</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.automationParameters">automation_parameters</a></code> | <code>cdktn.IResolvable \| typing.Mapping[typing.List[str]]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.resourceKey">resource_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `association_id`<sup>Required</sup> <a name="association_id" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.associationId"></a>

```python
association_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `automation_document_input`<sup>Optional</sup> <a name="automation_document_input" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.automationDocumentInput"></a>

```python
automation_document_input: str
```

- *Type:* str

---

##### `automation_parameters_input`<sup>Optional</sup> <a name="automation_parameters_input" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.automationParametersInput"></a>

```python
automation_parameters_input: IResolvable | typing.Mapping[typing.List[str]]
```

- *Type:* cdktn.IResolvable | typing.Mapping[typing.List[str]]

---

##### `resource_key_input`<sup>Optional</sup> <a name="resource_key_input" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.resourceKeyInput"></a>

```python
resource_key_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `automation_document`<sup>Required</sup> <a name="automation_document" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.automationDocument"></a>

```python
automation_document: str
```

- *Type:* str

---

##### `automation_parameters`<sup>Required</sup> <a name="automation_parameters" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.automationParameters"></a>

```python
automation_parameters: IResolvable | typing.Mapping[typing.List[str]]
```

- *Type:* cdktn.IResolvable | typing.Mapping[typing.List[str]]

---

##### `resource_key`<sup>Required</sup> <a name="resource_key" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.resourceKey"></a>

```python
resource_key: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SsmquicksetupLifecycleAutomationConfig <a name="SsmquicksetupLifecycleAutomationConfig" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomationConfig.Initializer"></a>

```python
from cdktn_provider_awscc import ssmquicksetup_lifecycle_automation

ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomationConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  automation_document: str,
  automation_parameters: IResolvable | typing.Mapping[typing.List[str]],
  resource_key: str,
  tags: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomationConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomationConfig.property.automationDocument">automation_document</a></code> | <code>str</code> | The name of the Automation document to execute. |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomationConfig.property.automationParameters">automation_parameters</a></code> | <code>cdktn.IResolvable \| typing.Mapping[typing.List[str]]</code> | Parameters to be passed to the Automation Document. |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomationConfig.property.resourceKey">resource_key</a></code> | <code>str</code> | A unique identifier used for generating a unique logical ID for the custom resource. |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomationConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmquicksetup_lifecycle_automation#tags SsmquicksetupLifecycleAutomation#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `automation_document`<sup>Required</sup> <a name="automation_document" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomationConfig.property.automationDocument"></a>

```python
automation_document: str
```

- *Type:* str

The name of the Automation document to execute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmquicksetup_lifecycle_automation#automation_document SsmquicksetupLifecycleAutomation#automation_document}

---

##### `automation_parameters`<sup>Required</sup> <a name="automation_parameters" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomationConfig.property.automationParameters"></a>

```python
automation_parameters: IResolvable | typing.Mapping[typing.List[str]]
```

- *Type:* cdktn.IResolvable | typing.Mapping[typing.List[str]]

Parameters to be passed to the Automation Document.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmquicksetup_lifecycle_automation#automation_parameters SsmquicksetupLifecycleAutomation#automation_parameters}

---

##### `resource_key`<sup>Required</sup> <a name="resource_key" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomationConfig.property.resourceKey"></a>

```python
resource_key: str
```

- *Type:* str

A unique identifier used for generating a unique logical ID for the custom resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmquicksetup_lifecycle_automation#resource_key SsmquicksetupLifecycleAutomation#resource_key}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomationConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmquicksetup_lifecycle_automation#tags SsmquicksetupLifecycleAutomation#tags}.

---



