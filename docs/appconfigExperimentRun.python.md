# `appconfigExperimentRun` Submodule <a name="`appconfigExperimentRun` Submodule" id="@cdktn/provider-awscc.appconfigExperimentRun"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppconfigExperimentRun <a name="AppconfigExperimentRun" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appconfig_experiment_run awscc_appconfig_experiment_run}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.Initializer"></a>

```python
from cdktn_provider_awscc import appconfig_experiment_run

appconfigExperimentRun.AppconfigExperimentRun(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  application_identifier: str,
  experiment_definition_identifier: str,
  exposure_percentage: typing.Union[int, float],
  description: str = None,
  tags: IResolvable | typing.List[AppconfigExperimentRunTags] = None,
  treatment_overrides: AppconfigExperimentRunTreatmentOverrides = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.Initializer.parameter.applicationIdentifier">application_identifier</a></code> | <code>str</code> | The application name or ID used to create the experiment run. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.Initializer.parameter.experimentDefinitionIdentifier">experiment_definition_identifier</a></code> | <code>str</code> | The experiment definition name or ID used to create the experiment run. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.Initializer.parameter.exposurePercentage">exposure_percentage</a></code> | <code>typing.Union[int, float]</code> | Percentage of traffic exposed to the experiment (0-100). |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.Initializer.parameter.description">description</a></code> | <code>str</code> | Description of the experiment run. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTags">AppconfigExperimentRunTags</a>]</code> | Tags to associate with the experiment run. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.Initializer.parameter.treatmentOverrides">treatment_overrides</a></code> | <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverrides">AppconfigExperimentRunTreatmentOverrides</a></code> | Treatment overrides for specific entities. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `application_identifier`<sup>Required</sup> <a name="application_identifier" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.Initializer.parameter.applicationIdentifier"></a>

- *Type:* str

The application name or ID used to create the experiment run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appconfig_experiment_run#application_identifier AppconfigExperimentRun#application_identifier}

---

##### `experiment_definition_identifier`<sup>Required</sup> <a name="experiment_definition_identifier" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.Initializer.parameter.experimentDefinitionIdentifier"></a>

- *Type:* str

The experiment definition name or ID used to create the experiment run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appconfig_experiment_run#experiment_definition_identifier AppconfigExperimentRun#experiment_definition_identifier}

---

##### `exposure_percentage`<sup>Required</sup> <a name="exposure_percentage" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.Initializer.parameter.exposurePercentage"></a>

- *Type:* typing.Union[int, float]

Percentage of traffic exposed to the experiment (0-100).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appconfig_experiment_run#exposure_percentage AppconfigExperimentRun#exposure_percentage}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.Initializer.parameter.description"></a>

- *Type:* str

Description of the experiment run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appconfig_experiment_run#description AppconfigExperimentRun#description}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTags">AppconfigExperimentRunTags</a>]

Tags to associate with the experiment run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appconfig_experiment_run#tags AppconfigExperimentRun#tags}

---

##### `treatment_overrides`<sup>Optional</sup> <a name="treatment_overrides" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.Initializer.parameter.treatmentOverrides"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverrides">AppconfigExperimentRunTreatmentOverrides</a>

Treatment overrides for specific entities.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appconfig_experiment_run#treatment_overrides AppconfigExperimentRun#treatment_overrides}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.putTreatmentOverrides">put_treatment_overrides</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.resetTreatmentOverrides">reset_treatment_overrides</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[AppconfigExperimentRunTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTags">AppconfigExperimentRunTags</a>]

---

##### `put_treatment_overrides` <a name="put_treatment_overrides" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.putTreatmentOverrides"></a>

```python
def put_treatment_overrides(
  inline: typing.Mapping[str] = None
) -> None
```

###### `inline`<sup>Optional</sup> <a name="inline" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.putTreatmentOverrides.parameter.inline"></a>

- *Type:* typing.Mapping[str]

Map of entity ID to treatment key (t1, t2, ..., or c for control).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appconfig_experiment_run#inline AppconfigExperimentRun#inline}

---

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_treatment_overrides` <a name="reset_treatment_overrides" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.resetTreatmentOverrides"></a>

```python
def reset_treatment_overrides() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a AppconfigExperimentRun resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.isConstruct"></a>

```python
from cdktn_provider_awscc import appconfig_experiment_run

appconfigExperimentRun.AppconfigExperimentRun.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.isTerraformElement"></a>

```python
from cdktn_provider_awscc import appconfig_experiment_run

appconfigExperimentRun.AppconfigExperimentRun.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.isTerraformResource"></a>

```python
from cdktn_provider_awscc import appconfig_experiment_run

appconfigExperimentRun.AppconfigExperimentRun.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import appconfig_experiment_run

appconfigExperimentRun.AppconfigExperimentRun.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a AppconfigExperimentRun resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the AppconfigExperimentRun to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing AppconfigExperimentRun that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appconfig_experiment_run#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the AppconfigExperimentRun to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.applicationId">application_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.experimentDefinitionId">experiment_definition_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.run">run</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.startedAt">started_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsList">AppconfigExperimentRunTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.treatmentOverrides">treatment_overrides</a></code> | <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverridesOutputReference">AppconfigExperimentRunTreatmentOverridesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.applicationIdentifierInput">application_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.experimentDefinitionIdentifierInput">experiment_definition_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.exposurePercentageInput">exposure_percentage_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTags">AppconfigExperimentRunTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.treatmentOverridesInput">treatment_overrides_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverrides">AppconfigExperimentRunTreatmentOverrides</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.applicationIdentifier">application_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.experimentDefinitionIdentifier">experiment_definition_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.exposurePercentage">exposure_percentage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `application_id`<sup>Required</sup> <a name="application_id" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.applicationId"></a>

```python
application_id: str
```

- *Type:* str

---

##### `experiment_definition_id`<sup>Required</sup> <a name="experiment_definition_id" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.experimentDefinitionId"></a>

```python
experiment_definition_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `run`<sup>Required</sup> <a name="run" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.run"></a>

```python
run: str
```

- *Type:* str

---

##### `started_at`<sup>Required</sup> <a name="started_at" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.startedAt"></a>

```python
started_at: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.tags"></a>

```python
tags: AppconfigExperimentRunTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsList">AppconfigExperimentRunTagsList</a>

---

##### `treatment_overrides`<sup>Required</sup> <a name="treatment_overrides" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.treatmentOverrides"></a>

```python
treatment_overrides: AppconfigExperimentRunTreatmentOverridesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverridesOutputReference">AppconfigExperimentRunTreatmentOverridesOutputReference</a>

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `application_identifier_input`<sup>Optional</sup> <a name="application_identifier_input" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.applicationIdentifierInput"></a>

```python
application_identifier_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `experiment_definition_identifier_input`<sup>Optional</sup> <a name="experiment_definition_identifier_input" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.experimentDefinitionIdentifierInput"></a>

```python
experiment_definition_identifier_input: str
```

- *Type:* str

---

##### `exposure_percentage_input`<sup>Optional</sup> <a name="exposure_percentage_input" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.exposurePercentageInput"></a>

```python
exposure_percentage_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[AppconfigExperimentRunTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTags">AppconfigExperimentRunTags</a>]

---

##### `treatment_overrides_input`<sup>Optional</sup> <a name="treatment_overrides_input" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.treatmentOverridesInput"></a>

```python
treatment_overrides_input: IResolvable | AppconfigExperimentRunTreatmentOverrides
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverrides">AppconfigExperimentRunTreatmentOverrides</a>

---

##### `application_identifier`<sup>Required</sup> <a name="application_identifier" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.applicationIdentifier"></a>

```python
application_identifier: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `experiment_definition_identifier`<sup>Required</sup> <a name="experiment_definition_identifier" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.experimentDefinitionIdentifier"></a>

```python
experiment_definition_identifier: str
```

- *Type:* str

---

##### `exposure_percentage`<sup>Required</sup> <a name="exposure_percentage" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.exposurePercentage"></a>

```python
exposure_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRun.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AppconfigExperimentRunConfig <a name="AppconfigExperimentRunConfig" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunConfig.Initializer"></a>

```python
from cdktn_provider_awscc import appconfig_experiment_run

appconfigExperimentRun.AppconfigExperimentRunConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  application_identifier: str,
  experiment_definition_identifier: str,
  exposure_percentage: typing.Union[int, float],
  description: str = None,
  tags: IResolvable | typing.List[AppconfigExperimentRunTags] = None,
  treatment_overrides: AppconfigExperimentRunTreatmentOverrides = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunConfig.property.applicationIdentifier">application_identifier</a></code> | <code>str</code> | The application name or ID used to create the experiment run. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunConfig.property.experimentDefinitionIdentifier">experiment_definition_identifier</a></code> | <code>str</code> | The experiment definition name or ID used to create the experiment run. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunConfig.property.exposurePercentage">exposure_percentage</a></code> | <code>typing.Union[int, float]</code> | Percentage of traffic exposed to the experiment (0-100). |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunConfig.property.description">description</a></code> | <code>str</code> | Description of the experiment run. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTags">AppconfigExperimentRunTags</a>]</code> | Tags to associate with the experiment run. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunConfig.property.treatmentOverrides">treatment_overrides</a></code> | <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverrides">AppconfigExperimentRunTreatmentOverrides</a></code> | Treatment overrides for specific entities. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `application_identifier`<sup>Required</sup> <a name="application_identifier" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunConfig.property.applicationIdentifier"></a>

```python
application_identifier: str
```

- *Type:* str

The application name or ID used to create the experiment run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appconfig_experiment_run#application_identifier AppconfigExperimentRun#application_identifier}

---

##### `experiment_definition_identifier`<sup>Required</sup> <a name="experiment_definition_identifier" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunConfig.property.experimentDefinitionIdentifier"></a>

```python
experiment_definition_identifier: str
```

- *Type:* str

The experiment definition name or ID used to create the experiment run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appconfig_experiment_run#experiment_definition_identifier AppconfigExperimentRun#experiment_definition_identifier}

---

##### `exposure_percentage`<sup>Required</sup> <a name="exposure_percentage" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunConfig.property.exposurePercentage"></a>

```python
exposure_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Percentage of traffic exposed to the experiment (0-100).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appconfig_experiment_run#exposure_percentage AppconfigExperimentRun#exposure_percentage}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Description of the experiment run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appconfig_experiment_run#description AppconfigExperimentRun#description}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[AppconfigExperimentRunTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTags">AppconfigExperimentRunTags</a>]

Tags to associate with the experiment run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appconfig_experiment_run#tags AppconfigExperimentRun#tags}

---

##### `treatment_overrides`<sup>Optional</sup> <a name="treatment_overrides" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunConfig.property.treatmentOverrides"></a>

```python
treatment_overrides: AppconfigExperimentRunTreatmentOverrides
```

- *Type:* <a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverrides">AppconfigExperimentRunTreatmentOverrides</a>

Treatment overrides for specific entities.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appconfig_experiment_run#treatment_overrides AppconfigExperimentRun#treatment_overrides}

---

### AppconfigExperimentRunTags <a name="AppconfigExperimentRunTags" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTags.Initializer"></a>

```python
from cdktn_provider_awscc import appconfig_experiment_run

appconfigExperimentRun.AppconfigExperimentRunTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTags.property.key">key</a></code> | <code>str</code> | The tag key. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTags.property.value">value</a></code> | <code>str</code> | The tag value. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTags.property.key"></a>

```python
key: str
```

- *Type:* str

The tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appconfig_experiment_run#key AppconfigExperimentRun#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTags.property.value"></a>

```python
value: str
```

- *Type:* str

The tag value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appconfig_experiment_run#value AppconfigExperimentRun#value}

---

### AppconfigExperimentRunTreatmentOverrides <a name="AppconfigExperimentRunTreatmentOverrides" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverrides.Initializer"></a>

```python
from cdktn_provider_awscc import appconfig_experiment_run

appconfigExperimentRun.AppconfigExperimentRunTreatmentOverrides(
  inline: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverrides.property.inline">inline</a></code> | <code>typing.Mapping[str]</code> | Map of entity ID to treatment key (t1, t2, ..., or c for control). |

---

##### `inline`<sup>Optional</sup> <a name="inline" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverrides.property.inline"></a>

```python
inline: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Map of entity ID to treatment key (t1, t2, ..., or c for control).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appconfig_experiment_run#inline AppconfigExperimentRun#inline}

---

## Classes <a name="Classes" id="Classes"></a>

### AppconfigExperimentRunTagsList <a name="AppconfigExperimentRunTagsList" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import appconfig_experiment_run

appconfigExperimentRun.AppconfigExperimentRunTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AppconfigExperimentRunTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTags">AppconfigExperimentRunTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[AppconfigExperimentRunTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTags">AppconfigExperimentRunTags</a>]

---


### AppconfigExperimentRunTagsOutputReference <a name="AppconfigExperimentRunTagsOutputReference" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import appconfig_experiment_run

appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTags">AppconfigExperimentRunTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AppconfigExperimentRunTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTags">AppconfigExperimentRunTags</a>

---


### AppconfigExperimentRunTreatmentOverridesOutputReference <a name="AppconfigExperimentRunTreatmentOverridesOutputReference" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverridesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import appconfig_experiment_run

appconfigExperimentRun.AppconfigExperimentRunTreatmentOverridesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverridesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverridesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverridesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverridesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverridesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverridesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverridesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverridesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverridesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverridesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverridesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverridesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverridesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverridesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverridesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverridesOutputReference.resetInline">reset_inline</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverridesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverridesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverridesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverridesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverridesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverridesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverridesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverridesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverridesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverridesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverridesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverridesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverridesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_inline` <a name="reset_inline" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverridesOutputReference.resetInline"></a>

```python
def reset_inline() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverridesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverridesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverridesOutputReference.property.inlineInput">inline_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverridesOutputReference.property.inline">inline</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverridesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverrides">AppconfigExperimentRunTreatmentOverrides</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverridesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverridesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `inline_input`<sup>Optional</sup> <a name="inline_input" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverridesOutputReference.property.inlineInput"></a>

```python
inline_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `inline`<sup>Required</sup> <a name="inline" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverridesOutputReference.property.inline"></a>

```python
inline: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverridesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AppconfigExperimentRunTreatmentOverrides
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appconfigExperimentRun.AppconfigExperimentRunTreatmentOverrides">AppconfigExperimentRunTreatmentOverrides</a>

---



