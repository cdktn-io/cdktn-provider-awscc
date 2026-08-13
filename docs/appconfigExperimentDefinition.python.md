# `appconfigExperimentDefinition` Submodule <a name="`appconfigExperimentDefinition` Submodule" id="@cdktn/provider-awscc.appconfigExperimentDefinition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppconfigExperimentDefinition <a name="AppconfigExperimentDefinition" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appconfig_experiment_definition awscc_appconfig_experiment_definition}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.Initializer"></a>

```python
from cdktn_provider_awscc import appconfig_experiment_definition

appconfigExperimentDefinition.AppconfigExperimentDefinition(
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
  audience_rule: str,
  configuration_profile_identifier: str,
  control: AppconfigExperimentDefinitionControl,
  environment_identifier: str,
  flag_key: str,
  name: str,
  treatments: IResolvable | typing.List[AppconfigExperimentDefinitionTreatments],
  audience_description: str = None,
  hypothesis: str = None,
  launch_criteria: str = None,
  tags: IResolvable | typing.List[AppconfigExperimentDefinitionTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.Initializer.parameter.applicationIdentifier">application_identifier</a></code> | <code>str</code> | The application ID, name, or ARN. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.Initializer.parameter.audienceRule">audience_rule</a></code> | <code>str</code> | Rule expression defining the experiment audience. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.Initializer.parameter.configurationProfileIdentifier">configuration_profile_identifier</a></code> | <code>str</code> | The configuration profile ID, name, or ARN. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.Initializer.parameter.control">control</a></code> | <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControl">AppconfigExperimentDefinitionControl</a></code> | The control (baseline) variant. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.Initializer.parameter.environmentIdentifier">environment_identifier</a></code> | <code>str</code> | The environment ID, name, or ARN. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.Initializer.parameter.flagKey">flag_key</a></code> | <code>str</code> | The key of the existing flag in the configuration profile to experiment on. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.Initializer.parameter.name">name</a></code> | <code>str</code> | A name for the experiment definition. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.Initializer.parameter.treatments">treatments</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatments">AppconfigExperimentDefinitionTreatments</a>]</code> | Treatment variants (1-5). |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.Initializer.parameter.audienceDescription">audience_description</a></code> | <code>str</code> | Human-readable description of the audience. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.Initializer.parameter.hypothesis">hypothesis</a></code> | <code>str</code> | The hypothesis of the experiment. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.Initializer.parameter.launchCriteria">launch_criteria</a></code> | <code>str</code> | Criteria for launching the experiment. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTags">AppconfigExperimentDefinitionTags</a>]</code> | Tags to associate with the experiment definition. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `application_identifier`<sup>Required</sup> <a name="application_identifier" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.Initializer.parameter.applicationIdentifier"></a>

- *Type:* str

The application ID, name, or ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appconfig_experiment_definition#application_identifier AppconfigExperimentDefinition#application_identifier}

---

##### `audience_rule`<sup>Required</sup> <a name="audience_rule" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.Initializer.parameter.audienceRule"></a>

- *Type:* str

Rule expression defining the experiment audience.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appconfig_experiment_definition#audience_rule AppconfigExperimentDefinition#audience_rule}

---

##### `configuration_profile_identifier`<sup>Required</sup> <a name="configuration_profile_identifier" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.Initializer.parameter.configurationProfileIdentifier"></a>

- *Type:* str

The configuration profile ID, name, or ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appconfig_experiment_definition#configuration_profile_identifier AppconfigExperimentDefinition#configuration_profile_identifier}

---

##### `control`<sup>Required</sup> <a name="control" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.Initializer.parameter.control"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControl">AppconfigExperimentDefinitionControl</a>

The control (baseline) variant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appconfig_experiment_definition#control AppconfigExperimentDefinition#control}

---

##### `environment_identifier`<sup>Required</sup> <a name="environment_identifier" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.Initializer.parameter.environmentIdentifier"></a>

- *Type:* str

The environment ID, name, or ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appconfig_experiment_definition#environment_identifier AppconfigExperimentDefinition#environment_identifier}

---

##### `flag_key`<sup>Required</sup> <a name="flag_key" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.Initializer.parameter.flagKey"></a>

- *Type:* str

The key of the existing flag in the configuration profile to experiment on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appconfig_experiment_definition#flag_key AppconfigExperimentDefinition#flag_key}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.Initializer.parameter.name"></a>

- *Type:* str

A name for the experiment definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appconfig_experiment_definition#name AppconfigExperimentDefinition#name}

---

##### `treatments`<sup>Required</sup> <a name="treatments" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.Initializer.parameter.treatments"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatments">AppconfigExperimentDefinitionTreatments</a>]

Treatment variants (1-5).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appconfig_experiment_definition#treatments AppconfigExperimentDefinition#treatments}

---

##### `audience_description`<sup>Optional</sup> <a name="audience_description" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.Initializer.parameter.audienceDescription"></a>

- *Type:* str

Human-readable description of the audience.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appconfig_experiment_definition#audience_description AppconfigExperimentDefinition#audience_description}

---

##### `hypothesis`<sup>Optional</sup> <a name="hypothesis" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.Initializer.parameter.hypothesis"></a>

- *Type:* str

The hypothesis of the experiment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appconfig_experiment_definition#hypothesis AppconfigExperimentDefinition#hypothesis}

---

##### `launch_criteria`<sup>Optional</sup> <a name="launch_criteria" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.Initializer.parameter.launchCriteria"></a>

- *Type:* str

Criteria for launching the experiment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appconfig_experiment_definition#launch_criteria AppconfigExperimentDefinition#launch_criteria}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTags">AppconfigExperimentDefinitionTags</a>]

Tags to associate with the experiment definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appconfig_experiment_definition#tags AppconfigExperimentDefinition#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.putControl">put_control</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.putTreatments">put_treatments</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.resetAudienceDescription">reset_audience_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.resetHypothesis">reset_hypothesis</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.resetLaunchCriteria">reset_launch_criteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_control` <a name="put_control" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.putControl"></a>

```python
def put_control(
  enabled: bool | IResolvable,
  weight: typing.Union[int, float],
  attribute_values: IResolvable | typing.Mapping[AppconfigExperimentDefinitionControlAttributeValues] = None,
  description: str = None
) -> None
```

###### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.putControl.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

Whether the flag is enabled for this variant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appconfig_experiment_definition#enabled AppconfigExperimentDefinition#enabled}

---

###### `weight`<sup>Required</sup> <a name="weight" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.putControl.parameter.weight"></a>

- *Type:* typing.Union[int, float]

Traffic weight percentage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appconfig_experiment_definition#weight AppconfigExperimentDefinition#weight}

---

###### `attribute_values`<sup>Optional</sup> <a name="attribute_values" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.putControl.parameter.attributeValues"></a>

- *Type:* cdktn.IResolvable | typing.Mapping[<a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValues">AppconfigExperimentDefinitionControlAttributeValues</a>]

Map of attribute name to attribute value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appconfig_experiment_definition#attribute_values AppconfigExperimentDefinition#attribute_values}

---

###### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.putControl.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appconfig_experiment_definition#description AppconfigExperimentDefinition#description}.

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[AppconfigExperimentDefinitionTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTags">AppconfigExperimentDefinitionTags</a>]

---

##### `put_treatments` <a name="put_treatments" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.putTreatments"></a>

```python
def put_treatments(
  value: IResolvable | typing.List[AppconfigExperimentDefinitionTreatments]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.putTreatments.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatments">AppconfigExperimentDefinitionTreatments</a>]

---

##### `reset_audience_description` <a name="reset_audience_description" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.resetAudienceDescription"></a>

```python
def reset_audience_description() -> None
```

##### `reset_hypothesis` <a name="reset_hypothesis" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.resetHypothesis"></a>

```python
def reset_hypothesis() -> None
```

##### `reset_launch_criteria` <a name="reset_launch_criteria" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.resetLaunchCriteria"></a>

```python
def reset_launch_criteria() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a AppconfigExperimentDefinition resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.isConstruct"></a>

```python
from cdktn_provider_awscc import appconfig_experiment_definition

appconfigExperimentDefinition.AppconfigExperimentDefinition.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.isTerraformElement"></a>

```python
from cdktn_provider_awscc import appconfig_experiment_definition

appconfigExperimentDefinition.AppconfigExperimentDefinition.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.isTerraformResource"></a>

```python
from cdktn_provider_awscc import appconfig_experiment_definition

appconfigExperimentDefinition.AppconfigExperimentDefinition.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import appconfig_experiment_definition

appconfigExperimentDefinition.AppconfigExperimentDefinition.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a AppconfigExperimentDefinition resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the AppconfigExperimentDefinition to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing AppconfigExperimentDefinition that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appconfig_experiment_definition#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the AppconfigExperimentDefinition to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.applicationId">application_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.control">control</a></code> | <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference">AppconfigExperimentDefinitionControlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.experimentDefinitionId">experiment_definition_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsList">AppconfigExperimentDefinitionTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.treatments">treatments</a></code> | <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsList">AppconfigExperimentDefinitionTreatmentsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.applicationIdentifierInput">application_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.audienceDescriptionInput">audience_description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.audienceRuleInput">audience_rule_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.configurationProfileIdentifierInput">configuration_profile_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.controlInput">control_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControl">AppconfigExperimentDefinitionControl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.environmentIdentifierInput">environment_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.flagKeyInput">flag_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.hypothesisInput">hypothesis_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.launchCriteriaInput">launch_criteria_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTags">AppconfigExperimentDefinitionTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.treatmentsInput">treatments_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatments">AppconfigExperimentDefinitionTreatments</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.applicationIdentifier">application_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.audienceDescription">audience_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.audienceRule">audience_rule</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.configurationProfileIdentifier">configuration_profile_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.environmentIdentifier">environment_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.flagKey">flag_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.hypothesis">hypothesis</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.launchCriteria">launch_criteria</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `application_id`<sup>Required</sup> <a name="application_id" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.applicationId"></a>

```python
application_id: str
```

- *Type:* str

---

##### `control`<sup>Required</sup> <a name="control" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.control"></a>

```python
control: AppconfigExperimentDefinitionControlOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference">AppconfigExperimentDefinitionControlOutputReference</a>

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `experiment_definition_id`<sup>Required</sup> <a name="experiment_definition_id" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.experimentDefinitionId"></a>

```python
experiment_definition_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.tags"></a>

```python
tags: AppconfigExperimentDefinitionTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsList">AppconfigExperimentDefinitionTagsList</a>

---

##### `treatments`<sup>Required</sup> <a name="treatments" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.treatments"></a>

```python
treatments: AppconfigExperimentDefinitionTreatmentsList
```

- *Type:* <a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsList">AppconfigExperimentDefinitionTreatmentsList</a>

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `application_identifier_input`<sup>Optional</sup> <a name="application_identifier_input" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.applicationIdentifierInput"></a>

```python
application_identifier_input: str
```

- *Type:* str

---

##### `audience_description_input`<sup>Optional</sup> <a name="audience_description_input" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.audienceDescriptionInput"></a>

```python
audience_description_input: str
```

- *Type:* str

---

##### `audience_rule_input`<sup>Optional</sup> <a name="audience_rule_input" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.audienceRuleInput"></a>

```python
audience_rule_input: str
```

- *Type:* str

---

##### `configuration_profile_identifier_input`<sup>Optional</sup> <a name="configuration_profile_identifier_input" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.configurationProfileIdentifierInput"></a>

```python
configuration_profile_identifier_input: str
```

- *Type:* str

---

##### `control_input`<sup>Optional</sup> <a name="control_input" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.controlInput"></a>

```python
control_input: IResolvable | AppconfigExperimentDefinitionControl
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControl">AppconfigExperimentDefinitionControl</a>

---

##### `environment_identifier_input`<sup>Optional</sup> <a name="environment_identifier_input" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.environmentIdentifierInput"></a>

```python
environment_identifier_input: str
```

- *Type:* str

---

##### `flag_key_input`<sup>Optional</sup> <a name="flag_key_input" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.flagKeyInput"></a>

```python
flag_key_input: str
```

- *Type:* str

---

##### `hypothesis_input`<sup>Optional</sup> <a name="hypothesis_input" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.hypothesisInput"></a>

```python
hypothesis_input: str
```

- *Type:* str

---

##### `launch_criteria_input`<sup>Optional</sup> <a name="launch_criteria_input" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.launchCriteriaInput"></a>

```python
launch_criteria_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[AppconfigExperimentDefinitionTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTags">AppconfigExperimentDefinitionTags</a>]

---

##### `treatments_input`<sup>Optional</sup> <a name="treatments_input" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.treatmentsInput"></a>

```python
treatments_input: IResolvable | typing.List[AppconfigExperimentDefinitionTreatments]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatments">AppconfigExperimentDefinitionTreatments</a>]

---

##### `application_identifier`<sup>Required</sup> <a name="application_identifier" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.applicationIdentifier"></a>

```python
application_identifier: str
```

- *Type:* str

---

##### `audience_description`<sup>Required</sup> <a name="audience_description" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.audienceDescription"></a>

```python
audience_description: str
```

- *Type:* str

---

##### `audience_rule`<sup>Required</sup> <a name="audience_rule" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.audienceRule"></a>

```python
audience_rule: str
```

- *Type:* str

---

##### `configuration_profile_identifier`<sup>Required</sup> <a name="configuration_profile_identifier" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.configurationProfileIdentifier"></a>

```python
configuration_profile_identifier: str
```

- *Type:* str

---

##### `environment_identifier`<sup>Required</sup> <a name="environment_identifier" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.environmentIdentifier"></a>

```python
environment_identifier: str
```

- *Type:* str

---

##### `flag_key`<sup>Required</sup> <a name="flag_key" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.flagKey"></a>

```python
flag_key: str
```

- *Type:* str

---

##### `hypothesis`<sup>Required</sup> <a name="hypothesis" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.hypothesis"></a>

```python
hypothesis: str
```

- *Type:* str

---

##### `launch_criteria`<sup>Required</sup> <a name="launch_criteria" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.launchCriteria"></a>

```python
launch_criteria: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AppconfigExperimentDefinitionConfig <a name="AppconfigExperimentDefinitionConfig" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.Initializer"></a>

```python
from cdktn_provider_awscc import appconfig_experiment_definition

appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  application_identifier: str,
  audience_rule: str,
  configuration_profile_identifier: str,
  control: AppconfigExperimentDefinitionControl,
  environment_identifier: str,
  flag_key: str,
  name: str,
  treatments: IResolvable | typing.List[AppconfigExperimentDefinitionTreatments],
  audience_description: str = None,
  hypothesis: str = None,
  launch_criteria: str = None,
  tags: IResolvable | typing.List[AppconfigExperimentDefinitionTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.applicationIdentifier">application_identifier</a></code> | <code>str</code> | The application ID, name, or ARN. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.audienceRule">audience_rule</a></code> | <code>str</code> | Rule expression defining the experiment audience. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.configurationProfileIdentifier">configuration_profile_identifier</a></code> | <code>str</code> | The configuration profile ID, name, or ARN. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.control">control</a></code> | <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControl">AppconfigExperimentDefinitionControl</a></code> | The control (baseline) variant. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.environmentIdentifier">environment_identifier</a></code> | <code>str</code> | The environment ID, name, or ARN. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.flagKey">flag_key</a></code> | <code>str</code> | The key of the existing flag in the configuration profile to experiment on. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.name">name</a></code> | <code>str</code> | A name for the experiment definition. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.treatments">treatments</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatments">AppconfigExperimentDefinitionTreatments</a>]</code> | Treatment variants (1-5). |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.audienceDescription">audience_description</a></code> | <code>str</code> | Human-readable description of the audience. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.hypothesis">hypothesis</a></code> | <code>str</code> | The hypothesis of the experiment. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.launchCriteria">launch_criteria</a></code> | <code>str</code> | Criteria for launching the experiment. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTags">AppconfigExperimentDefinitionTags</a>]</code> | Tags to associate with the experiment definition. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `application_identifier`<sup>Required</sup> <a name="application_identifier" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.applicationIdentifier"></a>

```python
application_identifier: str
```

- *Type:* str

The application ID, name, or ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appconfig_experiment_definition#application_identifier AppconfigExperimentDefinition#application_identifier}

---

##### `audience_rule`<sup>Required</sup> <a name="audience_rule" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.audienceRule"></a>

```python
audience_rule: str
```

- *Type:* str

Rule expression defining the experiment audience.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appconfig_experiment_definition#audience_rule AppconfigExperimentDefinition#audience_rule}

---

##### `configuration_profile_identifier`<sup>Required</sup> <a name="configuration_profile_identifier" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.configurationProfileIdentifier"></a>

```python
configuration_profile_identifier: str
```

- *Type:* str

The configuration profile ID, name, or ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appconfig_experiment_definition#configuration_profile_identifier AppconfigExperimentDefinition#configuration_profile_identifier}

---

##### `control`<sup>Required</sup> <a name="control" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.control"></a>

```python
control: AppconfigExperimentDefinitionControl
```

- *Type:* <a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControl">AppconfigExperimentDefinitionControl</a>

The control (baseline) variant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appconfig_experiment_definition#control AppconfigExperimentDefinition#control}

---

##### `environment_identifier`<sup>Required</sup> <a name="environment_identifier" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.environmentIdentifier"></a>

```python
environment_identifier: str
```

- *Type:* str

The environment ID, name, or ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appconfig_experiment_definition#environment_identifier AppconfigExperimentDefinition#environment_identifier}

---

##### `flag_key`<sup>Required</sup> <a name="flag_key" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.flagKey"></a>

```python
flag_key: str
```

- *Type:* str

The key of the existing flag in the configuration profile to experiment on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appconfig_experiment_definition#flag_key AppconfigExperimentDefinition#flag_key}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.name"></a>

```python
name: str
```

- *Type:* str

A name for the experiment definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appconfig_experiment_definition#name AppconfigExperimentDefinition#name}

---

##### `treatments`<sup>Required</sup> <a name="treatments" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.treatments"></a>

```python
treatments: IResolvable | typing.List[AppconfigExperimentDefinitionTreatments]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatments">AppconfigExperimentDefinitionTreatments</a>]

Treatment variants (1-5).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appconfig_experiment_definition#treatments AppconfigExperimentDefinition#treatments}

---

##### `audience_description`<sup>Optional</sup> <a name="audience_description" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.audienceDescription"></a>

```python
audience_description: str
```

- *Type:* str

Human-readable description of the audience.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appconfig_experiment_definition#audience_description AppconfigExperimentDefinition#audience_description}

---

##### `hypothesis`<sup>Optional</sup> <a name="hypothesis" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.hypothesis"></a>

```python
hypothesis: str
```

- *Type:* str

The hypothesis of the experiment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appconfig_experiment_definition#hypothesis AppconfigExperimentDefinition#hypothesis}

---

##### `launch_criteria`<sup>Optional</sup> <a name="launch_criteria" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.launchCriteria"></a>

```python
launch_criteria: str
```

- *Type:* str

Criteria for launching the experiment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appconfig_experiment_definition#launch_criteria AppconfigExperimentDefinition#launch_criteria}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[AppconfigExperimentDefinitionTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTags">AppconfigExperimentDefinitionTags</a>]

Tags to associate with the experiment definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appconfig_experiment_definition#tags AppconfigExperimentDefinition#tags}

---

### AppconfigExperimentDefinitionControl <a name="AppconfigExperimentDefinitionControl" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControl"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControl.Initializer"></a>

```python
from cdktn_provider_awscc import appconfig_experiment_definition

appconfigExperimentDefinition.AppconfigExperimentDefinitionControl(
  enabled: bool | IResolvable,
  weight: typing.Union[int, float],
  attribute_values: IResolvable | typing.Mapping[AppconfigExperimentDefinitionControlAttributeValues] = None,
  description: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControl.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether the flag is enabled for this variant. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControl.property.weight">weight</a></code> | <code>typing.Union[int, float]</code> | Traffic weight percentage. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControl.property.attributeValues">attribute_values</a></code> | <code>cdktn.IResolvable \| typing.Mapping[<a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValues">AppconfigExperimentDefinitionControlAttributeValues</a>]</code> | Map of attribute name to attribute value. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControl.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appconfig_experiment_definition#description AppconfigExperimentDefinition#description}. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControl.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether the flag is enabled for this variant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appconfig_experiment_definition#enabled AppconfigExperimentDefinition#enabled}

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControl.property.weight"></a>

```python
weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Traffic weight percentage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appconfig_experiment_definition#weight AppconfigExperimentDefinition#weight}

---

##### `attribute_values`<sup>Optional</sup> <a name="attribute_values" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControl.property.attributeValues"></a>

```python
attribute_values: IResolvable | typing.Mapping[AppconfigExperimentDefinitionControlAttributeValues]
```

- *Type:* cdktn.IResolvable | typing.Mapping[<a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValues">AppconfigExperimentDefinitionControlAttributeValues</a>]

Map of attribute name to attribute value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appconfig_experiment_definition#attribute_values AppconfigExperimentDefinition#attribute_values}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControl.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appconfig_experiment_definition#description AppconfigExperimentDefinition#description}.

---

### AppconfigExperimentDefinitionControlAttributeValues <a name="AppconfigExperimentDefinitionControlAttributeValues" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValues"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValues.Initializer"></a>

```python
from cdktn_provider_awscc import appconfig_experiment_definition

appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValues(
  boolean_value: bool | IResolvable = None,
  number_array: typing.List[typing.Union[int, float]] = None,
  number_value: typing.Union[int, float] = None,
  string_array: typing.List[str] = None,
  string_value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValues.property.booleanValue">boolean_value</a></code> | <code>bool \| cdktn.IResolvable</code> | A boolean value. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValues.property.numberArray">number_array</a></code> | <code>typing.List[typing.Union[int, float]]</code> | An array of numeric values. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValues.property.numberValue">number_value</a></code> | <code>typing.Union[int, float]</code> | A numeric value. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValues.property.stringArray">string_array</a></code> | <code>typing.List[str]</code> | An array of string values. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValues.property.stringValue">string_value</a></code> | <code>str</code> | A string value. |

---

##### `boolean_value`<sup>Optional</sup> <a name="boolean_value" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValues.property.booleanValue"></a>

```python
boolean_value: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

A boolean value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appconfig_experiment_definition#boolean_value AppconfigExperimentDefinition#boolean_value}

---

##### `number_array`<sup>Optional</sup> <a name="number_array" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValues.property.numberArray"></a>

```python
number_array: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

An array of numeric values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appconfig_experiment_definition#number_array AppconfigExperimentDefinition#number_array}

---

##### `number_value`<sup>Optional</sup> <a name="number_value" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValues.property.numberValue"></a>

```python
number_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

A numeric value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appconfig_experiment_definition#number_value AppconfigExperimentDefinition#number_value}

---

##### `string_array`<sup>Optional</sup> <a name="string_array" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValues.property.stringArray"></a>

```python
string_array: typing.List[str]
```

- *Type:* typing.List[str]

An array of string values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appconfig_experiment_definition#string_array AppconfigExperimentDefinition#string_array}

---

##### `string_value`<sup>Optional</sup> <a name="string_value" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValues.property.stringValue"></a>

```python
string_value: str
```

- *Type:* str

A string value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appconfig_experiment_definition#string_value AppconfigExperimentDefinition#string_value}

---

### AppconfigExperimentDefinitionTags <a name="AppconfigExperimentDefinitionTags" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTags.Initializer"></a>

```python
from cdktn_provider_awscc import appconfig_experiment_definition

appconfigExperimentDefinition.AppconfigExperimentDefinitionTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTags.property.key">key</a></code> | <code>str</code> | The tag key. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTags.property.value">value</a></code> | <code>str</code> | The tag value. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTags.property.key"></a>

```python
key: str
```

- *Type:* str

The tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appconfig_experiment_definition#key AppconfigExperimentDefinition#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTags.property.value"></a>

```python
value: str
```

- *Type:* str

The tag value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appconfig_experiment_definition#value AppconfigExperimentDefinition#value}

---

### AppconfigExperimentDefinitionTreatments <a name="AppconfigExperimentDefinitionTreatments" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatments"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatments.Initializer"></a>

```python
from cdktn_provider_awscc import appconfig_experiment_definition

appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatments(
  enabled: bool | IResolvable,
  weight: typing.Union[int, float],
  attribute_values: IResolvable | typing.Mapping[AppconfigExperimentDefinitionTreatmentsAttributeValues] = None,
  description: str = None,
  key: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatments.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether the flag is enabled for this variant. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatments.property.weight">weight</a></code> | <code>typing.Union[int, float]</code> | Traffic weight percentage. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatments.property.attributeValues">attribute_values</a></code> | <code>cdktn.IResolvable \| typing.Mapping[<a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValues">AppconfigExperimentDefinitionTreatmentsAttributeValues</a>]</code> | Map of attribute name to attribute value. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatments.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appconfig_experiment_definition#description AppconfigExperimentDefinition#description}. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatments.property.key">key</a></code> | <code>str</code> | The treatment key (read-only, auto-generated by service). |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatments.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether the flag is enabled for this variant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appconfig_experiment_definition#enabled AppconfigExperimentDefinition#enabled}

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatments.property.weight"></a>

```python
weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Traffic weight percentage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appconfig_experiment_definition#weight AppconfigExperimentDefinition#weight}

---

##### `attribute_values`<sup>Optional</sup> <a name="attribute_values" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatments.property.attributeValues"></a>

```python
attribute_values: IResolvable | typing.Mapping[AppconfigExperimentDefinitionTreatmentsAttributeValues]
```

- *Type:* cdktn.IResolvable | typing.Mapping[<a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValues">AppconfigExperimentDefinitionTreatmentsAttributeValues</a>]

Map of attribute name to attribute value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appconfig_experiment_definition#attribute_values AppconfigExperimentDefinition#attribute_values}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatments.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appconfig_experiment_definition#description AppconfigExperimentDefinition#description}.

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatments.property.key"></a>

```python
key: str
```

- *Type:* str

The treatment key (read-only, auto-generated by service).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appconfig_experiment_definition#key AppconfigExperimentDefinition#key}

---

### AppconfigExperimentDefinitionTreatmentsAttributeValues <a name="AppconfigExperimentDefinitionTreatmentsAttributeValues" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValues"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValues.Initializer"></a>

```python
from cdktn_provider_awscc import appconfig_experiment_definition

appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValues(
  boolean_value: bool | IResolvable = None,
  number_array: typing.List[typing.Union[int, float]] = None,
  number_value: typing.Union[int, float] = None,
  string_array: typing.List[str] = None,
  string_value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValues.property.booleanValue">boolean_value</a></code> | <code>bool \| cdktn.IResolvable</code> | A boolean value. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValues.property.numberArray">number_array</a></code> | <code>typing.List[typing.Union[int, float]]</code> | An array of numeric values. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValues.property.numberValue">number_value</a></code> | <code>typing.Union[int, float]</code> | A numeric value. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValues.property.stringArray">string_array</a></code> | <code>typing.List[str]</code> | An array of string values. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValues.property.stringValue">string_value</a></code> | <code>str</code> | A string value. |

---

##### `boolean_value`<sup>Optional</sup> <a name="boolean_value" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValues.property.booleanValue"></a>

```python
boolean_value: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

A boolean value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appconfig_experiment_definition#boolean_value AppconfigExperimentDefinition#boolean_value}

---

##### `number_array`<sup>Optional</sup> <a name="number_array" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValues.property.numberArray"></a>

```python
number_array: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

An array of numeric values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appconfig_experiment_definition#number_array AppconfigExperimentDefinition#number_array}

---

##### `number_value`<sup>Optional</sup> <a name="number_value" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValues.property.numberValue"></a>

```python
number_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

A numeric value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appconfig_experiment_definition#number_value AppconfigExperimentDefinition#number_value}

---

##### `string_array`<sup>Optional</sup> <a name="string_array" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValues.property.stringArray"></a>

```python
string_array: typing.List[str]
```

- *Type:* typing.List[str]

An array of string values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appconfig_experiment_definition#string_array AppconfigExperimentDefinition#string_array}

---

##### `string_value`<sup>Optional</sup> <a name="string_value" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValues.property.stringValue"></a>

```python
string_value: str
```

- *Type:* str

A string value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appconfig_experiment_definition#string_value AppconfigExperimentDefinition#string_value}

---

## Classes <a name="Classes" id="Classes"></a>

### AppconfigExperimentDefinitionControlAttributeValuesMap <a name="AppconfigExperimentDefinitionControlAttributeValuesMap" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesMap.Initializer"></a>

```python
from cdktn_provider_awscc import appconfig_experiment_definition

appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesMap(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesMap.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesMap.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesMap.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesMap.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesMap.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesMap.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesMap.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesMap.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesMap.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesMap.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesMap.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesMap.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesMap.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesMap.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesMap.get"></a>

```python
def get(
  key: str
) -> AppconfigExperimentDefinitionControlAttributeValuesOutputReference
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesMap.get.parameter.key"></a>

- *Type:* str

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesMap.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesMap.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesMap.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.Mapping[<a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValues">AppconfigExperimentDefinitionControlAttributeValues</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesMap.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesMap.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesMap.property.internalValue"></a>

```python
internal_value: IResolvable | typing.Mapping[AppconfigExperimentDefinitionControlAttributeValues]
```

- *Type:* cdktn.IResolvable | typing.Mapping[<a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValues">AppconfigExperimentDefinitionControlAttributeValues</a>]

---


### AppconfigExperimentDefinitionControlAttributeValuesOutputReference <a name="AppconfigExperimentDefinitionControlAttributeValuesOutputReference" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import appconfig_experiment_definition

appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_key: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.Initializer.parameter.complexObjectKey">complex_object_key</a></code> | <code>str</code> | the key of this item in the map. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_key`<sup>Required</sup> <a name="complex_object_key" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* str

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.resetBooleanValue">reset_boolean_value</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.resetNumberArray">reset_number_array</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.resetNumberValue">reset_number_value</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.resetStringArray">reset_string_array</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.resetStringValue">reset_string_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_boolean_value` <a name="reset_boolean_value" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.resetBooleanValue"></a>

```python
def reset_boolean_value() -> None
```

##### `reset_number_array` <a name="reset_number_array" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.resetNumberArray"></a>

```python
def reset_number_array() -> None
```

##### `reset_number_value` <a name="reset_number_value" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.resetNumberValue"></a>

```python
def reset_number_value() -> None
```

##### `reset_string_array` <a name="reset_string_array" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.resetStringArray"></a>

```python
def reset_string_array() -> None
```

##### `reset_string_value` <a name="reset_string_value" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.resetStringValue"></a>

```python
def reset_string_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.property.booleanValueInput">boolean_value_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.property.numberArrayInput">number_array_input</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.property.numberValueInput">number_value_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.property.stringArrayInput">string_array_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.property.stringValueInput">string_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.property.booleanValue">boolean_value</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.property.numberArray">number_array</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.property.numberValue">number_value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.property.stringArray">string_array</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.property.stringValue">string_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValues">AppconfigExperimentDefinitionControlAttributeValues</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `boolean_value_input`<sup>Optional</sup> <a name="boolean_value_input" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.property.booleanValueInput"></a>

```python
boolean_value_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `number_array_input`<sup>Optional</sup> <a name="number_array_input" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.property.numberArrayInput"></a>

```python
number_array_input: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `number_value_input`<sup>Optional</sup> <a name="number_value_input" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.property.numberValueInput"></a>

```python
number_value_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `string_array_input`<sup>Optional</sup> <a name="string_array_input" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.property.stringArrayInput"></a>

```python
string_array_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `string_value_input`<sup>Optional</sup> <a name="string_value_input" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.property.stringValueInput"></a>

```python
string_value_input: str
```

- *Type:* str

---

##### `boolean_value`<sup>Required</sup> <a name="boolean_value" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.property.booleanValue"></a>

```python
boolean_value: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `number_array`<sup>Required</sup> <a name="number_array" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.property.numberArray"></a>

```python
number_array: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `number_value`<sup>Required</sup> <a name="number_value" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.property.numberValue"></a>

```python
number_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `string_array`<sup>Required</sup> <a name="string_array" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.property.stringArray"></a>

```python
string_array: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `string_value`<sup>Required</sup> <a name="string_value" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.property.stringValue"></a>

```python
string_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AppconfigExperimentDefinitionControlAttributeValues
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValues">AppconfigExperimentDefinitionControlAttributeValues</a>

---


### AppconfigExperimentDefinitionControlOutputReference <a name="AppconfigExperimentDefinitionControlOutputReference" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import appconfig_experiment_definition

appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.putAttributeValues">put_attribute_values</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.resetAttributeValues">reset_attribute_values</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.resetDescription">reset_description</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_attribute_values` <a name="put_attribute_values" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.putAttributeValues"></a>

```python
def put_attribute_values(
  value: IResolvable | typing.Mapping[AppconfigExperimentDefinitionControlAttributeValues]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.putAttributeValues.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.Mapping[<a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValues">AppconfigExperimentDefinitionControlAttributeValues</a>]

---

##### `reset_attribute_values` <a name="reset_attribute_values" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.resetAttributeValues"></a>

```python
def reset_attribute_values() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.property.attributeValues">attribute_values</a></code> | <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesMap">AppconfigExperimentDefinitionControlAttributeValuesMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.property.attributeValuesInput">attribute_values_input</a></code> | <code>cdktn.IResolvable \| typing.Mapping[<a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValues">AppconfigExperimentDefinitionControlAttributeValues</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.property.weightInput">weight_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.property.weight">weight</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControl">AppconfigExperimentDefinitionControl</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `attribute_values`<sup>Required</sup> <a name="attribute_values" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.property.attributeValues"></a>

```python
attribute_values: AppconfigExperimentDefinitionControlAttributeValuesMap
```

- *Type:* <a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesMap">AppconfigExperimentDefinitionControlAttributeValuesMap</a>

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `attribute_values_input`<sup>Optional</sup> <a name="attribute_values_input" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.property.attributeValuesInput"></a>

```python
attribute_values_input: IResolvable | typing.Mapping[AppconfigExperimentDefinitionControlAttributeValues]
```

- *Type:* cdktn.IResolvable | typing.Mapping[<a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValues">AppconfigExperimentDefinitionControlAttributeValues</a>]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `weight_input`<sup>Optional</sup> <a name="weight_input" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.property.weightInput"></a>

```python
weight_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.property.weight"></a>

```python
weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AppconfigExperimentDefinitionControl
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControl">AppconfigExperimentDefinitionControl</a>

---


### AppconfigExperimentDefinitionTagsList <a name="AppconfigExperimentDefinitionTagsList" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import appconfig_experiment_definition

appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AppconfigExperimentDefinitionTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTags">AppconfigExperimentDefinitionTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[AppconfigExperimentDefinitionTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTags">AppconfigExperimentDefinitionTags</a>]

---


### AppconfigExperimentDefinitionTagsOutputReference <a name="AppconfigExperimentDefinitionTagsOutputReference" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import appconfig_experiment_definition

appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTags">AppconfigExperimentDefinitionTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AppconfigExperimentDefinitionTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTags">AppconfigExperimentDefinitionTags</a>

---


### AppconfigExperimentDefinitionTreatmentsAttributeValuesMap <a name="AppconfigExperimentDefinitionTreatmentsAttributeValuesMap" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesMap.Initializer"></a>

```python
from cdktn_provider_awscc import appconfig_experiment_definition

appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesMap(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesMap.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesMap.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesMap.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesMap.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesMap.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesMap.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesMap.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesMap.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesMap.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesMap.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesMap.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesMap.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesMap.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesMap.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesMap.get"></a>

```python
def get(
  key: str
) -> AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesMap.get.parameter.key"></a>

- *Type:* str

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesMap.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesMap.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesMap.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.Mapping[<a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValues">AppconfigExperimentDefinitionTreatmentsAttributeValues</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesMap.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesMap.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesMap.property.internalValue"></a>

```python
internal_value: IResolvable | typing.Mapping[AppconfigExperimentDefinitionTreatmentsAttributeValues]
```

- *Type:* cdktn.IResolvable | typing.Mapping[<a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValues">AppconfigExperimentDefinitionTreatmentsAttributeValues</a>]

---


### AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference <a name="AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import appconfig_experiment_definition

appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_key: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.Initializer.parameter.complexObjectKey">complex_object_key</a></code> | <code>str</code> | the key of this item in the map. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_key`<sup>Required</sup> <a name="complex_object_key" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* str

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.resetBooleanValue">reset_boolean_value</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.resetNumberArray">reset_number_array</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.resetNumberValue">reset_number_value</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.resetStringArray">reset_string_array</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.resetStringValue">reset_string_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_boolean_value` <a name="reset_boolean_value" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.resetBooleanValue"></a>

```python
def reset_boolean_value() -> None
```

##### `reset_number_array` <a name="reset_number_array" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.resetNumberArray"></a>

```python
def reset_number_array() -> None
```

##### `reset_number_value` <a name="reset_number_value" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.resetNumberValue"></a>

```python
def reset_number_value() -> None
```

##### `reset_string_array` <a name="reset_string_array" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.resetStringArray"></a>

```python
def reset_string_array() -> None
```

##### `reset_string_value` <a name="reset_string_value" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.resetStringValue"></a>

```python
def reset_string_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.property.booleanValueInput">boolean_value_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.property.numberArrayInput">number_array_input</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.property.numberValueInput">number_value_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.property.stringArrayInput">string_array_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.property.stringValueInput">string_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.property.booleanValue">boolean_value</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.property.numberArray">number_array</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.property.numberValue">number_value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.property.stringArray">string_array</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.property.stringValue">string_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValues">AppconfigExperimentDefinitionTreatmentsAttributeValues</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `boolean_value_input`<sup>Optional</sup> <a name="boolean_value_input" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.property.booleanValueInput"></a>

```python
boolean_value_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `number_array_input`<sup>Optional</sup> <a name="number_array_input" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.property.numberArrayInput"></a>

```python
number_array_input: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `number_value_input`<sup>Optional</sup> <a name="number_value_input" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.property.numberValueInput"></a>

```python
number_value_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `string_array_input`<sup>Optional</sup> <a name="string_array_input" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.property.stringArrayInput"></a>

```python
string_array_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `string_value_input`<sup>Optional</sup> <a name="string_value_input" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.property.stringValueInput"></a>

```python
string_value_input: str
```

- *Type:* str

---

##### `boolean_value`<sup>Required</sup> <a name="boolean_value" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.property.booleanValue"></a>

```python
boolean_value: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `number_array`<sup>Required</sup> <a name="number_array" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.property.numberArray"></a>

```python
number_array: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `number_value`<sup>Required</sup> <a name="number_value" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.property.numberValue"></a>

```python
number_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `string_array`<sup>Required</sup> <a name="string_array" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.property.stringArray"></a>

```python
string_array: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `string_value`<sup>Required</sup> <a name="string_value" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.property.stringValue"></a>

```python
string_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AppconfigExperimentDefinitionTreatmentsAttributeValues
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValues">AppconfigExperimentDefinitionTreatmentsAttributeValues</a>

---


### AppconfigExperimentDefinitionTreatmentsList <a name="AppconfigExperimentDefinitionTreatmentsList" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsList.Initializer"></a>

```python
from cdktn_provider_awscc import appconfig_experiment_definition

appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AppconfigExperimentDefinitionTreatmentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatments">AppconfigExperimentDefinitionTreatments</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[AppconfigExperimentDefinitionTreatments]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatments">AppconfigExperimentDefinitionTreatments</a>]

---


### AppconfigExperimentDefinitionTreatmentsOutputReference <a name="AppconfigExperimentDefinitionTreatmentsOutputReference" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import appconfig_experiment_definition

appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.putAttributeValues">put_attribute_values</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.resetAttributeValues">reset_attribute_values</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.resetKey">reset_key</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_attribute_values` <a name="put_attribute_values" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.putAttributeValues"></a>

```python
def put_attribute_values(
  value: IResolvable | typing.Mapping[AppconfigExperimentDefinitionTreatmentsAttributeValues]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.putAttributeValues.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.Mapping[<a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValues">AppconfigExperimentDefinitionTreatmentsAttributeValues</a>]

---

##### `reset_attribute_values` <a name="reset_attribute_values" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.resetAttributeValues"></a>

```python
def reset_attribute_values() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.property.attributeValues">attribute_values</a></code> | <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesMap">AppconfigExperimentDefinitionTreatmentsAttributeValuesMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.property.attributeValuesInput">attribute_values_input</a></code> | <code>cdktn.IResolvable \| typing.Mapping[<a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValues">AppconfigExperimentDefinitionTreatmentsAttributeValues</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.property.weightInput">weight_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.property.weight">weight</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatments">AppconfigExperimentDefinitionTreatments</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `attribute_values`<sup>Required</sup> <a name="attribute_values" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.property.attributeValues"></a>

```python
attribute_values: AppconfigExperimentDefinitionTreatmentsAttributeValuesMap
```

- *Type:* <a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesMap">AppconfigExperimentDefinitionTreatmentsAttributeValuesMap</a>

---

##### `attribute_values_input`<sup>Optional</sup> <a name="attribute_values_input" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.property.attributeValuesInput"></a>

```python
attribute_values_input: IResolvable | typing.Mapping[AppconfigExperimentDefinitionTreatmentsAttributeValues]
```

- *Type:* cdktn.IResolvable | typing.Mapping[<a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValues">AppconfigExperimentDefinitionTreatmentsAttributeValues</a>]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `weight_input`<sup>Optional</sup> <a name="weight_input" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.property.weightInput"></a>

```python
weight_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.property.weight"></a>

```python
weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AppconfigExperimentDefinitionTreatments
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatments">AppconfigExperimentDefinitionTreatments</a>

---



