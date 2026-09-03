# `auditmanagerAssessmentFramework` Submodule <a name="`auditmanagerAssessmentFramework` Submodule" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AuditmanagerAssessmentFramework <a name="AuditmanagerAssessmentFramework" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/auditmanager_assessment_framework awscc_auditmanager_assessment_framework}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.Initializer"></a>

```python
from cdktn_provider_awscc import auditmanager_assessment_framework

auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  control_sets: IResolvable | typing.List[AuditmanagerAssessmentFrameworkControlSets],
  name: str,
  compliance_type: str = None,
  description: str = None,
  tags: IResolvable | typing.List[AuditmanagerAssessmentFrameworkTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.Initializer.parameter.controlSets">control_sets</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSets">AuditmanagerAssessmentFrameworkControlSets</a>]</code> | The control sets that are associated with the framework. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the framework. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.Initializer.parameter.complianceType">compliance_type</a></code> | <code>str</code> | The compliance type that the framework supports, such as CIS or HIPAA. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.Initializer.parameter.description">description</a></code> | <code>str</code> | The description of the framework. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTags">AuditmanagerAssessmentFrameworkTags</a>]</code> | The tags associated with the framework. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `control_sets`<sup>Required</sup> <a name="control_sets" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.Initializer.parameter.controlSets"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSets">AuditmanagerAssessmentFrameworkControlSets</a>]

The control sets that are associated with the framework.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/auditmanager_assessment_framework#control_sets AuditmanagerAssessmentFramework#control_sets}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.Initializer.parameter.name"></a>

- *Type:* str

The name of the framework.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/auditmanager_assessment_framework#name AuditmanagerAssessmentFramework#name}

---

##### `compliance_type`<sup>Optional</sup> <a name="compliance_type" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.Initializer.parameter.complianceType"></a>

- *Type:* str

The compliance type that the framework supports, such as CIS or HIPAA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/auditmanager_assessment_framework#compliance_type AuditmanagerAssessmentFramework#compliance_type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.Initializer.parameter.description"></a>

- *Type:* str

The description of the framework.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/auditmanager_assessment_framework#description AuditmanagerAssessmentFramework#description}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTags">AuditmanagerAssessmentFrameworkTags</a>]

The tags associated with the framework.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/auditmanager_assessment_framework#tags AuditmanagerAssessmentFramework#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.putControlSets">put_control_sets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.resetComplianceType">reset_compliance_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_control_sets` <a name="put_control_sets" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.putControlSets"></a>

```python
def put_control_sets(
  value: IResolvable | typing.List[AuditmanagerAssessmentFrameworkControlSets]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.putControlSets.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSets">AuditmanagerAssessmentFrameworkControlSets</a>]

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[AuditmanagerAssessmentFrameworkTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTags">AuditmanagerAssessmentFrameworkTags</a>]

---

##### `reset_compliance_type` <a name="reset_compliance_type" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.resetComplianceType"></a>

```python
def reset_compliance_type() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a AuditmanagerAssessmentFramework resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.isConstruct"></a>

```python
from cdktn_provider_awscc import auditmanager_assessment_framework

auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.isTerraformElement"></a>

```python
from cdktn_provider_awscc import auditmanager_assessment_framework

auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.isTerraformResource"></a>

```python
from cdktn_provider_awscc import auditmanager_assessment_framework

auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import auditmanager_assessment_framework

auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a AuditmanagerAssessmentFramework resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the AuditmanagerAssessmentFramework to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing AuditmanagerAssessmentFramework that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/auditmanager_assessment_framework#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the AuditmanagerAssessmentFramework to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.controlSets">control_sets</a></code> | <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsList">AuditmanagerAssessmentFrameworkControlSetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.createdBy">created_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.frameworkId">framework_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.lastUpdatedAt">last_updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.lastUpdatedBy">last_updated_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsList">AuditmanagerAssessmentFrameworkTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.complianceTypeInput">compliance_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.controlSetsInput">control_sets_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSets">AuditmanagerAssessmentFrameworkControlSets</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTags">AuditmanagerAssessmentFrameworkTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.complianceType">compliance_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `control_sets`<sup>Required</sup> <a name="control_sets" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.controlSets"></a>

```python
control_sets: AuditmanagerAssessmentFrameworkControlSetsList
```

- *Type:* <a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsList">AuditmanagerAssessmentFrameworkControlSetsList</a>

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `created_by`<sup>Required</sup> <a name="created_by" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.createdBy"></a>

```python
created_by: str
```

- *Type:* str

---

##### `framework_id`<sup>Required</sup> <a name="framework_id" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.frameworkId"></a>

```python
framework_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `last_updated_at`<sup>Required</sup> <a name="last_updated_at" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.lastUpdatedAt"></a>

```python
last_updated_at: str
```

- *Type:* str

---

##### `last_updated_by`<sup>Required</sup> <a name="last_updated_by" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.lastUpdatedBy"></a>

```python
last_updated_by: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.tags"></a>

```python
tags: AuditmanagerAssessmentFrameworkTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsList">AuditmanagerAssessmentFrameworkTagsList</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `compliance_type_input`<sup>Optional</sup> <a name="compliance_type_input" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.complianceTypeInput"></a>

```python
compliance_type_input: str
```

- *Type:* str

---

##### `control_sets_input`<sup>Optional</sup> <a name="control_sets_input" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.controlSetsInput"></a>

```python
control_sets_input: IResolvable | typing.List[AuditmanagerAssessmentFrameworkControlSets]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSets">AuditmanagerAssessmentFrameworkControlSets</a>]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[AuditmanagerAssessmentFrameworkTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTags">AuditmanagerAssessmentFrameworkTags</a>]

---

##### `compliance_type`<sup>Required</sup> <a name="compliance_type" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.complianceType"></a>

```python
compliance_type: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AuditmanagerAssessmentFrameworkConfig <a name="AuditmanagerAssessmentFrameworkConfig" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkConfig.Initializer"></a>

```python
from cdktn_provider_awscc import auditmanager_assessment_framework

auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  control_sets: IResolvable | typing.List[AuditmanagerAssessmentFrameworkControlSets],
  name: str,
  compliance_type: str = None,
  description: str = None,
  tags: IResolvable | typing.List[AuditmanagerAssessmentFrameworkTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkConfig.property.controlSets">control_sets</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSets">AuditmanagerAssessmentFrameworkControlSets</a>]</code> | The control sets that are associated with the framework. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkConfig.property.name">name</a></code> | <code>str</code> | The name of the framework. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkConfig.property.complianceType">compliance_type</a></code> | <code>str</code> | The compliance type that the framework supports, such as CIS or HIPAA. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkConfig.property.description">description</a></code> | <code>str</code> | The description of the framework. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTags">AuditmanagerAssessmentFrameworkTags</a>]</code> | The tags associated with the framework. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `control_sets`<sup>Required</sup> <a name="control_sets" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkConfig.property.controlSets"></a>

```python
control_sets: IResolvable | typing.List[AuditmanagerAssessmentFrameworkControlSets]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSets">AuditmanagerAssessmentFrameworkControlSets</a>]

The control sets that are associated with the framework.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/auditmanager_assessment_framework#control_sets AuditmanagerAssessmentFramework#control_sets}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the framework.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/auditmanager_assessment_framework#name AuditmanagerAssessmentFramework#name}

---

##### `compliance_type`<sup>Optional</sup> <a name="compliance_type" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkConfig.property.complianceType"></a>

```python
compliance_type: str
```

- *Type:* str

The compliance type that the framework supports, such as CIS or HIPAA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/auditmanager_assessment_framework#compliance_type AuditmanagerAssessmentFramework#compliance_type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The description of the framework.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/auditmanager_assessment_framework#description AuditmanagerAssessmentFramework#description}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[AuditmanagerAssessmentFrameworkTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTags">AuditmanagerAssessmentFrameworkTags</a>]

The tags associated with the framework.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/auditmanager_assessment_framework#tags AuditmanagerAssessmentFramework#tags}

---

### AuditmanagerAssessmentFrameworkControlSets <a name="AuditmanagerAssessmentFrameworkControlSets" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSets.Initializer"></a>

```python
from cdktn_provider_awscc import auditmanager_assessment_framework

auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSets(
  controls: IResolvable | typing.List[AuditmanagerAssessmentFrameworkControlSetsControls],
  name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSets.property.controls">controls</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControls">AuditmanagerAssessmentFrameworkControlSetsControls</a>]</code> | The list of controls within the control set. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSets.property.name">name</a></code> | <code>str</code> | The name of the control set. |

---

##### `controls`<sup>Required</sup> <a name="controls" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSets.property.controls"></a>

```python
controls: IResolvable | typing.List[AuditmanagerAssessmentFrameworkControlSetsControls]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControls">AuditmanagerAssessmentFrameworkControlSetsControls</a>]

The list of controls within the control set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/auditmanager_assessment_framework#controls AuditmanagerAssessmentFramework#controls}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSets.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the control set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/auditmanager_assessment_framework#name AuditmanagerAssessmentFramework#name}

---

### AuditmanagerAssessmentFrameworkControlSetsControls <a name="AuditmanagerAssessmentFrameworkControlSetsControls" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControls"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControls.Initializer"></a>

```python
from cdktn_provider_awscc import auditmanager_assessment_framework

auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControls(
  id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControls.property.id">id</a></code> | <code>str</code> | The unique identifier of the control. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControls.property.id"></a>

```python
id: str
```

- *Type:* str

The unique identifier of the control.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/auditmanager_assessment_framework#id AuditmanagerAssessmentFramework#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### AuditmanagerAssessmentFrameworkTags <a name="AuditmanagerAssessmentFrameworkTags" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTags.Initializer"></a>

```python
from cdktn_provider_awscc import auditmanager_assessment_framework

auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/auditmanager_assessment_framework#key AuditmanagerAssessmentFramework#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/auditmanager_assessment_framework#value AuditmanagerAssessmentFramework#value}

---

## Classes <a name="Classes" id="Classes"></a>

### AuditmanagerAssessmentFrameworkControlSetsControlsList <a name="AuditmanagerAssessmentFrameworkControlSetsControlsList" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsList.Initializer"></a>

```python
from cdktn_provider_awscc import auditmanager_assessment_framework

auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControls">AuditmanagerAssessmentFrameworkControlSetsControls</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[AuditmanagerAssessmentFrameworkControlSetsControls]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControls">AuditmanagerAssessmentFrameworkControlSetsControls</a>]

---


### AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference <a name="AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import auditmanager_assessment_framework

auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControls">AuditmanagerAssessmentFrameworkControlSetsControls</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AuditmanagerAssessmentFrameworkControlSetsControls
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControls">AuditmanagerAssessmentFrameworkControlSetsControls</a>

---


### AuditmanagerAssessmentFrameworkControlSetsList <a name="AuditmanagerAssessmentFrameworkControlSetsList" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsList.Initializer"></a>

```python
from cdktn_provider_awscc import auditmanager_assessment_framework

auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AuditmanagerAssessmentFrameworkControlSetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSets">AuditmanagerAssessmentFrameworkControlSets</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[AuditmanagerAssessmentFrameworkControlSets]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSets">AuditmanagerAssessmentFrameworkControlSets</a>]

---


### AuditmanagerAssessmentFrameworkControlSetsOutputReference <a name="AuditmanagerAssessmentFrameworkControlSetsOutputReference" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import auditmanager_assessment_framework

auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.putControls">put_controls</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_controls` <a name="put_controls" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.putControls"></a>

```python
def put_controls(
  value: IResolvable | typing.List[AuditmanagerAssessmentFrameworkControlSetsControls]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.putControls.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControls">AuditmanagerAssessmentFrameworkControlSetsControls</a>]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.property.controls">controls</a></code> | <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsList">AuditmanagerAssessmentFrameworkControlSetsControlsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.property.controlsInput">controls_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControls">AuditmanagerAssessmentFrameworkControlSetsControls</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSets">AuditmanagerAssessmentFrameworkControlSets</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `controls`<sup>Required</sup> <a name="controls" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.property.controls"></a>

```python
controls: AuditmanagerAssessmentFrameworkControlSetsControlsList
```

- *Type:* <a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsList">AuditmanagerAssessmentFrameworkControlSetsControlsList</a>

---

##### `controls_input`<sup>Optional</sup> <a name="controls_input" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.property.controlsInput"></a>

```python
controls_input: IResolvable | typing.List[AuditmanagerAssessmentFrameworkControlSetsControls]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControls">AuditmanagerAssessmentFrameworkControlSetsControls</a>]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AuditmanagerAssessmentFrameworkControlSets
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSets">AuditmanagerAssessmentFrameworkControlSets</a>

---


### AuditmanagerAssessmentFrameworkTagsList <a name="AuditmanagerAssessmentFrameworkTagsList" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import auditmanager_assessment_framework

auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AuditmanagerAssessmentFrameworkTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTags">AuditmanagerAssessmentFrameworkTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[AuditmanagerAssessmentFrameworkTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTags">AuditmanagerAssessmentFrameworkTags</a>]

---


### AuditmanagerAssessmentFrameworkTagsOutputReference <a name="AuditmanagerAssessmentFrameworkTagsOutputReference" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import auditmanager_assessment_framework

auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTags">AuditmanagerAssessmentFrameworkTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AuditmanagerAssessmentFrameworkTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTags">AuditmanagerAssessmentFrameworkTags</a>

---



