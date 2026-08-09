# `inspectorAssessmentTemplate` Submodule <a name="`inspectorAssessmentTemplate` Submodule" id="@cdktn/provider-awscc.inspectorAssessmentTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### InspectorAssessmentTemplate <a name="InspectorAssessmentTemplate" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/inspector_assessment_template awscc_inspector_assessment_template}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.Initializer"></a>

```python
from cdktn_provider_awscc import inspector_assessment_template

inspectorAssessmentTemplate.InspectorAssessmentTemplate(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  assessment_target_arn: str,
  duration_in_seconds: typing.Union[int, float],
  rules_package_arns: typing.List[str],
  assessment_template_name: str = None,
  user_attributes_for_findings: IResolvable | typing.List[InspectorAssessmentTemplateUserAttributesForFindings] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.Initializer.parameter.assessmentTargetArn">assessment_target_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/inspector_assessment_template#assessment_target_arn InspectorAssessmentTemplate#assessment_target_arn}. |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.Initializer.parameter.durationInSeconds">duration_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/inspector_assessment_template#duration_in_seconds InspectorAssessmentTemplate#duration_in_seconds}. |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.Initializer.parameter.rulesPackageArns">rules_package_arns</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/inspector_assessment_template#rules_package_arns InspectorAssessmentTemplate#rules_package_arns}. |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.Initializer.parameter.assessmentTemplateName">assessment_template_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/inspector_assessment_template#assessment_template_name InspectorAssessmentTemplate#assessment_template_name}. |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.Initializer.parameter.userAttributesForFindings">user_attributes_for_findings</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindings">InspectorAssessmentTemplateUserAttributesForFindings</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/inspector_assessment_template#user_attributes_for_findings InspectorAssessmentTemplate#user_attributes_for_findings}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `assessment_target_arn`<sup>Required</sup> <a name="assessment_target_arn" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.Initializer.parameter.assessmentTargetArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/inspector_assessment_template#assessment_target_arn InspectorAssessmentTemplate#assessment_target_arn}.

---

##### `duration_in_seconds`<sup>Required</sup> <a name="duration_in_seconds" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.Initializer.parameter.durationInSeconds"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/inspector_assessment_template#duration_in_seconds InspectorAssessmentTemplate#duration_in_seconds}.

---

##### `rules_package_arns`<sup>Required</sup> <a name="rules_package_arns" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.Initializer.parameter.rulesPackageArns"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/inspector_assessment_template#rules_package_arns InspectorAssessmentTemplate#rules_package_arns}.

---

##### `assessment_template_name`<sup>Optional</sup> <a name="assessment_template_name" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.Initializer.parameter.assessmentTemplateName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/inspector_assessment_template#assessment_template_name InspectorAssessmentTemplate#assessment_template_name}.

---

##### `user_attributes_for_findings`<sup>Optional</sup> <a name="user_attributes_for_findings" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.Initializer.parameter.userAttributesForFindings"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindings">InspectorAssessmentTemplateUserAttributesForFindings</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/inspector_assessment_template#user_attributes_for_findings InspectorAssessmentTemplate#user_attributes_for_findings}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.putUserAttributesForFindings">put_user_attributes_for_findings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.resetAssessmentTemplateName">reset_assessment_template_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.resetUserAttributesForFindings">reset_user_attributes_for_findings</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_user_attributes_for_findings` <a name="put_user_attributes_for_findings" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.putUserAttributesForFindings"></a>

```python
def put_user_attributes_for_findings(
  value: IResolvable | typing.List[InspectorAssessmentTemplateUserAttributesForFindings]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.putUserAttributesForFindings.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindings">InspectorAssessmentTemplateUserAttributesForFindings</a>]

---

##### `reset_assessment_template_name` <a name="reset_assessment_template_name" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.resetAssessmentTemplateName"></a>

```python
def reset_assessment_template_name() -> None
```

##### `reset_user_attributes_for_findings` <a name="reset_user_attributes_for_findings" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.resetUserAttributesForFindings"></a>

```python
def reset_user_attributes_for_findings() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a InspectorAssessmentTemplate resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.isConstruct"></a>

```python
from cdktn_provider_awscc import inspector_assessment_template

inspectorAssessmentTemplate.InspectorAssessmentTemplate.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.isTerraformElement"></a>

```python
from cdktn_provider_awscc import inspector_assessment_template

inspectorAssessmentTemplate.InspectorAssessmentTemplate.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.isTerraformResource"></a>

```python
from cdktn_provider_awscc import inspector_assessment_template

inspectorAssessmentTemplate.InspectorAssessmentTemplate.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import inspector_assessment_template

inspectorAssessmentTemplate.InspectorAssessmentTemplate.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a InspectorAssessmentTemplate resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the InspectorAssessmentTemplate to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing InspectorAssessmentTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/inspector_assessment_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the InspectorAssessmentTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.userAttributesForFindings">user_attributes_for_findings</a></code> | <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsList">InspectorAssessmentTemplateUserAttributesForFindingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.assessmentTargetArnInput">assessment_target_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.assessmentTemplateNameInput">assessment_template_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.durationInSecondsInput">duration_in_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.rulesPackageArnsInput">rules_package_arns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.userAttributesForFindingsInput">user_attributes_for_findings_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindings">InspectorAssessmentTemplateUserAttributesForFindings</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.assessmentTargetArn">assessment_target_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.assessmentTemplateName">assessment_template_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.durationInSeconds">duration_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.rulesPackageArns">rules_package_arns</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `user_attributes_for_findings`<sup>Required</sup> <a name="user_attributes_for_findings" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.userAttributesForFindings"></a>

```python
user_attributes_for_findings: InspectorAssessmentTemplateUserAttributesForFindingsList
```

- *Type:* <a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsList">InspectorAssessmentTemplateUserAttributesForFindingsList</a>

---

##### `assessment_target_arn_input`<sup>Optional</sup> <a name="assessment_target_arn_input" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.assessmentTargetArnInput"></a>

```python
assessment_target_arn_input: str
```

- *Type:* str

---

##### `assessment_template_name_input`<sup>Optional</sup> <a name="assessment_template_name_input" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.assessmentTemplateNameInput"></a>

```python
assessment_template_name_input: str
```

- *Type:* str

---

##### `duration_in_seconds_input`<sup>Optional</sup> <a name="duration_in_seconds_input" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.durationInSecondsInput"></a>

```python
duration_in_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `rules_package_arns_input`<sup>Optional</sup> <a name="rules_package_arns_input" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.rulesPackageArnsInput"></a>

```python
rules_package_arns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `user_attributes_for_findings_input`<sup>Optional</sup> <a name="user_attributes_for_findings_input" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.userAttributesForFindingsInput"></a>

```python
user_attributes_for_findings_input: IResolvable | typing.List[InspectorAssessmentTemplateUserAttributesForFindings]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindings">InspectorAssessmentTemplateUserAttributesForFindings</a>]

---

##### `assessment_target_arn`<sup>Required</sup> <a name="assessment_target_arn" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.assessmentTargetArn"></a>

```python
assessment_target_arn: str
```

- *Type:* str

---

##### `assessment_template_name`<sup>Required</sup> <a name="assessment_template_name" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.assessmentTemplateName"></a>

```python
assessment_template_name: str
```

- *Type:* str

---

##### `duration_in_seconds`<sup>Required</sup> <a name="duration_in_seconds" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.durationInSeconds"></a>

```python
duration_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `rules_package_arns`<sup>Required</sup> <a name="rules_package_arns" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.rulesPackageArns"></a>

```python
rules_package_arns: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### InspectorAssessmentTemplateConfig <a name="InspectorAssessmentTemplateConfig" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.Initializer"></a>

```python
from cdktn_provider_awscc import inspector_assessment_template

inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  assessment_target_arn: str,
  duration_in_seconds: typing.Union[int, float],
  rules_package_arns: typing.List[str],
  assessment_template_name: str = None,
  user_attributes_for_findings: IResolvable | typing.List[InspectorAssessmentTemplateUserAttributesForFindings] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.property.assessmentTargetArn">assessment_target_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/inspector_assessment_template#assessment_target_arn InspectorAssessmentTemplate#assessment_target_arn}. |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.property.durationInSeconds">duration_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/inspector_assessment_template#duration_in_seconds InspectorAssessmentTemplate#duration_in_seconds}. |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.property.rulesPackageArns">rules_package_arns</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/inspector_assessment_template#rules_package_arns InspectorAssessmentTemplate#rules_package_arns}. |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.property.assessmentTemplateName">assessment_template_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/inspector_assessment_template#assessment_template_name InspectorAssessmentTemplate#assessment_template_name}. |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.property.userAttributesForFindings">user_attributes_for_findings</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindings">InspectorAssessmentTemplateUserAttributesForFindings</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/inspector_assessment_template#user_attributes_for_findings InspectorAssessmentTemplate#user_attributes_for_findings}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `assessment_target_arn`<sup>Required</sup> <a name="assessment_target_arn" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.property.assessmentTargetArn"></a>

```python
assessment_target_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/inspector_assessment_template#assessment_target_arn InspectorAssessmentTemplate#assessment_target_arn}.

---

##### `duration_in_seconds`<sup>Required</sup> <a name="duration_in_seconds" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.property.durationInSeconds"></a>

```python
duration_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/inspector_assessment_template#duration_in_seconds InspectorAssessmentTemplate#duration_in_seconds}.

---

##### `rules_package_arns`<sup>Required</sup> <a name="rules_package_arns" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.property.rulesPackageArns"></a>

```python
rules_package_arns: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/inspector_assessment_template#rules_package_arns InspectorAssessmentTemplate#rules_package_arns}.

---

##### `assessment_template_name`<sup>Optional</sup> <a name="assessment_template_name" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.property.assessmentTemplateName"></a>

```python
assessment_template_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/inspector_assessment_template#assessment_template_name InspectorAssessmentTemplate#assessment_template_name}.

---

##### `user_attributes_for_findings`<sup>Optional</sup> <a name="user_attributes_for_findings" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.property.userAttributesForFindings"></a>

```python
user_attributes_for_findings: IResolvable | typing.List[InspectorAssessmentTemplateUserAttributesForFindings]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindings">InspectorAssessmentTemplateUserAttributesForFindings</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/inspector_assessment_template#user_attributes_for_findings InspectorAssessmentTemplate#user_attributes_for_findings}.

---

### InspectorAssessmentTemplateUserAttributesForFindings <a name="InspectorAssessmentTemplateUserAttributesForFindings" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindings.Initializer"></a>

```python
from cdktn_provider_awscc import inspector_assessment_template

inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindings(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindings.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/inspector_assessment_template#key InspectorAssessmentTemplate#key}. |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindings.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/inspector_assessment_template#value InspectorAssessmentTemplate#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindings.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/inspector_assessment_template#key InspectorAssessmentTemplate#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindings.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/inspector_assessment_template#value InspectorAssessmentTemplate#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### InspectorAssessmentTemplateUserAttributesForFindingsList <a name="InspectorAssessmentTemplateUserAttributesForFindingsList" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsList.Initializer"></a>

```python
from cdktn_provider_awscc import inspector_assessment_template

inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> InspectorAssessmentTemplateUserAttributesForFindingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindings">InspectorAssessmentTemplateUserAttributesForFindings</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[InspectorAssessmentTemplateUserAttributesForFindings]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindings">InspectorAssessmentTemplateUserAttributesForFindings</a>]

---


### InspectorAssessmentTemplateUserAttributesForFindingsOutputReference <a name="InspectorAssessmentTemplateUserAttributesForFindingsOutputReference" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import inspector_assessment_template

inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindings">InspectorAssessmentTemplateUserAttributesForFindings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | InspectorAssessmentTemplateUserAttributesForFindings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindings">InspectorAssessmentTemplateUserAttributesForFindings</a>

---



